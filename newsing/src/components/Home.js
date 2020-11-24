import React, { Component } from 'react'
import Room from "./Room"
import Kitchen from "./Kitchen"
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
             <Room/>
             <Kitchen/>   
            </div>
        );
    }
}
export default Home;