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
    let app = cE({type: "div", attr: [["id", "pg-app"]]});
    app.append(cE({type: "div", attr: [["class", "pg-backgroundImage"]]}));
    app.append(cE({type: "div", attr: [["class", "pg-backgroundFilter"]]}));
    {
        let appbar = cE({type: "div", attr: [["id", "pg-app-titleBar"]]});
        let appName = cE({type: "div", attr: [["class", "pg-titleName"]]});
        appName.append(cE({type: "div", attr: [["class", "city-icon-GZ"]]}));
        appName.append(cE({
            type: "div",
            innerHTML: "<span class='cn'>广州区</span><span class='en'>Guangzhou</span>",
            attr: [["class", "fidName"]]
        }));
        appbar.append(appName);
        app.append(appbar);
        let topName = cE({type: "div", innerText: "广州区", attr: [["id", "topName"]]});
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
            let lastPage = cE({type: "span", innerText: "last_page", attr: [["class", "mi nextPage"]]});
            lastPage.onclick = () => {
                loadThreadList(lastPage);
            };
            pgsBox.append(lastPage);
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
    let topName = cE({type: "div", innerText: threadSubject, attr: [["id", "topName"], ["class", "scrolled"]]});
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
        thread.append(cE({
            type: "div",
            attr: [["class", "postThreadContent"]],
            innerHTML: threadContent[1].innerHTML
        }));
        threadWrap.append(thread);
    });
    {
        let loadPostList = (page) => {
            loadURL("http://www.ditiezu.com/forum.php?mod=forumdisplay&tid=" + tid + "&page=" + page);
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
            let lastPage = cE({type: "span", innerText: "last_page", attr: [["class", "mi nextPage"]]});
            lastPage.onclick = () => {
                loadPostList(lastPage);
            };
            pgsBox.append(lastPage);
        }
        app.append(pgsBox)
    }
    app.append(threadWrap);
    document.body.append(app);
};