Page({
  data: {
    src: "",
  },
  camera() {
    //   获取相机对象
    const ctx = wx.createCameraContext();
    // 通过接口调用拍照方法
    ctx.takePhoto({
      quality: "high",
      success: (res) => {
        this.setData({ src: res.tempImagePath });
      },
      fail(err) {
        console.log(err);
      },
    });
  },
});
