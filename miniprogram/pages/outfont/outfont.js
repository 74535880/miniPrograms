"use strict";
Page({
    data: {
        loaded: false,
        fontFamily: "Bitstream Vera Serif Bold",
    },
    onLoad: function () {
        this.setData({ loaded: false });
    },
    getfont: function () {
        var _this = this;
        console.log("getfont");
        wx.loadFontFace({
            family: this.data.fontFamily,
            source: "url(\"https://sungd.github.io/Pacifico.ttf\")",
            success: function (res) {
                _this.setData({ loaded: true });
                console.log("success", res);
            },
            fail: function (err) {
                console.log("fail", err);
            },
            complete: function (res) {
                console.log("complete", res);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0Zm9udC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm91dGZvbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxLQUFLO1FBQ2IsVUFBVSxFQUFFLDJCQUEyQjtLQUN4QztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELE9BQU87UUFBUCxpQkFpQkM7UUFoQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsK0NBQTZDO1lBQ3JELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsUUFBUSxFQUFFLFVBQUMsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICBmb250RmFtaWx5OiBcIkJpdHN0cmVhbSBWZXJhIFNlcmlmIEJvbGRcIixcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7IGxvYWRlZDogZmFsc2UgfSk7XG4gIH0sXG4gIGdldGZvbnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRmb250XCIpO1xuICAgIC8vICAgIOWKoOi9veWklumDqOWtl+S9kyznmoRhcGlcbiAgICB3eC5sb2FkRm9udEZhY2Uoe1xuICAgICAgZmFtaWx5OiB0aGlzLmRhdGEuZm9udEZhbWlseSxcbiAgICAgIHNvdXJjZTogYHVybChcImh0dHBzOi8vc3VuZ2QuZ2l0aHViLmlvL1BhY2lmaWNvLnR0ZlwiKWAsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IGxvYWRlZDogdHJ1ZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIsIHJlcyk7XG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIiwgZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIsIHJlcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=