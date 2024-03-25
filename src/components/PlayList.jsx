import { useSelector } from "react-redux";
import Video from "./Video";
import { Link } from "react-router-dom";

const PlayList = () => {
  const { videos, darkMode } = useSelector((store) => store.video);

  return (
    <>
      <main className="flex dark:bg-[#333333]">
        <aside className="xs:hidden">
          <Link
            to={"/"}
            className="flex p-2 m-2 ml-[2.5px] pl-[2.5px] flex-col hover:bg-gray-200 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <p className="text-[0.7em] font-medium text-gray-800 dark:text-[#dddddd]">
                Home
              </p>
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 ml-[2.5px] pl-[2.5px] flex-col hover:bg-gray-200 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z" />
              </svg>
              <p className="text-[0.7em] font-medium text-gray-800 dark:text-[#dddddd]">
                Shorts
              </p>
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 ml-[2.5px] pl-[2.5px] flex-col hover:bg-gray-200 rounded-lg w-[80px]"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z" />
              </svg>
              <p className="text-[0.7em] font-medium text-gray-800 dark:text-[#dddddd]">
                Subscriptions
              </p>
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 ml-[2.5px] pl-[2.5px] flex-col hover:bg-gray-200 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
              </svg>
              <p className="text-[0.7em] font-medium text-gray-800 dark:text-[#dddddd]">
                You
              </p>
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex p-2 m-2 ml-[2.5px] pl-[2.5px] flex-col hover:bg-gray-200 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={`${darkMode ? "#dddddd" : ""}`}
              >
                <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
              </svg>
              <p className="text-[0.7em] font-medium text-gray-800 dark:text-[#dddddd]">
                History
              </p>
            </div>
          </Link>
        </aside>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-around w-full">
          {videos &&
            videos.map((video) => {
              return (
                <Video key={video.videoId} video={video} darkMode={darkMode} />
              );
            })}
        </div>
      </main>
    </>
  );
};

export default PlayList;
