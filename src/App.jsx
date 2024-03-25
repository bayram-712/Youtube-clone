import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlayList from "./components/PlayList";
import SinglePage from "./pages/SinglePage";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideos } from "./features/video/videoSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PlayList />} />
          <Route
            path="/playlist/:id"
            element={
              <>
                <SinglePage />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
