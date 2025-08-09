/*
 * personReview 修改脚本
 * 把 personReview=-2 改成 0
 */

let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj?.data?.personReview === -2) {
    obj.data.personReview = 0; // 改成通过状态
  }

  // 保险起见，如果 spjg 包含“不合格”，一起改掉
  if (obj?.data?.spjg && obj.data.spjg.includes("不合格")) {
    obj.data.spjg = "人工复核审核合格";
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("修改 JSON 出错:", e);
}

$done({ body });
