import PropTypes from "prop-types";
import Head from "next/head";

function PageHead({ pageMeta, pageURL, pageImageURL }) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageMeta?.title}</title>
      <meta name="title" content={pageMeta?.title} />
      <meta name="description" content={pageMeta?.description} />
      <meta name="keywords" content={pageMeta?.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Usman" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={pageURL} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageMeta?.title} />
      <meta property="og:description" content={pageMeta?.description} />
      <meta property="og:image" content={pageImageURL} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageURL} />
      <meta property="twitter:title" content={pageMeta?.title} />
      <meta property="twitter:description" content={pageMeta?.description} />
      <meta property="twitter:image" content={pageImageURL} />
    </Head>
  );
}

PageHead.propTypes = {
  pageMeta: PropTypes.object.isRequired,
  pageURL: PropTypes.string.isRequired,
  pageImageURL: PropTypes.string.isRequired,
};

export default PageHead;
