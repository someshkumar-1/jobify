// import { createBrowserRouter, ReactProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import Navbar from "./components/Navbar";

// const router = createBrowserRouter([
//   { path: "/", element: <Navbar /> },
//   { path: "/about", element: <AboutPage /> },
//   { path: "/contact", element: <ContactPage /> },
// ]);

function App() {
  return (
    <div className="">
      {/* <ReactProvider router={router} /> */}
      <LandingPage />
    </div>
  );
}

export default App;
