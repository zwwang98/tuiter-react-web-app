import PostListItem from "./PostListItem.js";
import posts from "./posts.js";

const PostList = () => {
  return `
  ${posts
    .map((post) => {
      return PostListItem(post);
    })
    .join("")}
  `;
};

export default PostList;
