import ListSkills from './ListSkills';
import '../../styles/DisplayResume.css';
/* eslint-disable react/prop-types */
const DisplayResume = (props) => {
  const { info } = props;
  const {
    genFirstName,
    genLastName,
    genEmail,
    genAddress,
    genPhone,
    workCompany,
    workJobTitle,
    workLocation,
    workCoreResponsibility,
    workDateStart,
    workDateEnd,
    eduUniversity,
    eduLocation,
    eduDegree,
    eduGradDate,
    skills,
  } = info;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="general">
          <h1>{`${genFirstName} ${genLastName}`}</h1>
          <ul>
            <li>{genEmail}</li>
            <li>{genPhone}</li>
            <li>{genAddress}</li>
          </ul>
        </div>

        <div className="work-exp">
          <h2>Work Experience</h2>

          <div className="work-wrapper">
            <div className="work-info">
              <h1>{workCompany}</h1>
              <h3>{workLocation}</h3>
              <h4>{workJobTitle}</h4>
              <h4>{`${workDateStart} ${workDateEnd}`}</h4>
            </div>
            <div className="work-core">
              <li>{workCoreResponsibility}</li>
              <li>{workCoreResponsibility}</li>
              <li>{workCoreResponsibility}</li>
            </div>
          </div>
          <div className="work-wrapper">
            <div className="work-info">
              <h1>{workCompany}</h1>
              <h3>{workLocation}</h3>
              <h4>{workJobTitle}</h4>
              <h4>{`${workDateStart} ${workDateEnd}`}</h4>
            </div>
            <div className="work-core">
              <li>{workCoreResponsibility}</li>
              <li>{workCoreResponsibility}</li>
              <li>{workCoreResponsibility}</li>
            </div>
          </div>
          <div className="work-wrapper">
            <div className="work-info">
              <h1>{workCompany}</h1>
              <h3>{workLocation}</h3>
              <h4>{workJobTitle}</h4>
              <h4>{`${workDateStart} ${workDateEnd}`}</h4>
            </div>
            <div className="work-core">
              <li>{workCoreResponsibility}</li>
              <li>{workCoreResponsibility}</li>
              <li>{workCoreResponsibility}</li>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="edu-wrapper">
            <div className="edu-info">
              <h2>{eduUniversity}</h2>
              <h3>{eduLocation}</h3>
              <h3>{eduDegree}</h3>
              <h4>{eduGradDate}</h4>
            </div>
            <li>Dean's List</li>
            <li>Dean's List</li>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill-wrapper">
            <div className="skills-info">
              <ListSkills skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResume;
