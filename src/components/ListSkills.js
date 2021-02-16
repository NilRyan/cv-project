/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class ListSkills extends Component {
  listSkills() {
    const { skills } = this.props;
    return skills.map((item, index) => (
      <li key={`${item}${index}`}>{item},</li>
    ));
  }

  render() {
    return <ul> {this.listSkills()}</ul>;
  }
}
