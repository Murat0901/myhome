import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
