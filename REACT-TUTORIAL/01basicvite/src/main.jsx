import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import React from "react";

// function MyApp(){
//     return(
//         <div>
//             Hello
//         </div>
//     )
// }

// const MyElement = (
//     <a href="http://google.com" target="_blank"> VISIT GOOGLE</a>
// )

// const reactElement = {
//     type : 'a',
//     props : {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const reactElement =  React.createElement(
//     'a',                                                        // type
//     {href: "http://google.com",  target: '_blank'},             // attributes
//     'Click me to visit google',                                  // children
//      {}                                                          // valuated expressions
// )    

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
