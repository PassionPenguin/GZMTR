/* Made by Penguin */
window.loadLocalUrl = (typeof android === "undefined") ? (url) => {
    window.location.href = "http://127.0.0.1/" + url
} : (url) => {
    window.location.href = "file:///android_asset/webRes/" + url
};
window.dev = true;
window.pg = {
    $: (a) => {
        return document.querySelectorAll(a);
    },
    prompt: (title, placeholder, callback, tips) => {
        let promptWrap = cE({type: "div", attr: [["id", "pg-prompt-wrap"]]});
        let promptInfo = cE({type: "span", attr: [["class", "pg-prompt-tipso"]], innerText: title});
        let promptInput = cE({
            type: "div",
            attr: [["contenteditable", "true"], ["class", "pg-prompt-input"]],
            innerText: placeholder
        });
        let promptTips = cE({type: "div", attr: [["class", "pg-prompt-promptInfo"]], innerText: tips});
        let ctrlGroup = cE({type: "div", attr: [["class", "pg-prompt-ctrl"]]});
        let submitPrompt = cE({
            type: "span",
            attr: [["class", "pg-prompt-ctrl"]],
            innerHTML: "<span class='mi'>check</span><span>ȷ����Ϣ</span>"
        });
        submitPrompt.onclick = () => {
            promptWrap.classList.remove("active");
            setTimeout(() => {
                document.body.removeChild(promptWrap)
            }, 500);
            callback(promptInput.innerText);
        };
        let closePrompt = cE({
            type: "span",
            attr: [["class", "pg-prompt-ctrl"]],
            innerHTML: "<span class='mi'>close</span><span>�رմ���</span>"
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
    },
    select: (title, inf, active, callback, tips) => {
        let selectWrap = cE({type: "div", attr: [["id", "pg-select-wrap"], ["class", "active"]]});
        let selectInfo = cE({type: "div", attr: [["class", "pg-select-info"]], innerText: title});
        let selectTips = cE({
            type: "div",
            attr: [["class", "pg-select-tips"]],
            innerText: tips
        });
        let selectInput = cE({
            type: "div",
            attr: [["class", "pg-select-input"]],
        });
        selectInput.append(selectTips);
        inf.forEach(e => {
            let select = cE({type: "div", innerText: e});
            if (e === active)
                select.classList.add("theme-color");
            selectInput.append(select);
            select.onclick = () => {
                selectWrap.classList.remove("active");
                setTimeout(() => {
                    document.body.removeChild(selectWrap)
                }, 500);
                callback(e);
            }
        });
        selectWrap.append(selectInfo);
        selectWrap.append(selectInput);
        document.body.append(selectWrap);
    },
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
window.insert = (content) => {
    let cur = g(editBox);
    if (typeof cur === "number") {
        editBox.value = editBox.value.substring(0, cur) + content + editBox.value.substring(cur, editBox.value.length);
    } else {
        editBox.value = editBox.value.substring(0, cur[0]) + content + editBox.value.substring(cur[1], editBox.value.length);
    }
};
window.blog = [
    {name: "������", fid: 7, iconid: "BJ", enName: "Beijing"}, {
        name: "�����",
        fid: 6,
        iconid: "TJ",
        enName: "Tianjin"
    }, {name: "�Ϻ���", fid: 8, iconid: "SH", enName: "Shanghai"}, {
        name: "������",
        fid: 23,
        iconid: "GZ",
        enName: "Guangzhou"
    }, {name: "������", fid: 40, iconid: "CCH", enName: "Changchun"}, {
        name: "������",
        fid: 41,
        iconid: "DL",
        enName: "Dalian"
    }, {name: "�人��", fid: 39, iconid: "WH", enName: "Wuhan"}, {
        name: "������",
        fid: 38,
        iconid: "CQ",
        enName: "Chongqing"
    }, {name: "������", fid: 24, iconid: "SZ", enName: "Shenzhen"}, {
        name: "�Ͼ���",
        fid: 22,
        iconid: "NJ",
        enName: "Nanjing"
    }, {name: "�ɶ���", fid: 53, iconid: "CD", enName: "Chengdu"}, {
        name: "������",
        fid: 50,
        iconid: "SY",
        enName: "Shenyang"
    }, {name: "��ɽ��", fid: 56, iconid: "FS", enName: "Foshan"}, {
        name: "������",
        fid: 54,
        iconid: "XA",
        enName: "Xi'an"
    }, {name: "������", fid: 51, iconid: "SUZ", enName: "Suzhou"}, {
        name: "������",
        fid: 70,
        iconid: "KM",
        enName: "Kunming"
    }, {name: "������", fid: 52, iconid: "HZ", enName: "Hangzhou"}, {
        name: "��������",
        fid: 55,
        iconid: "HAB",
        enName: "Harbin"
    }, {name: "֣����", fid: 64, iconid: "ZZ", enName: "Zhengzhou"}, {
        name: "��ɳ��",
        fid: 67,
        iconid: "CS",
        enName: "Changsha"
    }, {name: "������", fid: 65, iconid: "NB", enName: "Ningbo"}, {
        name: "������",
        fid: 68,
        iconid: "WX",
        enName: "Wuxi"
    }, {name: "�ൺ��", fid: 66, iconid: "QD", enName: "Qingdao"}, {
        name: "�ϲ���",
        fid: 71,
        iconid: "NC",
        enName: "Nanchang"
    }, {name: "������", fid: 72, iconid: "FZ", enName: "Fuzhou"}, {
        name: "��ݸ��",
        fid: 75,
        iconid: "DG",
        enName: "Dongguan"
    }, {name: "������", fid: 73, iconid: "NN", enName: "Nanning"}, {
        name: "�Ϸ���",
        fid: 74,
        iconid: "HF",
        enName: "Hefei"
    }, {name: "ʯ��ׯ��", fid: 140, iconid: "SJZ", enName: "Shijiazhuang"}, {
        name: "������",
        fid: 76,
        iconid: "GY",
        enName: "Guiyang"
    }, {name: "������", fid: 77, iconid: "XM", enName: "Xiamen"}, {
        name: "��³ľ����",
        fid: 143,
        iconid: "UM",
        enName: "Urumqi"
    }, {name: "������", fid: 142, iconid: "WZ", enName: "Wenzhou"}, {
        name: "������",
        fid: 148,
        iconid: "JN",
        enName: "Jinan"
    }, {name: "������", fid: 78, iconid: "LZ", enName: "Lanzhou"}, {
        name: "������",
        fid: 48,
        iconid: "CZ",
        enName: "Changzhou"
    }, {name: "������", fid: 144, iconid: "XZ", enName: "Xuzhou"}, {
        name: "���ͺ�����",
        fid: 151,
        iconid: "HH",
        enName: "Huhhot"
    }, {name: "�����", fid: 28, iconid: "HK", enName: "Hongkong"}, {
        name: "������",
        fid: 79,
        iconid: "MO",
        enName: "Macau"
    }, {name: "̨����", fid: 36, iconid: "TW", enName: "Taiwan"}, {
        name: "������",
        fid: 47,
        iconid: "HW",
        enName: "Oversea"
    }, {name: "�ۺ���", fid: 37, iconid: "ZOH", enName: "Comprehensive"}, {
        name: "����ղ�",
        fid: 33,
        iconid: "COL",
        enName: "Collections"
    }, {name: "���з���", fid: 16, iconid: "SCN", enName: "City Style"}, {
        name: "������ʳ",
        fid: 15,
        iconid: "FOOD",
        enName: "Food"
    }, {name: "�콻��Ϸ", fid: 145, iconid: "GAME", enName: "Games"}, {
        name: "վǰ�㳡",
        fid: 21,
        iconid: "CHAT",
        enName: "H2O Plaza"
    }, {name: "�Ǽʸ���", fid: 46, iconid: "Railway", "enName": "Railway"}, {
        name: "վ�񹫸�",
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
    system.onready();
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
        innerHTML: "<span onclick=\"loadURL('http://www.ditiezu.com\forum.php?mod=forumdisplay&fid=" + fid + "')\" class='mi theme-color ic-back'>chevron_left</span><span>" + threadSubject + "</span>",
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
        let threadPostTime = threadContent[0].innerText.split("������ ")[1].split("|")[0];
        postInfo.append(cE({type: "span", innerText: "��" + threadFloor + "¥"}));
        postInfo.append(cE({type: "span", innerText: "������" + threadPostTime}));
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
            innerText: "�ظ�"
        });
        replyBTN.onclick = () => {
            loadURL(id !== "0" ? ("http://www.ditiezu.com/forum.php?mod=post&action=reply&tid=" + tid + "&repquote=" + replyBTN.getAttribute("rid")) : "http://www.ditiezu.com/forum.php?mod=post&action=reply&tid=" + tid)
        };
        threadUtil.append(replyBTN);
        if (document.body.innerHTML.includes("����")) {
            let rateBTN = cE({
                type: "span",
                attr: [["class", "makeRate"], ["rid", pid.substr(5)]],
                innerText: "����"
            });
            rateBTN.onclick = () => {
                showWindow('rate', 'forum.php?mod=misc&action=rate&tid=' + tid + '&pid=' + rateBTN.getAttribute("rid") + '', 'get', -1);
                return false;
            };
            threadUtil.append(rateBTN);
        }
        if (threadFloor === 1) {
            let star = cE({
                type: "span",
                attr: [["class", "star"], ["rid", pid.substr(5)]],
                innerText: "�ղ�"
            });
            star.onclick = () => {
                pg.$("#k_favorite")[0].click();
                star.classList.add("theme-color");
                return false;
            };
            threadUtil.append(star);
            let appreciate = cE({
                type: "span",
                attr: [["class", "appreciate"], ["rid", pid.substr(5)]],
                innerText: "��"
            });
            appreciate.onclick = () => {
                pg.$("#recommend_add")[0].click();
                star.classList.add("theme-color");
                return false;
            };
            threadUtil.append(appreciate);
            let dislike = cE({
                type: "span",
                attr: [["class", "dislike"], ["rid", pid.substr(5)]],
                innerText: "��"
            });
            dislike.onclick = () => {
                pg.$("#recommend_subtract")[0].click();
                star.classList.add("theme-color");
                return false;
            };
            threadUtil.append(dislike);
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
    system.onready();
};

window.loginDisplay = () => {
    pg.$("#main_hnav a.xi2")[0].click();
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com\")' class='mi theme-color ic-back'>chevron_left</span><span>��¼������</span>",
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
    system.onready();
};

window.indexDisplay = () => {
    let list = [...pg.$("#portal_block_55_content ul li")].map((i, index) => [index, i.children[0].innerText, i.children[1], i.children[2]]);
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    app.append(cE({type: "p", innerText: "���Ű��", attr: [["class", "pg-hotForumDescription"]]}));
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

    app.append(cE({type: "p", innerText: "���վ۽�", attr: [["class", "pg-hotThreadDescription"]]}));
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

    app.append(cE({type: "p", innerText: "��Ҫ���", attr: [["class", "pg-mainForumDescription"]]}));
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
    system.onready();
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
            pg.prompt("����������Ҫ�������������", "https://passionpenguin.github.io/GZMTR", (res) => {
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
        !confirm("ȷ��Ҫ�뿪���뿪��ʧȥ��ǰ����") ? void (0) : history.back();
    };
    let subjectHeader = cE({type: "div", attr: [["id", "sendTitle"], ["contenteditable", "true"]]});
    sendUtilToolBox.append(back);
    let post = cE({type: "span", attr: [["class", "mi theme-color"], ["id", "submitPostThread"]], innerText: "send"});
    let prefrences = cE({type: "div", attr: [["id", "prefrences"]]});
    let mainPrefrences = cE({type: "div", attr: [["id", "main_prefrences"]]});
    let emotions = cE({type: "div", attr: [["id", "emotionsWrap"]]});
    let onion = [["{:10_817:}", "http://www.ditiezu.com/static/image/smiley/oniontou/001.gif"], ["{:10_836:}", "http://www.ditiezu.com/static/image/smiley/oniontou/002.gif"], ["{:10_877:}", "http://www.ditiezu.com/static/image/smiley/oniontou/003.gif"], ["{:10_804:}", "http://www.ditiezu.com/static/image/smiley/oniontou/004.gif"], ["{:10_849:}", "http://www.ditiezu.com/static/image/smiley/oniontou/005.gif"], ["{:10_865:}", "http://www.ditiezu.com/static/image/smiley/oniontou/006.gif"], ["{:10_845:}", "http://www.ditiezu.com/static/image/smiley/oniontou/007.gif"], ["{:10_852:}", "http://www.ditiezu.com/static/image/smiley/oniontou/008.gif"], ["{:10_788:}", "http://www.ditiezu.com/static/image/smiley/oniontou/009.gif"], ["{:10_838:}", "http://www.ditiezu.com/static/image/smiley/oniontou/010.gif"], ["{:10_837:}", "http://www.ditiezu.com/static/image/smiley/oniontou/011.gif"], ["{:10_868:}", "http://www.ditiezu.com/static/image/smiley/oniontou/012.gif"], ["{:10_853:}", "http://www.ditiezu.com/static/image/smiley/oniontou/013.gif"], ["{:10_830:}", "http://www.ditiezu.com/static/image/smiley/oniontou/014.gif"], ["{:10_821:}", "http://www.ditiezu.com/static/image/smiley/oniontou/015.gif"], ["{:10_875:}", "http://www.ditiezu.com/static/image/smiley/oniontou/016.gif"], ["{:10_797:}", "http://www.ditiezu.com/static/image/smiley/oniontou/017.gif"], ["{:10_872:}", "http://www.ditiezu.com/static/image/smiley/oniontou/018.gif"], ["{:10_787:}", "http://www.ditiezu.com/static/image/smiley/oniontou/019.gif"], ["{:10_773:}", "http://www.ditiezu.com/static/image/smiley/oniontou/020.gif"], ["{:10_840:}", "http://www.ditiezu.com/static/image/smiley/oniontou/021.gif"], ["{:10_888:}", "http://www.ditiezu.com/static/image/smiley/oniontou/022.gif"], ["{:10_832:}", "http://www.ditiezu.com/static/image/smiley/oniontou/023.gif"], ["{:10_774:}", "http://www.ditiezu.com/static/image/smiley/oniontou/024.gif"], ["{:10_882:}", "http://www.ditiezu.com/static/image/smiley/oniontou/025.gif"], ["{:10_864:}", "http://www.ditiezu.com/static/image/smiley/oniontou/026.gif"], ["{:10_866:}", "http://www.ditiezu.com/static/image/smiley/oniontou/027.gif"], ["{:10_803:}", "http://www.ditiezu.com/static/image/smiley/oniontou/028.gif"], ["{:10_835:}", "http://www.ditiezu.com/static/image/smiley/oniontou/029.gif"], ["{:10_820:}", "http://www.ditiezu.com/static/image/smiley/oniontou/030.gif"], ["{:10_862:}", "http://www.ditiezu.com/static/image/smiley/oniontou/031.gif"], ["{:10_780:}", "http://www.ditiezu.com/static/image/smiley/oniontou/032.gif"], ["{:10_802:}", "http://www.ditiezu.com/static/image/smiley/oniontou/033.gif"], ["{:10_887:}", "http://www.ditiezu.com/static/image/smiley/oniontou/034.gif"], ["{:10_828:}", "http://www.ditiezu.com/static/image/smiley/oniontou/035.gif"], ["{:10_873:}", "http://www.ditiezu.com/static/image/smiley/oniontou/036.gif"], ["{:10_854:}", "http://www.ditiezu.com/static/image/smiley/oniontou/037.gif"], ["{:10_791:}", "http://www.ditiezu.com/static/image/smiley/oniontou/038.gif"], ["{:10_825:}", "http://www.ditiezu.com/static/image/smiley/oniontou/039.gif"], ["{:10_833:}", "http://www.ditiezu.com/static/image/smiley/oniontou/040.gif"], ["{:10_863:}", "http://www.ditiezu.com/static/image/smiley/oniontou/041.gif"], ["{:10_824:}", "http://www.ditiezu.com/static/image/smiley/oniontou/042.gif"], ["{:10_870:}", "http://www.ditiezu.com/static/image/smiley/oniontou/043.gif"], ["{:10_878:}", "http://www.ditiezu.com/static/image/smiley/oniontou/044.gif"], ["{:10_807:}", "http://www.ditiezu.com/static/image/smiley/oniontou/045.gif"], ["{:10_869:}", "http://www.ditiezu.com/static/image/smiley/oniontou/046.gif"], ["{:10_844:}", "http://www.ditiezu.com/static/image/smiley/oniontou/047.gif"], ["{:10_798:}", "http://www.ditiezu.com/static/image/smiley/oniontou/048.gif"], ["{:10_794:}", "http://www.ditiezu.com/static/image/smiley/oniontou/049.gif"], ["{:10_779:}", "http://www.ditiezu.com/static/image/smiley/oniontou/050.gif"], ["{:10_867:}", "http://www.ditiezu.com/static/image/smiley/oniontou/051.gif"], ["{:10_880:}", "http://www.ditiezu.com/static/image/smiley/oniontou/052.gif"], ["{:10_795:}", "http://www.ditiezu.com/static/image/smiley/oniontou/053.gif"], ["{:10_860:}", "http://www.ditiezu.com/static/image/smiley/oniontou/054.gif"], ["{:10_796:}", "http://www.ditiezu.com/static/image/smiley/oniontou/055.gif"], ["{:10_790:}", "http://www.ditiezu.com/static/image/smiley/oniontou/056.gif"], ["{:10_883:}", "http://www.ditiezu.com/static/image/smiley/oniontou/057.gif"], ["{:10_811:}", "http://www.ditiezu.com/static/image/smiley/oniontou/058.gif"], ["{:10_819:}", "http://www.ditiezu.com/static/image/smiley/oniontou/059.gif"], ["{:10_881:}", "http://www.ditiezu.com/static/image/smiley/oniontou/060.gif"], ["{:10_834:}", "http://www.ditiezu.com/static/image/smiley/oniontou/061.gif"], ["{:10_810:}", "http://www.ditiezu.com/static/image/smiley/oniontou/062.gif"], ["{:10_801:}", "http://www.ditiezu.com/static/image/smiley/oniontou/063.gif"], ["{:10_786:}", "http://www.ditiezu.com/static/image/smiley/oniontou/064.gif"], ["{:10_800:}", "http://www.ditiezu.com/static/image/smiley/oniontou/065.gif"], ["{:10_855:}", "http://www.ditiezu.com/static/image/smiley/oniontou/066.gif"], ["{:10_856:}", "http://www.ditiezu.com/static/image/smiley/oniontou/067.gif"], ["{:10_809:}", "http://www.ditiezu.com/static/image/smiley/oniontou/068.gif"], ["{:10_781:}", "http://www.ditiezu.com/static/image/smiley/oniontou/069.gif"], ["{:10_843:}", "http://www.ditiezu.com/static/image/smiley/oniontou/070.gif"], ["{:10_831:}", "http://www.ditiezu.com/static/image/smiley/oniontou/071.gif"], ["{:10_806:}", "http://www.ditiezu.com/static/image/smiley/oniontou/072.gif"], ["{:10_792:}", "http://www.ditiezu.com/static/image/smiley/oniontou/073.gif"], ["{:10_813:}", "http://www.ditiezu.com/static/image/smiley/oniontou/074.gif"], ["{:10_884:}", "http://www.ditiezu.com/static/image/smiley/oniontou/075.gif"], ["{:10_782:}", "http://www.ditiezu.com/static/image/smiley/oniontou/076.gif"], ["{:10_874:}", "http://www.ditiezu.com/static/image/smiley/oniontou/077.gif"], ["{:10_846:}", "http://www.ditiezu.com/static/image/smiley/oniontou/078.gif"], ["{:10_842:}", "http://www.ditiezu.com/static/image/smiley/oniontou/079.gif"], ["{:10_775:}", "http://www.ditiezu.com/static/image/smiley/oniontou/080.gif"], ["{:10_885:}", "http://www.ditiezu.com/static/image/smiley/oniontou/081.gif"], ["{:10_815:}", "http://www.ditiezu.com/static/image/smiley/oniontou/082-1.gif"], ["{:10_812:}", "http://www.ditiezu.com/static/image/smiley/oniontou/082-2.gif"], ["{:10_823:}", "http://www.ditiezu.com/static/image/smiley/oniontou/083.gif"], ["{:10_871:}", "http://www.ditiezu.com/static/image/smiley/oniontou/084.gif"], ["{:10_861:}", "http://www.ditiezu.com/static/image/smiley/oniontou/085.gif"], ["{:10_889:}", "http://www.ditiezu.com/static/image/smiley/oniontou/086.gif"], ["{:10_879:}", "http://www.ditiezu.com/static/image/smiley/oniontou/087.gif"], ["{:10_851:}", "http://www.ditiezu.com/static/image/smiley/oniontou/088.gif"], ["{:10_839:}", "http://www.ditiezu.com/static/image/smiley/oniontou/089-1.gif"], ["{:10_776:}", "http://www.ditiezu.com/static/image/smiley/oniontou/089-2.gif"], ["{:10_793:}", "http://www.ditiezu.com/static/image/smiley/oniontou/090.gif"], ["{:10_799:}", "http://www.ditiezu.com/static/image/smiley/oniontou/091.gif"], ["{:10_848:}", "http://www.ditiezu.com/static/image/smiley/oniontou/091-1.gif"], ["{:10_826:}", "http://www.ditiezu.com/static/image/smiley/oniontou/091-2.gif"], ["{:10_783:}", "http://www.ditiezu.com/static/image/smiley/oniontou/091-3.gif"], ["{:10_850:}", "http://www.ditiezu.com/static/image/smiley/oniontou/092.gif"], ["{:10_829:}", "http://www.ditiezu.com/static/image/smiley/oniontou/093.gif"], ["{:10_859:}", "http://www.ditiezu.com/static/image/smiley/oniontou/095.gif"], ["{:10_778:}", "http://www.ditiezu.com/static/image/smiley/oniontou/096.gif"], ["{:10_784:}", "http://www.ditiezu.com/static/image/smiley/oniontou/097.gif"], ["{:10_805:}", "http://www.ditiezu.com/static/image/smiley/oniontou/098.gif"], ["{:10_827:}", "http://www.ditiezu.com/static/image/smiley/oniontou/099.gif"], ["{:10_777:}", "http://www.ditiezu.com/static/image/smiley/oniontou/100.gif"], ["{:10_814:}", "http://www.ditiezu.com/static/image/smiley/oniontou/101.gif"], ["{:10_847:}", "http://www.ditiezu.com/static/image/smiley/oniontou/102.gif"], ["{:10_857:}", "http://www.ditiezu.com/static/image/smiley/oniontou/103.gif"], ["{:10_816:}", "http://www.ditiezu.com/static/image/smiley/oniontou/104.gif"], ["{:10_789:}", "http://www.ditiezu.com/static/image/smiley/oniontou/105.gif"], ["{:10_785:}", "http://www.ditiezu.com/static/image/smiley/oniontou/106.gif"], ["{:10_822:}", "http://www.ditiezu.com/static/image/smiley/oniontou/107.gif"], ["{:10_841:}", "http://www.ditiezu.com/static/image/smiley/oniontou/108.gif"], ["{:10_818:}", "http://www.ditiezu.com/static/image/smiley/oniontou/109.gif"], ["{:10_858:}", "http://www.ditiezu.com/static/image/smiley/oniontou/110.gif"], ["{:10_876:}", "http://www.ditiezu.com/static/image/smiley/oniontou/111.gif"], ["{:10_886:}", "http://www.ditiezu.com/static/image/smiley/oniontou/112.gif"], ["{:10_808:}", "http://www.ditiezu.com/static/image/smiley/oniontou/113.gif"], ["{:10_891:}", "http://www.ditiezu.com/static/image/smiley/oniontou/114.gif"], ["{:10_892:}", "http://www.ditiezu.com/static/image/smiley/oniontou/114-s.gif"], ["{:10_890:}", "http://www.ditiezu.com/static/image/smiley/oniontou/115.gif"]];
    let xb = [["{:xb1:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/1.gif"], ["{:xb2:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/2.gif"], ["{:xb3:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/3.gif"], ["{:xb4:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/4.gif"], ["{:xb5:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/5.gif"], ["{:xb6:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/6.gif"], ["{:xb7:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/7.gif"], ["{:xb8:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/8.gif"], ["{:xb9:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/9.gif"], ["{:xb10:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/10.gif"], ["{:xb19:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/19.gif"], ["{:xb11:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/11.gif"], ["{:xb12:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/12.gif"], ["{:xb13:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/13.gif"], ["{:xb14:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/14.gif"], ["{:xb15:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/15.gif"], ["{:xb16:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/16.gif"], ["{:xb17:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/17.gif"], ["{:xb18:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/18.gif"], ["{:xb20:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/20.gif"], ["{:xb21:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/21.gif"], ["{:xb22:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/22.gif"], ["{:xb23:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/23.gif"], ["{:xb24:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/24.gif"], ["{:xb25:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/25.gif"], ["{:xb26:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/26.gif"], ["{:xb27:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/27.gif"], ["{:xb28:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/28.gif"], ["{:xb29:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/29.gif"], ["{:xb30:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/30.gif"], ["{:xb31:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/31.gif"], ["{:xb32:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/32.gif"], ["{:xb33:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/33.gif"], ["{:xb34:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/34.gif"], ["{:xb35:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/35.gif"], ["{:xb36:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/36.gif"], ["{:xb37:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/37.gif"], ["{:xb38:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/38.gif"], ["{:xb39:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/39.gif"], ["{:xb40:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/40.gif"], ["{:xb41:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/41.gif"], ["{:xb42:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/42.gif"], ["{:xb43:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/43.gif"], ["{:xb44:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/44.gif"], ["{:xb45:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/45.gif"], ["{:xb46:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/46.gif"], ["{:xb47:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/47.gif"], ["{:xb48:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/48.gif"], ["{:xb49:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/49.gif"], ["{:xb50:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/50.gif"], ["{:xb51:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/51.gif"], ["{:xb52:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/52.gif"], ["{:xb53:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/53.gif"], ["{:xb54:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/54.gif"], ["{:xb55:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/55.gif"], ["{:xb56:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/56.gif"], ["{:xb57:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/57.gif"], ["{:xb58:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/58.gif"], ["{:xb59:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/59.gif"], ["{:xb60:}", "http://www.ditiezu.com/static/image/smiley/xiaobai/60.gif"]];
    onion.forEach(e => {
        emotions.append(cE({
            type: "img",
            attr: [["src", e[1]], ["alt", e[0]], ["onclick", "insert('" + e[0] + "')"], ["class", "emotion"]]
        }))
    });
    xb.forEach(e => {
        emotions.append(cE({
            type: "img",
            attr: [["src", e[1]], ["alt", e[0]], ["onclick", "insert('" + e[0] + "')"], ["class", "emotion"]]
        }))
    });
    prefrences.append(mainPrefrences);
    prefrences.append(emotions);
    let withFootNote = true;
    let withFootNotes = cE({type: "div", attr: [["id", "FootNote"]], innerText: "�Ƿ����app��ǩ"});
    withFootNotes.onclick = () => {
        pg.select("��ѡ���Ƿ�ʹ��app��ǩ", "ѡ��󽫻����app������ͼ�ꡣ", "selectNotes", (res) => {
            if (res !== false) {
                withFootNote = res === "set";
            }
        });
    };
    mainPrefrences.append(withFootNotes);
    switch (postType) {
        case "new":
            let readPerm = cE({type: "div", attr: [["id", "ReadPerm"]], innerText: "�Ķ�Ȩ��"});
            readPerm.onclick = () => {
                pg.select("��ѡ���������ӵ��Ķ�Ȩ��", "Ȩ�޴��ڵ��������趨��ֵʱ��Է��ſɼ���", "selectPerm", (res) => {
                    if (res !== false) {
                        pg.$("#readperm")[0].children[res].click();
                    }
                });
            };
            mainPrefrences.append(readPerm);

            sendUtilToolBox.append(cE({type: "div", innerText: "����������"}));
            pg.prompt("���������ı���", "���磺�𾪣���쾹Ȼ��ĸ��", (res) => {
                if (res !== false) {
                    subjectHeader.innerHTML = res;
                    pg.$("#subject")[0].value = res;
                }
                subjectHeader.classList.add("show");
            });
            post.onclick = () => {
                let typeid = [...pg.$("#typeid_ctrl_menu li")].map((i, index) => [i.innerText, i, index]);
                pg.prompt("�����������������", typeid[0][0], (res) => {
                    if (res !== false) {
                        if ([-1, 0].indexOf(typeid.map(i => i[0]).indexOf(res)) !== -1) {
                            showWarning("����������");
                        } else {
                            typeid[typeid.map(i => i[0]).indexOf(res)][1].click();
                            if (subjectHeader.innerText === "") {
                                showWarning("���������ı���");
                            } else {
                                if (editBox.value === "" || editBox.value.length < 10) {
                                    showWarning("��������10");
                                } else {
                                    pg.$("#subject")[0].value = subjectHeader.innerText;
                                    pg.$("#e_textarea")[0].value = editBox.value;
                                    if (withFootNote)
                                        pg.$("#e_textarea")[0].value += "��app����";
                                    pg.$("#postsubmit")[0].click();
                                }
                            }
                        }
                    }
                });
            };
            break;
        case "reply":
            sendUtilToolBox.append(cE({type: "div", innerText: "�ظ�����"}));
            let subject = pg.$("#subjecthide")[0].innerText.substring(0, pg.$("#subjecthide")[0].innerText.length - 5);
            subjectHeader.innerText = subject;
            post.onclick = () => {
                pg.$("#e_textarea")[0].value = editBox.value;
                if (withFootNote)
                    pg.$("#e_textarea")[0].value += "��app����";
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
    system.onready();
};

window.showWarning = (inf, time, callback) => {
    time = time || 2000;
    inf = inf || "������...";
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
    window.system = {};
    if (typeof android !== "undefined") {
        system.get = (name) => {
            return android.getPref(name);
        };
        system.set = (name, value) => {
            android.storeStringPref(name, value)
        };
        system.removeAll = () => {
            android.sharedPreferencesRemove()
        };
        system.onready = () => {
            android.onready()
        };
    } else {
        system.get = (cname) => {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };
        system.set = (cname, cvalue) => {
            let d = new Date();
            d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };
        system.removeAll = () => {
            document.cookie.split(";").forEach(function (c) {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
        };
        system.onready = () => {
            console.log("W:\tReady!")
        }
    }

    window.cT = ["", "-1"].indexOf(system.get("theme")) !== -1 || isNaN(Int(system.get("theme"))) ? 0 : Int(system.get("theme"));
    window.themeName = ["Simple", "Darker", "Watermelon", "Summer", "Rain", "Tea"];
    document.documentElement.classList.add(themeName[cT] + "Theme");
    window.overrideDarkMode = ["", "0"].indexOf(system.get("overrideDarkMode")) === -1;
    if (overrideDarkMode)
        document.documentElement.classList.add("custom-theme");
    let avatarBox = pg.$(".avt.y")[0];
    if (avatarBox) {//logined

    } else {
        if (!document.body.classList.contains("pg_register")) {
            showWarning("���ȵ�¼��̳�����߽��޷�ʹ�á�", 1000, loadURL("http://www.ditiezu.com/member.php?mod=regditiezu.php"));
        }
    }
    {
        let loadingFrame = cE({type: "div", attr: [["id", "bg-animation"]]});
        let loadingTips = cE({type: "span"});
        loadingFrame.append(loadingTips);
        document.body.append(loadingFrame);
        // if (getPara("pg__dev") !== "true" && !dev) {
        //     showWarning("BETA Insider\n\nStop Supporting.\n\nThanks for testing.", 10000);
        //     throw("S:\tStop Evaluating because no dev-parameters found in url.");
        // }
        if (getPara("pg__newRelease") !== "true" && !dev) {
            showWarning("NOT NEWEST VER.\n\nStop Supporting.");
            throw("S:\tStop Evaluating because no release-parameters found in url.");
        }
        let bottomBar = cE({type: "div", attr: [["id", "pg-navBottom"]]});
        let mainPage = cE({
            type: "div",
            attr: [["class", "pg-navBottomNaviItem"], ["onclick", "loadURL(\"http://www.ditiezu.com/forum.php\")"]],
            innerHTML: "<span class='mi'>home</span><span>��ҳ</span>"
        });
        let messagePage = cE({
            type: "div",
            attr: [["class", "pg-navBottomNaviItem"], ["onclick", "loadURL(\"http://www.ditiezu.com/home.php?mod=space&do=notice\")"]],
            innerHTML: "<span class='mi'>message</span><span>��Ϣ</span>"
        });
        let accountPage = cE({
            type: "div",
            attr: [["class", "pg-navBottomNaviItem"], ["onclick", "loadURL(\"http://www.ditiezu.com/home.php?mod=spacecp&ac=credit\")"]],
            innerHTML: "<span class='mi'>person</span><span>����</span>"
        });
        if (document.body.classList.contains("pg_register"))
            accountPage.classList.add("theme-color");
        else if (document.body.innerHTML.includes("δ������"))
            messagePage.classList.add("theme-color");
        else
            mainPage.classList.add("theme-color");
        bottomBar.append(mainPage);
        bottomBar.append(messagePage);
        bottomBar.append(accountPage);
        document.body.append(bottomBar);
    }
};

window.notificationDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com\")' class='mi theme-color ic-back'>chevron_left</span><span>������Ϣ</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let bottomSelector = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com/home.php?mod=space&do=notice\")'>δ����Ϣ</span><span onclick='loadURL(\"http://www.ditiezu.com/home.php?mod=space&do=notice&isread=1\")'>�Ѷ���Ϣ</span>",
        attr: [["id", "bottomSelector"]]
    });
    app.append(bottomSelector);
    if (document.body.innerHTML.includes("��ʱû��������"))
        app.append(cE({type: "div", attr: [["class", "pg-app-noNewNotification"]], innerText: "��ʱû��������"}));
    let wrap = cE({type: "div", attr: [["id", "pg-app-notification"]]});
    [...pg.$(".nts>dl.cl")].map(i => [i.children[0].children[0].src === undefined ? i.children[0].children[0].children[0].src : i.children[0].children[0].src, i.children[1].children[1].innerText, i.children[2].innerHTML.trim().replace(/\n/, "").replace(/&nbsp;/, ""), i]).forEach(e => {
        let originalURL = "";
        [...e[3].children].forEach(i => {
            if (i.tagName === "A" && i.src.indexOf("space") === -1)
                originalURL = i.src;
        });
        let notification = cE({
            type: "div",
            attr: [["class", "pg-notification"], ["onclick", "loadURL(\'" + originalURL + "\')"]]
        });
        notification.append(cE({type: "img", attr: [["src", e[0]]]}));
        let notify = cE({type: "div", attr: [["class", "main-info"]]});
        notify.append(cE({type: "p", attr: [["class", "pg-sendTime"]], innerText: e[1]}));
        notify.append(cE({type: "p", attr: [["class", "pg-notifyContent"]], innerHTML: e[2]}));
        notification.append(notify);
        wrap.append(notification);
    });
    app.append(wrap);
    document.body.append(app);
    system.onready();
};

window.reviewDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"files:\\\android_assets\admin.html\")' class='mi theme-color ic-back'>chevron_left</span><span>�������� - <span class='mi'>explicit</span>��˹���</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let bottomSelector = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com/forum.php?mod=modcp&action=moderate&op=threads\")'>����</span><span onclick='loadURL(\"http://www.ditiezu.com/forum.php?mod=modcp&action=moderate&op=replies\")'>�ظ�</span>",
        attr: [["id", "bottomSelector"]]
    });
    app.append(bottomSelector);
    let reviewWrap = cE({type: "div", attr: [["id", "pg-admin-review"]]});
    [...pg.$(".um[id^='pid_']")].map(i => i.children).forEach(e => {
        let review = cE({type: "div", attr: [["class", "review"]]});
        review.append(cE({
            type: "div",
            innerText: e[0].children[2].innerText + " > " + e[0].children[3].innerText,
            attr: [["class", "pg-review-belong"]]
        })); // ������� > ����
        review.append(cE({type: "div", innerHTML: e[1].innerHTML, attr: [["class", "pg-review-author"]]})); // �������� - ����ʱ��
        review.append(cE({type: "div", innerHTML: e[2].innerHTML, attr: [["class", "pg-review-content"]]})); // ��������
        let reviewCtrl = cE({type: "div", attr: [["class", "pg-review-ctrl"]]});
        let submit = cE({type: "span", innerHTML: "ͨ��", attr: [["class", "pg-review-submit"]]});
        submit.onclick = () => {
            e[0].children[0].children[0].click();
        };
        reviewCtrl.append(submit);
        let deletePost = cE({type: "span", innerHTML: "ɾ��", attr: [["class", "pg-review-delete"]]});
        deletePost.onclick = () => {
            e[0].children[0].children[2].click();
        };
        reviewCtrl.append(deletePost);
        let ignore = cE({type: "span", innerHTML: "����", attr: [["class", "pg-review-ignore"]]});
        ignore.onclick = () => {
            e[0].children[0].children[4].click();
        };
        reviewCtrl.append(ignore);
        let expand = cE({type: "span", innerHTML: "ͨ��", attr: [["class", "pg-review-expand"]]});
        expand.onclick = () => {
            e[0].children[0].children[6].click();
        };
        reviewCtrl.append(expand);
        review.append(reviewCtrl); // ��������
        reviewWrap.append(review);
    });
    app.append(reviewWrap);
    document.body.append(app);
    system.onready();
};

window.userCtrlDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"files:\\\android_assets\admin.html\")' class='mi theme-color ic-back'>chevron_left</span><span>�������� - <span class='mi'>supervisor_account</span>�û�����</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let reviewWrap = cE({type: "div", attr: [["id", "pg-admin-userCtrl"]]});
    let urname = cE({type: "div", attr: [["contenteditable", "true"], ["class", "pg-userCtrl-urname"]]});
    let urid = cE({type: "div", attr: [["contenteditable", "true"], ["class", "pg-userCtrl-urid"]], innerText: "(��ѡ)"});
    urid.onclick = () => {
        if (urid.innerText === "(��ѡ)") {
            urid.innerText = "";
            urid.onclick = () => {
            }
        }
    };
    let ursubmit = cE({type: "div", attr: [["class", "pg-userCtrl-ursubmit"]], innerText: "����"});
    ursubmit.onclick = () => {
        pg.$("td>input")[1].value = urname.innerText;
        pg.$("td>input")[2].value = urid.innerText;
        pg.$("#searchsubmit")[0].click();
    };
    reviewWrap.append(urname);
    reviewWrap.append(urid);
    reviewWrap.append(ursubmit);
    if (pg.$(".schresult").length !== 0) {
        reviewWrap.append();
        let usrInfo = cE({type: "div"});
        let e = [...document.querySelectorAll(".schresult>table>tbody")].map(i => [i.children[0].children[1].children[0].children[0].children[0], i.children[1].children[1].children[0].innerText, i.children[2].children[1].children[0].children[1], i.children[3].children[1].children[0], i.children[4].children[1].children[0]])[0];
        usrInfo.append(cE({type: "img", attr: [["src", e[0].children[0].children[0].src]]}));
        usrInfo.append(cE({
            type: "p",
            innerHTML: "<span>" + e[0].children[1].children[0].innerText + " - " + e[0].children[1].children[1].innerText + "</span><span>" + e[0].children[1].children[2].innerText + "</span>"
        }));
        let usrStatusChange = cE({type: "div", innerText: "���Ϊ��\t" + e[1], attr: [["class", "usrStatusChange"]]});
        let duration = cE({
            type: "div",
            attr: [["contenteditable", "true"], ["class", "pg-userCtrl-duration"]],
            innerText: "(����)"
        });
        duration.onclick = () => {
            if (duration.innerText === "(����)") {
                duration.innerText = "";
                duration.onclick = () => {
                }
            }
        };
        let operationDescription = cE({
            type: "div",
            attr: [["contenteditable", "true"], ["class", "pg-userCtrl-operationDescription"]]
        });
        let submitOperation = cE({type: "div", attr: [["class", "pg-userCtrl-ursubmit"]], innerText: "ȷ�����ϲ���"});
        reviewWrap.append(usrInfo);
        reviewWrap.append(usrStatusChange);
        reviewWrap.append(duration);
        reviewWrap.append(operationDescription);
        reviewWrap.append(submitOperation);
        duration.onkeypress = (function (e) {
            if (isNaN(String.fromCharCode(e.which))) e.preventDefault();
        });
        submitOperation.onclick = () => {
            e[2].value = duration.innerText;
            e[3].value = operationDescription.innerHTML;
            e[4].click();
        }
    }
    app.append(reviewWrap);
    document.body.append(app);
    system.onready();
};

window.threadCtrlDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"files:\\\android_assets\admin.html\")' class='mi theme-color ic-back'>chevron_left</span><span>�������� - <span class='mi'>forum</span>�������</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let bottomSelector = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com/forum.php?mod=modcp&action=thread&op=thread\")'>�������</span><span onclick='loadURL(\"http://www.ditiezu.com/forum.php?mod=modcp&action=recyclebin\")'>�������վ</span>",
        attr: [["id", "bottomSelector"]]
    });
    if (document.body.innerHTML.includes("�ָ�"))
        bottomSelector.children[1].classList.add("theme-color");
    else bottomSelector.children[0].classList.add("theme-color");
    app.append(bottomSelector);
    let reviewWrap = cE({type: "div", attr: [["id", "pg-admin-postCtrl"]]});
    let forum = cE({type: "div", attr: [["class", "pg-postCtrl-forum"]], innerText: pg.$("#fid_ctrl")[0].innerText});
    forum.onclick = () => {
        pg.$("#fid_ctrl")[0].click();
        let forums = [...pg.$("#fid_ctrl_menu")[0].children[0].children].map(i => i.innerText);
        pg.select("��ѡ����Ҫ��ѯ�İ��", forums, forum.innerText, (e) => {
            forum.innerText = e;
            pg.$("#fid_ctrl_menu")[0].children[0].children[[...pg.$("#fid_ctrl_menu")[0].children[0].children].map(i => i.innerText).indexOf(e)].click()
        }, "���·�������İ��");
        return false;
    };
    let type = cE({type: "div", attr: [["class", "pg-postCtrl-type"]], innerText: "(��ѡ)��������"});
    type.onclick = () => {
        pg.$("#threadoption_ctrl")[0].click();
        let types = [...pg.$("#threadoption_ctrl_menu")[0].children[0].children].map(i => i.innerText);
        pg.select("��ѡ����Ҫ��ѯ����������", types, forum.innerText, (e) => {
            type.innerText = e;
            pg.$("#threadoption_ctrl_menu")[0].children[0].children[[...pg.$("#threadoption_ctrl_menu")[0].children[0].children].map(i => i.innerText).indexOf(e)].click()
        }, "���·������ѯ������");
        return false;
    };
    let postAuthor = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-postAuthor"]],
        innerText: "(��ѡ)"
    });
    postAuthor.onclick = () => {
        if (postAuthor.innerText === "(��ѡ)") {
            postAuthor.innerText = "";
            postAuthor.onclick = () => {
            }
        }
    };
    postAuthor.oninput = () => {
        pg.$("td>input.px:not(.vm)")[0].value = postAuthor.innerText;
    };
    let postTime = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-postTime"]],
        innerText: "(��ѡ) ��ʽ��YYYY-MM-DD===YYYY-MM-DD"
    });
    postTime.onclick = () => {
        if (postTime.innerText === "(��ѡ) ��ʽ��YYYY-MM-DD===YYYY-MM-DD") {
            postTime.innerText = "";
            postTime.onclick = () => {
            }
        }
    };
    postTime.oninput = () => {
        pg.$("td>input.px:not(.vm)")[1].value = postTime.innerText.split("===")[0];
        if (postTime.innerText.split("===").length > 1)
            pg.$("td>input.px:not(.vm)")[2].value = postTime.innerText.split("===")[1];
    };
    let postTitleKeyword = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-postTitleKeyword"]],
        innerText: "(��ѡ)"
    });
    postTitleKeyword.onclick = () => {
        if (postTitleKeyword.innerText === "(��ѡ)") {
            postTitleKeyword.innerText = "";
            postTitleKeyword.onclick = () => {
            }
        }
    };
    postTitleKeyword.oninput = () => {
        pg.$("td>input.px:not(.vm)")[3].value = postTitleKeyword.innerText;
    };
    let viewTimes = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-viewTimes"]],
        innerText: "(��ѡ) ��ʽ��YYYY-MM-DD===YYYY-MM-DD"
    });
    viewTimes.onclick = () => {
        if (viewTimes.innerText === "(��ѡ) ��ʽ��YYYY-MM-DD===YYYY-MM-DD") {
            viewTimes.innerText = "";
            viewTimes.onclick = () => {
            }
        }
    };
    viewTimes.oninput = () => {
        pg.$("td>input.px:not(.vm)")[4].value = viewTimes.innerText.split("===")[0];
        if (postTime.innerText.split("===").length > 1)
            pg.$("td>input.px:not(.vm)")[5].value = viewTimes.innerText.split("===")[1];
    };
    let noview = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-noview"]],
        innerText: "(��ѡ) "
    });
    noview.onclick = () => {
        if (noview.innerText === "(��ѡ) ") {
            noview.innerText = "";
            noview.onclick = () => {
            }
        }
    };
    noview.oninput = () => {
        pg.$("td>input.px:not(.vm)")[6].value = noview.innerText;
    };
    let replyTimes = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-replyTimes"]],
        innerText: "(��ѡ) ��ʽ����ֵ1-��ֵ2"
    });
    replyTimes.onclick = () => {
        if (replyTimes.innerText === "(��ѡ) ��ʽ����ֵ1-��ֵ2") {
            replyTimes.innerText = "";
            replyTimes.onclick = () => {
            }
        }
    };
    replyTimes.oninput = () => {
        pg.$("td>input.px:not(.vm)")[7].value = replyTimes.innerText.split("===")[0];
        if (postTime.innerText.split("===").length > 1)
            pg.$("td>input.px:not(.vm)")[8].value = replyTimes.innerText.split("===")[1];
    };
    let postSubmit = cE({type: "div", attr: [["class", "pg-postCtrl-submit"]], innerText: "����"});
    postSubmit.onclick = () => {
        pg.$("#searchsubmit")[0].click();
    };
    reviewWrap.append(forum);
    reviewWrap.append(type);
    reviewWrap.append(postAuthor);
    reviewWrap.append(postTime);
    reviewWrap.append(postTitleKeyword);
    reviewWrap.append(viewTimes);
    reviewWrap.append(noview);
    reviewWrap.append(replyTimes);
    reviewWrap.append(postSubmit);
    if (document.body.innerText.includes("��ѡ������й���"))
        reviewWrap.append(cE({type: "div", attr: "pg-postCtrl-selectForumAlert", innerText: "��ѡ����"}));
    else if (pg.$("#moderate").length !== 0) {
        let threadSelectHistory = null;
        let threadList = cE({type: "div", attr: [["class", "pg-postCtrl-threadList"]]});
        [...pg.$("#moderate table>tbody:not(:first-child):not(:last-child)>tr")].map(i => i.children).forEach(e => {
            let thread = cE({type: "div", attr: [["class", "pg-postCtrl-threadList-thread"]]});
            let postName = cE({
                type: "p",
                attr: [["class", "pg-postCtrl-threadList-postName"]],
                innerText: e[2].innerText
            });
            thread.append(postName);
            thread.append(cE({
                type: "span", attr: [["class", "pg-postCtrl-threadList-authorName"]],
                innerText: e[3].children[0].innerText
            }));
            thread.append(cE({
                type: "span", attr: [["class", "pg-postCtrl-threadList-postTime"]],
                innerText: e[3].children[1].innerText
            }));
            thread.append(cE({
                type: "span", attr: [["class", "pg-postCtrl-threadList-replyTimes"]],
                innerText: e[4].children[0].innerText + "�ظ� - "
            }));
            thread.append(cE({
                type: "span", attr: [["class", "pg-postCtrl-threadList-viewTimes"]],
                innerText: e[4].children[1].innerText + "�鿴"
            }));
            thread.append(cE({
                type: "br"
            }));
            thread.append(cE({
                type: "span", attr: [["class", "pg-postCtrl-threadList-lastAuthor"]],
                innerText: "�����" + e[5].children[0].innerText + " ������ "
            }));
            thread.append(cE({
                type: "span", attr: [["class", "pg-postCtrl-threadList-lastTime"]],
                innerText: e[5].children[1].innerText
            }));
            threadList.append(thread);
            if (document.body.innerHTML.includes("�ָ�")) {
                thread.onclick = () => {
                    if (threadSelectHistory !== null)
                        threadSelectHistory.click();
                    e[1].children[0].click();
                    threadSelectHistory = e[1].children[0];
                    pg.select("��ѡ���������ӵĲ���", ["ȡ��ѡ�񣬹رմ���", "�ָ�"], "ȡ��ѡ�񣬹رմ���", (val) => {
                        if (val !== "ȡ��ѡ�񣬹رմ���") {
                            pg.$("#moderate table>tbody:last-child>tr button")[0].click()
                        }
                    }, "��ǰѡ�У�" + postName.innerText);
                };
            } else
                thread.onclick = () => {
                    if (threadSelectHistory !== null)
                        threadSelectHistory.click();
                    e[1].children[0].click();
                    threadSelectHistory = e[1].children[0];
                    pg.select("��ѡ���������ӵĲ���", ["ȡ��ѡ�񣬹رմ���", "ɾ��", "�ƶ�", "����", "�ö�", "����", "����", "�����³�", "�رմ�"], "ȡ��ѡ�񣬹رմ���", (val) => {
                        if (val !== "ȡ��ѡ�񣬹رմ���") {
                            pg.$("#mdly :not(:first-child) a")[["ɾ��", "�ƶ�", "����", "�ö�", "����", "����", "�����³�", "�رմ�"].indexOf(val)].click();
                        }
                    }, "��ǰѡ�У�" + postName.innerText);
                };
        });
        reviewWrap.append(threadList);
    }
    app.append(reviewWrap);
    document.body.append(app);
    system.onready();
};

