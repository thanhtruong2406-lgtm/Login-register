import { useState } from "react";
import { Modal, message } from "antd";
import useLocalStorage from "./hooks/useLocalStorage";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { hashPassword } from "./utils/hashPassword";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  
    const [users, setUsers] = useLocalStorage("users", []);

    const [activeModal, setActiveModal] = useState(null);

    const [registeredUser, setRegisteredUser] = useState(null);

    const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);

    const [messageApi, contextHolder] = message.useMessage();

    const [currentUser, setCurrentUser] = useState(null);

    const [showLoginSuccess, setShowLoginSuccess] = useState(false);

    const handleLoginSuccessClose = () => {
      setShowLoginSuccess(false);
    };

    const openLogin = () => {
      setActiveModal("login");
    };

    const openRegister = () => {
      setActiveModal("register");
    };

    const closeModal = () => {
      setActiveModal(null);
    };

    const handleLogin = async (values) => {
      const email = values.email.trim().toLowerCase();

      // Tìm tài khoản theo email
      const user = users.find((item) => item.email === email);

      if (!user) {
        messageApi.error("Email hoặc mật khẩu không chính xác!");
        return;
      }

      // Tài khoản cũ chưa có mã băm mật khẩu
      if (!user.passwordHash) {
        messageApi.error(
          "Tài khoản demo cũ chưa có mật khẩu. Hãy đăng ký lại.",
        );
        return;
      }

      try {
        // Băm mật khẩu người dùng vừa nhập
        const inputHash = await hashPassword(values.password);

        // So sánh với mã băm đã lưu
        if (inputHash !== user.passwordHash) {
          messageApi.error("Email hoặc mật khẩu không chính xác!");
          return;
        }

        // Đăng nhập thành công
        setCurrentUser({
          username: user.username,
          email: user.email,
        });

        setActiveModal(null);
        setShowLoginSuccess(true);
      } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        messageApi.error("Không thể xử lý đăng nhập!");
      }
    };

    const handleRegister = async (newUser) => {
      // Kiểm tra Username trùng
      const usernameExists = users.some(
        (user) =>
          user.username.toLowerCase() === newUser.username.trim().toLowerCase(),
      );

      if (usernameExists) {
        messageApi.error("Username đã tồn tại!");
        return;
      }

      // Kiểm tra Email trùng
      const emailExists = users.some(
        (user) =>
          user.email.toLowerCase() === newUser.email.trim().toLowerCase(),
      );

      if (emailExists) {
        messageApi.error("Email đã được đăng ký!");
        return;
      }

      try {
        const passwordHash = await hashPassword(newUser.password);

        const user = {
          username: newUser.username.trim(),
          email: newUser.email.trim().toLowerCase(),
          passwordHash,
        };

        const updatedUsers = [...users, user];

        const saved = setUsers(updatedUsers);

        if (!saved) {
          messageApi.error("Không thể lưu tài khoản!");
          return;
        }

        setRegisteredUser({
          username: user.username,
          email: user.email,
        });

        setActiveModal(null);
        setShowRegisterSuccess(true);
      } catch (error) {
        console.error("Lỗi đăng ký:", error);
        messageApi.error("Đăng ký thất bại!");
      }
    };

    const handleRegisterSuccessClose = () => {
      setShowRegisterSuccess(false);
      setActiveModal("login");
    };
    const handleLogout = () => {
      setCurrentUser(null);
      setActiveModal(null);
    };

    return (
      <>
        {contextHolder}

        {currentUser && !showLoginSuccess ? (
          <Dashboard username={currentUser.username} onLogout={handleLogout} />
        ) : (
          <Welcome onLogin={openLogin} onRegister={openRegister} />
        )}

        <Modal
          title="Đăng nhập"
          open={activeModal === "login"}
          onCancel={closeModal}
          footer={null}
          destroyOnHidden
        >
          <Login onLogin={handleLogin} onSwitch={openRegister} />
        </Modal>

        <Modal
          title="Đăng ký"
          open={activeModal === "register"}
          onCancel={closeModal}
          footer={null}
          destroyOnHidden
        >
          <Register onRegister={handleRegister} onSwitch={openLogin} />
        </Modal>

        <Modal
          title="Đăng ký thành công"
          open={showRegisterSuccess}
          onOk={handleRegisterSuccessClose}
          onCancel={handleRegisterSuccessClose}
          okText="Đến trang đăng nhập"
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <p>Thông tin tài khoản vừa đăng ký:</p>

          <p>
            <strong>Username: </strong>
            {registeredUser?.username}
          </p>

          <p>
            <strong>Email: </strong>
            {registeredUser?.email}
          </p>
        </Modal>
        <Modal
          title="Đăng nhập thành công"
          open={showLoginSuccess}
          onOk={handleLoginSuccessClose}
          onCancel={handleLoginSuccessClose}
          okText="Tiếp tục"
          cancelButtonProps={{ style: { display: "none" } }}
          closable={false}
          mask={{ closable: false }}
        >
          <p>Chào mừng {currentUser?.username}!</p>
          <p>Bạn đã đăng nhập thành công.</p>
        </Modal>
      </>
    );
  }


export default App;
