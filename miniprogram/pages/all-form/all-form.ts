Page({
  data: {
    inputVal: "f",
    items: [
      {
        name: "tom",
        value: "cha",
        checked: true,
      },
      {
        name: "merry",
        value: "ara",
        checked: false,
      },
      {
        name: "dog",
        value: "edia",
        checked: false,
      },
    ],
    radiosItems: [
      {
        name: "tom",
        value: "ch-cn",
        checked: false,
      },
      {
        name: "dog",
        value: "usa",
      },
      {
        name: "张三",
        value: "en",
      },
    ],
    contry: ["美国", "中古", "日本", "英国"],
    index: 0,
    multiArray: [
      ["中国", "北京"],
      ["美国", "纽约"],
      ["宇宙", "地球", "中国"],
    ],
    multiIndex: [],
    time: "",
  },
  checkbind(e: any) {
    console.log(e);
  },
  changebind(e: any) {
    console.log(e);
  },
  onStatusChange(e: any) {
    const formats = e.detail;
    console.log(formats);
  },
  bindconfirm(e: any) {
    console.log(e);
  },
  radioChange(e: any) {
    console.log(e);
    const checked = e.detail.value;
    const changed: any = {};

    for (const item of this.data.radiosItems) {
      if (checked === item.name) {
        changed[item.name] = true;
      } else {
        changed[item.name] = false;
      }
    }
    this.setData({ ...this.data, changed });
  },
  bindPickerChange(e: any) {
    const { value } = e.detail;
    this.setData({ ...this.data, index: value });
  },
  bindMiltiPickerChange(e: any) {
    const { value } = e.detail;
    console.log(value);
    this.setData({ multiIndex: value });
  },
  bindColumnChange(e: any) {
    const { column, value } = e.detail;
    console.log("列" + column, "个" + value);
  },
  bindTimeChange(e: any) {
    const { value } = e.detail;
    this.setData({ time: value });
  },
  swtichChange1(e: any) {
    const { value } = e.detail;

    console.log(value);
  },
});
