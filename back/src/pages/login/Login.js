import React , { useState }from 'react';
import "antd/dist/antd.css";
import { authService } from "../../_services/authService";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const login = (data) => {
    authService.login(data).then((response) => {
      if (response.success == true) {
        history.push(`/view`);
      } else {
        
      }
    });
  };

  const changeHandler = (e) => {
    setDataUser({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="email"
        name="email"
        onChange={changeHandler}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={changeHandler}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

