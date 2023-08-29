import Warning from "../../../sharable-components/Warning";
import {
  containsNumber,
  containsSpecialCharacter,
  containsUppercase,
  containsLowercase,
} from "../../../../helper/password";

export default function PasswordCheck(props) {
  const password = props.password;
  if (password === "") return;
  return (
    <div className="space-y-1">
      {password.length < 8 && <Warning message="8-character minimum" />}
      {!containsNumber(password) && (
        <Warning message="Contains at least 1 number" />
      )}
      {!containsSpecialCharacter(password) && (
        <Warning message="Contains at least 1 special character" />
      )}
      {!containsUppercase(password) && (
        <Warning message="Contains at least 1 uppercase letter" />
      )}
      {!containsLowercase(password) && (
        <Warning message="Contains at least 1 lowercase letter" />
      )}
    </div>
  );
}
