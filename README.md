import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement is react element or JS object and when rendered it is a html element
/* -->  Creating React Element using React   //Not Developer Freiendly              <-- */
// const heading = React.createElement("h1", {id: "head1"}, "Namaste React!");

//JSX is tranpiled to React.createElement then line 4 is executed
/* --->  Creating React Element using JSX                  <--- */
// JSX is transpiled before it reaches to the JS Engine -->Parcel is responsible for this
const newHead = () => (
    <h1 id="head2">Namaste React using JSX🚀</h1>
);

const Title = () => {
    return  <h1>Namaste React using JSX🚀</h1>
}

const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <h2>This is a heading component😃</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);


# Setting up testing in our app
    -Install React Testing Library
    -Install Jest Library
    -Install Babel Dependencies
    -Configure Babel
    -Configure Parcel Config to disable Babel transpilation in Parcel
    -Jest Configuration --> npx jest --init
    -Install JSDOM library
    -Install @babel/preset-react --> to make jsx work in tests
    -Install @testing-library/jest-dom