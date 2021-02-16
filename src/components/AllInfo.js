/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import '../styles/container.css';
import DisplayResume from './output/DisplayResume';
import EducationalInfo from './input/EducationInfo';
import SkillsInfo from './input/SkillsInfo';
import WorkExperience from './input/WorkExperience';
import GeneralInfo from './input/GeneralInfo';

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
        <GeneralInfo data={this.state} onInputChange={this.handleInputChange} />
        <WorkExperience
          data={this.state}
          onInputChange={this.handleInputChange}
        />
        <EducationalInfo
          data={this.state}
          onInputChange={this.handleInputChange}
        />

        <SkillsInfo
          data={this.state}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        <DisplayResume skills={skills} info={this.state} />
      </div>
    );
  }
}

export default AllInfo;
