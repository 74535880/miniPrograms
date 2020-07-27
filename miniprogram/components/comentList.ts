Component({
  behaviors: [],
  properties: {
    id: {
      type: String,
      value: "10",
    },
  },
  lifetimes: {
    attached: function () {
      console.log(this.id);
      console.log("attached");
    },
    moved: function () {
      console.log("movied");
    },
    detached: function () {
      console.log("detached");
    },
  },
  pageLifetimes: {
    show: () => {
      console.log("show");
    },
    hide: function () {
      console.log("hide");
    },
    resize: function () {
      console.log("resize");
    },
  },
});
