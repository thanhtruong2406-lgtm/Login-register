import { Button } from "antd";

function Dashboard({ username, onLogout }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "20px 40px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "16px"
        }}
      >
        <span>{username}</span>

        <Button onClick={onLogout}>
          Đăng xuất
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;