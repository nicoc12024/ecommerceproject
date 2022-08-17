import { useState, createContext } from "react";

const Notification = ({ message, severity }) => {
  const notificationStyles = {
    position: "absolute",
    top: 100,
    right: 10,
    padding: "10px 20px",
    backgroundColor: severity === "success" ? "green" : "red",
    color: "white",
  };

  if (message === "") return;

  return <div style={notificationStyles}>{message}</div>;
};
const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (sev, msg) => {
    setMessage(msg);
    setSeverity(sev);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification message={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
