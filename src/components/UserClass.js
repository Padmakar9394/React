import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        // console.log(this.props.name + "Child Constructor is Called!");
        this.state = {
            userInfo: {
                name: "Padmakar",
                location: "Pune",
            },
        };
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Class ComponentDidMount!");
        const response = await fetch("https://api.github.com/users/Padmakar9394");
        const data = await response.json();

        // console.log(data);
        this.setState({
            userInfo: data,
        });
    }
    render() {
        // console.log(this.props.name + "Child Rendered!");
        const {name, location} = this.state.userInfo;
        return (
            <div className="userClass" style={{border: "1px solid black", margin: "20px"}}>
                <h1>Name: {name}</h1>
                <h2>Location: {location === null ? "India" : location}</h2>
                <h3>Contact: @Padmakar9394</h3>
            </div>
        )
    }
}

export default UserClass;