import { FaUserCircle } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar-content">
      <ul className="sidebar-list">
        <FaUserCircle color="white" size="40" />
        <FaUserCircle size="40" />
      </ul>
    </div>
  );
}
export default SideBar;
