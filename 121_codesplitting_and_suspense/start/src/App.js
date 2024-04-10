import React, { useState, lazy, Suspense } from "react";
// import Photos from "./components/Photos";
// import Posts from "./components/Posts";
import spinner from "./components/Spinner";
import LoadSlow from "./LoadSlow";
import Spinner from "./components/Spinner";
const Photos = lazy(() => LoadSlow(import("./components/Photos"), 1600));
const Posts = lazy(() => LoadSlow(import("./components/Posts"), 1000));

const App = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <button onClick={() => setShowContent(true)}>Show Content</button>
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      </div>
      <div className="content">
        {showContent ? (
          <>
            <Suspense fallback={<Spinner />}>
              <Photos />
              <Posts />
            </Suspense>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
