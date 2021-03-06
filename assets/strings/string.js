/* Made by Penguin */

window.sentences = [
    ["就算你fail咗，我都唔會唔鍾意你", "就算你失败了，我也会爱你呀", "たとえ失敗しても、いつも愛している。", "", "No matter you succeeded or not,\n I will love you all the time"],
    ["今日系好运嘞，或系特别好运嘞？", "今天是好运气还是特别好运气呢", "今日は幸運ですか、それとも大幸運ですか。", "", "What will it be today? Good luck or great fortune?"]
];
window.feature = [
    ["主頁", "主页", "ホーム", "홈페이지", "Home"],
    ["車站資訊", "车站信息", "駅の情報", "역 정보", "Info"],
    ["路綫圖", "线路图", "路線図", "운영 로드맵", "Routemap"],
    ["設定", "设置", "設定", "설치", "Settings"]
];
window.theme = [
    ["簡潔白", "简洁白", "潔白", "화이트", "Simple White"],
    ["冷淡黑", "冷淡黑", "炭黒", "화이트", "Cold Black"],
    ["淡玫粉", "淡玫粉", "桜", "화이트", "Sakura"],
    ["盛夏黃", "盛夏黄", "黄蘗", "노랑", "Summer"],
    ["澄空藍", "澄空蓝", "瓶覗", "블루", "Skyblue"],
    ["细柳綠", "细柳绿", "裏柳", "초록", "Grass"]];
