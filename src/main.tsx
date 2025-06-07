import mantineTheme from '@/shared/configs/mantine-theme';
import { ThemeProvider, Toaster, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
const toaster = new Toaster();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={mantineTheme}>
    <Notifications position="top-center" color="green" />
    <ThemeProvider theme="light">
      <ToasterProvider toaster={toaster}>
        <ToasterComponent />
        <App />
      </ToasterProvider>
    </ThemeProvider>
  </MantineProvider>
);
