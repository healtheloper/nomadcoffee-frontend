import { useReactiveVar } from "@apollo/client";
import { isDarkModeVar, isLoggedVar } from "../apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Home = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <div>
      <Title>Home</Title>
      <button onClick={() => isLoggedVar(false)}>Logout</button>
      <button onClick={() => isDarkModeVar(!isDarkMode)}>
        Dark Mode : {`${isDarkMode}`}
      </button>
    </div>
  );
};
export default Home;
