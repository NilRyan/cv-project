/* eslint react/prop-types: 0 */
const SkillsInfo = (props) => {
  const { data, onInputChange, onSubmit } = props;
  const { skill } = data;
  return (
    <form onSubmit={onSubmit}>
      <input
        name="skill"
        type="text"
        placeholder="skills..."
        value={skill}
        onChange={onInputChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default SkillsInfo;
