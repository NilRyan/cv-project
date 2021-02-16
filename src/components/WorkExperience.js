import React, { Component } from 'react';

export class WorkExperience extends Component {
  render() {
    const {
      company,
      jobTitle,
      location,
      coreResponsibility,
      dateStart,
      dateEnd,
    } = this.props;

    return (
      <div>
        <form className="work-experience">
          <input
            name="company"
            value={company}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Company Name"
          />
          <input
            name="jobTitle"
            value={jobTitle}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Job Title"
          />
          <input
            name="location"
            value={location}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
          />
          <input
            name="coreResponsibility"
            value={coreResponsibility}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Core Reponsibility"
          />
          <input
            name="dateStart"
            value={dateStart}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Date Start"
          />
          <input
            name="dateEnd"
            value={dateEnd}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Date End"
          />
        </form>
      </div>
    );
  }
}

export default WorkExperience;
