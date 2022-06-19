import React, { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'loading' | 'success' | 'fail';
  removeSelf?: () => void;
}

interface NotificationContextType {
  getNotifications: () => Array<Notification>;
  pushNotification: (notification: Omit<Notification, 'id'>) => string;
  updateNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

const initialValue: NotificationContextType = {
  getNotifications: () => [],
  pushNotification: () => '',
  updateNotification: () => {},
  removeNotification: () => {},
};

const NotificationsContext = React.createContext<NotificationContextType>(initialValue);

export const NotificationsContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Array<Notification>>([]);

  const getNotifications = () => notifications;

  const pushNotification = (notification: Omit<Notification, 'id'>) => {
    // Generate id for notification
    const id = Math.random().toString(36).slice(2);

    // Add generated id & removeSelf property to notification
    Object.defineProperties(notification, {
      id: { value: id, writable: true, enumerable: true, configurable: true },
      removeSelf: { value: () => removeNotification(id), writable: true, enumerable: true, configurable: true },
    });

    // Add notification to notifications list
    setNotifications((prevNotifications) => [...prevNotifications, notification as Notification]);

    // Return notification id
    return id;
  };

  const updateNotification = (notification: Notification) => {
    setNotifications((notifications) => {
      // Get index of given notification
      const i = notifications.findIndex((value) => value.id === notification.id);

      // Update old notification with new notification
      notifications[i] = notification;

      // Add removeSelf property to new notification
      notifications[i].removeSelf = () => removeNotification(notifications[i].id);

      // Update notifications
      return [...notifications];
    });
  };

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications) => prevNotifications.filter((a) => a.id !== id));
  }

  return (
    <NotificationsContext.Provider
      value={{
        getNotifications,
        pushNotification,
        updateNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContext;
