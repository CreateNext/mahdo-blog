import Footer from "./Footer";
import Nav from "./Nav";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
