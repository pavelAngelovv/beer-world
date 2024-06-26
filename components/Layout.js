import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
