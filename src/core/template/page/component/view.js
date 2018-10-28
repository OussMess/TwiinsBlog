import React from "react"
import NavigationBar from "../../../navigationBar";

const PageTemplate = ({children}) =>
    <div className="page">
        <NavigationBar children={children}/>
    </div>;

export default PageTemplate;