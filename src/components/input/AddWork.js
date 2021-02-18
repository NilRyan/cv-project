/* eslint-disable react/prop-types */
import { IconContext } from 'react-icons';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';

const AddWork = ({ onAdd, onDelete }) => (
  <div className="work-button-wrapper">
    <button onClick={onAdd} className="add-work" type="button">
      <IconContext.Provider value={{ color: '#4caf50', size: '50px' }}>
        <IoIosAddCircleOutline />
      </IconContext.Provider>
    </button>
    <button onClick={onDelete} className="add-work" type="button">
      <IconContext.Provider value={{ color: 'red', size: '50px' }}>
        <IoIosRemoveCircleOutline />
      </IconContext.Provider>
    </button>
  </div>
);

export default AddWork;
