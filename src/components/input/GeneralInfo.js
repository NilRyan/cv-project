/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export class GeneralInfo extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, onInputChange } = this.props;
    const {
      // eslint-disable-next-line react/prop-types
      genFirstName,
      genLastName,
      genEmail,
      genAddress,
      genPhone,
    } = data;

    return (
      <form className="general-info">
        <input
          name="genFirstName"
          value={genFirstName}
          onChange={onInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          name="genLastName"
          value={genLastName}
          onChange={onInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          name="genEmail"
          value={genEmail}
          onChange={onInputChange}
          type="text"
          placeholder="email"
        />
        <input
          name="genPhone"
          value={genPhone}
          onChange={onInputChange}
          type="text"
          placeholder="Phone Number"
        />
        <input
          name="genAddress"
          value={genAddress}
          onChange={onInputChange}
          type="text"
          placeholder="Address"
        />
      </form>
    );
  }
}

export default GeneralInfo;
