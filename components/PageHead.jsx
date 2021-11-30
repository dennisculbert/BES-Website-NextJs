import PropTypes from "prop-types";
import Head from "next/head";

function PageHead({ pageTitle, pageDescription, pageURL, pageImageURL }) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content="it company Dubai, software development company Dubai, website development Dubai, website development company Dubai, web development company in UAE"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Usman" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={pageURL} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImageURL} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageURL} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImageURL} />
    </Head>
  );
}

PageHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  pageURL: PropTypes.string.isRequired,
  pageImageURL: PropTypes.string.isRequired,
};

export default PageHead;
