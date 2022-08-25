import { useState, createContext } from "react";

const Notification = ({ message, severity }) => {
  const notificationStyles = {
    position: "fixed",
    top: 50,
    right: 10,
    padding: "10px 20px",
    backgroundColor: severity === "success" ? "green" : "red",
    borderRadius: "5px",
    color: "white",
    zIndex: 11,
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
    }, 4000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification message={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
