/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export class WorkExperience extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, onInputChange } = this.props;

    return (
      <form className="work-experience">
        {data.map((element, index) => (
          <div key={index}>
            <input
              name="workCompany"
              value={element.workCompany}
              onChange={(e) => onInputChange(index, e)}
              type="text"
              placeholder="Company Name"
            />
            <input
              name="workJobTitle"
              value={element.workJobTitle}
              onChange={(e) => onInputChange(index, e)}
              type="text"
              placeholder="Job Title"
            />
            <input
              name="workLocation"
              value={element.workLocation}
              onChange={(e) => onInputChange(index, e)}
              type="text"
              placeholder="Location"
            />
            <input
              name="workCoreResponsibility"
              value={element.workCoreResponsibility}
              onChange={(e) => onInputChange(index, e)}
              type="text"
              placeholder="Core Reponsibility"
            />
            <input
              name="workDateStart"
              value={element.workDateStart}
              onChange={(e) => onInputChange(index, e)}
              type="text"
              placeholder="Date Start"
            />
            <input
              name="workDateEnd"
              value={element.workDateEnd}
              onChange={(e) => onInputChange(index, e)}
              type="text"
              placeholder="Date End"
            />
          </div>
        ))}
      </form>
    );
  }
}

export default WorkExperience;
