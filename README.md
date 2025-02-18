node --version  # Phải hiển thị v18.x.x
npm --version
```

### 2. Cài đặt project
1. Giải nén source code vào một thư mục
2. Mở Command Prompt, di chuyển vào thư mục project:
```bash
cd đường-dẫn-đến-thư-mục-project
```

### 3. Cài đặt dependencies
1. Trong Command Prompt, chạy lệnh:
```bash
npm install
```

### 4. Chạy project
**Quan trọng**: Trên Windows, cần chạy với lệnh sau:
```bash
npx tsx ./server/index.ts
```

Đợi đến khi thấy thông báo "serving on port 5000", sau đó mở trình duyệt và truy cập:
http://localhost:5000

## Xử lý lỗi thường gặp

### Lỗi ERR_UNSUPPORTED_ESM_URL_SCHEME
Nếu gặp lỗi này, hãy đảm bảo:
1. Bạn đang sử dụng đúng lệnh `npx tsx ./server/index.ts`
2. Đường dẫn thư mục không chứa ký tự đặc biệt hoặc dấu cách
3. Node.js version 18 đã được cài đặt đúng

### Lỗi node_modules
Nếu gặp lỗi liên quan đến node_modules:
1. Xóa thư mục node_modules
2. Xóa file package-lock.json
3. Chạy lại:
```bash
npm install
```

### Lỗi Port 5000
Nếu port 5000 đã được sử dụng:
1. Mở Command Prompt với quyền Administrator
2. Chạy lệnh:
```bash
netstat -ano | findstr :5000
taskkill /PID <ProcessId> /F
```

### Các bước khắc phục khác
Nếu vẫn gặp lỗi:
1. Đảm bảo bạn đang ở đúng thư mục project
2. Thử cài lại Node.js 18 LTS
3. Xóa và cài lại node_modules
4. Khởi động lại máy tính

### Lỗi "ERR_MODULE_NOT_FOUND"
1. Kiểm tra phiên bản Node.js có phải v18 không:
```bash
node --version