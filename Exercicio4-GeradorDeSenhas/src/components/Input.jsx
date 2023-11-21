import PropTypes from "prop-types";
Input.PropTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};

export default function Input(props) {
  return (
    <>
      <label htmlFor="tamanho">Size: </label>
      <input
        type="number"
        value={props.passwordSize}
        onChange={(ev) => props.setPasswordSize(ev.target.value)}
        style={{
          marginBottom: "15px",
        }}
      />
    </>
  );
}
