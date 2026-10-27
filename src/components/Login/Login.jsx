
import { Form, Input, Button, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined
} from "@ant-design/icons";

const { Text } = Typography;

function Login({ onSwitch, onLogin }) {

  const handleFinish = (values) => {
    console.log("Thông tin đăng nhập:", values);

    if (onLogin) {
      onLogin(values);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleFinish}
      autoComplete="off"
    >
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
          prefix={<UserOutlined />}
          placeholder="Nhập email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!"
          }
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Nhập mật khẩu"
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
          Đăng nhập
        </Button>
      </Form.Item>

      <div style={{ textAlign: "center" }}>
        <Text>Chưa có tài khoản? </Text>

        <Button
          type="link"
          onClick={onSwitch}
        >
          Đăng ký ngay
        </Button>
      </div>
    </Form>
  );
}

export default Login;
