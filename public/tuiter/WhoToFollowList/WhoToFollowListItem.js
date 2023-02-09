function WhoToFollowListItem(who) {
  return `
<li
  class="text-bg-light border-0 list-group-item d-flex justify-content-between align-items-center p-2"
>
  <div class="d-flex justify-content-start">
    <img
      class="m-2 rounded-circle"
      src="${who.avatarIcon}"
      alt=""
      width="45px"
      height="45px"
    />
    <div
      class="d-flex flex-column justify-content-center align-items-start"
    >
      <div class="fs-6 fw-bold">
        ${who.userName}
        <i class="fa fa-circle-check"></i>
      </div>

      <a href="#" class="fs-6 text-decoration-none text-muted">${who.handle}</a>
    </div>
  </div>
  <button class="btn btn-dark text-white ps-3 pe-3 rounded-pill">
    Follow
  </button>
</li>
  `;
}

export default WhoToFollowListItem;
