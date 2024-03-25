import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Related from "../components/Related";

const SinglePage = () => {
  const { id } = useParams();
  const video = useSelector((store) =>
    store.video.videos.find((video) => {
      return video.videoId === id;
    })
  );
  const { videos, darkMode } = useSelector((store) => store.video);
  const [isComplete, setIsComplete] = useState(false);
  const [replies, setReplies] = useState(false);

  return (
    <>
      {video && (
        <div className="grid grid-cols-1 lg:grid-cols-3 p-4 dark:bg-[#333333]">
          <div className="col-start-1 col-end-3 m-4 min-w-[240px] xs:mx-0">
            <video
              src={video.url}
              poster={video.thumbnail}
              controls
              className="rounded-[32px] w-full dark:border dark:border-[#4f4f4f]"
            ></video>
            <h1 className="dark:text-[#dddddd] text-[1.5em] px-0 py-2">
              {video.title}
            </h1>
            <div className="flex justify-between flex-wrap">
              <div className="flex my-2">
                <img
                  src={video.channel.channelThumbnail}
                  alt="channelPoster"
                  className="min-w-8 max-w-10 min-h-8 max-h-10 rounded-[50%]"
                />
                <div className="px-4">
                  <p className="text-gray-900 font-semibold text-[1em] dark:text-[#dddddd]">
                    {video.channel.channelName}
                  </p>
                  <p className="text-gray-600 text-[1em] dark:text-[#dddddd]">
                    {`${Intl.NumberFormat("en", { notation: "compact" }).format(
                      video.channel.subscribers
                    )} subscribers`}
                  </p>
                </div>
                <button className="flex items-center rounded-3xl px-2.5 h-10 mx-0.5 bg-black text-white text-[1em] dark:bg-[#202020] dark:text-[#dddddd]">
                  <p>Subscribe</p>
                </button>
              </div>
              <div className="flex my-1 flex-wrap">
                <div className="flex my-1">
                  <button className="flex bg-gray-200 items-center px-3 pr-1.5 h-10 ml-0.5 hover:bg-gray-300 rounded-l-3xl dark:bg-[#4f4f4f] dark:hover:bg-[#666666]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="20"
                      fill={`${darkMode ? "#dddddd" : ""}`}
                    >
                      <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                    </svg>
                    <p className="text-[1em] dark:text-[#dddddd]">
                      {Intl.NumberFormat("en", { notation: "compact" }).format(
                        video.likes
                      )}
                    </p>
                  </button>
                  <button className="flex bg-gray-200 items-center px-3 pl-1.5 h-10 mr-0.5 hover:bg-gray-300 rounded-r-3xl dark:bg-[#4f4f4f] dark:hover:bg-[#666666]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="20"
                      fill={`${darkMode ? "#dddddd" : ""}`}
                    >
                      <path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
                    </svg>
                    <p className="text-[1em] dark:text-[#dddddd]">
                      {Intl.NumberFormat("en", { notation: "compact" }).format(
                        video.dislikes
                      )}
                    </p>
                  </button>
                </div>
                <button className="flex my-1 bg-gray-200 items-center rounded-3xl px-3 h-10 mx-0.5 hover:bg-gray-300 dark:bg-[#4f4f4f] dark:hover:bg-[#666666]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill={`${darkMode ? "#dddddd" : ""}`}
                  >
                    <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
                  </svg>
                  <p className="px-1 text-[1em] dark:text-[#dddddd]">Share</p>
                </button>
                <button className="flex my-1 bg-gray-200 items-center rounded-3xl px-3 h-10 mx-0.5 hover:bg-gray-300 dark:bg-[#4f4f4f] dark:hover:bg-[#666666]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill={`${darkMode ? "#dddddd" : ""}`}
                  >
                    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                  </svg>
                  <p className="px-1 text-[1em] dark:text-[#dddddd]">
                    Download
                  </p>
                </button>
                <button className="flex my-1 bg-gray-200 items-center rounded-3xl px-2.5 h-10 mx-0.5 hover:bg-gray-300 dark:bg-[#4f4f4f] dark:hover:bg-[#666666]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill={`${darkMode ? "#dddddd" : ""}`}
                  >
                    <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded-lg dark:bg-[#4f4f4f]">
              <span className="flex">
                <p className="pr-4 text-[1em] font-semibold dark:text-[#dddddd]">
                  {Intl.NumberFormat("en").format(video.viewCount)} views
                </p>
                <p className="text-[1em] font-semibold dark:text-[#dddddd]">
                  Premiered{" "}
                  {Intl.DateTimeFormat().format(new Date(video.uploadDate))}
                </p>
              </span>
              <br />
              {!isComplete && (
                <div className="flex">
                  <p className="text-[1em] text-gray-800 unique inline dark:text-[#dddddd]">
                    {video.description}
                  </p>
                  <p
                    className="cursor-pointer text-[1em] font-semibold inline self-end"
                    onClick={() => {
                      setTimeout(() => {
                        setIsComplete(true);
                      }, 160);
                    }}
                  >
                    more
                  </p>
                </div>
              )}
              {isComplete && (
                <>
                  {video.description.map((item, index) => {
                    return (
                      <span key={index}>
                        <p className="text-[1em] text-gray-800 dark:text-[#dddddd]">
                          {item}
                        </p>
                        <br />
                      </span>
                    );
                  })}
                  <div className="flex mb-2">
                    <img
                      src={video.channel.channelThumbnail}
                      alt="channelPoster"
                      className="min-w-8 max-w-10 min-h-8 max-h-10 rounded-[50%]"
                    />
                    <div className="px-4">
                      <p className="text-gray-900 font-semibold text-[1em] dark:text-[#dddddd]">
                        {video.channel.channelName}
                      </p>
                      <p className="text-gray-600 text-[1em] dark:text-[#dddddd]">
                        {`${Intl.NumberFormat("en", {
                          notation: "compact",
                        }).format(video.channel.subscribers)} subscribers`}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-[1em] font-semibold cursor-pointer inline"
                    onClick={() => {
                      setTimeout(() => {
                        setIsComplete(false);
                      }, 160);
                    }}
                  >
                    Show less
                  </p>
                </>
              )}
            </div>
            <div className="comments">
              <h2 className="text-[1.5em] font-semibold mb-4 dark:text-[#dddddd]">
                Comments ({video.comments.length})
              </h2>
              <form className="mb-4" action="#" method="post">
                <textarea
                  placeholder="Write a comment..."
                  className="w-full outline-none px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 resize-none dark:bg-[#4f4f4f] dark:border-[#4f4f4f] dark:text-[#dddddd] dark:placeholder:text-[#909090] dark:focus:border-[#666666]"
                />
                <button
                  type="submit"
                  className="mt-2 text-[1em] bg-blue-500 dark:bg-[#4f4f4f] dark:hover:bg-[#666666] dark:text-[#dddddd] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Comment
                </button>
              </form>
              {video.comments.map((comment) => (
                <div
                  key={comment.commentId}
                  className="comment bg-white p-4 rounded-lg shadow-md dark:bg-[#4f4f4f]"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-gray-800 font-semibold unique text-[1em] dark:text-[#dddddd]">
                      {comment.user.username}
                    </span>
                    <span className="text-gray-500 text-[1em] ml-2 dark:text-[#dddddd]">
                      {comment.uploadDate}
                    </span>
                  </div>
                  <p className="text-gray-800 text-[1em] dark:text-[#dddddd]">
                    {comment.text}
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-600 hover:text-gray-800 mr-4 flex dark:text-[#dddddd]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                        fill={`${darkMode ? "#dddddd" : ""}`}
                      >
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                      <p className="ml-1 text-[1em] dark:text-[#dddddd]">
                        {comment.likes}
                      </p>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 flex mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                        fill={`${darkMode ? "#dddddd" : ""}`}
                      >
                        <path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
                      </svg>
                      <p className="ml-1 text-[1em] dark:text-[#dddddd]">
                        {comment.dislikes}
                      </p>
                    </button>
                    <button
                      onClick={() => {
                        if (replies) {
                          setReplies(false);
                        } else {
                          setReplies(true);
                        }
                      }}
                      className="flex outline-none"
                    >
                      <p className="text-[1em] dark:text-[#dddddd]">
                        replies ({comment.replies.length})
                      </p>
                      {!replies && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                          fill={`${darkMode ? "#dddddd" : ""}`}
                        >
                          <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      )}
                      {replies && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                          fill={`${darkMode ? "#dddddd" : ""}`}
                        >
                          <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="pl-8">
                    {comment.replies &&
                      replies &&
                      comment.replies.map((reply) => (
                        <div
                          key={reply.replyId}
                          className="bg-gray-100 p-3 rounded-lg shadow-sm mt-3 dark:bg-[#666666]"
                        >
                          <div className="flex items-center mb-2">
                            <span className="text-gray-800 font-semibold unique text-[1em] dark:text-[#dddddd]">
                              {reply.user.username}
                            </span>
                            <span className="text-gray-500 text-[1em] ml-2 dark:text-[#dddddd]">
                              {reply.uploadDate}
                            </span>
                          </div>
                          <p className="text-gray-800 text-[1em] dark:text-[#dddddd]">
                            {reply.text}
                          </p>
                          <div className="flex items-center mt-1">
                            <button className="text-gray-600 hover:text-gray-800 mr-4 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                                fill={`${darkMode ? "#dddddd" : ""}`}
                              >
                                <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                              </svg>
                              <p className="ml-1 text-[1em] dark:text-[#dddddd]">
                                {reply.likes}
                              </p>
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                                fill={`${darkMode ? "#dddddd" : ""}`}
                              >
                                <path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
                              </svg>
                              <p className="ml-1 text-[1em] dark:text-[#dddddd]">
                                {reply.dislikes}
                              </p>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">
            {videos.map((video, index) => {
              if (index > 0 && index < 5) {
                return (
                  <Related key={index} video={video} darkMode={darkMode} />
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
