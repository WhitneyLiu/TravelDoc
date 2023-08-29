import { logout } from "../../../redux/reducer/authenticationReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <h1>This is home page</h1>
      <button onClick={handleLogout}>log out</button>
    </>
  );
}
