Page({
    data: {
        imgUrls: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523360018762&di=d3c4804445888fc55e5c411f6466b7ac&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F53%2F72%2F16pic_5372096_b.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523360014405&di=28b82985237029da0423519d5d4c7aa7&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F07%2F66%2F16pic_766175_b.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523360011224&di=f1515f322b292392f0d7e6231d952f65&imgtype=0&src=http%3A%2F%2Fpic11.nipic.com%2F20101215%2F3400947_015953693504_2.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    onHide() {
        console.log("-----main hide");
    },
    mls_click(){
        wx.navigateTo({
            url: '../mls_map/mls_map'
        });
    },
    dc_click() {
        wx.navigateTo({
            url: '../dc_list/dc_list'
        });        
    },
    onUnload() {
        console.log("-----main unload");
    }
})
