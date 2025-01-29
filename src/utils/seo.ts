interface SEOProps {
  title?: string;
  description?: string;
}

export const updateSEO = ({ title, description }: SEOProps) => {
  // Update title
  if (title) {
    document.title = `${title} | bemobiles.com`;
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (description && metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};