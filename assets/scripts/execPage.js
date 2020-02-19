/* Made by Penguin */
pg.stationList = {
    requireLib: ["stationlist", "stationnum"],
    data: {
        title: ["車站資訊", "车站信息", "駅の情報", "역 정보", "INFO"],
        topNav: true,
        topInput: true,
        topInputContent: ["你想要前往", "您想要前往", "到着駅を入力", "가고 싶다", "You'd like to go to...'"], navBottom: 1
    },
    init: () => {
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
                for (let k = hasChild ? 1 : 0; k < s_list[i].station[j].length; k++, num++) {
                    let station = cE({type: "p"});
                    let d = num;
                    station.innerHTML = processPill(linedata[i], d + 1, globallist[i]) + "<span>" + s_list[i].station[j][k][cL] + "</span>";
                    station.onclick = function () {
                        pg.stationList.loadStationInf(i, d)
                    };
                    subContainer.appendChild(station);
                }
            }
            container.appendChild(subContainer);
        }
        $("#Line1-GZ")[0].classList.add("show");
    }, loadStationInf: (line, num) => {
        let nameId = s_num[line][num];
        $("#stationName")[0].innerText = f_s_list[nameId][cL];
        $("#stationSubName")[0].innerText = f_s_list[nameId][cL === 4 ? 0 : 4];
        $(".stationInf")[0].classList.add("show");
        $("#pg-app-wrap")[0].classList.add("stationInfActive");
    }
};