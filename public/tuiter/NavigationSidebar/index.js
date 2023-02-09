const NavigationSidebar = (active) => {
  return `
  <div class="list-group mb-2">
    <a class="list-group-item" href="/"> <i class="fab fa-twitter text-white"></i></a>
    <a
      href="../HomeScreen/index.html"
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Home" ? "active" : ""
      }"
    >
      <i class="fa fa-home fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Home</span>
    </a>
    <a
      href="../ExploreScreen/index.html"
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Explore" ? "active" : ""
      }"
    >
      <i class="fa fa-hashtag fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Explore</span>
    </a>
    <a
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Notification" ? "active" : ""
      }"
    >
      <i class="fa fa-bell fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Notification</span>
    </a>
    <a
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Messages" ? "active" : ""
      }"
    >
      <i class="fa fa-envelope me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Messages</span>
    </a>
    <a
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Bookmarks" ? "active" : ""
      }"
    >
      <i class="fa fa-bookmark fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Bookmarks</span>
    </a>
    <a
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Lists" ? "active" : ""
      }"
    >
      <i class="fa fa-list fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Lists</span>
    </a>
    <a
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "Profiles" ? "active" : ""
      }"
    >
      <i class="fa fa-user fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Profiles</span>
    </a>
    <a
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center ${
        active === "More" ? "active" : ""
      }"
    >
      <i class="fa fa-circle-info fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">More</span>
    </a>
  </div>
  <div class="d-grid mt-2">
    <a
      href="tweet.html"
      class="btn btn-primary btn-block rounded-pill bg-primary"
    >
      Tweet</a
    >
  </div>
  `;
};
export default NavigationSidebar;
