Page({
  data: {
    userCapturescreen: "",
  },
  onLoad() {
    wx.showNavigationBarLoading({
      success: (res) => {
        console.log("页面开始初始化", res);
      },
    });
  },
  onShow() {
    wx.hideNavigationBarLoading({
      success: (res) => {
        console.log("页面展示成功", res);
      },
    });
  },
  setTitle() {
    // wx.showNavigationBarLoading();
    // setTimeout(() => {
    //   wx.setNavigationBarTitle({
    //     title: "这是我自己设置的导航条名字",
    //     success: (res) => {
    //       console.log(res);
    //       wx.hideNavigationBarLoading();
    //     },
    //   });
    // }, 1000);
    wx.showActionSheet({
      itemList: ["我", "你", "它", "ta"],
      itemColor: "#008c8c",
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },
});
