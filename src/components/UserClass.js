import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 2,
        }
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Increment +1</button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: @Padmakar9394</h3>
            </div>
        )
    }
}

export default UserClass;