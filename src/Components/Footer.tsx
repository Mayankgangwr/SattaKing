import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className={`d-flex m-0 p-0 w-100`}>
            <NavLink
      to={`/footer`}>Footer</NavLink>
        </div>
    );
};
export default Footer;