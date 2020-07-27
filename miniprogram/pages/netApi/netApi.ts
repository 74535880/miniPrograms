Page({
  requestTask: {} as WechatMiniprogram.RequestTask,
  downloadFileTask: {} as WechatMiniprogram.DownloadTask,
  data: {
    uploadImage: "",
    precent: 0,
    imgpath: "",
    uploadUrl: "",
    filePath: "",
    downFileUrl:
      "https://i.pinimg.com/564x/d2/5e/95/d25e95e341a716d671d1b5fcf605daf2.jpg",
    requestUrl:
      "https://www.google.com/search?hl=zh-CN&sxsrf=ALeKk02PfUzBmwXx1lINWUZrXPuc9bMSIA%3A1593768117534&source=hp&ei=tfj-XoLHHsuxmAX0u5ugCA&q=%E8%AE%A1%E7%AE%97%E6%9C%BA&oq=%E8%AE%A1%E7%AE%97%E6%9C%BA&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BQgAEIMBOgUIABCxAzoECAAQDDoHCAAQsQMQDDoHCAAQDBCDAToGCAAQDBAKOggIABAMEAoQHjoKCAAQDBAFEAoQHjoECAAQHjoGCAAQCBAeOgYIABAFEB5Qo7LUAlit19QCYKrY1AJoCHAAeAKAAbwBiAHDGpIBBDQuMjOYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjC9f3z4LDqAhXLGKYKHfTdBoQQ4dUDCAc&uact=5",
  },

  onLoad() {},
  request() {
    this.requestTask = wx.request({
      url: this.data.requestUrl,
      data: {},
      header: {
        contentType: "application/json",
      },
      method: "GET",
      dataType: "json",
      responseType: "text", // 相应的数据格式
      success: (res) => {
        if (res.statusCode === 200) {
          console.log("success");
        }
      },
      complete: (res) => {
        console.log(res);
      },
    });
  },
  /**
   * 终止请求
   */
  requestAbort() {
    this.requestTask.abort();
  },
  //   监听requestTask任务
  onHeaderReceived() {
    this.requestTask.onHeadersReceived((res) => {
      console.log(res);
    });
  },
  /**
   * 下载文件
   */
  downLoadFile() {
    this.downloadFileTask = wx.downloadFile({
      url: this.data.downFileUrl,
      header: {},
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({ imgpath: res.tempFilePath });
        }
      },
      complete: (res) => {
        console.log(res);
      },
    });
    this.downloadFileTask.onProgressUpdate((res) => {
      console.log("下载进度", res.progress);
      console.log("已经下载的总长度", res.totalBytesWritten); // 表示百分比
      console.log("预期下载的进度", res.totalBytesExpectedToWrite);
      this.setData({ precent: res.totalBytesWritten });
    });
  },
  /**
   * 上传文件,一般是上传图片。例如上传图片
   */
  uploadFile() {
    wx.chooseImage({
      success: (res) => {
        this.setData({ uploadImage: res.tempFilePaths[0] });
        wx.uploadFile({
          url: this.data.uploadUrl, // 公司服务器的地址
          filePath: res.tempFilePaths[0], // 本地的文件的地址
          name: "cmw", // 文件的名字，用于服务器取key

          success: (res) => {
            console.log(res);
          },
        });
      },
    });
  },
});
