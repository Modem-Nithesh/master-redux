import React from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";



const App = () => (
 <React.Fragment>
 <HelloWorld tech={store.getState().tech} />,
 <ButtonGroup technologies={[
 "React",
 "Elm",
 "React-redux1"]}/>
 </React.Fragment>
);


export default App; 