import './filterByFlag.css';

const FilterByFlag = (props) => {
  const { setFilterCreateBy, setCurrentPage } = props;

  function onChangeValue(e) {
    setFilterCreateBy(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div className='wrap'>

      <div class="info">
        <p>Created By</p>
      </div>

      <form action="" class="formulario">
        <div className="radio">
          <input type="radio" value="All" name="type" id="createByAll" defaultChecked="true" onClick={onChangeValue} />
          <label htmlFor="createByAll">All</label>
          <input type="radio" value="My" name="type" id="createByMy" onClick={onChangeValue} />
          <label htmlFor="createByMy">My</label>

          <input type="radio" value="API" name="type" id="createByApi" onClick={onChangeValue} />
          <label htmlFor="createByApi">API</label>

        </div>
      </form>
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