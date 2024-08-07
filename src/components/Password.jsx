/* eslint-disable react/prop-types */
export default function Password({ pass, handleCopy }) {
  return (
    <div className="d-flex gap-1">
      <input
        type="text"
        id="password"
        className="form-control rounded p-2 fs-2"
        placeholder="    Password"
        readOnly
        value={pass}
      />
          <button className="btn btn-outline-primary px-4 rounded text-wrap fs-3"
          onClick={handleCopy}>
        Copy
      </button>
    </div>
  );
}
