import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import { Footer, Home, NewsResult, Results, ResultImage } from "./pages";

const App = () => {
  return (
    <div className="App bg-white relative dark:bg-slate-800">
      <Router>
        <NavBar />
        <Footer />

        <Routes>
          <Route path="/" element={<Home name="Engine" />} />
          <Route path="/search/image" element={<Home name="Image" />} />
          <Route path="/search/image/result" element={<ResultImage />} />
          <Route path="/search/news" element={<Home name="News" />} />
          <Route path="/search/news/result" element={<NewsResult />} />
          <Route path="/result" element={<Results />} />
          <Route path="/news/saved-news" element={<NewsResult />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
