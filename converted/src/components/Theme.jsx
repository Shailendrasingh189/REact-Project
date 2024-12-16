export default function Theme(props) {
  return (
    <div
      className={`text-dark mx-md-3`}
      style={{ cursor: "pointer" }}
    >
        
      {/* <select className="form-select-sm mx-md-1 " aria-label="Small select example" id="selectTheme">
        <option selected>light</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>  */}
      <button onClick={props.changeTheme}>change theme</button>
      {/* <label className="form-label" htmlFor="selectTheme"> Mode</label> */}
    </div>
  );
}
