import React from "react";
import Header from "../components/Header";
import InputBlock from "../components/InputBlock";
import RectButton from "../components/RectButton";

const Contact = () => {
  return (
    <div className="contact">
      <Header title={"Contact"} />
      <InputBlock title={"Name"} placeholder={"Enter name"} />
      <InputBlock title={"Email"} placeholder={"Enter email"} />
      <InputBlock
        title={"Message"}
        placeholder={"Enter your message"}
        multiline={true}
      />
      <RectButton text={"Send"} />
    </div>
  );
};

export default Contact;
