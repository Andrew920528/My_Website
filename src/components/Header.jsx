import {React} from "react";
const Header = ({title, ...rest}) => {
  return (
    <div className="header" {...rest}>
      <h1>{title}</h1>
      <div className="line"></div>
    </div>
  );
};

export default Header;
