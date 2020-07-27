Page({
  takephoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: "high",
      success: (res) => {
        // 设置到我们的缓存中。
        wx.setStorage({
          key: "photoPeople",
          data: res.tempImagePath,
        });
        

        // 跳转页面
        wx.redirectTo({
          url: "/pages/case/photo",
        });
      },
      fail: (err) => {},
    });
  },
});
