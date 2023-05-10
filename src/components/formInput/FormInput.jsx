import "./formInput.style.css";

const FormInput = ({ label, type, name }) => {
    // const onClickHandler = (e) => {
    //     alert(`Hi ${name}!`)
    // }

  const onChangeHandler = (e) => {
      if ("Murat" === e.target.value) {
          alert(`Hi ${e.target.value}`);
          console.log(`${e.target.value}`)
      }
      console.log(e.target.name, ":", e.target.value)
  };
  return (
    <div className="single-input">
      <label>{label}</label>
      <input type={type} name={name} onChange={onChangeHandler} />
    </div>
  );
};

export default FormInput;