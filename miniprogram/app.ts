// app.ts
const worker = wx.createWorker('workers/request/index.js');
worker.terminate();
App<IAppOption>({
  globalData: {},
});
