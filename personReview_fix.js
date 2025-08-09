/*
 * 强制修改响应体为指定内容
 */

const newBody = JSON.stringify({
  msg: "没有资格，需要填写申请",
  code: 0,
  data: {
    status: 0
  }
});

console.log("=== 已重写响应为指定内容 ===");

$done({ body: newBody });
