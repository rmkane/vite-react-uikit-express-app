import { Suspense, lazy, useEffect, useState } from "react";
import NotificationList from "../common/NotificationList";
import { Notification } from "../common/NotificationItem";

function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/notifications");
      const json = await response.json();
      setNotifications(json);
    })();
  }, []);

  return (
    <>
      <h1>Notifications</h1>
      <NotificationList notifications={notifications} />
    </>
  );
}

export default Notifications;
