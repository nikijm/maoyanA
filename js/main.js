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










// import React from 'react';
// import ReactDOM from 'react-dom';
// import { DatePicker, message } from 'antd';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//     };
//   }
//   handleChange(date) {
//     message.info('您选择的日期是: ' + date.toString());
//     this.setState({ date });
//   }
//   render() {
//     return (
//       <div style={{ width: 400, margin: '100px auto' }}>
//         <DatePicker onChange={value => this.handleChange(value)} />
//         <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
//       </div>
//     );
//   }
// }

