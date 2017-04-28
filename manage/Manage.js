import React from "react";
import {Link} from "react-router";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class Index extends React.Component{
	constructor(props){
		super(props);
			 this.state = {
	    current: 'login',
	  }
	}
	 handleClick(e){
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
	render(){

		return <div>
  
    <Layout>
      <Sider width={250} style={{ background: '#fff' ,height:500}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
            <Menu.Item key="3">
              <Icon type="user" />
              <span className="nav-text"><Link to="users">用户管理</Link></span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="notification" />
              <span className="nav-text"><Link to="filmManage">电影管理</Link></span>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="video-camera" />
              <span className="nav-text"><Link to="hotPlay">热映管理</Link></span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="laptop" />
              <span className="nav-text"><Link to="cinemaManage">院线管理</Link></span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="share-alt" />
              <span className="nav-text"><Link to="matchManage">电影院线匹配管理</Link></span>
            </Menu.Item>
            
        </Menu>
      </Sider>
      <Layout style={{ paddingLeft: 24}}>
      
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 400 }}>
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
    	</div>
	}
}