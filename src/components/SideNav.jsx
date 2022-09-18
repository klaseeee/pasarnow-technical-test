import { TbWorld } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideNav = () => {
  const [sideNavActive, setSideNavActive] = useState({ id: "", class: "" });

  const navigate = useNavigate();

  const linkHref = (url) => {
    url === 1 ? navigate("/search/news/result") : navigate("/news/saved-news");

    setSideNavActive({
      id: url,
      class: "dark:bg-slate-500 bg-green-800 text-white",
    });
  };

  return (
    <nav className="hidden lg:fixed lg:block lg:left-0 lg:top-0 md:bottom-0 w-1/5 pt-16">
      <ul className="flex flex-col justify-center gap-2 pr-2">
        <li
          className={`${
            sideNavActive.id === 1 ? sideNavActive.class : ""
          } flex gap-2 items-center pl-6 p-2 w-full rounded-r-3xl shadow cursor-pointer`}
          onClick={() => linkHref(1)}
        >
          <TbWorld className="dark:text-white" />
          <span className="dark:text-white">Top News</span>
        </li>
        <li
          className={`${
            sideNavActive.id === 2 ? sideNavActive.class : ""
          } flex gap-2 items-center pl-6 p-2 w-full rounded-r-3xl shadow cursor-pointer`}
          onClick={() => linkHref(2)}
        >
          <BsBookmark className="dark:text-white" />
          <span className="dark:text-white">Saved News</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
