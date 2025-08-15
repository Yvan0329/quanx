/*
 * 强制修改响应体为指定内容
 */

const newBody = JSON.stringify({
  msg: "重新填写申请",
  code: 0,
  data: {
    status: 1
  }
});

console.log("=== 已重写响应为指定内容 ===");

$done({ body: newBody });