window.postCtrlDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"files:\\\android_assets\admin.html\")' class='mi theme-color ic-back'>chevron_left</span><span>�������� - <span class='mi'>comment</span>�ظ�����</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let bottomSelector = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"http://www.ditiezu.com/forum.php?mod=modcp&action=thread&op=post\")'>�ظ�����</span><span onclick='loadURL(\"http://www.ditiezu.com/forum.php?mod=modcp&action=recyclebinpost\")'>��������վ</span>",
        attr: [["id", "bottomSelector"]]
    });
    if (document.body.innerHTML.includes("�ָ�"))
        bottomSelector.children[1].classList.add("theme-color");
    else bottomSelector.children[0].classList.add("theme-color");
    app.append(bottomSelector);
    let reviewWrap = cE({type: "div", attr: [["id", "pg-admin-postCtrl"]]});
    let forum = cE({type: "div", attr: [["class", "pg-postCtrl-forum"]], innerText: pg.$("#fid_ctrl")[0].innerText});
    forum.onclick = () => {
        pg.$("#fid_ctrl")[0].click();
        let forums = [...pg.$("#fid_ctrl_menu")[0].children[0].children].map(i => i.innerText);
        pg.select("��ѡ����Ҫ��ѯ�İ��", forums, forum.innerText, (e) => {
            forum.innerText = e;
            pg.$("#fid_ctrl_menu")[0].children[0].children[[...pg.$("#fid_ctrl_menu")[0].children[0].children].map(i => i.innerText).indexOf(e)].click()
        }, "���·�������İ��");
        return false;
    };
    let postAuthor = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-postAuthor"]],
        innerText: "(��ѡ)"
    });
    postAuthor.onclick = () => {
        if (postAuthor.innerText === "(��ѡ)") {
            postAuthor.innerText = "";
            postAuthor.onclick = () => {
            }
        }
    };
    postAuthor.oninput = () => {
        pg.$("td>input.px:not(.vm)")[0].value = postAuthor.innerText;
    };
    let postTime = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-postTime"]],
        innerText: "(��ѡ) ��ʽ��YYYY-MM-DD===YYYY-MM-DD"
    });
    postTime.onclick = () => {
        if (postTime.innerText === "(��ѡ) ��ʽ��YYYY-MM-DD===YYYY-MM-DD") {
            postTime.innerText = "";
            postTime.onclick = () => {
            }
        }
    };
    postTime.oninput = () => {
        pg.$("td>input.px:not(.vm)")[1].value = postTime.innerText.split("===")[0];
        if (postTime.innerText.split("===").length > 1)
            pg.$("td>input.px:not(.vm)")[2].value = postTime.innerText.split("===")[1];
    };
    let postKeyword = cE({
        type: "div",
        attr: [["contenteditable", "true"], ["class", "pg-postCtrl-postKeyword"]],
        innerText: "(��ѡ)"
    });
    postKeyword.onclick = () => {
        if (postKeyword.innerText === "(��ѡ)") {
            postKeyword.innerText = "";
            postKeyword.onclick = () => {
            }
        }
    };
    postKeyword.oninput = () => {
        pg.$("td>input.px:not(.vm)")[3].value = postKeyword.innerText;
    };
    let postSubmit = cE({type: "div", attr: [["class", "pg-postCtrl-submit"]], innerText: "����"});
    postSubmit.onclick = () => {
        pg.$("#searchsubmit")[0].click();
    };
    reviewWrap.append(forum);
    reviewWrap.append(postAuthor);
    reviewWrap.append(postTime);
    reviewWrap.append(postSubmit);
    if (document.body.innerText.includes("������������"))
        reviewWrap.append(cE({type: "div", attr: "pg-postCtrl-selectForumAlert", innerText: "������������"}));
    else if (pg.$("#moderate>tr:not(:first-child):not(:last-child)").length !== 0) {
        let threadSelectHistory = null;
        let postList = cE({type: "div", attr: [["class", "pg-postCtrl-postList"]]});
        [...pg.$("#moderate table>tbody>tr:not(:first-child):not(:last-child)")].map(i => i.children).forEach((e, index) => {
            let post = cE({type: "div", attr: [["class", "pg-postCtrl-postList-post"]]});
            let postName = cE({
                type: "p",
                attr: [["class", "pg-postCtrl-postList-postName"]],
                innerText: e[0].innerText.replace(/\n/, " - (��������: ") + " )"
            });
            post.append(postName);
            let authorName = cE({
                type: "span",
                attr: [["class", "pg-postCtrl-postList-authorName"]],
                innerText: e[2].children[0].innerText
            });
            post.append(authorName);
            let postTime = cE({
                type: "span",
                attr: [["class", "pg-postCtrl-postList-postTime"]],
                innerText: e[2].children[1].innerText
            });
            post.append(postTime);
            postList.append(post);
            if (document.body.innerHTML.includes("�ָ�")) {
                post.onclick = () => {
                    if (threadSelectHistory !== null)
                        threadSelectHistory.click();
                    pg.$("tbody:not(:last-child):not(:first-child) .o input")[index].click();
                    threadSelectHistory = e[1].children[0];
                    pg.select("��ѡ�����Իظ��Ĳ���", ["ȡ��ѡ�񣬹رմ���", "�ָ�"], "ȡ��ѡ�񣬹رմ���", (val) => {
                        if (val !== "ȡ��ѡ�񣬹رմ���") {
                            pg.$("#moderate table>tbody:last-child>tr button")[0].click()
                        }
                    }, "��ǰѡ�У�" + postName.innerText);
                };
            } else
                post.onclick = () => {
                    loadURL(e[0].children[0].href);
                };
        });
        reviewWrap.append(postList);
    } else if (pg.$("#moderate table>tbody:not(:first-child):not(:last-child)").length !== 0) {
        let threadSelectHistory = null;
        let postList = cE({type: "div", attr: [["class", "pg-postCtrl-postList"]]});
        [...pg.$("#moderate table>tbody:not(:first-child):not(:last-child) tr")].map(i => i.children).forEach((e, index) => {
            let post = cE({type: "div", attr: [["class", "pg-postCtrl-postList-post"]]});
            let postName = cE({
                type: "p",
                attr: [["class", "pg-postCtrl-postList-postName"]],
                innerText: e[1].innerText
            });
            post.append(postName);
            let authorName = cE({
                type: "span",
                attr: [["class", "pg-postCtrl-postList-authorName"]],
                innerText: e[2].children[0].innerText
            });
            post.append(authorName);
            let postTime = cE({
                type: "span",
                attr: [["class", "pg-postCtrl-postList-postTime"]],
                innerText: e[5].innerText
            });
            post.append(postTime);
            postList.append(post);
            if (document.body.innerHTML.includes("�ָ�")) {
                post.onclick = () => {
                    if (threadSelectHistory !== null)
                        threadSelectHistory.click();
                    e[0].click();
                    threadSelectHistory = e[0];
                    pg.select("��ѡ�����Իظ��Ĳ���", ["ȡ��ѡ�񣬹رմ���", "�ָ�"], "ȡ��ѡ�񣬹رմ���", (val) => {
                        if (val !== "ȡ��ѡ�񣬹رմ���") {
                            pg.$("#moderate table>tbody:last-child>tr button")[0].click()
                        }
                    }, "��ǰѡ�У�" + postName.innerText);
                };
            } else
                post.onclick = () => {
                    loadURL(e[0].children[0].href);
                };
        });
        reviewWrap.append(postList);
    }

    app.append(reviewWrap);
    document.body.append(app);
    system.onready();
};

