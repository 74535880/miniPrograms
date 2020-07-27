Page({
  data: {
    photo: "",
  },
  onReady() {
    wx.getStorage({
      key: "photoPeople",
      success: (res) => {
        console.log(res);
        this.setData({ photo: res.data });
      },
      fail: (err) => console.log(err),
    });
  },
});
