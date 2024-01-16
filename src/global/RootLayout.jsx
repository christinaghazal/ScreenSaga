import ThemeProvider from "./ThemeProvider";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayout;
