const PostSummaryItem = (post) => {
  return `
  <li
    class="list-group-item d-flex justify-content-between align-items-center mb-2 wd-border-0"
  >
    <div>
      <div class="fs-6 text-muted">${post.topic}</div>
      <div class="fs-6">
        <span class="fw-bold">${post.userName}</span>
        <i class="fa fa-circle-check"></i>
        <span class="text-muted"> - ${post.time}</span>
      </div>
      <div class="fs-6 fw-bold">
        ${post.title}
      </div>
      <!-- <div class="fs-6 text-muted">${post.tweets} Tweets</div> -->
    </div>
    <img
      src=${post.image}
      alt=""
      width="120px"
      class="rounded-3"
    />
  </li>
  `;
};

export default PostSummaryItem;
