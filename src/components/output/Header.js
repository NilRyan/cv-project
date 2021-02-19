/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { IoCreateOutline } from 'react-icons/io5';

const Header = ({ onClick }) => (
  <div className="head">
    <h1 onClick={onClick}>
      Create Your Resume! <IoCreateOutline />
    </h1>
  </div>
);

export default Header;
