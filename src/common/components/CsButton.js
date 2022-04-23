const CustomizeButton = (props) => {
  const { onClick, icon, text } = props
  return (
    <div className="button__customize " onClick={onClick}>
      <img src={icon} alt="" />
      <span className="button__title">{text}</span>
    </div>
  )
}

export default CustomizeButton
