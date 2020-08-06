Page({
  onLoad() {
    const worker = wx.createWorker('workers/request/index.js');
    worker.onMessage(res => {
      console.log(res);
    });
  },
});
