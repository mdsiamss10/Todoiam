import AddTodo from "./AddTodo";
import ProfileIcon from "./ProfileIcon";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-4 mb-4 sticky top-0 z-20 backdrop-blur-sm">
        {/* Left side of navbar */}
        <ProfileIcon />
        {/* Right side of navbar */}
        <AddTodo />
      </nav>
    </>
  );
}

export default Navbar;
