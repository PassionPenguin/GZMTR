/* Made by Penguin */

window.sentences = [
    ["就算你failed佐，我都唔會唔鍾意你[icon]fa fa-heart beating[/icon]", "就算你失败了，我也会爱你呀[icon]fa fa-heart beating[/icon]", "[icon]fa fa-heart beating[/icon]", "[icon]fa fa-heart beating[/icon]", "No matter you succeeded or not,\n I will love you all the time[icon]fa fa-heart beating[/icon]"],
    ["今日系[icon]fa fa-lemon' style='font-weight:400[/icon] 仲系 [icon]fa fa-apple-alt[/icon] 嘞", "今天是[icon]fa fa-lemon' style='font-weight:400[/icon] 还是 [icon]fa fa-apple-alt[/icon] 呢", "[icon]fa fa-lemon[/icon]", "[icon]fa fa-lemon[/icon]", "What will be today? [icon]fa fa-lemon' style='font-weight:400[/icon] or [icon]fa fa-apple-alt[/icon] ?"]
];
window.feature = [["主頁", "主页", "ホーム", "홈페이지", "Home"], ["車站資訊", "车站信息", "駅の情報", "역 정보", "Info"], ["線路圖", "线路图", "路線図", "운영 로드맵", "Routemap"], ["設置", "设置", "設定", "설치", "Settings"]];
window.string = {
    infoDesc: ["简介信息", "简介信息", "案内", "", "Info"],
    facilityDesc: ["车站设施", "车站设施", "ファシリティーズ", "", "Facilities"],
    locationDesc: ["地理座標", "地理坐标", "地図座標", "", "Map Position"],
    lineDesc: ["經過線路", "经过线路", "経由路線", "", "Line Passed"],
    codeDesc: ["站點代碼", "站点代码", "駅ナンバーリング", "", "Station Code"],
    structureDesc: ["车站结构", "车站结构", "駅の結構", "", "Structure Type"],
    structureInfo: [["地下车站", "地下车站", "地下駅", "", "Underground Station"], ["地面车站", "地面车站", "地面駅", "", "Ground Station"], ["高架车站", "高架车站", "高架駅", "", "Overground Station"]],
    platformDesc: ["月台类型", "月台类型", "ホーム　タイプ", "", "Platform Type"],
    platformInfo: [["岛式站台", "岛式站台", "アイランド　ホーム", "", "Island Platform"], ["侧式站台", "侧式站台", "サイド　ホーム", "", "Side Platform"], ["双岛式站台", "双岛式站台", "ダブル　アイランド　ホーム", "", "DblIsland Platform"], ["双侧式站台", "双侧式站台", "ダブル　サイド　ホーム", "", "DblSide Platform"], ["完全混合式站台", "完全混合式站台", "ミクス　ホーム", "", "Mixed Platform"], ["西班牙式站台", "西班牙式站台", "ホーム", "", "Spanish solution"], ["分离岛式站台", "分离岛式站台", "ホーム", "", "Split Platform"]],
    hallDesc: ["站厅类型", "站厅类型", "ホール　タイプ", "", "Hall Type"],
    hallInfo: [["地下站厅", "地下站厅", "地下ホール", "", "Underground Station Hall"], ["地面站厅", "地面站厅", "地面ホール", "", "Ground Station Hall"], ["高架站厅", "高架站厅", "高架ホール", "", "Overground Station Hall"]],
    transferDesc: ["换乘方式", "换乘方式", "乗り換え方式", "", "Transfer Type"],
    transferInfo: [["同台换乘", "同台换乘", "ホームでお乗り換え", "", "Transfer at the opposite"], ["通道换乘", "通道换乘", "通路でお乗り換え", "", "Transfer via passage"], ["站厅换乘", "站厅换乘", "ホールでお乗り換え", "", "Transfer via hall"]],
    exitNum: ["出口数量", "出口数量", "出口の数量", "", "Exits Num"],
    FirstTrainDesc: ["首班车", "首班车", "始発時間", "", "First Train Time"],
    LastTrainDesc: ["末班车", "末班车", "終電時間", "", "Last Train Time"],
    serviceTimeDesc: ["服务时间", "服务时间", "服務時間", "", "Service Time"],
    structureName: ["结构", "结构", "結構", "", "Structure"],
    exitName: ["出入口信息", "出入口信息", "出入口の情報", "", "Exits"],
    usageName: ["客流情况", "客流情况", "客流の情報", "", "Passengers Flow"],
    historyName: ["历史", "历史", "歴史", "", "History"],
    futureExName: ["未来拓展", "未来拓展", "未來エクスパンション", "", "Future Expansion"],
    operatedNy: ["由廣州地鐵集團運營", "由广州地铁集团运营", "広州メトロ公司が運営している", "", "Service Operated By GZMTR Co., Ltd"],
    belong: ["查看設施對應的車門Number", "查看设施对应的车门号", "対応のホームドアのナンバーリングを見る", "", "See facilities's nearby door"],
    beginNavi: ["或者開始導航", "或者开始导航", "ナビゲーションを始める", "", "Or start a new navigation"],
    interchangeCost: ["換乘大概耗時", "换乘大概耗时", "乗り換え時間は", "", "Transfer will take about"],
    Minute: ["分鐘", "分钟", "分ぐらいかかります", "", "minute(s)"],
    ContinueTaking: ["繼續乘坐", "继续乘坐", "この電車を続くお乗りください", "", "Continue taking this train."],
    WeRecomend: ["我們推介你在", "我们推荐您在", "もっと速く乗り換えると駅を出る為に", "", "We recommend you to wait at screen door No."],
    DoorWait: ["號幕門處候車以便快速換車/離站", "号屏蔽门处候车以便快速换乘/出站", "号ホームドアにお待ちはおすすめです", "", " for quicker transferring or exiting the station"],
    emptyWikiData: ["無維基數據", "无维基数据", "ウィキ　データがない", "", "No Wiki Data"],
    emptyInfData: ["無設施數據", "无设施数据", "施設データがない", "", "No Facilities Data"],
    languageDesc: ["請選擇你的語言", "请选择您的语言", "言語を選んでください", "", "Please select your language"],
    themeDesc: ["樣式", "样式", "テーマ", "", "Theme"],
    shouldOverrideDarkMode: ["強制取消暗黑模式", "强制取消暗色模式", "ダーク　モードを取り消す", "", "Override dark mode"],
    removeCookies: ["清除一切用戶設置", "清理一切用户设置", "全部ユーザー設定を消去する", "", "Remove all user preferences"],
    loading: ["加载中..", "加载中..", "ロード中..", "", "Loading.."]
};