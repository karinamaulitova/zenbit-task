import React from "react";
import CloudsBackground from "../CloudsBackground/CloudsBackground";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";
import YellowSmallSmileCircle from "../YellowSmallSmileCircle/YellowSmallSmileCircle";

function MainPage() {
  return (
    <div className="main-page">
      <CloudsBackground>
        <main className="main-page__main">
          <div className="main-page__smile-form-wrapper">
            <YellowSmallSmileCircle className="yellow-smile-small_type_main" />
            <ContactForm />
          </div>
          <Map />
        </main>
      </CloudsBackground>
      <Footer />
    </div>
  );
}

export default MainPage;
