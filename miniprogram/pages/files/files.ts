Page({
  data: {
    tempImgFilePath: [] as any,
  },
  /**
   * 保存文件至本定，会把临时文件移动，临时文件将不可用
   */
  saveFile() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({ tempImgFilePath: res.tempFilePaths });
        // 保存至系统文件
        // wx.saveFile({
        //   tempFilePath: this.data.tempImgFilePath[0],
        //   success: (res) => {
        //     const saveFilPath = res.savedFilePath;
        //   },
        // });
        // 保存至相册
        // wx.saveImageToPhotosAlbum({
        //   filePath: this.data.tempImgFilePath[0],
        //   success: (res) => {
        //     console.log(res);
        //   },
        // });

        wx.saveVideoToPhotosAlbum({
          filePath: this.data.tempImgFilePath[0],
          success: (res) => {
            wx.showToast({ title: "保存成功了" });
          },
        });
      },
    });
  },

  getSaveFileList() {
    wx.getSavedFileList({
      success: (res) => {
        console.log(res);
        wx.getFileInfo({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            console.log(res);
          },
        });
      },
    });
  },
});
