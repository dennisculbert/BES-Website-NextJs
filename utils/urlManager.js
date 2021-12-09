export const encodeURL = (url) => url.split(" ").join("-");

export const decodeURL = (url) => url.split("-").join(" ");