window.reportCtrlDisplay = () => {
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    let topName = cE({
        type: "div",
        innerHTML: "<span onclick='loadURL(\"files:\\\android_assets\admin.html\")' class='mi theme-color ic-back'>chevron_left</span><span>�������� - <span class='mi'>report</span>�ٱ�����</span>",
        attr: [["id", "topName"], ["class", "scrolled"]]
    });
    app.append(topName);
    let reviewWrap = cE({type: "div", attr: [["id", "pg-admin-reportCtrl"]]});
    let forum = cE({
        type: "div",
        attr: [["class", "pg-reportCtrl-forum"]],
        innerText: pg.$("#fid")[0][pg.$("#fid")[0].options.selectedIndex].innerText
    });
    forum.onclick = () => {
        let forums = [...pg.$("#fid option")].map(i => i.innerText);
        pg.select("��ѡ����Ҫ��ѯ�İ��", forums, forum.innerText, (e) => {
            forum.innerText = e;
            pg.$("#fid option")[[...pg.$("#fid option")].map(i => i.innerText).indexOf(e)].click()
        }, "���·�������İ��");
        return false;
    };
    let reportSubmit = cE({type: "div", attr: [["class", "pg-reportCtrl-submit"]], innerText: "����"});
    reportSubmit.onclick = () => {
        pg.$("#searchsubmit")[0].click();
    };
    reviewWrap.append(forum);
    reviewWrap.append(reportSubmit);
    if (document.body.innerText.includes("û���µľٱ���û��ѡ����"))
        reviewWrap.append(cE({type: "div", attr: "pg-reportCtrl-selectForumAlert", innerText: "û���µľٱ���û��ѡ����"}));
    else if (pg.$("#list_modcp_logs tbody tr:not(:last-child)").length !== 0) {
        let threadSelectHistory = null;
        let reportList = cE({type: "div", attr: [["class", "pg-reportCtrl-reportList"]]});
        [...pg.$("#list_modcp_logs tbody tr:not(:last-child)")].map(i => i.children).forEach(e => {
            let report = cE({type: "div", attr: [["class", "pg-reportCtrl-reportList-report"]]});
            let reportName = cE({
                type: "p",
                attr: [["class", "pg-reportCtrl-reportList-reportName"]],
                innerHTML: e[1].innerText.replace("forum.php?mod=redirect&goto=findpost&ptid=0&pid=", " PID ")
            });
            report.append(reportName);
            reportList.append(report);
            report.onclick = () => {
                if (threadSelectHistory !== null)
                    threadSelectHistory.click();
                e[0].click();
                threadSelectHistory = e[1].children[0];
                pg.select("��ѡ�����Ծٱ��Ĳ���", ["ȡ��ѡ�񣬹رմ���", "����"], "ȡ��ѡ�񣬹رմ���", (val) => {
                    if (val !== "ȡ��ѡ�񣬹رմ���") {
                        pg.$("#reportsubmit")[0].click()
                    }
                }, "��ǰѡ�У�" + reportName.innerText);
            };
        });
        reviewWrap.append(reportList);
    }
    app.append(reviewWrap);
    document.body.append(app);
    system.onready();
};