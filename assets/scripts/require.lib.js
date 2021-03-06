/* Made by Penguin */
window.pg = {};

window.loadRequire = () => {
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
        system.loadDitiezu = () => {
            android.loadDitiezu();
        }
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
        system.loadDitiezu = () => {
            window.location.href = "http://www.ditiezu.com";
        }
    }

    window.cL = ["", "-1"].indexOf(system.get("language")) !== -1 || isNaN(Int(system.get("language"))) ? 0 : Int(system.get("language"));
    let langCodes = ['zh-HK', 'zh-Hans', 'ja', 'ko', 'en'];
    document.documentElement.setAttribute('lang', langCodes[cL]);
    window.cT = ["", "-1"].indexOf(system.get("theme")) !== -1 || isNaN(Int(system.get("theme"))) ? 0 : Int(system.get("theme"));
    document.documentElement.classList.add(themeName[cT] + "Theme");
    window.overrideDarkMode = ["", "0"].indexOf(system.get("overrideDarkMode")) === -1;
    if (overrideDarkMode)
        document.documentElement.classList.add("custom-theme");
    let bottomNav = $("#pg-app-bottom")[0].children[0];
    for (let i = 0; i < bottomNav.children.length; i++)
        bottomNav.children[i].children[1].innerHTML = feature[i][cL];
    window.isMap = ["", "-1"].indexOf(system.get("isMap")) !== -1 || isNaN(Int(system.get("isMap"))) ? 1 : Int(system.get("isMap"));
    window.isAMap = ["", "-1"].indexOf(system.get("isAMap")) !== -1 || isNaN(Int(system.get("isAMap"))) ? 1 : Int(system.get("isAMap"));
    document.documentElement.classList.add(isMap ? "hasMap" : "noMap");
};

window.$ = (a) => {
    return document.querySelectorAll(a);
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

window.Int = (a) => {
    return parseInt(a);
};

window.importScripts = (url, callback) => {
    let script = cE({type: "script", attr: [["src", url]]});
    document.body.appendChild(script);
    callback !== undefined ? script.onload = script.onreadystatechange = () => {
        callback();
    } : void (0);
};

window.processLocation = (a, b) => {
    let processPrecision = (d) => {
        return d.substr(0, d.indexOf(".")) + "°" + d.substr(d.indexOf(".") + 1, 2) + "\"" + d.substr(d.indexOf(".") + 3, 2) + "." + d.substr(d.indexOf(".") + 5, 2) + "'";
    };
    return [(a > -20 && a < 160 ? processPrecision(a) + "E" : processPrecision(-1 * a) + "W"), (b > 0 ? processPrecision(b) + "N" : processPrecision(-1 * b) + "S")];
};

window.processPill = (a, b, c) => {
    return "<span class='StationNumber border-" + c + "'><span>" + a + "</span><span>" + (b < 10 ? "0" + b : b) + "</span></span>";
};

window.GetPara = (para) => {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === para) result = decodeURIComponent(tmp[1]);
        });
    return result;
};

window.showWarning = (inf, time) => {
    time = time || 2000;
    let wrap = $("#bg-animation")[0];
    wrap.children[0].innerHTML = inf;
    wrap.classList.add("loading");
    setTimeout(() => {
        wrap.classList.remove("loading");
    }, time);
};

// Core String Data

