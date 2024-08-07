/* eslint-disable react/prop-types */
import Input from "./Input";
export default function InputGroup(props) {
  return (
    <div className="mt-3 d-flex flex-column gap-2">
      <Input
        id="uprCase"
        handleChange={props.handleUprCaseAllowed}
        value={props.uprCaseAllowed}
      >
        Include Uppercase characters
      </Input>

      <Input
        id="number"
        handleChange={props.handleNumAllowed}
        value={props.numberAllowed}
      >
        Include numbers
      </Input>

      <Input
        id="specialChar"
        handleChange={props.handleSpecialCharAllowed}
        value={props.charAllowed}
      >
        Include special characters
      </Input>
    </div>
  );
}
