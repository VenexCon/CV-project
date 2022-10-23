import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CvForm from "./components/CvForm";
import PreviewForm from "./components/PreviewForm";

function App() {
  //Default to edit page on-load
  const [editPage, setEditPage] = useState(true);

  const [edElement, setEdElement] = useState([]);

  const [person, setPerson] = useState({
    title: "",
    name: "",
    email: "",
    phone: 0,
    linkedin: "",
  });

  // Passed to Navbar for button elements.
  const changePage = (bool) => {
    setEditPage(bool);
  };

  return (
    <>
      <Header />
      <Navbar changePage={changePage} />
      {editPage ? (
        <CvForm
          setPerson={setPerson}
          person={person}
          edElement={edElement}
          setEdElement={setEdElement}
        />
      ) : (
        <PreviewForm person={person} />
      )}
    </>
  );
}

export default App;
