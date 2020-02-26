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
window.append = Node.prototype.append;
window.importScripts = (url, callback) => {
    let script = cE({type: "script", attr: [["src", url]]});
    document.body.append(script);
    callback !== undefined ? script.onload = script.onreadystatechange = () => {
        callback();
    } : void (0);
};

window.loadThread = (tid) => {
    console.log("W:\tRedirect to http://www.ditiezu.com/forum.php?mod=viewthread&tid=" + tid);
};

window.loadURL = (url) => {
    console.log("W:\tRedirect to " + url);
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
            loadURL(window.location.href.replace(/(page=).*?($)/, "page=" + page));
        };
        let pgsBox = cE({type: "div", attr: [["id", "pg-pgs"]]});
        let curPage = Int([...pg.$("#pgt>.pg>*")].filter(i => i.tagName === "STRONG")[0].innerText);
        let lastPage = Int([...pg.$("#pgt>.pg>*")].filter(i => i.classList.contains("last"))[0].innerText.substr(4));
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
        pgsBox.append(cE({type: "span", innerText: curPage}));
        if (curPage - 1 >= 1) {
            let page = cE({type: "span", innerText: (curPage - 1), attr: [["class", "mi page"]]});
            page.onclick = () => {
                loadThreadList(curPage - 1);
            };
            pgsBox.append(page);
        }
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
