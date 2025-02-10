import React, {forwardRef} from "react";
import Header from "../components/Header";
import InputBlock from "../components/InputBlock";
import RectButton from "../components/RectButton";
import {EMAIL} from "../global/constants";
const Contact = forwardRef(({hide}, ref) => {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  function sendEmail(e) {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${subject}&body=${message}`,
      "_blank"
    );
  }

  return (
    <div
      className={`contact ${hide ? "--pc-display-none" : "--pc-visible"}`}
      ref={ref}
    >
      <Header title={"Contact"} />
      <InputBlock
        title={"Subject"}
        placeholder={"Enter subject"}
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      <InputBlock
        title={"Message"}
        placeholder={"Enter your message"}
        multiline={true}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <RectButton text={"Send"} align={"center"} onClick={sendEmail} />
    </div>
  );
});

export default Contact;
