import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Input, Button, Spin ,message} from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "../static/Login.css";
import axios from 'axios'
import servicePath from '../config/apiUrl'

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const checkLogin = () => {
    setIsLoading(true);
    if (!userName) {
      message.error("用户名不能为空");
      setTimeout(()=>{
        setIsLoading(false)
      },500)
      return false;
    } else if (!password) {
      message.error("密码不能为空");
      setTimeout(()=>{
        setIsLoading(false)
      },500)
      return false;
    }
    let dataProps = {
      'userName': userName,
      'password': password,
    };
    axios({
      method: "post",
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true,
    }).then((res) => {
      setIsLoading(false);
      console.log(res);
      if (res.status === 200 ) {
        localStorage.setItem("openId", res.data.openId);
        props.history.push("/index");
      } else {
        message.error("用户名密码错误");
      }
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="HearLing" bordered={true} style={{ width: 400 }}>
          <Input
            style={{ "marginBottom": 20 }}
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={
              <UserOutlined type="user" style={{ color: "rgb(0,0,0,.25" }} />
            }
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br></br>
          <Input.Password
            style={{ "marginBottom": 20 }}
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={
              <KeyOutlined type="key" style={{ color: "rgb(0,0,0,.25" }} />
            }
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>
          <Button type="primary" size="large" block onClick={checkLogin}>
            Login
          </Button>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;
