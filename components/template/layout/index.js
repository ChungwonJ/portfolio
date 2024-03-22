import Footer from "./layoutComponents/Footer";
import Header from "./layoutComponents/Header";



export default function Layout({ children , onLanguageChange}) {
  return (
    <>
      <Header onLanguageChange={onLanguageChange }/>
      {children}
      <Footer />
    </>
  );
}