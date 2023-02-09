import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
  <!-- Search Bar -->
  <div class="row mb-2">
    <div class="col-10">
      <div
        class="input-group d-flex align-items-center border-secondary border border-0 rounded-pill ps-2 pe-4 bg-white"
      >
        <i class="fa fa-magnifying-glass ms-2 me-2 text-secondary"></i>
        <input
          type="search"
          class="form-control border-0 bg-white "
          id="search-twitter"
          placeholder="Search Twitter"
          width="80%"
        />
      </div>
    </div>
    <div class="col-2 d-flex justify-content-end align-items-center">
      <span class="text-primary">
        <i class="fa fa-gear fa-xl pe-1"></i>
      </span>
    </div>
  </div>

  <!-- Tabs -->
  <ul
    class="nav nav-tabs nav-fill pb-1"
    id="myTab"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active wd-custom-tab ps-0 pe-0"
        id="for-you-tab"
        data-bs-toggle="tab"
        data-bs-target="#for-you-tab-pane"
        type="button"
        role="tab"
        aria-controls="for-you-tab-pane"
        aria-selected="true"
      >
        <span>For you</span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link wd-custom-tab ps-0 pe-0"
        id="trending-tab"
        data-bs-toggle="tab"
        data-bs-target="#trending-tab-pane"
        type="button"
        role="tab"
        aria-controls="trending-tab-pane"
        aria-selected="false"
      >
        Trending
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link wd-custom-tab ps-0 pe-0"
        id="news-tab"
        data-bs-toggle="tab"
        data-bs-target="#news-tab-pane"
        type="button"
        role="tab"
        aria-controls="news-tab-pane"
        aria-selected="false"
      >
        News
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link wd-custom-tab ps-0 pe-0"
        id="sports-tab"
        data-bs-toggle="tab"
        data-bs-target="#sports-tab-pane"
        type="button"
        role="tab"
        aria-controls="sports-tab-pane"
        aria-selected="false"
      >
        Sports
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link d-sm-none d-md-block wd-custom-tab ps-0 pe-0"
        id="entertainment-tab"
        data-bs-toggle="tab"
        data-bs-target="#entertainment-tab-pane"
        type="button"
        role="tab"
        aria-controls="entertainment-tab-pane"
        aria-selected="false"
      >
        Entertainment
      </button>
    </li>
  </ul>

  <div class="card rounded-0 mb-2">
    <img
      src="../../images/spacex-starship.webp"
      class="mb-0"
      alt="..."
      height="400px"
    />
    <div class="card-img-overlay d-flex align-items-end">
      <div class="text-white">
        <h4 class="card-title">SpaceX's Starship</h4>
      </div>
    </div>
  </div>

    ${PostSummaryList()}
  `;
};

export default ExploreComponent;
