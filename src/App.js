import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CvForm from "./components/CvForm";
import PreviewForm from "./components/PreviewForm";

function App() {
  //Default to edit page on-load
  const [editPage, setEditPage] = useState(true);

  const changePage = (bool) => {
    setEditPage(bool);
  };

  return (
    <>
      <Header />
      <Navbar changePage={changePage} />
      {editPage ? <CvForm /> : <PreviewForm />}
    </>
  );
}

export default App;
