/**
 * Represents a page object with slug and title.
 * @typedef {Object} Page
 * @property {string} slug - The slug for the page, used in the URL.
 * @property {string} title - The title of the page, displayed in navigation.
 */
export type Page = {
  slug: string;
  title: string;
};

/**
 * Represents the data passed to the layout component.
 * @typedef {Object} LayoutData
 * @property {Page[]} pages - An array of pages for navigation.
 */
export type LayoutData = {
  pages: Page[];
};
