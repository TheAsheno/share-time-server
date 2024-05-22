const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
var cors = require("cors");
const app = express();

app.use(cors());

// 让 Node 为我们创建的 React 应用提供文件
app.use(express.static(path.resolve(__dirname, '../client/build')));

// 处理对/api 的 GET 请求
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!", info: "This is a message from the server."});
});

app.get("/api/music", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'musicName.json'));
});

app.get("/musicName.json", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'musicName.json'));
});

// 所有之前未被处理的 GET 请求将返回我们的 React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});