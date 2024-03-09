import { TasksPage } from './pages/Tasks/TasksPage';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globals';
import TasksProvider from './context/tasksContext';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <TasksProvider>
          <TasksPage />
        </TasksProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
