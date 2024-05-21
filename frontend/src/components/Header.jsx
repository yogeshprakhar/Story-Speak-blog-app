import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "../redux/theme/themeSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 rounded-s-lg bg-gradient-to-r from-zinc-800 via-stone-500">
          Trauma
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search.."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="hidden md:inline"
          color={"gray"}
          pill
          onClick={() => dispatch(toogleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar className="rounded-full" alt="user" img={currentUser.profilePicture} />}
          >
            <Dropdown.Header>
              <span> {currentUser.username} </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to={"/sign-in"}>
            <Button gradientMonochrome={"purple"}>Sign In</Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
