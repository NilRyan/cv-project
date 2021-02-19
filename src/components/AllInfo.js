/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default */
import React, { Component, useRef } from 'react';
import '../styles/AllInfo.css';
import DisplayResume from './output/DisplayResume';
import EducationalInfo from './input/EducationInfo';
import SkillsInfo from './input/SkillsInfo';
import WorkExperience from './input/WorkExperience';
import GeneralInfo from './input/GeneralInfo';
import Header from './output/Header';
import AddWork from './input/AddWork';

export class AllInfo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      genFirstName: '',
      genLastName: '',
      genAddress: '',
      genEmail: '',
      genPhone: '',
      work: [
        {
          workCompany: '',
          workJobTitle: '',
          workLocation: '',
          workCoreResponsibility: '',
          workDateStart: '',
          workDateEnd: '',
        },
      ],
      eduUniversity: '',
      eduLocation: '',
      eduDegree: '',
      eduGradDate: '',
      eduAwards: [],
      eduAward: '',
      skill: '',
      skills: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.workInputChange = this.workInputChange.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleRemoveWork = this.handleRemoveWork.bind(this);
    this.handleEduSubmit = this.handleEduSubmit.bind(this);
    this.handleRemoveAward = this.handleRemoveAward.bind(this);
    this.handleRemoveSkill = this.handleRemoveSkill.bind(this);
    this.scrollIntoInput = this.scrollIntoInput.bind(this);
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

  handleRemoveSkill(index) {
    const values = [...this.state.skills];
    values.splice(index, 1);
    this.setState(() => ({
      skills: values,
    }));
  }

  handleEduSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      eduAwards: [...prevState.eduAwards, prevState.eduAward],
      eduAward: '',
    }));
  }

  handleAddWork() {
    this.setState((prevState) => ({
      work: [
        ...prevState.work,
        {
          workCompany: '',
          workJobTitle: '',
          workLocation: '',
          workCoreResponsibility: '',
          workDateStart: '',
          workDateEnd: '',
        },
      ],
    }));
  }

  handleRemoveWork(index) {
    const values = [...this.state.work];
    values.splice(index, 1);
    this.setState(() => ({
      work: values,
    }));
  }

  handleRemoveAward(index) {
    const values = [...this.state.eduAwards];
    values.splice(index, 1);
    this.setState(() => ({
      eduAwards: values,
    }));
  }

  scrollIntoInput() {
    this.inputRef.current.scrollIntoView();
  }

  workInputChange(index, e) {
    const values = [...this.state.work];
    values[index][e.target.name] = e.target.value;
    this.setState(() => ({
      work: values,
    }));
  }

  render() {
    const { skills, work } = this.state;
    return (
      <div>
        <Header onClick={this.scrollIntoInput} />
        <DisplayResume skills={skills} info={this.state} />
        <div ref={this.inputRef} className="input-wrapper">
          <h1 className="header">General Info</h1>
          <GeneralInfo
            data={this.state}
            onInputChange={this.handleInputChange}
          />
          <h1 className="header">Work Experience</h1>
          <WorkExperience data={work} onInputChange={this.workInputChange} />
          <AddWork
            onAdd={this.handleAddWork}
            onDelete={this.handleRemoveWork}
          />
          <h1 className="header">Education</h1>
          <EducationalInfo
            data={this.state}
            onInputChange={this.handleInputChange}
            onEduInputChange={this.handleEduSubmit}
            onRemoveAward={this.handleRemoveAward}
          />
          <h1 className="header">Skills</h1>

          <SkillsInfo
            data={this.state}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            onRemoveSkill={this.handleRemoveSkill}
          />
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              behavior: 'smooth',
              top: 0,
            })
          }
          className="scroll-cv"
        >
          <button className="scroll-button">SCROLL TO CV</button>
        </div>
      </div>
    );
  }
}

export default AllInfo;
