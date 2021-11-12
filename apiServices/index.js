import Axios from "axios";

export const MAILCHIMP_URL =
  "https://beyonderissolutions.us5.list-manage.com/subscribe/post?u=14a1aaadc1e44eff8cbaf347d&amp;id=febb217fb4";

export const API_URL = "https://admin.beyonderissolutions.com";

const baseUrl = API_URL + "/api";

Axios.defaults.baseURL = baseUrl;

export const getHeaderData = async () => {
  const { data } = await Axios.get("/widgets/header");
  return data;
};

export const getFooterData = async () => {
  const { data } = await Axios.get("/widgets/footer");
  return data;
};

export const getHomePageData = async () => {
  const { data } = await Axios.get("/pages/home");
  return data;
};

export const getContactPageData = async () => {
  const { data } = await Axios.get("/pages/contact");
  return data;
};

export const getServices = async () => {
  const { data } = await Axios.get("/pages/services");
  return data;
};

export const getServiceDetails = async (title) => {
  const { data } = await Axios.get(`/pages/services/${title}`);
  return data;
};

export const getCaseStudyData = async () => {
  const { data } = await Axios.get("/pages/case-study");
  return data;
};

export const getCaseStudyDetail = async (name) => {
  const { data } = await Axios.get(`/pages/case-study/${name}`);
  return data;
};

export const getAboutPageData = async () => {
  const { data } = await Axios.get("/pages/about");
  return data;
};

export const postContactFormData = async (contactForm) => {
  const { data } = await Axios.post("/pages/contact", contactForm);
  return data;
};

export const getBlogsData = async () => {
  const { data } = await Axios.get("/pages/blog");
  return data;
};

export const getBlogDetails = async (title) => {
  const { data } = await Axios.get(`/pages/blog/${title}`);
  return data;
};
