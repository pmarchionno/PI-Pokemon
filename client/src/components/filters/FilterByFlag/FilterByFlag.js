
const FilterByFlag = (props) => {
  const {setFilterCreateBy} = props;

  function onChangeValue(e) {
    setFilterCreateBy(e.target.value);
  }

  return (
    <div>
      Created By
      <div onChange={onChangeValue}>
        <label>
          <input type="radio" value="All" name="gender" defaultChecked="true" />
          All
        </label>

        <label>
        <input type="radio" value="My" name="gender" />
         My
        </label>

        <label>
        <input type="radio" value="API" name="gender" />
         API
        </label>
      </div>
    </div>

    // <select className="selectFlag" name="selectFlag" onChange={filter}>
    //   <option key={"selectFlag"} selected disabled>
    //     Create By
    //   </option>
    //   {dogNames.map((name) => (
    //     <option key={name} value={name}>
    //       {name}
    //     </option>
    //   ))}
    // </select>
  );
}

export default FilterByFlag;