// Core Line Data
window.linedata = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "21", "GF", "APM", "THZ1", "2"];
window.routedirection = [[["廣州東站方向", "西塱方向"], ["广州东站方向", "西塱方向"], ["広州東駅方面", "西塱方面"], ["광저우 동역까지", "서쪽"], ["To Guangzhou E. Railway Station", "To Xilang"]], [["嘉禾望崗方向", "廣州南站方向"], ["嘉禾望岗方向", "广州南站方向"], ["嘉禾望崗方面", "広州南駅方面"], ["지아 왕강 지역", "루 저우 남 지역"], ["To Jiahe Wanggang", "To Guangzhou S. Railway Station"]], [["天河客運站方向", "機場北方向", "機場北/天河客運站方向", "體育西路方向", "番禺廣場方向", "體育西路/番禺廣場方向"], ["天河客运站方向", "机场北方向", "机场北/天河客运站方向", "体育西路方向", "番禺广场方向", "体育西路/番禺广场方向"], ["天河客運站方面", "空港北方面", "空港北方面/天河客運站方面", "體育西路方面", "番禺広場方面", "體育西路/番禺広場方面"], ["톈허 여객 터미널", "공항 북쪽", "공항 북쪽 / 톈허 여객 터미널", "톈 위서로", "판위 스퀘어", "톈 위서로 / 판위 스퀘어"], ["To Tinahe Coach Terminal", "To Airport N.", "To Airport N./Tianhe Coach Terminal", "To Tiyu Xilu", "To Panyu Square", "To Tiyu Xilu/Panyu Square"]], [["黃村方向", "南沙客運港方向"], ["黄村方向", "南沙客运港方向"], ["黃村方面", "南沙客運港方面"], ["후앙 쿤 지역", "난샤 여객 항구 지역"], ["To Huangcun", "To Nansha Passenger Port"]], [["文沖方向", "滘口方向", "三溪方向"], ["文冲方向", "滘口方向", "三溪方向"], ["文沖方面", "滘口方面", "三溪方面"], ["원 종 측면", "이코 우 측면", "산시 역 측면"], ["To Wenchong", "To Jiaokou", "To Sanxi"]], [["香雪方向", "潯峰崗方向"], ["香雪方向", "浔峰岗方向"], ["香雪方面", "潯峰崗方面"], ["향설 ", "심봉초"], ["To Xiangxue", "To Xunfenggang"]], [["大學城南方向", "廣州南站方向"], ["大学城南方向", "广州南站方向"], ["大學城南方面", "広州南駅方面"], ["대학교 도시의 남쪽 측면", "광저우 남역"], ["To Higher Education Mega Center S.", "To Guangzhou S. Railway Station"]], [["文化公園方向", "萬勝圍方向"], ["文化公园方向", "万胜围方向"], ["文化公園方面", "萬勝圍方面"], ["문화 공원", "완성 웨이"], ["To Cultural Park", "To Wanshengwei"]], [["高增方向", "飛鵝嶺方向"], ["高增方向", "飞鹅岭方向"], ["高增方面", "飛鵝嶺方面"], ["고성장 지역", "페이 게링 지역"], ["To Gaozeng", "To Fei'eling"]], [["新沙方向", "魚珠方向"], ["新沙方向", "鱼珠方向"], ["新沙方面", "魚珠方面"], ["신샤 지역", "물고기 구슬 지역"], ["To Xinsha", "To Yuzhu"]], [["東風方向", "鎮龍方向", "嘉禾望崗方向", "新和方向"], ["东风方向", "镇龙方向", "嘉禾望岗方向", "新和方向"], ["東風方面", "鎮龍方面", "嘉禾望崗方面", "新和方面"], ["동풍 방향", "정룽 방향", "지애 왕강 방향", "신와 방향"], ["To Dongfeng", "To Zhenlong", "To Jiahe Wanggang", "To Xinhe"]], [["增城廣場方向", "員村方向"], ["增城广场方向", "员村方向"], ["增城広場方面", "員村方面"], ["정청 광장으로가는 길", "위안 쿤으로가는 길"], ["To Zengcheng Square", "To Yuancun"]], [["瀝滘方向", "新城東方向"], ["沥滘方向", "新城东方向"], ["瀝滘方面", "新城東方面"], ["릴리의 방향으로", "도시의 동쪽으로"], ["To Lijiao", "To Xincheng Dong"]], [["林和西方向", "廣州塔方向"], ["林和西方向", "广州塔方向"], ["林和西方面", "広州タワー方面"], ["린 허시 지역", "광저우 타워 지역"], ["To Linhexi", "To Canton Tower"]], [["廣州塔方向", "萬勝圍方向"], ["广州塔方向", "万胜围方向"], ["広州タワー方面", "萬勝圍方面"], ["광저우 타워 지역", "완성 웨이"], ["To Canton Tower", "To Wanshengwei"]]];
window.globallist = ["Line1-GZ", "Line2-GZ", "Line3-GZ", "Line4-GZ", "Line5-GZ", "Line6-GZ", "Line7-GZ", "Line8-GZ", "Line9-GZ", "Line13-GZ", "Line14-GZ", "Line21-GZ", "Line-GF", "LineAPM-GZ", "THZ1-GZ", "LineR2-DG"];
window.linename = [["廣州地鐵1號線", "广州地铁1号线", "広州地下鉄1号線", "광저우 지하철 1호선", "GZ Line 1"], ["廣州地鐵2號線", "广州地铁2号线", "広州地下鉄2号線", "광저우 지하철 2호선", "GZ Line 2"], ["廣州地鐵3號線", "广州地铁3号线", "広州地下鉄3号線", "광저우 지하철 3호선", "GZ Line 3"], ["廣州地鐵4號線", "广州地铁4号线", "広州地下鉄4号線", "광저우 지하철 4호선", "GZ Line 4"], ["廣州地鐵5號線", "广州地铁5号线", "広州地下鉄5号線", "광저우 지하철 5호선", "GZ Line 5"], ["廣州地鐵6號線", "广州地铁6号线", "広州地下鉄6号線", "광저우 지하철 6호선", "GZ Line 6"], ["廣州地鐵7號線", "广州地铁7号线", "広州地下鉄7号線", "광저우 지하철 7호선", "GZ Line 7"], ["廣州地鐵8號線", "广州地铁8号线", "広州地下鉄8号線", "광저우 지하철 8호선", "GZ Line 8"], ["廣州地鐵9號線", "广州地铁9号线", "広州地下鉄9号線", "광저우 지하철 9호선", "GZ Line 9"], ["廣州地鐵13號線", "广州地铁13号线", "広州地下鉄13号線", "광저우 지하철 13호선", "GZ Line 13"], ["廣州地鐵14號線", "广州地铁14号线", "広州地下鉄14号線", "광저우 지하철 14호선", "GZ Line 14"], ["廣州地鐵21號線", "广州地铁21号线", "広州地下鉄21号線", "광저우 지하철 21호선", "GZ Line 21"], ["廣州地鐵廣佛線", "广州地铁广佛线", "仏山地下鉄1号線", "광저우 지하철 광포선", "GF Line"], ["廣州地鐵APM線", "广州地铁APM线", "珠江新城自動輸送旅客システム-APM線", "광저우 지하철 APM선", "GZ APM Line"], ["廣州有軌海珠線", "广州有轨海珠线", "広州海珠環島新しいトラム", "광저우 해주유궤전차", "GZ Haizhu Tram"], ["東莞地鐵R2線", "东莞地铁R2线", "東莞地下鉄R2線", "동관 지하철 R2호선", "DG Line R2"]];
window.shortLinename = [["地鐵1號線", "地铁1号线", "地下鉄1号線", "지하철 1호선", "Line 1"], ["地鐵2號線", "地铁2号线", "地下鉄2号線", "지하철 2호선", "Line 2"], ["地鐵3號線", "地铁3号线", "地下鉄3号線", "지하철 3호선", "Line 3"], ["地鐵4號線", "地铁4号线", "地下鉄4号線", "지하철 4호선", "Line 4"], ["地鐵5號線", "地铁5号线", "地下鉄5号線", "지하철 5호선", "Line 5"], ["地鐵6號線", "地铁6号线", "地下鉄6号線", "지하철 6호선", "Line 6"], ["地鐵7號線", "地铁7号线", "地下鉄7号線", "지하철 7호선", "Line 7"], ["地鐵8號線", "地铁8号线", "地下鉄8号線", "지하철 8호선", "Line 8"], ["地鐵9號線", "地铁9号线", "地下鉄9号線", "지하철 9호선", "Line 9"], ["地鐵13號線", "地铁13号线", "地下鉄13号線", "지하철 13호선", "Line 13"], ["地鐵14號線", "地铁14号线", "地下鉄14号線", "지하철 14호선", "Line 14"], ["地鐵21號線", "地铁21号线", "地下鉄21号線", "지하철 21호선", "Line 21"], ["地鐵廣佛線", "地铁广佛线", "地下鉄広仏線", "지하철 광포선", "GF Line"], ["地鐵APM線", "地铁APM线", "地下鉄APM線", "지하철 APM선", "APM Line"], ["有軌海珠線", "有轨海珠线", "海珠トラム", "해주유궤전차", "Haizhu Tram"], ["地鐵R2線", "地鐵R2線", "地下鉄R2線", "동관 지하철 R2호선", "Line R2"]];
window.linebelong = [{
    name: ["廣州", "广州", "広州", "광저우", "Guangzhou"],
    line: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
}, {name: ["東莞", "东莞", "東莞", "동관", "Dongguan"], line: [15]}];
window.language = ["繁體中文（香港）", "简体中文", "日本語", "한국어", "English"];
window.themeName = ["Simple", "Darker", "Watermelon", "Summer", "Rain", "Tea"];