import React,{Component} from "react";
import { NavLink, Route } from "react-router-dom";
import Index from "./index.jsx";
import out from "./out.jsx";
import news from "./news.jsx";
export default class inde extends Component{
    render(){
        return(
           <>
           <div><NavLink to="/" exact>首页</NavLink></div>
           <div><NavLink to="/news">详情</NavLink></div>
           <div><NavLink to="/out">我的</NavLink></div>
           <Route path="/" component={Index} exact></Route>
           <Route path="/out" component={out}></Route>
           <Route path="/news" component={news}></Route>
           </>
        )
    }
}