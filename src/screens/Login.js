import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { isDarkModeVar, isLoggedVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const Login = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);

  return (
    <div>
      <Title>Plz Login</Title>
      <button onClick={() => isLoggedVar(true)}>Login</button>
      <button onClick={() => isDarkModeVar(!isDarkMode)}>
        Dark Mode : {`${isDarkMode}`}
      </button>
    </div>
  );
};
export default Login;
