/* Made by Penguin */
window.pg = {
    $: (a) => {
        return document.querySelectorAll(a);
    }
};
window.cE = (data) => {
    let e = document.createElement(data.type);
    if (typeof data.attr !== "undefined")
        for (let i = 0; i < data.attr.length; i++)
            e.setAttribute(data.attr[i][0], data.attr[i][1]);
    if (typeof data.innerText !== "undefined")
        e.innerText = typeof (data.innerText) === "object" ? data.innerText[cL] : data.innerText;
    if (typeof data.innerHTML !== "undefined")
        e.innerHTML = typeof (data.innerHTML) === "object" ? data.innerHTML[cL] : data.innerHTML;
    return e;
};
window.Int = parseInt;
Node.prototype.append = Node.prototype.appendChild;
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}
window.importScripts = (url, callback) => {
    let script = cE({type: "script", attr: [["src", url]]});
    document.body.append(script);
    callback !== undefined ? script.onload = script.onreadystatechange = () => {
        callback();
    } : void (0);
};

window.getPara = (para, url) => {
    url = url || window.location.href;
    let result = null,
        tmp = [];
    url.substr(url.indexOf("?"))
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === para) result = decodeURIComponent(tmp[1]);
        });
    return result;
};

window.loadThread = (tid) => {
    console.log("W:\tRedirect to http://www.ditiezu.com/forum.php?mod=viewthread&tid=" + tid);
    window.location.href = "http://www.ditiezu.com/forum.php?mod=viewthread&tid=" + tid;
};

window.loadURL = (url) => {
    console.log("W:\tRedirect to " + url);
    window.location.href = url;
};

