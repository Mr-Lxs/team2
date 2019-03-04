import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import React,{Component} from 'react'
import { connect } from 'dva';
import './IndexPage.css'
import {userlogin} from '../../services/example'
import { nominalTypeHack } from 'prop-types';
class login extends React.Component {
  constructor(){
    super()
  }
  login(){
    const  unsername =this.input.state.value;
    const password=this.input1.state.value;
    userlogin({
      user_name:unsername,
      user_pwd:password
    }).then(res=>{
      console.log(res)
    })
    // console.log(unsername,password)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
         <Form onSubmit={this.handleSubmit}   style={{ width: 300,marginLeft:800,marginTop:40 }} >
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"  className="username"  ref={input => {
              this.input = input
            }}/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" ref={input1 => {
              this.input1 = input1
            }}/>
          )}
        </Form.Item>
        <Form.Item style={{marginBottom:30}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox style={{marginLeft:40}} >记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href=""></a>
          <br></br>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>{
            this.login()
          }} style={{marginLeft:30,width:200,marginTop:20}}>
            登录
          </Button>
          <br></br>
          <Button type="dashed"   style={{marginLeft:30,width:200,marginTop:20,background:"#fff",border:"none",color:"#000"}}>
            注册
          </Button>
        </Form.Item>
        
      
      </Form>
     
      </div>
    );
  }
  componentDidMount(){
   
  }
}

 export default connect(({app})=>({app}))(Form.create({ name: 'normal_login' })(login));
 



