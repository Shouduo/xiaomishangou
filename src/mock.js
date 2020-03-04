import Mock from 'mockjs'

let seckillGoods = { 
"goods":[
    {
        "id": 12164564,
        "startTime": "18:30",
        "imgName": "1.jpg",
        "name": "小米极简都市双肩包 深灰",
        "tip": "方形立体设计",
        "nowPrice": 9.9,
        "fomerPrice": 149,
        "alertCount": 24087,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164565,
        "startTime": "18:30",
        "imgName": "2.png",
        "name": "米家智能插座基础版 白色",
        "tip": "让普通家电变智能",
        "nowPrice": 1,
        "fomerPrice": 59,
        "alertCount": 11851,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164566,
        "startTime": "18:30",
        "imgName": "4.jpg",
        "name": "米兔定位电话 白色",
        "tip": "时刻定位，守护你所爱",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 464,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164567,
        "startTime": "18:30",
        "imgName": "6.jpg",
        "name": "烟雾报警器 白色",
        "tip": "长效安全，精工品质",
        "nowPrice": 129,
        "fomerPrice": 149,
        "alertCount": 247,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164568,
        "startTime": "18:30",
        "imgName": "8.jpg",
        "name": "米家电水壶 白色",
        "tip": "一杯水，是一家人的安心",
        "nowPrice": 89,
        "fomerPrice": 99,
        "alertCount": 806,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164569,
        "startTime": "18:30",
        "imgName": "9.jpg",
        "name": "小米运动蓝牙耳机mini 黑色",
        "tip": "迷你机身, 小如蚕豆",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 280,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164570,
        "startTime": "18:30",
        "imgName": "10.jpg",
        "name": "米兔故事机mini 蓝色",
        "tip": "精选故事，小巧便捷",
        "nowPrice": 139,
        "fomerPrice": 149,
        "alertCount": 102,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12165570,
        "startTime": "18:30",
        "imgName": "42.jpg",
        "name": "小米路由器 白色",
        "tip": "300M单频，高增益4天线",
        "nowPrice": 59,
        "fomerPrice": 99,
        "alertCount": 1021,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12166570,
        "startTime": "18:30",
        "imgName": "43.jpg",
        "name": "高品质多功能头戴耳机",
        "tip": "我的私人KTV",
        "nowPrice": 169,
        "fomerPrice": 249,
        "alertCount": 1202,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12167570,
        "startTime": "18:30",
        "imgName": "44.jpg",
        "name": "米家扫地机器人1S 白色",
        "tip": "看得明白扫得彻底",
        "nowPrice": 1699,
        "fomerPrice": 1999,
        "alertCount": 502,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12168570,
        "startTime": "18:30",
        "imgName": "45.jpg",
        "name": "米家电动螺丝刀",
        "tip": "专利一体化无绳设计，轻松开工",
        "nowPrice": 179,
        "fomerPrice": 199,
        "alertCount": 692,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12169570,
        "startTime": "18:30",
        "imgName": "46.jpg",
        "name": "米家蓝牙温度湿度计2 三个装",
        "tip": "冷暖干湿，一望而知",
        "nowPrice": 69,
        "fomerPrice": 87,
        "alertCount": 293,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12170570,
        "startTime": "18:30",
        "imgName": "47.jpg",
        "name": "米家水离子吹风机 白色",
        "tip": "快速吹干，深度补水",
        "nowPrice": 189,
        "fomerPrice": 199,
        "alertCount": 102,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12171570,
        "startTime": "18:30",
        "imgName": "48.jpg",
        "name": "小米移动电源3 10000mAh USB-C双向快充版 银色",
        "tip": "双向18W快充 / 输入输出双接口 / 可上飞机，安全贴心",
        "nowPrice": 189,
        "fomerPrice": 199,
        "alertCount": 246,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12172570,
        "startTime": "18:30",
        "imgName": "49.jpg",
        "name": "Redmi 8 3GB+32BG 仙踪绿",
        "tip": "5000mAh超长续航",
        "nowPrice": 699,
        "fomerPrice": 799,
        "alertCount": 52,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    

    {
        "id": 12164571,
        "startTime": "20:00",
        "imgName": "5.jpg",
        "name": "米家车载空气净化器（USB车充版） 灰色",
        "tip": "高效净化车内空气",
        "nowPrice": 379,
        "fomerPrice": 499,
        "alertCount": 168,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164572,
        "startTime": "20:00",
        "imgName": "11.png",
        "name": "米家温湿度传感器 白色",
        "tip": "智能联动，改善室内温湿度",
        "nowPrice": 1,
        "fomerPrice": 49,
        "alertCount": 3358,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164573,
        "startTime": "20:00",
        "imgName": "12.jpg",
        "name": "米家蓝牙温湿度计 白色",
        "tip": "冷暖干湿，一目了然",
        "nowPrice": 59,
        "fomerPrice": 69,
        "alertCount": 161,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164574,
        "startTime": "20:00",
        "imgName": "13.jpg",
        "name": "小米水质TDS检测笔 白色",
        "tip": "准确检测家中水质纯度",
        "nowPrice": 29,
        "fomerPrice": 39,
        "alertCount": 247,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164575,
        "startTime": "20:00",
        "imgName": "14.png",
        "name": "米家LED吸顶灯 白色",
        "tip": "用光线，还原理想生活",
        "nowPrice": 379,
        "fomerPrice": 399,
        "alertCount": 57,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164576,
        "startTime": "20:00",
        "imgName": "15.png",
        "name": "最生活毛巾·青春系列 白色",
        "tip": "3秒吸水，杀菌无刺激",
        "nowPrice": 1,
        "fomerPrice": 19.9,
        "alertCount": 3340,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164577,
        "startTime": "20:00",
        "imgName": "17.jpg",
        "name": "米家声波电动牙刷 白色",
        "tip": "高效动力，刷的干净",
        "nowPrice": 178,
        "fomerPrice": 199,
        "alertCount": 971,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12173570,
        "startTime": "20:00",
        "imgName": "50.jpg",
        "name": "九号平衡车 白色",
        "tip": "年轻人的酷玩具",
        "nowPrice": 1899,
        "fomerPrice": 1999,
        "alertCount": 3,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12174570,
        "startTime": "20:00",
        "imgName": "51.jpg",
        "name": "小米米家照片打印机 特惠套装 白色",
        "tip": "6寸高清照片，即拍即印",
        "nowPrice": 649,
        "fomerPrice": 699,
        "alertCount": 4,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12175570,
        "startTime": "20:00",
        "imgName": "52.jpg",
        "name": "小米米家电动滑板车 白色",
        "tip": "便携折叠，自由穿行",
        "nowPrice": 1899,
        "fomerPrice": 1999,
        "alertCount": 120,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12176570,
        "startTime": "20:00",
        "imgName": "53.jpg",
        "name": "米家电压力锅 白色",
        "tip": "智能无极调压",
        "nowPrice": 548,
        "fomerPrice": 599,
        "alertCount": 42,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12177570,
        "startTime": "20:00",
        "imgName": "54.jpg",
        "name": "米家电动剃须刀S500 黑色",
        "tip": "浮动贴面更干净，减压设计更舒适",
        "nowPrice": 179,
        "fomerPrice": 199,
        "alertCount": 220,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12178570,
        "startTime": "20:00",
        "imgName": "55.jpg",
        "name": "米家飞利浦读写台灯 白色",
        "tip": "双重防眩光，专为读写而生",
        "nowPrice": 499,
        "fomerPrice": 569,
        "alertCount": 278,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12179570,
        "startTime": "20:00",
        "imgName": "56.jpg",
        "name": "米家无线手持擦地机 白色",
        "tip": "全家人都喜欢的擦地机",
        "nowPrice": 489,
        "fomerPrice": 499,
        "alertCount": 78,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12180570,
        "startTime": "20:00",
        "imgName": "57.jpg",
        "name": "小米净水器1A（厨下式） 白色",
        "tip": "小身材节省空间，大流量直出纯净水",
        "nowPrice": 1099,
        "fomerPrice": 1499,
        "alertCount": 48,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },


    {
        "id": 12164578,
        "startTime": "22:00",
        "imgName": "18.jpg",
        "name": "米家便携电动剃须刀 黑色",
        "tip": "男人必备的第二把剃须刀",
        "nowPrice": 168,
        "fomerPrice": 179,
        "alertCount": 538,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164579,
        "startTime": "22:00",
        "imgName": "19.png",
        "name": "米家声波电动牙刷头(通用型） 三支装 白色",
        "tip": "一支高效清洁的刷头",
        "nowPrice": 1,
        "fomerPrice": 69,
        "alertCount": 10253,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164580,
        "startTime": "22:00",
        "imgName": "20.png",
        "name": "小米笔记本Air 13 四核i5 8G 256G 银色",
        "tip": "轻薄全金属机身，256GB SSD",
        "nowPrice": 2499,
        "fomerPrice": 4499,
        "alertCount": 12845,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164581,
        "startTime": "22:00",
        "imgName": "21.jpg",
        "name": "小米Max 2 4GB+64GB 金色",
        "tip": "6.44\"大屏/充电宝级大电量/轻薄全金属",
        "nowPrice": 1049,
        "fomerPrice": 1699,
        "alertCount": 500,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164582,
        "startTime": "22:00",
        "imgName": "22.jpg",
        "name": "小米MIX 2 8GB+128GB 黑色全陶瓷",
        "tip": "全面屏2.0/5.99\"大屏 \/ 骁龙835旗舰处理器",
        "nowPrice": 2599,
        "fomerPrice": 4699,
        "alertCount": 696,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164583,
        "startTime": "22:00",
        "imgName": "23.png",
        "name": "小米自拍杆（线控版） 黑",
        "tip": "即插即用，拍照快人一步",
        "nowPrice": 1,
        "fomerPrice": 49,
        "alertCount": 9374,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164584,
        "startTime": "22:00",
        "imgName": "24.png",
        "name": "米家插线板3位基础版 白色 通用",
        "tip": "极简设计，轻松便捷",
        "nowPrice": 1,
        "fomerPrice": 24.9,
        "alertCount": 16177,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12181570,
        "startTime": "22:00",
        "imgName": "57.jpg",
        "name": "小米净水器1A（厨下式） 白色",
        "tip": "小身材节省空间，大流量直出纯净水",
        "nowPrice": 1099,
        "fomerPrice": 1499,
        "alertCount": 48,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12182570,
        "startTime": "22:00",
        "imgName": "56.jpg",
        "name": "米家无线手持擦地机 白色",
        "tip": "全家人都喜欢的擦地机",
        "nowPrice": 489,
        "fomerPrice": 499,
        "alertCount": 78,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12183570,
        "startTime": "22:00",
        "imgName": "55.jpg",
        "name": "米家飞利浦读写台灯 白色",
        "tip": "双重防眩光，专为读写而生",
        "nowPrice": 499,
        "fomerPrice": 569,
        "alertCount": 278,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12184570,
        "startTime": "22:00",
        "imgName": "54.jpg",
        "name": "米家电动剃须刀S500 黑色",
        "tip": "浮动贴面更干净，减压设计更舒适",
        "nowPrice": 179,
        "fomerPrice": 199,
        "alertCount": 220,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12185570,
        "startTime": "22:00",
        "imgName": "49.jpg",
        "name": "Redmi 8 3GB+32BG 仙踪绿",
        "tip": "5000mAh超长续航",
        "nowPrice": 699,
        "fomerPrice": 799,
        "alertCount": 52,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12186570,
        "startTime": "22:00",
        "imgName": "48.jpg",
        "name": "小米移动电源3 10000mAh USB-C双向快充版 银色",
        "tip": "双向18W快充 / 输入输出双接口 / 可上飞机，安全贴心",
        "nowPrice": 189,
        "fomerPrice": 199,
        "alertCount": 246,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12187570,
        "startTime": "22:00",
        "imgName": "47.jpg",
        "name": "米家水离子吹风机 白色",
        "tip": "快速吹干，深度补水",
        "nowPrice": 189,
        "fomerPrice": 199,
        "alertCount": 102,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12188570,
        "startTime": "22:00",
        "imgName": "46.jpg",
        "name": "米家蓝牙温度湿度计2 三个装",
        "tip": "冷暖干湿，一望而知",
        "nowPrice": 69,
        "fomerPrice": 87,
        "alertCount": 293,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },


    {
        "id": 12164585,
        "startTime": "00:00",
        "imgName": "25.jpg",
        "name": "小米手环3腕带 热力橙",
        "tip": "顺滑柔软 触感舒适",
        "nowPrice": 16.9,
        "fomerPrice": 19.9,
        "alertCount": 2063,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164586,
        "startTime": "00:00",
        "imgName": "26.jpg",
        "name": "小米运动蓝牙耳机mini 白色",
        "tip": "迷你机身, 小如蚕豆",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 223,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164587,
        "startTime": "00:00",
        "imgName": "27.png",
        "name": "小米活塞耳机 清新版 蓝色",
        "tip": "新鲜绽放，五色可选",
        "nowPrice": 1,
        "fomerPrice": 29,
        "alertCount": 11186,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164588,
        "startTime": "00:00",
        "imgName": "28.jpg",
        "name": "小米多功能都市休闲胸包 深灰",
        "tip": "装下你出行的所有需求",
        "nowPrice": 59,
        "fomerPrice": 69,
        "alertCount": 567,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164589,
        "startTime": "00:00",
        "imgName": "29.jpg",
        "name": "米家驱蚊器 白色",
        "tip": "长效驱蚊 静享一整个夏天",
        "nowPrice": 49,
        "fomerPrice": 59,
        "alertCount": 402,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164590,
        "startTime": "00:00",
        "imgName": "30.jpg",
        "name": "小米手环 2 黑色",
        "tip": "OLED 显示屏，触摸操作",
        "nowPrice": 129,
        "fomerPrice": 149,
        "alertCount": 323,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164591,
        "startTime": "00:00",
        "imgName": "31.jpg",
        "name": "米兔Hape 70粒益智积木 彩色",
        "tip": "德国工艺，妈妈放心",
        "nowPrice": 9.9,
        "fomerPrice": 99,
        "alertCount": 5287,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12189570,
        "startTime": "00:00",
        "imgName": "45.jpg",
        "name": "米家电动螺丝刀",
        "tip": "专利一体化无绳设计，轻松开工",
        "nowPrice": 179,
        "fomerPrice": 199,
        "alertCount": 692,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12190570,
        "startTime": "00:00",
        "imgName": "44.jpg",
        "name": "米家扫地机器人1S 白色",
        "tip": "看得明白扫得彻底",
        "nowPrice": 1699,
        "fomerPrice": 1999,
        "alertCount": 502,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12191570,
        "startTime": "00:00",
        "imgName": "43.jpg",
        "name": "高品质多功能头戴耳机",
        "tip": "我的私人KTV",
        "nowPrice": 169,
        "fomerPrice": 249,
        "alertCount": 1202,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12192570,
        "startTime": "00:00",
        "imgName": "58.jpg",
        "name": "小米口袋照片打印机",
        "tip": "15秒AR照片，记录更鲜活",
        "nowPrice": 299,
        "fomerPrice": 349,
        "alertCount": 1202,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12193570,
        "startTime": "00:00",
        "imgName": "42.jpg",
        "name": "小米路由器 白色",
        "tip": "300M单频，高增益4天线",
        "nowPrice": 59,
        "fomerPrice": 99,
        "alertCount": 1021,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12194569,
        "startTime": "00:00",
        "imgName": "9.jpg",
        "name": "小米运动蓝牙耳机mini 黑色",
        "tip": "迷你机身, 小如蚕豆",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 280,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12195568,
        "startTime": "00:00",
        "imgName": "8.jpg",
        "name": "米家电水壶 白色",
        "tip": "一杯水，是一家人的安心",
        "nowPrice": 89,
        "fomerPrice": 99,
        "alertCount": 806,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12196567,
        "startTime": "00:00",
        "imgName": "6.jpg",
        "name": "烟雾报警器 白色",
        "tip": "长效安全，精工品质",
        "nowPrice": 129,
        "fomerPrice": 149,
        "alertCount": 247,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },


    {
        "id": 12164592,
        "startTime": "08:00",
        "imgName": "32.jpg",
        "name": "米家行车记录仪 黑色",
        "tip": "晚上也可以拍清车牌",
        "nowPrice": 309,
        "fomerPrice": 349,
        "alertCount": 588,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164593,
        "startTime": "08:00",
        "imgName": "33.jpg",
        "name": "小米车载充电器快充版 银色",
        "tip": "让爱车成为移动充电站",
        "nowPrice": 59,
        "fomerPrice": 69,
        "alertCount": 341,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164594,
        "startTime": "08:00",
        "imgName": "35.jpg",
        "name": "米兔轨道积木 电动火车套装 彩色",
        "tip": "送给孩子的私人游乐场",
        "nowPrice": 279,
        "fomerPrice": 299,
        "alertCount": 44,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164595,
        "startTime": "08:00",
        "imgName": "36.png",
        "name": "小米电视4C 32英寸 黑色 32英寸",
        "tip": "高清液晶屏，人工智能系统",
        "nowPrice": 499,
        "fomerPrice": 999,
        "alertCount": 1794,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164596,
        "startTime": "08:00",
        "imgName": "37.png",
        "name": "小米随身蓝牙音箱 金属银",
        "tip": "全金属外壳，内置麦克风",
        "nowPrice": 1,
        "fomerPrice": 69,
        "alertCount": 3498,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164597,
        "startTime": "08:00",
        "imgName": "38.jpg",
        "name": "小米移动电源2C 20000mAh 白色",
        "tip": "大容量，一个就够用",
        "nowPrice": 129,
        "fomerPrice": 139,
        "alertCount": 103,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164598,
        "startTime": "08:00",
        "imgName": "39.png",
        "name": "小米USB Type C快速充电数据线 灰色",
        "tip": "快速充电，稳定传输",
        "nowPrice": 1,
        "fomerPrice": 16.9,
        "alertCount": 1558,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12197566,
        "startTime": "08:00",
        "imgName": "4.jpg",
        "name": "米兔定位电话 白色",
        "tip": "时刻定位，守护你所爱",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 464,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12198565,
        "startTime": "08:00",
        "imgName": "2.png",
        "name": "米家智能插座基础版 白色",
        "tip": "让普通家电变智能",
        "nowPrice": 1,
        "fomerPrice": 59,
        "alertCount": 11851,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12199564,
        "startTime": "08:00",
        "imgName": "1.jpg",
        "name": "小米极简都市双肩包 深灰",
        "tip": "方形立体设计",
        "nowPrice": 9.9,
        "fomerPrice": 149,
        "alertCount": 24087,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12200571,
        "startTime": "08:00",
        "imgName": "5.jpg",
        "name": "米家车载空气净化器（USB车充版） 灰色",
        "tip": "高效净化车内空气",
        "nowPrice": 379,
        "fomerPrice": 499,
        "alertCount": 168,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12201572,
        "startTime": "08:00",
        "imgName": "11.png",
        "name": "米家温湿度传感器 白色",
        "tip": "智能联动，改善室内温湿度",
        "nowPrice": 1,
        "fomerPrice": 49,
        "alertCount": 3358,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12202573,
        "startTime": "08:00",
        "imgName": "12.jpg",
        "name": "米家蓝牙温湿度计 白色",
        "tip": "冷暖干湿，一目了然",
        "nowPrice": 59,
        "fomerPrice": 69,
        "alertCount": 161,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12203574,
        "startTime": "08:00",
        "imgName": "13.jpg",
        "name": "小米水质TDS检测笔 白色",
        "tip": "准确检测家中水质纯度",
        "nowPrice": 29,
        "fomerPrice": 39,
        "alertCount": 247,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12204575,
        "startTime": "08:00",
        "imgName": "14.png",
        "name": "米家LED吸顶灯 白色",
        "tip": "用光线，还原理想生活",
        "nowPrice": 379,
        "fomerPrice": 399,
        "alertCount": 57,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },


    {
        "id": 12164599,
        "startTime": "10:00",
        "imgName": "2.png",
        "name": "米家智能插座基础版 白色",
        "tip": "让普通家电变智能",
        "nowPrice": 1,
        "fomerPrice": 59,
        "alertCount": 11851,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164600,
        "startTime": "10:00",
        "imgName": "6.jpg",
        "name": "烟雾报警器 白色",
        "tip": "长效安全，精工品质",
        "nowPrice": 129,
        "fomerPrice": 149,
        "alertCount": 247,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164601,
        "startTime": "10:00",
        "imgName": "9.jpg",
        "name": "小米运动蓝牙耳机mini 黑色",
        "tip": "迷你机身, 小如蚕豆",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 280,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164602,
        "startTime": "10:00",
        "imgName": "11.png",
        "name": "米家温湿度传感器 白色",
        "tip": "智能联动，改善室内温湿度",
        "nowPrice": 1,
        "fomerPrice": 49,
        "alertCount": 3358,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164603,
        "startTime": "10:00",
        "imgName": "15.png",
        "name": "最生活毛巾·青春系列 白色",
        "tip": "3秒吸水，杀菌无刺激",
        "nowPrice": 1,
        "fomerPrice": 19.9,
        "alertCount": 3340,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164604,
        "startTime": "10:00",
        "imgName": "21.jpg",
        "name": "小米Max 2 4GB+64GB 金色",
        "tip": "6.44\"大屏/充电宝级大电量/轻薄全金属",
        "nowPrice": 1049,
        "fomerPrice": 1699,
        "alertCount": 500,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164605,
        "startTime": "10:00",
        "imgName": "23.png",
        "name": "小米自拍杆（线控版） 黑",
        "tip": "即插即用，拍照快人一步",
        "nowPrice": 1,
        "fomerPrice": 49,
        "alertCount": 9374,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164606,
        "startTime": "10:00",
        "imgName": "26.jpg",
        "name": "小米运动蓝牙耳机mini 白色",
        "tip": "迷你机身, 小如蚕豆",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 223,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164607,
        "startTime": "10:00",
        "imgName": "30.jpg",
        "name": "小米手环 2 黑色",
        "tip": "OLED 显示屏，触摸操作",
        "nowPrice": 129,
        "fomerPrice": 149,
        "alertCount": 323,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164608,
        "startTime": "10:00",
        "imgName": "35.jpg",
        "name": "米兔轨道积木 电动火车套装 彩色",
        "tip": "送给孩子的私人游乐场",
        "nowPrice": 279,
        "fomerPrice": 299,
        "alertCount": 44,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164609,
        "startTime": "10:00",
        "imgName": "37.png",
        "name": "小米随身蓝牙音箱 金属银",
        "tip": "全金属外壳，内置麦克风",
        "nowPrice": 1,
        "fomerPrice": 69,
        "alertCount": 3498,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164610,
        "startTime": "10:00",
        "imgName": "39.png",
        "name": "小米USB Type C快速充电数据线 灰色",
        "tip": "快速充电，稳定传输",
        "nowPrice": 1,
        "fomerPrice": 16.9,
        "alertCount": 1558,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12205570,
        "startTime": "10:00",
        "imgName": "50.jpg",
        "name": "九号平衡车 白色",
        "tip": "年轻人的酷玩具",
        "nowPrice": 1899,
        "fomerPrice": 1999,
        "alertCount": 3,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12206570,
        "startTime": "10:00",
        "imgName": "51.jpg",
        "name": "小米米家照片打印机 特惠套装 白色",
        "tip": "6寸高清照片，即拍即印",
        "nowPrice": 649,
        "fomerPrice": 699,
        "alertCount": 4,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12207570,
        "startTime": "10:00",
        "imgName": "52.jpg",
        "name": "小米米家电动滑板车 白色",
        "tip": "便携折叠，自由穿行",
        "nowPrice": 1899,
        "fomerPrice": 1999,
        "alertCount": 120,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },


    {
        "id": 12164611,
        "startTime": "14:30",
        "imgName": "1.jpg",
        "name": "小米极简都市双肩包 深灰",
        "tip": "方形立体设计",
        "nowPrice": 9.9,
        "fomerPrice": 149,
        "alertCount": 24087,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164612,
        "startTime": "14:30",
        "imgName": "4.jpg",
        "name": "米兔定位电话 白色",
        "tip": "时刻定位，守护你所爱",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 464,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164613,
        "startTime": "14:30",
        "imgName": "8.jpg",
        "name": "米家电水壶 白色",
        "tip": "一杯水，是一家人的安心",
        "nowPrice": 89,
        "fomerPrice": 99,
        "alertCount": 806,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164614,
        "startTime": "14:30",
        "imgName": "9.jpg",
        "name": "小米运动蓝牙耳机mini 黑色",
        "tip": "迷你机身, 小如蚕豆",
        "nowPrice": 159,
        "fomerPrice": 169,
        "alertCount": 280,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164615,
        "startTime": "14:30",
        "imgName": "5.jpg",
        "name": "米家车载空气净化器（USB车充版） 灰色",
        "tip": "高效净化车内空气",
        "nowPrice": 379,
        "fomerPrice": 499,
        "alertCount": 168,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164616,
        "startTime": "14:30",
        "imgName": "12.jpg",
        "name": "米家蓝牙温湿度计 白色",
        "tip": "冷暖干湿，一目了然",
        "nowPrice": 59,
        "fomerPrice": 69,
        "alertCount": 161,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164617,
        "startTime": "14:30",
        "imgName": "14.png",
        "name": "米家LED吸顶灯 白色",
        "tip": "用光线，还原理想生活",
        "nowPrice": 379,
        "fomerPrice": 399,
        "alertCount": 57,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164618,
        "startTime": "14:30",
        "imgName": "17.jpg",
        "name": "米家声波电动牙刷 白色",
        "tip": "高效动力，刷的干净",
        "nowPrice": 178,
        "fomerPrice": 199,
        "alertCount": 971,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164619,
        "startTime": "14:30",
        "imgName": "18.jpg",
        "name": "米家便携电动剃须刀 黑色",
        "tip": "男人必备的第二把剃须刀",
        "nowPrice": 168,
        "fomerPrice": 179,
        "alertCount": 538,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164620,
        "startTime": "14:30",
        "imgName": "20.png",
        "name": "小米笔记本Air 13 四核i5 8G 256G 银色",
        "tip": "轻薄全金属机身，256GB SSD",
        "nowPrice": 2499,
        "fomerPrice": 4499,
        "alertCount": 12845,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164621,
        "startTime": "14:30",
        "imgName": "23.png",
        "name": "小米自拍杆（线控版） 黑",
        "tip": "即插即用，拍照快人一步",
        "nowPrice": 1,
        "fomerPrice": 49,
        "alertCount": 9374,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164622,
        "startTime": "14:30",
        "imgName": "25.jpg",
        "name": "小米手环3腕带 热力橙",
        "tip": "顺滑柔软 触感舒适",
        "nowPrice": 16.9,
        "fomerPrice": 19.9,
        "alertCount": 2063,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164623,
        "startTime": "14:30",
        "imgName": "27.png",
        "name": "小米活塞耳机 清新版 蓝色",
        "tip": "新鲜绽放，五色可选",
        "nowPrice": 1,
        "fomerPrice": 29,
        "alertCount": 11186,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12164624,
        "startTime": "14:30",
        "imgName": "29.jpg",
        "name": "米家驱蚊器 白色",
        "tip": "长效驱蚊 静享一整个夏天",
        "nowPrice": 49,
        "fomerPrice": 59,
        "alertCount": 402,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    },
    {
        "id": 12208624,
        "startTime": "14:30",
        "imgName": "59.jpg",
        "name": "小米平板4 8英寸 LTE版 4GB+64GB 金色",
        "tip": "大屏、长续航、超薄电脑",
        "nowPrice": 1299,
        "fomerPrice": 1499,
        "alertCount": 221,
        "amount": 100,
        "sold": 0,
        "status": "hanging" 
    }
]};

let navbarGoods = {
    "小米手机": [
        {
            "id": 32201000,
            "imgName": "60.png",
            "name": "小米10 Pro",
            "price": "4999元起"
        },
        {
            "id": 32201001,
            "imgName": "61.png",
            "name": "小米10",
            "price": "3999元起"
        },
        {
            "id": 32201002,
            "imgName": "62.png",
            "name": "小米CC9 Pro",
            "price": "2599元起"
        },
        {
            "id": 32201003,
            "imgName": "63.png",
            "name": "小米9 Pro 5G",
            "price": "3699元起"
        },
        {
            "id": 32201004,
            "imgName": "64.png",
            "name": "小米CC9",
            "price": "1499元起"
        },
        {
            "id": 32201005,
            "imgName": "65.png",
            "name": "小米CC9e",
            "price": "1299元"
        }
    ],
    "Redmi 红米": [
        {
            "id": 32201006,
            "imgName": "66.jpg",
            "name": "Redmi K30",
            "price": "1599元起"
        },
        {
            "id": 32201007,
            "imgName": "67.jpg",
            "name": "Redmi K30 5G",
            "price": "1999元起"
        },
        {
            "id": 32201008,
            "imgName": "68.png",
            "name": "Redmi 8A",
            "price": "599元起"
        },
        {
            "id": 32201009,
            "imgName": "69.png",
            "name": "Redmi Note 8",
            "price": "899元起"
        },
        {
            "id": 32201010,
            "imgName": "70.png",
            "name": "Redmi Note 8 Pro",
            "price": "1299元起"
        },
        {
            "id": 32201011,
            "imgName": "71.png",
            "name": "Redmi 8",
            "price": "699元"
        }
    ],
    "电视": [
        {
            "id": 32201012,
            "imgName": "72.jpg",
            "name": "Redmi 红米电视 70英寸 R70A",
            "price": "3299元"
        },
        {
            "id": 32201013,
            "imgName": "73.jpg",
            "name": "小米壁画电视 65英寸",
            "price": "6999元"
        },
        {
            "id": 32201014,
            "imgName": "74.jpg",
            "name": "小米全面屏电视E55A",
            "price": "1799元"
        },
        {
            "id": 32201015,
            "imgName": "75.png",
            "name": "小米电视4A 32英寸",
            "price": "699元"
        },
        {
            "id": 32201016,
            "imgName": "76.jpg",
            "name": "小米电视4A 55英寸",
            "price": "1699元"
        },
        {
            "id": 32201017,
            "imgName": "77.jpg",
            "name": "小米电视4A 65英寸",
            "price": "2599元"
        },
    ],
    "笔记本": [
        {
            "id": 32201018,
            "imgName": "78.jpg",
            "name": "小米电视4A 65英寸",
            "price": "2599元"
        },
        {
            "id": 32201019,
            "imgName": "79.png",
            "name": "小米电视4A 65英寸",
            "price": "2599元"
        },
        {
            "id": 32201020,
            "imgName": "80.png",
            "name": "小米电视4A 65英寸", 
            "price": "2599元"
        },
        {
            "id": 32201021,
            "imgName": "81.png",
            "name": "小米电视4A 65英寸",
            "price": "2599元"
        },
        {
            "id": 32201022,
            "imgName": "82.png",
            "name": "小米电视4A 65英寸",
            "price": "2599元"
        },
        {
            "id": 32201023,
            "imgName": "83.png",
            "name": "小米电视4A 65英寸",
            "price": "2599元"
        },
    ],
    "家电": [
        {
            "id": 32201024,
            "imgName": "84.png",
            "name": "米家互联网空调C1（一级效能）",
            "price": "2399元"
        },
        {
            "id": 32201025,
            "imgName": "85.png",
            "name": "米家互联网空调（一级效能）",
            "price": "1999元"
        },
        {
            "id": 32201026,
            "imgName": "86.jpg",
            "name": "Redmi全自动波轮洗衣机1A",
            "price": "799元"
        },
        {
            "id": 32201027,
            "imgName": "87.png",
            "name": "米家互联网洗烘一体机10kg",
            "price": "1999元"
        },
        {
            "id": 32201028,
            "imgName": "88.jpg",
            "name": "小米净水器",
            "price": "1299元"
        },
        {
            "id": 32201029,
            "imgName": "89.jpg",
            "name": "米家扫地机器人",
            "price": "1399元"
        },
    ],
    "路由器": [
        {
            "id": 32201030,
            "imgName": "90.png",
            "name": "小米AIoT路由器AX3600",
            "price": "599元"
        },
        {
            "id": 32201031,
            "imgName": "91.png",
            "name": "Redmi路由器AC2100",
            "price": "169元"
        },
        {
            "id": 32201032,
            "imgName": "92.png",
            "name": "小米路由器AC2100",
            "price": "229元"
        },
        {
            "id": 32201033,
            "imgName": "93.jpg",
            "name": "小米路由器 Mesh",
            "price": "999元"
        },
        {
            "id": 32201034,
            "imgName": "94.jpg",
            "name": "小米路由器4A 千兆版",
            "price": "129元"
        },
        {
            "id": 32201035,
            "imgName": "95.jpg",
            "name": "小米路由器 4C",
            "price": "59元"
        },
    ],
    "智能硬件": [
        {
            "id": 32201036,
            "imgName": "96.jpg",
            "name": "小米米家智能摄像机云台版",
            "price": "199元"
        },
        {
            "id": 32201037,
            "imgName": "97.jpg",
            "name": "小米小爱老师",
            "price": "449元起"
        },
        {
            "id": 32201038,
            "imgName": "98.jpg",
            "name": "小米米家智能门锁",
            "price": "1299元"
        },
        {
            "id": 32201039,
            "imgName": "99.jpg",
            "name": "小米小爱触屏音箱",
            "price": "199元"
        },
        {
            "id": 32201040,
            "imgName": "100.png", 
            "name": "Redmi小爱音箱 Play",
            "price": "79元"
        },
        {
            "id": 32201041,
            "imgName": "101.jpg",
            "name": "查看全部",
            "price": "智能硬件",
            "showMore": true
        },
    ]
};

let siteCategoryGoods = {
    "goods": [
    {
        "id": 4220,
        "itemName": "手机 电话卡",
        "itemsList": [
            {
                "id": 42201102,
                "imgName": "102.png",
                "name": "小米10 Pro"
            },
            {
                "id": 42201103,
                "imgName": "103.png",
                "name": "小米10"
            },
            {
                "id": 42201104,
                "imgName": "104.jpg",
                "name": "Redmi K30 4G"
            },
            {
                "id": 42201105,
                "imgName": "105.jpg",
                "name": "Redmi K30 5G"
            },
            {
                "id": 42201106,
                "imgName": "106.png",
                "name": "小米CC9 Pro"
            },
            {
                "id": 42201107,
                "imgName": "107.png",
                "name": "Redmi 8A"
            },
            {
                "id": 42201108,
                "imgName": "108.png",
                "name": "Redmi 8"
            },
            {
                "id": 42201109,
                "imgName": "109.png",
                "name": "小米MIX Alpha"
            },
            {
                "id": 42201110,
                "imgName": "110.png",
                "name": "小米9 Pro 5G"
            },
            {
                "id": 42201111,
                "imgName": "111.png",
                "name": "Redmi Note 8 Pro"
            },
            {
                "id": 42201112,
                "imgName": "112.png",
                "name": "Redmi Note 8"
            },
            {
                "id": 42201113,
                "imgName": "113.png",
                "name": "小米CC9"
            },
            {
                "id": 42201114,
                "imgName": "114.png",
                "name": "小米CC9美图定制版"
            },
            {
                "id": 42201115,
                "imgName": "115.png",
                "name": "小米CC9e"
            },
            {
                "id": 42201116,
                "imgName": "116.png",
                "name": "小米MIX 3"
            },
            {
                "id": 42201117,
                "imgName": "117.png",
                "name": "黑鲨手机2 Pro"
            },
            {
                "id": 42201118,
                "imgName": "118.jpg",
                "name": "Redmi 7A"
            },
            {
                "id": 42201119,
                "imgName": "119.jpg",
                "name": "Redmi Note 7 Pro"
            },
            {
                "id": 42201120,
                "imgName": "120.jpg",
                "name": "移动4G+专区"
            },
            {
                "id": 42201121,
                "imgName": "121.jpg",
                "name": "小米移动 电话卡"
            },
            {
                "id": 42201122,
                "imgName": "122.png",
                "name": "手机上门维修"
            },
            {
                "id": 42201123,
                "imgName": "123.jpg",
                "name": "云服务空间月卡"
            }
        ]
    },
    {
        "id": 4221,
        "itemName": "电视 盒子",
        "itemsList": [
            {
                "id": 42211124,
                "imgName": "124.png",
                "name": "小米电视5 55英寸"
            },
            {
                "id": 42211125,
                "imgName": "125.png",
                "name": "小米电视5 65英寸"
            },
            {
                "id": 42211126,
                "imgName": "126.png",
                "name": "小米电视5 75英寸"
            },
            {
                "id": 42211127,
                "imgName": "127.png",
                "name": "小米电视5 Pro 55英寸"
            },
            {
                "id": 42211128,
                "imgName": "128.png",
                "name": "小米电视5 Pro 65英寸"
            },
            {
                "id": 42211129,
                "imgName": "129.png",
                "name": "小米电视5 Pro 75英寸"
            },
            {
                "id": 42211130,
                "imgName": "130.jpg",
                "name": "Redmi 红米电视 70英寸"
            },
            {
                "id": 42211131,
                "imgName": "131.jpg",
                "name": "全面屏电视Pro 65英寸"
            },
            {
                "id": 42211132,
                "imgName": "132.jpg",
                "name": "全面屏电视Pro 55英寸"
            },
            {
                "id": 42211133,
                "imgName": "133.jpg",
                "name": "小米壁画电视 65英寸"
            },
            {
                "id": 42211134,
                "imgName": "134.jpg",
                "name": "小米全面屏电视"
            },
            {
                "id": 42211135,
                "imgName": "135.png",
                "name": "小米电视4A 32英寸"
            },
            {
                "id": 42211136,
                "imgName": "136.png",
                "name": "小米电视4A 43英寸青春版"
            },
            {
                "id": 42211137,
                "imgName": "137.jpg",
                "name": "小米电视4A 49英寸"
            },
            {
                "id": 42211138,
                "imgName": "138.png",
                "name": "小米电视4A 50英寸"
            },
            {
                "id": 42211139,
                "imgName": "139.png",
                "name": "小米电视4A 55英寸"
            },
            {
                "id": 42211140,
                "imgName": "140.png",
                "name": "小米电视4A 58英寸"
            },
            {
                "id": 42211141,
                "imgName": "141.png",
                "name": "小米电视4A 65英寸"
            },
            {
                "id": 42211142,
                "imgName": "142.png",
                "name": "小米电视4C 32英寸"
            },
            {
                "id": 42211143,
                "imgName": "143.jpg",
                "name": "小米电视4C 40英寸"
            },
            {
                "id": 42211144,
                "imgName": "144.png",
                "name": "小米电视4C 43英寸"
            },
            {
                "id": 42211145,
                "imgName": "145.png",
                "name": "小米电视4C 50英寸"
            },
            {
                "id": 42211146,
                "imgName": "146.jpg",
                "name": "小米电视4C 55英寸"
            },
            {
                "id": 42211147,
                "imgName": "147.png",
                "name": "小米电视4X 43英寸"
            }
        ]
    },
    {
        "id": 4222,
        "itemName": "笔记本 显示器 平板",
        "itemsList": [
            {
                "id": 42221148,
                "imgName": "148.jpg",
                "name": "RedmiBook 13"
            },
            {
                "id": 42221149,
                "imgName": "149.png",
                "name": "小米笔记本 15.6\""
            },
            {
                "id": 42221150,
                "imgName": "150.png",
                "name": "小米笔记本 13.3\""
            },
            {
                "id": 42221151,
                "imgName": "151.jpg",
                "name": "小米笔记本 12.5\""
            },
            {
                "id": 42221152,
                "imgName": "152.png",
                "name": "RedmiBook 14"
            },
            {
                "id": 42221153,
                "imgName": "153.jpg",
                "name": "小米笔记本"
            },
            {
                "id": 42221154,
                "imgName": "154.png",
                "name": "显示器"
            },
            {
                "id": 42221155,
                "imgName": "155.jpg",
                "name": "小米平板4"
            },
            {
                "id": 42221156,
                "imgName": "156.png",
                "name": "键鼠套装"
            },
            {
                "id": 42221157,
                "imgName": "157.png",
                "name": "鼠标"
            },
            {
                "id": 42221158,
                "imgName": "158.png",
                "name": "转接器"
            },
            {
                "id": 42221159,
                "imgName": "159.jpg",
                "name": "平板配件"
            },
            {
                "id": 42221160,
                "imgName": "160.jpg",
                "name": "小米笔记本内胆包"
            },
        ]
    },
    {
        "id": 4223,
        "itemName": "家电 插线板",
        "itemsList": [
            {
                "id": 42231161,
                "imgName": "161.jpg",
                "name": "冰箱"
            },
            {
                "id": 42231162,
                "imgName": "162.png",
                "name": "立式空调"
            },
            {
                "id": 42231163,
                "imgName": "163.png",
                "name": "壁挂空调"
            },
            {
                "id": 42231164,
                "imgName": "164.png",
                "name": "滚筒洗衣机"
            },
            {
                "id": 42231165,
                "imgName": "165.jpg",
                "name": "Redmi全自动波轮洗衣机"
            },
            {
                "id": 42231166,
                "imgName": "166.jpg",
                "name": "净水器"
            },
            {
                "id": 42231167,
                "imgName": "167.jpg",
                "name": "微波炉"
            },
            {
                "id": 42231168,
                "imgName": "168.jpg",
                "name": "电烤箱"
            },
            {
                "id": 42231169,
                "imgName": "169.jpg",
                "name": "扫地机器人"
            },
            {
                "id": 42231170,
                "imgName": "170.jpg",
                "name": "吸尘器"
            },
            {
                "id": 42231171,
                "imgName": "171.jpg",
                "name": "空气净化器"
            },
            {
                "id": 42231172,
                "imgName": "172.jpg",
                "name": "电饭煲"
            },
            {
                "id": 42231173,
                "imgName": "173.jpg",
                "name": "电磁炉"
            },
            {
                "id": 42231174,
                "imgName": "174.jpg",
                "name": "电水壶"
            },
            {
                "id": 42231175,
                "imgName": "175.jpg",
                "name": "滤水壶"
            },
            {
                "id": 42231176,
                "imgName": "176.png",
                "name": "落地风扇"
            },
            {
                "id": 42231177,
                "imgName": "177.png",
                "name": "投影仪"
            },
            {
                "id": 42231178,
                "imgName": "178.jpg",
                "name": "灯具"
            },
            {
                "id": 42231179,
                "imgName": "179.jpg",
                "name": "插线板"
            },
            {
                "id": 42231180,
                "imgName": "180.jpg",
                "name": "新风机"
            },
            {
                "id": 42231181,
                "imgName": "181.jpg",
                "name": "电暖器"
            },
            {
                "id": 42231182,
                "imgName": "182.jpg",
                "name": "电压力锅"
            },
            {
                "id": 42231183,
                "imgName": "183.jpg",
                "name": "料理机"
            },
            {
                "id": 42231184,
                "imgName": "184.jpg",
                "name": "电煮壶"
            },
        ]
    },
    {
        "id": 4224,
        "itemName": "出行 穿戴",
        "itemsList": [
            {
                "id": 42241185,
                "imgName": "185.png",
                "name": "小米手表"
            },
            {
                "id": 42241186,
                "imgName": "186.png",
                "name": "手环手表"
            },
            {
                "id": 42241187,
                "imgName": "187.jpg",
                "name": "VR"
            },
            {
                "id": 42241188,
                "imgName": "188.jpg",
                "name": "平衡车"
            },
            {
                "id": 42241189,
                "imgName": "189.jpg",
                "name": "滑板车"
            },
            {
                "id": 42241190,
                "imgName": "190.png",
                "name": "自行车"
            },
            {
                "id": 42241191,
                "imgName": "191.jpg",
                "name": "车载充电器"
            },
            {
                "id": 42241192,
                "imgName": "192.jpg",
                "name": "平衡车配件"
            },
            {
                "id": 42241193,
                "imgName": "193.jpg",
                "name": "智能后视镜"
            },
            {
                "id": 42241194,
                "imgName": "194.jpg",
                "name": "智能记录仪"
            },
            {
                "id": 42241195,
                "imgName": "195.jpg",
                "name": "无线车充"
            },
            {
                "id": 42241196,
                "imgName": "196.jpg",
                "name": "充气宝"
            },
            {
                "id": 42241197,
                "imgName": "197.jpg",
                "name": "平衡轮"
            },
            {
                "id": 42241198,
                "imgName": "198.jpg",
                "name": "石英表"
            }
        ]
    },
    {
        "id": 4225,
        "itemName": "智能 路由器",
        "itemsList": [
            {
                "id": 42251199,
                "imgName": "199.jpg",
                "name": "打印机"
            },
            {
                "id": 42251200,
                "imgName": "200.png",
                "name": "喷墨打印机"
            },
            {
                "id": 42251201,
                "imgName": "201.png",
                "name": "喷墨打印机墨水"
            },
            {
                "id": 42251202,
                "imgName": "202.png",
                "name": "小米路由器"
            },
            {
                "id": 42251203,
                "imgName": "203.jpg",
                "name": "智能家庭"
            },
            {
                "id": 42251204,
                "imgName": "204.jpg",
                "name": "对讲机"
            },
            {
                "id": 42251205,
                "imgName": "205.jpg",
                "name": "摄像机"
            },
            {
                "id": 42251206,
                "imgName": "206.jpg",
                "name": "照相机"
            },
            {
                "id": 42251207,
                "imgName": "207.jpg",
                "name": "智能门锁"
            },
            {
                "id": 42251208,
                "imgName": "208.jpg",
                "name": "智能门铃"
            },
            {
                "id": 42251209,
                "imgName": "209.png",
                "name": "小爱老师"
            },
            {
                "id": 42251210,
                "imgName": "210.png",
                "name": "Redmi路由器"
            },
            {
                "id": 42251211,
                "imgName": "211.jpg",
                "name": "小爱音箱"
            },
            {
                "id": 42251212,
                "imgName": "212.png",
                "name": "云服务空间年卡"
            },
            {
                "id": 42251213,
                "imgName": "213.png",
                "name": "云服务空间月卡"
            }
        ]
    },
    {
        "id": 4226,
        "itemName": "电源 配件",
        "itemsList": [
            {
                "id": 42261214,
                "imgName": "214.png",
                "name": "移动电源"
            },
            {
                "id": 42261215,
                "imgName": "215.jpg",
                "name": "数据线"
            },
            {
                "id": 42261216,
                "imgName": "216.jpg",
                "name": "车充"
            },
            {
                "id": 42261217,
                "imgName": "217.png",
                "name": "充电器"
            },
            {
                "id": 42261218,
                "imgName": "218.jpg",
                "name": "电池"
            },
            {
                "id": 42261219,
                "imgName": "219.jpg",
                "name": "自拍杆"
            },
            {
                "id": 42261220,
                "imgName": "220.jpg",
                "name": "手机壳"
            },
            {
                "id": 42261221,
                "imgName": "221.jpg",
                "name": "手机贴膜"
            },
            {
                "id": 42261222,
                "imgName": "222.png",
                "name": "无线充电器"
            },
            {
                "id": 42261223,
                "imgName": "223.jpg",
                "name": "平板配件"
            },
            {
                "id": 42261224,
                "imgName": "224.jpg",
                "name": "黑鲨配件"
            },
            {
                "id": 42261225,
                "imgName": "225.jpg",
                "name": "其他配件"
            }
        ]
    },
    {
        "id": 4227,
        "itemName": "健康 儿童",
        "itemsList": [
            {
                "id": 42271226,
                "imgName": "226.jpg",
                "name": "洗手机"
            },
            {
                "id": 42271227,
                "imgName": "227.jpg",
                "name": "修剪器"
            },
            {
                "id": 42271228,
                "imgName": "228.jpg",
                "name": "剃须刀"
            },
            {
                "id": 42271229,
                "imgName": "229.jpg",
                "name": "日光镜"
            },
            {
                "id": 42271230,
                "imgName": "230.jpg",
                "name": "牙刷"
            },
            {
                "id": 42271231,
                "imgName": "231.jpg",
                "name": "吹风机"
            },
            {
                "id": 42271232,
                "imgName": "232.png",
                "name": "体重秤"
            },
            {
                "id": 42271233,
                "imgName": "233.jpg",
                "name": "体脂秤"
            },
            {
                "id": 42271234,
                "imgName": "234.jpg",
                "name": "早教启智"
            },
            {
                "id": 42271235,
                "imgName": "235.jpg",
                "name": "遥控电动"
            },
            {
                "id": 42271236,
                "imgName": "236.jpg",
                "name": "益智积木"
            },
            {
                "id": 42271237,
                "imgName": "237.jpg",
                "name": "儿童手表"
            },
            {
                "id": 42271238,
                "imgName": "238.jpg",
                "name": "儿童滑板鞋"
            },
            {
                "id": 42271239,
                "imgName": "239.jpg",
                "name": "婴儿推车"
            },
            {
                "id": 42271240,
                "imgName": "240.jpg",
                "name": "儿童书包"
            },
            {
                "id": 42271241,
                "imgName": "241.jpg",
                "name": "婴儿理发器"
            },
            {
                "id": 42271242,
                "imgName": "242.jpg",
                "name": "儿童保温杯"
            },
            {
                "id": 42271243,
                "imgName": "243.png",
                "name": "健身车"
            },
            {
                "id": 42271244,
                "imgName": "244.jpg",
                "name": "走步机"
            },
            {
                "id": 42271245,
                "imgName": "245.jpg",
                "name": "点读机"
            }
        ]
    },
    {
        "id": 4228,
        "itemName": "耳机 音箱",
        "itemsList": [
            {
                "id": 42281246,
                "imgName": "246.png",
                "name": "音箱 Pro"
            },
            {
                "id": 42281247,
                "imgName": "247.png",
                "name": "小爱音箱"
            },
            {
                "id": 42281248,
                "imgName": "248.jpg",
                "name": "小米小爱音箱 Play版"
            },
            {
                "id": 42281249,
                "imgName": "249.jpg",
                "name": "线控耳机"
            },
            {
                "id": 42281250,
                "imgName": "250.jpg",
                "name": "蓝牙耳机"
            },
            {
                "id": 42281251,
                "imgName": "251.jpg",
                "name": "头戴耳机"
            },
            {
                "id": 42281252,
                "imgName": "252.jpg",
                "name": "品牌耳机"
            },
            {
                "id": 42281253,
                "imgName": "253.png",
                "name": "蓝牙音箱"
            },
            {
                "id": 42281254,
                "imgName": "254.jpg",
                "name": "小米AI音箱"
            },
            {
                "id": 42281255,
                "imgName": "255.jpg",
                "name": "小米小爱音箱HD"
            },
            {
                "id": 42281256,
                "imgName": "256.jpg",
                "name": "k歌耳机"
            },
            {
                "id": 42281257,
                "imgName": "257.png",
                "name": "Redmi音箱"
            },
            {
                "id": 42281258,
                "imgName": "258.jpg",
                "name": "小爱触屏音箱"
            }
        ]
    },
    {
        "id": 4229,
        "itemName": "生活 箱包",
        "itemsList": [
            {
                "id": 42291259,
                "imgName": "259.jpg",
                "name": "小背包"
            },
            {
                "id": 42291260,
                "imgName": "260.jpg",
                "name": "双肩包"
            },
            {
                "id": 42291261,
                "imgName": "261.jpg",
                "name": "胸包"
            },
            {
                "id": 42291262,
                "imgName": "262.jpg",
                "name": "旅行箱"
            },
            {
                "id": 42291263,
                "imgName": "263.jpg",
                "name": "运动鞋"
            },
            {
                "id": 42291264,
                "imgName": "264.jpg",
                "name": "眼镜"
            },
            {
                "id": 42291265,
                "imgName": "265.jpg",
                "name": "床垫"
            },
            {
                "id": 42291266,
                "imgName": "266.png",
                "name": "枕头"
            },
            {
                "id": 42291267,
                "imgName": "267.jpg",
                "name": "饰品"
            },
            {
                "id": 42291268,
                "imgName": "268.jpg",
                "name": "螺丝刀"
            },
            {
                "id": 42291269,
                "imgName": "269.jpg",
                "name": "保温杯"
            },
            {
                "id": 42291270,
                "imgName": "270.jpg",
                "name": "伞"
            },
            {
                "id": 42291271,
                "imgName": "271.jpg",
                "name": "驱蚊器"
            },
            {
                "id": 42291272,
                "imgName": "272.jpg",
                "name": "尤克里里"
            },
            {
                "id": 42291273,
                "imgName": "273.jpg",
                "name": "毛巾/浴巾"
            },
            {
                "id": 42291274,
                "imgName": "274.png",
                "name": "米兔"
            },
            {
                "id": 42291275,
                "imgName": "275.jpg",
                "name": "笔"
            }
        ]
    }
]}


Mock.mock("seckillGoods", "get", seckillGoods);
Mock.mock("navbarGoods", "get", navbarGoods);
Mock.mock("siteCategoryGoods", "get", siteCategoryGoods);