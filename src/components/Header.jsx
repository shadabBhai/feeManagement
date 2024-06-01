import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between  shadow-md p-4">
      <div>
        <img src="../assests/school-logo.jpg" alt="school-Logo" />
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/fee">Fee</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
