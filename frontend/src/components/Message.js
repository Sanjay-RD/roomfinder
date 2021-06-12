import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className={variant === "danger" ? "danger message" : "info message"}>
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
