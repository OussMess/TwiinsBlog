import React from "react"


export const NotFound = ({location: {pathname}}) => {
    return (<section>
        <h1>[Page with "{pathname}" Not Found (404)]</h1>
    </section>);
};