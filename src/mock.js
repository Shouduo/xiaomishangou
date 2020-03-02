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


Mock.mock("seckillGoods", "get", seckillGoods);
Mock.mock("navbarGoods", "get", navbarGoods);