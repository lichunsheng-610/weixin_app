//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Please log in first.',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindButton: function () {
        wx.navigateTo({
            url: '../audio/audio'
        })
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../phone/phone'
        })
        // wx.getSystemInfo({
        //     success: function (res) {
        //         console.log(res.model)
        //         console.log(res.pixelRatio)
        //         console.log(res.windowWidth)
        //         console.log(res.windowHeight)
        //         console.log(res.language)
        //         console.log(res.version)
        //         console.log(res.platform)
        //         console.log(res.SDKVersion)
        //     }
        // });
        // wx.scanCode({
        //     success: (res) => {
        //         console.log(res)
        //     }
        // })
        // wx.navigateTo({
        //     url: '../logs/logs'
        // })
    },
    onLoad: function () {
        console.log("-----onload");
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
                motto: 'welcome ' + app.globalData.userInfo.nickName
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                    motto: 'welcome ' + res.userInfo.nickName
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                        motto: 'welcome ' + res.userInfo.nickName
                    })
                }
            })
        }
    },
    onShow() {
        console.log("-----show");
    },
    onReady() {
        console.log("-----ready");
    },
    onHide() {
        console.log("-----hide");
    },
    onUnload() {
        console.log("-----unload");
    },
    getUserInfo_btn: function (e) {
        console.log("------");
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
            motto: 'welcome ' + e.detail.userInfo.nickName
        })
    }
})
