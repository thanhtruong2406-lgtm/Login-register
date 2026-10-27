
import { Button } from "antd";
import "./Welcome.css";

function Welcome({ onLogin, onRegister }) {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>Welcome</h1>
        <p>Join us and explore your experience</p>

        <div className="welcome-buttons">
          <Button
            type="primary"
            size="large"
            onClick={onLogin}
          >
            Đăng nhập
          </Button>

          <Button
            size="large"
            onClick={onRegister}
          >
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
