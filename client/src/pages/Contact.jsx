import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";
import { Map, Marker } from "pigeon-maps";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Heading
        headingTitle="Contact Us"
        paraText={"Have any question or connect with us"}
        fontSize={1.75}
        textAlign="left"
      />
      <div className="contact__box">
        <div className="contact__box--item">
          <ContactForm />
        </div>
        <div className="contact__box--item">
          <div className="contents">
            <div className="contents__box">
              <h3>Call Us</h3>
              <div className="contents__box--list">
                <p>
                  <i className="material-symbols-outlined">phone</i>
                  <span>800 800 1111</span>
                </p>
                <p>
                  <i className="material-symbols-outlined">phone</i>
                  <span>900 900 1110</span>
                </p>
              </div>
            </div>
            <div className="contents__box">
              <h3>Email Us</h3>
              <div className="contents__box--list">
                <a href="mailto:hello@flavor.com">
                  <p>
                    <i className="material-symbols-outlined">mail</i>
                    <span>hello@flavor.com</span>
                  </p>
                </a>
                <a href="mailto:contact.flavors@mail.io">
                  <p>
                    <i className="material-symbols-outlined">mail</i>
                    <span>contact.flavors@mail.io</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="contents__box">
              <h3>Reach Out to Us</h3>
              <div className="contents__box--list el-map">
                <MyMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MyMap() {
  <Map defaultCenter={[25.4358, 81.8463]} defaultZoom={10}>
    <Marker width={30} anchor={[50.879, 4.6997]} color="#0000e6" />
  </Map>;
}
