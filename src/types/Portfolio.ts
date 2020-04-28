type CategorySlug = string

export default interface Portfolio {
  label: string;
  slug: string;
  thumbnail: string;
  fullPicture: string;
  description?: string;
  category?: CategorySlug;
}
