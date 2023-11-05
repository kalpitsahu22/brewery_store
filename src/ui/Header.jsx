import styled from "styled-components";
import Logout from "../features/authentication/Logout";
// import { useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  background-color: #f9fafb;
`;

function HeaderMenu() {
  //   const navigate = useNavigate();

  return (
    <>
      <StyledHeaderMenu>
        <span
          style={{
            display: "flex",
            fontSize: "25px",
            fontWeight: "800",
            color: "rgb(101, 137, 148)",
            marginRight: "270px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Welcome to the Brewery Store
        </span>
        <Logout />
      </StyledHeaderMenu>
    </>
  );
}

export default HeaderMenu;
