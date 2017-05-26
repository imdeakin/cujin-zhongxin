var apiPath = (function () {
    var server = "http://112.74.88.83:8088"; //服务器地址
    var root = server + "/urbanapi"; // 接口根路径
    var imgRoot = server + "/urban";
    return {
        getImgFullPath: function (imgPath) {
            return imgRoot + '/' + imgPath.replace(/^\//, '');
        },
        getPartnerList: root + '/partnerController/getPartnerList', // 获取合作伙伴列表
        getNewsList: root + '/infoController/getInfoList', // 获取新闻类列表
        getNewsDetail: root + '/infoController/getInfoDetail', // 获取新闻类详情
        getChildMenu: root + '/infoController/getChildNode', // 获取工作动态、城镇试点子菜单列表
    };
})();

var apiConst = {
    newsType: {
        normal: 0, // 普通资讯
        carousel: 1, // 首页轮播图的
        xk: 1, // 小康
        work: 2, // 工作动态
        town: 3, // 城镇试点
        ppp: 4, // PPP项目
        job: 14 // 人才招聘
    },
    subMenu: {
        work_trend: [
            {
                cid: '1',
                remark: '战略合作'
            },
            {
                cid: '1',
                remark: '课题研究'
            },
            {
                cid: '1',
                remark: '项目交流'
            },
            {
                cid: '1',
                remark: '国际合作'
            }
        ],
        e_town: [
            {
                cid: '1',
                remark: '基金管理'
            },
            {
                cid: '1',
                remark: '产权融合'
            },
            {
                cid: '1',
                remark: '特色小镇'
            },
            {
                cid: '1',
                remark: '银行 | 保险 | 证券'
            }
        ]
    }
};

var apiCall = {
    factory: function (key, options) {
        var opts = $.extend({
            api: apiPath[key]
        }, options);
        $.apiCall(opts);
    },
    getPartnerList: function (options) {
        apiCall.factory('getPartnerList', options);
    },
    getNewsList: function (options) {
        apiCall.factory('getNewsList', options);
    },
    getNewsDetail: function (options) {
        apiCall.factory('getNewsDetail', options);
    },
    getChildMenu: function (options) {
        apiCall.factory('getChildMenu', options);
    }
};

var mCom = {
    headerNavComponent: {
        init: function (data) {
            if (data) {
                this.data = data;
            }
            $('#header-nav').html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('tpl/header-nav.tpl.html');
        },
        data: {}
    },
    footerComponent: {
        init: function () {
            $('#footer').html(this.getHtml());
        },
        getHtml: function () {
            return this.getTpl();
        },
        getTpl: function () {
            return $.getHtml('tpl/footer.tpl.html');
        }
    },
    newsListComponent: {
        init: function (con, data) {
            if (data) {
                this.data = data;
            }
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('tpl/news-list.tpl.html');
        },
        data: {
            url: '',
            list: [
                {
                    id: '4321324',
                    title: '第20届澳门国际贸易投资展览会'
                },
                {
                    id: '4321324',
                    title: '第20届澳门国际贸易投资展览会'
                },
                {
                    id: '4321324',
                    title: '第20届澳门国际贸易投资展览会'
                },
                {
                    id: '4321324',
                    title: '第20届澳门国际贸易投资展览会'
                }
            ]
        }
    },
    // 面包屑导航
    crumbsComponent: {
        init: function (con, data) {
            if (data) {
                this.data = data;
            }
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('tpl/crumbs.tpl.html');
        },
        data: [
            {
                name: "首页",
                url: "#"
            },
            {
                name: "公司介绍",
                url: "#"
            },
            {
                name: "公司简介",
                url: "#"
            }
        ]
    },
};

// 设置导航当前项
function setNavIndex(index) {
    if (!index) index = 0;
    $('#header-nav .nav .item').eq(index).addClass('active').siblings().removeClass('active');
}

$(function () {
    // 获取子菜单列表
    apiCall.getChildMenu({
        data: {
            cid: ""
        },
        success: function (data) {
            apiConst.subMenu = data;
        },
        async: false,
        loading: false
    });
    mCom.headerNavComponent.init(apiConst.subMenu);
    mCom.footerComponent.init();
});

// 设置当前日期
(function () {
    var today = new Date();
    var week = '星期';
    switch (today.getDay()) {
        case 1:
            week += '一';
            break;
        case 2:
            week += '二';
            break;
        case 3:
            week += '三';
            break;
        case 4:
            week += '四';
            break;
        case 5:
            week += '五';
            break;
        case 6:
            week += '六';
            break;
        default:
            week += '日'
    }
    $('#header-bar .today').text(today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日 ' + week)
})();