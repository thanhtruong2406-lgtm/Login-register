# 🔐 Login & Register System

### ReactJS + Ant Design | Frontend Authentication Demo

## 📖 Giới thiệu dự án

Đây là dự án thực hành xây dựng giao diện **Đăng nhập (Login) và Đăng ký (Register)** bằng ReactJS kết hợp thư viện Ant Design.

Dự án tập trung vào việc áp dụng kiến thức **React Hooks, State, Props, Component Architecture và LocalStorage** để quản lý dữ liệu và xây dựng giao diện tương tác.

**Mục tiêu:** Xây dựng hệ thống đăng ký, đăng nhập mô phỏng trên Frontend mà không cần Backend hoặc Database.

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| ReactJS | Xây dựng giao diện theo Component |
| JavaScript (JSX) | Xử lý logic ứng dụng |
| Ant Design | Thiết kế Form, Button, Modal và thông báo |
| React Hooks | Quản lý trạng thái ứng dụng |
| Custom Hook | Xây dựng `useLocalStorage` |
| LocalStorage | Lưu tài khoản demo trên trình duyệt |
| Vite | Khởi tạo và chạy dự án |
| CSS3 | Thiết kế giao diện và bố cục |

## ✨ Chức năng chính

### 1. Welcome Page
- Hiển thị giao diện chào mừng với background.
- Hai nút Đăng nhập và Đăng ký.
- Mở Modal tương ứng mà không cần chuyển trang.

### 2. Register
- Nhập Username, Email, Password và Confirm Password.
- Kiểm tra dữ liệu nhập bằng Ant Design Form.
- Kiểm tra Username và Email đã tồn tại.
- Lưu tài khoản demo bằng Custom Hook `useLocalStorage`.
- Hiển thị Modal xác nhận thông tin đăng ký thành công.
- Chuyển sang Login Modal.

### 3. Login
- Nhập Email và Password.
- Kiểm tra thông tin tài khoản đã đăng ký.
- Hiển thị thông báo khi thông tin không chính xác.
- Hiển thị Modal đăng nhập thành công.

### 4. Dashboard
- Hiển thị giao diện nền trắng sau khi đăng nhập.
- Hiển thị Username ở góc trên bên phải.
- Hỗ trợ đăng xuất và quay về Welcome.

## 🧠 Kiến thức ReactJS áp dụng

**useState:** Quản lý trạng thái Modal, tài khoản đang đăng nhập và các thông báo.

**Props:** Truyền dữ liệu và callback giữa các Component như `App`, `Welcome`, `Login`, `Register` và `Dashboard`.

**Custom Hook:** Tạo `useLocalStorage` để kết hợp React State với LocalStorage.

**Conditional Rendering:** Hiển thị Welcome hoặc Dashboard tùy theo trạng thái đăng nhập.

**Array Methods:** Sử dụng `find()` và `some()` để tìm kiếm, kiểm tra tài khoản.

## 📂 Cấu trúc dự án

```text
src/
├── components/
│   ├── Welcome/
│   │   ├── Welcome.jsx
│   │   └── Welcome.css
│   ├── Login/
│   │   └── Login.jsx
│   ├── Register/
│   │   └── Register.jsx
│   └── Dashboard/
│       └── Dashboard.jsx
├── hooks/
│   └── useLocalStorage.js
├── utils/
│   └── hashPassword.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Hướng dẫn cài đặt

**Bước 1:** Clone repository về máy.

```bash
git clone <repository-url>
```

**Bước 2:** Mở thư mục dự án.

```bash
cd <project-folder>
```

**Bước 3:** Cài đặt dependencies.

```bash
npm install
```

**Bước 4:** Chạy ứng dụng.

```bash
npm run dev
```

**Bước 5:** Mở địa chỉ được Vite cung cấp, thường là:

`http://localhost:5173/`

## 🔄 Luồng hoạt động

```text
Welcome Page
    |
    |--- Login Modal
    |       |
    |       |--- Kiểm tra thông tin
    |       |--- Login Success Modal
    |       |--- Dashboard
    |                 |
    |                 └--- Logout → Welcome
    |
    └--- Register Modal
            |
            |--- Validate Form
            |--- Kiểm tra tài khoản trùng
            |--- Lưu LocalStorage
            |--- Register Success Modal
            |--- Login Modal
```

## 🔒 Lưu ý bảo mật

Đây là dự án phục vụ mục đích học tập, không phải hệ thống xác thực dùng trong môi trường thực tế.

Dự án sử dụng mã băm SHA-256 cho mật khẩu demo. Cách này không đủ an toàn để thay thế xác thực phía Backend với các thuật toán chuyên dụng như Argon2id hoặc bcrypt.

Không sử dụng mật khẩu thật hoặc thông tin nhạy cảm khi thử nghiệm.

## 📌 Trạng thái dự án

**Giai đoạn hiện tại:** Hoàn thiện và kiểm thử Login/Register.

Các nội dung đã triển khai gồm giao diện Welcome, Modal Login/Register, quản lý State và Props, lưu dữ liệu LocalStorage và Dashboard.

## 🎯 Định hướng phát triển

- Cải thiện Responsive Design.
- Bổ sung React Router.
- Tích hợp Backend API.
- Sử dụng Database để lưu tài khoản.
- Triển khai xác thực và quản lý phiên đăng nhập an toàn.
- Deploy website để người dùng trải nghiệm trực tuyến.

---

**Project Type:** Frontend Practice

**Purpose:** ReactJS Learning & UI Development