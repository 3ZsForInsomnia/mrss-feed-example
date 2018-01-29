import React from "react";
import "./header.styles.css";
import Logo from "./../../components/logo/logo.component";
import RoutableLink from "./../../components/routable-link/routable-link.component";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <RoutableLink text="home" />
                <RoutableLink text="movies" />
            </header>
        );
    }
}

export default Header;
