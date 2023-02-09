const PostListItem = (post) => {
  return `
  <div class="card text-white rounded-0 bg-black border-1 border-secondary">
    <div class="card-body">
      <div class="d-flex justify-content-start">
        <img
          src=${post.avatarIcon}
          alt=""
          width="48px"
          height="48px"
          class="me-2 rounded-circle"
        />
        <div>
          <div class="d-flex">
            <h6 class="card-title me-1">${post.userName}</h6>
            <i class="fa fa-circle-check me-2"></i>
            <div class="text-dark me-2">@${post.handle}</div>
            <div class="text-dark">- ${post.time}</div>
          </div>
          <p class="card-text">
            ${addLinkToHandle(post.postText)}
            ${
              post.hasPostLink
                ? `<a href=${post.postLink} class="text-decoration-none">${post.postLink}</a>`
                : ""
            }
          </p>

          <!-- link card in post -->
          ${
            post.hasLinkCard
              ? `
            <div
              class="card border-1 border-secondary mb-3 btn p-0 text-start"
              href="#"
            >
              <img
                src=${post.linkCardImage}
                class="card-img-top"
                alt="..."
                maxHeight="200px"
                width
              />
              <div class="card-body">
                <h6 class="">${post.linkCardTitle}</h6>
                <div class="card-text text-dark">
                  ${post.linkCardText}
                </div>
                <div class="text-dark d-flex align-items-center">
                  <i class="fa-solid fa-link me-1"></i>
                  ${post.linkCardLinkTitle}
                </div>
              </div>
            </div>
          `
              : ""
          }

          <!-- image in post -->
          ${
            post.hasImage
              ? `
            <div
              class="card border-1 border-secondary mb-3 btn p-0 text-start"
              href="#"
            >
              <img
                src=${post.image}
                class="card-img-top"
                alt="..."
                maxHeight="200px"
                width
              />
            </div>
          `
              : ""
          }

          <div class="row text-dark">
            <div class="col-3 d-flex align-items-center">
              <i class="fa-regular fa-comment me-2"></i>
              <span>${post.commentCount}</span>
            </div>
            <div class="col-3 d-flex align-items-center">
              <i class="fa-solid fa-retweet  me-2"></i>
              <span>${post.retweetCount}</span>
            </div>
            <div class="col-3 d-flex align-items-center">
              <i class="fa-regular fa-heart  me-2"></i>
              <span>${post.likeCount}</span>
            </div>
            <div class="col-3 d-flex align-items-center">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

function addLinkToHandle(tweetText) {
  // Find all instances of "@" followed by a word
  let mentions = tweetText.match(/@\w+/g) || [];
  console.log("mentions:", mentions);

  // Iterate through each mention
  for (let i = 0; i < mentions.length; i++) {
    // Get the username
    let username = mentions[i].substring(1);

    // Replace the mention with a link to the user's profile
    tweetText = tweetText.replace(
      mentions[i],
      '<a href="https://twitter.com/' +
        username +
        '" class="text-decoration-none">' +
        mentions[i] +
        "</a>"
    );
  }
  return tweetText;
}

export default PostListItem;
