export const encodeURL = (url) => {
  return url.split(" ").join("-");
};

export const decodeURL = (url) => {
  return url.split("-").join(" ");
};
