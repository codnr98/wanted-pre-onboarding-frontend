import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import validationEmail from "../utils/validationEmail";
import validationPassword from "../utils/validationPassword";
import postSignIn from "../apis/postSignIn";
import {buttonStyle} from "../utils/globalStyle";

function SignIn() {
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
      const data = await postSignIn(pathData);
      localStorage.setItem("access_token", data.access_token);
      if (localStorage.getItem("access_token")) navigate("/todo");
    } catch (error) {}
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, []);

  return (
    <div className=' w-full'>
      <h1 className='text-3xl'>Sign In</h1>
      <form className=' space-y-1'>
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
          className={buttonStyle}
          onClick={handleClick}
          type='submit'
          data-testid='signin-button'
          disabled={isSuccess ? null : "disabled"}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
