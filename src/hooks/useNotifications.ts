import { useContext } from 'react';
import NotificationsContext from '../contexts/notifications.context';

const useNotifications = () => useContext(NotificationsContext);

export default useNotifications;
