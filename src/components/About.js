import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
        <h1>This is about page</h1>
        <h3>Developed by Padmakar Gore</h3>
        <UserClass name={"Padmakar Gore (Class Comp)"} location={"Pune (class)"} />
    </div>
  )
}

export default About;