Page({
  data: {
    sendUrl: "ws://123.207.136.134:9010/ajaxchattest",
    message: "",
    responseMsg: "" as string | ArrayBuffer,
    responseString: [
      {
        type: "node",
        name: "h2",
        attrs: {},
        children: [
          {
            type: "text",
            text: "this is response content",
          },
        ],
      },
    ],
  },
  /**
   * 数据获取操作
   * @param e
   */
  recodeMessage(e: any) {
    this.setData({ message: e.detail.value });
  },
  /**
   * 发送数据
   */
  send() {
    //   1. 建立链接
    const socketTask = wx.connectSocket({
      url: this.data.sendUrl,
    });
    // 链接成功与否的判断
    wx.onSocketOpen((res) => {
      console.log("socket open", res);
      wx.sendSocketMessage({
        data: this.data.message,
        success: (res) => {
          console.log("success", res);
          wx.onSocketClose((res) => {
            console.log(res);
          });
        },
        complete: (res) => {},
      });
    });
    wx.onSocketMessage((res) => {
      console.log(res);
      this.setData({ responseMsg: res.data });
    });
  },
});

// 我发送一个消息，然后渲染信息，之前的渲染的需要保留，我们就需要一个东西来保存，进行渲染。并且和机器人回复的是一一对应的
// 机器人回复一个消息，渲染信息
