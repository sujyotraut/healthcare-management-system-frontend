import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NotificationsContextProvider } from './contexts/notifications.context';
import { UserContextProvider } from './contexts/user.context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <NotificationsContextProvider>
        <App />
      </NotificationsContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
