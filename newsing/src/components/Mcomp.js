import React, {Component} from "react";
class Mcomp extends Component {
    constructor(props) {
    super(props);
    this.state={
    }
  };
  inCount=()=>{
    this.setState({names: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    })
  }

    render() {
    	return(
    		<div id="main">
          <h1> repo </h1>
			<button onClick={this.inCount}>click</button>
    		</div>
    	);
    }
}
export default Mcomp;
