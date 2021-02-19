/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class ListSkills extends Component {
  listSkills() {
    const { skills } = this.props;
    return skills.map((item, index) => <li key={`${item}${index}`}>{item}</li>);
  }

  render() {
    const { skills } = this.props;
    if (skills.length > 0) {
      return <ul> {this.listSkills()}</ul>;
    }
    return (
      <ul>
        <li>
          Languages: Javascript, TypeScript, Java, Dart, FORTRAN, COBOL, Ruby,
          Swift, Go, C#, C++, SQL, Haskell, Lisp, Rust
        </li>
        <li>Frameworks,Libraries: ReactJS, AngularJS, VueJS, NodeJS </li>
        <li>Tools: Docker, AWS, ExpressJS, WebPack, Babel</li>
      </ul>
    );
  }
}
