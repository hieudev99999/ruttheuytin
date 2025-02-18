node --version  # Phải hiển thị v18.x.x
npm --version
```

### 2. Tải và chuẩn bị project
1. Tải source code về máy
2. Giải nén vào thư mục mong muốn
3. Mở Command Prompt, di chuyển đến thư mục project:
```bash
cd đường-dẫn-đến-thư-mục-project
```

### 3. Cài đặt dependencies
1. Mở Command Prompt 
2. Di chuyển đến thư mục project
3. Chạy lệnh sau để cài đặt dependencies:
```bash 
npm install
```

### 4. Chạy project
1. Sau khi cài đặt xong, chạy lệnh:
```bash
npm run dev
```
2. Đợi cho đến khi thấy thông báo "serving on port 5000"
3. Mở trình duyệt và truy cập: http://localhost:5000

## Xử lý lỗi thường gặp

### Lỗi "Port 5000 already in use"
1. Mở Command Prompt với quyền Administrator
2. Chạy các lệnh sau:
```bash
netstat -ano | findstr :5000
taskkill /PID <ProcessId> /F
```

### Lỗi node_modules
1. Xóa thư mục node_modules và file package-lock.json
2. Chạy lại lệnh:
```bash 
npm install
```

### Lỗi "ERR_MODULE_NOT_FOUND"
1. Kiểm tra phiên bản Node.js có phải v18 không:
```bash
node --version
```
2. Nếu không phải, cài đặt lại Node.js 18 LTS

### Lỗi khác
Nếu gặp lỗi khác, hãy thử các bước sau:
1. Xóa thư mục node_modules
2. Xóa file package-lock.json
3. Chạy lại lệnh cài đặt:
```bash
npm install
```
4. Khởi động lại máy tính
5. Chạy lại project:
```bash
npm run dev