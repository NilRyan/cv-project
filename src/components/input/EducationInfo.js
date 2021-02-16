/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export class EducationalInfo extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, onInputChange } = this.props;
    const {
      // eslint-disable-next-line react/prop-types
      eduUniversity,
      eduLocation,
      eduDegree,
      eduGradDate,
    } = data;

    return (
      <form className="edu">
        <input
          name="eduUniversity"
          value={eduUniversity}
          onChange={onInputChange}
          type="text"
          placeholder="University"
        />
        <input
          name="eduLocation"
          value={eduLocation}
          onChange={onInputChange}
          type="text"
          placeholder="Location"
        />
        <input
          name="eduDegree"
          value={eduDegree}
          onChange={onInputChange}
          type="text"
          placeholder="Degree/Major"
        />
        <input
          name="eduGradDate"
          value={eduGradDate}
          onChange={onInputChange}
          type="text"
          placeholder="Graduation Month, Year"
        />
      </form>
    );
  }
}

export default EducationalInfo;
