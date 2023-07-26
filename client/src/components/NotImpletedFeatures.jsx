import { useState } from "react";

function NotImpletedFeatures() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="features">
      <div className="features__linkbox">
        <a
          href="mailto://localhost.webcoder@gmail.com"
          className="features__linkbox--links"
        >
          Contact Me
        </a>
        <span
          className="features__linkbox--links"
          onClick={() => setShowFeatures((preValue) => !preValue)}
        >
          Features to add
        </span>
      </div>
      <div className="feature__box" data-showfeatures={showFeatures}>
        <ul>
          <li>
            <h5>Fix Read More.</h5>
          </li>
          <li>
            <h5>Add custom alert box.</h5>
          </li>
          <li>
            <h5>Provide More Security</h5>
          </li>
          <li>
            <h5>Need Fix Error Handling.</h5>
          </li>
        </ul>
        <span className="feature__box--contribute">
          Contribute on{" "}
          <a href="https://github.com/Kr-Upendra" className="github">
            Github
          </a>
        </span>
        <span className="arrow"></span>
      </div>
    </div>
  );
}

export default NotImpletedFeatures;
