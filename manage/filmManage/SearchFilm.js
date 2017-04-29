import React from "react";
import {ajax} from "../../common/tools.js";

import {Input,Select,Col} from "antd";

const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;

export default class SearchFilm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			type:"",
			value:""
		}
	}
	Serach(value){
		console.log(value)
		console.log(this.state.type)
		this.props.show(1,this.state.type,value)

	}
	componentWillMount(){
	this.handleChange();
	}
	handleChange(type) {
  	this.setState({
  		type:type
  	})
	}
	render(){

		return <div style={{float:'left'}}>

        <InputGroup compact>
         
           <Search
		    placeholder="请输入查询内容..."
		    style={{ width: 200 }}
		    onSearch={(value)=>{this.Serach(value)}} 
		  />
		   <Select defaultValue="Cname" onChange={(value)=>{this.handleChange(value)}}  >
            <Option value="Cname">中文名</Option>
            <Option value="Ename">英文名</Option>
            <Option value="director">导演</Option>
            <Option value="star">演员</Option>
          </Select>
 
        </InputGroup>
        </div>

	}
}

