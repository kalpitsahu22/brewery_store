import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <>
      <ButtonIcon
        disabled={isLoading}
        onClick={logout}
        style={{ margin: "10px", border: "1.5px solid #ddd" }}
      >
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
        <p style={{ padding: "10px" }}>Logout</p>
      </ButtonIcon>
    </>
  );
}

export default Logout;
