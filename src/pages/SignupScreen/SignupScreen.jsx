import { PopUp, PopUpBody, PopUpButton } from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function SignupScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeColor(username) {
    if (username.length > 0) {
      setIsEnabled(true);
      setName(username);
    } else setIsEnabled(false);
  }

  function confirmUsername() {
    dispatch(setUsername(name));
    navigate("/home");
  }

  return (
    <PopUp>
      <form onSubmit={confirmUsername}>
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
