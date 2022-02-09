import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TumblrShareButton,
  TumblrIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import { API_URL } from "../../apiServices";

const BlogIcon = ({ blogSlug, blogTitle, blogImage }) => {
  const blogURL = `https://beyonderissolutions.com/blog/${blogSlug}`;
  const blogImageURL = API_URL + blogImage.url;

  return (
    <>
      <div className=" blog-icon d-flex  align-items-baseline mt-5">
        <div>
          <p>Share</p>
        </div>
        <div className="ml-4">
          <FacebookShareButton url={blogURL} quote={blogTitle}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="ml-2">
          <TwitterShareButton url={blogURL} title={blogTitle}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className="ml-2">
          <LinkedinShareButton url={blogURL}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
        <div className="ml-2">
          <PinterestShareButton url={blogURL} media={blogImageURL}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>
        <div className="ml-2">
          <TumblrShareButton url={blogURL} title={blogTitle}>
            <TumblrIcon size={32} round />
          </TumblrShareButton>
        </div>
        <div className="ml-2">
          <RedditShareButton
            url={blogURL}
            title={blogTitle}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
      </div>
    </>
  );
};

BlogIcon.propTypes = {
  blogSlug: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogImage: PropTypes.object.isRequired,
};

export default BlogIcon;
