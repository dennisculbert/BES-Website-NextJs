const extractContent = (htmlString) => htmlString.replace(/<[^>]+>/g, "");

export default extractContent;
