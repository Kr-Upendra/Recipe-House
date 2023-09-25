import jobs from "../utils/jobs.json";
import { Link } from "react-router-dom";

const Career = () => {
  const jobElement = jobs.map((job) => {
    return <JobDetails key={job.role} {...job} />;
  });

  return (
    <div className="cpage">
      <div className="cpage__header">
        <div className="cpage__header--title">
          <h1>Work With Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            possimus! Fuga id voluptatibus pariatur dolor eius. Alias error qui
            debitis!
          </p>
          <button type="button" className="el-cop">
            See Open Positions
          </button>
        </div>
        <div className="cpage__header--illustration">
          <img src="/young-men.png" alt="Illustration Art" />
        </div>
      </div>
      <div className="cpage__op">
        <div className="cpage__op--h">
          <h2>Open Positions</h2>
        </div>
        <div className="jobs">{jobElement}</div>
      </div>
    </div>
  );
};

export default Career;

export const JobDetails = ({ role, skills, experience }) => {
  return (
    <div className="job">
      <div className="job__role">
        <span className="el__element">{role}</span>
      </div>

      <div className="job__rskills">
        {skills.map((skill) => {
          return (
            <span className="el__element" key={skill}>
              {skill + ", "}
            </span>
          );
        })}
      </div>
      <div className="job__rexp">
        <span className="el__element">{experience} Yr</span>
      </div>
      <div className="job__apbtn">
        <Link to="id" className="apply-btn">
          Apply
        </Link>
      </div>
    </div>
  );
};
