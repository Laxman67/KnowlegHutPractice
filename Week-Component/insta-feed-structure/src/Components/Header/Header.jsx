import { Component } from "react";
import "./Header.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-content">
          <div className="logo-btn">
            <img
              src="https://th.bing.com/th/id/OIP.-1MQccE7-o5OSVNv0ypNKgHaC0?w=800&h=305&rs=1&pid=ImgDetMain"
              alt="insta-logo"
            />
          </div>

          <ul className="menu-list">
            <li className="menu-icon">
              <IoHomeOutline className="menu-icon" />
              <p>Home </p>
            </li>
            <li className="menu-icon">
              <FaRegUser className="menu-icon" />
              <p>Profile </p>
            </li>
            <li className="menu-icon">
              <FaRegHeart className="menu-icon" />
              <p>Notification </p>
            </li>
            <li className="menu-icon">
              <MdAddCircleOutline className="menu-icon" />
              <p>Create </p>
            </li>
            <li className="menu-icon">
              <button className="logout">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
