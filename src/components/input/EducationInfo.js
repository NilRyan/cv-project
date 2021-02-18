/* eslint-disable react/button-has-type */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';

export class EducationalInfo extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, onInputChange, onEduInputChange, onRemoveAward } = this.props;
    const {
      // eslint-disable-next-line react/prop-types
      eduUniversity,
      eduLocation,
      eduDegree,
      eduGradDate,
      eduAward,
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

        <div className="awards">
          <input
            name="eduAward"
            value={eduAward}
            onChange={onInputChange}
            type="text"
            placeholder="Awards, Achievement"
          />
          <button onClick={onEduInputChange}>
            <IconContext.Provider value={{ color: '#4caf50', size: '20px' }}>
              <IoIosAddCircleOutline />
            </IconContext.Provider>
          </button>
          <button onClick={onRemoveAward} className="add-work" type="button">
            <IconContext.Provider value={{ color: 'red', size: '20px' }}>
              <IoIosRemoveCircleOutline />
            </IconContext.Provider>
          </button>
        </div>
      </form>
    );
  }
}

export default EducationalInfo;
