const Header = () => {
  return (
    <div className="flex justify-between  shadow-md p-4">
      <div>
        <img src="../assests/school-logo.jpg" alt="school-Logo" />
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <li>Home</li>
          <li>Gallery</li>
          <li> Fee</li>
          <li>Admin</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
