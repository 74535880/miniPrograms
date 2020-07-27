const backgroundAudio = wx.getBackgroundAudioManager(); 
Page({
  data: {},
  onShow: () => {
    backgroundAudio.src =
      "http://m701.music.126.net/20200705144614/2c65f14ba63641e4cdc6cd3ca5fc089a/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2180586519/98b2/4d51/b6d3/c8c65de6a0bf053a2cd94d1f9473d069.mp3";
    backgroundAudio.title = "为什么你不在";
    backgroundAudio.epname = "为什么你不在"; // 专辑名
  },
  play() {
    // backgroundAudio.play();
    // backgroundAudio.onPlay(() => {
    //   console.log("start play");
    // });
    wx.navigateTo({
      url: "/pages/canvas/canvas",
      success: (res) => {
        console.log(res);
      },
    });
  },
  pause() {
    backgroundAudio.pause();
    backgroundAudio.onPause(() => {
      console.log("pause");
    });
  },
  seek() {
    backgroundAudio.seek(30);
    backgroundAudio.onSeeked(() => {
      console.log("seeked");
    });
  },
  stop() {
    backgroundAudio.stop();
    backgroundAudio.onStop(() => {
      console.log("stop");
    });
  },
});
