import React from "react";
import styled from "styled-components";

import Icon from "react-eva-icons";
import { Grommet } from "grommet";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import { neutral, light } from "./utils/theme";
import grommetTheme from "./utils/grommetTheme";

const Wrapper = styled.div`
  padding: 2em 4em;
  background-color: ${light};

  min-height: calc(100vh - 2 * 2em);
  /* max-height: calc(100vh - 4em); */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: "Prata", serif;
`;

const CTA = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  align-self: flex-end;

  cursor: pointer;

  font-family: "Prompt", sans-serif;
  font-size: 1rem;
  color: ${neutral[300]};
  svg {
    fill: ${neutral[300]};
    margin-right: 0.5rem;
  }

  text-decoration: none;

  &:hover {
    color: ${props => props.baseColor};
    svg {
      fill: ${props => props.baseColor};
    }
  }
`;

const App = props => {
  const { baseColor, gradient } = props;

  return (
    <Grommet theme={grommetTheme(baseColor)}>
      <Wrapper>
        <CTA
          baseColor={baseColor}
          href="https://github.com/dimitrisraptis96/underline-generator"
        >
          <Icon
            name="github"
            fill="black"
            size="large"
            animation={{
              type: "pulse",
              hover: false,
              infinite: false,
            }}
          />
        </CTA>
        <Header baseColor={baseColor} gradient={gradient} />
        <Body {...props} baseColor={baseColor} />
        <Footer baseColor={baseColor} />
      </Wrapper>
    </Grommet>
  );
};

export default App;
