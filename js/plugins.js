// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * Created by Deakin on 2017/1/4.
 */
(function () {
    $.fn.extend({
        /**
         * 同步加载html文件，并获取指定元素作为绑定对象的html
         * @param url html文件路径
         * @param filter 获取html元素时的选择器
         * @param callback 加载完成后的回调，传入一个元素
         */
        loadHtmlSync: function (url, filter, callback) {
            var container = $(this);
            $.ajax(url, {
                type: 'GET',
                dataType: 'html',
                async: false,
                success: function (html) {
                    html = $(html).find(filter);
                    container.html(html);
                    callback && callback(html);
                }
            });
        },

        /**
         * 获取图片验证码
         * @param url 获取图片验证码的接口链接
         */
        getVcode: function (url, fired) {
            var btn = $(this).click(function () {
                $(this).attr('src', url + '?v=' + (Math.random()));
            });
            fired && btn.click();
            return $(this);
        },

        /**
         * 提交表单
         * @param fn 提交表单处理函数
         * @param [{Boolean,Function}] discontinue 是否停止提交，为true或函数返回true，则停止注册，默认true;
         */
        submitForm: function (fn, discontinue) {
            return this.unbind('submit').bind('submit', function (e) {
                e.preventDefault();
                var check = discontinue;
                if (typeof discontinue === 'function') check = discontinue.call(this);
                if (!check) return;
                fn.call(this);
            });
        },

        /**
         * 获取表单数据的JSON格式
         * @return {{JSON}}
         */
        serializeJSON: function () {
            var array = $(this).serializeArray(),
                json = {};
            for (var i = 0, len = array.length; i < len; i++) {
                var item = array[i],
                    name = item['name'],
                    value = item['value'];
                json[name] = value;
            }
            return json;
        },

        /**
         * 设置禁止状态
         * @param disable 是否禁止，默认true；
         * @returns {obj} 返回原JQ对象
         */
        setDisable: function (disable) {
            return this.attr('data-disable', !(disable === false));
        },

        /**
         * 判断是否处于禁止状态
         * @returns {boolean} 如果禁止，返回true，否则返回false
         */
        isDisable: function () {
            return this.attr('data-disable') === 'true';
        },
    });

    $.extend({
        /**
         * 同步加载Script文件
         * @param url script文件路径
         * @param callback 加载完成的回调
         */
        loadScriptSync: function (url, callback) {
            $.ajax(url, {
                type: 'GET',
                dataType: 'script',
                async: false,
                success: callback
            });
        },

        /**
         * 引入外部文件，获取指定的html
         * 用法1: $.getHtml('tpl.html','#tpl',function(html){$('#container')})
         * @param url {string} 文件路径
         * @param filter {jQueryObject} 获取对象
         * @param callback {function} 成功后回调，传入获取到的html，如果此参数有传，则是异步调用
         * @return {string} 如果callback没有传,则获取到的html,即同步调用
         */
        getHtml: function (url, filter, callback) {
            if (typeof filter === "function") {
                callback = filter;
                filter = null;
            }

            var async = !!(typeof callback == 'function');

            var result = '';
            $.ajax(url, {
                type: 'GET',
                dataType: 'html',
                async: async,
                success: function (html) {
                    result = filter ? $(html).find(filter).html() : html;
                    callback && callback(result);
                }
            });
            if (!async) return result;
        },

        /**
         * 判断一个文本数组是否包含某个成员
         * @param str 被包含的成员
         * @param array 文本数组
         * @param pattern 匹配规则； ^：以…开头；*：包含；$：以…结尾；其它:完全匹配
         * @returns {boolean} 如果包含，返回true，否则返回false
         */
        arrHasStr: function (str, array, pattern) {
            switch (pattern) {
                case '^':
                    var getPattern = function (str) {
                        return '^(' + str + ')';
                    };
                    break;
                case '*':
                    getPattern = function (str) {
                        return '(' + str + ')';
                    };
                    break;
                case '$':
                    getPattern = function (str) {
                        return '(' + str + ')$';
                    };
                    break;
                default:
                    getPattern = function (str) {
                        return '^(' + str + ')$';
                    };
            }
            var reg = new RegExp();
            for (var i = 0; i < array.length; i++) {
                reg.compile(getPattern(array[i]));
                if (reg.test(str)) return true;
            }
            return false;
        },

        /**
         * 获取url参数部分全部内容
         * @param {String}  被取参数的url,可选，默认为location.href;
         * @returns {JSON} 返回"?"之后的数据
         */
        getURLParams: function (url) {
            if (!url) url = location.href;
            var param = url.replace(/(.*\?)|(#.*)/g, ''),
                paramArray = param ? param.split('&') : [],
                keyValue = "",
                json = "";
            for (var i = 0; i < paramArray.length; i++) {
                var keyValueArray = paramArray[i].split('='),
                    newText = '"' + keyValueArray[0] + '"' + ":" + '"' + keyValueArray[1] + '"';
                keyValue = keyValue == "" ? newText : keyValue + "," + newText;
            }
            if (keyValue != "" && keyValue != ":")
                json == "" ? json = keyValue : json = json + "," + keyValue;
            json = "{" + json + "}";
            return JSON.parse(json);
        },

        /**
         * 转化成链接参数
         * 参数可以是：key,value,key1,value1,key2,value2
         * 也可以是：[{'key':'a','value':'apple'},{'key':'b','value':'blue'}]
         * @return {string} 如：key=value&key1=value1&key2=value2
         */
        parseURLString: function () {
            var len = arguments.length / 2,
                str = '';
            if (Math.round(len) === len) {
                for (var i = 0; i < len; i++) {
                    var key = arguments[i * 2],
                        value = arguments[i * 2 + 1];
                    str += (str ? '&' : '') + key + '=' + value;
                }
            } else if (arguments[0] instanceof Array) {
                var params = arguments[0];
                len = params.length;
                for (var i = 0; i < len; i++) {
                    var item = params[i],
                        key = item['key'],
                        value = item['value'];
                    str += (str ? '&' : '') + key + '=' + value;
                }
            }
            return str
        },

        /**
         * 对Date的扩展，将 Date 转化为指定格式的String
         * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
         * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
         * 例子：
         * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
         * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
         */
        dateFormat: function (date, fmt) {
            if (typeof date === "string") {
                date = date.replace(/-/g, '/').replace(/(^\s*)|(\s*$)/g, '');
                date = new Date(date);
            }

            if (!(date instanceof Date)) {
                console.error('不是一个日期时间');
                return '';
            }

            var o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        },

        /**
         * 生成一个ID
         * @returns {string} 生成的ID
         */
        getUUID: function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        },

        /**
         * 接口调用
         * @param options
         */
        apiCall: function (options) {
            var defaults = {
                    api: '', //接口
                    data: '', //数据
                    type: 'POST', //请求方式
                    dataType: 'json', //请求数据类型
                    fullData: false, //调用成功传入数据时，是否传入原始数据
                    alertError: true, //调用失败时，是否弹出错误信息
                    onlySuccess: false, //调用成功后，是否无论返回成功，都调用success回调函数
                    success: null, //调用成功，接口返回成功时回调
                    failure: null, //调用成功，接口的返回失败时回调
                    complete: null, //调用完成后都回调
                    error: null, //请求出错时回调
                    async: true, //是否同步
                    loading: true, //是否开启加载层
                    lock: '', //开始请求时锁住，请求完成后解锁，用于防止重复请求
                }, setting = $.extend({}, defaults, options),
                api = setting['api'],
                data = setting['data'],
                type = setting['type'],
                dataType = setting['dataType'],
                fullData = setting['fullData'],
                alertError = setting['alertError'],
                onlySuccess = setting['onlySuccess'],
                success = setting['success'],
                failure = setting['failure'],
                complete = setting['complete'],
                error = setting['error'],
                async = setting['async'],
                loading = setting['loading'],
                lockTarget = $(setting['lock']).length ? $(setting['lock']) : '';
            //防止重复请求
            if (lockTarget && lockTarget.isDisable()) return;

            if (loading) var idx = layer.load(2);
            var ajaxSuccess = function (data) {
                    //这里根据实际数据来调整
                    //现在返回的数据格式是：
                    // data = {
                    //     success: true, // 接口返回的成功或失败，如果失败，就回调failure，成功就回调success
                    //     msg: '', // 接口返回的信息，成功，失败，异常之类的
                    //     root: [] // 数据在这里，不一定要数组，看自己的情况
                    // };
                    if (!onlySuccess && !data['success']) {
                        //接口返回失败
                        alertError && layer.msg(data['msg']);
                        failure && failure(data);
                        return;
                    }

                    //接口返回成功 把数据传递过去
                    success && success(fullData ? data : data['root']);
                },
                ajaxFailure = function (XMLHttpRequest, textStatus, errorThrown) {
                    console.error("Api Error: " + api);
                    console.error("Error Info: " + (textStatus || errorThrown));
                    error && error();
                },
                ajaxComplete = function () {
                    loading && layer.close(idx); //关闭加载窗
                    complete && complete();
                };

            $.ajax(api, {
                async: async,
                data: data,
                dataType: dataType,
                type: type,
                success: ajaxSuccess,
                error: ajaxFailure,
                complete: ajaxComplete
            });
        },

        /*
         * JSON
         */

        /**
         * 将驼峰命名法的字符串，转换成下划线命名法的字符串
         * @param str 驼峰命名法的字符串
         * @returns {void|string|XML}
         */
        underscoresString: function (str) {
            var re = /([A-Z])/g;
            return str.replace(re, function ($0, $1) {
                return '_' + $1.toLowerCase();
            });
        },

        /**
         * 将下划线命名法的字符串，转换成驼峰命名法的字符串
         * @param str 下划线命名法的字符串
         * @param lower 首字母是否小写，默认true，即默认为小驼峰
         * @returns {void|string|XML}
         */
        camelCaseString: function (str, lower) {
            if (typeof str !== "string") return str;
            var rs = str.replace(/_(\w)/g, function ($0, $1) {
                return $1.toUpperCase()
            });
            if (lower === false) {
                rs = rs.replace(/^(\w)/, function ($0, $1) {
                    return $1.toUpperCase()
                });
            }
            return rs
        },

        /**
         * 将JSON的key转换成下滑线式
         * @param json
         * @param depth 是否深度替换，默认true，如果true，则会搜索所有是JSON的key值并操作，否则只会搜索第一层的key来操作
         * @returns {*}
         */
        underscoresJson: function (json, depth) {
            if (!$.isJson(json)) return json;
            depth = !(depth === false);
            var newJson = $.isArray(json) ? [] : {};
            for (var key in json) {
                var val = json[key],
                    newKey = $.underscoresString(key);
                newJson[newKey] = depth ? arguments.callee(val) : val;
            }
            return newJson;
        },

        /**
         * 将JSON的key转换成驼峰式
         * @param json
         * @param depth 是否深度替换，默认true，如果true，则会搜索所有是JSON的key值并操作，否则只会搜索第一层的key来操作
         * @returns {*}
         */
        camelCaseJson: function (json, depth) {
            if (!$.isJson(json)) return json;
            depth = !(depth === false);
            var newJson = $.isArray(json) ? [] : {};
            for (var key in json) {
                var val = json[key],
                    newKey = $.camelCaseString(key);
                newJson[newKey] = depth ? arguments.callee(val) : val;
            }
            return newJson;
        },

        /**
         * 替换一个JSON的key为指定的key
         * @param json 被替换的JSON
         * @param regexp 被替换的key 和String.replace()的第一参数一样
         * @param replacement 替换成目标key 和String.replace()的第二参数一样
         * @param depth 是否深度替换，默认true，如果true，则会搜索所有是JSON的key值并操作，否则只会搜索第一层的key来操作
         * @returns {*}
         */
        replaceJsonKey: function (json, regexp, replacement, depth) {
            if (!$.isJson(json)) return json;
            depth = !(depth === false);
            for (var key in json) {
                var newKey = key.replace(regexp, replacement);
                json[newKey] = depth ? arguments.callee(json[key]) : json[key];
                if (newKey != key) delete json[key];
            }
            return json;
        },

        /**
         * 判断一个对象是不是JSON对象
         * @param obj 被判断的对象
         * @param arrayAlso {boolean} 是否将数组也认为是JSON,默认true
         * @returns {boolean}
         */
        isJson: function (obj, arrayAlso) {
            if ($.isArray(obj) && !(arrayAlso === false)) return true;
            var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
            return isjson;
        },

        /**
         * 判断一个字符串是不是JSON字条串
         * @param string 被判断的字符串
         */
        isJsonString: function (string) {
            try {
                JSON.parse(string);
                return true;
            } catch (err) {
                return false;
            }
        },

        /**
         * 判断一个对象是否是数组类型
         * @param obj
         * @returns {boolean}
         */
        isArray: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]'
        },


        //判断客户端的类型
        userAgent: function (options) {
            var defaults = {
                    pc: null,
                    mobile: null,
                    ipad: null,
                    iphone: null,
                    android: null,
                    other: null
                }, settings = $.extend({}, defaults, options),
                pc = settings.pc,
                mobile = settings.mobile,
                ipad = settings.ipad,
                iphone = settings.iphone,
                android = settings.android,
                other = settings.other;

            var ua = navigator.userAgent;
            var isIpad = ua.match(/(iPad).*OS\s([\d_]+)/),
                isIphone = !isIpad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                isAndroid = ua.match(/(Android)\s+([\d.]+)/),
                isMobile = isIphone || isAndroid;

            if (isMobile) {
                mobile && mobile();
            } else {
                pc && pc();
            }

            //或者单独判断iphone或android
            if (isIphone) {
                iphone && iphone();
            } else if (isIpad) {
                ipad && ipad();
            } else {
                if (isAndroid) {
                    android && android();
                } else {
                    other && other();
                }
            }
        },

        /**
         * 字符串截取省略
         * @param str 要截取的字符串
         * @param length 最大长度
         * @param ellipsis 省略号，默认"..."
         * @returns {string}
         */
        ellipsisStr: function (str, length, ellipsis) {
            if (typeof str !== "string") {
                return "";
            }

            if (typeof length !== "number" || length < 0) {
                return "";
            }

            if (typeof ellipsis !== "string") {
                ellipsis = "...";
            }

            if (str.length <= length) {
                return str;
            } else {
                return str.slice(0, length) + ellipsis
            }
        },

        /**
         * 富文本转换成纯文本
         * @param html 富文本
         * @returns {*|XMLList|jQuery}
         */
        htmlToText: function (html) {
            return $('<div></div>').append(html).text();
        }
    });
})(jQuery);
