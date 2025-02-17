node --version
npm --version
```

### 2. Tải và chuẩn bị project
1. Tải source code về máy
2. Giải nén vào thư mục mong muốn
3. Mở Command Prompt, di chuyển đến thư mục project:
```bash
cd đường-dẫn-đến-thư-mục-project
```

### 3. Cài đặt các dependencies
1. Mở Command Prompt với quyền Administrator
2. Di chuyển đến thư mục project
3. Chạy lệnh sau để cài đặt các dependencies:
```bash
npm install
```

### 4. Chạy project trong môi trường development
1. Sau khi cài đặt xong, chạy lệnh:
```bash
npm run dev
```
2. Đợi một lát để server khởi động
3. Truy cập website tại địa chỉ: `http://localhost:5000`

### 5. Build và chạy phiên bản production
1. Để build project:
```bash
npm run build
```
2. Để chạy phiên bản production:
```bash
npm start
```

## Xử lý lỗi thường gặp

### Lỗi "Port 5000 already in use"
1. Mở Command Prompt với quyền Administrator
2. Chạy lệnh sau để tìm và dừng process đang sử dụng port 5000:
```bash
netstat -ano | findstr :5000
taskkill /PID <ProcessId> /F
```

### Lỗi liên quan đến node_modules
1. Xóa thư mục node_modules và file package-lock.json
2. Chạy lại lệnh:
```bash
npm install