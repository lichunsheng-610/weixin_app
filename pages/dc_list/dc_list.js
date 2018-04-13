const app = getApp()

var list_item, is_scroll = false, carousel_h;
Page({
    data: {
        menu_top: 0,
        right_height: 0,
        menu_position: "absolute",
        img_show: true,
        index: 0,
        scroll_top_value: 0,
        list_menu: [{ "menuId": "id1", "dataId": "1", "GroupName": "新品推荐" }, { "menuId": "id2", "dataId": "2", "GroupName": "超值早餐" }, { "menuId": "id3", "dataId": "3", "GroupName": "超值午餐" }, { "menuId": "id4", "dataId": "4", "GroupName": "超值晚餐" }, { "menuId": "id5", "dataId": "5", "GroupName": "超值宵夜" }],
        listdata: [{ "menuId": "id1", "dataId": "1", "GroupName": "新·吉士炒双蛋堡组合" }, { "menuId": "id1", "dataId": "2", "GroupName": "新·板烧鸡腿堡" }, { "menuId": "id1", "dataId": "3", "GroupName": "新·麦辣鸡腿堡" }, { "menuId": "id1", "dataId": "4", "GroupName": "新·牛肉双层堡" }, { "menuId": "id1", "dataId": "5", "GroupName": "新·巨无霸牛肉堡" }, { "menuId": "id2", "dataId": "6", "GroupName": "早·吉士炒双蛋堡组合" }, { "menuId": "id3", "dataId": "7", "GroupName": "午·板烧鸡腿堡" }, { "menuId": "id3", "dataId": "8", "GroupName": "午·麦辣鸡腿堡" }, { "menuId": "id4", "dataId": "9", "GroupName": "晚·牛肉双层堡" }, { "menuId": "id4", "dataId": "10", "GroupName": "晚·巨无霸牛肉堡" }, { "menuId": "id4", "dataId": "11", "GroupName": "晚·板烧鸡腿堡" }, { "menuId": "id5", "dataId": "12", "GroupName": "宵夜·麦辣鸡腿堡" }, { "menuId": "id5", "dataId": "13", "GroupName": "宵夜·牛肉双层堡" }, { "menuId": "id5", "dataId": "14", "GroupName": "宵夜·巨无霸牛肉堡" }, { "menuId": "id5", "dataId": "15", "GroupName": "宵夜·麦辣鸡腿堡" }, { "menuId": "id5", "dataId": "16", "GroupName": "宵夜·牛肉双层堡" }, { "menuId": "id5", "dataId": "17", "GroupName": "宵夜·巨无霸牛肉堡" }, { "menuId": "id5", "dataId": "18", "GroupName": "宵夜·麦辣鸡腿堡" }]
    },
    onLoad() {
        var that = this;
        var right_h = this.data.listdata.length * 112 + 10 + "px";

        //选择id
        var query = wx.createSelectorQuery();
        query.select('#list_header_id').boundingClientRect();
        query.exec(function (res) {
            carousel_h = res[0].height;

            that.setData({
                right_height: right_h,
                menu_top: carousel_h + "px"
            });
        });

        list_item = [0, 0, 0, 0, 0];
        for (var i = 0; i < this.data.listdata.length; i++) {
            switch (this.data.listdata[i].menuId) {
                case "id1":
                    list_item[0]++;
                    break;
                case "id2":
                    list_item[1]++;
                    break;
                case "id3":
                    list_item[2]++;
                    break;
                case "id4":
                    list_item[3]++;
                    break;
                case "id5":
                    list_item[4]++;
                    break;
            }
        }
    },
    scrolltoupper() {
        // console.log("scrolltoupper ");
    },
    scrolltolower() {
        // console.log("ltolowerscrolltolowerscrolltolowerscrolltolower-------");
    },
    click_menu_item(e) {
        // console.log(e);
        is_scroll = true;
        switch (e.currentTarget.id) {
            case "menu0":
                this.setData({
                    index: "0",
                    scroll_top_value: carousel_h
                });
                break;
            case "menu1":
                var val = list_item[0] * 112 + carousel_h;
                this.setData({
                    index: "1",
                    scroll_top_value: val
                });
                break;
            case "menu2":
                var val = (list_item[0] + list_item[1]) * 112 + carousel_h;
                this.setData({
                    index: "2",
                    scroll_top_value: val
                });
                break;
            case "menu3":
                var val = (list_item[0] + list_item[1] + list_item[2]) * 112 + carousel_h;
                this.setData({
                    index: "3",
                    scroll_top_value: val
                });
                break;
            case "menu4":
                var val = (list_item[0] + list_item[1] + list_item[2] + list_item[3]) * 112 + carousel_h;
                this.setData({
                    index: "4",
                    scroll_top_value: val
                });
                break;
        }
    },
    scroll_event(e) {
        // console.log(this.data.scroll_top_value);

        if (e.detail.scrollTop >= carousel_h) {
            this.setData({
                menu_top: "0px",
                menu_position: "fixed"
            });

            if (is_scroll) {
                is_scroll = false;
                return;
            }

            var index = (e.detail.scrollTop - carousel_h) / 112;

            if (index < list_item[0]) {
                this.setData({
                    index: "0"
                });
            }

            if (index > (list_item[0] + list_item[1] + list_item[2] + list_item[3])) {
                this.setData({
                    index: "4"
                });
            } else if (index > (list_item[0] + list_item[1] + list_item[2])) {
                this.setData({
                    index: "3"
                });
            } else if (index > (list_item[0] + list_item[1])) {
                this.setData({
                    index: "2"
                });
            } else if (index > list_item[0]) {
                this.setData({
                    index: "1"
                });
            }

        }
        else {
            this.setData({
                menu_top: carousel_h + "px",
                menu_position: "absolute"
            });
        }
    }
})