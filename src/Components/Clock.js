import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
componentDidMount(){
        this.timer = setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }
componentWillUnmount(){
        clearInterval(this.timer);
    }
render(){
        return( 
            <div class="clock">
                <div class="timer">{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}
export default Clock