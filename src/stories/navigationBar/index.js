import {storiesOf} from "@storybook/react";
import Navbar from "../../core/navigationBar"
import React from "react";


export default () => storiesOf('NavigationBar', module).add('Simple', () => <Navbar/>);
