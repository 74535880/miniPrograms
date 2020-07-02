"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Page({
    data: {
        name: "cmw",
        age: 22,
        isAutoPlay: true,
        contentList: [
            "demo1",
            "demo2",
            "demo3",
            "demo4",
            "demo5",
            "demo6",
            "demo7",
            "demo8",
        ],
        isNowId: 0,
        newsNumbers: 100,
        articleNumbers: 3,
    },
    onLoad: function () {
        console.log("this is onLoad");
    },
    onShow: function () {
        console.log("this is onShow");
    },
    getImage: function (event) {
        console.log(event);
    },
    stopPlay: function () {
        if (this.data.isAutoPlay === false) {
            return;
        }
        this.setData(__assign({}, this.data, { isAutoPlay: false }));
    },
    startPlay: function () {
        if (this.data.isAutoPlay == true) {
            return;
        }
        this.setData(__assign({}, this.data, { isAutoPlay: true }));
    },
    getMoreNews: function () {
        this.setData(__assign({}, this.data, { articleNumbers: this.data.articleNumbers + 10 }));
    },
    onReachBottom: function () {
        this.setData(__assign({}, this.data, { articleNumbers: this.data.articleNumbers + 10 }));
    },
    changePage: function (event) {
        var index = event.currentTarget.dataset.index;
        this.setData(__assign({}, this.data, { isNowId: index }));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEtBQUs7UUFDWCxHQUFHLEVBQUUsRUFBRTtRQUNQLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRTtZQUNYLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLE9BQU87WUFDUCxPQUFPO1NBQ1I7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLGNBQWMsRUFBRSxDQUFDO0tBQ2xCO0lBRUQsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsUUFBUSxZQUFDLEtBQWE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLGNBQ1AsSUFBSSxDQUFDLElBQUksSUFDWixVQUFVLEVBQUUsS0FBSyxJQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxjQUNQLElBQUksQ0FBQyxJQUFJLElBQ1osVUFBVSxFQUFFLElBQUksSUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sY0FDUCxJQUFJLENBQUMsSUFBSSxJQUNaLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLElBQzdDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLGNBQ1AsSUFBSSxDQUFDLElBQUksSUFDWixjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxJQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUNELFVBQVUsWUFBQyxLQUFVO1FBR0osSUFBQSx5Q0FBSyxDQUVWO1FBRVYsSUFBSSxDQUFDLE9BQU8sY0FDUCxJQUFJLENBQUMsSUFBSSxJQUNaLE9BQU8sRUFBRSxLQUFLLElBQ2QsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIG5hbWU6IFwiY213XCIsXG4gICAgYWdlOiAyMixcbiAgICBpc0F1dG9QbGF5OiB0cnVlLFxuICAgIGNvbnRlbnRMaXN0OiBbXG4gICAgICBcImRlbW8xXCIsXG4gICAgICBcImRlbW8yXCIsXG4gICAgICBcImRlbW8zXCIsXG4gICAgICBcImRlbW80XCIsXG4gICAgICBcImRlbW81XCIsXG4gICAgICBcImRlbW82XCIsXG4gICAgICBcImRlbW83XCIsXG4gICAgICBcImRlbW84XCIsXG4gICAgXSxcbiAgICBpc05vd0lkOiAwLFxuICAgIG5ld3NOdW1iZXJzOiAxMDAsXG4gICAgYXJ0aWNsZU51bWJlcnM6IDMsXG4gIH0sXG4gIC8vIOWcqOi/meS4queUn+WRveWRqOacn+iOt+WPluaVsOaNruacgOW/q+eahFxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIG9uTG9hZFwiKTtcbiAgfSxcbiAgLy8g6aG16Z2i5bGV56S65Ye65p2l5LqGXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgb25TaG93XCIpO1xuICB9LFxuICBnZXRJbWFnZShldmVudDogb2JqZWN0KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9LFxuICBzdG9wUGxheSgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmlzQXV0b1BsYXkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAuLi50aGlzLmRhdGEsXG4gICAgICBpc0F1dG9QbGF5OiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcbiAgc3RhcnRQbGF5KCkge1xuICAgIGlmICh0aGlzLmRhdGEuaXNBdXRvUGxheSA9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAuLi50aGlzLmRhdGEsXG4gICAgICBpc0F1dG9QbGF5OiB0cnVlLFxuICAgIH0pO1xuICB9LFxuICAvLyAgIOiOt+WPluabtOWkmueahOS/oeaBr1xuICBnZXRNb3JlTmV3cygpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgYXJ0aWNsZU51bWJlcnM6IHRoaXMuZGF0YS5hcnRpY2xlTnVtYmVycyArIDEwLFxuICAgIH0pO1xuICB9LFxuICAvLyAgIOS4i+aLieinpuW6leS6i+S7tlxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAuLi50aGlzLmRhdGEsXG4gICAgICBhcnRpY2xlTnVtYmVyczogdGhpcy5kYXRhLmFydGljbGVOdW1iZXJzICsgMTAsXG4gICAgfSk7XG4gIH0sXG4gIGNoYW5nZVBhZ2UoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbnRUYXJnZXQ6IHtcbiAgICAgICAgZGF0YXNldDogeyBpbmRleCB9LFxuICAgICAgfSxcbiAgICB9ID0gZXZlbnQ7XG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgaXNOb3dJZDogaW5kZXgsXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==