window.forumDisplay = () => {
    window.blog = [{name: "北京区", fid: 7, iconid: "BJ", enName: "Beijing"}, {
        name: "天津区",
        fid: 6,
        iconid: "TJ",
        enName: "Tianjin"
    }, {name: "上海区", fid: 8, iconid: "SH", enName: "Shanghai"}, {
        name: "广州区",
        fid: 23,
        iconid: "GZ",
        enName: "Guangzhou"
    }, {name: "长春区", fid: 40, iconid: "CCH", enName: "Changchun"}, {
        name: "大连区",
        fid: 41,
        iconid: "DL",
        enName: "Dalian"
    }, {name: "武汉区", fid: 39, iconid: "WH", enName: "Wuhan"}, {
        name: "重庆区",
        fid: 38,
        iconid: "CQ",
        enName: "Chongqing"
    }, {name: "深圳区", fid: 24, iconid: "SZ", enName: "Shenzhen"}, {
        name: "南京区",
        fid: 22,
        iconid: "NJ",
        enName: "Nanjing"
    }, {name: "成都区", fid: 53, iconid: "CD", enName: "Chengdu"}, {
        name: "沈阳区",
        fid: 50,
        iconid: "SY",
        enName: "Shenyang"
    }, {name: "佛山区", fid: 56, iconid: "FS", enName: "Foshan"}, {
        name: "西安区",
        fid: 54,
        iconid: "XA",
        enName: "Xi'an"
    }, {name: "苏州区", fid: 51, iconid: "SUZ", enName: "Suzhou"}, {
        name: "昆明区",
        fid: 70,
        iconid: "KM",
        enName: "Kunming"
    }, {name: "杭州区", fid: 52, iconid: "HZ", enName: "Hangzhou"}, {
        name: "哈尔滨区",
        fid: 55,
        iconid: "HAB",
        enName: "Harbin"
    }, {name: "郑州区", fid: 64, iconid: "ZZ", enName: "Zhengzhou"}, {
        name: "长沙区",
        fid: 67,
        iconid: "CS",
        enName: "Changsha"
    }, {name: "宁波区", fid: 65, iconid: "NB", enName: "Ningbo"}, {
        name: "无锡区",
        fid: 68,
        iconid: "WX",
        enName: "Wuxi"
    }, {name: "青岛区", fid: 66, iconid: "QD", enName: "Qingdao"}, {
        name: "南昌区",
        fid: 71,
        iconid: "NC",
        enName: "Nanchang"
    }, {name: "福州区", fid: 72, iconid: "FZ", enName: "Fuzhou"}, {
        name: "东莞区",
        fid: 75,
        iconid: "DG",
        enName: "Dongguan"
    }, {name: "南宁区", fid: 73, iconid: "NN", enName: "Nanning"}, {
        name: "合肥区",
        fid: 74,
        iconid: "HF",
        enName: "Hefei"
    }, {name: "石家庄区", fid: 140, iconid: "SJZ", enName: "Shijiazhuang"}, {
        name: "贵阳区",
        fid: 76,
        iconid: "GY",
        enName: "Guiyang"
    }, {name: "厦门区", fid: 77, iconid: "XM", enName: "Xiamen"}, {
        name: "乌鲁木齐区",
        fid: 143,
        iconid: "UM",
        enName: "Urumqi"
    }, {name: "温州区", fid: 142, iconid: "WZ", enName: "Wenzhou"}, {
        name: "济南区",
        fid: 148,
        iconid: "JN",
        enName: "Jinan"
    }, {name: "兰州区", fid: 78, iconid: "LZ", enName: "Lanzhou"}, {
        name: "常州区",
        fid: 48,
        iconid: "CZ",
        enName: "Changzhou"
    }, {name: "徐州区", fid: 144, iconid: "XZ", enName: "Xuzhou"}, {
        name: "呼和浩特区",
        fid: 151,
        iconid: "HH",
        enName: "Huhhot"
    }, {name: "香港区", fid: 28, iconid: "HK", enName: "Hongkong"}, {
        name: "澳门区",
        fid: 79,
        iconid: "MO",
        enName: "Macau"
    }, {name: "台湾区", fid: 36, iconid: "TW", enName: "Taiwan"}, {
        name: "海外区",
        fid: 47,
        iconid: "HW",
        enName: "Oversea"
    }, {name: "综合区", fid: 37, iconid: "ZOH", enName: "Comprehensive"}, {
        name: "轨道收藏",
        fid: 33,
        iconid: "COL",
        enName: "Collections"
    }, {name: "都市风情", fid: 16, iconid: "SCN", enName: "City Style"}, {
        name: "地铁美食",
        fid: 15,
        iconid: "FOOD",
        enName: "Food"
    }, {name: "轨交游戏", fid: 145, iconid: "GAME", enName: "Games"}, {
        name: "站前广场",
        fid: 21,
        iconid: "CHAT",
        enName: "H2O Plaza"
    }, {name: "站务公告", fid: 17, iconid: "MA", enName: "Announcement"}];
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    app.append(cE({type: "div", attr: [["class", "pg-backgroundImage"]]}));
    app.append(cE({type: "div", attr: [["class", "pg-backgroundFilter"]]}));
    let fid = Int(getPara("fid", pg.$("link[rel='alternate']")[0].href));
    {
        let curFid = blog.map(i => i.fid);
        let curIndex = curFid.indexOf(fid);
        let appbar = cE({type: "div", attr: [["id", "pg-app-titleBar"]]});
        let appName = cE({type: "div", attr: [["class", "pg-titleName"]]});
        appName.append(cE({
            type: "img",
            attr: [["class", "city-icon-GZ"], ["src", "http://127.0.0.1/assets/media/images/city-icon/compressed/" + blog[curIndex].iconid + ".svg"]]
        }));
        appName.append(cE({
            type: "div",
            innerHTML: "<span class='cn'>" + blog[curIndex].name + "</span><span class='en'>" + blog[curIndex].enName + "</span>",
            attr: [["class", "fidName"]]
        }));
        appbar.append(appName);
        app.append(appbar);
        let topName = cE({
            type: "div",
            innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com\")' class='mi theme-color ic-back'>chevron_left</span><span>" + blog[curIndex].name + "</span>",
            attr: [["id", "topName"]]
        });
        app.append(topName);
        app.onscroll = () => {
            if (app.scrollTop > 100)
                topName.classList.add("scrolled");
            else
                topName.classList.remove("scrolled")
        };
    }
    {
        let resultThread = cE({type: "div", attr: [["class", "pg-threadBox"]]});
        let resultStickThread = cE({type: "div", attr: [["class", "pg-stickThreadBox"]]});
        let stickthread = [...pg.$("#moderate>table>[id^='stickthread']")].map(i => [i.children[0].children, i.id]);
        stickthread.forEach(e => {
            let a = cE({type: "div", attr: [["class", "pg-stickThread"]]});
            a.append(cE({
                type: "div",
                attr: [["class", "threadListName"], ["onclick", "loadThread('" + e[1].substr(12) + "')"]],
                innerHTML: e[0][1].children[e[0][1].children[0].tagName === ("EM") ? 1 : 0].innerText
            }));
            resultStickThread.append(a);
        });
        resultThread.append(resultStickThread);
        let resultNomalThread = cE({
            type: "div",
            attr: [["class", "pg-normalThreadBox"]]
        });
        let normalThread = [...pg.$("#moderate>table>[id^='normalthread']")].map(i => [i.children[0].children, i.id]);
        normalThread.forEach(e => {
            let a = cE({type: "div", attr: [["class", "pg-normalThread"]]});
            a.append(cE({
                type: "div",
                attr: [["class", "threadListName"], ["onclick", "loadThread('" + e[1].substr(13) + "')"]],
                innerHTML: e[0][1].children[e[0][1].children[0].tagName === ("EM") ? 1 : 0].innerText
            }));
            resultNomalThread.append(a);
        });
        resultThread.append(resultNomalThread);
        app.append(resultThread);
    }
    {
        let loadThreadList = (page) => {
            loadURL("http://www.ditiezu.com/forum.php?mod=forumdisplay&fid=" + fid + "&page=" + page);
        };
        let pgsBox = cE({type: "div", attr: [["id", "pg-pgs"]]});
        let curPage = Int([...pg.$("#pgt .pg>*")].filter(i => i.tagName === "STRONG")[0].innerText);
        let lastPage = [...pg.$("#pgt .pg>*")].filter(i => !i.classList.contains("nxt")).last().innerText;
        lastPage = Int(lastPage.includes("...") ? lastPage.substr(4) : lastPage);
        if (curPage !== 1) {
            let firstPage = cE({type: "span", innerText: "first_page", attr: [["class", "mi nextPage"]]});
            firstPage.onclick = () => {
                loadThreadList(1);
            };
            pgsBox.append(firstPage);
            let prevPage = cE({type: "span", innerText: "chevron_left", attr: [["class", "mi prevPage"]]});
            prevPage.onclick = () => {
                loadThreadList(curPage - 1);
            };
            pgsBox.append(prevPage);
        }
        if (curPage - 1 >= 1) {
            let page = cE({type: "span", innerText: (curPage - 1), attr: [["class", "mi page"]]});
            page.onclick = () => {
                loadThreadList(curPage - 1);
            };
            pgsBox.append(page);
        }
        pgsBox.append(cE({type: "span", innerText: curPage}));
        if (curPage + 1 <= lastPage) {
            let page = cE({type: "span", innerText: (curPage + 1), attr: [["class", "mi page"]]});
            page.onclick = () => {
                loadThreadList(curPage + 1);
            };
            pgsBox.append(page);
        }
        if (curPage !== lastPage) {
            let nextPage = cE({type: "span", innerText: "chevron_right", attr: [["class", "mi nextPage"]]});
            nextPage.onclick = () => {
                loadThreadList(curPage + 1);
            };
            pgsBox.append(nextPage);
            let lPCont = cE({type: "span", innerText: "last_page", attr: [["class", "mi nextPage"]]});
            lPCont.onclick = () => {
                loadThreadList(lastPage);
            };
            pgsBox.append(lPCont);
        }
        app.append(pgsBox)
    }
    document.body.append(app);
};

