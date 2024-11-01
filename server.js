const cors = require('cors');
const express = require('express');
const app = express();

// Cho phép tất cả nguồn truy cập
app.use(cors());

// Cấu hình các route ở đây
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Chạy server
app.listen(5001, () => {
    console.log('Server is running on port 5001');
});