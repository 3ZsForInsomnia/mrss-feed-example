import React from "react";
import "./routable-link.styles.css";

// Obviously this doesn't actually do anything - more a placeholder component
const RoutableLink = ({text}) => {
    return <div className="routable-link">
        <span className="routable-link__text">{text}</span>
    </div>
}

export default RoutableLink;