window.threadDisplay = () => {
    let curPage = Int([...pg.$("#pgt .pg>*")].filter(i => i.tagName === "STRONG")[0].innerText);
    let lastPage = [...pg.$("#pgt .pg>*")].filter(i => !i.classList.contains("nxt")).last().innerText;
    lastPage = Int(lastPage.includes("...") ? lastPage.substr(4) : lastPage);
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let threadSubject = pg.$("#thread_subject")[0].innerText;
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com\")' class='mi theme-color ic-back'>chevron_left</span><span>" + threadSubject + "</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let threadPost = [];
    threadPost = [...pg.$("div[id^='post_']>table[id^='pid']")].map((i, index) => [i.children[0].children, index]);
    let threadWrap = cE({type: "div", attr: [["class", "pg-threadWrap"]]});
    threadPost.forEach(e => {
        let c = e[0];
        let id = e[1];
        let thread = cE({type: "div", attr: [["class", "pg-threadPost"]]});
        let authorName = pg.$(".authi .xw1")[id].innerText;
        let avatarLevel = [...[...c][0].children[0].children].filter(i => i.tagName === "DIV").filter(i => i.classList.value === "")[0].children;
        let avatar = cE({
            type: "img",
            attr: [["src", avatarLevel[0].children[0].children[0].src], ["class", "pg-threadAuthorAvatar"]]
        });
        let author = cE({type: "p", innerText: authorName, attr: [["class", "pg-threadAuthorName"]]});
        let authorLevel = cE({
            type: "p",
            innerText: avatarLevel[1].innerText,
            attr: [["class", "pg-threadAuthorLevel"]]
        });
        let authorInfo = cE({type: "div", attr: [["class", "pg-threadAuthorInfo"]]});
        authorInfo.append(avatar);
        let ThreadPostInfo = cE({type: "p", attr: [["class", "pg-threadPostMeta"]]});
        let UsrInfoBox = cE({type: "p", attr: [["class", "pg-threadAuthorInfo"]]});
        UsrInfoBox.append(author);
        UsrInfoBox.append(authorLevel);
        let postInfo = cE({type: "p", attr: [["class", "pg-threadPostInfo"]]});
        thread.append(authorInfo);
        let threadContent = [...
            c][0].children[1].children;
        let threadFloor = (curPage - 1) * 15 + id + 1;
        let threadPostTime = threadContent[0].innerText.split("发表于 ")[1].split("|")[0];
        postInfo.append(cE({type: "span", innerText: "第" + threadFloor + "楼"}));
        postInfo.append(cE({type: "span", innerText: "发表于" + threadPostTime}));
        ThreadPostInfo.append(UsrInfoBox);
        ThreadPostInfo.append(postInfo);
        thread.append(ThreadPostInfo);
        let pid = [...pg.$("#ct.wp>#postlist>div[id^='post_']")][id].id;
        thread.append(cE({
            type: "div",
            attr: [["class", "postThreadContent"]],
            innerHTML: threadContent[1].innerHTML.replace(/src="*".+zoomfile="/ig, "src=\"")
        }));
        let threadUtil = cE({
            type: "div",
            attr: [["class", "threadUtil"]]
        });
        let replyBTN = cE({
            type: "span",
            attr: [["class", "replyToThis"], ["rid", pid.substr(5)]],
            innerText: "回复"
        });
        replyBTN.onclick = () => {
            loadURL(id !== "0" ? ("http://www.ditiezu.com/forum.php?mod=post&action=reply&tid=" + tid + "&repquote=" + replyBTN.getAttribute("rid")) : "http://www.ditiezu.com/forum.php?mod=post&action=reply&tid=" + tid)
        };
        threadUtil.append(replyBTN);
        if (document.body.innerHTML.includes("评分")) {
            let rateBTN = cE({
                type: "span",
                attr: [["class", "makeRate"], ["rid", pid.substr(5)]],
                innerText: "评分"
            });
            rateBTN.onclick = () => {
                showWindow('rate', 'forum.php?mod=misc&action=rate&tid=' + tid + '&pid=' + rateBTN.getAttribute("rid") + '', 'get', -1);
                return false;
            };
            threadUtil.append(rateBTN);
        }
        thread.append(threadUtil);
        threadWrap.append(thread);
    });
    app.append(threadWrap);
    {
        let loadPostList = (page) => {
            loadURL("http://www.ditiezu.com/forum.php?mod=viewthread&tid=" + tid + "&page=" + page);
        };
        let pgsBox = cE({type: "div", attr: [["id", "pg-pgs"]]});
        if (curPage !== 1) {
            let firstPage = cE({type: "span", innerText: "first_page", attr: [["class", "mi nextPage"]]});
            firstPage.onclick = () => {
                loadPostList(1);
            };
            pgsBox.append(firstPage);
            let prevPage = cE({type: "span", innerText: "chevron_left", attr: [["class", "mi prevPage"]]});
            prevPage.onclick = () => {
                loadPostList(curPage - 1);
            };
            pgsBox.append(prevPage);
        }
        if (curPage - 1 >= 1) {
            let page = cE({type: "span", innerText: (curPage - 1), attr: [["class", "mi page"]]});
            page.onclick = () => {
                loadPostList(curPage - 1);
            };
            pgsBox.append(page);
        }
        pgsBox.append(cE({type: "span", innerText: curPage}));
        if (curPage + 1 <= lastPage) {
            let page = cE({type: "span", innerText: (curPage + 1), attr: [["class", "mi page"]]});
            page.onclick = () => {
                loadPostList(curPage + 1);
            };
            pgsBox.append(page);
        }
        if (curPage !== lastPage) {
            let nextPage = cE({type: "span", innerText: "chevron_right", attr: [["class", "mi nextPage"]]});
            nextPage.onclick = () => {
                loadPostList(curPage + 1);
            };
            pgsBox.append(nextPage);
            let lPCont = cE({type: "span", innerText: "last_page", attr: [["class", "mi nextPage"]]});
            lPCont.onclick = () => {
                loadPostList(lastPage);
            };
            pgsBox.append(lPCont);
        }
        app.append(pgsBox)
    }
    document.body.append(app);
};

window.loginDisplay = () => {
    pg.$("#main_hnav a.xi2")[0].click();
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com\")' class='mi theme-color ic-back'>chevron_left</span><span>登录地铁族</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    app.append(topName);
    document.body.append(app);
};

window.postDisplay = () => {

};