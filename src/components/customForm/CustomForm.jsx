import FormInput from "../formInput/FormInput";
import MyButton from "../myButton/MyButton";
import "./customForm.style.css";

const CustomForm = () => {
    return (
      <form className="sign-up">
        <FormInput label="Name" type="text" />
        <FormInput label="EMail" type="email" />
        <FormInput label="Password" type="password" />
        <FormInput label="Confirm Password" type="password" />
        <FormInput label="Agree to terms" type="checkbox" />
        <MyButton name="Submit" type="large" />
      </form>
    );
}

export default CustomForm;