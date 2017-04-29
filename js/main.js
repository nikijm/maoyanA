import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,IndexRoute,hashHistory} from "react-router";

import Index from "../index/Index";
import Manage from "../manage/Manage";
import Login from "../login/Login";

import Users from "../manage/users/Users";
import FilmManage from "../manage/filmManage/FilmManage";
import CinemaManage from "../manage/cinemaManage/CinemaManage";
import MatchManage from "../manage/matchManage/MatchManage";
import HotPlay from "../manage/hotplay/HotPlay";


ReactDOM.render(<Router history={hashHistory}>

		<Route path="/" component={Index}>

		<IndexRoute component={Login}></IndexRoute>
		<Route path="/login" component={Login}></Route>

		<Route path="/manage" component={Manage}>

        <Route path="/users" component={Users}></Route> 
        <Route path="/filmManage" component={FilmManage}></Route> 
        <Route path="/cinemaManage" component={CinemaManage}></Route>  
        <Route path="/matchManage" component={MatchManage}></Route> 
        <Route path="/hotplay" component={HotPlay}></Route> 
    	
    	</Route>

    </Route>

	</Router>,document.getElementById("content"));












