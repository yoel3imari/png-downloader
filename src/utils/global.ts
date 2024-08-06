export const toSlug = (tag: string) => {
  return tag.toLowerCase().split(' ').join('-')
}