import NavbarComponent from "./components/NavbarComponent"
import SectionOne from "./components/SectionOne"
import SectionTwo from "./components/SectionTwo"
import SectionThree from "./components/SectionThree"
import SignUpComponent from "./components/SignUpComponent"
import ContactComponent from "./components/ContactComponent"
import FooterComponent from "./components/FooterComponent"



// Our app actually has 7 component 
function App() {

  return (
    <>
        <NavbarComponent/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SignUpComponent/>
        <ContactComponent/>
        <FooterComponent/>
    </>
  )
}

export default App
