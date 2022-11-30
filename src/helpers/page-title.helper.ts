const SITE_NAME = "Subastia";
const SITE_SLOGAN = "";

export const pageTitle = (title?: string) => {
  document.title = title
    ? `${title} - ${SITE_NAME}`
    : `${SITE_NAME} - ${SITE_SLOGAN}`;
};
