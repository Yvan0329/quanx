let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj?.data) {
    // 解锁所有券
    if (Array.isArray(obj.data.couponList)) {
      obj.data.couponList.forEach(coupon => {
        coupon.receiveStatus = 1;  // 可领取
        coupon.status = 0;         // 状态正常
        coupon.couponId = coupon.couponId || "fake_coupon_id_" + Math.random().toString(36).substring(2, 10);
        // coupon.maxClaimLimit = 99; // 最多可领次数
        // coupon.couponStyle = 1;    // 显示样式变换
        // coupon.discount = coupon.discount || "50";
        // coupon.quota = coupon.quota || "100";
        // coupon.maxDiscount = coupon.maxDiscount || "1000";
      });
    }

    // 可选修改活动剩余时间，模拟未过期
    obj.data.activityLeftTime = 999999999;
    obj.data.baseCouponEndLeftTime = 99999999;
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("JD Coupon Rewrite Error:", e);
}

$done({ body });
