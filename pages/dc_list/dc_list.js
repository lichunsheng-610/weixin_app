const app = getApp()

var list_item = [0, 0, 0, 0, 0], is_scroll = false;
Page({
    data: {
        menu_top: "150px",
        menu_position: "absolute",
        img_show: true,
        index: 0,
        scroll_top_value: 0,
        list_menu: [{ "menuId": "id1", "GroupName": "新品推荐" }, { "menuId": "id2", "GroupName": "超值早餐" }, { "menuId": "id3", "GroupName": "超值午餐" }, { "menuId": "id4", "GroupName": "超值晚餐" }, { "menuId": "id5", "GroupName": "超值宵夜" }],
        listdata: [{ "menuId": "id1", "GroupName": "新·吉士炒双蛋堡组合" }, { "menuId": "id1", "GroupName": "新·板烧鸡腿堡" }, { "menuId": "id1", "GroupName": "新·麦辣鸡腿堡" }, { "menuId": "id1", "GroupName": "新·牛肉双层堡" }, { "menuId": "id1", "GroupName": "新·巨无霸牛肉堡" }, { "menuId": "id2", "GroupName": "早·吉士炒双蛋堡组合" }, { "menuId": "id3", "GroupName": "午·板烧鸡腿堡" }, { "menuId": "id3", "GroupName": "午·麦辣鸡腿堡" }, { "menuId": "id4", "GroupName": "晚·牛肉双层堡" }, { "menuId": "id4", "GroupName": "晚·巨无霸牛肉堡" }, { "menuId": "id4", "GroupName": "晚·板烧鸡腿堡" }, { "menuId": "id5", "GroupName": "宵夜·麦辣鸡腿堡" }, { "menuId": "id5", "GroupName": "宵夜·牛肉双层堡" }, { "menuId": "id5", "GroupName": "宵夜·巨无霸牛肉堡" }, { "menuId": "id5", "GroupName": "宵夜·麦辣鸡腿堡" }, { "menuId": "id5", "GroupName": "宵夜·牛肉双层堡" }, { "menuId": "id5", "GroupName": "宵夜·巨无霸牛肉堡" }, { "menuId": "id5", "GroupName": "宵夜·麦辣鸡腿堡" }]
    },
    onLoad() {
        // console.log(this.data.listdata);
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
        // console.log("scrolltolowerscrolltolowerscrolltolowerscrolltolower-------");
    },
    click_menu_item(e) {
        console.log(e.target.id);
        switch (e.target.id) {
            case "menu0":
                this.setData({
                    index: "0",
                    scroll_top_value: "150"
                });
                break;
            case "menu1":
                var val = list_item[0] * 112 + 150;
                this.setData({
                    index: "1",
                    scroll_top_value: val
                });
                break;
            case "menu2":
                var val = (list_item[0] + list_item[1]) * 112 + 150;
                this.setData({
                    index: "2",
                    scroll_top_value: val
                });
                console.log("lcsssssssssssssssss");

                break;
            case "menu3":
                var val = (list_item[0] + list_item[1] + list_item[2]) * 112 + 150;
                this.setData({
                    index: "3",
                    scroll_top_value: val
                });
                break;
            case "menu4":
                var val = (list_item[0] + list_item[1] + list_item[2] + list_item[3]) * 112 + 150;
                this.setData({
                    index: "4",
                    scroll_top_value: val
                });
                break;
        }
        console.log("121221212122");

    },
    scroll_event(e) {
        console.log("scroll_event");
        if (e.detail.scrollTop > 150) {
            this.setData({
                menu_top: "0px",
                menu_position: "fixed"
            });

            var index = (e.detail.scrollTop - 150) / 112;

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
                console.log("jinlai1");
                this.setData({
                    index: "1"
                });
            }

        }
        else {
            this.setData({
                menu_top: "150px",
                menu_position: "absolute"
            });
        }
    }
})