/* Made by Penguin */
pg.stationList = {
    requireLib: ["stationlist", "stationnum", "stationinf"],
    data: {
        title: ["車站資訊", "车站信息", "駅の情報", "역 정보", "INFO"],
        topNav: true,
        topInput: true,
        topInputContent: ["你想要前往", "您想要前往", "到着駅を入力", "가고 싶다", "You'd like to go to..."], navBottom: 1
    },
    init: () => {
        if (system.get("dirfrom") !== "" && system.get("dirto") !== "") {
            let href = "makeRoute.html?start=" + Int(system.get("dirfrom")) + "&end=" + Int(system.get("dirto"));
            system.set("dirfrom", "");
            system.set("dirto", "");
            window.location.href = href;
        }
        let wrap = $("#pg-app-wrap")[0];
        wrap.appendChild(cE({type: "div", attr: [["id", "selectLine"], ["class", "selectLine"]]}));
        wrap.appendChild(cE({
            type: "div",
            attr: [["id", "selectStation"], ["class", "selectStation"]]
        }));
        pg.stationList.loadStationList();
        $("#selectLine>div").forEach((e) => {
            for (let i = 1; i < e.children.length; i++) {
                e.children[i].onclick = () => {
                    pg.stationList.collapseSL(e.children[i].children[0].getAttribute("class"));
                }
            }
        });
        let SearchInput = $(".nav-inputModel>[contenteditable='true']")[0];
        SearchInput.oninput = () => {
            SearchInput.innerHTML !== "" ? pg.stationList.search(SearchInput) : $("#ResultDisplay")[0].classList.contains("show") ? $("#ResultDisplay")[0].classList.remove("show") : void (0);
        };
    }, search: (a) => {
        let numList = [];
        s_inf.forEach(e => {
            e[0].join().toLowerCase().indexOf(a.innerHTML.toLowerCase()) !== -1 ? numList.push(s_inf.indexOf(e)) : void (0);
        });
        let result = $("#ResultDisplay")[0];
        result.classList.add("show");
        result.innerHTML = "";
        numList.forEach(e => {
            let wrap = cE({type: "div"});
            let r = s_inf[e];
            for (let i = 0; i < r[1].length; i++) {
                console.log(i, r[1][i]);
                wrap.appendChild(cE({
                    type: "span",
                    attr: [["class", "icon-" + globallist[linedata.indexOf(r[1][i])]]]
                }));
            }
            wrap.appendChild(cE({type: "span", innerText: r[0][cL].split("-")[0]}));
            wrap.onclick = () => {
                loadPage.require("stationinfo", e);
            };
            result.appendChild(wrap);
        });
    }, collapseSL: (name) => {
        name = name.substr(5);
        console.log(name);
        $("#selectStation .show").forEach((e) => {
            e.classList.remove("show");
        });
        $("#" + name)[0].classList.add("show");
    }, loadStationList: () => {
        let container = $("#selectLine")[0];
        for (let i = 0; i < linebelong.length; i++) {
            let subContainer = cE({type: "div"});
            let name = cE({type: "div"});
            name.innerText = linebelong[i].name[cL];
            subContainer.appendChild(name);
            for (let j = 0; j < linebelong[i].line.length; j++) {
                let line = cE({type: "div"});
                let span = cE({type: "span"});
                span.classList.add("icon-" + globallist[linebelong[i].line[j]]);
                line.appendChild(span);
                let name = cE({type: "span"});
                name.innerText = shortLinename[linebelong[i].line[j]][cL];
                line.appendChild(name);
                subContainer.appendChild(line);
            }
            container.appendChild(subContainer);
        }
        container = $("#selectStation")[0];
        for (let i = 0; i < s_list.length; i++) {
            let subContainer = cE({type: "div"});
            subContainer.id = globallist[i];
            let title = cE({type: "h2"});
            title.innerText = linename[i][cL];
            subContainer.appendChild(title);
            for (let j = 0, num = 0; j < s_list[i].station.length; j++) {
                let hasChild = false;
                if (typeof s_list[i].station[j][0] === "string") {
                    let subtitle = cE({type: "h3"});
                    subtitle.innerText = s_list[i].station[j][0];
                    subContainer.appendChild(subtitle);
                    hasChild = true;
                }
                let flag = false;
                for (let k = hasChild ? 1 : 0; k < s_list[i].station[j].length; k++, num++) {
                    let d = num;
                    if (num === 16 && i === 2 && !flag) {
                        d = 10;
                        num--;
                        flag = true;
                    }
                    if (num === 13 && i === 10 && !flag) {
                        d = 7;
                        num--;
                        flag = true;
                    }
                    let station = cE({type: "p"});
                    station.innerHTML = processPill(linedata[i], d + 1, globallist[i]) + "<span>" + s_list[i].station[j][k][cL].split("-")[0] + "</span>";
                    station.onclick = function () {
                        pg.stationList.loadStationInf(i, d)
                    };
                    subContainer.appendChild(station);
                }
            }
            container.appendChild(subContainer);
        }
        if (GetPara("lineid") !== "null" || GetPara("lineid") !== "")
            if (!isNaN(Int(GetPara("lineid"))))
                $("#" + globallist[Int(GetPara("lineid"))])[0].classList.add("show");
            else
                $("#Line1-GZ")[0].classList.add("show");
    }, loadStationInf: (line, num) => {
        loadPage.require("stationinfo", s_num[line][num] + "&referer=stationList&lineid=" + (line));
    }
};
/* Made by Penguin */
pg.index = {
    requireLib: ["stationlist", "stationnum"],
    data: {
        title: ["車站資訊", "车站信息", "駅の情報", "역 정보", "INFO"],
        topNav: true,
        topInput: true,
        topInputContent: ["你想要前往", "您想要前往", "到着駅を入力", "가고 싶다", "You'd like to go to..."], navBottom: 1
    },
    init: () => {

    }, loadStationList: () => {
        let container = $("#selectLine")[0];
        for (let i = 0; i < linebelong.length; i++) {
            let subContainer = cE({type: "div"});
            let name = cE({type: "div"});
            name.innerText = linebelong[i].name[cL];
            subContainer.appendChild(name);
            for (let j = 0; j < linebelong[i].line.length; j++) {
                let line = cE({type: "div"});
                let span = cE({type: "span"});
                span.classList.add("icon-" + globallist[linebelong[i].line[j]]);
                line.appendChild(span);
                let name = cE({type: "span"});
                name.innerText = shortLinename[linebelong[i].line[j]][cL];
                line.appendChild(name);
                subContainer.appendChild(line);
            }
            container.appendChild(subContainer);
        }
        container = $("#selectStation")[0];
        for (let i = 0; i < s_list.length; i++) {
            let subContainer = cE({type: "div"});
            subContainer.id = globallist[i];
            let title = cE({type: "h2"});
            title.innerText = linename[i][cL];
            subContainer.appendChild(title);
            for (let j = 0, num = 0; j < s_list[i].station.length; j++) {
                let hasChild = false;
                if (typeof s_list[i].station[j][0] === "string") {
                    let subtitle = cE({type: "h3"});
                    subtitle.innerText = s_list[i].station[j][0];
                    subContainer.appendChild(subtitle);
                    hasChild = true;
                }
                for (let k = hasChild ? 1 : 0; k < s_list[i].station[j].length; k++, num++) {
                    let station = cE({type: "p"});
                    let d = num;
                    station.innerHTML = processPill(linedata[i], d + 1, globallist[i]) + "<span>" + s_list[i].station[j][k][cL] + "</span>";
                    station.onclick = function () {
                        console.log(i, d);
                        pg.stationList.loadStationInf(i, d)
                    };
                    subContainer.appendChild(station);
                }
            }
            container.appendChild(subContainer);
        }
        $("#Line1-GZ")[0].classList.add("show");
    }, loadStationInf: (line, num) => {
        console.log(s_num[line][num]);
        loadPage.require("stationinfo", s_num[line][num]);
    }
};
/* Made by Penguin */
pg.stationinfo = {
    requireLib: ["stationnum"],
    data: {
        title: ["車站資訊", "车站信息", "駅の情報", "역 정보", "INFO"],
        topNav: false,
        topInput: false, navBottom: 1
    },
    init: (s_numInsert) => {
        if (Int(GetPara("stationid")) > 236 || isNaN(Int(GetPara("stationid")))) {
            showWarning(string.emptyWikiData[cL], 1000);
            setTimeout(() => {
                loadPage.require("stationList")
            }, 1000);
            return 0;
        }
        if (isMap && isAMap) {
            importScripts("https://webapi.amap.com/maps?v=1.4.15&key=243038e05906027e08d538bb3b076eef", () => {
                    let a = cE({
                        type: "script",
                        attr: [["src", "./assets/data/splitInfo/" + GetPara("stationid") + ".js"]]
                    });
                    document.body.appendChild(a);
                    a.onreadystatechange = a.onload = function () {
                        window.s_inf_tmp = eval("s_inf_" + GetPara("stationid"));
                        let wrap = $("#pg-app-wrap")[0];
                        let topTab = cE({type: "div", attr: [["class", "topTab"]]});
                        topTab.appendChild(cE({type: "div", attr: [["class", "inner"]]}));
                        wrap.appendChild(topTab);
                        let InfoTab = cE({type: "div", attr: [["id", "InfoTab"]]});
                        let cs = cE({type: "div", attr: [["class", "active"], ["id", "CurrentStation"]], innerHTML: ""});
                        InfoTab.appendChild(cs);
                        InfoTab.appendChild(cE({type: "div", attr: [["id", "facilitiesList"]]}));
                        wrap.appendChild(InfoTab);
                        let num = typeof GetPara("stationid") !== "undefined" ? GetPara("stationid") : typeof GetPara("stationid") !== "undefined" ? GetPara("stationid") === null || GetPara("stationid") === "" ? 0 : GetPara("stationid") : 0;
                        if (s_inf_tmp.exitNum === undefined) {
                            showWarning(string.emptyWikiData[cL]);
                            loadPage.require("stationList")
                        }
                        pg.stationinfo.showstationinf(num, 0);
                        let via = s_inf_tmp.via;
                        let g = cE({type: "div", attr: [["class", "shortInfo"]]});
                        let mapCont = cE({type: "div", attr: [["class", "MapContainer"]]});
                        let dir_from = cE({type: "div", attr: [["id", "dir_from"]]});
                        dir_from.appendChild(cE({type: "div", innerText: "directions"}));
                        dir_from.appendChild(cE({type: "span", innerText: string.dirFrom[cL]}));
                        dir_from.onclick = () => {
                            showWarning(string.successfullyLoadStart[cL]);
                            system.set("dirfrom", num);
                            setTimeout(() => {
                                if (GetPara("referer") === "routeMap")
                                    window.location.href = "routeMap.html";
                                if (GetPara("referer") === "stationList")
                                    window.location.href = "index.html?type=stationList&lineid=" + GetPara("lineid");
                                else
                                    loadPage.require("stationList");
                            }, 1000);
                        };
                        mapCont.appendChild(dir_from);
                        let dir_to = cE({type: "div", attr: [["id", "dir_to"]]});
                        dir_to.appendChild(cE({type: "div", innerText: "directions_subway"}));
                        dir_to.appendChild(cE({type: "span", innerText: string.dirTo[cL]}));
                        dir_to.onclick = () => {
                            showWarning(string.successfullyLoadEnd[cL]);
                            system.set("dirto", num);
                            setTimeout(() => {
                                if (GetPara("referer") === "routeMap")
                                    window.location.href = "routeMap.html";
                                if (GetPara("referer") === "stationList")
                                    window.location.href = "index.html?type=stationList&lineid=" + GetPara("lineid");
                                else
                                    loadPage.require("stationList");
                            }, 1000);
                        };
                        mapCont.appendChild(dir_to);
                        mapCont.appendChild(cE({type: "div", attr: [["id", "MapContainer"]]}));
                        cs.appendChild(mapCont);
                        {
                            let flocation = processLocation(s_inf_tmp.location[0].toString(), s_inf_tmp.location[1].toString());
                            let locationWrap = cE({type: "p", attr: [["id", "Location"]]});
                            locationWrap.appendChild(cE({
                                type: "span",
                                attr: [["id", "LocationDesc"]],
                                innerText: string.locationDesc[cL]
                            }));
                            let location = cE({type: "span"});
                            location.appendChild(cE({
                                type: "span",
                                attr: [["id", "LocationLng"]],
                                innerText: flocation[0]
                            }));
                            location.appendChild(cE({
                                type: "span",
                                attr: [["id", "LocationLat"]],
                                innerText: flocation[1]
                            }));
                            locationWrap.appendChild(location);
                            g.appendChild(locationWrap);
                        } // Location
                        {
                            let Line = cE({type: "p", attr: [["class", "shouldCrossLine"]]});
                            Line.appendChild(cE({
                                type: "span",
                                innerText: string.lineDesc[cL]
                            }));
                            let viaWrap = cE({type: "span"});
                            for (let i = 0; i < via.length; i++) {
                                let wrap = cE({type: "span"});
                                wrap.appendChild(cE({
                                    type: "span",
                                    attr: [["class", "icon-" + globallist[linedata.indexOf(via[i])]]]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerText: shortLinename[linedata.indexOf(via[i])][cL]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerHTML: processPill(via[i], s_num[linedata.indexOf(s_inf_tmp.via[0])].indexOf(Int(num)) + 1, globallist[linedata.indexOf(via[i])])
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerHTML: ["開業時間：", "开通时间：", "開業時間：", "", "Since "][cL] + s_inf_tmp.openTime[i].replace(/-/, ["年", "年", "年", "", "."][cL]).replace(/=/, ["月", "月", "月", "", "."][cL]).replace(/_/, ["日", "日", "日", "", ""][cL])
                                }));
                                viaWrap.appendChild(wrap);
                            }
                            Line.appendChild(viaWrap);
                            g.appendChild(Line);
                        } // Line Passed
                        if (typeof s_inf_tmp.transferType !== "undefined") {
                            let Transfer = cE({type: "p"});
                            Transfer.appendChild(cE({
                                type: "span",
                                innerText: string.transferDesc[cL]
                            }));
                            let viaWrap = cE({type: "span"});
                            for (let i = 0; i < s_inf_tmp.transferType.length; i++) {
                                viaWrap.appendChild(cE({
                                    type: "span",
                                    innerText: string.transferInfo[s_inf_tmp.transferType[i]]
                                }));
                            }
                            Transfer.appendChild(viaWrap);
                            g.appendChild(Transfer);
                        } // Transfer Type
                        {
                            let Structure = cE({type: "p", attr: [["id", "StationStructure"]]});
                            Structure.appendChild(cE({
                                type: "span",
                                innerText: string.structureDesc[cL]
                            }));
                            let structureWrap = cE({type: "span"});
                            for (let i = 0; i < via.length; i++) {
                                let wrap = cE({type: "span"});
                                wrap.appendChild(cE({
                                    type: "span",
                                    attr: [["class", "icon-" + globallist[linedata.indexOf(via[i])]]]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerText: shortLinename[linedata.indexOf(via[i])][cL] + ": " + string.structureInfo[s_inf_tmp.structureType[i]][cL]
                                }));
                                structureWrap.appendChild(wrap);
                            }
                            Structure.appendChild(structureWrap);
                            g.appendChild(Structure);
                        } // Structure
                        {
                            let Hall = cE({type: "p", attr: [["id", "StationHall"]]});
                            Hall.appendChild(cE({
                                type: "span",
                                innerText: string.hallDesc[cL]
                            }));
                            let hallWrap = cE({type: "span"});
                            for (let i = 0; i < via.length; i++) {
                                let wrap = cE({type: "span"});
                                wrap.appendChild(cE({
                                    type: "span",
                                    attr: [["class", "icon-" + globallist[linedata.indexOf(via[i])]]]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerText: shortLinename[linedata.indexOf(via[i])][cL] + ": " + string.hallInfo[s_inf_tmp.hallType[i]][cL]
                                }));
                                hallWrap.appendChild(wrap);
                            }
                            Hall.appendChild(hallWrap);
                            g.appendChild(Hall);
                        } // Hall
                        {
                            let Platform = cE({type: "p", attr: [["id", "StationPlatform"]]});
                            Platform.appendChild(cE({
                                type: "span",
                                innerText: string.platformDesc[cL]
                            }));
                            let platformWrap = cE({type: "span"});
                            for (let i = 0; i < via.length; i++) {
                                let wrap = cE({type: "span"});
                                wrap.appendChild(cE({
                                    type: "span",
                                    attr: [["class", "icon-" + globallist[linedata.indexOf(via[i])]]]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerText: shortLinename[linedata.indexOf(via[i])][cL] + ": " + string.platformInfo[s_inf_tmp.platformType[i]][cL]
                                }));
                                platformWrap.appendChild(wrap);
                            }
                            Platform.appendChild(platformWrap);
                            g.appendChild(Platform);
                        } // Platform
                        {
                            let Exit = cE({type: "p", attr: [["id", "StationExit"]]});
                            Exit.appendChild(cE({
                                type: "span",
                                innerText: string.exitNum[cL]
                            }));
                            let exitWrap = cE({type: "span"});
                            let wrap = cE({type: "span"});
                            wrap.appendChild(cE({
                                type: "span",
                                innerText: s_inf_tmp.exitNum[0]
                            }));
                            exitWrap.appendChild(wrap);
                            Exit.appendChild(exitWrap);
                            g.appendChild(Exit);
                        } // Exit
                        {
                            let ServiceTime = cE({type: "p", attr: [["id", "ServiceTime"]]});
                            ServiceTime.appendChild(cE({
                                type: "span",
                                innerText: string.serviceTimeDesc[cL]
                            }));
                            let serviceTimeWrap = cE({type: "span"});
                            let wrap = cE({type: "span"});
                            wrap.appendChild(cE({
                                type: "span",
                                innerText: s_inf_tmp.serviceTime.replace(/ND/, " (" + ["次日", "次日", "翌日", "", "Next day"][cL] + ")")
                            }));
                            serviceTimeWrap.appendChild(wrap);
                            ServiceTime.appendChild(serviceTimeWrap);
                            g.appendChild(ServiceTime);
                        }
                        // ServiceTime
                        {
                            let FirstTrain = cE({type: "p", attr: [["id", "FirstTrain"]]});
                            FirstTrain.appendChild(cE({
                                type: "span",
                                innerText: string.FirstTrainDesc[cL]
                            }));
                            let firstTrainWrap = cE({type: "span"});
                            for (let i = 0; i < via.length; i++) {
                                let wrap = cE({type: "span"});
                                wrap.appendChild(cE({
                                    type: "span",
                                    attr: [["class", "icon-" + globallist[linedata.indexOf(via[i])]]]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerText: shortLinename[linedata.indexOf(via[i])][cL] + ": "
                                }));
                                for (let j = 0; j < s_inf_tmp.firstTrain[i].length; j++)
                                    wrap.appendChild(cE({
                                        type: "span",
                                        innerText: routedirection[linedata.indexOf(via[i])][cL][s_inf_tmp.firstTrain[i][j][0]] + ": " + s_inf_tmp.firstTrain[i][j][1]
                                    }));
                                firstTrainWrap.appendChild(wrap);
                            }
                            FirstTrain.appendChild(firstTrainWrap);
                            g.appendChild(FirstTrain);
                        } // FirstTrain
                        {
                            let LastTrain = cE({type: "p", attr: [["id", "LastTrain"]]});
                            LastTrain.appendChild(cE({
                                type: "span",
                                innerText: string.LastTrainDesc[cL]
                            }));
                            let lastTrainWrap = cE({type: "span"});
                            for (let i = 0; i < via.length; i++) {
                                let wrap = cE({type: "span"});
                                wrap.appendChild(cE({
                                    type: "span",
                                    attr: [["class", "icon-" + globallist[linedata.indexOf(via[i])]]]
                                }));
                                wrap.appendChild(cE({
                                    type: "span",
                                    innerText: shortLinename[linedata.indexOf(via[i])][cL] + ": "
                                }));
                                for (let j = 0; j < s_inf_tmp.lastTrain[i].length; j++)
                                    wrap.appendChild(cE({
                                        type: "span",
                                        innerText: routedirection[linedata.indexOf(via[i])][cL][s_inf_tmp.lastTrain[i][j][0]] + ": " + s_inf_tmp.lastTrain[i][j][1]
                                    }));
                                lastTrainWrap.appendChild(wrap);
                            }
                            LastTrain.appendChild(lastTrainWrap);
                            g.appendChild(LastTrain);
                        } // LastTrain
                        cs.appendChild(g);
                        let d = cE({type: "div", attr: [["class", "moreInfo"]]});
                        d.appendChild(cE({type: "p", innerText: s_inf_tmp.shortDesc})); // ShortDescription
                        {
                            let a = cE({type: "div"});
                            a.appendChild(cE({type: "h4", innerText: string.structureName[cL]}));
                            for (let i = 0; i < s_inf_tmp.structureDesc.length; i++) {
                                a.appendChild(cE({type: "h5", innerText: s_inf_tmp.structureDesc[i][0]}));
                                if (typeof s_inf_tmp.structureDesc[i][1] === "object")
                                    for (let j = 0; j < s_inf_tmp.structureDesc[i][1].length; j++) {
                                        if (typeof s_inf_tmp.structureDesc[i][1][j].title !== "undefined")
                                            a.appendChild(cE({
                                                type: "h6",
                                                innerText: s_inf_tmp.structureDesc[i][1][j].title
                                            }));
                                        a.appendChild(cE({type: "p", innerText: s_inf_tmp.structureDesc[i][1][j].data}));
                                    }

                                else a.appendChild(cE({type: "p", innerText: s_inf_tmp.structureDesc[i][1]}));
                            }
                            d.appendChild(a);
                        } // StationStructureDesc
                        let a = cE({type: "div"});
                        let b = cE({type: "div"});
                        a.appendChild(cE({type: "h4", innerText: string.exitName[cL]}));
                        a.appendChild(cE({type: "p", innerText: s_inf_tmp.exitDesc})); // Exit Desc
                        b.appendChild(cE({type: "h4", innerText: string.usageName[cL]}));
                        b.appendChild(cE({type: "p", innerText: s_inf_tmp.usageDesc})); // Usage Desc
                        d.appendChild(a);
                        d.appendChild(b);
                        {
                            let a = cE({type: "div"});
                            a.appendChild(cE({type: "h4", innerText: string.historyName[cL]}));
                            for (let i = 0; i < s_inf_tmp.history.length; i++) {
                                a.appendChild(cE({type: "h5", innerText: s_inf_tmp.history[i][0]}));
                                if (typeof s_inf_tmp.history[i][1] === "object")
                                    for (let j = 0; j < s_inf_tmp.history[i][1].length; j++) {
                                        if (typeof s_inf_tmp.history[i][1][j].title !== "undefined")
                                            a.appendChild(cE({type: "h6", innerText: s_inf_tmp.history[i][1][j].title}));
                                        a.appendChild(cE({type: "p", innerText: s_inf_tmp.history[i][1][j].data}));
                                    }

                                else a.appendChild(cE({type: "p", innerText: s_inf_tmp.history[i][1]}));
                            }
                            d.appendChild(a);
                        } // HistoryDesc
                        if (typeof s_inf_tmp.futureExpansion !== "undefined") {
                            let a = cE({type: "div"});
                            a.appendChild(cE({type: "h4", innerText: string.futureExName[cL]}));
                            for (let i = 0; i < s_inf_tmp.futureExpansion.length; i++) {
                                a.appendChild(cE({type: "h5", innerText: s_inf_tmp.futureExpansion[i][0]}));
                                if (typeof s_inf_tmp.futureExpansion[i][1] === "object")
                                    for (let j = 0; j < s_inf_tmp.futureExpansion[i][1].length; j++) {
                                        if (typeof s_inf_tmp.futureExpansion[i][1][j].title !== "undefined")
                                            a.appendChild(cE({
                                                type: "h6",
                                                innerText: s_inf_tmp.structureDesc[i][1][j].title
                                            }));
                                        a.appendChild(cE({type: "p", innerText: s_inf_tmp.futureExpansion[i][1][j].data}));
                                    }

                                else a.appendChild(cE({type: "p", innerText: s_inf_tmp.futureExpansion[i][1]}));
                            }
                            d.appendChild(a);
                        } // FutureExpansion
                        cs.appendChild(d);
                        let tt = $(".topTab")[0];
                        cs.onscroll = () => {
                            if (cs.scrollTop > 60) {
                                cs.classList.add("down");
                                tt.classList.add("down");
                            } else {
                                cs.classList.contains("down") ? cs.classList.remove("down") : void (0);
                                tt.classList.contains("down") ? tt.classList.remove("down") : void (0);
                            }
                        };
                        if (isMap)
                            if (isAMap) {
                                let map = new AMap.Map('MapContainer', {
                                    center: s_inf_tmp.location,
                                    zoom: 18,
                                    mapStyle: ((window.matchMedia("(prefers-color-scheme: dark)").matches) && !document.documentElement.classList.contains("custom-theme")) || document.documentElement.classList.contains("darkerTheme") ? "amap://styles/7ebd5ad07161a9299e7bb30105216afc" : "amap://styles/fa8296862961dbb06ff972ff82e04813"
                                });
                            }
                    }
                }
            );
        }
    },
    showstationinf: (num, platformnum) => {
        let emptyData = false;
        if (s_inf_tmp.inf[platformnum].facilities.length === 0 || s_inf_tmp.inf[platformnum].facilities === null || s_inf_tmp.inf[platformnum].facilities === undefined) {
            showWarning(string.emptyInfData[cL], 1000);
            emptyData = true;
        }
        let ch = $("#pg-app-wrap > .topTab > .inner")[0];
        ch.innerHTML = "";
        let a = [cE({
            type: "div",
            attr: [["class", "active"]],
            innerHTML: "<span class='mi'>info</span>" + string.infoDesc[cL]
        }), cE({
            type: "div",
            innerHTML: "<span class='mi'>accessible</span>" + string.facilityDesc[cL]
        })];
        ch.appendChild(cE({
            type: "h2",
            innerHTML: s_inf_tmp.name[cL].split("-")[0]
        }));
        ch.appendChild(cE({
            type: "h3",
            innerHTML: s_inf_tmp.name[cL === 4 ? 0 : 4]
        }));
        ch.appendChild(a[0]);
        ch.appendChild(a[1]);
        a.forEach(e => {
            e.onclick = () => {
                if (!(emptyData && a.indexOf(e) === 1) && !e.classList.contains("active")) {
                    $(".topTab .active,#InfoTab>.active").forEach(d => {
                        d.classList.remove("active")
                    });
                    e.classList.add("active");
                    $("#InfoTab>div")[Array.prototype.indexOf.call($(".topTab>div>div"), e)].classList.add("active");
                } else if (emptyData && a.indexOf(e) === 1)
                    alert("暂无数据");
            }
        });
        if (emptyData)
            return 0;
        let table = cE({type: "div", attr: [["id", "infTable"]]});
        let p_num = s_inf_tmp.platformBelong[platformnum][1];
        let door = [["GF", "4", "6"].includes(p_num) ? 4 : p_num === "13" ? 8 : p_num === "APM" ? 2 : 6, ["1", "2", "8", "13"].includes(p_num) ? 5 : ["4", "5", "6"].includes(p_num) ? 3 : p_num === "APM" ? 2 : 4];
        for (let i = 1, k = 1; i <= door[0]; i++) {
            for (let j = 1; j <= door[1]; j++, k++) {
                let res = "";
                if (j === 1)
                    if (i === 1)
                        res += "<div class='first-cabin first-door'>";
                    else res += "<div class='first-door'>";
                else if (j === door[1])
                    if (i === door[0])
                        res += "<div class='last-cabin last-door'>";
                    else res += "<div class='last-door'>";
                else res += "<div>";
                res += "<div>" + k + "</div></div>";
                table.innerHTML += res;
            }
        }
        let d = $("#facilitiesList")[0];
        d.innerHTML = "";
        let data = s_inf_tmp.inf[platformnum];
        let f = data.facilities, nowToTop = 0, wrap = cE({type: "div"});
        for (let i = 0; i < f.length; i++) {
            let res1 = "<span class='facilitiesgroup'><span class='exitnum'>" + f[i][2] + "</span>";
            if (f[i][1].indexOf(1) !== -1)
                res1 += "<span class='escalator'></span>";
            else if (f[i][1].indexOf(2) !== -1)
                res1 += "<span class='staircase'></span>";
            else if (f[i][1].indexOf(3) !== -1)
                res1 += "<span class='elevator'></span>";
            res1 += "</span>";
            let res2 = typeof (f[i][3]) !== "undefined" ? "<span class=\"font-" + f[i][3] + " border-" + f[i][3] + " interchange\"><span class=\"insideborder\">" + linedata[globallist.indexOf(f[i][3])] + "</span></span>" : "";
            wrap.appendChild(cE({
                type: "span",
                innerHTML: "<span>" + res2 + res1 + "</span>",
                attr: [["style", "margin-top:" + ((f[i][0] - nowToTop - 1) * 43 + ((f[i][0] - 1 - nowToTop) / door[0]).toPrecision(1) * 10 + 5 + (nowToTop % 5 === 0 ? 10 : 0)) + "px"]]
            }));
            nowToTop = f[i][0];
        }
        d.appendChild(wrap);
        d.appendChild(table);
        window.num = num;
    }
};
/* Made by Penguin */
pg.account = {
    requireLib: [],
    data: {
        title: ["个人设置", "个人设置", "", "", "Settings"],
        topNav: true,
        topInput: false, navBottom: 3
    },
    init: () => {
        let wrap = $("#pg-app-wrap")[0];
        wrap.appendChild(cE({type: "div", attr: [["id", "prefSettings"]]}));
        let inner = wrap.children[0];
        {
            inner.appendChild(cE({type: "p", attr: [["class", "prefName"]], innerText: string.languageDesc[cL]}));
            let ChoserWrap = cE({
                type: "div",
                attr: [["id", "languageChoser"]],
                innerHTML: "<div><div>繁體中文（香港）</div><div>简体中文</div><div>日本語</div><div>한국어</div><div>English</div></div><div class='ignoreBackground'></div>"
            });
            inner.appendChild(ChoserWrap);
            ChoserWrap.children[0].children[cL].classList.add("active");
            let trigger = cE({type: "button", innerText: language[cL]});
            trigger.onclick = () => {
                if (!ChoserWrap.classList.contains("show"))
                    ChoserWrap.classList.add("show")
            };
            for (let i = 0; i < ChoserWrap.children[0].children.length; i++) {
                ChoserWrap.children[0].children[i].onclick = () => {
                    system.set("language", i);
                    window.location.reload();
                };
            }
            ChoserWrap.children[1].onclick = () => {
                ChoserWrap.classList.remove("show")
            };
            inner.appendChild(trigger);
        }
        {
            inner.appendChild(cE({type: "p", attr: [["class", "prefName"]], innerText: string.themeDesc[cL]}));
            let ChoserWrap = cE({
                type: "div",
                attr: [["id", "themeChoser"]],
                innerHTML: "<div><div>" + theme[0][cL] + "</div><div>" + theme[1][cL] + "</div><div>" + theme[2][cL] + "</div><div>" + theme[3][cL] + "</div><div>" + theme[4][cL] + "</div><div>" + theme[5][cL] + "</div></div><div class='ignoreBackground'></div>"
            });
            inner.appendChild(ChoserWrap);
            ChoserWrap.children[0].children[cT].classList.add("active");
            let trigger = cE({type: "button", innerText: theme[cT]});
            trigger.onclick = () => {
                if (!ChoserWrap.classList.contains("show"))
                    ChoserWrap.classList.add("show")
            };
            for (let i = 0; i < ChoserWrap.children[0].children.length; i++) {
                ChoserWrap.children[0].children[i].onclick = () => {
                    system.set("theme", i);
                    window.location.reload();
                };
            }
            ChoserWrap.children[1].onclick = () => {
                ChoserWrap.classList.remove("show")
            };
            inner.appendChild(trigger);
        }
        {
            inner.appendChild(cE({
                type: "p",
                attr: [["class", "prefName"]],
                innerText: string.shouldOverrideDarkMode[cL]
            }));
            let ChoserWrap = cE({
                type: "div",
                attr: [["id", "OverrideDarkModeChoser"]],
                innerHTML: "<div><div>" + string.true[cL] + "</div><div>" + string.false[cL] + "</div></div><div class='ignoreBackground'></div>"
            });
            inner.appendChild(ChoserWrap);
            ChoserWrap.children[0].children[overrideDarkMode === true ? 0 : 1].classList.add("active");
            let trigger = cE({type: "button", innerText: overrideDarkMode ? string.true[cL] : string.false[cL]});
            trigger.onclick = () => {
                if (!ChoserWrap.classList.contains("show"))
                    ChoserWrap.classList.add("show")
            };
            for (let i = 0; i < ChoserWrap.children[0].children.length; i++) {
                ChoserWrap.children[0].children[i].onclick = () => {
                    system.set("overrideDarkMode", i === 1 ? 0 : 1);
                    window.location.reload();
                };
            }
            ChoserWrap.children[1].onclick = () => {
                ChoserWrap.classList.remove("show")
            };
            inner.appendChild(trigger);
        }
        {
            inner.appendChild(cE({
                type: "p",
                attr: [["class", "prefName"]],
                innerText: string.removeCookies[cL]
            }));
            let ChoserWrap = cE({
                type: "div",
                attr: [["id", "RemoveAllPreferencesChoser"]],
                innerHTML: "<div><div>" + string.confirm[cL] + "</div><div>" + string.cancel[cL] + "</div></div><div class='ignoreBackground'></div>"
            });
            inner.appendChild(ChoserWrap);
            let trigger = cE({type: "button", innerText: string.removeCookies[cL]});
            trigger.onclick = () => {
                if (!ChoserWrap.classList.contains("show"))
                    ChoserWrap.classList.add("show")
            };
            ChoserWrap.children[0].children[0].onclick = () => {
                system.removeAll();
                window.location.reload();
            };
            ChoserWrap.children[0].children[1].onclick = ChoserWrap.children[1].onclick = () => {
                ChoserWrap.classList.remove("show")
            };
            inner.appendChild(trigger);
        }
        {
            inner.appendChild(cE({
                type: "p",
                attr: [["class", "prefName"]],
                innerText: string.hasMap[cL]
            }));
            let ChoserWrap = cE({
                type: "div",
                attr: [["id", "LoadMapChoser"]],
                innerHTML: "<div><div>" + string.true[cL] + "</div><div>" + string.false[cL] + "</div></div><div class='ignoreBackground'></div>"
            });
            inner.appendChild(ChoserWrap);
            ChoserWrap.children[0].children[isMap === 1 ? 0 : 1].classList.add("active");
            let trigger = cE({type: "button", innerText: isMap ? string.true[cL] : string.false[cL]});
            trigger.onclick = () => {
                if (!ChoserWrap.classList.contains("show"))
                    ChoserWrap.classList.add("show")
            };
            for (let i = 0; i < ChoserWrap.children[0].children.length; i++) {
                ChoserWrap.children[0].children[i].onclick = () => {
                    system.set("isMap", i === 1 ? 0 : 1);
                    window.location.reload();
                };
            }
            ChoserWrap.children[1].onclick = () => {
                ChoserWrap.classList.remove("show")
            };
            inner.appendChild(trigger);
        }
    }
};
/* Made by Penguin */
pg.makeRoute = {
    requireLib: ["interchange"],
    data: {
        topNav: false,
        topInput: false,
        navBottom: 2
    },
    init: (a) => {
        window.location.href = "makeRoute.html?start=" + a[0] + "&end=" + a[1];
    }
};