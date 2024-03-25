import { Link } from "react-router-dom";

const Video = (prop) => {
  const video = prop.video;
  const darkMode = prop.darkMode;

  return (
    <>
      <article className="justify-self-center m-5 min-w-72 max-w-full dark:bg-[#4f4f4f] rounded-xl">
        <Link to={`playlist/${video.videoId}`} className="relative block group">
          <img src={video.thumbnail} alt="poster" className="rounded-xl dark:border dark:border-[#4f4f4f]" />
          <p className="text-sm bg-gray-800 p-0.5 rounded-md absolute bottom-1 right-1 border-gray-500 border text-white lg:group-hover:visible lg:invisible dark:text-[#dddddd]">
            {video.duration}
          </p>
        </Link>

        <div className="flex justify-between group">
          <div className="self-start cursor-pointer w-10">
            <img
              src={video.channel.channelThumbnail}
              alt="channelPoster"
              className="mx-1 my-2 min-w-[36px] rounded-[50%]"
            />
          </div>
          <Link to={`playlist/${video.videoId}`} className="flex w-full">
            <div className="mx-4 my-2 w-[100%]">
              <p className="text-[1.2em] dark:text-[#dddddd]">{video.title}</p>
              <p className="text-[1em] dark:text-[#dddddd]">
                {video.channel.channelName}
              </p>
              <span className="text-sm flex">
                <p className="pr-3 text-[1em] dark:text-[#dddddd]">
                  {`${Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(video.viewCount)} views`}
                </p>
                <p className="text-[1em] dark:text-[#dddddd]">
                  {Intl.DateTimeFormat().format(new Date(video.uploadDate))}
                </p>
              </span>
            </div>
          </Link>
          <div className="self-start pt-4 lg:group-hover:visible lg:invisible visible">
            <button className="px-2">
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
      </article>
    </>
  );
};

export default Video;
