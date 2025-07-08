import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            count: 0,
            count1:1,
        }
    }
    render(){
        const{name,location} = this.props;
        const{count} = this.state;
        return (
        <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={() => {
            //Never Update state variables directly
            // this.state.count=this.state.count+1; 

            this.setState({
                count:this.state.count+1,
            })
        }}>Count Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: vanshu778</h4>
    </div>)
    }

}

export default UserClass;