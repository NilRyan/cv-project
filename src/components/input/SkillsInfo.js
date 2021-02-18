/* eslint-disable react/jsx-no-undef */
/* eslint react/prop-types: 0 */
import { IconContext } from 'react-icons';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';

const SkillsInfo = (props) => {
  const { data, onInputChange, onSubmit, onRemoveSkill } = props;
  const { skill } = data;
  return (
    <form className="skills-info" onSubmit={onSubmit}>
      <div>
        <input
          name="skill"
          type="text"
          placeholder="skills..."
          value={skill}
          onChange={onInputChange}
        />
        <div>
          <button type="submit">
            <IconContext.Provider value={{ color: '#4caf50', size: '50px' }}>
              <IoIosAddCircleOutline />
            </IconContext.Provider>
          </button>
          <button onClick={onRemoveSkill} className="add-work" type="button">
            <IconContext.Provider value={{ color: 'red', size: '50px' }}>
              <IoIosRemoveCircleOutline />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SkillsInfo;
