import React,{Component} from "react";
import axios from "axios"
export default class index extends Component{
    constructor() {
        super();
        this.state={
            data:"this is index",
            numder:1
        }
    }
    render(){
        return(
           <div>
               <button onClick={this.numberJia.bind(this)}>点44444击</button>
               <div>{this.state.data}</div>
               <div>{this.state.numder}</div>
           </div>
        )
    }
    numberJia(){
        this.setState({
            numder:this.state.numder+1
        })
    }
    async componentDidMount(){
        console.log("1222222");
        const shopList = await axios.get("/reactEle");
        console.log(shopList);
    }
}