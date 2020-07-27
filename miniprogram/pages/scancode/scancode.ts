Page({
  data: {
    imgData: "",
  },
  scanCode() {
    wx.scanCode({
      scanType: ["barCode", "qrCode", "datamatrix", "pdf417"],
      success: (res) => {
        console.log(res);
        // wx.showToast({
        //   title: res.result,
        // });
        this.setData({
          imgData: res.result,
        });
        console.log(this.data.imgData);
      },
    });
  },
});
 