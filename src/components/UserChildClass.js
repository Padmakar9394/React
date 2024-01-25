import React from "react";

class UserClassChild extends React.Component {
    constructor(props) {
        super(props);
        console.log("First Childs Child Constructor Called!");
    }
    componentDidMount() {
        console.log("First Childs Child ComponentDidMount Called!");
    }
    render() {
        console.log("First Childs Child Render Called!");
        return(
            <div>
                <h1>UserClassChild</h1>
            </div>
        )
    }
}

export default UserClassChild;