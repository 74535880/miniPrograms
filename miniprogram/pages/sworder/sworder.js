"use strict";
var menuList = ["选项1", "选项2", "选项3", "选项4", "选项5"];
Page({
    data: {
        isShow: false,
    },
    userAction: function () {
        var _this = this;
        wx.showActionSheet({
            itemList: menuList,
            itemColor: "#ccc",
            success: function (res) {
                console.log(res);
                if (res.tapIndex === 0) {
                    wx.showLoading({
                        title: "正在跳转",
                    });
                    setTimeout(function () {
                        wx.navigateTo({
                            url: "/pages/workOrder/workOrder",
                            success: function (res) {
                                console.log("页面跳转成功", res);
                                _this.setData({ isShow: !_this.data.isShow });
                                wx.hideLoading();
                                wx.showToast({ title: "跳转成功" });
                            },
                        });
                    }, 1400);
                }
            },
            fail: function (err) {
                console.log(err);
            },
        });
    },
    hurryUp: function () {
        var _this = this;
        setTimeout(function () {
            wx.showToast({
                title: "已经帮你催办了，请稍等",
                icon: "success",
                duration: 3000,
                success: function (res) {
                    console.log("progress", res);
                },
                fail: function (err) {
                    wx.showToast({
                        title: "很抱歉，我们倒逼哦",
                        icon: "none",
                        success: function (res) {
                            console.log(err, res);
                        },
                    });
                },
                complete: function (res) {
                    _this.setData({ isShow: !_this.data.isShow });
                },
            });
        }, 2000);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dvcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN3b3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRCxVQUFVO1FBQVYsaUJBNEJDO1FBM0JDLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDakIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO29CQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLEtBQUssRUFBRSxNQUFNO3FCQUNkLENBQUMsQ0FBQztvQkFDSCxVQUFVLENBQUM7d0JBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsNEJBQTRCOzRCQUNqQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dDQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dDQUM1QyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0NBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs0QkFDbEMsQ0FBQzt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUVWO1lBQ0gsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU87UUFBUCxpQkF3QkM7UUF2QkMsVUFBVSxDQUFDO1lBQ1QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO29CQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLElBQUksRUFBRSxNQUFNO3dCQUNaLE9BQU8sRUFBRSxVQUFDLEdBQUc7NEJBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3hCLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLFVBQUMsR0FBRztvQkFDWixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnVMaXN0ID0gW1wi6YCJ6aG5MVwiLCBcIumAiemhuTJcIiwgXCLpgInpobkzXCIsIFwi6YCJ6aG5NFwiLCBcIumAiemhuTVcIl07XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGlzU2hvdzogZmFsc2UsXG4gIH0sXG4gIHVzZXJBY3Rpb24oKSB7XG4gICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgIGl0ZW1MaXN0OiBtZW51TGlzdCxcbiAgICAgIGl0ZW1Db2xvcjogXCIjY2NjXCIsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICB0aXRsZTogXCLmraPlnKjot7PovaxcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3dvcmtPcmRlci93b3JrT3JkZXJcIixcbiAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aG16Z2i6Lez6L2s5oiQ5YqfXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaXNTaG93OiAhdGhpcy5kYXRhLmlzU2hvdyB9KTtcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiBcIui3s+i9rOaIkOWKn1wiIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMTQwMCk7XG4gICAgICAgICAgLy8g5omL5bel5aGr5YaZ6KGo5Y2VXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBodXJyeVVwKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwi5bey57uP5biu5L2g5YKs5Yqe5LqG77yM6K+356iN562JXCIsXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIC8vIOaVsOaNrueahOWtmOWCqFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZ3Jlc3NcIiwgcmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCLlvojmirHmrYnvvIzmiJHku6zlgJLpgLzlk6ZcIixcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlzU2hvdzogIXRoaXMuZGF0YS5pc1Nob3cgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LCAyMDAwKTtcbiAgfSxcbn0pO1xuIl19