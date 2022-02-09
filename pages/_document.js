/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from "next/document";

const jsonSchema1 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beyond Eris Solutions",
  alternateName: "BES",
  url: "https://beyonderissolutions.com/",
  logo: "https://admin.beyonderissolutions.com/media/images/header/logo.webp",
  sameAs: [
    "https://www.facebook.com/BeyondErisSolutions",
    "https://twitter.com/BeyondErisSol",
    "https://www.instagram.com/beyonderissolution",
    "https://www.linkedin.com/company/beyond-eris-solutions",
    "https://www.pinterest.com/beyonderissolutions/",
    "https://beyonderissolutions.com/",
  ],
};

const jsonSchema2 = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Beyond Eris Solutions",
  url: "https://beyonderissolutions.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://beyonderissolutions.com/blog{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonSchema3 = {
  "@context": "https://schema.org/",
  "@type": "ImageObject",
  "@id": "https://beyonderissolutions.com/#logo",
  inLanguage: "en-US",
  url: "https://beyonderissolutions.com/images/beyond_logo.png",
  width: 92,
  height: 30,
  caption: "Beyond Eris Solutions",
  image: { "@id": "https://beyonderissolutions.com/#logo" },
};

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema3) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
