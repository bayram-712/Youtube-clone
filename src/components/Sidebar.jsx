import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/youtube.png";
import { setIsOpen } from "../features/video/videoSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((store) => store.video);

  return (
    <>
      <aside className="absolute bg-white z-20 top-0 w-64 h-screen overflow-scroll dark:bg-[#202020]">
        <div className="flex pl-3 xs:pl-0">
          <button
            className="p-2 m-2 rounded-[50%] active:bg-gray-100 dark:active:bg-[#4f4f4f] active:outline-none"
            onClick={() => {
              document.body.style.position = "relative";
              dispatch(setIsOpen(false));
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
          <button className="p-2 m-2 pl-0 w-24 xs:p-0 xs:pt-[1px] xs:mx-0">
            <Link
              to={"/"}
              onClick={() => {
                document.body.style.position = "relative";
                dispatch(setIsOpen(false));
              }}
            >
              <img src={logo} alt="logo" className="w-full h-auto rounded-md" />
            </Link>
          </button>
        </div>
        <div className="pl-3 xs:pl-0">
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
            onClick={() => {
              document.body.style.position = "relative";
              dispatch(setIsOpen(false));
            }}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <span className="">
                <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                  Home
                </p>
              </span>
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z" />
              </svg>
              <span className="">
                <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                  Shorts
                </p>
              </span>
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Subscriptions
              </p>{" "}
            </div>
          </Link>
        </div>
        <hr />
        <div className="pl-3 xs:pl-0">
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
              </svg>
              <span className="">
                <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                  You
                </p>
              </span>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
              </svg>
              <span className="">
                <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                  History
                </p>
              </span>{" "}
            </div>
          </Link>
        </div>
        <hr />
        <div className="pl-3 xs:pl-0">
          <span className="flex p-2 m-2 items-center xs:pl-0">
            <p className="text-[1em] font-medium text-gray-800 dark:text-[#dddddd]">
              Sign in to like videos,
              <br /> comment, and subscribe.
            </p>
          </span>
          <Link
            to={"/"}
            className="flex justify-evenly border rounded-3xl hover:bg-blue-100 hover:border-blue-100 p-2 w-28 m-2 mt-0 dark:bg-[#4f4f4f] dark:border-[#4f4f4f] dark:hover:bg-[#666666] dark:hover:border-[#666666] cursor-pointer"
          >
            <div className="px-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : "blue"}`}
              >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
              <p className="px-1 text-[blue] text-[1em] dark:text-[#dddddd]">
                Sign in
              </p>
            </div>
          </Link>
        </div>
        <hr />
        <div className="pl-3 xs:pl-0">
          <div className="flex p-2 m-2 py-1 my-1 pb-0 mb-0 items-center">
            <p className="font-bold dark:text-[#dddddd] text-[1.2em]">
              Explore
            </p>
          </div>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Trending
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Shopping
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Music
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Movies & TV
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M197-197q-54-55-85.5-127.5T80-480q0-84 31.5-156.5T197-763l57 57q-44 44-69 102t-25 124q0 67 25 125t69 101l-57 57Zm113-113q-32-33-51-76.5T240-480q0-51 19-94.5t51-75.5l57 57q-22 22-34.5 51T320-480q0 33 12.5 62t34.5 51l-57 57Zm170-90q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm170 90-57-57q22-22 34.5-51t12.5-62q0-33-12.5-62T593-593l57-57q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310Zm113 113-57-57q44-44 69-102t25-124q0-67-25-125t-69-101l57-57q54 54 85.5 126.5T880-480q0 83-31.5 155.5T763-197Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Live
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Gaming
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                News
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Sports
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Learning
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M120-160q-17 0-28.5-11.5T80-200q0-10 4-18.5T96-232l344-258v-70q0-17 12-28.5t29-11.5q25 0 42-18t17-43q0-25-17.5-42T480-720q-25 0-42.5 17.5T420-660h-80q0-58 41-99t99-41q58 0 99 40.5t41 98.5q0 47-27.5 84T520-526v36l344 258q8 5 12 13.5t4 18.5q0 17-11.5 28.5T840-160H120Zm120-80h480L480-420 240-240Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Fashion & Beauty
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M440-80v-331q-18-11-29-28.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 23-11 41t-29 28v331h-80ZM204-190q-57-55-90.5-129.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 86-33.5 161T756-190l-56-56q46-44 73-104.5T800-480q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-57 57Zm113-113q-35-33-56-78.5T240-480q0-100 70-170t170-70q100 0 170 70t70 170q0 53-21 99t-56 78l-57-57q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-360l-57 57Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Podcasts
              </p>{" "}
            </div>
          </Link>
        </div>
        <hr />
        <div className="pl-3 xs:pl-0">
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Settings
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Report History
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Help
              </p>{" "}
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 items-center xs:pl-0 hover:bg-gray-200 dark:hover:bg-[#666666] rounded-lg"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
              </svg>
              <p className="text-[0.9em] pl-4 font-medium text-gray-800 dark:text-[#dddddd]">
                Send feedback
              </p>{" "}
            </div>
          </Link>
        </div>
        <hr />
        <div className="pl-3 xs:pl-0">
          <span className="flex p-2 m-2 items-center flex-wrap">
            <span>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                About
              </Link>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Press
              </Link>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Copyright
              </Link>
            </span>
            <span>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Contact
              </Link>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Creators
              </Link>
            </span>
            <span>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Advertise
              </Link>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Developers
              </Link>
            </span>
          </span>
          <span className="flex p-2 m-2 items-center flex-wrap">
            <span>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Terms
              </Link>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Privacy
              </Link>
              <Link
                to={"/"}
                className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
              >
                Policy&Safety
              </Link>
            </span>
            <Link
              to={"/"}
              className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
            >
              How YouTube works
            </Link>
            <Link
              to={"/"}
              className="text-[0.9em] p-1 font-medium text-gray-800 dark:text-[#dddddd]"
            >
              Test new features
            </Link>
          </span>
          <span className="flex p-2 m-2 items-center flex-wrap">
            <small className="font-medium text-gray-800 text-[0.8em] dark:text-[#dddddd]">
              &copy; 2024 Google LLC
            </small>
          </span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
