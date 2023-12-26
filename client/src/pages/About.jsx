import { useEffect } from "react";
import CardArticle from "../components/CardArticle";

export default function About() {
  useEffect(function () {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="about">
        <div className="about__alpha">
          <h1 className="about__alpha--heading">
            Your Last Stop to <br />
            To Stop Your Hunger
          </h1>
          <p className="about__alpha--para">
            We have tons of flavors that are easy to make at home. These flavors
            does not required to much ingredients so this make simple to prepare
            these at your home without worry about ingredients. So are not you
            hungry.
          </p>
          <button className="about__alpha--button">KNOW MORE</button>
        </div>
      </section>
      <section className="hola section">
        <div className="hola">
          <div className="hola__heading">
            <h1>What makes us different</h1>
          </div>
          <div className="hola__differ">
            <CardArticle
              image="about_00"
              title="Easy and Simple Flavors"
              desc=""
              buttonTitle="Find Easy Flavors"
            />
            <CardArticle
              image="about_01"
              title="Unique and Unmatched Taste"
              desc=""
              buttonTitle="Find Unique Flavors"
            />
            <CardArticle
              image="about_02"
              title="Fast Ready Flavors"
              desc=""
              buttonTitle="Find Fast Flavors"
            />
          </div>
        </div>
      </section>
    </>
  );
}
