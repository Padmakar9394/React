import React from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor is Called!");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount Called!");
  }

  render() {
    // console.log("Parent Render is Called!");
    return (
      <div>
          <h1>This is about page</h1>
          <h3>Developed by Padmakar Gore</h3>
          <UserClass name={"First"} location={"Pune (class)"} />
      </div>
    )
  }
}

export default About;