import FormInput from "../formInput/FormInput";
import MyButton from "../myButton/MyButton";
import "./customForm.style.css";

const CustomForm = () => {
    return (
      <form className="sign-up">
        <FormInput label="Name" type="text" name="DisplayName" />
        <FormInput label="EMail" type="email" name="email" />
        <FormInput label="Password" type="password" name="password" />
        <FormInput label="Confirm Password" type="password" name="confirmPassword" />
        <FormInput label="Agree to terms" type="checkbox" name="checkbox" />
        <MyButton name="Submit" type="large" />
      </form>
    );
}

export default CustomForm;