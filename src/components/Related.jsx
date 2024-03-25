import { Link } from "react-router-dom";

const Related = (prop) => {
  const video = prop.video;
  const darkMode = prop.darkMode;
  return (
    <>
      <div className="dark:bg-[#4f4f4f] rounded-xl mb-1">
        <Link to={`/playlist/${video.videoId}`} className="relative group">
          <img
            src={video.thumbnail}
            alt="poster"
            className="rounded-xl dark:border-[#4f4f4f] dark:border"
          />
          <p className="bg-gray-800 rounded-md right-0 bottom-0 border-gray-500 absolute border text-white lg:invisible lg:group-hover:visible">
            {video.duration}
          </p>
        </Link>
        <div className="group relative p-2">
          <Link
            to={`/playlist/${video.videoId}`}
            className="justify-around h-full flex flex-col"
          >
            <p className="unique mb-2 text-[1.2em] dark:text-[#dddddd]">
              {video.title}
              {video.title}
            </p>

            <div className="">
              <p className="text-[1em] dark:text-[#dddddd]">
                {video.channel.channelName}
              </p>
              <p className="text-[1em] dark:text-[#dddddd]">
                {`${Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(video.viewCount)} views`}
              </p>
              <p className="text-[1em] dark:text-[#dddddd]">
                {Intl.DateTimeFormat().format(new Date(video.uploadDate))}
              </p>
            </div>
          </Link>
          <button className="group-hover:visible invisible absolute top-2 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill={`${darkMode ? "#dddddd" : ""}`}
            >
              <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Related;
