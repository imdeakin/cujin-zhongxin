var mCom = {
    headerComponent: {
        init: function () {
            $('#header').html(this.getHtml());
        },
        getHtml: function () {
            return this.getTpl();
        },
        getTpl: function () {
            return $.getHtml('com/header.component.html');
        }
    },
    footerComponent: {
        init: function () {
            $('#footer').html(this.getHtml());
        },
        getHtml: function () {
            return this.getTpl();
        },
        getTpl: function () {
            return $.getHtml('com/footer.component.html');
        }
    },
    // 侧边栏——分类组
    sidebarClassComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            var con = $(this.getTpl());

            mCom.classMenuComponent.data = {
                title: "职业制服系列",
                list: [
                    {
                        img: "img/class_icon.png",
                        name: "男女西服"
                    },
                    {
                        img: "img/class_icon.png",
                        name: "时尚职业装"
                    },
                    {
                        img: "img/class_icon.png",
                        name: "团体制服"
                    }
                ]
            };
            con.find('.content').empty().append(mCom.classMenuComponent.getHtml());

            mCom.classMenuComponent.data = {
                title: "高级私人定制",
                list: [
                    {
                        img: "img/class_icon.png",
                        name: "西装"
                    },
                    {
                        img: "img/class_icon.png",
                        name: "礼服"
                    },
                    {
                        img: "img/class_icon.png",
                        name: "衬衫"
                    },
                    {
                        img: "img/class_icon.png",
                        name: "制服"
                    }
                ]
            };
            con.find('.content').append(mCom.classMenuComponent.getHtml());

            return con;
        },
        getTpl: function () {
            return $.getHtml('com/sidebar-class.component.html');
        }
    },
    // 分类菜单
    classMenuComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/class-menu.component.html');
        },
        data: {
            title: "职业制服系列",
            list: [
                {
                    img: "img/class_icon.png",
                    name: "男女西服"
                },
                {
                    img: "img/class_icon.png",
                    name: "时尚职业装"
                },
                {
                    img: "img/class_icon.png",
                    name: "团体制服"
                }
            ]
        }
    },
    // 分类菜单2
    classMenuComponent2: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/class-menu2.component.html');
        },
        data: {
            title: "公司介绍",
            list: [
                {
                    id: "1",
                    name: "企业文化"
                },
                {
                    id: "2",
                    name: "公司简介"
                },
                {
                    id: "3",
                    name: "经营理念"
                },
                {
                    id: "4",
                    name: "优势战略"
                },
                {
                    id: "5",
                    name: "企业资质"
                }
            ]
        }
    },
    // 侧边栏——产品推荐组
    sidebarProdComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            var con = $(this.getTpl());
            con.find('.content').empty().append(mCom.sidebarProdListComponent.getHtml());
            return con;
        },
        getTpl: function () {
            return $.getHtml('com/sidebar-prod.component.html');
        }
    },
    // 侧边栏——产品列表
    sidebarProdListComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/sidebar-prod-list.component.html');
        },
        data: [
            {
                img: "img/s_prod.jpg",
                id: "1"
            },
            {
                img: "img/s_prod.jpg",
                id: "1"
            },
            {
                img: "img/s_prod.jpg",
                id: "1"
            }
        ]
    },
    // 侧边栏——联系信息
    sidebarInfoComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/sidebar-info.component.html');
        },
        data: {
            name: "广州杰美服装有限公司",
            tel: "020-66359500",
            hot: "137-6062-6692",
            email: "admin@gzboshi.cn",
            website: "www.gzboshi.cn",
            qq: "178190912",
            address: "广州市白云区福泰东路32号7楼"
        }
    },
    // 板块标题栏
    headBarComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/head-bar.component.html');
        },
        data: {
            title: "新品推荐",
            subtitle: "NEW PRODUCTS",
            url: ""
        }
    },
    // 产品列表——简洁版
    simpleProdListComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/simple-prod-list.component.html');
        },
        data: [
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                id: "1"
            }
        ]
    },
    // 产品列表——富美版
    fullProdListComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/full-prod-list.component.html');
        },
        data: [
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                name: "商务西装正装套装(BDSEM024)",
                id: "1"
            }
        ]
    },
    // 新闻列表
    newsListComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/news-list.component.html');
        },
        data: [
            {
                img: "img/prod_01.jpg",
                title: "波司登董事长高德康参与两会:培养工匠型的一线工人",
                time: "2017-03-06",
                content: "“中国制造业的转型升级，离不开一大批工匠型的一线产业工人。”十二届全国人大代表、波司登集团董事长在接受记者采访时说。",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                title: "波司登董事长高德康参与两会:培养工匠型的一线工人",
                time: "2017-03-06",
                content: "“中国制造业的转型升级，离不开一大批工匠型的一线产业工人。”十二届全国人大代表、波司登集团董事长在接受记者采访时说。",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                title: "波司登董事长高德康参与两会:培养工匠型的一线工人",
                time: "2017-03-06",
                content: "“中国制造业的转型升级，离不开一大批工匠型的一线产业工人。”十二届全国人大代表、波司登集团董事长在接受记者采访时说。",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                title: "波司登董事长高德康参与两会:培养工匠型的一线工人",
                time: "2017-03-06",
                content: "“中国制造业的转型升级，离不开一大批工匠型的一线产业工人。”十二届全国人大代表、波司登集团董事长在接受记者采访时说。",
                id: "1"
            },
            {
                img: "img/prod_01.jpg",
                title: "波司登董事长高德康参与两会:培养工匠型的一线工人",
                time: "2017-03-06",
                content: "“中国制造业的转型升级，离不开一大批工匠型的一线产业工人。”十二届全国人大代表、波司登集团董事长在接受记者采访时说。",
                id: "1"
            }
        ]
    },
    // 新闻详情
    newsDetailComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/news-detail.component.html');
        },
        data: {
            img: "img/prod_01.jpg",
            title: "波司登董事长高德康参与两会:培养工匠型的一线工人",
            author: "杰美小编",
            from: "新闻中心",
            count: 23,
            time: "2017-03-06",
            content: "“中国制造业的转型升级，离不开一大批工匠型的一线产业工人。”十二届全国人大代表、波司登集团董事长在接受记者采访时说。",
            id: "1"
        }
    },
    // 客户列表
    customListComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/custom-list.component.html');
        },
        data: [
            {
                id: "1",
                img: "img/cus_01.png",
                title: "金利来服装有限公司",
                name: "金利来服装有限公司",
                time: "2016年11月"
            },
            {
                id: "1",
                img: "img/cus_01.png",
                title: "金利来服装有限公司",
                name: "金利来服装有限公司",
                time: "2016年11月"
            },
            {
                id: "1",
                img: "img/cus_01.png",
                title: "金利来服装有限公司",
                name: "金利来服装有限公司",
                time: "2016年11月"
            },
            {
                id: "1",
                img: "img/cus_01.png",
                title: "金利来服装有限公司",
                name: "金利来服装有限公司",
                time: "2016年11月"
            },
            {
                id: "1",
                img: "img/cus_01.png",
                title: "金利来服装有限公司",
                name: "金利来服装有限公司",
                time: "2016年11月"
            },
            {
                id: "1",
                img: "img/cus_01.png",
                title: "金利来服装有限公司",
                name: "金利来服装有限公司",
                time: "2016年11月"
            }
        ]
    },
    // 面包屑导航
    crumbsComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/crumbs.component.html');
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
    // 文章类
    articleComponent: {
        init: function (con) {
            return $(con).html(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/article.component.html');
        },
        data: {
            title: "公司简介",
            content: '<p><span class="weight-big">广州杰美服装有限公司</span>是一家集设计、面料开发，生产、销售、CT策划为一体的专业制服公司，于2004年在广州市番禺建厂，其厂房规模面积达10000平方米，厂内员工有600多人，（其中部分职员办公司地点在广州白云区）是广东制服生产龙头企业。' +
            '杰美公司生产基地凭借从德国（凤眼机、珠边机）、日本（开袋机、挑襟机，验布机，粘衬机）、意大利（缩水机，高温人体西装定型机）引进的最先进的生产设备，以及雄厚的生产实力和完善的管理体系，为国内各行各业制服生产，提供了尽善尽美的专业服务。' +
            '杰美服装有限公司是从事金融业，房地产，保险业，工矿企业，物业公司等设计开发，生产制作，销售为一体的专业制服公司，同时还致力于国家环保，航空，铁路，海关，行政机关，学校制服的研制开发。' +
            '我们把各大企业的CI，VI系统导入制服的设计中，根据各个合作伙伴的不同定位，为每一个合作伙伴供量身定做的服务，从而确保每一个客户可以身着具有本企业特色，体现企业品牌内涵及独特企业文化的制服。' +
            '</p><div class="text-center"><img class="img-responsive" src="img/about.png"></div>'
        }
    },
    // 案例列表
    caseListComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/case-list.component.html');
        },
        data: [
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            }
        ]
    },
    // 相关板块
    relevantComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/relevant.component.html');
        },
        data: {
            listHtml: ''
        }
    },
    // 相关案例列表
    relevantCaseListComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/relevant-case-list.component.html');
        },
        data: [
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            }
        ]
    },
    // 客服浮窗
    kfComponent: {
        init: function (con) {
            return $(con).append(this.getHtml());
        },
        getHtml: function () {
            return laytpl(this.getTpl()).render(this.data);
        },
        getTpl: function () {
            return $.getHtml('com/kf.component.html');
        },
        data: [
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            },
            {
                img: "img/case.png",
                name: "中国石化",
                id: "1"
            }
        ]
    }
};

$(function () {
    mCom.headerComponent.init();
    mCom.footerComponent.init();
    mCom.kfComponent.init('#main > .container');
    $('.kf-board .label').click(function () {
        var lable = $(this);
        if (lable.hasClass('active')) {
            lable.parent('.kf-board').animate({
                right: -170
            }, function () {
                lable.removeClass('active');
            })
        } else {
            lable.parent('.kf-board').animate({
                right: 0
            }, function () {
                lable.addClass('active');
            })
        }
    });
});

