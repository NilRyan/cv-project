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
    eduUniversity,
    eduLocation,
    eduDegree,
    eduGradDate,
    eduAwards,
    work,
    skills,
  } = info;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="general">
          <h1>
            {genFirstName || `Bob`} {genLastName || `Arum`}
          </h1>

          <ul>
            <li>{genEmail || `email@email.com`}</li>
            <li>{genPhone || `012345678`}</li>
            <li>{genAddress || `Baguio City`}</li>
          </ul>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill-wrapper">
            <div className="skills-info">
              <ListSkills skills={skills} />
            </div>
          </div>
        </div>
        <div className="work-exp">
          <h2>Work Experience</h2>
          {work.length > 1 ? (
            work.map((element, index) => (
              <div key={index} className="work-wrapper">
                <div className="work-info">
                  <h1>{element.workCompany || `Company`}</h1>
                  <h3>{element.workLocation || `Location`}</h3>
                  <h4>{element.workJobTitle || `Job Title`}</h4>
                  <h4>
                    {element.workDateStart || `Month Year`}-
                    {element.workDateEnd || `Month Year`}
                  </h4>
                </div>
                <div className="work-core">
                  <li>
                    {element.workCoreResponsibility || `Core Responsibilities`}
                  </li>
                </div>
              </div>
            ))
          ) : (
            <div>
              <div className="work-wrapper">
                <div className="work-info">
                  <h1>Company</h1>
                  <h3>Location</h3>
                  <h4>Job Title</h4>
                  <h4>Month Year-Month Year</h4>
                </div>
                <div className="work-core">
                  <li>Core Responsibilities</li>
                </div>
              </div>
              <div className="work-wrapper">
                <div className="work-info">
                  <h1>Company</h1>
                  <h3>Location</h3>
                  <h4>Job Title</h4>
                  <h4>Month Year-Month Year</h4>
                </div>
                <div className="work-core">
                  <li>Core Responsibilities</li>
                </div>
              </div>
              <div className="work-wrapper">
                <div className="work-info">
                  <h1>Company</h1>
                  <h3>Location</h3>
                  <h4>Job Title</h4>
                  <h4>Month Year-Month Year</h4>
                </div>
                <div className="work-core">
                  <li>Core Responsibilities</li>
                </div>
              </div>
              <div className="work-wrapper">
                <div className="work-info">
                  <h1>Company</h1>
                  <h3>Location</h3>
                  <h4>Job Title</h4>
                  <h4>Month Year-Month Year</h4>
                </div>
                <div className="work-core">
                  <li>Core Responsibilities</li>
                </div>
              </div>
              <div className="work-wrapper">
                <div className="work-info">
                  <h1>Company</h1>
                  <h3>Location</h3>
                  <h4>Job Title</h4>
                  <h4>Month Year-Month Year</h4>
                </div>
                <div className="work-core">
                  <li>Core Responsibilities</li>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="edu-wrapper">
            <div className="edu-info">
              <h2>{eduUniversity || `University`}</h2>
              <h3>{eduLocation || `City, Region`}</h3>
              <h3>{eduDegree || `Degree`}</h3>
              <h4>{eduGradDate || `Graduation Date`}</h4>
            </div>
            {eduAwards.length > 1 ? (
              eduAwards.map((item, index) => (
                <li key={`${item}${index}`}>{item}</li>
              ))
            ) : (
              <>
                <li>Dean's Lister</li>
                <li>Nulla non enim do anim minim.</li>
                <li>Nulla non enim do anim minim.</li>
                <li>Nulla non enim do anim minim.</li>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResume;
