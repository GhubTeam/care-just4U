import "./globals.css"
import Navbar from "../../Components/NavBar/NavBar";
import About from "../../Components/About/About";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Review from "../../Components/Reviews/Review";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <About/>
      <BookAppointment />
      <Services />
      <Review/>
      <Contact />
      <Footer/>
    </div>
  );
}
