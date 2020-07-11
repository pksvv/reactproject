import React,{Component} from 'react';
import Display from './display';

const url = 'http://127.0.0.1:8080';

class API extends Component{
    constructor(){
        super()
        this.state = {
            myArr: []
        }
    }

    render(){
        console.log(this.state.myArr);
        return(
            <div>
                <h1>This is Header from Class Component.</h1>
                <Display userdata={this.state.myArr}></Display>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({myArr:data})
        })
    }
}

export default API;