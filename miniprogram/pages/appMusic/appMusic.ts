const _items = [
  {
    coverImgUrl:
      "http://p1.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg?param=300y300",
    dataUrl:
      "http://m801.music.126.net/20200706110631/4d60e1efc3761e518372270c22b33d40/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1497471810/ae4f/3676/98a8/c98c5b9f5350b8dcb34dfb81f94e73ec.mp3",
    name: "海底但是规范化的时刻就发货都是开放的身份跨境电商",
    single: "一只榴莲",
    id: 1,
  },
  {
    coverImgUrl:
      "http://p1.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg?param=300y300",
    dataUrl:
      "http://m801.music.126.net/20200706110631/4d60e1efc3761e518372270c22b33d40/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1497471810/ae4f/3676/98a8/c98c5b9f5350b8dcb34dfb81f94e73ec.mp3",
    name: "海底",
    single: "一只榴莲",
    id: 1,
  },
  {
    coverImgUrl:
      "http://p1.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg?param=300y300",
    dataUrl:
      "http://m801.music.126.net/20200706110631/4d60e1efc3761e518372270c22b33d40/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1497471810/ae4f/3676/98a8/c98c5b9f5350b8dcb34dfb81f94e73ec.mp3",
    name: "海底",
    single: "一只榴莲",
    id: 1,
  },
  {
    coverImgUrl:
      "http://p1.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg?param=300y300",
    dataUrl:
      "http://m801.music.126.net/20200706110631/4d60e1efc3761e518372270c22b33d40/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1497471810/ae4f/3676/98a8/c98c5b9f5350b8dcb34dfb81f94e73ec.mp3",
    name: "海底",
    single: "一只榴莲",
    id: 1,
  },
];
const songsList = [
  {
    imgUrl:
      "https://i.pinimg.com/236x/52/93/48/52934899233d87591dfd2dba0ab6e937.jpg",
    name: "精忠报国",
    singer: "程明旺",
    id: 1,
  },
  {
    imgUrl:
      "https://i.pinimg.com/236x/52/93/48/52934899233d87591dfd2dba0ab6e937.jpg",
    name: "精忠报国",
    singer: "程明旺",
    id: 2,
  },
];
const albunList = [
  {
    imgUrl:
      "https://i.pinimg.com/236x/9e/94/b2/9e94b2edaa633d3a124c1e049f0c4324.jpg",
    musicName: "飞向别人的床",
    author: "程明旺",
    id: 1,
  },
  {
    imgUrl:
      "https://i.pinimg.com/236x/9e/94/b2/9e94b2edaa633d3a124c1e049f0c4324.jpg",
    musicName: "飞向别人的床",
    author: "程明旺",
    id: 2,
  },
  {
    imgUrl:
      "https://i.pinimg.com/236x/9e/94/b2/9e94b2edaa633d3a124c1e049f0c4324.jpg",
    musicName: "飞向别人的床",
    author: "程明旺",
  },
  {
    imgUrl:
      "https://i.pinimg.com/236x/9e/94/b2/9e94b2edaa633d3a124c1e049f0c4324.jpg",
    musicName: "飞向别人的床",
    author: "程明旺",
    id: 3,
  },
];
Page({
  data: {
    templateName: "music-play-list",
    templateData: [] as any,
    songsList: _items,
    musiceGroupName: "播放列表",
    actionSheetHidden: true,
    actionSheetItems: ["播放列表", "歌曲", "专辑", "演唱者"],
  },
  /**
   * 播放列表的选择
   */
  actionSheetTap() {
    this.setData({ actionSheetHidden: !this.data.actionSheetHidden });
  },
  cancel() {
    this.setData({ actionSheetHidden: true });
  },
  bindItemTap(e: any) {
    setTimeout(() => {
      this.setData({ actionSheetHidden: true });
    }, 500);
    const name = e.currentTarget.dataset.name;
    this.setData({ musiceGroupName: name });
    // 判断打开什么模版页面
    switch (name) {
      case "播放列表":
        this.setData({ templateName: "music-play-list" });
        break;
      case "歌曲":
        this.setData({ templateName: "songs-list", templateData: songsList });
        break;
      case "专辑":
        this.setData({ templateName: "albun-list", templateData: albunList });
        break;
      case "演唱者":
        this.setData({ templateName: "author-list" });
        break;
      default:
        break;
    }
  },
});
