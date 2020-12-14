export default function Border(props) {
  return (
    <div className="withBorder">
      <div className="header">
        {props.header()}
      </div>
      <div className="body">
        {props.children}
      </div>
    </div>
  )
}