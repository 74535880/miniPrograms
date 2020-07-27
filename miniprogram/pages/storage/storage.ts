Page({
  data: {
    val: "",
  },
  setStorage() {
    wx.setStorage({
      key: "name",
      data: "程明旺",
      success: () => {
        console.log("storage have been saved");
      },
    });
  },
  removeStorage() {
    wx.removeStorage({
      key: "name",
      success: () => {
        console.log("storage has been removed");
      },
    });
  },
  getStorageInfo() {
    wx.getStorageInfo({
      success: (res) => {
        console.log(res);
      },
    });
  },
  bindBlur(e: any) {
    const inputVal = e.detail.value;
    this.setData({ val: inputVal }); // 这个的改变是同步的
    console.log(this.data.val);
    wx.setStorage({
      key: "inputValue",
      data: inputVal,
    });
  },
  navigator() {
    wx.navigateTo({
      url: "/pages/index/index",
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data: any) {
          console.log(data);
        },
        someEvent: function (data: any) {
          console.log(data);
        },
      },
      success: (res) => {
        console.log(2123);
        res.eventChannel.emit("acceptDataFromOpenedPage", { data: "storage 页面" });
      },
    });
  },
});
