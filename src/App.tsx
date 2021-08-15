import { Container, ThemeProvider } from '@material-ui/core'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyle />
        <Container color="primary">
          <h1>Hello World!</h1>
        </Container>
        <CssBaseline />
      </StyledComponentsThemeProvider>
    </ThemeProvider>
  )
}