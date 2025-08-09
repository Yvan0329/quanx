/*
 * 只修改 personReview
 */

let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj?.data) {
    obj.data.personReview = 0; // 改成通过状态
  }

  body = JSON.stringify(obj);
  console.log("=== 已将 personReview 改为 1 ===");
} catch (e) {
  console.log("修改 JSON 出错:", e);
}

$done({ body });
