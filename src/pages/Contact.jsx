import React, {forwardRef} from "react";
import Header from "../components/Header";
import InputBlock from "../components/InputBlock";
import RectButton from "../components/RectButton";

const Contact = forwardRef((_, ref) => {
  return (
    <div className="contact" ref={ref}>
      <Header title={"Contact"} />
      <InputBlock title={"Name"} placeholder={"Enter name"} />
      <InputBlock title={"Email"} placeholder={"Enter email"} />
      <InputBlock
        title={"Message"}
        placeholder={"Enter your message"}
        multiline={true}
      />
      <RectButton text={"Send"} align={"center"} />
    </div>
  );
});

export default Contact;
