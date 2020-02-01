/* Made by Penguin */

let GZLine1Stations = {
    OpenTime: [{num: 5, sOT: "1997年6月28日"}, {num: 11, sOT: "1999年2月16日"}],
    District: [{num: 8, sD: "广州市荔湾区"}, {num: 5, sD: "广州市越秀区"}, {num: 3, sD: "广州市天河区"}],
    PlatformType: [{num: 1, sPT: "地面 ｜ 两岛式一侧式"}, {num: 1, sPT: "地面 侧式站台"}, {num: 1, sPT: "地下 侧式站台"},
        {num: 4, sPT: "地下 岛式站台"}, {num: 1, sPT: "地下 西班牙式站台"}, {num: 8, sPT: "地下 岛式站台"}],
    Name: ["西塱", "坑口", "花地湾", "芳村", "黄沙", "长寿路", "陈家祠", "西门口", "公园前", "农讲所", "烈士陵园", "东山口", "杨箕", "体育西路", "体育中心", "广州东站"],
    LineChanges: [{
        C: ["Line-GF- "],
        UC: ["Line-18-GZ", "Line-22-GZ"]
    }, {}, {}, {UC: ["Line-11-GZ"]}, {C: ["Line-6-GZ"]}, {}, {
        UC: ["Line-8-GZ"]
    }, {}, {C: ["Line-2-GZ"]}, {}, {UC: ["Line-13-GZ"]}, {C: ["Line-6-GZ"]}, {C: ["Line-5-GZ"]}, {
        C: ["Line-3-GZ"],
        UC: ["Line-10-GZ", "Line-13-GZ"]
    }, {}, {C: ["Line-3-GZ"], UC: ["Line-11-GZ", "Line-18-GZ"]}]
};

let CulturalPark = {
    underground: 4,
    underground_floor: [{name: "站厅", cont: "售票机、客服中心、商店、警务室、安检设施、公共洗手间"}, {name: "设备层", cont: "车站设备"}, {
        child: true,
        subcont: [{name: "8号线缓建平台(N.)", cont: "连接北侧站厅与站台，有一组扶梯", belong: "Line8-GZ"}, {
            name: "6号线站台",
            platform: true,
            platinf: {
                type: "island",
                cont: [{type: "track", direction: "l", towards: "浔峰岗", next: "黄沙", belong: "6号线"}, {
                    type: "platform",
                    belong: "6号线",
                    platform: "1",
                    way: "上行"
                }, {
                    type: "platform", belong: "6号线", platform: "2", way: "下行"
                }, {
                    type: "track", direction: "r", towards: "香雪", next: "一德路",
                    belong: "6号线"
                }]
            },
            belong: "Line6-GZ"
        }, {name: "8号线缓建平台(S.)", cont: "连接南侧（中部）站厅与站台，有一组楼梯和垂直电梯", belong: "Line8-GZ"}]
    }, {
        name: "8号线站台",
        platform: true,
        platinf: {
            type: "island",
            cont: [{type: "track", direction: "l", towards: "万胜围", next: "同福西", belong: "8号线"}, {
                belong: "8号线",
                platform: "4",
                way: "上行", type: "platform"
            }, {belong: "8号线", platform: "3", way: "下行", type: "platform"}, {
                type: "track",
                direction: "r",
                towards: "文化公园",
                next: "终点站",
                belong: "8号线"
            }]
        },
        belong: "Line8-GZ"
    }]
};