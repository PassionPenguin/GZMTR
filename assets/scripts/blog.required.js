/* Made by Penguin */

window.pg = {
    $: (a) => {
        return document.querySelectorAll(a);
    },
    prompt: (title, placeholder, callback, inf) => {
        let promptWrap = cE({type: "div", attr: [["id", "pg-prompt-wrap"]]});
        let promptInfo = cE({type: "span", attr: [["class", "pg-prompt-info"]], innerText: title});
        let promptInput = cE({
            type: "div",
            attr: [["contenteditable", "true"], ["class", "pg-prompt-input"]],
            innerText: placeholder
        });
        let promptTips = cE({type: "div", attr: [["class", "pg-prompt-promptInfo"]], innerText: inf});
        let ctrlGroup = cE({type: "div", attr: [["class", "pg-prompt-ctrl"]]});
        let submitPrompt = cE({
            type: "span",
            attr: [["class", "pg-prompt-ctrl"]],
            innerHTML: "<span class='mi'>check</span><span>确认信息</span>"
        });
        submitPrompt.onclick = () => {
            promptWrap.classList.remove("active");
            setTimeout(() => {
                document.body.removeChild(promptWrap)
            }, 500);
            callback(promptInput.innerHTML);
        };
        let closePrompt = cE({
            type: "span",
            attr: [["class", "pg-prompt-ctrl"]],
            innerHTML: "<span class='mi'>close</span><span>关闭窗口</span>"
        });
        closePrompt.onclick = () => {
            promptWrap.classList.remove("active");
            setTimeout(() => {
                document.body.removeChild(promptWrap)
            }, 500);
            callback(false);
        };
        ctrlGroup.append(submitPrompt);
        ctrlGroup.append(closePrompt);
        promptWrap.append(promptInfo);
        promptWrap.append(promptInput);
        promptWrap.append(promptTips);
        promptWrap.append(ctrlGroup);
        document.body.append(promptWrap);
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
window.pgFocus = (a) => {
    return a.getAttribute("pg-active");
};
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
window.g = (e) => {
    let startPosition = e.selectionStart;
    let endPosition = e.selectionEnd;
    // Check if you've selected text
    if ((!startPosition) || (!endPosition))
        return 0;
    else if (startPosition === endPosition)
        return startPosition;
    else
        return [startPosition, endPosition];
};
window.styled = (bracketId, attr, dbl, content) => {
    let cur = g(editBox);
    let beginBracket = "[" + bracketId + (attr !== "" && attr !== undefined && attr ? ("=" + attr + "]") : "]");
    let endBracket = "[/" + bracketId + "]";
    dbl = dbl !== undefined ? dbl : true;
    if (typeof cur === "number") {
        editBox.value = editBox.value.substring(0, cur) + beginBracket + (content ? content : "") + (dbl ? endBracket : "") + editBox.value.substring(cur, editBox.value.length);
        editBox.setSelectionRange(cur + beginBracket.length - 1, cur + beginBracket.length - 1);
    } else {
        editBox.value = editBox.value.substring(0, cur[0]) + beginBracket + editBox.value.substring(cur[0], cur[1]) + (content ? content : "") + (dbl ? endBracket : "") + editBox.value.substring(cur[1], editBox.value.length);
        editBox.setSelectionRange(cur[0] + beginBracket.length - 1, cur[0] + beginBracket.length - 1);
    }
};

window.blog = [
    {name: "北京区", fid: 7, iconid: "BJ", enName: "Beijing"}, {
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
    }, {name: "城际高铁", fid: 46, iconid: "Railway", "enName": "Railway"}, {
        name: "站务公告",
        fid: 17,
        iconid: "MA",
        enName: "Announcement"
    }];

window.forumDisplay = () => {
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
            attr: [["class", "city-icon-GZ"], ["src", "https://passionpenguin.github.io/GZMTR/assets/media/images/city-icon/compressed/" + blog[curIndex].iconid + ".svg"]]
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
            let str = "";
            let src = e[0][0].children[0].children[0].src;
            let time = new Date();
            if (src.includes("hot"))
                str += " hot ";
            else if (src.includes("pollsmall"))
                str += " vote ";
            a.append(cE({
                type: "div",
                attr: [["class", "threadListName" + str], ["onclick", "loadThread('" + e[1].substr(13) + "')"]],
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
    app.append(cE({
        type: "p",
        attr: [["style", "text-align:center;margin:10px 0;"], ["id", "pg-copyInfo"]],
        innerText: "designed and coded by @PassionPenguin"
    }));
    document.body.append(cE({
        type: "div",
        attr: [["id", "newPostToggle"], ["onclick", "loadURL(\"http://www.ditiezu.com/forum.php?mod=post&action=newthread&fid=" + fid + "\")"]],
        innerText: "add"
    }));
    document.body.append(app);
};

window.threadDisplay = () => {
    if (pg.$("#pgt .pg>*").length !== 0) {
        window.curPage = Int([...pg.$("#pgt .pg>*")].filter(i => i.tagName === "STRONG")[0].innerText);
        window.lastPage = [...pg.$("#pgt .pg>*")].filter(i => !i.classList.contains("nxt")).last().innerText;
        lastPage = Int(lastPage.includes("...") ? lastPage.substr(4) : lastPage);
    } else {
        window.curPage = 1;
        window.lastPage = 1
    }
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
        let ThreadPostInfo = cE({type: "p", attr: [["class", "pg-threadPostMeta"]]});
        let postInfo = cE({type: "p", attr: [["class", "pg-threadPostInfo"]]});
        try {
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
            let UsrInfoBox = cE({type: "p", attr: [["class", "pg-threadAuthorInfo"]]});
            UsrInfoBox.append(author);
            UsrInfoBox.append(authorLevel);
            thread.append(authorInfo);
            ThreadPostInfo.append(UsrInfoBox);
        } catch (e) {

        }
        let threadContent = [...
            c][0].children[1].children;
        let threadFloor = (curPage - 1) * 15 + id + 1;
        let threadPostTime = threadContent[0].innerText.split("发表于 ")[1].split("|")[0];
        postInfo.append(cE({type: "span", innerText: "第" + threadFloor + "楼"}));
        postInfo.append(cE({type: "span", innerText: "发表于" + threadPostTime}));
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
    try {
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
    } catch (e) {
        console.log("A/E:\tOnly One Page");
    }
    document.body.append(app);
    app.append(cE({
        type: "p",
        attr: [["style", "text-align:center;margin:10px 0;"], ["id", "pg-copyInfo"]],
        innerText: "designed and coded by @PassionPenguin"
    }));
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
    app.append(cE({
        type: "p",
        attr: [["style", "text-align:center;margin:10px 0;"], ["id", "pg-copyInfo"]],
        innerText: "designed and coded by @PassionPenguin"
    }));
};

window.indexDisplay = () => {
    let list = [...pg.$("#portal_block_55_content ul li")].map((i, index) => [index, i.children[0].innerText, i.children[1], i.children[2]]);
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    app.append(cE({type: "p", innerText: "热门板块", attr: [["class", "pg-hotForumDescription"]]}));
    {
        let hotForum = cE({type: "div", attr: [["id", "pg-hotForum"]]});
        let recList = [23, 7, 21, 46, 39, 16];
        recList.forEach((e) => {
            let forumBox = cE({type: "div", attr: [["class", "hotForum"]]});
            forumBox.append(cE({
                type: "img",
                attr: [["src", "https://passionpenguin.github.io/GZMTR/assets/media/images/city-icon/compressed/" + blog[blog.map(i => i.fid).indexOf(e)].iconid + ".svg"], ["onclick", "loadURL(\"" + "http://www.ditiezu.com/forum.php?mod=forumdisplay&fid=" + e + "\")"]]
            }));
            forumBox.append(cE({type: "p", innerText: blog[blog.map(i => i.fid).indexOf(e)].name}));
            hotForum.append(forumBox);
        });
        app.append(hotForum);
    }//topped fid

    app.append(cE({type: "p", innerText: "今日聚焦", attr: [["class", "pg-hotThreadDescription"]]}));
    {
        let recommendPosts = cE({type: "div", attr: [["id", "pg-recommendPosts"]]});
        list.forEach(e => {
            let listBox = cE({
                type: "div",
                attr: [["class", "pg-recommendPost"], ["onclick", "loadURL(\"" + e[2].href + "\")"]]
            });
            let metaInfo = cE({type: "div", attr: [["class", "pg-recommendPostMeta"]]});
            metaInfo.append(cE({type: "p", attr: [["class", "pg-recommendPostName"]], innerText: e[3].innerText}));
            metaInfo.append(cE({
                type: "p",
                attr: [["class", "pg-recommendPostInfo"]],
                innerHTML: "<span class='pg-fidBadge'>" + e[2].innerText + "</span>" + "<span class='pg-threadAuthorName'>" + e[0] + "</span>"
            }));
            listBox.append(metaInfo);
            recommendPosts.append(listBox);
        });
        app.append(recommendPosts);
    }//recommend slideshow

    app.append(cE({type: "p", innerText: "主要板块", attr: [["class", "pg-mainForumDescription"]]}));
    {
        let ForumList = cE({type: "div", attr: [["id", "pg-hotForum"]]});
        blog.forEach(e => {
            let Forum = cE({
                type: "div",
                attr: [["class", "normalForumList"], ["onclick", "loadURL(\"" + "http://www.ditiezu.com/forum.php?mod=forumdisplay&fid=" + e.fid + "\")"]]
            });
            Forum.append(cE({
                type: "img",
                attr: [["src", "https://passionpenguin.github.io/GZMTR/assets/media/images/city-icon/compressed/" + e.iconid + ".svg"]]
            }));
            Forum.append(cE({
                type: "p",
                innerHTML: "<span class=\"cnName\">" + e.name + "</span>" + "<span class=\"enName\">" + e.enName + "</span>"
            }));
            ForumList.append(Forum);
        });
        app.append(ForumList);
    }//all fid list
    app.append(cE({
        type: "p",
        attr: [["style", "text-align:center;margin:10px 0;"], ["id", "pg-copyInfo"]],
        innerText: "designed and coded by @PassionPenguin"
    }));
    document.body.append(app);
};

window.postDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let textEditBoxWrap = cE({type: "div", attr: [["id", "pg-postEditBoxWrap"]]});
    window.editBox = cE({type: "textarea", attr: [["id", "pg-postEditBox"]]});
    textEditBoxWrap.append(editBox);
    let editBoxUtilBoxWrap = cE({type: "div", attr: [["id", "pg-postEditBoxUtilBoxWrap"]]});
    let editBoxUtilBox = cE({type: "div", attr: [["id", "pg-postEditBoxUtilBox"]]});
    textEditBoxWrap.append(editBoxUtilBox);
    let mainFeatureWrap = cE({type: "div", attr: [["id", "mainFeatureWrap"]]});
    let textStyleWrap = cE({type: "div", attr: [["id", "textStyleWrap"]]});
    let makeSpecialWrap = cE({type: "div", attr: [["id", "makeSpecialWrap"]]});
    let textStyleBox = cE({
        type: "span",
        attr: [["class", "mi pg-textStyleTrigger"]],
        innerText: "text_fields"
    });
    textStyleBox.onclick = () => {
        if (!textStyleBox.classList.contains("active")) {
            textStyleBox.classList.add("active");
            editBoxUtilBoxWrap.classList.add("TextStyle");
        } else {
            textStyleBox.classList.remove("active");
            editBoxUtilBoxWrap.classList.remove("TextStyle");
        }
        return false;
    };
    mainFeatureWrap.append(textStyleBox);
    let makeSpecial = cE({
        type: "span",
        attr: [["class", "mi pg-makeSpecialTrigger"]],
        innerText: "add_circle_outline"
    });
    makeSpecial.onclick = () => {
        if (!makeSpecial.classList.contains("active")) {
            makeSpecial.classList.add("active");
            editBoxUtilBoxWrap.classList.add("MakeSpecial");
        } else {
            makeSpecial.classList.remove("active");
            editBoxUtilBoxWrap.classList.remove("MakeSpecial");
        }
        return false;
    };
    mainFeatureWrap.append(makeSpecial);
    mainFeatureWrap.append(cE({
        type: "span",
        attr: [["class", "mi pg-saveTrigger"], ["onclick", "pg.$('#e_textarea')[0].value=pg.$('#pg-postEditBox')[0].value;discuzcode('svd');return false;"]],
        innerText: "save"
    }));
    mainFeatureWrap.append(cE({
        type: "span",
        attr: [["class", "mi pg-loadTrigger"], ["onclick", "discuzcode('rst');pg.$('#pg-postEditBox')[0].value=pg.$('#e_textarea')[0].value;return false;"]],
        innerText: "unarchive"
    }));
    let prefSettings = cE({
        type: "span",
        attr: [["class", "mi pg-prefTrigger"], ["pg-active", "false"]],
        innerText: "settings"
    });
    prefSettings.onclick = () => {
        if (!mainPrefrences.classList.contains("show")) { // not showing
            prefSettings.classList.add("active");
            mainPrefrences.classList.add("show");
            if (!editBoxUtilBox.classList.contains("shouldUp")) { // if not showing
                editBoxUtilBox.classList.add("shouldUp");
                prefrences.classList.add("show");
            }
            emotionToggle.classList.remove("show");
            emotions.classList.remove("show");
        } else { // showing
            prefSettings.classList.remove("active");
            mainPrefrences.classList.remove("show");
            editBoxUtilBox.classList.remove("shouldUp");
            prefrences.classList.remove("show");
            emotionToggle.classList.remove("active");
            emotions.classList.remove("active");
        }
        return false;
    };
    mainFeatureWrap.append(prefSettings);
    let emotionToggle = cE({
        type: "span",
        attr: [["class", "mi pg-emotionTrigger"], ["pg-active", "false"]],
        innerText: "mood"
    });
    emotionToggle.onclick = () => {
        if (!emotions.classList.contains("show")) { // not showing
            emotionToggle.classList.add("active");
            emotions.classList.add("show");
            if (!editBoxUtilBox.classList.contains("shouldUp")) { // if not showing
                editBoxUtilBox.classList.add("shouldUp");
                prefrences.classList.add("show");
            }
            prefSettings.classList.remove("show");
            mainPrefrences.classList.remove("show");
        } else { // showing
            emotionToggle.classList.remove("active");
            emotions.classList.remove("show");
            editBoxUtilBox.classList.remove("shouldUp");
            prefrences.classList.remove("show");
            prefSettings.classList.remove("show");
            mainPrefrences.classList.remove("show");
        }
        return false;
    };
    mainFeatureWrap.append(emotionToggle);
    {
        let bold = cE({type: "span", attr: [["class", "mi"]], innerText: "format_bold"});
        bold.onclick = () => {
            styled("b");
            return false;
        };
        textStyleWrap.append(bold);
        let italic = cE({type: "span", attr: [["class", "mi"]], innerText: "format_italic"});
        italic.onclick = () => {
            styled("i");
            return false;
        };
        textStyleWrap.append(italic);
        let underline = cE({type: "span", attr: [["class", "mi"]], innerText: "format_underlined"});
        underline.onclick = () => {
            styled("u");
            return false;
        };
        textStyleWrap.append(underline);
        let strike = cE({type: "span", attr: [["class", "mi"]], innerText: "format_strikethrough"});
        strike.onclick = () => {
            styled("s");
            return false;
        };
        textStyleWrap.append(strike);
        let heading = cE({type: "span", attr: [["class", "mi"]], innerText: "title"});
        heading.onclick = () => {
            styled("size", "5");
            return false;
        };
        textStyleWrap.append(heading);
        let quote = cE({type: "span", attr: [["class", "mi"]], innerText: "format_quote"});
        quote.onclick = () => {
            styled("quote");
            return false;
        };
        textStyleWrap.append(quote);
        let code = cE({type: "span", attr: [["class", "mi"]], innerText: "code"});
        code.onclick = () => {
            styled("code");
            return false;
        };
        textStyleWrap.append(code);
        let back = cE({type: "span", attr: [["class", "mi"]], innerText: "chevron_right"});
        back.onclick = () => {
            editBoxUtilBoxWrap.classList.remove("TextStyle");
            return false;
        };
        textStyleWrap.append(back);
    }
    {
        let back = cE({type: "span", attr: [["class", "mi"]], innerText: "chevron_left"});
        back.onclick = () => {
            editBoxUtilBoxWrap.classList.remove("MakeSpecial");
            return false;
        };
        makeSpecialWrap.append(back);
        let link = cE({type: "span", attr: [["class", "mi"]], innerText: "insert_link"});
        link.onclick = () => {
            pg.prompt("请输入您想要插入的链接内容", "https://passionpenguin.github.io/GZMTR", (res) => {
                if (res !== false) styled("url", res);
            });
            return false;
        };
        makeSpecialWrap.append(link);
        let horizontalLink = cE({type: "span", attr: [["class", "mi"]], innerText: "remove"});
        horizontalLink.onclick = () => {
            styled("hr", "", false);
            return false;
        };
        makeSpecialWrap.append(horizontalLink);
    }
    editBoxUtilBoxWrap.append(textStyleWrap);
    editBoxUtilBoxWrap.append(mainFeatureWrap);
    editBoxUtilBoxWrap.append(makeSpecialWrap);
    editBoxUtilBox.append(editBoxUtilBoxWrap);

    let postType = pg.$("#typeid_ctrl").length === 0 ? "reply" : "new";
    let sendUtilToolBox = cE({type: "div", attr: [["id", "sendUtilToolBox"]]});
    let back = cE({type: "span", attr: [["class", "mi"]], innerText: "close"});
    back.onclick = window.onpopstate = () => {
        !confirm("确认要离开？离开将失去当前内容") ? void (0) : history.back();
    };
    let subjectHeader = cE({type: "div", attr: [["id", "sendTitle"], ["contenteditable", "true"]]});
    sendUtilToolBox.append(back);
    let post = cE({type: "span", attr: [["class", "mi theme-color"], ["id", "submitPostThread"]], innerText: "send"});
    let prefrences = cE({type: "div", attr: [["id", "prefrences"]]});
    let mainPrefrences = cE({type: "div", attr: [["id", "main_prefrences"]]});
    let emotions = cE({type: "div", attr: [["id", "emotionsWrap"]]});
    for (let i = 1; i <= 112; i++) {
        emotions.append(cE({
            type: "img",
            attr: [["src", "https://passionpenguin.github.io/GZMTR/assets/media/emotions/@O_" + i + ".gif"], ["onclick", "styled(\"img\",\"\",true,\"https://passionpenguin.github.io/GZMTR/assets/media/emotions/@O_" + i + ".gif\")"], ["class", "emotions_Onion"]]
        }))
    }
    for (let i = 1; i <= 62; i++) {
        emotions.append(cE({
            type: "img",
            attr: [["src", "https://passionpenguin.github.io/GZMTR/assets/media/emotions/@XB_" + i + ".gif"], ["onclick", "styled(\"img\",\"\",true,\"https://passionpenguin.github.io/GZMTR/assets/media/emotions/@XB_" + i + ".gif\")"], ["class", "emotions_Xiaobai"]]
        }))
    }
    for (let i = 1; i <= 182; i++) {
        emotions.append(cE({
            type: "img",
            attr: [["src", "https://passionpenguin.github.io/GZMTR/assets/media/emotions/@Q_" + i + ".gif"], ["onclick", "styled(\"img\",\"\",true,\"https://passionpenguin.github.io/GZMTR/assets/media/emotions/@Q_" + i + ".gif\")"], ["class", "emotions_Q"]]
        }))
    }
    prefrences.append(mainPrefrences);
    prefrences.append(emotions);
    let withFootNote = true;
    let withFootNotes = cE({type: "div", attr: [["id", "FootNote"]], innerText: "是否带上app标签"});
    withFootNotes.onclick = () => {
        pg.select("请选择是否使用app标签", "选择后将会加上app发帖的图标。", "selectNotes", (res) => {
            if (res !== false) {
                withFootNote = res === "set";
            }
        });
    };
    mainPrefrences.append(withFootNotes);
    switch (postType) {
        case "new":
            let readPerm = cE({type: "div", attr: [["id", "ReadPerm"]], innerText: "阅读权限"});
            readPerm.onclick = () => {
                pg.select("请选择您的帖子的阅读权限", "权限大于等于您所设定的值时候对方才可见。", "selectPerm", (res) => {
                    if (res !== false) {
                        pg.$("#readperm")[0].children[res].click();
                    }
                });
            };
            mainPrefrences.append(readPerm);

            sendUtilToolBox.append(cE({type: "div", innerText: "发表新帖子"}));
            pg.prompt("请输入您的标题", "例如：震惊，企鹅竟然是母的", (res) => {
                if (res !== false) {
                    subjectHeader.innerHTML = res;
                    pg.$("#subject")[0].value = res;
                }
                subjectHeader.classList.add("show");
            });
            post.onclick = () => {
                let typeid = [...pg.$("#typeid_ctrl_menu li")].map((i, index) => [i.innerText, i, index]);
                pg.prompt("请输入您的主题分类", typeid[0][0], (res) => {
                    if (res !== false) {
                        if ([-1, 0].indexOf(typeid.map(i => i[0]).indexOf(res)) !== -1) {
                            showWarning("请重新输入");
                        } else {
                            typeid[typeid.map(i => i[0]).indexOf(res)][1].click();
                            if (subjectHeader.innerText === "") {
                                showWarning("请输入您的标题");
                            } else {
                                if (editBox.value === "" || editBox.value.length < 10) {
                                    showWarning("字数不够10");
                                } else {
                                    pg.$("#subject")[0].value = subjectHeader.innerText;
                                    pg.$("#e_textarea")[0].value = editBox.value;
                                    if (withFootNote)
                                        pg.$("#e_textarea")[0].value += "[img][/img]";
                                    pg.$("#postsubmit")[0].click();
                                }
                            }
                        }
                    }
                });
            };
            break;
        case "reply":
            sendUtilToolBox.append(cE({type: "div", innerText: "回复帖子"}));
            let subject = pg.$("#subjecthide")[0].innerText.substring(0, pg.$("#subjecthide")[0].innerText.length - 5);
            subjectHeader.innerText = subject;
            post.onclick = () => {
                pg.$("#e_textarea")[0].value = editBox.value;
                if (withFootNote)
                    pg.$("#e_textarea")[0].value += "[img][/img]";
                pg.$("#postsubmit")[0].click();
            };
            break;
    }
    sendUtilToolBox.append(post);
    sendUtilToolBox.append(subjectHeader);
    app.append(sendUtilToolBox);
    app.append(textEditBoxWrap);
    document.body.append(prefrences);
    document.body.append(app);
};

window.showWarning = (inf, time, callback) => {
    time = time || 2000;
    inf = inf || "加载中...";
    let wrap = pg.$("#bg-animation")[0];
    wrap.children[0].innerHTML = inf;
    wrap.classList.add("loading");
    setTimeout(() => {
        wrap.classList.remove("loading");
        if (callback)
            callback();
    }, time);
};

window.basicComp = () => {    
    let avatarBox = pg.$(".avt.y")[0];
    if (avatarBox) {//logined

    } else {
        if (!document.body.classList.contains("pg_register")) {
            showWarning("请先登录论坛，或者将无法使用。", 1000, loadURL("http://www.ditiezu.com/member.php?mod=regditiezu.php"));
            throw("S:\tStop Evaluating");
        }
    }
    {
        let loadingFrame = cE({type: "div", attr: [["id", "bg-animation"]]});
        let loadingTips = cE({type: "span"});
        loadingFrame.append(loadingTips);
        document.body.append(loadingFrame);
        showWarning("暂停维护，将于正式开学后恢复维护。",10000);
        let bottomBar = cE({type: "div", attr: [["id", "pg-navBottom"]]});
        let mainPage = cE({
            type: "div",
            attr: [["class", "pg-navBottomNaviItem"], ["onclick", "loadURL(\"http://www.ditiezu.com/forum.php\")"]],
            innerHTML: "<span class='mi'>home</span><span>主页</span>"
        });
        let messagePage = cE({
            type: "div",
            attr: [["class", "pg-navBottomNaviItem"], ["onclick", "loadURL(\"http://www.ditiezu.com/home.php?mod=space&do=notice\")"]],
            innerHTML: "<span class='mi'>message</span><span>消息</span>"
        });
        let accountPage = cE({
            type: "div",
            attr: [["class", "pg-navBottomNaviItem"], ["onclick", "loadURL(\"http://www.ditiezu.com/home.php?mod=spacecp&ac=credit\")"]],
            innerHTML: "<span class='mi'>person</span><span>个人</span>"
        });
        bottomBar.append(mainPage);
        bottomBar.append(messagePage);
        bottomBar.append(accountPage);
        document.body.append(bottomBar);
    }
};
