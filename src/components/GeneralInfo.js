import React, { Component } from 'react';
import '../styles/container.css';
import DisplayResume from './DisplayResume';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genFirstName: '',
      genLastName: '',
      genAddress: '',
      genEmail: '',
      genPhone: '',
      workCompany: '',
      workJobTitle: '',
      workLocation: '',
      workCoreResponsibility: '',
      workDateStart: '',
      workDateEnd: '',
      eduUniversity: '',
      eduLocation: '',
      eduDegree: '',
      eduGradDate: '',
      skill: '',
      skills: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      skills: [...prevState.skills, prevState.skill],
      skill: '',
    }));
  }

  render() {
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
      skill,
      skills,
    } = this.state;
    return (
      <div>
        <form className="general-info">
          <input
            name="genFirstName"
            value={genFirstName}
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            name="genLastName"
            value={genLastName}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            name="genEmail"
            value={genEmail}
            onChange={this.handleInputChange}
            type="text"
            placeholder="email"
          />
          <input
            name="genPhone"
            value={genPhone}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Phone Number"
          />
          <input
            name="genAddress"
            value={genAddress}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Address"
          />
        </form>
        <form className="work">
          <input
            name="workCompany"
            value={workCompany}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Company Name"
          />
          <input
            name="workJobTitle"
            value={workJobTitle}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Job Title"
          />
          <input
            name="workLocation"
            value={workLocation}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
          />
          <input
            name="workCoreResponsibility"
            value={workCoreResponsibility}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Core Reponsibility"
          />
          <input
            name="workDateStart"
            value={workDateStart}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Date Start"
          />
          <input
            name="workDateEnd"
            value={workDateEnd}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Date End"
          />
        </form>
        <form className="education">
          <input
            name="eduUniversity"
            value={eduUniversity}
            onChange={this.handleInputChange}
            type="text"
            placeholder="University"
          />
          <input
            name="eduLocation"
            value={eduLocation}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
          />
          <input
            name="eduDegree"
            value={eduDegree}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Degree/Major"
          />
          <input
            name="eduGradDate"
            value={eduGradDate}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Graduation Month, Year"
          />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input
            name="skill"
            type="text"
            placeholder="skills..."
            value={skill}
            onChange={this.handleInputChange}
          />
          <button type="submit">submit</button>
        </form>
        <DisplayResume skills={skills} info={this.state} />
      </div>
    );
  }
}

export default GeneralInfo;
