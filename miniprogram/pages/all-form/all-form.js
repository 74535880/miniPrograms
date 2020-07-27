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
    checkbind: function (e) {
        console.log(e);
    },
    changebind: function (e) {
        console.log(e);
    },
    onStatusChange: function (e) {
        var formats = e.detail;
        console.log(formats);
    },
    bindconfirm: function (e) {
        console.log(e);
    },
    radioChange: function (e) {
        console.log(e);
        var checked = e.detail.value;
        var changed = {};
        for (var _i = 0, _a = this.data.radiosItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (checked === item.name) {
                changed[item.name] = true;
            }
            else {
                changed[item.name] = false;
            }
        }
        this.setData(__assign({}, this.data, { changed: changed }));
    },
    bindPickerChange: function (e) {
        var value = e.detail.value;
        this.setData(__assign({}, this.data, { index: value }));
    },
    bindMiltiPickerChange: function (e) {
        var value = e.detail.value;
        console.log(value);
        this.setData({ multiIndex: value });
    },
    bindColumnChange: function (e) {
        var _a = e.detail, column = _a.column, value = _a.value;
        console.log("列" + column, "个" + value);
    },
    bindTimeChange: function (e) {
        var value = e.detail.value;
        this.setData({ time: value });
    },
    swtichChange1: function (e) {
        var value = e.detail.value;
        console.log(value);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGwtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRTtZQUNMO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLEtBQUs7YUFDZjtTQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1g7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDaEMsS0FBSyxFQUFFLENBQUM7UUFDUixVQUFVLEVBQUU7WUFDVixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFDWixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFDWixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsVUFBVSxFQUFFLEVBQUU7UUFDZCxJQUFJLEVBQUUsRUFBRTtLQUNUO0lBQ0QsU0FBUyxZQUFDLENBQU07UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxVQUFVLFlBQUMsQ0FBTTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELGNBQWMsWUFBQyxDQUFNO1FBQ25CLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0QsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUV4QixLQUFtQixVQUFxQixFQUFyQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQXJDLElBQU0sSUFBSSxTQUFBO1lBQ2IsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLGNBQU0sSUFBSSxDQUFDLElBQUksSUFBRSxPQUFPLFNBQUEsSUFBRyxDQUFDO0lBQzFDLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxDQUFNO1FBQ2IsSUFBQSxzQkFBSyxDQUFjO1FBQzNCLElBQUksQ0FBQyxPQUFPLGNBQU0sSUFBSSxDQUFDLElBQUksSUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFHLENBQUM7SUFDL0MsQ0FBQztJQUNELHFCQUFxQixZQUFDLENBQU07UUFDbEIsSUFBQSxzQkFBSyxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxDQUFNO1FBQ2YsSUFBQSxhQUE0QixFQUExQixrQkFBTSxFQUFFLGdCQUFrQixDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGNBQWMsWUFBQyxDQUFNO1FBQ1gsSUFBQSxzQkFBSyxDQUFjO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsYUFBYSxZQUFDLENBQU07UUFDVixJQUFBLHNCQUFLLENBQWM7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBpbnB1dFZhbDogXCJmXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ0b21cIixcbiAgICAgICAgdmFsdWU6IFwiY2hhXCIsXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIm1lcnJ5XCIsXG4gICAgICAgIHZhbHVlOiBcImFyYVwiLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZG9nXCIsXG4gICAgICAgIHZhbHVlOiBcImVkaWFcIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gICAgcmFkaW9zSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ0b21cIixcbiAgICAgICAgdmFsdWU6IFwiY2gtY25cIixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImRvZ1wiLFxuICAgICAgICB2YWx1ZTogXCJ1c2FcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwi5byg5LiJXCIsXG4gICAgICAgIHZhbHVlOiBcImVuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgY29udHJ5OiBbXCLnvo7lm71cIiwgXCLkuK3lj6RcIiwgXCLml6XmnKxcIiwgXCLoi7Hlm71cIl0sXG4gICAgaW5kZXg6IDAsXG4gICAgbXVsdGlBcnJheTogW1xuICAgICAgW1wi5Lit5Zu9XCIsIFwi5YyX5LqsXCJdLFxuICAgICAgW1wi576O5Zu9XCIsIFwi57q957qmXCJdLFxuICAgICAgW1wi5a6H5a6ZXCIsIFwi5Zyw55CDXCIsIFwi5Lit5Zu9XCJdLFxuICAgIF0sXG4gICAgbXVsdGlJbmRleDogW10sXG4gICAgdGltZTogXCJcIixcbiAgfSxcbiAgY2hlY2tiaW5kKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9LFxuICBjaGFuZ2ViaW5kKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9LFxuICBvblN0YXR1c0NoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCBmb3JtYXRzID0gZS5kZXRhaWw7XG4gICAgY29uc29sZS5sb2coZm9ybWF0cyk7XG4gIH0sXG4gIGJpbmRjb25maXJtKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9LFxuICByYWRpb0NoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCBjaGVja2VkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgY29uc3QgY2hhbmdlZDogYW55ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhLnJhZGlvc0l0ZW1zKSB7XG4gICAgICBpZiAoY2hlY2tlZCA9PT0gaXRlbS5uYW1lKSB7XG4gICAgICAgIGNoYW5nZWRbaXRlbS5uYW1lXSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VkW2l0ZW0ubmFtZV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHsgLi4udGhpcy5kYXRhLCBjaGFuZ2VkIH0pO1xuICB9LFxuICBiaW5kUGlja2VyQ2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUuZGV0YWlsO1xuICAgIHRoaXMuc2V0RGF0YSh7IC4uLnRoaXMuZGF0YSwgaW5kZXg6IHZhbHVlIH0pO1xuICB9LFxuICBiaW5kTWlsdGlQaWNrZXJDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5kZXRhaWw7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIHRoaXMuc2V0RGF0YSh7IG11bHRpSW5kZXg6IHZhbHVlIH0pO1xuICB9LFxuICBiaW5kQ29sdW1uQ2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHsgY29sdW1uLCB2YWx1ZSB9ID0gZS5kZXRhaWw7XG4gICAgY29uc29sZS5sb2coXCLliJdcIiArIGNvbHVtbiwgXCLkuKpcIiArIHZhbHVlKTtcbiAgfSxcbiAgYmluZFRpbWVDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5kZXRhaWw7XG4gICAgdGhpcy5zZXREYXRhKHsgdGltZTogdmFsdWUgfSk7XG4gIH0sXG4gIHN3dGljaENoYW5nZTEoZTogYW55KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5kZXRhaWw7XG5cbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH0sXG59KTtcbiJdfQ==