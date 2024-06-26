// utils/slugify.ts
export function slugify(text: string | undefined | null): string {
  if (!text) {
    return '';
  }

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')  // Replace spaces with -
    .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
    .replace(/\-\-+/g, '-')  // Replace multiple - with single -
    .replace(/^-+/, '')  // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
