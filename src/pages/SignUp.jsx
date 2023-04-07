import {useState} from "react";
import EmailInput from "../components/EmailInput";
import validationEmail from "../utils/validationEmail";
import PasswordInput from "../components/PasswordInput";
import validationPassword from "../utils/validationPassword";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmailSuccess, setIsEmailSuccess] = useState({
    isSuccess: true,
    errorMessage: "",
  });
  const [password, setPassword] = useState("");
  const [isPasswordSuccess, setIsPasswordSuccess] = useState({
    isSuccess: true,
    errorMessage: "",
  });

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

  return (
    <div>
      <h1 className='text-3xl'>Sign Up</h1>
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
    </div>
  );
}

export default SignUp;
