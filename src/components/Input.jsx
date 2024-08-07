/* eslint-disable react/prop-types */
export default function Input(props) {
  return (
    <div className="form-check form-switch d-flex justify-content-start ms-5 gap-3 fs-4">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={props.id}
        defaultChecked={props.value}
        onChange={props.handleChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.children}
      </label>
    </div>
  );
}
