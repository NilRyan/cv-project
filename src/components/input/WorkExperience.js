/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export class WorkExperience extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, onInputChange } = this.props;
    const {
      // eslint-disable-next-line react/prop-types
      workCompany,
      workJobTitle,
      workLocation,
      workCoreResponsibility,
      workDateStart,
      workDateEnd,
    } = data;

    return (
      <form className="work-experience">
        <input
          name="workCompany"
          value={workCompany}
          onChange={onInputChange}
          type="text"
          placeholder="Company Name"
        />
        <input
          name="workJobTitle"
          value={workJobTitle}
          onChange={onInputChange}
          type="text"
          placeholder="Job Title"
        />
        <input
          name="workLocation"
          value={workLocation}
          onChange={onInputChange}
          type="text"
          placeholder="Location"
        />
        <input
          name="workCoreResponsibility"
          value={workCoreResponsibility}
          onChange={onInputChange}
          type="text"
          placeholder="Core Reponsibility"
        />
        <input
          name="workDateStart"
          value={workDateStart}
          onChange={onInputChange}
          type="text"
          placeholder="Date Start"
        />
        <input
          name="workDateEnd"
          value={workDateEnd}
          onChange={onInputChange}
          type="text"
          placeholder="Date End"
        />
      </form>
    );
  }
}

export default WorkExperience;
