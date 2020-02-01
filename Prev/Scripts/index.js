/* Made by Penguin */

let chineseNum = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
let doc = document;
let docE = document.documentElement;
let body = document.body;

window.onload = function () {
    try {
        window.onscroll = function () {
            let i = document.documentElement.scrollTop;
            let a = $("#navbar")[0];
            i > 150 ? a.classList.add("onscroll") : a.classList.contains("onscroll") ? a.classList.remove("onscroll") : void (0);
        };
        $("#ChangeFloor")[0].onclick = function () {
            let fm = $("#FloorMap")[0];
            if (fm.getAttribute("data-range") !== null) {
                let r = Number(fm.getAttribute("data-range"));
                let rn = this.innerText !== "目前" ? this.innerText === "未来" ? 1 : Number(this.innerText[this.innerText.length - 1]) : 0;
                let data;
                switch (rn) {
                    case 0:
                        data = "未来";
                        fm.setAttribute("src", fm.getAttribute("src").replace(/未来楼层[\s\S]/, "楼层"));
                        break;
                    case 1:
                        data = "未来2";
                        fm.setAttribute("src", fm.getAttribute("src").replace("楼层", "未来楼层1"));
                        break;
                    case r - 1:
                        data = "目前";
                        fm.setAttribute("src", fm.getAttribute("src").replace(/未来楼层[\s\S]/, "未来楼层" + rn));
                        break;
                    default:
                        data = "未来" + (rn + 1);
                        fm.setAttribute("src", fm.getAttribute("src").replace(/未来楼层[\s\S]/, "未来楼层" + rn));
                        break;
                }
                this.innerText = data;
            } else
                this.innerText === "未来" ? ((fm.setAttribute("src", fm.getAttribute("src").replace("楼层.png", "未来楼层.png"))), (this.innerText = "目前")) : (fm.setAttribute("src", fm.getAttribute("src").replace("未来楼层.png", "楼层.png")), this.innerText = "未来");
        };
        $("#ChangeTracks")[0].onclick = function () {
            let fm = $("#TracksMap")[0];
            if (fm.getAttribute("data-range") !== null) {
                let r = Number(fm.getAttribute("data-range"));
                let rn = this.innerText !== "目前" ? this.innerText === "未来" ? 1 : Number(this.innerText[this.innerText.length - 1]) : 0;
                let data;
                switch (rn) {
                    case 0:
                        data = "未来";
                        fm.setAttribute("src", fm.getAttribute("src").replace(/未来站线[\s\S]/, "站线"));
                        break;
                    case 1:
                        data = "未来2";
                        fm.setAttribute("src", fm.getAttribute("src").replace("站线", "未来站线1"));
                        break;
                    case r - 1:
                        data = "目前";
                        fm.setAttribute("src", fm.getAttribute("src").replace(/未来站线[\s\S]/, "未来站线" + rn));
                        break;
                    default:
                        data = "未来" + (rn + 1);
                        fm.setAttribute("src", fm.getAttribute("src").replace(/未来站线[\s\S]/, "未来站线" + rn));
                        break;
                }
                this.innerText = data;
            } else
                this.innerText === "未来" ? ((fm.setAttribute("src", fm.getAttribute("src").replace("站线.png", "未来站线.png"))), (this.innerText = "目前")) : (fm.setAttribute("src", fm.getAttribute("src").replace("未来站线.png", "站线.png")), this.innerText = "未来");
        };
        $("#toggle_wikiinf")[0].onclick = function () {
            let a = $("#wikiinf")[0];
            if (a.style.display === "none" || a.style.display === "") {
                a.style.display = "block";
                this.innerText = "- Less -";
            } else {
                a.style.display = "none";
                this.innerText = "+ More +";
            }
        };
    } catch (err) {
    }
};

function WikiGetContent(LineNum) { // Working on fixing this.
    let wrap = $('#StationsList');
    let table = doc.createElement('table');
    let thead = doc.createElement('thead');
    thead.innerHTML = "<tr><th>车站编号</th><th>车站名称</th><th>换乘线路</th><th>所在区县</th><th>启用时间</th><th>月台结构</th></tr>";
    let tbody = doc.createElement("tbody");
    let Os = [0, 0], Ps = [0, 0], Ds = [0, 0];
    for (let i = 0; i < GZLine1Stations.Name.length; i++) {
        let row = doc.createElement("tr");
        let number = doc.createElement("td");
        let name = doc.createElement("td");
        let OT = doc.createElement("td");
        let PT = doc.createElement("td");
        let D = doc.createElement("td");
        number.innerText = "1|" + (i < 10 ? "0" + i : i);
        name.innerText += GZLine1Stations.Name[i];
        row.appendChild(number);
        row.appendChild(name);
        {
            function parseLine(type, ctype) {
                let line = type.split('-');
                let a = doc.createElement(ctype === "C" ? 'span' : "i");
                let b = doc.createElement("span");
                let c = doc.createElement("span");
                b.setAttribute("class", "icon-Line" + line[1] + (line[2] === undefined ? "" : "-" + line[2]) + " icon-LineType");
                a.appendChild(b);
                c.innerText = "Line " + line[1];
                a.appendChild(c);
                return a;
            }

            let IC = doc.createElement("td");
            let change = GZLine1Stations.LineChanges[i];
            if (change.C !== undefined) {
                if (change.C[1] !== undefined)
                    for (let j = 0; j < change.C.length; j++) {
                        IC.appendChild(parseLine(change.C[j], "C"));
                    }
                else
                    IC.appendChild(parseLine(change.C[0], "C"));
            }
            if (change.UC !== undefined) {
                if (change.UC[1] !== undefined)
                    for (let j = 0; j < change.UC.length; j++) {
                        IC.appendChild(parseLine(change.UC[j]));
                    }
                else
                    IC.appendChild(parseLine(change.UC[0]));
            }
            row.appendChild(IC);
        }
        if (Ds[1] === 0) {
            console.log('a');
            Ds[1] = GZLine1Stations.District[Ds[0]].num;
            D.innerText = GZLine1Stations.District[Ds[0]].sD;
            D.setAttribute("rowspan", GZLine1Stations.District[Ds[0]].num);
            Ds[0]++;
            row.appendChild(D);
        }
        if (Os[1] === 0) {
            console.log('a');
            Os[1] = GZLine1Stations.OpenTime[Os[0]].num;
            OT.innerText = GZLine1Stations.OpenTime[Os[0]].sOT;
            OT.setAttribute("rowspan", GZLine1Stations.OpenTime[Os[0]].num);
            Os[0]++;
            row.appendChild(OT);
        }
        if (Ps[1] === 0) {
            console.log('b');
            Ps[1] = GZLine1Stations.PlatformType[Ps[0]].num;
            PT.innerText = GZLine1Stations.PlatformType[Ps[0]].sPT;
            PT.setAttribute("rowspan", GZLine1Stations.PlatformType[Ps[0]].num);
            Ps[0]++;
            row.appendChild(PT);
        }
        Os[1]--;
        Ps[1]--;
        Ds[1]--;
        tbody.appendChild(row);
    }
    wrap.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    table.classList.add("StationList");
}

function exist(d) {
    return !!d || d === 0;
}