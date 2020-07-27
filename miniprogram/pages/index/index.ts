// index.ts

Page({
  // 存放data的地方
  data: {
    name: "cmw",
    age: 22,
    storageInputVal: "",
    otherStorage: "",
    a: "",
  },
  // 页面加载时触发
  onLoad(options) {
    this.setData({ a: options.a });
    console.log(this.data);
  },
  onReady() {
    const eventChannel = this.getOpenerEventChannel(); // 获取页面通信的事件对象
    // eventChannel.emit("acceptDataFromOpenedPage", { data: "text" });
    // 获取的是上一页通过eventChannel传送到当前页面的数据
    eventChannel.on("acceptDataFromOpenedPage", (data) => {
      this.setData({ otherStorage: data.data });
      console.log(data);
    });
  },
  onShow() {
    wx.getStorage({
      key: "inputValue",
      success: (res) => {
        this.setData({ storageInputVal: res.data });
      },
    });
  },
});
