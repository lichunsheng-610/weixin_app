const app = getApp()

Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        markers: []
    },
    onLoad() {
        var that = this;
        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers: [{
                        latitude: res.latitude,
                        longitude: res.longitude,
                        title: "公司",
                        iconPath: '/image/location_.png'
                    }]
                });
            }
        })
    }
})
