/* Made by Penguin */
pg.stationList = {
    requireLib: ["stationlist"],
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
        let infWrap = cE({type: "div", attr: [["class", "stationInf"]]});
        infWrap.appendChild(cE({type: "h2", attr: [["class", "stationName"], ["id", "stationName"]]}));
        infWrap.appendChild(cE({type: "h3", attr: [["class", "stationSubName"], ["id", "stationSubName"]]}));
        document.body.appendChild(infWrap);
    }, collapseSL: (name) => {
        name = name.substr(5);
        console.log(name);
        $("#selectStation .show").forEach((e) => {
            e.classList.remove("show");
        });
        $("#" + name)[0].classList.add("show");
    }, loadStationList: () => {
        let processPill = (a, b, c) => {
            return "<span class='StationNumber border-" + c + "'><span>" + a + "</span><span>" + (b < 10 ? "0" + b : b) + "</span></span>";
        };
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
                    station.innerHTML = processPill(linedata[i], num + 1, globallist[i]) + "<span>" + s_list[i].station[j][k][cL] + "</span>";
                    subContainer.appendChild(station);
                }
            }
            container.appendChild(subContainer);
        }
        $("#Line1-GZ")[0].classList.add("show");
    }
};