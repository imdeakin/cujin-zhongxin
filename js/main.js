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
    }
};

$(function () {
    mCom.headerComponent.init();
    mCom.footerComponent.init();
});

