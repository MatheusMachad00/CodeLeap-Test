import { PopUp, PopUpBody, PopUpButton } from "./style";
import { useState } from "react";

export default function SignupScreen() {
  const [username, setUsername] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);

  function changeColor(username) {
    setUsername(username);
    setIsEnabled(true);
  }

  return (
    <PopUp>
      <form onSubmit="">
        <PopUpBody>
          <h1>Welcome to CodeLeap network!</h1>
          <div>
            <h2>Please enter your username</h2>
            <input
              placeholder="John doe"
              onChange={(e) => changeColor(e.target.value)}
              type="text"
            ></input>
          </div>
        </PopUpBody>
        <PopUpButton type="submit" isEnabled={isEnabled}>
          ENTER
        </PopUpButton>
      </form>
    </PopUp>
  );
}
