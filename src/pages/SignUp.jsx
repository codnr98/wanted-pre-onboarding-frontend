import {useState} from "react";
import EmailInput from "../components/EmailInput";
import validationEmail from "../utils/validationEmail";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmailSuccess, setIsEmailSuccess] = useState({
    isSuccess: "",
    errorMessage: "",
  });

  const handleChangeEmail = (e) => {
    const {value} = e.target;
    setEmail(value);
    validationEmail(value, setIsEmailSuccess);
  };

  return (
    <div>
      <h1 className='text-3xl'>Sign Up</h1>
      <EmailInput
        id={"signup__email-input"}
        value={email}
        onChange={handleChangeEmail}
      />
    </div>
  );
}

export default SignUp;
