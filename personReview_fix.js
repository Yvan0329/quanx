/*
 * personReview 修改脚本 for QuanX
 * 把 personReview=-2 改成 0，并将 spjg 改成“人工复核审核合格”
 */

let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj?.data?.personReview === -2) {
    obj.data.personReview = 0; // 改成通过状态
  }

  if (obj?.data?.spjg && obj.data.spjg.includes("不合格")) {
    obj.data.spjg = "人工复核审核合格";
  }

  if (obj?.data?.spyj && obj.data.spyj.includes("不符合申报条件")) {
    obj.data.spyj = "符合申报条件。";
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("修改 JSON 出错:", e);
}

$done({ body });
