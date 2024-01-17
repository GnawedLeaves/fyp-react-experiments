import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/Home/HomePage";
import BlogsPage from "./pages/Blogs/BlogsPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
