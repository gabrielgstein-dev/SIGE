import { ThemeProvider } from 'styled-components';
import { Gateway } from './routes';
import { GlobalStyles, theme } from 'src/theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Gateway />
      </ThemeProvider>
    </Router>
  );
}

export default App;
