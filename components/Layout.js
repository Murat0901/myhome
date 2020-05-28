import Navigation from "./Navigation";
import Header from "./Header";

function Layout({children}) {
  return (
    <div>
      <Header />
      <Navigation />
        <main>
          {children}
        </main>
    </div>
  );
}

export default Layout;
