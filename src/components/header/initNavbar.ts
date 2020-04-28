import throttle from "~/utils/throttle";

/**
 * Automatically scroll to a specific element in a page
 *
 * @param {HTMLElement} sectionEl - section element to scroll to
 * @param {Object} options
 * @param {number} [options.offset=0] - offset used to prevent the window from sticking exactly to the top of the section
 */
function scrollToSection(sectionEl: HTMLElement, { offset = 0 } = {}) {
  const navbarHeight = useNavbarHeight();

  window.scroll({
    top: sectionEl.offsetTop - navbarHeight + offset,
    behavior: "smooth",
  });
}

function styleHeaderOnScroll() {
  function toggleHeaderStyle() {
    // to ensure the animation toggles BEFORE reaching the about section
    const currentPos = window.scrollY;
    const navbar = document.getElementById("navbar");
    const toggleMethod = currentPos > 1 ? "add" : "remove";
    const classModifier = "has-reached-main";

    navbar.classList[toggleMethod](classModifier);
  }

  window.addEventListener("scroll", throttle(toggleHeaderStyle, 200));
}

/**
 * Get the section the user is currently in.
 * Useful to update the navigation bar based on scrolling position.
 * Prerequisite: document must have more than one section
 *
 * @param {Object} options - configurable options
 * @param {number} [options.offset=-120] - offset used to prevent the window from sticking exactly to the top of the section
 * @return {HTMLElement} The <section> the user is currently in
 */
function getNavLinkForActiveSection({ offset = -120 } = {}) {
  // TODO: optimize this, there's no need to get sections every time, only once
  let [activeSection, ...nextSections] = Array.from(
    document.querySelectorAll("section")
  );
  const nNextSections = nextSections.length;
  const yPos = window.scrollY;

  for (let i = 0; i < nNextSections; i++) {
    const nextSection = nextSections[i];
    const nextSectionPos =
      document.documentElement.scrollTop +
      nextSection.getBoundingClientRect().y;

    if (yPos <= nextSectionPos + offset) {
      break;
    }

    activeSection = nextSection;
  }

  return getNavLink(activeSection);
}

function getNavLinks(): HTMLElement[] {
  return Array.from(document.querySelectorAll("[data-section-link]"));
}

/*
 *
 * @return {HTMLElement} - an array of links that go to page sections
 */
function getNavLink(section: HTMLElement) {
  return document.querySelector(`[data-section-link][href="#${section.id}"]`);
}

/**
 * @return {string} CSS class for an active navigation link
 */
function getActiveNavClass() {
  return "is-active";
}

function setActiveNavLink() {
  const activeClass = getActiveNavClass();
  const navLinks = getNavLinks();
  const activeLink = getNavLinkForActiveSection();

  // unset active link first
  navLinks.map((navLink) => navLink.classList.remove(activeClass));
  activeLink && activeLink.classList.add(activeClass);
}

/**
 * set navigation link scrolling behavior
 */
function initNavLinkNavigation() {
  getNavLinks().forEach((navLink) =>
    navLink.addEventListener("click", (e: Event) => {
      useNavbar().classList.remove("is-expanded-on-mobile");
      e.preventDefault();
      // TODO throw error if link has no hash
      const { href } = <HTMLLinkElement>e.target;

      scrollToSection(document.getElementById(href.split("#")[1]));
    })
  );
}

/**
 * sets the navigation links for the section the user is currently in, if applicable
 */
function initScrollSpy() {
  // TODO: set a single throttle scroll, where the header is updated along with the nav items
  window.addEventListener("scroll", throttle(setActiveNavLink, 200));
}

const useNavbar = (() => {
  const navbar = document.getElementById("navbar");

  return () => navbar;
})();

const useNavbarHeight = (() => {
  const navbar = useNavbar();
  let height = navbar.offsetHeight;

  window.addEventListener(
    "resize",
    throttle(() => {
      height = navbar.offsetHeight;
    })
  );

  return () => height;
})();

function initMenuToggler() {
  const navbar = document.getElementById("navbar");

  document
    .querySelector("[data-toggle-menu]")
    .addEventListener("click", function () {
      this.setAttribute("aria-expanded", this.getAttribute("aria-expanded"));
      navbar.classList.toggle("is-expanded-on-mobile");
    });
}

export default () => {
  styleHeaderOnScroll();
  initNavLinkNavigation();
  initScrollSpy();
  initMenuToggler();
};
