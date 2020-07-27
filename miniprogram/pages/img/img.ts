Page({
  data: {
    chooseImages: [
      "https://i.pinimg.com/236x/05/06/ab/0506abdd3341a7dfe59cc0e045be0c4c.jpg",
    ],
    imgUrl: "",
    downloadImg: "",
  },
  /**
   * 获取图片
   */
  chooseImg() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        this.setData([...this.data.chooseImages, ...res.tempFilePaths]);
      },
    });
  },
  /**
   * 获取图片信息
   */
  getImgInfo() {
    wx.getImageInfo({
      src:
        "https://i.pinimg.com/236x/05/06/ab/0506abdd3341a7dfe59cc0e045be0c4c.jpg",
      success: (res) => {
        console.log(res);
        this.setData({ imgUrl: res.path });
      },
    });
  },
  /**
   * 预览图片
   */
  previewImg() {
    wx.previewImage({
      urls: this.data.chooseImages,
      current:
        "https://i.pinimg.com/236x/a8/7d/d6/a87dd6345153760adb0b12dc0ce8513c.jpg",
      success: (res) => {
        console.log(res);
      },
    });
  },
  /**
   * 下载图片
   */
  downloadImage() {
    wx.downloadFile({
      url:
        "https://i.pinimg.com/236x/a8/7d/d6/a87dd6345153760adb0b12dc0ce8513c.jpg",
      success: (res) => {
        if (res.statusCode === 200) {
          console.log(res.tempFilePath);
          this.setData({
            downloadImg: res.tempFilePath,
          });
        }
      },
    });
  },
  /**
   * 保存到本机相册
   */
  saveImg() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.downloadImg,
      success: (res) => {
        console.log("保存成功", res);
      },
    });
  },
});
