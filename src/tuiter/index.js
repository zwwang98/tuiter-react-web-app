import Nav from "../labs/a6/nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

function Tuiter() {
  return (
    <div>
      <Nav />
      <NavigationSidebar active="home" />
      <h1>Tuiter</h1>
    </div>
  );
}
export default Tuiter;
