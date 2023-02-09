const NavigationSidebar = () => {
  return `
  <ul class="list-group mb-2">
    <li class="list-group-item">
      <a class="" href="/"> <i class="fab fa-twitter text-white"></i></a>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-home fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Home</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action active d-flex align-items-center"
    >
      <i class="fa fa-hashtag fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Explore</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-bell fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Notification</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-envelope me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Messages</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-bookmark fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Bookmarks</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-list fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Lists</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-user fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">Profiles</span>
    </li>
    <li
      href=""
      class="border-0 list-group-item list-group-item-action d-flex align-items-center"
    >
      <i class="fa fa-circle-info fa-1x me-2"></i>
      <span class="d-none d-xxl-block d-xl-block">More</span>
    </li>
  </ul>
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