window.string = {
    infoDesc: ["簡介信息", "简介信息", "案内", "안내", "Info"],
    facilityDesc: ["車站設施", "车站设施", "ファシリティーズ", "역 시설", "Facilities"],
    locationDesc: ["地理座標", "地理坐标", "地図座標", "지리 좌표", "Map Position"],
    lineDesc: ["途經路綫", "经过线路", "経由路線", "통과 선", "Line Passed"],
    codeDesc: ["車站代碼", "站点代码", "駅ナンバーリング", "사이트 코드", "Station Code"],
    structureDesc: ["車站結構", "车站结构", "駅の結構", "스테이션 구조", "Structure Type"],
    structureInfo: [["地下車站", "地下车站", "地下駅", "지하역", "Underground Station"], ["地面車站", "地面车站", "地上駅", "지상 역", "Ground Station"], ["高架車站", "高架车站", "高架駅", "고가 역", "Overground Station"]],
    platformDesc: ["月台類型", "月台类型", "ホーム種別", "플랫폼 유형", "Platform Type"],
    platformInfo: [["島式月台", "岛式站台", "島式ホーム", "섬 플랫폼", "Island Platform"], ["側式站台", "侧式站台", "単式ホーム", "사이드 플랫폼", "Side Platform"], ["雙島式站台", "双岛式站台", "島式（2面4線）ホーム", "더블 아일랜드 플랫폼", "Double Island Platform"], ["雙側式站台", "双侧式站台", "相対式ホーム", "양면 플랫폼", "Double Side Platform"], ["完全混合式站台", "完全混合式站台", "複合式ホーム", "완전 하이브리드 플랫폼", "Mixed Platform"], ["西班牙式站台", "西班牙式站台", "乗降分離式ホーム", "스페인어 플랫폼", "Spanish solution"], ["分離式站台", "分离式站台", "分離式ホーム", "분리 된 섬 플랫폼", "Split Platform"]],
    hallDesc: ["站廳類別", "站厅类型", "コンコース種別", "역 홀 타입", "Concourse Type"],
    hallInfo: [["地下大堂", "地下站厅", "地下コンコース", "지하철역 홀", "Underground Concourse"], ["地面站廳", "地面站厅", "地面コンコース", "지상국 홀", "Ground Concourse"], ["高架站廳", "高架站厅", "高架コンコース", "높은 역 홀", "Overground Concourse"]],
    transferDesc: ["轉乘方式", "换乘方式", "乗り換え方式", "전송 방법", "Transfer Type"],
    transferInfo: [["同台轉乘", "同台换乘", "対面乗り換え", "동일한 플랫폼에서 전송", "Cross-platform Transfer"], ["通道轉乘", "通道换乘", "通路でお乗り換え", "채널 전송", "Transfer via passage"], ["節點轉乘", "节点换乘", "ノードでお乗り換え", "노드 전송", "Transfer via node"], ["站廳轉乘", "站厅换乘", "コンコースでお乗り換え", "역 이동", "Transfer via concourse"], ["出站轉乘", "出站转乘", "改札で乗り換え", "", "Transfer after exit"]],
    exitNum: ["出口數量", "出口数量", "出口の数量", "수출 횟수", "Exits Num"],
    FirstTrainDesc: ["首班車", "首班车", "始発時間", "첫 열차", "First Train Time"],
    LastTrainDesc: ["尾班車", "末班车", "終電時間", "末班车", "Last Train Time"],
    serviceTimeDesc: ["服務時間", "服务时间", "服務時間", "서비스 시간", "Service Time"],
    structureName: ["車站結構", "车站结构", "駅結構", "구조", "Station Structure"],
    exitName: ["出入口信息", "出入口信息", "出入口の情報", "출입국 정보", "Exits"],
    usageName: ["客流狀況", "客流情况", "利用客数の情報", "여객 흐름", "Passengers Flow"],
    historyName: ["歷史", "历史", "歴史", "연혁", "History"],
    futureExName: ["未來拓展", "未来拓展", "未來エクスパンション", "향후 확장", "Future Expansion"],
    operatedNy: ["由廣州地鐵集團運營", "由广州地铁集团运营", "広州メトロ公司が運営している", "광저우 메트로 그룹 운영", "Service Operated By GZMTR Co., Ltd"],
    belong: ["檢視設施對應的車門編號", "查看设施对应的车门号", "対応のホームドアのナンバーリングを見る", "시설에 해당하는 문 번호를 봅니다", "See facilities's nearby door"],
    beginNavi: ["或者開始導航", "或者开始导航", "ナビゲーションを始める", "또는 탐색 시작", "Or start a new navigation"],
    interchangeCost: ["轉乘預估耗時", "换乘大概耗时", "乗り換え時間は", "전송에는 약 시간이 걸립니다", "Transfer will take about"],
    Minute: ["分鐘", "分钟", "分", "분", "minute(s)"],
    ContinueTaking: ["繼續乘坐", "继续乘坐", "この電車を続くお乗りください", "계속 주행", "Continue taking this train."],
    WeRecomend: ["我們建議你在", "我们推荐您在", "もっと速く乗り換えると駅を出る為に", "우리는 당신을 추천합니다", "We recommend you to wait at screen door No."],
    DoorWait: ["號幕門處候車以快速轉乘/離站", "号屏蔽门处候车以便快速换乘/出站", "号ホームドアにお待ちはおすすめです", "역을 더 빨리 옮기거나 나가기위한 것", " for quicker transferring or exiting the station"],
    emptyWikiData: ["無維基數據", "无维基数据", "ウィキ　データはありません", "위키 데이터 없음", "No Wiki Data"],
    emptyInfData: ["無設施數據", "无设施数据", "施設データはありません", "시설 데이터가 없습니다", "No Facilities Data"],
    languageDesc: ["請選擇你的語言", "请选择您的语言", "言語を選んでください", "언어를 선택하십시오", "Please select your language"],
    themeDesc: ["樣式", "样式", "テーマ", "테마", "Theme"],
    shouldOverrideDarkMode: ["強制取消暗黑模式", "强制取消暗色模式", "ダーク　モードを取り消す", "어두운 모드의 강제 취소", "Override dark mode"],
    removeCookies: ["清除所有用戶設定", "清理一切用户设置", "全部ユーザー設定を消去する", "모든 사용자 설정 지우기", "Remove all user preferences"],
    loading: ["載入中..", "加载中..", "読み込み中..", "로드 중입니다 ..", "Loading.."],
    confirm: ["確認", "确定", "確認", "확인하다", "Confirm"],
    cancel: ["取消", "取消", "キャンセル", "취소", "Cancel"],
    true: ["開啟", "开启", "開く", "오픈", "True"],
    false: ["關閉", "关闭", "閉じる", "닫기", "False"],
    dirFrom: ["出發", "出发", "出発", "출발", "From"],
    dirTo: ["前往", "前往", "到着", "도착", "To"],
    aboutTime: ["預估耗時：", "大概耗时：", "予想の時間：", "시간이 걸린다 ", "About　"],
    aboutArrived: ["預估抵達時間", "大概到达时间", "予想の到着時間", "대략적인 도착 시간", "Approx. arrival time "],
    successfullyLoadStart: ["成功選擇起點", "成功选择起点", "起点が選んだ", "성공을위한 출발점 선택", "Start point chosen"],
    successfullyLoadEnd: ["成功選擇終點", "成功选择终点", "終点が選んだ", "엔드 포인트를 성공적으로 선택했습니다", "End point chosen"],
    hasMap: ["加載地圖插件", "加载地图插件", "地図プラグインを読み込む", "로드맵 플러그인", "Load Map Plugin"]
};
