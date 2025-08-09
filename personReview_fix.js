/*
 * 带日志版本，方便确认是否命中
 */

let body = $response.body;

console.log("=== [personReview_fix] 脚本已执行 ===");

try {
  let obj = JSON.parse(body);

  console.log("修改前 personReview:", obj?.data?.personReview);
  console.log("修改前 spjg:", obj?.data?.spjg);
  console.log("修改前 spyj:", obj?.data?.spyj);

  if (obj?.data?.personReview === -2) {
    obj.data.personReview = 0;
    console.log("已修改 personReview 为:", obj.data.personReview);
  }

  if (obj?.data?.spjg && obj.data.spjg.includes("不合格")) {
    obj.data.spjg = "人工复核审核合格";
    console.log("已修改 spjg 为:", obj.data.spjg);
  }

  if (obj?.data?.spyj && obj.data.spyj.includes("不符合申报条件")) {
    obj.data.spyj = "符合申报条件。";
    console.log("已修改 spyj 为:", obj.data.spyj);
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("修改 JSON 出错:", e);
}

$done({ body });
