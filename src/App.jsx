import Header from "./components/Headers/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
// import TopBar from "./components/Headers/TopBar/TopBar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Ensure this is imported

library.add(faPencilAlt, faGraduationCap, faBook);

import './App.css'


function App() {

  return (
    <>
     
        {/* <TopBar /> */}
        <Header />
        <Main />
        <Footer/>
  
    </>
  )
}

export default App
