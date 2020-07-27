const RecorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext(); // 音频上下文，用于播放声音，暂停声音等等
Page({
  data: {
    tempFileVoice: "",
  },
  recorder() {
    // wx.startRecord({
    //   success: (res) => {
    //     console.log(res);
    //     this.setData({ tempFileVoice: res.tempFilePath });
    //   },
    //   fail: (res) => {
    //     console.log(res);
    //   },
    // });
    // setTimeout(() => {
    //   wx.stopRecord();
    // }, 5000);

    RecorderManager.start({
      sampleRate: 16000,
      encodeBitRate: 96000,
      format: "mp3",
      frameSize: 50, // 指定帧大小
    });
    RecorderManager.onStart(() => {
      console.log("start recorder");
    });
  },
  playV() {
    innerAudioContext.autoplay = true;
    innerAudioContext.src = this.data.tempFileVoice;
    innerAudioContext.onPlay(() => {
      console.log("开始播放");
    });
    innerAudioContext.onError((err) => {
      console.log("错误的信息", err);
    });
  },
  //   这个是停止录音
  pause() {
    RecorderManager.stop();
    RecorderManager.onStop((res) => {
      this.setData({ tempFileVoice: res.tempFilePath });
      console.log(res, "stop");
    });
  },
});
