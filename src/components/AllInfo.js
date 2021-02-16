/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import '../styles/AllInfo.css';
import DisplayResume from './output/DisplayResume';
import EducationalInfo from './input/EducationInfo';
import SkillsInfo from './input/SkillsInfo';
import WorkExperience from './input/WorkExperience';
import GeneralInfo from './input/GeneralInfo';
import Header from './output/Header';

export class AllInfo extends Component {
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
    console.log(e.target);
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
    const { skills } = this.state;
    return (
      <div>
        <Header />
        <div className="input-wrapper">
          <h1 className="header">General Info</h1>
          <GeneralInfo
            data={this.state}
            onInputChange={this.handleInputChange}
          />
          <h1 className="header">Work Experience</h1>
          <WorkExperience
            data={this.state}
            onInputChange={this.handleInputChange}
          />
          <h1 className="header">Education</h1>
          <EducationalInfo
            data={this.state}
            onInputChange={this.handleInputChange}
          />
          <h1 className="header">Skills</h1>
          <SkillsInfo
            data={this.state}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <DisplayResume skills={skills} info={this.state} />
      </div>
    );
  }
}

export default AllInfo;
