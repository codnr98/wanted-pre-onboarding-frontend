import {useState} from "react";
import EmailInput from "../components/EmailInput";
import validationEmail from "../utils/validationEmail";
import PasswordInput from "../components/PasswordInput";
import validationPassword from "../utils/validationPassword";
import postSignUp from "../apis/postSignUp";
import {useNavigate} from "react-router";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmailSuccess, setIsEmailSuccess] = useState({
    isSuccess: false,
    errorMessage: "",
  });
  const [password, setPassword] = useState("");
  const [isPasswordSuccess, setIsPasswordSuccess] = useState({
    isSuccess: false,
    errorMessage: "",
  });

  const isSuccess = isEmailSuccess.isSuccess && isPasswordSuccess.isSuccess;
  const navigate = useNavigate();

  const pathData = {
    email: "",
    password: "",
  };

  const handleChangeEmail = (e) => {
    const {value} = e.target;
    setEmail(value);
    validationEmail(value, setIsEmailSuccess);
  };

  const handleChangePassword = (e) => {
    const {value} = e.target;
    setPassword(value);
    validationPassword(value, setIsPasswordSuccess);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    validationEmail(email, setIsEmailSuccess);
    validationPassword(password, setIsPasswordSuccess);
    pathData.email = email;
    pathData.password = password;
    try {
      await postSignUp(pathData);
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='text-3xl'>Sign Up</h1>
      <form>
        <EmailInput
          id={"signup__email-input"}
          value={email}
          onChange={handleChangeEmail}
          errorMessage={isEmailSuccess.errorMessage}
        />
        <PasswordInput
          id={"signup__password-input"}
          value={password}
          onChange={handleChangePassword}
          errorMessage={isPasswordSuccess.errorMessage}
        />
        <button
          className='border p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300'
          onClick={handleClick}
          type='submit'
          data-testid='signup-button'
          disabled={isSuccess ? null : "disabled"}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
