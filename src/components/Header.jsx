import logo from "../assets/youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setIsOpen } from "../features/video/videoSlice";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, darkMode } = useSelector((store) => store.video);
  const dispatch = useDispatch();

  return (
    <>
      <header className="flex justify-between items-center w-full z-10 dark:bg-[#202020]">
        <div className="flex pl-3 xs:pl-0">
          <button
            className="p-2 m-2 rounded-[50%] active:bg-gray-100 active:outline-none dark:active:bg-[#4f4f4f]"
            onClick={() => {
              document.body.style.position = "fixed";
              dispatch(setIsOpen(true));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill={`${darkMode ? "#dddddd" : ""}`}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <button className="p-2 m-2 pl-0 w-24 xs:hidden border-0">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-full rounded-md" />
            </Link>
          </button>
        </div>
        <div className="flex w-full min-w-[128px] pr-3">
          <form
            action="#"
            method="post"
            className="flex justify-center h-10 w-full mr-2"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="p-3 border border-gray-300 rounded-tl-3xl rounded-bl-3xl outline-none w-full min-w-32 placeholder:text-[1.2em] dark:bg-[#333333] dark:border-[#333333] dark:text-[#dddddd] dark:placeholder:text-[#909090]"
            />
            <button className="px-4 border border-gray-30 hover:bg-gray-100 border-l-0 rounded-tr-3xl rounded-br-3xl bg-gray-50 dark:bg-[#4f4f4f] dark:hover:bg-[#666666] dark:border-[#4f4f4f]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </form>
          <button className="rounded-[50%] hover:bg-gray-200 bg-gray-100 p-2 dark:bg-[#4f4f4f] dark:hover:bg-[#666666]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill={`${darkMode ? "#dddddd" : ""}`}
            >
              <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-start my-0.5 xs:hidden">
          <div className="flex">
            <button className="pl-2 xs:px-0 outline-none">
              <p
                className="p-2 capitalize font-bold text-[1em] dark:text-[#dddddd]"
                onClick={() => dispatch(setDarkMode())}
              >
                {darkMode ? `dark` : `light`}
              </p>
            </button>
          </div>
          <Link
            to={"/"}
            className="flex cursor-pointer justify-evenly border rounded-3xl hover:bg-blue-100 hover:border-blue-100 p-2 xs:p-1 w-28 ml-1 mr-2 xs:m-1 dark:bg-[#4f4f4f] dark:border-[#4f4f4f] dark:hover:bg-[#666666] dark:hover:border-[#666666]"
          >
            <div className="px-1 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : "blue"}`}
              >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
              <p className="px-1 text-[blue] dark:text-[#dddddd] text-[1em]">
                Sign in
              </p>{" "}
            </div>
          </Link>
        </div>
        {isOpen && (
          <>
            <Sidebar />
            <div
              className="h-screen w-[calc(100%-240px)] z-10 bg-black opacity-50 absolute right-0 top-0"
              onClick={() => {
                document.body.style.position = "relative";
                dispatch(setIsOpen(false));
              }}
            ></div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
