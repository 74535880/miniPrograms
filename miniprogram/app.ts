// 在主线程的代码 app.js 中初始化 Worker
const worker = wx.createWorker('workers/request/index.js'); // 文件名指定 worker 的入口文件路径，绝对路径
worker.onMessage(function (res) {
  console.log(res);
});

worker.postMessage({
  msg: 'hello worker',
});

worker.terminate();
// app.ts
App<IAppOption>({
  globalData: {},
});
