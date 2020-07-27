"use strict";
Page({
    data: {
        hidden: true,
    },
    loadingChange: function () {
        this.setData({
            hidden: true,
        });
        console.log("loadingChange");
    },
    loadingTap: function () {
        this.setData({
            hidden: false,
        });
    },
    getShowTost: function () {
        wx.showToast({
            title: "正在加载",
            icon: "success",
            mask: true,
            duration: 2000,
            success: function (res) {
                console.log(res);
            },
        });
    },
    closeLoading: function () {
        wx.hideLoading();
    },
    showModal: function () {
        wx.showModal({
            title: "这是一个模态对话框",
            content: "你到底想要什么东西",
            success: function (res) {
                if (res.confirm) {
                    console.log("用户点击了确定");
                }
                else {
                    console.log("用户点击了取消");
                }
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFlBQVk7UUFDVixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELFNBQVM7UUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LFxuICBsb2FkaW5nQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmdDaGFuZ2VcIik7XG4gIH0sXG4gIGxvYWRpbmdUYXA6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOWxleekuua2iOaBr+aPkOekuuahhlxuICAgKi9cbiAgZ2V0U2hvd1Rvc3QoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiBcIuato+WcqOWKoOi9vVwiLFxuICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBjbG9zZUxvYWRpbmcoKSB7XG4gICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgfSxcbiAgc2hvd01vZGFsKCkge1xuICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICB0aXRsZTogXCLov5nmmK/kuIDkuKrmqKHmgIHlr7nor53moYZcIixcbiAgICAgIGNvbnRlbnQ6IFwi5L2g5Yiw5bqV5oOz6KaB5LuA5LmI5Lic6KW/XCIsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi55So5oi354K55Ye75LqG56Gu5a6aXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi55So5oi354K55Ye75LqG5Y+W5raIXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=