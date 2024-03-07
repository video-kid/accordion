import { TasksPage } from './pages/Tasks/TasksPage';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globals';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <TasksPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
