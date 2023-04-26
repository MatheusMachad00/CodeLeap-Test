import { PopUp, PopUpBody, PopUpButton } from "./style";

export default function SignupScreen() {
  return (
    <PopUp>
      <PopUpBody>
        <h1>Welcome to CodeLeap network!</h1>
        <div>
          <h2>Please enter your username</h2>
          <input placeholder="John doe"></input>
        </div>
      </PopUpBody>
      <PopUpButton>ENTER</PopUpButton>
    </PopUp>
  );
}
