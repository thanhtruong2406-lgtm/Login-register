
import { Form, Input, Button, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined
} from "@ant-design/icons";

const { Text } = Typography;

function Register({ onSwitch, onRegister }) {

  const handleFinish = (values) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password
    };

    onRegister(newUser);
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập username!"
          },
          {
            min: 3,
            message: "Username phải có ít nhất 3 ký tự!"
          }
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Nhập username"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email!"
          },
          {
            type: "email",
            message: "Email không hợp lệ!"
          }
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Nhập email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!"
          },
          {
            min: 6,
            message: "Mật khẩu phải có ít nhất 6 ký tự!"
          }
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Nhập mật khẩu"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Vui lòng xác nhận mật khẩu!"
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (
                !value ||
                getFieldValue("password") === value
              ) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("Mật khẩu xác nhận không khớp!")
              );
            }
          })
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Nhập lại mật khẩu"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
        >
          Đăng ký
        </Button>
      </Form.Item>

      <div style={{ textAlign: "center" }}>
        <Text>Đã có tài khoản? </Text>

        <Button
          type="link"
          onClick={onSwitch}
        >
          Đăng nhập ngay
        </Button>
      </div>
    </Form>
  );
}

export default Register;
