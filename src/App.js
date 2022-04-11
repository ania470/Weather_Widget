import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { WeatherWidget } from 'components/WeatherWidget';
import { theme } from 'assets/styles/theme';
import img from 'assets/images/sky-bg.png';

const Wrapper = styled.div`
  padding: 40px 20px;
  box-sizing: border-box;
  min-height: 300px;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  border-radius: 15px;
  margin-top: 150px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <WeatherWidget />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
