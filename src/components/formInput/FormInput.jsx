import "./formInput.style.css";

const FormInput = ({label, type}) => {
    return (
        <div className="single-input">
            <label>{label}</label>
            <input type={type} />
        </div>
    );
}

export default FormInput;