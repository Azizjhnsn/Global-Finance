import NavbarComponent from "./components/navbarComponent"
import SectionOne from "./components/sectionOne"
import SectionTwo from "./components/sectionTwo"
import SectionThree from "./components/sectionThree"
import SignUpComponent from "./components/SignUpComponent"
import ContactComponent from "./components/contactComponent"
import FooterComponent from "./components/footerComponent"



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
