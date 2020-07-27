Page({
  onLoad() {
    wx.startCompass({
      success: () => {
        console.log("罗盘开始监听");
        wx.onCompassChange((res) => {
          console.log(res);
        });
      },
    });
  },
});
