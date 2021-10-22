

const Sort = (props) => {
  const {name, type, icon, BiIcons} = props;

  return (
    <div>
      {icon()} {name}
    </div>
  )
}

export default Sort;
