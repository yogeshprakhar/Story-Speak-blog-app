import { Sidebar } from "flowbite-react";
import React from "react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label={"User"}
            labelColor="dark"
            as="div"
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item
            classname="cursor-pointer"
            icon={HiArrowSmRight}
            label={"user"}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
