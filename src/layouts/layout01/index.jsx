import { ReactNode, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
// import Sidebar from "./components/sidebar";

const Layout01 = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col h-full mx-auto min-h-full justify-between">
      <Header setOpen={setOpen} open={open} />
      {/* <Sidebar open={open} setOpen={setOpen} /> */}
      {children}
      <Footer />
    </div>
  );
};
export default Layout01;
