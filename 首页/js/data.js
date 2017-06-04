var serverul = {
    serveritem: [
        {
            ptitle: 
                '售后服务',
            ultitle: [
                '物流与配送', 
                '上门安装', 
                '上门安装', 
                '手机维修', 
                '延保服务', 
                '家电回收'
            ]
        },
        {
            ptitle: 
                '帮助服务',
            ultitle: [
                '焦点问题', '账户安全', '签收与验货', '分期付款', '退款说明', '优惠券说明'
            ]
        }
    ]
}
var serve_tmp = $('#serve_tmp').render(serverul);
$('.serve-dropdown').prepend(serve_tmp);


var sitemap = {
    mapitem: [
        {
            droptitle: '主题促销',
            droplist: [
                {
                    listitem: [
                        '真划算',
                        '抢购',
                        '海外购',
                        '国美定制'
                    ]
                },
                {
                    listitem: [
                        '家电城',
                        '服饰城',
                        '国美超市',
                        '家装馆'
                    ]
                },
                {
                    listitem: [
                        '智能家居',
                        '今日特卖',
                        '新品抢先',
                        '品牌街'
                    ]
                }
            ]
        },
        {
            droptitle: '特色分类',
            droplist: [
                {
                    listitem: [
                        '电视影音',
                        '冰洗',
                        '洗衣机',
                        '空调',
                        '厨卫生活'
                    ]
                },
                {
                    listitem: [
                        '手机',
                        '数码',
                        '电脑办公',
                        '精品配件',
                        '汽车'
                    ]
                },
                {
                    listitem: [
                        '住宅家具',
                        '家装建材',
                        '家居日用',
                        '床品家纺',
                        '黄金收藏'
                    ]
                },
                {
                    listitem: [
                        '服饰鞋帽',
                        '运动户外',
                        '箱包奢品',
                        '钟表首饰',
                        '文化艺术'
                    ]
                },
                {
                    listitem: [
                        '食品酒水',
                        '医疗保健',
                        '母婴玩具',
                        '美妆个护'
                    ]
                }
            ]
        },
        {
            droptitle: '便捷服务',
            droplist: [
                {
                    listitem: [
                        '话费充值',
                        '游戏点卡',
                        '机票',
                        '电影票',
                        '美盈宝',
                        '定期理财',
                        '转让理财'
                    ]
                },
                {
                    listitem: [
                        '流量充值',
                        '酒店',
                        '火车票',
                        '演出票',
                        '投金宝',
                        '票据理财',
                        '上门服务'
                    ]
                }
            ]
        },
        {
            droptitle: '更多热点',
            droplist: [
                {
                    listitem: [
                        '商家入驻',
                        '企业采购',
                        '国美社区',
                        '购明白'
                    ]
                }
            ]
        },
        {
            droptitle: '国美旗下',
            droplist: [
                {
                    listitem: [
                        '多边金都',
                        '国之美',
                        '国美家装',
                        '国美管家'
                    ]
                }
            ]
        }
    ] 
}
var sitemap_tmp = $('#sitemap_tmp').render(sitemap);
$('.sitemap-dropdown').prepend(sitemap_tmp);
$('.sitemap-dropdown dl').first().addClass('none');
$('a:contains(国美定制)').after('<i class="new"></i>');
$('a:contains(企业采购)').after('<i class="hot_icon"></i>');


var category = {
    catelist: [
        {
            slidenav_title: [
                '手机',
                '充值',
                '相机',
                '智能数码'
            ],
            category_title: [
                '潮3C >',
                '手机 >',
                '手机配件 >',
                '数码 >',
                '以旧换新 >',
                '手机充值 >',
                '美通卡 >',
                '延保服务 >',
                '办公生活馆 >'
            ],
            category_item: [
                {
                    item_title: '手机通讯',
                    item_list: [
                        '手机',
                        '对讲机'
                    ]
                },
                {
                    item_title: '运营商',
                    item_list: [
                        '中国移动',
                        '中国电信',
                        '3G上网卡'
                    ]
                },
                {
                    item_title: '手机配件',
                    item_list: [
                        '移动电源',
                        '存储卡/读卡器',
                        '蓝牙耳机',
                        '有线耳机',
                        'iphone配件',
                        '保护套',
                        '贴膜',
                        '手机电池',
                        '智能手环/手表',
                        '其他配件'
                    ]
                },
                {
                    item_title: '摄影摄像',
                    item_list: [
                        '数码相机',
                        '单反相机',
                        '单电/微单相机',
                        '摄像机',
                        '拍立得'
                    ]
                },
                {
                    item_title: '摄照配件',
                    item_list: [
                        '存储卡',
                        '单反镜头',
                        '单反配件',
                        '电池/充电器',
                        '摄照包',
                        '贴膜/清洁用品',
                        '三脚架/云台',
                        '滤镜'
                    ]
                },
                {
                    item_title: '智能设备',
                    item_list: [
                        '智能手表',
                        '智能手环',
                        'VR眼镜',
                        '智能家居',
                        '健康监测',
                        '无人机',
                        '智能配饰'
                    ]
                },
                {
                    item_title: '视听娱乐',
                    item_list: [
                        '耳机/耳麦',
                        '音箱/音响',
                        'MP3/MP4',
                        '收/录音机'
                    ]
                },
                {
                    item_title: '电子教育',
                    item_list: [
                        '电子书',
                        '电子词典',
                        '录音笔',
                        '学生平板',
                        '点读机/复读机'
                    ]
                },
                {
                    item_title: '充话费',
                    item_list: [
                        '移动/联通/电信/极信'
                    ]
                },
                {
                    item_title: '充流量',
                    item_list: [
                        '移动/联通/电信'
                    ]
                }
            ],
            brand_path: [
                'img/华为.jpg',
                'img/苹果.jpeg',
                'img/三星.jpeg',
                'img/小米.jpeg',
                'img/佳能.jpeg',
                'img/360.jpeg',
                'img/话费充值.jpeg',
                'img/流量充值.jpeg'
            ],
            activity_path: 'img/5.18手机预热.jpeg'
        },
        {
            slidenav_title: [
                '电脑',
                '办公配件'
            ],
            category_title: [
                '潮3C >',
                '电脑办公 >',
                '精品配件 >',
                '以旧换新 >',
                '美通卡 >',
                '延保服务 >',
                '办公生活馆 >'
            ],
            category_item: [
                {
                    item_title: '电脑整机',
                    item_list: [
                        '笔记本',
                        '超极本',
                        '游戏本',
                        '平板电脑',
                        '台式电脑',
                        '台式主机',
                        '一体机',
                        '笔记本配件',
                        '服务器'
                    ]
                },
                {
                    item_title: '外设产品',
                    item_list: [
                        '移动硬盘',
                        '鼠标',
                        '鼠标垫',
                        'U盘',
                        '电脑音箱',
                        '键盘',
                        '散热垫',
                        '电脑清洁',
                        '笔记本包',
                        '耳机',
                        '麦克风',
                        '摄像头/监控摄像'
                    ]
                },
                {
                    item_title: '网络设备',
                    item_list: [
                        '路由器',
                        '网卡',
                        '交换机',
                        '3G/4G上网',
                        '网络电视盒/体感游戏'
                    ]
                },
                {
                    item_title: '办公打印',
                    item_list: [
                        '打印机',
                        '一体机',
                        '投影机',
                        '投影配件',
                        '传真机',
                        '复印机',
                        '碎纸机',
                        '扫描仪',
                        '墨盒/墨粉',
                        '硒鼓',
                        '色带'
                    ]
                },
                {
                    item_title: '办公文仪',
                    item_list: [
                        '办公文具',
                        '文件管理',
                        '保险箱',
                        '电话机',
                        '支付设备',
                        '点钞机',
                        '计算器',
                        '激光笔',
                        '白板/封装',
                        '考勤设备',
                        '纸类',
                        '笔类'
                    ]
                },
                {
                    item_title: '苹果配件',
                    item_list: [
                        'iPod配件',
                        '移动电源',
                        '保护套',
                        '保护膜',
                        '背壳',
                        '连接线',
                        '底座/支架',
                        '车载设备',
                        '触控笔',
                        '容量扩充',
                        '耳机'
                    ]
                },
                {
                    item_title: '电脑配件',
                    item_list: [
                        'CPU',
                        '主板',
                        '显卡',
                        '硬盘',
                        '内存',
                        '机箱',
                        '电源',
                        '显示器',
                        '光驱',
                        'DIY整机',
                        '装机散热器',
                        '声卡/拓展卡'
                    ]
                },
                {
                    item_title: '增值产品',
                    item_list: [
                        '电脑远程服务'
                    ]
                }
            ],
            brand_path: [
                'img/联想.png',
                'img/华硕.png',
                'img/苹果.jpeg',
                'img/戴尔.png',
                'img/HP.jpeg',
                'img/ThinkPad.png',
                'img/神州.png',
                'img/msi.png'
            ],
            activity_path: 'img/魅利518.jpeg'
        },
        {
            part: '2',
            slidenav_title: [
                '电视',
                '影音',
                '智能',
                '国美管家'
            ],
            category_title: [
                '电视影音 >',
                '美通卡 >',
                '以旧换新 >',
                '延保服务 >',
                '办公生活馆 >'
            ],
            part_con: [
                {
                    category_item: [
                        {
                            item_title: '电视',
                            item_list: [
                                '平板电视',
                                '55英寸',
                                '50英寸',
                                '65英寸',
                                '60英寸',
                                '43英寸',
                                '40英寸',
                                '智能电视',
                                '大屏电视',
                                '4K超高清',
                                '曲面电视',
                                'HDR电视'
                            ]
                        },
                        {
                            item_title: '电视配件',
                            item_list: [
                                '3D电视配件',
                                '保养配件',
                                '插线板',
                                '智能电视盒',
                                '电视挂架'
                            ]
                        },
                        {
                            item_title: '音响/DVD',
                            item_list: [
                                '影院',
                                '播放器',
                                '音响'
                            ]
                        },
                        {
                            item_title: '影音配件',
                            item_list: [
                                '其他配件',
                                '影音线材',
                                '线材转换器'
                            ]
                        },
                        {
                            item_title: '智能设备',
                            item_list: [
                                '智能手环',
                                '智能手表',
                                '智能眼镜',
                                '智能家居',
                                '航拍设备',
                                '智能配饰'
                            ]
                        }
                    ]
                },
                {
                    category_item: [
                        {
                            item_title: '以旧换新',
                            item_list: [
                                '手机回收',
                                '家电回收',
                                '电脑回收'
                            ]
                        },
                        {
                            item_title: '清洗保养',
                            item_list: [
                                '家电保养',
                                '家电清洗'
                            ]
                        },
                        {
                            item_title: '延长保修',
                            item_list: [
                                '家电延长保修'
                            ]
                        },
                        {
                            item_title: '安装调试',
                            item_list: [
                                '空调安装'
                            ]
                        },
                        {
                            item_title: '家居保养',
                            item_list: [
                                '家居养护',
                                '地板打蜡',
                                '卫生间深度保洁',
                                '床品除螨'
                            ]
                        },
                        {
                            item_title: '维修服务',
                            item_list: [
                                '上门维修',
                                '家电维修',
                                '手机维修换屏',
                                '苹果专修'
                            ]
                        }
                    ]
                }
            ],
            brand_path: [
                'img/Hisense.jpeg',
                'img/电视长虹.jpeg',
                'img/TCL.jpeg',
                'img/电视康佳.jpg',
                'img/Skyworth.jpeg',
                'img/三星.jpeg',
                'img/SONY.jpeg',
                'img/看尚.jpeg'
            ],
            activity_path: 'img/海尔32寸.jpeg'
        },
        {
            slidenav_title: [
                '空调',
                '冰箱',
                '洗衣机'
            ],
            category_title: [
                '空调 >',
                '冰箱 >',
                '洗衣机 >',
                '大家电节能专区 >',
                '美通卡 >',
                '以旧换新 >',
                '延保服务 >',
                '家电清洗服务 >',
                '办公生活馆 >'
            ],
            category_item: [
                {
                    item_title: '空调/商用',
                    item_list: [
                        '家用空调',
                        '商用空调',
                        '中央空调',
                        '壁挂式空调',
                        '柜式空调',
                        '移动空调',
                        '定频',
                        '变频',
                        '单冷空调',
                        '冷暖空调',
                        '冷暖电辅',
                        '小1匹',
                        '1匹',
                        '1.5匹',
                        '2匹',
                        '3匹',
                        '除甲醛',
                        '祛PM2.5',
                        'wifi操控',
                        '圆柱形柜机'
                    ]
                },
                {
                    item_title: '冰箱/冷柜',
                    item_list: [
                        '冰箱',
                        '冰柜',
                        '酒柜',
                        '迷你冰箱',
                        '电脑式',
                        '机械式',
                        '冰箱配件',
                        '对开门',
                        '多门',
                        '三门',
                        '双门',
                        '单门'
                    ]
                },
                {
                    item_title: '洗衣机/干衣机',
                    item_list: [
                        '洗衣机',
                        '滚筒',
                        '全自动',
                        '干衣机',
                        '双缸洗衣机',
                        '迷你洗衣机',
                        '洗衣机配件',
                        '5KG',
                        '5.1KG-5.9KG',
                        '6KG',
                        '6.1KG-6.9KG',
                        '7KG',
                        '7.1KG-7.9KG',
                        '8KG',
                        '8KG以上'
                    ]
                }
            ],
            brand_path: [
                'img/冰洗海尔.jpg',
                'img/AUX_C.jpg',
                'img/冰洗美的.jpg',
                'img/DAIKIN.jpeg',
                'img/容声冰箱.jpg',
                'img/Electrolux.jpg',
                'img/新飞.jpg',
                'img/长虹.jpg'
            ],
            activity_path: 'img/冰洗518.jpeg'
        },
        {
            slidenav_title: [
                '厨房卫浴',
                '生活电器',
                '净化器'
            ],
            category_title: [
                '烟灶卫浴馆 >',
                '厨卫新活馆 >',
                '小家电馆 >',
                '国美净水馆 >',
                '美通卡 >',
                '延保服务 >',
                '家电清洗服务 >'
            ],
            category_item: [
                {
                    item_title: '厨卫大电',
                    item_list: [
                        '油烟机',
                        '燃气灶',
                        '消毒柜/商用大柜',
                        '燃气热水器',
                        '电热水器',
                        '即热热水器',
                        '浴霸/换气扇',
                        '洗碗机/嵌入烤箱',
                        '壁挂炉',
                        '太阳能热水器',
                        '烟灶套餐',
                        '厨卫配件'
                    ]
                },
                {
                    item_title: '厨房小电',
                    item_list: [
                        '微波炉',
                        '豆浆机',
                        '电饭煲',
                        '电磁炉/电陶炉',
                        '电压力锅',
                        '炊具',
                        '原汁机/榨汁机',
                        '料理机',
                        '电烤箱',
                        '面包机/多士炉',
                        '咖啡机',
                        '电火锅',
                        '电水壶',
                        '电饼铛/烤饼机',
                        '电蒸锅',
                        '酸奶机/冰淇淋机',
                        '煮蛋器',
                        '电炖锅/炖盅',
                        '多用途锅',
                        '养生壶'
                    ]
                },
                {
                    item_title: '环境电器',
                    item_list: [
                        '电风扇',
                        '空调扇',
                        '空气净化器',
                        '除湿机',
                        '加湿器',
                        '净化器滤网',
                        '取暖器'
                    ]
                },
                {
                    item_title: '个人护理',
                    item_list: [
                        '剃须刀',
                        '电吹风',
                        '理发器',
                        '剃/脱毛器',
                        '鼻毛修剪器',
                        '美发器',
                        '美容仪',
                        '电动牙刷',
                        '冲牙器'
                    ]
                },
                {
                    item_title: '水家电',
                    item_list: [
                        '净水器/设备',
                        '饮水机',
                        '滤水壶',
                        '净水龙头',
                        '净水桶',
                        '滤料',
                        '净饮机/智饮机'
                    ]
                },
                {
                    item_title: '家居电器',
                    item_list: [
                        '吸尘器',
                        '挂烫机',
                        '扫地机器人',
                        '干衣机/干鞋器',
                        '毛球修剪器',
                        '电熨斗',
                        '清洁机'
                    ]
                },
                {
                    item_title: '健康电器',
                    item_list: [
                        '甩脂瘦身',
                        '足浴盆',
                        '其他按摩器',
                        '电子秤',
                        '按摩椅',
                        '眼部按摩机',
                        '足疗机',
                        '血压计',
                        '按摩椅垫',
                        '计步器',
                        '其他健康电器',
                        '家用制氧机'
                    ]
                }
            ],
            brand_path: [
                'img/厨卫海尔.jpg',
                'img/小家电惠人11.12.jpg',
                'img/厨卫华帝.jpg',
                'img/生活电器沁园.jpg',
                'img/老板.jpg',
                'img/万家乐.jpeg',
                'img/格兰仕.jpg',
                'img/冰洗美的.jpg'
            ],
            activity_path: 'img/生活家电.jpg'
        },
        {
            part: '2',
            slidenav_title: [
                '食品酒水',
                '母婴玩具'
            ],
            category_title: [
                '食品酒水 >',
                '母婴玩具 >',
                '海外购食品保健 >',
                '食品酒水盛宴 >',
                '海外购母婴 >',
                '母婴管家 >'
            ],
            part_con: [
                {
                    category_item: [
                        {
                            item_title: '休闲零食',
                            item_list: [
                                '坚果炒货',
                                '糖果巧克力',
                                '肉干肉脯',
                                '饼干糕点',
                                '休闲零食'
                            ]
                        },
                        {
                            item_title: '粮油生鲜',
                            item_list: [
                                '水果蔬菜',
                                '海鲜水产',
                                '肉禽蛋',
                                '米面粮油',
                                '南北干货',
                                '粽子'
                            ]
                        },
                        {
                            item_title: '进口食品',
                            item_list: [
                                '牛奶',
                                '冲调饮品',
                                '饼干糕点',
                                '糖/巧克力',
                                '米面粮油',
                                '休闲零食'
                            ]
                        },
                        {
                            item_title: '酒水',
                            item_list: [
                                '白酒',
                                '洋酒',
                                '葡萄酒',
                                '黄酒',
                                '啤酒',
                                '保健酒',
                                '收藏酒/老酒'
                            ]
                        },
                        {
                            item_title: '礼卡特产',
                            item_list: [
                                '东北',
                                '西北',
                                '华北',
                                '西南',
                                '华东',
                                '月饼卡',
                                '大闸蟹',
                                '礼品卡',
                                '美通卡'
                            ]
                        },
                        {
                            item_title: '冲调饮品',
                            item_list: [
                                '咖啡',
                                '谷物冲调',
                                '饮料/蔬果汁/水',
                                '奶茶',
                                '其他'
                            ]
                        },
                        {
                            item_title: '茶叶',
                            item_list: [
                                '绿茶',
                                '铁观音',
                                '普洱茶',
                                '红茶',
                                '金骏眉',
                                '花茶',
                                '草本花果茶'
                            ]
                        }
                    ]
                },
                {
                    category_item: [
                        {
                            item_title: '奶粉',
                            item_list: [
                                '1段奶粉',
                                '2段奶粉',
                                '3段奶粉',
                                '4段奶粉',
                                '妈妈奶粉',
                                '学前奶粉'
                            ]
                        },
                        {
                            item_title: '童车童床',
                            item_list: [
                                '婴儿推车',
                                '安全座椅',
                                '餐椅摇椅',
                                '婴儿床',
                                '自行车',
                                '电动车'
                            ]
                        },
                        {
                            item_title: '尿裤湿巾',
                            item_list: [
                                '品牌尿裤',
                                'NB码',
                                'S码',
                                'M码',
                                'L码',
                                '拉拉裤'
                            ]
                        },
                        {
                            item_title: '喂养洗护',
                            item_list: [
                                '奶瓶奶嘴',
                                '餐具饮具',
                                '暖奶/消毒',
                                '吸奶器',
                                '洗发沐浴',
                                '清洁用品'
                            ]
                        },
                        {
                            item_title: '营养辅食',
                            item_list: [
                                '米粉/菜粉',
                                '肉松/面类',
                                'DHA',
                                '钙铁锌硒',
                                '宝宝零食',
                                '清火开胃'
                            ]
                        },
                        {
                            item_title: '服饰用品',
                            item_list: [
                                '男童装',
                                '女童装',
                                '妈妈服饰',
                                '外出用品',
                                '妈妈护肤',
                                '防辐射服'
                            ]
                        },
                        {
                            item_title: '玩具乐器',
                            item_list: [
                                '益智玩具',
                                '电动遥控',
                                '毛绒/布艺',
                                '模型玩具',
                                '文体用品'
                            ]
                        }
                    ]
                }
            ],
            brand_path: [
                'img/酒水汇源.jpg',
                'img/本来生活.jpeg',
                'img/酒水五粮液.jpg',
                'img/金六福.jpeg',
                'img/百草味.jpg',
                'img/现代牧业.jpeg',
                'img/gome cellar.jpg',
                'img/好孩子.jpg'
            ]
        },
        {
            part: '2',
            slidenav_title: [
                '医疗保健',
                '美妆个护'
            ],
            category_title: [
                '医疗保健 >',
                '美妆个护 >',
                '海外购美妆 >',
                '名品个护 >',
                '两性生活 >'
            ],
            part_con: [
                {
                    category_item: [
                        {
                            item_title: '营养成分',
                            item_list: [
                                '蛋白粉',
                                '钙',
                                '酵素',
                                '维生素/矿物质',
                                '鱼油',
                                '左旋肉碱'
                            ]
                        },
                        {
                            item_title: '进口保健品',
                            item_list: [
                                '美体塑身',
                                '明目益智',
                                '美容养颜',
                                '免疫调节',
                                '骨骼健康',
                                '肝肾养护'
                            ]
                        },
                        {
                            item_title: '家庭测量仪',
                            item_list: [
                                '血压计',
                                '血糖测量',
                                '体温计',
                                '计步器',
                                '心率/心电测量仪'
                            ]
                        },
                        {
                            item_title: '家庭治疗仪',
                            item_list: [
                                '制氧机',
                                '雾化器',
                                '护理床',
                                '医护用品',
                                '环境健康'
                            ]
                        },
                        {
                            item_title: '成人用品',
                            item_list: [
                                '安全避孕',
                                '润滑/延时',
                                '情爱玩具',
                                '情趣内衣',
                                '验孕测孕'
                            ]
                        }
                    ]
                },
                {
                    category_item: [
                        {
                            item_title: '面部护理',
                            item_list: [
                                '洁面',
                                '化妆水',
                                '乳液面霜',
                                '面膜',
                                '防晒隔离',
                                '套装礼盒',
                                '眼部护理',
                                '美容仪器'
                            ]
                        },
                        {
                            item_title: '身体护理',
                            item_list: [
                                '洗发护发',
                                '沐浴',
                                '脱毛膏',
                                '纤体瘦身',
                                '染发造型'
                            ]
                        },
                        {
                            item_title: '个护清洁',
                            item_list: [
                                '纸品湿巾',
                                '衣物清洁',
                                '口腔护理',
                                '女性护理',
                                '家庭清洁'
                            ]
                        },
                        {
                            item_title: '魅力彩妆',
                            item_list: [
                                '粉底遮瑕',
                                '卸妆',
                                '睫毛膏',
                                '唇彩',
                                '化妆工具',
                                '彩妆组合',
                                '美甲'
                            ]
                        },
                        {
                            item_title: '香水香氛',
                            item_list: [
                                '女士香水',
                                '男士香水',
                                '香水套装',
                                '迷你香水',
                                '香体走珠'
                            ]
                        },
                        {
                            item_title: '男士护理',
                            item_list: [
                                '剃须护理',
                                '防脱洗护',
                                '脸部护理',
                                '眼部护理',
                                '男士唇膏'
                            ]
                        }
                    ]
                }
            ],
            brand_path: [
                'img/鱼跃.jpg',
                'img/杜蕾斯.jpg',
                'img/康比特.jpg',
                'img/母婴雅培.jpg',
                'img/滴露.jpg',
                'img/清风.jpg',
                'img/安洁.jpg',
                'img/苏菲.jpg'
            ]
        },
        {
            slidenav_title: [
                '服饰鞋帽',
                '箱包奢品'
            ],
            category_title: [
                '服饰鞋帽 >',
                '箱包奢品 >',
                '服装城 >',
                '潮流服饰 >'
            ],
            category_item: [
                {
                    item_title: '品质男装',
                    item_list: [
                        '衬衫',
                        'T恤',
                        '风衣',
                        'polo衫',
                        '夹克',
                        '休闲裤',
                        '牛仔裤',
                        '针织衫',
                        '毛呢大衣',
                        '风衣',
                        '西装',
                        '西裤',
                        '皮衣'
                    ]
                },
                {
                    item_title: '时尚女装',
                    item_list: [
                        '连衣裙',
                        '裙外套',
                        '牛仔裤',
                        '衬衫',
                        'T恤',
                        '卫衣/绒衫',
                        '针织衫',
                        '西装',
                        '棉服',
                        '风衣',
                        '毛呢外套',
                        '毛衣'
                    ]
                },
                {
                    item_title: '家居内衣',
                    item_list: [
                        '男士内裤',
                        '女式内裤',
                        '抹胸/背心',
                        '男袜',
                        '女袜',
                        '文胸',
                        '打底裤/丝袜',
                        '保暖内衣',
                        '家居服',
                        '睡裙/睡袍',
                        '儿童系列',
                        '泳装'
                    ]
                },
                {
                    item_title: '精品男鞋',
                    item_list: [
                        '商务鞋',
                        '休闲鞋',
                        '板鞋',
                        '帆布鞋',
                        '家居拖鞋',
                        '凉鞋/沙滩鞋',
                        '男靴'
                    ]
                },
                {
                    item_title: '潮流女鞋',
                    item_list: [
                        '休闲鞋',
                        '单鞋',
                        '高跟鞋',
                        '平底鞋',
                        '家居拖鞋',
                        '帆布鞋',
                        '凉鞋',
                        '女靴'
                    ]
                },
                {
                    item_title: '服饰配件',
                    item_list: [
                        '太阳镜/眼镜',
                        '男士皮带',
                        '遮阳伞',
                        '鞋配件',
                        '手套',
                        '帽子',
                        '围巾',
                        '丝巾/披肩'
                    ]
                },
                {
                    item_title: '奢侈品',
                    item_list: [
                        '单肩包',
                        '手提包',
                        '钱包/卡包',
                        '斜挎包'
                    ]
                },
                {
                    item_title: '精品男包',
                    item_list: [
                        '斜挎包',
                        '钱包/卡包',
                        '商务手提包',
                        '皮带/礼盒',
                        '手包'
                    ]
                },
                {
                    item_title: '功能包',
                    item_list: [
                        '登山包',
                        '学生包',
                        '休闲运动包',
                        '电脑包',
                        '数码/摄影包'
                    ]
                },
                {
                    item_title: '旅行箱包',
                    item_list: [
                        '登机箱',
                        '旅行包',
                        '托运箱',
                        '旅行配件'
                    ]
                },
                {
                    item_title: '时尚女包',
                    item_list: [
                        '单肩包',
                        '钱包/卡包',
                        '手拿包',
                        '手提包',
                        '双肩包',
                        '斜挎包'
                    ]
                }
            ],
            brand_path: [
                'img/jinho.jpeg',
                'img/OSDY.jpeg',
                'img/浪莎.jpeg',
                'img/雷朋3.2.jpg',
                'img/hodo.jpg',
                'img/youngor.jpeg',
                'img/septwolves.jpg',
                'img/tries.jpeg'
            ],
            activity_path: 'img/母爱无疆.jpeg'
        },
        {
            slidenav_title: [
                '运动户外',
                '钟表首饰'
            ],
            category_title: [
                '运动户外 >',
                '钟表首饰 >',
                '大牌便宜购 >'
            ],
            category_item: [
                {
                    item_title: '运动鞋服',
                    item_list: [
                        '跑步鞋',
                        '休闲鞋/板鞋',
                        '篮球鞋',
                        '帆布鞋',
                        '足球鞋',
                        '训练鞋',
                        '凉鞋/拖鞋',
                        '运动套装',
                        '运动T恤',
                        '卫衣',
                        '夹克',
                        '运动长裤',
                        '瑜伽'
                    ]
                },
                {
                    item_title: '运动器械',
                    item_list: [
                        '运动器材',
                        '器械/跑步机',
                        '护具',
                        '自行车',
                        '极限轮滑',
                        '羽毛球',
                        '网球',
                        '乒乓球',
                        '篮球',
                        '足球',
                        '瑜伽垫',
                        '电子琴',
                        '运动健康',
                        '其他健身'
                    ]
                },
                {
                    item_title: '户外装备',
                    item_list: [
                        '帐篷',
                        '背包',
                        '桌椅床',
                        '望远镜',
                        '照明',
                        '垫子',
                        '工具',
                        '炊具',
                        '垂钓',
                        '烧烤',
                        '军迷用品',
                        '其他'
                    ]
                },
                {
                    item_title: '户外鞋服',
                    item_list: [
                        '冲锋衣/裤',
                        '软壳',
                        '夹克',
                        '卫衣',
                        '户外衬衣',
                        '速干衣/裤',
                        '户外配饰',
                        '登山鞋',
                        '徒步鞋',
                        '越野鞋',
                        '休闲鞋',
                        '溯溪鞋',
                        '沙滩鞋/拖鞋',
                        '户外T恤'
                    ]
                },
                {
                    item_title: '钟表',
                    item_list: [
                        '瑞士品牌表',
                        '国产品牌表',
                        '日韩品牌表',
                        '时尚品牌表',
                        '儿童手表',
                        '挂钟闹钟'
                    ]
                },
                {
                    item_title: '珠宝首饰',
                    item_list: [
                        '纯金K金饰品',
                        '金银投资',
                        '银饰品',
                        '钻石饰品',
                        '翡翠玉石',
                        '水晶玛瑙',
                        '宝石珍珠',
                        '时尚饰品'
                    ]
                },
                {
                    item_title: '礼品',
                    item_list: [
                        '火机烟具',
                        '礼品文具',
                        '瑞士军刀',
                        '礼卡礼券',
                        '工艺礼品',
                        '创意礼品',
                        '收藏品',
                        '鲜花速递'
                    ]
                }
            ],
            brand_path: [
                'img/钟表zippo.jpg',
                'img/耐克.jpg',
                'img/运动探拓者.jpg',
                'img/钟表罗西尼.jpg',
                'img/TISSOT.jpg',
                'img/DW.jpg',
                'img/CASIO.jpg',
                'img/REA.jpeg'
            ],
            activity_path: 'img/腕表盛宴.jpeg'
        },
        {
            slidenav_title: [
                '住宅家具',
                '家装建材',
                '装修'
            ],
            category_title: [
                '住宅家具 >',
                '家装建材 >',
                '家装馆 >',
                '精品家具 >',
                '鉴藏红木家具 >',
                '装修 >'
            ],
            category_item: [
                {
                    item_title: '客厅家具',
                    item_list: [
                        '沙发',
                        '实木沙发',
                        '皮艺沙发',
                        '茶几',
                        '布艺沙发',
                        '电视柜',
                        '鞋柜',
                        '衣帽架'
                    ]
                },
                {
                    item_title: '卧室家具',
                    item_list: [
                        '实木床',
                        '皮艺床',
                        '布艺床',
                        '床头柜',
                        '床',
                        '床垫',
                        '梳妆台',
                        '衣柜',
                        '镜类'
                    ]
                },
                {
                    item_title: '餐厅家具',
                    item_list: [
                        '餐桌',
                        '餐椅',
                        '餐桌椅套装',
                        '餐边柜'
                    ]
                },
                {
                    item_title: '儿童办公',
                    item_list: [
                        '儿童桌椅',
                        '儿童床类',
                        '儿童衣柜',
                        '儿童套装',
                        '休闲躺椅',
                        '班台桌',
                        '办公椅',
                        '文件柜'
                    ]
                },
                {
                    item_title: '书房家具',
                    item_list: [
                        '书桌/电脑桌',
                        '电脑椅',
                        '书柜'
                    ]
                },
                {
                    item_title: '储物户外',
                    item_list: [
                        '置物架',
                        '层架',
                        '晾衣架',
                        '户外桌椅'
                    ]
                },
                {
                    item_title: '厨房卫浴',
                    item_list: [
                        '水槽',
                        '净水',
                        '厨房挂件',
                        '卫浴挂件',
                        '淋浴花洒',
                        '地漏/角阀',
                        '水龙头',
                        '马桶',
                        '面盆',
                        '浴缸',
                        '浴室柜',
                        '卫浴用品'
                    ]
                },
                {
                    item_title: '灯具光源',
                    item_list: [
                        'LED灯',
                        '吊灯',
                        '节能灯',
                        '台灯',
                        '吸顶灯',
                        '应急/手电'
                    ]
                },
                {
                    item_title: '电工电料',
                    item_list: [
                        '开关',
                        '插座',
                        '电线',
                        '断路器',
                        '接线板',
                        '电工配件',
                        '安防监控'
                    ]
                },
                {
                    item_title: '吊顶/采暖',
                    item_list: [
                        '厨卫照明',
                        '地热',
                        '换气扇',
                        '扣板',
                        '散热器',
                        '浴霸'
                    ]
                }
            ],
            brand_path: [
                'img/宝优妮.jpeg',
                'img/家具-曲尚logo.jpg',
                'img/拉菲曼尼.jpeg',
                'img/建材-雷士WW.jpg',
                'img/箭牌.png',
                'img/佳宜居.jpg',
                'img/西门子.png',
                'img/松下.png'
            ],
            activity_path: 'img/电料专场.jpeg'
        },
        {
            slidenav_title: [
                '床品家纺',
                '家居日用'
            ],
            category_title: [
                '床品家纺 >',
                '家居日用 >',
                '海外购家居 >',
                '家居特卖惠 >',
                '家装城 >'
            ],
            category_item: [
                {
                    item_title: '夏凉用品',
                    item_list: [
                        '凉席',
                        '夏凉被',
                        '蚊帐',
                        '凉枕',
                        '凉品套装'
                    ]
                },
                {
                    item_title: '床品件套',
                    item_list: [
                        '三件套',
                        '四件套',
                        '床单被罩',
                        '多件套',
                        '婚庆件套',
                        '六件套'
                    ]
                },
                {
                    item_title: '芯类',
                    item_list: [
                        '被子',
                        '枕芯枕套',
                        '床垫/床褥',
                        '抱枕靠垫',
                        '毛巾被/毯',
                        '电热毯'
                    ]
                },
                {
                    item_title: '毛巾家纺',
                    item_list: [
                        '面巾',
                        '浴巾',
                        '方巾',
                        '毛巾套装',
                        '童巾',
                        '浴衣/浴袍',
                        '运动巾'
                    ]
                },
                {
                    item_title: '布艺纺织',
                    item_list: [
                        '地毯/地垫',
                        '家居服',
                        '家居鞋',
                        '窗帘/窗纱',
                        '沙发套/垫',
                        '洗衣机罩',
                        '桌布',
                        '布艺饰品'
                    ]
                },
                {
                    item_title: '厨具',
                    item_list: [
                        '烹饪锅具',
                        '刀剪砧板',
                        '保鲜收纳',
                        '厨房小件',
                        '精美餐具'
                    ]
                },
                {
                    item_title: '水具茶具',
                    item_list: [
                        '保温杯',
                        '保温壶/桶',
                        '塑料杯',
                        '茶具',
                        '紫砂杯/陶瓷杯',
                        '玻璃杯',
                        '酒具'
                    ]
                },
                {
                    item_title: '家装软饰',
                    item_list: [
                        '居家软饰',
                        '工艺摆件',
                        '创意小件',
                        '家用保健'
                    ]
                },
                {
                    item_title: '生活日用',
                    item_list: [
                        '缝纫用品',
                        '收纳用品',
                        '洗晒用品',
                        '浴室用品',
                        '净化除味',
                        '雨伞雨具',
                        '衣橱衣架'
                    ]
                },
                {
                    item_title: '清洁用品',
                    item_list: [
                        '居室清洁',
                        '清洁工具',
                        '驱虫除害',
                        '纸品湿巾',
                        '垃圾收纳',
                        '防护用品',
                        '衣物清洁'
                    ]
                }
            ],
            brand_path: [
                'img/家居-心相印logo.jpg',
                'img/家居-苏泊尔logo.jpg',
                'img/彩阳.jpeg',
                'img/家纺-红豆logo.jpg',
                'img/喜人.jpeg',
                'img/南极人.jpg',
                'img/lock.jpg',
                'img/张小泉.png'
            ],
            activity_path: 'img/苏泊尔.jpeg'
        },
        {
            slidenav_title: [
                '汽车整车',
                '汽车用品'
            ],
            category_title: [
                '国美汽车 >',
                '汽车周边 >',
                '自驾游装备8折 >',
                '汽车装备满100减10 >'
            ],
            category_item: [
                {
                    item_title: '整车服务',
                    item_list: [
                        '新车定金',
                        '新车全款',
                        '汽车保险',
                        '维修保养',
                        '摩托车全款'
                    ]
                },
                {
                    item_title: '车载电器',
                    item_list: [
                        '行车记录仪',
                        '导航仪',
                        '安全预警仪',
                        '净化器',
                        '冷暖箱',
                        '吸尘器',
                        '倒车雷达',
                        '车载生活电器',
                        '时尚影音',
                        '蓝牙设备',
                        '电源'
                    ]
                },
                {
                    item_title: '养护配件',
                    item_list: [
                        '机油',
                        '添加剂',
                        '防冻液',
                        '空调养护',
                        '刹车油',
                        '底盘装甲',
                        '水箱养护',
                        '轮胎',
                        '雨刷',
                        '滤清器',
                        '蓄电池',
                        '车衣',
                        '车灯/灯泡',
                        '刹车片',
                        '喇叭',
                        '火花塞',
                        '改装配件',
                        '贴膜'
                    ]
                },
                {
                    item_title: '美容清洁',
                    item_list: [
                        '洗车机/水枪',
                        '车蜡',
                        '玻璃水',
                        '清洁剂',
                        '汽车配件',
                        '补漆笔'
                    ]
                },
                {
                    item_title: '车饰精品',
                    item_list: [
                        '专车专用系列',
                        '四季垫',
                        '座套',
                        '香水',
                        '颈枕腰靠',
                        '挂饰摆件',
                        '功能精品',
                        '内饰精品',
                        '整理收纳',
                        '脚垫',
                        '毛垫',
                        '多功能坐垫',
                        '后备箱垫'
                    ]
                },
                {
                    item_title: '安全自驾',
                    item_list: [
                        '儿童安全座椅',
                        '防盗设备',
                        '胎压监测',
                        '应急救援',
                        '自驾装备',
                        '倒车雷达',
                        '打气泵',
                        '摩托车用品',
                        '电动平衡车'
                    ]
                }
            ],
            brand_path: [
                'img/01任e行汽车.jpg',
                'img/02美孚汽车.jpg',
                'img/03凌度汽车.jpg',
                'img/04感恩汽车.jpg',
                'img/路途乐.png',
                'img/嘉实多.png',
                'img/turtle.jpg',
                'img/途美.jpg'
            ],
            activity_path: 'img/汽车日报.jpeg'
        },
        {
            slidenav_title: [
                '黄金收藏',
                '文化艺术'
            ],
            category_title: [
                '黄金收藏 >',
                '文化艺术 >',
                '天天低价 >'
            ],
            category_item: [
                {
                    item_title: '金银投资',
                    item_list: [
                        '投资金',
                        '投资银',
                        '多边金都',
                        '粤通',
                        '天鑫洋',
                        '香榭丽',
                        '臻汇银',
                        '零兑金'
                    ]
                },
                {
                    item_title: '黄金饰品',
                    item_list: [
                        '项链',
                        '吊坠',
                        '手链',
                        '手镯',
                        '耳钉',
                        '耳环',
                        '耳坠',
                        '戒指',
                        '其他',
                        '周大福',
                        '传世美玉'
                    ]
                },
                {
                    item_title: '限量藏品',
                    item_list: [
                        '金银珍藏',
                        '邮币珍藏',
                        '黄金摆件',
                        '特许商品',
                        '其他藏品',
                        '搜藏天下',
                        '九藏天下',
                        '中邮收藏',
                        '金石收藏'
                    ]
                },
                {
                    item_title: '书法',
                    item_list: [
                        '行书',
                        '楷书',
                        '隶书',
                        '草书',
                        '竖幅',
                        '横幅'
                    ]
                },
                {
                    item_title: '国画',
                    item_list: [
                        '花鸟',
                        '人物',
                        '山水',
                        '写意',
                        '斗方',
                        '竖幅',
                        '横幅'
                    ]
                },
                {
                    item_title: '文玩杂项',
                    item_list: [
                        '手串珠串',
                        '雕件绣品',
                        '民间工艺',
                        '内画'
                    ]
                },
                {
                    item_title: '陶瓷紫砂',
                    item_list: [
                        '茶器',
                        '陈设器',
                        '紫砂',
                        '陶瓷',
                        '彩绘瓷',
                        '茶具'
                    ]
                },
                {
                    item_title: '珠宝玉石',
                    item_list: [
                        '翡翠',
                        '冰糯种'
                    ]
                }
            ],
            brand_path: [
                'img/周大福.jpg',
                'img/黄金多边.jpg',
                'img/天鑫洋.jpg',
                'img/金大生.jpeg',
                'img/金都.jpg',
                'img/CNUTI.jpg',
                'img/零兑金.png',
                'img/尊爵.jpg'
            ],
            activity_path: 'img/珠宝旗舰店.png'
        },
        {
            slidenav_title: [
                '旅行',
                '电影票',
                '演出票',
                '游戏'
            ],
            category_title: [
                '旅行 >',
                '机票 >',
                '房产 >',
                '游戏 >',
                '彩票 >',
                '教育培训 >'
            ],
            category_item: [
                {
                    item_title: '旅行',
                    item_list: [
                        '机票',
                        '火车票',
                        '酒店',
                        '度假周边游',
                        '签证',
                        '国内游'
                    ]
                },
                {
                    item_title: '房产',
                    item_list: [
                        '新房'
                    ]
                },
                {
                    item_title: '电影票',
                    item_list: [
                        '电影选座',
                        '热映影片',
                        '电影兑换券',
                        '电影卡'
                    ]
                },
                {
                    item_title: '演出票',
                    item_list: [
                        '演唱会',
                        '话剧舞台剧',
                        '音乐会',
                        '舞蹈芭蕾',
                        '戏曲综艺',
                        '体育赛事',
                        '儿童亲子'
                    ]
                },
                {
                    item_title: '游戏',
                    item_list: [
                        '游戏点卡',
                        '手机游戏',
                        '手游商城',
                        '网页游戏'
                    ]
                },
                {
                    item_title: '彩票',
                    item_list: [
                        '双色球',
                        '福彩3D',
                        '七乐彩',
                        '大乐透',
                        '排列3',
                        '排列5',
                        '七星彩'
                    ]
                },
                {
                    item_title: '教育培训',
                    item_list: [
                        '体验课',
                        '兴趣爱好',
                        '早教幼教',
                        '语言培训',
                        '留学',
                        '游学',
                        '电子书',
                        '视频课程'
                    ]
                }
            ],
            brand_path: [
                'img/机票.jpeg',
                'img/电影票.jpeg',
                'img/度假.jpeg',
                'img/演出票.jpeg',
                'img/网页游戏.jpeg',
                'img/手机游戏.jpeg',
                'img/游戏点卡.jpeg',
                'img/手游商城.jpeg'
            ],
            activity_path: 'img/买一赠一.jpeg'
        },
        {
            slidenav_title: [
                '金融理财'
            ],
            category_title: [
                '金融理财 >'
            ],
            category_item: [
                {
                    item_title: '定期理财',
                    item_list: [
                        '定期理财',
                                '投金宝',
                                '票据理财',
                                '转让理财',
                                '预约理财'
                    ]
                },
                {
                    item_title: '活期理财',
                    item_list: [
                        '美盈宝'
                    ]
                },
                {
                    item_title: '基金理财',
                    item_list: [
                        '基金'
                    ]
                }
            ],
            brand_path: [
                'img/金融理财.jpeg',
                'img/定期理财.jpeg',
                'img/投金宝.jpeg',
                'img/转让理财.jpeg',
                'img/美盈宝.jpeg',
                'img/基金新手.jpeg'
            ],
            activity_path: 'img/活期理财.jpeg'
        }
    ]
}
var category_tmp = $('#category_tmp').render(category);
$('.slidenav-ul').append(category_tmp);
$('.slidenav-ul li:first-child').addClass('first');
$('.slidenav-ul li:last-child').addClass('last');
$('.category-item:first-child').children('.cate-list').children().remove('.slip-line');


var naviitem = {
    item_title: [
        '真划算',
        '服装城',
        '超市',
        '电器城',
        '国美电器',
        '家居家装',
        '海外购',
        '汽车',
        '智能',
        '管家',
        '金融'
    ]
}
var navibar_tmp = $('#navibar_tmp').render(naviitem);
$('.navibar').append(navibar_tmp);
$('a:contains(超市)').after('<span class="tag_new"></span>');
$('.navibar a:contains(金融)').after('<span class="tag_hot"></span>');


var iconlist = {
    iconitem: [
        {
            value: '39',
            icon_info: '&#xe618;',
            icon_title: '充值'
        },
        {
            value: '94',
            icon_info: '&#xe657;',
            icon_title: '票务'
        },
        {
            value: '149',
            icon_info: '&#xe658;',
            icon_title: '游戏'
        },
        {
            value: '204',
            icon_info: '&#xe612;',
            icon_title: '旅行'
        },
        {
            icon_info: '&#xe664;',
            icon_title: '美盈宝'
        },
        {
            icon_info: '&#xe68c;',
            icon_title: '基金'
        },
        {
            icon_info: '&#xe662;',
            icon_title: '视频'
        },
        {
            icon_info: '&#xe659;',
            icon_title: '找服务'
        },
        {
            icon_info: '&#xe7cc;',
            icon_title: '投金宝'
        },
        {
            icon_info: '&#xe62d;',
            icon_title: '定期'
        },
        {
            icon_info: '&#xe67a;',
            icon_title: '转让'
        },
        {
            icon_info: '&#xe62c;',
            icon_title: '帮助'
        }
    ]
}
var icon_ul_tmp  =$('#icon_ul_tmp').render(iconlist);
$('.icon-ul').append(icon_ul_tmp);


var click_box = {
    clickitem: [
        {
            item_info: '苹果/APPLE iPhone 5S 金色 移动联通双4G手机(金色)',
            item_img_path: 'img/img_zwf/midimg_1.jpg',
            item_price: '1498.00'
        },
        {
            item_info: '志高 23JN 冷暖空调扇',
            item_img_path: 'img/img_zwf/midimg_2.jpg',
            item_price: '239.00'
        },
        {
            item_info: '宏碁(Acer)蜂鸟 S30-10-506V 14英寸轻薄笔记本电脑（i5-7200U/4G/128G SSD/IPS高清屏/指纹识别/win10/金色)',
            item_img_path: 'img/img_zwf/midimg_3.jpg',
            item_price: '4088.00'
        },
        {
            item_info: '香雪海BCD-171A 171升双门冰箱 冷藏冷冻 家用两门小型电冰箱 家用节能冰箱',
            item_img_path: 'img/img_zwf/midimg_4.jpg',
            item_price: '879.00'
        }
    ]
}
var click_box_tmp = $('#click_box_tmp').render(click_box);
$('.first-part1-b').append(click_box_tmp);

var feature_box = {
    part1: [
        {
            title: '淘·实惠',
            eg_title: 'BARGAINS',
            big_info: '今日特卖',
            big_img_path: 'img/img_zwf/bigimg_2.jpg',
            part1_small: [
                {
                    small_info: '国美抢购',
                    small_img_path: 'img/img_zwf/midimg_5.jpg'
                },
                {
                    small_info: '团购',
                    small_img_path: 'img/img_zwf/midimg_6.jpeg'
                }
            ]
        },
        {
            title: '购·新潮',
            eg_title: 'FASHION',
            big_info: '新品抢先',
            big_img_path: 'img/img_zwf/bigimg_3.jpg',
            part1_small: [
                {
                    small_info: '智享生活',
                    small_img_path: 'img/img_zwf/midimg_7.jpg'
                },
                {
                    small_info: '潮3C',
                    small_img_path: 'img/img_zwf/midimg_8.jpg'
                }
            ]
        }
    ],
    part2: [
        {
            title: '逛·品牌',
            eg_title: 'BRANDS',
            part2_small: [
                {
                    small_info: '品牌街',
                    small_img_path: 'img/img_zwf/midimg_9.jpeg'
                },
                {
                    small_info: '海外精选',
                    small_img_path: 'img/img_zwf/midimg_10.jpeg'
                }
            ],
            part2_brand: [
                'img/img_zwf/smallimg_2.jpg',
                'img/img_zwf/smallimg_3.png',
                'img/img_zwf/smallimg_4.jpg',
                'img/img_zwf/smallimg_5.jpg',
                'img/img_zwf/smallimg_6.jpg',
                'img/img_zwf/smallimg_7.jpg',
                'img/img_zwf/smallimg_8.jpg'
            ]
        }
    ]
}
var feature_tmp = $('#feature_tmp').render(feature_box);
$('.zwf-gome-second').append(feature_tmp);

var finance = {
    title: '金融',
    eg_title: 'FINANCE',
    class: '金融频道',
    main_img_path: 'img/jr_1.jpg',
    finance_img: [
        'img/jr_2.jpg',
        'img/jr_3.jpg',
        'img/jr_4.jpg',
        'img/jr_5.jpg'
    ]
}
var finance_box_tmp = $('#finance_box_tmp').render(finance);
$('.finance_box').append(finance_box_tmp);


var guess = {
    title: '猜你喜欢',
    eg_title: 'YOU MAY LIKE',
    guess_list: [
        {
            guess_item: [
                {
                    img_path: 'img/guess11.jpg',
                    item_info: '品拓 led客厅灯吸顶灯长方形水晶灯饰卧室灯具大厅餐厅灯成套灯具搭配套餐(套餐3三室二厅包安装)',
                    item_price: '￥1449.00'
                },
                {
                    img_path: 'img/guess12.jpg',
                    item_info: '日本花王Merries拉拉裤XL44+2片(加大号)',
                    item_price: '￥83.00'
                },
                {
                    img_path: 'img/guess13.jpg',
                    item_info: '【顺丰速发】苹果Apple iPad 2017新款ipad可选 32G 128G WiFi版+4G版9.7英寸平板电脑(银色 2017新款ipad/WIFI版)',
                    item_price: '￥3099.00'
                },
                {
                    img_path: 'img/guess14.jpg',
                    item_info: '联禾信 拖把桶旋转拖把双驱动好神拖手压拖把桶自动地拖头拖布墩布金属盘不锈钢篮2墩布头(黑色)',
                    item_price: '￥69.90'
                },
                {
                    img_path: 'img/guess15.jpg',
                    item_info: '盼盼食品手撕面包1000g整箱装 糕点零食早餐点',
                    item_price: '￥32.90'
                },
                {
                    img_path: 'img/guess16.jpg',
                    item_info: '50只装卫生间厕所除臭洁厕灵蓝泡泡洁厕宝马桶清洁剂洁厕球',
                    item_price: '￥16.90'
                }
            ]
        },
        {
            guess_item: [
                {
                    img_path: 'img/guess21.jpg',
                    item_info: '盼盼艾比利薯片混合口味10袋装土豆片膨化食品零食特产小吃',
                    item_price: '￥19.90'
                },
                {
                    img_path: 'img/guess22.jpg',
                    item_info: '四季沐歌卫浴全铜龙头淋浴花洒套装增压花洒喷头套装',
                    item_price: '￥389.00'
                },
                {
                    img_path: 'img/guess23.jpg',
                    item_info: '【YDEG】 海阳 原产白玉黄瓜 2500g装 新鲜包邮',
                    item_price: '￥32.00'
                },
                {
                    img_path: 'img/guess24.jpg',
                    item_info: '圣牧有机精品装纯牛奶全脂纯牛奶200ml*12盒/1箱',
                    item_price: '￥39.60'
                },
                {
                    img_path: 'img/guess25.jpg',
                    item_info: '品拓 led吸顶灯温馨圆形卧室灯现代简约长方客厅灯成套灯具套餐灯饰(套餐1三室二厅-到手价1099包安装)',
                    item_price: '￥1449.00'
                },
                {
                    img_path: 'img/guess26.jpg',
                    item_info: '品拓 LED卧室灯吸顶灯 现代简约客厅灯圆形温馨餐厅灯成套客厅灯套装套餐灯饰(套餐3三室二厅包安装)',
                    item_price: '￥1599.00'
                }
            ]
        },
        {
            guess_item: [
                {
                    img_path: 'img/guess31.jpg',
                    item_info: '飞利浦开关面板飞逸珍珠白系列五孔插座面板86型面板一键搞定(5cm螺丝（24个）)',
                    item_price: '￥4.00'
                },
                {
                    img_path: 'img/guess32.jpg',
                    item_info: 'GOME酒窖 甘恰甜起泡葡萄酒750ml(单支装)',
                    item_price: '￥128.00'
                },
                {
                    img_path: 'img/guess33.jpg',
                    item_info: '金刚砂海绵擦 神奇除垢纳米海绵 去污渍擦锅清洁(3个装)',
                    item_price: '￥25.00'
                },
                {
                    img_path: 'img/guess34.jpg',
                    item_info: '贝思客和风抹茶栗子蛋糕新鲜蛋糕生日蛋糕抹茶蛋糕同城速递礼盒装(7.0磅)',
                    item_price: '￥698.00'
                },
                {
                    img_path: 'img/guess35.jpg',
                    item_info: 'GOME酒窖 洛克王子圣爱美隆干红葡萄酒',
                    item_price: '￥176.00'
                },
                {
                    img_path: 'img/guess36.jpg',
                    item_info: '乾越 大肚蘑菇型USB灭蚊灯蚊子灭蚊器婴儿孕妇驱蚊器',
                    item_price: '￥49.90'
                }
            ]
        }
    ]
}
var guess_box_tmp = $('#guess_box_tmp').render(guess);
$('.guess_box').append(guess_box_tmp);


var floor = {
    floordata: [
    /* 1F */
        {
            floor_num: '1F',
            floor_title: '手机通讯',
            floor_tab: [
                '精选热卖',
                '时尚新品',
                '加价选购',
                '畅想低价',
                '手机配件',
                '初夏美"肌"'
            ],
            main_img: 'img/img_lyy/1F/1F_L.jpg',
            channelitem: [
                {
                    channel: [
                        '手机 / ',
                        '配件 / ',
                        '充值 / ',
                        '优惠券'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '魅族手机',
                        '老人手机',
                        '移动电源',
                        '旅游户外',
                        '以旧换新'
                    ]
                },
                {
                    keywords: [
                        '荣耀',
                        'GOME',
                        '努比亚',
                        '存储卡',
                        '保护套'
                    ]
                },
                {
                    keywords: [
                        '乐视手机',
                        '金立手机',
                        '美图手机',
                        '蓝牙耳机',
                        '热销推荐'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/1F/1F_slide1.jpg',
                    brand_img: [
                        'img/img_lyy/1F/1F_slide1_b1.jpeg',
                        'img/img_lyy/1F/1F_slide1_b2.jpeg',
                        'img/img_lyy/1F/1F_slide1_b3.jpeg',
                        'img/img_lyy/1F/1F_slide1_b4.jpeg',
                        'img/img_lyy/1F/1F_slide1_b5.jpeg',
                        'img/img_lyy/1F/1F_slide1_b6.jpeg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/1F/1F_slide2.jpg',
                    brand_img: [
                        'img/img_lyy/1F/1F_slide2_b1.jpeg',
                        'img/img_lyy/1F/1F_slide2_b2.jpeg',
                        'img/img_lyy/1F/1F_slide2_b3.jpeg',
                        'img/img_lyy/1F/1F_slide2_b4.jpeg',
                        'img/img_lyy/1F/1F_slide2_b5.jpeg',
                        'img/img_lyy/1F/1F_slide2_b6.jpeg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/1F/1F_slide3.jpg',
                    brand_img: [
                        'img/img_lyy/1F/1F_slide3_b1.jpeg',
                        'img/img_lyy/1F/1F_slide3_b2.jpeg',
                        'img/img_lyy/1F/1F_slide3_b3.jpeg',
                        'img/img_lyy/1F/1F_slide3_b4.jpeg',
                        'img/img_lyy/1F/1F_slide3_b5.jpeg',
                        'img/img_lyy/1F/1F_slide3_b6.jpeg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/1F/1F_R1.jpg',
                'img/img_lyy/1F/1F_R2.jpg',
                'img/img_lyy/1F/1F_R3.jpg',
                'img/img_lyy/1F/1F_R4.jpeg',
                'img/img_lyy/1F/1F_R5.jpg',
                'img/img_lyy/1F/1F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/1F/1F_2-1.jpg',
                            item_name: '红米Note4X 高配版 64GB 香槟金',
                            item_price: '1299.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-2.jpg',
                            item_name: '荣耀8 青春版 32GB 珠光白',
                            item_price: '1399.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-3.jpg',
                            item_name: '魅蓝E2 32G 全网通 月光银',
                            item_price: '1299.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-4.jpg',
                            item_name: '华为畅享7 Plus 32GB 香槟金',
                            item_price: '1499.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-5.jpg',
                            item_name: '三星 C5Pro 全网通 枫叶金',
                            item_price: '2499.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-6.jpg',
                            item_name: 'vivo X9 64GB 活力蓝',
                            item_price: '2598.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-7.jpg',
                            item_name: '国美 K1 64G 虹膜解锁 墨韵灰',
                            item_price: '2699.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-8.jpg',
                            item_name: 'HUAWEI P10 64G 全网通 钻雕金',
                            item_price: '3788.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-9.jpg',
                            item_name: 'iPhone 7 32G 金色 全网通',
                            item_price: '4788.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_2-10.jpg',
                            item_name: '三星S8 全网通 雾屿蓝',
                            item_price: '5688.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/1F/1F_3-1.jpg',
                            item_name: '华为畅享7 Plus 32G 香槟金',
                            item_act: '加1元得bong智能手环'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-2.jpg',
                            item_name: 'HUAWEI nova 青春版 64G',
                            item_act: '加1元得催眠大师智能枕'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-3.jpg',
                            item_name: 'HUAWEI P10 64G 钻雕金',
                            item_act: '加1元得乐心电子血压计'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-4.jpg',
                            item_name: 'HUAWEI P10 128G 钻雕金',
                            item_act: '加1元得bong智能手环'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-5.jpg',
                            item_name: 'vivo X9 64GB 金',
                            item_act: '加1元得bong智能手环'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-6.jpg',
                            item_name: '三星C7 Pro 全网通 枫叶金',
                            item_act: '加1元得乐心电子血压计'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-7.jpg',
                            item_name: '三星C9 Pro 64G 枫叶金 全网通',
                            item_act: '加99元得智能机器人'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-8.jpg',
                            item_name: '三星C5 Pro 全网通 枫叶金',
                            item_act: '加1元即得智能枕'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-9.jpg',
                            item_name: 'OPPO R9s 64G 全网通 金色',
                            item_act: '加1元得bong智能手环'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_3-10.jpg',
                            item_name: 'OPPO R9s Plus 全网通 64GB 黑',
                            item_act: '加1元得bong智能手环'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/1F/1F_4-1.jpg',
                            item_name: '红米 4X 16GB 香槟金 全网通',
                            item_price: '699.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-2.jpg',
                            item_name: 'vivo Y66 32GB 玫瑰金',
                            item_price: '1498.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-3.jpg',
                            item_name: '三星 2016版 Galaxy On7 32G 钛岩黑',
                            item_price: '1599.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-4.jpg',
                            item_name: '小米5S 全网通 高配版 64GB 金色',
                            item_price: '1999.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-5.jpg',
                            item_name: 'OPPO A59s 全网通 玫瑰金色',
                            item_price: '1999.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-6.jpg',
                            item_name: '魅族Pro6s 64GB 星空黑',
                            item_price: '2299.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-7.jpg',
                            item_name: '华为麦芒5 64G 全网通 香槟金',
                            item_price: '2399.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-8.jpg',
                            item_name: '荣耀8 64G 全网通 流光金',
                            item_price: '2299.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-9.jpg',
                            item_name: '美图m6s 64G 全网通 樱花粉',
                            item_price: '2599.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_4-10.jpg',
                            item_name: '苹果 iPhone 6 32G 全网通 金色',
                            item_price: '2578.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/1F/1F_5-1.jpg',
                            item_name: '哌佰客编织线苹果编织线银',
                            item_price: '19.90'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-2.jpg',
                            item_name: '圣奇仕10000毫安移动电源D8 大容量智能充电 超高性价比',
                            item_price: '35.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-3.jpg',
                            item_name: '罗马仕（ROMOSS）聚合物10000mAh正品 手机充电宝通用移动电源',
                            item_price: '70.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-4.jpg',
                            item_name: '优加 iPhone7/苹果7钢化膜高清透明钢化玻璃手机保护贴膜(4.7英寸）',
                            item_price: '19.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-5.jpg',
                            item_name: '大力士（Dalis）E22 21000mAh聚合物移动电源充电宝 自带线 双U输出 内置LED手电 通用型',
                            item_price: '49.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-6.jpg',
                            item_name: '羽博移动电源20000毫安LED数显屏双输入2A输出 白色',
                            item_price: '89.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-7.jpg',
                            item_name: '华为 HUAWEI B3手环 商务版（摩卡棕）',
                            item_price: '999.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-8.jpg',
                            item_name: '捷波朗（Jabra）BOOST劲步 商务手机通话蓝牙耳机 蓝牙4.0 通用型 耳挂式 黑色',
                            item_price: '209.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-9.jpg',
                            item_name: '爱易思(Easeyes) EX70炫音系列3.5接口耳机（红色）【国美自营 品质保证】',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_5-10.jpg',
                            item_name: '缤特力 Voyager Legend 商务蓝牙耳机 通用型 耳挂式 黑色',
                            item_price: '499.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/1F/1F_6-1.jpg',
                            item_name: 'vivo X9 64GB 柔光自拍 玫瑰金',
                            item_price: '2598.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-2.jpg',
                            item_name: '法国 Estee Lauder 雅诗兰黛肌透修护眼部密集精华霜15ml',
                            item_price: '349.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-3.jpg',
                            item_name: 'MEDIHEAL美迪惠尔水库针剂福面美王面膜 10片',
                            item_price: '39.90'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-4.jpg',
                            item_name: '睿嫣 蓝色燕窝二合一润膏洗发水250ML',
                            item_price: '59.90'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-5.jpg',
                            item_name: 'Apple Watch Sport Series 1智能手表',
                            item_price: '2158.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-6.jpg',
                            item_name: '美图 M8 64G 全网通 月光白',
                            item_price: '3199.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-7.jpg',
                            item_name: "It's skin/伊思 晶钻美肌蜗牛修复洗面奶 150ml",
                            item_price: '138.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-8.jpg',
                            item_name: 'Coppertone 水宝宝 防晒喷雾 SPF50 170克',
                            item_price: '98.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-9.jpg',
                            item_name: 'RYOE/吕 紫吕 控油防脱滋养洗发水 400ml 180ml',
                            item_price: '129.00'
                        },
                        {
                            item_img: 'img/img_lyy/1F/1F_6-10.jpg',
                            item_name: '卡西欧 EX-TR600 数码相机 玫红色',
                            item_price: '4999.00'
                        }
                    ]
                },
            ]
        },
    /* 2F */
        {
            floor_num: '2F',
            floor_title: '电脑数码',
            floor_tab: [
                '精选热卖',
                '新品抢鲜',
                '笔记本',
                '摄影摄像',
                '智能潮品',
                'OA配件',
                '淘实惠'
            ],
            main_img: 'img/img_lyy/2F/2F_L.jpg',
            channelitem: [
                {
                    channel: [
                        '电脑 / ',
                        '数码 / ',
                        'OA配件 / ',
                        '3C'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '满5000',
                        '飞行堡垒',
                        '单反相机',
                        '智能家居',
                        '智能路由'
                    ]
                },
                {
                    keywords: [
                        'iPad',
                        '惠普',
                        '微单',
                        '耳机',
                        '投影机'
                    ]
                },
                {
                    keywords: [
                        '神舟战神',
                        'ThinkPad',
                        '智能手环',
                        'AppleWatch',
                        '插线板线材'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/2F/2F_slide1.jpg',
                    brand_img: [
                        'img/img_lyy/2F/2F_slide1_b1.jpg',
                        'img/img_lyy/2F/2F_slide1_b2.jpg',
                        'img/img_lyy/2F/2F_slide1_b3.jpg',
                        'img/img_lyy/2F/2F_slide1_b4.jpg',
                        'img/img_lyy/2F/2F_slide1_b5.jpg',
                        'img/img_lyy/2F/2F_slide1_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/2F/2F_slide2.jpg',
                    brand_img: [
                        'img/img_lyy/2F/2F_slide2_b1.jpg',
                        'img/img_lyy/2F/2F_slide2_b2.jpg',
                        'img/img_lyy/2F/2F_slide2_b3.jpg',
                        'img/img_lyy/2F/2F_slide2_b4.jpg',
                        'img/img_lyy/2F/2F_slide2_b5.jpg',
                        'img/img_lyy/2F/2F_slide2_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/2F/2F_slide3.jpg',
                    brand_img: [
                        'img/img_lyy/2F/2F_slide3_b1.jpg',
                        'img/img_lyy/2F/2F_slide3_b2.jpg',
                        'img/img_lyy/2F/2F_slide3_b3.jpg',
                        'img/img_lyy/2F/2F_slide3_b4.jpg',
                        'img/img_lyy/2F/2F_slide3_b5.jpg',
                        'img/img_lyy/2F/2F_slide3_b6.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/2F/2F_R1.jpg',
                'img/img_lyy/2F/2F_R2.jpg',
                'img/img_lyy/2F/2F_R3.jpg',
                'img/img_lyy/2F/2F_R4.jpg',
                'img/img_lyy/2F/2F_R5.jpg',
                'img/img_lyy/2F/2F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/2F/2F_2-1.jpg',
                            item_name: '华硕(ASUS)飞行堡垒尊享版FX-PRO6300 15.6英寸笔记本电脑（i5-6300HQ 8G 1T GTX 960M 4G独显 Win10）黑色',
                            item_price: '4499.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-2.jpg',
                            item_name: '神舟（HASEE）战神Z6-KP5S1 15.6英寸游戏本笔记本电脑（I5-7300HQ 8G 256GB SSD GTX1050 2G Win10 背光键盘）深灰色',
                            item_price: '4999.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-3.jpg',
                            item_name: '联想(lenovo) 小新潮5000 15.6英寸轻薄笔记本电脑【 I5-7200U 4G内存 1T硬盘 2G独显 WIN10】银灰',
                            item_price: '4199.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-4.jpg',
                            item_name: '戴尔（DELL）灵越飞匣15ER-4525B 15.6英寸（1920x1080）大屏笔记本电脑（第七代i5-7200U 4G 500G R5 M315 2G独显 无光驱 Win10）黑色',
                            item_price: '3499.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-5.jpg',
                            item_name: '优酷土豆1200M智能路由器',
                            item_price: '169.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-6.jpg',
                            item_name: '糖猫(teemo) S703 10s小视频 2G云储存 儿童电话手表 美拍相机 实时电话 冰川蓝',
                            item_price: '598.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-7.jpg',
                            item_name: '佳能 数码相机PowerShot SX430',
                            item_price: '1799.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-8.jpg',
                            item_name: '佳能 数码相机 EOS M6',
                            item_price: '4799.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-9.jpg',
                            item_name: '卡西欧数码相机EX-ZR3700',
                            item_price: '2499.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_2-10.jpg',
                            item_name: '极米Z3S投影仪',
                            item_price: '2299.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/2F/2F_3-1.jpg',
                            item_name: 'Apple MacBook 12英寸笔记本电脑（intel酷睿M3/12英寸/Retina屏/8G/256G/太空银）MLHA2CH/A',
                            item_price: '9888.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-2.jpg',
                            item_name: '联想(Lenovo)天逸310 15.6英寸笔记本【i5-6200U 4G 硬盘升级至1T 2G独显 正版office2016】黑',
                            item_price: '3499.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-3.jpg',
                            item_name: '华硕（ASUS）顽石畅玩版F540UP7200 15.6英寸笔记本电脑（i5-7200 4G 500G 2G独显 预装office2016 Win10 灰）',
                            item_price: '3899.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-4.jpg',
                            item_name: '联想(Lenovo)小新310经典版 15.6英寸笔记本电脑(i7-7500U 8G 1T 2G独显 office2016 FHD)银色',
                            item_price: '4599.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-5.jpg',
                            item_name: 'ThinkPad笔记本电脑X260(20F6A09KCD)12.5英寸(i5-6200U 8G 500G 集成显卡 Win10)黑色',
                            item_price: '6299.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-6.jpg',
                            item_name: '戴尔（DELL）灵越飞匣14ER-3525B 14英寸便携笔记本电脑（第七代i5-7200U 4G 500G R5 M315 2G独显 无光驱 Win10）黑色',
                            item_price: '3399.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-7.jpg',
                            item_name: '神舟(HASEE)战神K610D-i7D4 15.6英寸游戏本笔记本电脑(i7-4710MQ 4G 500G GT940M 2G独显 1080P)灰色',
                            item_price: '3699.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-8.jpg',
                            item_name: '惠普（HP）光影精灵II代Pro 15.6英寸(1920x1080)游戏笔记本（i5-7300HQ 8G 1T GTX 1050 2G独显 不含光驱 背光键盘 Win10）精灵银',
                            item_price: '5399.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-9.jpg',
                            item_name: '宏碁(Acer)E5-575G-51SF 15.6英寸笔记本电脑 （i5-7200U/4G/128GSSD+500G/940MX-2G独显/win10/银色)',
                            item_price: '3789.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_3-10.jpg',
                            item_name: '微星(MSI)GE72 6QD-001XCN 17.3英寸游戏本(i7-6700HQ 8G 1T GTX960M GDDR5 2G 多彩背光) 黑色',
                            item_price: '6599.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/2F/2F_4-1.jpg',
                            item_name: '佳能单反EOS80D(18-135)',
                            item_price: '8987.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-2.jpg',
                            item_name: '佳能单反EOS1300D双镜头',
                            item_price: '3807.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-3.jpg',
                            item_name: '佳能微单套装EOSM3(18-55)',
                            item_price: '3412.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-4.jpg',
                            item_name: '佳能相机PowerShotG3X',
                            item_price: '4899.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-5.jpg',
                            item_name: '尼康单反D7100(18-300)',
                            item_price: '7549.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-6.jpg',
                            item_name: '卡西欧数码相机TR750粉红',
                            item_price: '5999.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-7.jpg',
                            item_name: '卡西欧EX-TR600 数码相机',
                            item_price: '4999.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-8.jpg',
                            item_name: '尼康单反相机D5300(18-55)AF-P VR +(55-200)VRII KI',
                            item_price: '4730.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-9.jpg',
                            item_name: '尼康单反D5300(18-55)',
                            item_price: '4730.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_4-10.jpg',
                            item_name: '卡西欧数码相机EX-ZR5500',
                            item_price: '2799.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/2F/2F_5-1.jpg',
                            item_name: 'HTC虚拟眼镜套装VIVE-VR黑',
                            item_price: '6688.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-2.jpg',
                            item_name: '大疆“御”迷你可折叠无人机',
                            item_price: '7999.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-3.jpg',
                            item_name: 'Apple Watch S2 NIKE版智能手表',
                            item_price: '3188.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-4.jpg',
                            item_name: '360巴迪龙儿童手表5CW602',
                            item_price: '379.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-5.jpg',
                            item_name: '小米(MI) 定制版Ninebot 九号平衡车 智能代步电动体感车 白【国美自营 品质保证 悦享生活】',
                            item_price: '1999.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-6.jpg',
                            item_name: '360行车记录仪标准升级版',
                            item_price: '319.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-7.jpg',
                            item_name: '乐心智能手环mambo HR黑',
                            item_price: '169.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-8.jpg',
                            item_name: '小米(MI) YM-K1501 1.5L大容量 水温智能控制 米家恒温电水壶 304不锈钢内胆 三重安全保护 白色',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-9.jpg',
                            item_name: '360智能摄像机D606白',
                            item_price: '219.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_5-10.jpg',
                            item_name: '乐心i5s电子血压计LS805-F',
                            item_price: '179.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/2F/2F_6-1.jpg',
                            item_name: '雷摄5号AA2200mAhX8 可充电式镍氢环保电池',
                            item_price: '49.90'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-2.jpg',
                            item_name: '硕美科鼠标垫GM300',
                            item_price: '19.90'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-3.jpg',
                            item_name: '秋叶原HDMI线TH-619T3(3米)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-4.jpg',
                            item_name: '罗技M186无线光学鼠标',
                            item_price: '56.90'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-5.jpg',
                            item_name: '得力7401-莱茵河70克A4复印纸（5包/箱）',
                            item_price: '105.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-6.jpg',
                            item_name: '极米投影仪（XGIMI）Z3S投影仪【国美自营 品质保证】',
                            item_price: '2299.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-7.jpg',
                            item_name: "航嘉8位插座SSH801(1.8米)白",
                            item_price: '44.90'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-8.jpg',
                            item_name: '爱谱王蓝牙耳机IP-BH888',
                            item_price: '149.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-9.jpg',
                            item_name: '爱普生投影机（EPSON）商务易用型CB-S04',
                            item_price: '2399.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_6-10.jpg',
                            item_name: '极米（XGIMI）无屛电视H1高清',
                            item_price: '4999.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/2F/2F_7-1.jpg',
                            item_name: 'Apple iPad Air 平板电脑',
                            item_act: '包装破损¥1999.00'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-2.jpg',
                            item_name: '戴尔 Ins14C-4528B 14英寸',
                            item_act: '包装破损8.9折 ¥3099'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-3.jpg',
                            item_name: '小米（MI）平板电脑2 WIFI版 （7.9英寸/2G/16G）香槟金',
                            item_act: '包装破损8折799元'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-4.jpg',
                            item_name: 'iPad mini 16G',
                            item_act: '包装破损 ¥1599'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-5.jpg',
                            item_name: '微星GE62 6QF-203XCN 15.6英寸游戏本',
                            item_act: '主机全新 ¥7499'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-6.jpg',
                            item_name: '卡西欧EX-TR600数码相机',
                            item_act: '包装破损 8折 ¥4699'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-7.jpg',
                            item_name: '尼康 D7000 (18-105)单反',
                            item_act: '包装破损 9.3折¥4299'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-8.jpg',
                            item_name: '佳能EOS700D（18-55IS）',
                            item_act: '包装破损8.1折¥3099'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-9.jpg',
                            item_name: '佳能EOS 6D单反套机',
                            item_act: '包装破损 8.3折 ¥11000'
                        },
                        {
                            item_img: 'img/img_lyy/2F/2F_7-10.jpg',
                            item_name: '佳能70D(18-135)单反套机',
                            item_act: '配件齐全8.1折 ¥6099'
                        }
                    ]
                }
            ]
        },
    /* 3F */
        {
            floor_num: '3F',
            floor_title: '家用电器',
            floor_tab: [
                '精选热卖',
                '电视',
                '洗衣机',
                '冰箱',
                '空调',
                '影音',
                '配件'
            ],
            main_img: 'img/img_lyy/3F/3F_L.jpg',
            channelitem: [
                {
                    channel: [
                        '电视 / ',
                        '冰箱 / ',
                        '洗衣机 / ',
                        '空调'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '曲面电视',
                        '奥马冰箱',
                        '柜式空调',
                        '变频风冷',
                        '音响影院'
                    ]
                },
                {
                    keywords: [
                        '全高清',
                        '全自动',
                        '壁挂式',
                        '冷柜',
                        '播放器'
                    ]
                },
                {
                    keywords: [
                        '智能电视',
                        '滚筒洗衣机',
                        '1.5匹空调',
                        '多门/对开',
                        '电视影音配件'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/3F/3F_slide1.jpg',
                    brand_img: [
                        'img/img_lyy/3F/3F_slide1_b1.jpg',
                        'img/img_lyy/3F/3F_slide1_b2.jpg',
                        'img/img_lyy/3F/3F_slide1_b3.jpg',
                        'img/img_lyy/3F/3F_slide1_b4.jpg',
                        'img/img_lyy/3F/3F_slide1_b5.jpg',
                        'img/img_lyy/3F/3F_slide1_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/3F/3F_slide2.jpg',
                    brand_img: [
                        'img/img_lyy/3F/3F_slide2_b1.jpg',
                        'img/img_lyy/3F/3F_slide2_b2.jpg',
                        'img/img_lyy/3F/3F_slide2_b3.jpg',
                        'img/img_lyy/3F/3F_slide2_b4.jpg',
                        'img/img_lyy/3F/3F_slide2_b5.jpg',
                        'img/img_lyy/3F/3F_slide2_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/3F/3F_slide3.jpg',
                    brand_img: [
                        'img/img_lyy/3F/3F_slide3_b1.jpg',
                        'img/img_lyy/3F/3F_slide3_b2.jpg',
                        'img/img_lyy/3F/3F_slide3_b3.jpg',
                        'img/img_lyy/3F/3F_slide3_b4.jpg',
                        'img/img_lyy/3F/3F_slide3_b5.jpg',
                        'img/img_lyy/3F/3F_slide3_b6.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/3F/3F_R1.jpg',
                'img/img_lyy/3F/3F_R2.jpg',
                'img/img_lyy/3F/3F_R3.jpg',
                'img/img_lyy/3F/3F_R4.jpg',
                'img/img_lyy/3F/3F_R5.jpg',
                'img/img_lyy/3F/3F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/3F/3F_2-1.jpg',
                            item_name: '海尔32英寸高清LED液晶电视',
                            item_price: '1149.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-2.jpg',
                            item_name: 'TCL 32英寸纤薄蓝光电视',
                            item_price: '1049.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-3.jpg',
                            item_name: '创维50英寸4K智能电视',
                            item_price: '2899.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-4.jpg',
                            item_name: '海尔55英寸4K智能电视',
                            item_price: '2999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-5.jpg',
                            item_name: '长虹55英寸4K智能网络电视',
                            item_price: '2999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-6.jpg',
                            item_name: '康佳55英寸4K智能电视',
                            item_price: '2799.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-7.jpg',
                            item_name: '海信55英寸4K智能网络电视',
                            item_price: '3049.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-8.jpg',
                            item_name: '三星55英寸曲面智能电视',
                            item_price: '3618.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-9.jpg',
                            item_name: 'TCL 49英寸八核智能电视',
                            item_price: '2499.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_2-10.jpg',
                            item_name: 'TCL 55英寸网络智能LED电视',
                            item_price: '2599.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/3F/3F_3-1.jpg',
                            item_name: '创维(skyworth) XQB50-21A',
                            item_price: '759.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-2.jpg',
                            item_name: '美的洗衣机MG90-14521WDX',
                            item_price: '1998.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-3.jpg',
                            item_name: '韩派洗衣机XQB70-3070',
                            item_price: '699.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-4.jpg',
                            item_name: '海尔洗衣机XQG100-HBX14636',
                            item_price: '3999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-5.jpg',
                            item_name: '松下(Panasonic) XQB75-Q7321',
                            item_price: '1899.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-6.jpg',
                            item_name: '统帅G7012B16W白',
                            item_price: '1299.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-7.jpg',
                            item_name: '小天鹅(LittleSwan) TG70-V1262ED',
                            item_price: '1498.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-8.jpg',
                            item_name: 'LG WD-T12412DG',
                            item_price: '2599.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-9.jpg',
                            item_name: '海尔洗衣机XQG100-HBX14636',
                            item_price: '3999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_3-10.jpg',
                            item_name: '西门子洗衣机XQG80-WM10N1680W',
                            item_price: '4399.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/3F/3F_4-1.jpg',
                            item_name: '奥马冰箱BCD-176A7',
                            item_price: '849.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-2.jpg',
                            item_name: '创维(skyworth) BCD-176S',
                            item_price: '959.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-3.jpg',
                            item_name: '美菱冰箱BCD-218L3C极光银',
                            item_price: '1199.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-4.jpg',
                            item_name: '韩电BCD-202GM',
                            item_price: '888.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-5.jpg',
                            item_name: '美的 BCD-219TM',
                            item_price: '1199.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-6.jpg',
                            item_name: '海尔统帅BCD-258WLDPN',
                            item_price: '1999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-7.jpg',
                            item_name: '海尔冰箱BCD-452WDPF雅韵白',
                            item_price: '2799.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-8.jpg',
                            item_name: '卡萨帝冰箱BCD-360WDCAU1',
                            item_price: '7699.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-9.jpg',
                            item_name: '西门子(SIEMENS)BCD-610W(KA92NV03TI)',
                            item_price: '6188.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_4-10.jpg',
                            item_name: '西门子(SIEMENS)BCD-610W(KA92NV03TI)',
                            item_price: '5099.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/3F/3F_5-1.jpg',
                            item_name: 'TCL 小1匹定频冷暖空调',
                            item_price: '1589.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-2.jpg',
                            item_name: '科龙 大1匹冷暖变频空调',
                            item_price: '2149.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-3.jpg',
                            item_name: '海尔 1.5匹变频冷暖空调',
                            item_price: '2888.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-4.jpg',
                            item_name: '奥克斯 大1匹变频智能空调',
                            item_price: '2199.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-5.jpg',
                            item_name: '志高 大1匹变频冷暖空调',
                            item_price: '2249.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-6.jpg',
                            item_name: '美的 1.5匹变频冷暖智弧空调',
                            item_price: '2269.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-7.jpg',
                            item_name: '海信 大1匹冷暖变频智能空调',
                            item_price: '2399.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-8.jpg',
                            item_name: '格力 大1匹品圆变频空调',
                            item_price: '2799.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-9.jpg',
                            item_name: '海尔统帅2匹智能柜机',
                            item_price: '3999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_5-10.jpg',
                            item_name: '伊莱克斯 2匹定频冷暖圆柱柜机',
                            item_price: '4199.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/3F/3F_6-1.jpg',
                            item_name: '雅马哈蓝光播放机BD-S681黑',
                            item_price: '3347.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-2.jpg',
                            item_name: '飞利浦DVP3003/93 DVD播放机',
                            item_price: '299.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-3.jpg',
                            item_name: 'TEAC微型音响组合TC-530I银',
                            item_price: '999.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-4.jpg',
                            item_name: '雅马哈CD收音扩音机MCR-B043橙',
                            item_price: '2505.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-5.jpg',
                            item_name: '惠仕蓝牙移动有源音箱系统',
                            item_price: '499.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-6.jpg',
                            item_name: 'JBL高保真有源监听音箱CM202',
                            item_price: '1788.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-7.jpg',
                            item_name: '惠仕蓝牙移动有源音箱',
                            item_price: '499.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-8.jpg',
                            item_name: 'JBL MS502 GM 迷你台式音响（铂金灰）',
                            item_price: '2699.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-9.jpg',
                            item_name: '惠仕 电视音响 蓝牙 HIFI 回音壁 3D一体化音响系统',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_6-10.jpg',
                            item_name: '惠仕音柱5.1家庭影院套装',
                            item_price: '2380.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/3F/3F_7-1.jpg',
                            item_name: '乐歌PSW598MT 上下调节型电视挂架',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-2.jpg',
                            item_name: '岩固CHF400平板电视挂架（黑色）',
                            item_price: '58.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-3.jpg',
                            item_name: '岩固CHF600平板电视挂架',
                            item_price: '88.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-4.jpg',
                            item_name: '岩固电视伸缩旋转挂架',
                            item_price: '249.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-5.jpg',
                            item_name: '岩固电视伸缩旋转挂架DF400黑',
                            item_price: '149.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-6.jpg',
                            item_name: '1905电影网 XC-FBY1C电视盒',
                            item_price: '299.00'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-7.jpg',
                            item_name: '飞利浦防雷儿童保护插排',
                            item_price: '72.90'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-8.jpg',
                            item_name: '飞利浦三位分控电源插线板线长1.8米',
                            item_price: '37.90'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-9.jpg',
                            item_name: '飞利浦排插线长1.8米',
                            item_price: '43.90'
                        },
                        {
                            item_img: 'img/img_lyy/3F/3F_7-10.jpg',
                            item_name: '飞利浦三位总控电源排插',
                            item_price: '50.00'
                        }
                    ]
                }
            ]
        },
    /* 4F */
        {
            floor_num: '4F',
            floor_title: '厨房卫浴',
            floor_tab: [
                '精选热卖',
                '厨房小电',
                '生活电器',
                '净水净化',
                '热水器',
                '烟灶套餐',
                '嵌入式',
                '淘实惠'
            ],
            main_img: 'img/img_lyy/4F/4F_L.jpg',
            channelitem: [
                {
                    big_channel: [
                        '生活馆',
                        '厨卫新活馆',
                        '烟灶卫浴馆'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '微波炉',
                        '热水器',
                        '净化器',
                        '烟灶套餐',
                        '烟尘器'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/4F/4F_slide1.jpg',
                    big_brand_img: [
                        'img/img_lyy/4F/4F_slide1_b1.jpg',
                        'img/img_lyy/4F/4F_slide1_b2.jpg',
                        'img/img_lyy/4F/4F_slide1_b3.jpg',
                        'img/img_lyy/4F/4F_slide1_b4.jpg',
                        'img/img_lyy/4F/4F_slide1_b5.jpg',
                        'img/img_lyy/4F/4F_slide1_b6.jpg',
                        'img/img_lyy/4F/4F_slide1_b7.jpg',
                        'img/img_lyy/4F/4F_slide1_b8.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/4F/4F_slide2.jpg',
                    big_brand_img: [
                        'img/img_lyy/4F/4F_slide2_b1.jpg',
                        'img/img_lyy/4F/4F_slide2_b2.jpg',
                        'img/img_lyy/4F/4F_slide2_b3.jpg',
                        'img/img_lyy/4F/4F_slide2_b4.jpg',
                        'img/img_lyy/4F/4F_slide2_b5.jpg',
                        'img/img_lyy/4F/4F_slide2_b6.jpg',
                        'img/img_lyy/4F/4F_slide2_b7.jpg',
                        'img/img_lyy/4F/4F_slide2_b8.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/4F/4F_slide3.jpg',
                    big_brand_img: [
                        'img/img_lyy/4F/4F_slide3_b1.jpg',
                        'img/img_lyy/4F/4F_slide3_b2.jpg',
                        'img/img_lyy/4F/4F_slide3_b3.jpg',
                        'img/img_lyy/4F/4F_slide3_b4.jpg',
                        'img/img_lyy/4F/4F_slide3_b5.jpg',
                        'img/img_lyy/4F/4F_slide3_b6.jpg',
                        'img/img_lyy/4F/4F_slide3_b7.jpg',
                        'img/img_lyy/4F/4F_slide3_b8.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/4F/4F_R1.jpg',
                'img/img_lyy/4F/4F_R2.jpg',
                'img/img_lyy/4F/4F_R3.jpg',
                'img/img_lyy/4F/4F_R4.jpg',
                'img/img_lyy/4F/4F_R5.jpg',
                'img/img_lyy/4F/4F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_2-1.jpg',
                            item_name: '苏泊尔(SUPOR) 电饭煲CFXB40FC8040-75',
                            item_price: '289.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-2.jpg',
                            item_name: '苏泊尔(SUPOR) 电饭煲CFXB40FC8040-75',
                            item_price: '5999.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-3.jpg',
                            item_name: '美的电压力锅W13PCS503E',
                            item_price: '299.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-4.jpg',
                            item_name: '格兰仕20L微波炉',
                            item_price: '499.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-5.jpg',
                            item_name: '苏泊尔炒锅PJ28R4',
                            item_price: '149.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-6.jpg',
                            item_name: '利仁电饼铛LR-A3200A',
                            item_price: '179.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-7.jpg',
                            item_name: 'ACA电烤箱ATO-BB38HT',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-8.jpg',
                            item_name: '柏翠面包机PE8550',
                            item_price: '369.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-9.jpg',
                            item_name: '美的（Midea）FS3018电饭煲',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_2-10.jpg',
                            item_name: '美的微波炉M1-L201E',
                            item_price: '499.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_3-1.jpg',
                            item_name: '科沃斯地宝魔镜S',
                            item_price: '849.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-2.jpg',
                            item_name: 'iRobot扫擦套餐',
                            item_price: '2799.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-3.jpg',
                            item_name: '小狗吸尘器D-531',
                            item_price: '899.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-4.jpg',
                            item_name: '艾美特遥控落地扇FS4092R-WB',
                            item_price: '269.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-5.jpg',
                            item_name: '泰昌足浴盆TC-2017B',
                            item_price: '299.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-6.jpg',
                            item_name: '贝尔莱德（SALAV）GS42-BJ 6档双杆蒸汽挂烫机 挂式电熨斗',
                            item_price: '279.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-7.jpg',
                            item_name: '飞利浦(philips) GC610/28 蒸汽 挂烫机 高性价比',
                            item_price: '1099.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-8.jpg',
                            item_name: '美的（M美的FS40-11L1机械式落地扇',
                            item_price: '159.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-9.jpg',
                            item_name: '博朗智能电动牙刷',
                            item_price: '329.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_3-10.jpg',
                            item_name: '飞利浦(PHILIPS) HP8220/05 SPA柔护负离子 电吹风 3档吹风设定可折叠 白',
                            item_price: '99.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_4-1.jpg',
                            item_name: '派瑞空气净化器',
                            item_price: '1299.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-2.jpg',
                            item_name: '布鲁雅尔净化器 303',
                            item_price: '2799.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-3.jpg',
                            item_name: 'LightAir 莱特艾尔 负离子空气净化器A400',
                            item_price: '3999.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-4.jpg',
                            item_name: '大金空气净化器MC70KMV2-N',
                            item_price: '3189.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-5.jpg',
                            item_name: '格林威特(Grünewelt)空气净化器LR-500G',
                            item_price: '4998.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-6.jpg',
                            item_name: '【领券到手价999元】美国爱惠浦(EVERPURE)4FC-S(Combo 新款)直饮净水机 净水器 套装机',
                            item_price: '1199.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-7.jpg',
                            item_name: '汉斯希尔（SYR)ECO多向反冲洗前置过滤器',
                            item_price: '908.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-8.jpg',
                            item_name: '【1738元抢】安吉尔净水机 J2375-ROB8',
                            item_price: '1888.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-9.jpg',
                            item_name: '沁园单管道超滤机QG-MU-01B',
                            item_price: '499.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_4-10.jpg',
                            item_name: '【到手价1?99元】德国特洁恩500D净水器家用直饮机',
                            item_price: '2499.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_5-1.jpg',
                            item_name: '海尔(Haier) 50升数显 EC5002-D一级能效 双管变频加热 无线遥控 专利防电墙电热水器',
                            item_price: '1299.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-2.jpg',
                            item_name: '美的（Midea）F50-21W6（B）电热水器（50L容量 无线遥控 预约定时开关机 三层蓝钻内胆整机八年保修 ）',
                            item_price: '949.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-3.jpg',
                            item_name: 'A.O.史密斯电热水器F150 内胆清洁节能系列 金圭内胆双棒速热 50升',
                            item_price: '2368.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-4.jpg',
                            item_name: '万和E40-Q1W1-22电热水器（40升）【国美配送 支持货到付款】',
                            item_price: '599.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-5.jpg',
                            item_name: '【机械式 实惠选择】万家乐D40-H111B电热水器（支持货到付款）',
                            item_price: '538.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-6.jpg',
                            item_name: '万家乐LJSQ20-12VU2燃气热水器（12DU2，SU21）',
                            item_price: '1498.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-7.jpg',
                            item_name: '万和JSQ25-330T13燃气热水器（天然气）（13升）',
                            item_price: '1398.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-8.jpg',
                            item_name: 'A.O.史密斯燃气热水器JSQ26-N1 防冻型天然气宽频恒温36重防护 13升',
                            item_price: '3678.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-9.jpg',
                            item_name: '林内燃气热水器JSQ26-22CA(RUS-13E22CWNAF)天然气（13升）',
                            item_price: '2799.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_5-10.jpg',
                            item_name: '能率（NORITZ）GQ-13E3FEX（天然气）（JSQ25-E3）13升 智能精控恒温 日本原装CPU 燃气热水器',
                            item_price: '2698.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_6-1.jpg',
                            item_name: '老板烟灶套餐CXW-200-26A5+JZT-58B5【赠：精美刀具7件套+老板不锈钢电水壶】',
                            item_price: '3780.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-2.jpg',
                            item_name: '华帝（vatti）i11083+i10034B 油烟机 抽油烟机燃气灶烟灶套装 烟灶套餐',
                            item_price: '3280.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-3.jpg',
                            item_name: '美的（Midea）CXW-200-DT518R+JZT-Q360B大吸力 蒸汽洗烟机 欧式T型 吸油烟机 抽油烟机 燃气灶 烟灶套餐',
                            item_price: '2299.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-4.jpg',
                            item_name: '方太EN53T+FD21BE欧式抽油烟机燃气灶套装',
                            item_price: '3890.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-5.jpg',
                            item_name: '万家乐烟灶套餐CXW-200-A390+JZT-IQL83B',
                            item_price: '1698.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-6.jpg',
                            item_name: '万和J630A+B8-B20XW烟灶套餐',
                            item_price: '2098.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-7.jpg',
                            item_name: '帅康（Sacon）TE6710+35K 烟灶套餐 欧式不碰头大吸力抽油烟机燃气灶具（易清洁不锈钢机身，17大吸力，油烟快速分离）',
                            item_price: '2699.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-8.jpg',
                            item_name: '樱花（SAKURA）CXW-180-116（88R931N）+JZT-A37烟灶套餐',
                            item_price: '3780.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-9.jpg',
                            item_name: '优盟（um）B803+Z308B烟灶套餐（天然气/液化气/人工煤气可选）【下单送精美刀具+好评晒单另返10元】（17m3大吸力T型机 一级能效 节能低碳 省电省钱 360度立体环吸 双层错位滤网 油烟畅通 清洁方便 台嵌二用燃气灶 双眼灶 730mm不锈钢灶 一体成型 火力大小 精准掌控 节能省气）',
                            item_price: '1499.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_6-10.jpg',
                            item_name: '苏泊尔J717+QB616抽油烟机灶具套餐 大吸力 脱排 油烟机 智能触控 天然气 燃气灶 台嵌两用',
                            item_price: '2499.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_7-1.jpg',
                            item_name: '美的（Midea）WQP8-3905-CN洗碗机家用全自动除菌商用嵌入式带消',
                            item_price: '2998.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-2.jpg',
                            item_name: '美的柜式洗碗机Q6不锈钢色',
                            item_price: '2998.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-3.jpg',
                            item_name: '华帝（vatti）ZTD100-i13011家用嵌入式消毒碗柜100L',
                            item_price: '2399.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-4.jpg',
                            item_name: '方太食具消毒柜ZTD100J-J45E',
                            item_price: '2199.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-5.jpg',
                            item_name: '美的（Midea）WQP8-3905-CN洗碗机家用全自动除菌商用嵌入式带消',
                            item_price: '2998.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-6.jpg',
                            item_name: '方太水槽洗碗机JBSD2T-X1',
                            item_price: '7999.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-7.jpg',
                            item_name: '樱花洗碗机SCE-W802',
                            item_price: '5143.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-8.jpg',
                            item_name: '老板蒸汽炉ZQB235-S270【赠：老板不锈钢电水壶+WMF煎盘】',
                            item_price: '5480.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-9.jpg',
                            item_name: '帅康（sacon）ZTD100K-K3消毒柜（黑玻璃面板 智能化控制 双管三模消毒柜）',
                            item_price: '1699.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_7-10.jpg',
                            item_name: '苏泊尔消毒柜ZTD90S-305',
                            item_price: '1099.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/4F/4F_8-1.jpg',
                            item_name: '格兰仕20L微波炉',
                            item_price: '298.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-2.jpg',
                            item_name: '九阳豆浆机DJ12B-A637SG',
                            item_price: '299.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-3.jpg',
                            item_name: '沁园5级智能节水纯水机QR-RO-05E家用自来水反渗透除垢直饮净水器',
                            item_price: '2598.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-4.jpg',
                            item_name: '格力电暖器NDYC-25C-WG',
                            item_price: '599.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-5.jpg',
                            item_name: '小狗吸尘器D9',
                            item_price: '999.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-6.jpg',
                            item_name: '美的F05-15A(S)小厨宝（上出水）',
                            item_price: '499.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-7.jpg',
                            item_name: '万家乐 D6-S001B 6L 电热水器 小厨宝 上出水',
                            item_price: '328.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-8.jpg',
                            item_name: '阿里斯顿（ariston）AC10BE1.5热水器',
                            item_price: '598.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-9.jpg',
                            item_name: '阿诗丹顿 KX01 6.6L 一级能效 小厨宝 小电热水器 上下出水储水热水器速热',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/4F/4F_8-10.jpg',
                            item_name: '苏泊尔YCZ-JB600-U501反渗透净水机',
                            item_price: '599.00'
                        }
                    ]
                }
            ]
        },
    /* 5F */
        {
            floor_num: '5F',
            floor_title: '超市母婴',
            floor_tab: [
                '精选热卖',
                '母婴玩具',
                '美妆个护',
                '食品饮料',
                '茗茶名酒',
                '健康医疗',
                '生鲜',
                '自营'
            ],
            main_img: 'img/img_lyy/5F/5F_L.jpg',
            channelitem: [
                {
                    channel: [
                        '母婴玩具 / ',
                        '美妆个护'
                    ]
                },
                {
                    channel: [
                        '食品酒水 / ',
                        '健康医疗'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '保湿面膜',
                        '纸品湿巾',
                        '面部护理',
                        '纸尿裤',
                        '益智玩具'
                    ]
                },
                {
                    keywords: [
                        '奶粉',
                        '零食',
                        '粮油',
                        '饮品',
                        '红酒'
                    ]
                },
                {
                    keywords: [
                        '啤酒',
                        '白酒',
                        '血压计',
                        '避孕',
                        '保健品'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/5F/5F_slide1.jpg',
                    brand_img: [
                        'img/img_lyy/5F/5F_slide1_b1.jpg',
                        'img/img_lyy/5F/5F_slide1_b2.jpg',
                        'img/img_lyy/5F/5F_slide1_b3.jpg',
                        'img/img_lyy/5F/5F_slide1_b4.jpg',
                        'img/img_lyy/5F/5F_slide1_b5.jpg',
                        'img/img_lyy/5F/5F_slide1_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/5F/5F_slide2.jpg',
                    brand_img: [
                        'img/img_lyy/5F/5F_slide2_b1.jpg',
                        'img/img_lyy/5F/5F_slide2_b2.jpg',
                        'img/img_lyy/5F/5F_slide2_b3.jpg',
                        'img/img_lyy/5F/5F_slide2_b4.jpg',
                        'img/img_lyy/5F/5F_slide2_b5.jpg',
                        'img/img_lyy/5F/5F_slide2_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/5F/5F_slide3.jpg',
                    brand_img: [
                        'img/img_lyy/5F/5F_slide3_b1.jpg',
                        'img/img_lyy/5F/5F_slide3_b2.jpg',
                        'img/img_lyy/5F/5F_slide3_b3.jpg',
                        'img/img_lyy/5F/5F_slide3_b4.jpg',
                        'img/img_lyy/5F/5F_slide3_b5.jpg',
                        'img/img_lyy/5F/5F_slide3_b6.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/5F/5F_R1.jpg',
                'img/img_lyy/5F/5F_R2.jpg',
                'img/img_lyy/5F/5F_R3.jpg',
                'img/img_lyy/5F/5F_R4.jpg',
                'img/img_lyy/5F/5F_R5.jpg',
                'img/img_lyy/5F/5F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_2-1.jpg',
                            item_name: '【16年生产】Wyeth惠氏金装智学因子幼儿乐3段900g/克幼儿配方奶粉罐装（1-3岁）(1听)',
                            item_price: '126.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-2.jpg',
                            item_name: '荷兰牛栏Nutrilon荷兰牛栏奶粉3段（10个月以上）800g 海外版',
                            item_price: '212.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-3.jpg',
                            item_name: '好奇银装 婴儿纸尿裤 箱装 尿不湿大号L128片（10-14kg）(1箱)',
                            item_price: '142.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-4.jpg',
                            item_name: '雀氏天才baby裤xl84片男女宝宝拉拉裤通用婴儿尿不湿非纸尿裤',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-5.jpg',
                            item_name: '奇酷纸尿片 超薄干爽婴儿尿不湿S126/M108/L96/XL84片 男女宝宝通用(L32片*3包（9-13KG）)',
                            item_price: '76.90'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-6.jpg',
                            item_name: '星辉rastar宝马i8跑车大遥控车男孩儿童玩具车赛车rc遥控汽车(红色)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-7.jpg',
                            item_name: '好孩子小龙哈彼高景观婴儿车豪华婴儿推车LC798可坐可平躺避震防尾气宝宝车(LC798-H104红色)',
                            item_price: '699.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-8.jpg',
                            item_name: '感恩 （Ganen）旅行者 儿童 汽车座椅 宝宝儿童安全座椅ISOFIX链接 （9个月-12岁）(红色)',
                            item_price: '558.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-9.jpg',
                            item_name: '美德乐瑞士Medela丝韵Swing单侧电动吸乳器吸奶器待产',
                            item_price: '1690.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_2-10.jpg',
                            item_name: '恩诺童奶瓶 宽口PPSU奶瓶套装 硅胶奶嘴带手柄吸管婴儿奶瓶(感温套装-300ML粉色 送V号奶嘴)',
                            item_price: '99.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_3-1.jpg',
                            item_name: '【国美】清扬洗发水套装 樱花沁爽型750ml*2+100ml*2',
                            item_price: '109.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-2.jpg',
                            item_name: '【国美】奥妙家庭套装',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-3.jpg',
                            item_name: '【国美】潘婷乳液修护500SH+500CN+臻致染烫50+50',
                            item_price: '119.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-4.jpg',
                            item_name: '【国美】潘婷乳液修护500SH+500CN+臻致染烫50+50',
                            item_price: '119.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-5.jpg',
                            item_name: 'Dettol 滴露消毒液 杀灭99.999%的致病菌(1.8L*2瓶)',
                            item_price: '178.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-6.jpg',
                            item_name: '心相印优选无心卷纸卫生纸巾家用厕纸三层卷筒纸3提组合LR910包邮',
                            item_price: '28.90'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-7.jpg',
                            item_name: '【超值套装】苏菲卫生巾弹力贴身棉柔感日用5片*9包+棉柔感290夜用5片*3包组合',
                            item_price: '65.90'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-8.jpg',
                            item_name: '自然堂 水润保湿三件套装（洗面奶各种肤质+水+乳）',
                            item_price: '131.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-9.jpg',
                            item_name: '巴黎欧莱雅男士洗面奶套装 火山岩控油清痘100ml炭爽净亮100ml',
                            item_price: '78.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_3-10.jpg',
                            item_name: '巴黎欧莱雅女士护肤品 清润葡萄籽精华膜力水补水保湿滋润',
                            item_price: '140.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_4-1.jpg',
                            item_name: '韵沧田青花系列原生态稻花香大米5KG包邮',
                            item_price: '49.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-2.jpg',
                            item_name: '【禾煜】新鲜黑豆血糯米粥料200g*2袋 农家五谷杂粮营养早餐粥',
                            item_price: '9.90'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-3.jpg',
                            item_name: '长青树食用油葵花花生油830ml*2瓶新鲜 压榨调和油 小瓶',
                            item_price: '26.80'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-4.jpg',
                            item_name: '扁担老头重庆特产小吃弹嘴豆干麻辣豆腐干独立小包装休闲零食500g',
                            item_price: '17.80'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-5.jpg',
                            item_name: '【芝麻官_怪味花生300g】下酒菜小包装 办公室休闲零食 小吃花生米麻辣味(麻辣味)',
                            item_price: '31.50'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-6.jpg',
                            item_name: '88 高邮咸鸭蛋4只 流油即食美食65克真空包装',
                            item_price: '15.80'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-7.jpg',
                            item_name: '【新疆特产】熊猫果缘四色葡萄干720g包邮组合装',
                            item_price: '29.90'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-8.jpg',
                            item_name: '【果郡王】越南青芒果5斤装 芒果 青芒果 新鲜水果',
                            item_price: '36.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-9.jpg',
                            item_name: '休闲美食600g费列罗T48分地区包邮(新款款式 经典口味)',
                            item_price: '109.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_4-10.jpg',
                            item_name: '皇麦世家 坚果巧克力燕麦片 早餐冲饮谷物杏仁榛子即食燕麦片350g',
                            item_price: '25.90'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_5-1.jpg',
                            item_name: '金六福绵柔精品50度375ml*6瓶浓香型白酒整箱酒水(1 整箱)',
                            item_price: '238.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-2.jpg',
                            item_name: '1919酒类直供 52度国窖1573 500ml （整箱6瓶）',
                            item_price: '4494.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-3.jpg',
                            item_name: '52度水井坊臻酿八号500ML 浓香型白酒',
                            item_price: '295.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-4.jpg',
                            item_name: '四川郎酒红花郎10年 十年 陈酿 酱香53度500ml 白酒',
                            item_price: '289.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-5.jpg',
                            item_name: '青岛啤酒进口麦芽鲜活纯生 黄晓明鲜啤酒500ml*12听包邮',
                            item_price: '88.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-6.jpg',
                            item_name: 'RIO锐澳鸡尾酒套餐混合6口味预调酒275ml*6瓶炫彩果酒',
                            item_price: '75.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-7.jpg',
                            item_name: '【买就送】42度洋河蓝色经典海之蓝480ml 绵柔国产江苏白酒',
                            item_price: '130.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-8.jpg',
                            item_name: '澳大利亚进口红酒黄尾袋鼠 赤霞珠 葡萄酒 750ml(六瓶装 旋盖)',
                            item_price: '330.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-9.jpg',
                            item_name: '拉菲传奇干红葡萄酒750ML*6（年份新旧酒标随机发）',
                            item_price: '329.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_5-10.jpg',
                            item_name: '【买5送1】蓝眉山 福建白茶寿眉 陈年老白茶老寿眉350g',
                            item_price: '79.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_6-1.jpg',
                            item_name: '藏家乐正宗西藏那曲冬虫夏草 野生虫草6根/g',
                            item_price: '155.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-2.jpg',
                            item_name: '惠滋堂 阿胶糕 500g/盒',
                            item_price: '168.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-3.jpg',
                            item_name: '碧生源牌减 肥茶 2.5g/袋*15袋/盒*4盒(正式更名为碧生源牌常菁茶）',
                            item_price: '158.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-4.jpg',
                            item_name: '《Haier健康官方旗舰店》海尔电子血压计全自动臂式血压仪BF1112',
                            item_price: '198.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-5.jpg',
                            item_name: '【下单立减】哈斯福 1-5L可调节 制氧机 家用老人 带雾化氧气机补吸氧机',
                            item_price: '1268.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-6.jpg',
                            item_name: '【爱奥乐】宝宝红外线电子体温计E126 儿童额温枪医用 家用婴儿电子体温表 测量体温 耳温枪 准小孩温度计(30天包退换、1年免费换新机)',
                            item_price: '108.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-7.jpg',
                            item_name: '欧姆龙电子血压计臂式HEM-7200全自动家用血压测量仪器',
                            item_price: '309.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-8.jpg',
                            item_name: '德国EROS伊露丝 101男性延时喷剂喷雾30ml男性控时喷剂 延时持久 成人用品',
                            item_price: '168.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-9.jpg',
                            item_name: '杜蕾斯旗舰店安全套避孕套激爽四合一32只+螺纹2只+亲昵4只男用情趣用品成人用品(激爽组合)',
                            item_price: '44.90'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_6-10.jpg',
                            item_name: '（进口版）多乐士梦幻系列2盒赠梦幻凸点4只装2盒 共4盒32只 避孕套 成人用品 情趣',
                            item_price: '32.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_7-1.jpg',
                            item_name: '杞农云商 泰山大樱桃红灯新鲜采摘 23#-26#果顺丰包邮现货(1000g)',
                            item_price: '68.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-2.jpg',
                            item_name: '【果郡王】（预售5月28号开始发货）海南妃子笑荔枝1.5斤装 新鲜水果 荔枝',
                            item_price: '30.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-3.jpg',
                            item_name: '【果郡王】越南青芒果5斤装 芒果 青芒果 新鲜水果',
                            item_price: '36.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-4.jpg',
                            item_name: '【果郡王】山东蓝莓鲜果125g*4盒 顺丰直达 新鲜蓝莓水果',
                            item_price: '68.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-5.jpg',
                            item_name: '秭归脐橙夏橙 新鲜水果榨汁橙子 酸爽多汁现 摘现发5斤',
                            item_price: '58.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-6.jpg',
                            item_name: '红功夫 麻辣小龙虾熟食龙虾4-6钱/只 净虾1000g 新虾上市',
                            item_price: '88.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-7.jpg',
                            item_name: '【本来生活】蝴蝶生虾仁（71-90尾/磅） 1kg/袋',
                            item_price: '118.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-8.jpg',
                            item_name: '加拿大深海野生北极虾120/150 500g*2',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-9.jpg',
                            item_name: '科尔沁（kerchin）澳洲菲力牛排套餐8袋共16片1200g',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_7-10.jpg',
                            item_name: '艾克拜尔澳洲原料进口家庭牛排套餐团购清真牛排眼肉9片1350g',
                            item_price: '299.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/5F/5F_8-1.jpg',
                            item_name: '(国美自营)华素愈创优效修复专用+++漱口水260ml(海洋薄荷香型)',
                            item_price: '39.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-2.jpg',
                            item_name: '【国美自营】惠氏（Wyeth）启赋幼儿配方奶粉3段900g（12-36月适用）',
                            item_price: '306.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-3.jpg',
                            item_name: '【国美自营】雀巢Nestle能恩3段幼儿配方奶粉1200g超值三联装（12-36个月适用）活性益生菌 含DHA和ARA 进口奶源',
                            item_price: '178.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-4.jpg',
                            item_name: '(国美自营)好奇（Huggies）银装成长裤加大号（XL）17+2片',
                            item_price: '40.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-5.jpg',
                            item_name: '(国美自营)好奇（Huggies）银装干爽舒适箱装加大号(XL)104片',
                            item_price: '169.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-6.jpg',
                            item_name: '鱼跃臂式电子血压计YE-660C',
                            item_price: '129.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-7.jpg',
                            item_name: '纯粹五常大米东北黑龙江稻花香五优稻4号2kg',
                            item_price: '59.80'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-8.jpg',
                            item_name: '【国美自营】王老吉凉茶310ml*6罐/塑包 亲朋聚会 美食聚餐 来罐王老吉!!!',
                            item_price: '29.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-9.jpg',
                            item_name: '【国美自营】同仁堂滋补养生酒鹿鞭酒250ml*2瓶',
                            item_price: '256.00'
                        },
                        {
                            item_img: 'img/img_lyy/5F/5F_8-10.jpg',
                            item_name: '雅丽洁漫友圈十二漫友面膜套盒12片装',
                            item_price: '69.00'
                        }
                    ]
                }
            ]
        },
    /* 6F */
        {
            floor_num: '6F',
            floor_title: '服饰鞋包',
            floor_tab: [
                '精选热卖',
                '服饰鞋帽',
                '运动户外',
                '钟表礼品',
                '箱包奢品',
                '亚瑟士128元',
                '阿玛尼T恤399两件'
            ],
            main_img: 'img/img_lyy/6F/6F_L.jpg',
            channelitem: [
                {
                    big_channel: [
                        '钟表首饰'
                    ]
                },
                {
                    big_channel: [
                        '箱包奢品'
                    ]
                },
                {
                    big_channel: [
                        '服饰鞋帽'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '运动跑鞋',
                        '瑞士名表',
                        '男式风衣',
                        '拉杆箱',
                        '黄金收藏'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/6F/6F_slide1.jpg',
                    big_brand_img: [
                        'img/img_lyy/6F/6F_slide1_b1.jpg',
                        'img/img_lyy/6F/6F_slide1_b2.jpg',
                        'img/img_lyy/6F/6F_slide1_b3.jpg',
                        'img/img_lyy/6F/6F_slide1_b4.jpg',
                        'img/img_lyy/6F/6F_slide1_b5.jpg',
                        'img/img_lyy/6F/6F_slide1_b6.jpg',
                        'img/img_lyy/6F/6F_slide1_b7.jpg',
                        'img/img_lyy/6F/6F_slide1_b8.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/6F/6F_slide2.jpg',
                    big_brand_img: [
                        'img/img_lyy/6F/6F_slide2_b1.jpg',
                        'img/img_lyy/6F/6F_slide2_b2.jpg',
                        'img/img_lyy/6F/6F_slide2_b3.png',
                        'img/img_lyy/6F/6F_slide2_b4.jpg',
                        'img/img_lyy/6F/6F_slide2_b5.jpg',
                        'img/img_lyy/6F/6F_slide2_b6.jpg',
                        'img/img_lyy/6F/6F_slide2_b7.png',
                        'img/img_lyy/6F/6F_slide2_b8.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/6F/6F_slide3.jpg',
                    big_brand_img: [
                        'img/img_lyy/6F/6F_slide3_b1.jpg',
                        'img/img_lyy/6F/6F_slide3_b2.jpg',
                        'img/img_lyy/6F/6F_slide3_b3.jpg',
                        'img/img_lyy/6F/6F_slide3_b4.jpg',
                        'img/img_lyy/6F/6F_slide3_b5.jpg',
                        'img/img_lyy/6F/6F_slide3_b6.jpg',
                        'img/img_lyy/6F/6F_slide3_b7.jpg',
                        'img/img_lyy/6F/6F_slide3_b8.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/6F/6F_R1.jpg',
                'img/img_lyy/6F/6F_R2.jpg',
                'img/img_lyy/6F/6F_R3.jpg',
                'img/img_lyy/6F/6F_R4.jpg',
                'img/img_lyy/6F/6F_R5.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/6F/6F_2-1.jpg',
                            item_name: '花花公子贵宾 皮肤衣男士时尚修身休闲薄款防晒衣2017新款(水蓝色 L)',
                            item_price: '49.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-2.jpg',
                            item_name: 'FGN/富贵鸟 男装短袖T恤男时尚休闲半袖t恤男纯色翻领体恤衫 17080FG8008(兰色 L)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-3.jpg',
                            item_name: '2017夏季新款 包邮 纯棉水洗多口袋迷彩中裤 工装中裤 五分裤男(黑白迷彩)',
                            item_price: '59.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-4.jpg',
                            item_name: '伊秋梦紫 2017夏季新款喇叭袖雪纺碎花连衣裙女夏收腰淑女花色长裙潮8831(兰花 XXL)',
                            item_price: '118.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-5.jpg',
                            item_name: '窈兹 夏季新款女装韩版V领喇叭袖印花收腰显瘦小清新女短袖连衣裙(白色 S)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-6.jpg',
                            item_name: '龙泉啄木鸟2017春夏新款男士打孔镂空洞洞透气凉皮鞋皮(黑色 39)',
                            item_price: '159.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-7.jpg',
                            item_name: '羽陌伦诗夏季粗跟中跟跟女鞋鱼嘴露趾包头凉鞋女休闲一字式扣带纯色高跟鞋H019(黑色 37)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-8.jpg',
                            item_name: '雷朋 (RAY-BAN) 偏光太阳镜 RB3025炫彩膜偏光系列 墨镜蛤蟆镜驾驶镜 飞行员系列 蓝 绿 橙 银四色可选(112/4L蓝膜偏光58码 58mm)',
                            item_price: '939.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-9.jpg',
                            item_name: '卡帝乐鳄鱼情侣内裤性感诱惑棉氨彩条男女平脚裤情侣内裤单条装(男士一条 XXXL)',
                            item_price: '39.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_2-10.jpg',
                            item_name: '3双浪莎男士丝袜夏季薄款冰丝袜子 男短袜防臭吸汗透气袜 中筒袜对对袜(3双混搭 均码（适合37-43码）)',
                            item_price: '9.90'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/6F/6F_3-1.jpg',
                            item_name: 'adidas阿迪达斯三叶草男T恤17春季休闲短袖 BP8986 BP8988(BP8986 M)',
                            item_price: '228.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-2.jpg',
                            item_name: 'VANS万斯女鞋 权志龙GD同款红白男鞋帆布休闲滑板鞋情侣鞋VN0A3DZ3KE6/OXS(0A3DZ3OXS 44)',
                            item_price: '595.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-3.jpg',
                            item_name: 'Nike 耐克官方多色彩男女 男子跑步鞋运动鞋子 831352 NIKEPEGASUS 33(黑色 42)',
                            item_price: '418.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-4.jpg',
                            item_name: '亚瑟士 新款男士跑步鞋 fuzeX Lyte 2 缓冲减震透气跑鞋 男T719N(T719N-9093 黑/银/白 42)',
                            item_price: '600.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-5.jpg',
                            item_name: 'Camel/骆驼户外速干t恤男女2017新款夏圆领透气排汗短袖运动功能速干衣 A7S209216/A7S109217(粉红 XL)',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-6.jpg',
                            item_name: '新手必备 佳钓尼 喜诺 鱼竿 钓鱼竿 新手 碳素手杆 5.4米渔具套装',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-7.jpg',
                            item_name: '威迪瑞户外折叠椅躺椅 便携式休闲沙滩椅钓鱼椅子(彩蓝)',
                            item_price: '39.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-8.jpg',
                            item_name: '乐士ENPEX铠甲勇士可调旱冰鞋 溜冰鞋套装KJ-335直排闪光轮滑鞋套装(蓝色 M码（35-38）)',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-9.jpg',
                            item_name: '雅马哈(yamaha) KB-291 电子琴演奏61键成人儿童考级kb-290升级真品行货',
                            item_price: '2550.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_3-10.jpg',
                            item_name: '阿米尼 山地车 幻影900 20寸儿童自行车 自行车 21速山地车 高碳钢车架童车单车(亮丽红/亮黑前叉)',
                            item_price: '798.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/6F/6F_4-1.jpg',
                            item_name: '多姆（DOM）手表 男表 时尚商务休闲皮带男士手表 双日历显示钢带男士石英表(钢带黑盘)',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-2.jpg',
                            item_name: '飞亚达(FIYTA)手表 摄影师系列四叶草机械女表白盘皮带DLA8262.PWWS(四叶草红带 其他)',
                            item_price: '2599.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-3.jpg',
                            item_name: '海鸥2016新款Seagull海鸥手表精钢商务国民单历自动机械表6006系列隽永系列(819.22.6006钢带 条棍刻度)',
                            item_price: '1230.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-4.jpg',
                            item_name: '新品danielwellingtonn女生手表 dw手表女 潮流简约时尚大表盘女士手表(DW00100163)',
                            item_price: '1199.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-5.jpg',
                            item_name: '宜准运动手表男士手表防水手表电波表户外手表休闲电子表L002(A01黑负显)',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-6.jpg',
                            item_name: '绎美 乡土情地方特色 天鹅之恋手机指环支架 东莞市创意小天鹅手机扣环指环懒人小支',
                            item_price: '9.90'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-7.jpg',
                            item_name: '之宝Zippo打火机 205经典镀铬缎纱光板机 磨砂耐磨工艺(单机装)',
                            item_price: '145.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-8.jpg',
                            item_name: '【搜藏天下】辛亥革命100周年纪念钞',
                            item_price: '38.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-9.jpg',
                            item_name: '澳门生肖纪念钞尾3同号 10元对钞(2017年鸡年纪念钞 一对2张)',
                            item_price: '38.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_4-10.jpg',
                            item_name: '绎美 创意沙漏沙画油滴油漏 美腰双色动感油滴摆件 创意家用桌面工艺摆饰摆件礼品',
                            item_price: '12.90'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/6F/6F_5-1.jpg',
                            item_name: '莫尔克（MERKEL）新款女包时尚鳄鱼纹单肩女包百搭手机包零钱包(蓝色)',
                            item_price: '15.90'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-2.jpg',
                            item_name: '蔻驰（COACH）男士钱包 F74529 黑色 褐色(黑色1)',
                            item_price: '269.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-3.jpg',
                            item_name: 'COACH蔻弛 女士长款拉链钱包 52372钱夹手拿包(玫红色52372)',
                            item_price: '699.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-4.jpg',
                            item_name: 'texwood皮带男真皮自动扣青年男士腰带头层牛皮(黑色 130)',
                            item_price: '279.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-5.jpg',
                            item_name: 'texwood男士钱包男长款手包大容量潮休闲男包(蓝色)',
                            item_price: '259.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-6.jpg',
                            item_name: 'texwood 单肩包斜挎包竖款商务休闲斜跨',
                            item_price: '299.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-7.jpg',
                            item_name: '瑞吉仕 电脑双肩包男15.6/17.3英寸笔记本背包情侣书包旅行包男女(黑色15.6英寸)',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-8.jpg',
                            item_name: 'SVVTSSCFAP军刀商务双肩电脑背包 男女14寸防水多功能休闲旅行包中学生书包(灰色)',
                            item_price: '118.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-9.jpg',
                            item_name: '苏克斯时尚旅行箱拉杆箱托运箱20寸/24寸商务箱密码箱(薄荷绿 20寸)',
                            item_price: '129.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_5-10.jpg',
                            item_name: '达得利拉杆箱旅行箱包行李箱登机箱子万向轮男女用潮24寸20寸(银色 24寸（需要托运）)',
                            item_price: '278.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/6F/6F_6-1.jpg',
                            item_name: '亚瑟士 春夏新款女轻便缓冲跑鞋 fuzeX 轻便休闲训练鞋 T689N-9090 黑色(T689N-9090 37.5)',
                            item_price: '759.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-2.jpg',
                            item_name: '亚瑟士 17年春夏新款 男缓冲跑步鞋 轻便训练鞋 fuzeX T639N-9090 黑色(T639N-9090 41.5)',
                            item_price: '759.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-3.jpg',
                            item_name: '新款亚瑟士 男子轻便缓冲 DynaFlyte 跑步运动鞋 T6F3Y(T6F3Y-9790 40.5)',
                            item_price: '850.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-4.jpg',
                            item_name: '亚瑟士新款 男子户外越野运动鞋 GEL-FujiLyte 抓地耐磨鞋T632N-9790(T632N-9790 42)',
                            item_price: '729.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-5.jpg',
                            item_name: 'ASICS亚瑟士GEL-NIMBUS 19缓冲跑鞋跑步鞋运动鞋男(T700N-9023 42)',
                            item_price: '980.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-6.jpg',
                            item_name: '【新品】ASICS亚瑟士 2017春夏新款 男式运动舒适透气印花短袖T恤男 XT6380(XT6380-90 S)',
                            item_price: '128.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-7.jpg',
                            item_name: '亚瑟士 17年新款 女式运动健身短袖 LITE-SHOW 夜跑运动T恤 142575(142575-8121 S)',
                            item_price: '200.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-8.jpg',
                            item_name: '亚瑟士新款夜跑运动T恤 LITE-SHOW 跑步短袖 142559(142559-0626 L)',
                            item_price: '230.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-9.jpg',
                            item_name: '亚瑟士 2017 新款 女子跑步裤 3.5IN健身运动短裤有内衬 144528-0904 黑色(144528-0904 M)',
                            item_price: '259.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_6-10.jpg',
                            item_name: '亚瑟士 女子跑步运动短袖 拼接式透气修身T恤 140891(140891-8121 M)',
                            item_price: '260.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/6F/6F_7-1.jpg',
                            item_name: 'EMPORIO ARMANI 阿玛尼修身男士薄款短袖T恤2件装 91935(黑色 L)',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-2.jpg',
                            item_name: 'ARMANI JEANS阿玛尼男士时尚字母LOGO短袖T恤 3Y6T08 6J0AZ(绿色 XXXL)',
                            item_price: '1035.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-3.jpg',
                            item_name: 'ARMANI EA7阿玛尼男士时尚休闲短袖圆领T恤 3YPTE2 PJ30Z(白色 XXXL)',
                            item_price: '742.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-4.jpg',
                            item_name: 'ARMANI EA7阿玛尼男士短袖圆领T恤 3YPTE4 PJ02Z(黑色 XXXL)',
                            item_price: '660.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-5.jpg',
                            item_name: 'Calvin Klein 男士简约时尚长袖T恤 J30J301082(黑色 M)',
                            item_price: '660.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-6.jpg',
                            item_name: 'PRADA普拉达钱包 女士时尚休闲手拿包钱包 1MH438 2EZ8(黑色 手拿包)',
                            item_price: '3150.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-7.jpg',
                            item_name: 'PRADA普拉达钱包 男女通钱拉链钱包 1ML506 QHH(藏青色 通用)',
                            item_price: '5100.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-8.jpg',
                            item_name: 'PRADA 普拉达女包 女士时尚休闲长款手拿钱包 1MH037 2EZ8(黑色 手拿包)',
                            item_price: '3375.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-9.jpg',
                            item_name: 'gucci时尚简约LOGO红色女士单肩手提包 369176 A7MOG(红色)',
                            item_price: '11250.00'
                        },
                        {
                            item_img: 'img/img_lyy/6F/6F_7-10.jpg',
                            item_name: 'GUCCI古琦女士双G时尚牛皮褐色长款钱包291099 FAFXG',
                            item_price: '4425.00'
                        }
                    ]
                }
            ]
        },
    /* 7F */
        {
            floor_num: '7F',
            floor_title: '家居家装',
            floor_tab: [
                '精选热卖',
                '厨房用品',
                '生活日用',
                '家纺寝居',
                '家装建材',
                '精品家具',
                '材料装修'
            ],
            main_img: 'img/img_lyy/7F/7F_L.jpg',
            channelitem: [
                {
                    big_channel: [
                        '家居日用'
                    ]
                },
                {
                    big_channel: [
                        '家纺寝居'
                    ]
                },
                {
                    big_channel: [
                        '住宅家具'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '厨房餐饮',
                        '夏凉用品',
                        '红木家具',
                        '箭牌马桶',
                        '灯世界'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/7F/7F_slide1.jpg',
                    big_brand_img: [
                        'img/img_lyy/7F/7F_slide1_b1.jpg',
                        'img/img_lyy/7F/7F_slide1_b2.jpg',
                        'img/img_lyy/7F/7F_slide1_b3.jpg',
                        'img/img_lyy/7F/7F_slide1_b4.jpg',
                        'img/img_lyy/7F/7F_slide1_b5.jpg',
                        'img/img_lyy/7F/7F_slide1_b6.jpg',
                        'img/img_lyy/7F/7F_slide1_b7.jpg',
                        'img/img_lyy/7F/7F_slide1_b8.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/7F/7F_slide2.jpg',
                    big_brand_img: [
                        'img/img_lyy/7F/7F_slide2_b1.jpg',
                        'img/img_lyy/7F/7F_slide2_b2.jpg',
                        'img/img_lyy/7F/7F_slide2_b3.jpg',
                        'img/img_lyy/7F/7F_slide2_b4.jpg',
                        'img/img_lyy/7F/7F_slide2_b5.jpg',
                        'img/img_lyy/7F/7F_slide2_b6.jpg',
                        'img/img_lyy/7F/7F_slide2_b7.jpg',
                        'img/img_lyy/7F/7F_slide2_b8.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/7F/7F_slide3.jpg',
                    big_brand_img: [
                        'img/img_lyy/7F/7F_slide3_b1.jpg',
                        'img/img_lyy/7F/7F_slide3_b2.jpg',
                        'img/img_lyy/7F/7F_slide3_b3.jpg',
                        'img/img_lyy/7F/7F_slide3_b4.jpg',
                        'img/img_lyy/7F/7F_slide3_b5.jpg',
                        'img/img_lyy/7F/7F_slide3_b6.jpg',
                        'img/img_lyy/7F/7F_slide3_b7.jpg',
                        'img/img_lyy/7F/7F_slide3_b8.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/7F/7F_R1.jpg',
                'img/img_lyy/7F/7F_R2.jpg',
                'img/img_lyy/7F/7F_R3.jpg',
                'img/img_lyy/7F/7F_R4.jpg',
                'img/img_lyy/7F/7F_R5.jpg',
                'img/img_lyy/7F/7F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/7F/7F_2-1.jpg',
                            item_name: '苏泊尔不粘锅三件套装锅组合锅具 炒锅煎锅汤锅 电磁炉燃气通用锅具',
                            item_price: '279.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-2.jpg',
                            item_name: '新款苏泊尔（SUPOR）FC32Z1臻铁真不锈健康炒锅 铸铁锅 无涂层炒菜锅32CM电磁炉通用',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-3.jpg',
                            item_name: '碗碟盘套装38头陶瓷餐具家用碗碟微波陶瓷碗盘创意韩式(26件物语 其他)',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-4.jpg',
                            item_name: '彩帮景德镇14头骨瓷餐具套装金钟碗韩式碟碗盘餐具礼品 太阳岛 破损补发，购买无忧！(金色玫瑰)',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-5.jpg',
                            item_name: '拜格不锈钢厨具套装厨房汤勺饭勺锅铲漏勺厨房料理工具(不锈钢七件套)',
                            item_price: '59.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-6.jpg',
                            item_name: '苏泊尔（SUPOR）FC30C1炒锅铁锅30cm 无涂层健康不生锈精铁锅 燃气灶专用',
                            item_price: '58.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-7.jpg',
                            item_name: '华帝/vatti 奶锅304不锈钢小汤锅加厚复底婴儿宝宝辅食热奶煮面锅具',
                            item_price: '188.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-8.jpg',
                            item_name: '张小泉家用套刀七件套 剪刀菜刀具组合',
                            item_price: '259.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-9.jpg',
                            item_name: '整套茶具陶瓷冰裂茶具茶壶功夫茶具竹制茶盘托盘(柏木龙凤呈祥10件绿冰裂电热炉套装)',
                            item_price: '699.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_2-10.jpg',
                            item_name: '富光双层玻璃杯水杯男女创意透明盖便携过滤花茶杯水晶杯子WFB1013-320(黑色)',
                            item_price: '39.90'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/7F/7F_3-1.jpg',
                            item_name: '心相印红悦抽纸婴儿心心相印面巾餐巾纸卫生纸抽3层18包',
                            item_price: '41.90'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-2.jpg',
                            item_name: '心相印湿巾新包装加香无纺布无印花洁肤柔10+2片 XCB001 12包',
                            item_price: '36.80'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-3.jpg',
                            item_name: '奕辰 35L加厚塑料有盖带滑轮储物箱衣物整理盒收纳箱(粉色)',
                            item_price: '39.90'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-4.jpg',
                            item_name: '新款电蚊拍充电式家用苍蝇拍灭蚊器蚊子拍灭蚊拍 单个装 颜色款式随机(颜色随机 一个装)',
                            item_price: '29.90'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-5.jpg',
                            item_name: '超能洗衣液植翠低泡鲜艳亮丽2kg/袋装补充装天然椰油',
                            item_price: '19.90'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-6.jpg',
                            item_name: '天堂伞 高密碰击布拒水三折晴雨伞 经典商务伞 307E碰(灰蓝 七色可选 灰蓝)',
                            item_price: '29.90'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-7.jpg',
                            item_name: '爱丽思IRIS 进口环保塑料窄型收纳柜衣柜夹缝抽屉柜玩具整理柜衣橱(茶色 三层窄)',
                            item_price: '108.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-8.jpg',
                            item_name: '蝴蝶牌缝纫机JHQ30A家用多功能电动锁边台式(限量50台)',
                            item_price: '998.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-9.jpg',
                            item_name: '韩国乐扣乐扣塑料水杯密封防漏大容量夏季简约随手杯学生户外茶杯(紫色)',
                            item_price: '44.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_3-10.jpg',
                            item_name: '乐扣乐扣塑料水杯 户外车载便携密封防漏运动水杯 泡茶杯子(蓝色480ml)',
                            item_price: '23.90'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/7F/7F_4-1.jpg',
                            item_name: '晶丽莱蒙古包蚊帐免安装二开门钢丝折叠圆顶拉链1.8m1.5m床1.2米A(萌环-粉红 1.2m（4英尺）床)',
                            item_price: '39.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-2.jpg',
                            item_name: '囍人坊 蚊帐蒙古包加高1.7米三开门圆顶加密U型蕾丝蚊帐1.2/1.5米/1.8m床(粉色 180*200)',
                            item_price: '96.80'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-3.jpg',
                            item_name: '南极人吊顶蚊帐1.5m欧式落地加密公主蚊帐子1.8m床吊顶蚊帐A(莱升缘-水兰 1.8m（6英尺）床)',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-4.jpg',
                            item_name: '南极人家纺冰丝席二三件套凉席单双人空调席(花好月圆蓝色 1.5m床)',
                            item_price: '89.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-5.jpg',
                            item_name: '奢派家纺纯棉夏被空调被全棉可水洗夏凉被儿童被学生夏天午睡被子针织棉(淡淡幽香 1.1*1.5米)',
                            item_price: '118.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-6.jpg',
                            item_name: '囍人坊 夏被空调被夏凉被 春秋单人双人葆莱绒印花绗缝被学生卡通被子(猫咪宝贝 100*150)',
                            item_price: '24.20'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-7.jpg',
                            item_name: '囍人坊 全棉夏季棉花夏被可水洗单双人夏凉被纯棉空调被儿童夏天薄被子L(只如初见 200*230)',
                            item_price: '195.80'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-8.jpg',
                            item_name: '南极人家纺 夏凉被空调被子简约风格夏被单双人薄被芯(爱巢 200X230cm)',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-9.jpg',
                            item_name: '囍人坊 全棉夏凉被空调被春夏天薄被芯单双人可水洗纯棉夏被子B(熊和鱼 180*220)',
                            item_price: '96.80'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_4-10.jpg',
                            item_name: '囍人坊 水洗棉印花夏凉被可水洗空调单双人夏被 儿童学生夏季空调被(锦绣人生 200*230)',
                            item_price: '93.50'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/7F/7F_5-1.jpg',
                            item_name: '阿萨斯 8050 欧式多功能304不锈钢水槽套餐 厨房洗碗池洗菜盆大单槽刀架(左12件套（含6007铜龙头）)',
                            item_price: '1018.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-2.jpg',
                            item_name: 'AB1276坐便器+AE3309S花洒+APGM6G349浴室柜(300坑距坐便+花洒+浴室柜)',
                            item_price: '2599.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-3.jpg',
                            item_name: 'AB1276坐便器+AE3309S花洒+APGM6G349浴室柜(300坑距坐便+花洒+浴室柜)',
                            item_price: '239.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-4.jpg',
                            item_name: '品拓LED吸顶灯 现代简约客厅灯长方形卧室灯无极调光餐厅灯成套灯具搭配套餐(65*43三色24W(可选金或银))',
                            item_price: '288.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-5.jpg',
                            item_name: '现代创意卧室客厅灯花形单色双色分段花瓣房间灯调色后现代简约LED房间灯具带遥控调光设计师灯单头双头壁灯圆形花瓣吸顶灯(4头 620mm 24W 无极调光带遥控)',
                            item_price: '495.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-6.jpg',
                            item_name: 'ABB墙面开关插座 五孔插座10只装AH205*10',
                            item_price: '105.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-7.jpg',
                            item_name: 'TCL罗格朗开关插座 K5系列 五孔插座套餐（10只装）',
                            item_price: '119.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-8.jpg',
                            item_name: '稳安特 无线网络高清远程监控防盗报警器WIFI百万红外夜视网络家用店铺无线红外(白色100万 不含卡)',
                            item_price: '158.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-9.jpg',
                            item_name: '洛克菲勒浴霸 集成吊顶风暖LED灯三合一多功能全铝机身 FL-F600-26(白色 普通开关)',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_5-10.jpg',
                            item_name: '旗航壁纸欧式电视背景墙壁纸3d无纺布墙纸简约现代客厅墙纸 菱格(003米黄色)',
                            item_price: '148.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/7F/7F_6-1.jpg',
                            item_name: '思巧 皮沙发 简约现代沙发 进口头层中厚皮沙发 客厅组合转角沙发大小户型皮艺沙发339(米黄色 【中厚皮】1+3+右贵妃)',
                            item_price: '4480.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-2.jpg',
                            item_name: '豪迈家具 潮流时尚绒布沙发 皮布结合沙发SMD07(3S+右贵妃)',
                            item_price: '4198.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-3.jpg',
                            item_name: '健舒宝1.8米双人床现代简约婚床1.5米单人床皮艺床软床(1.5*2.0m 标准床不带床头柜)',
                            item_price: '1298.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-4.jpg',
                            item_name: '明佳友 餐桌 实木餐桌椅组合 折叠伸缩圆桌 餐桌餐椅套装 饭桌M608(胡桃色 一桌四椅/1.38米)',
                            item_price: '1968.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-5.jpg',
                            item_name: '歪脖树 欧式泡桐实木北欧二斗四门 鞋柜(象牙白)',
                            item_price: '1299.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-6.jpg',
                            item_name: '可拆洗布艺沙发 小户型沙发 现代客厅转角组合布沙发(深蓝灰白 单+双+左贵妃)',
                            item_price: '2280.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-7.jpg',
                            item_name: '曲尚(Qushang) 双人床 皮床 皮艺床软床1.8米卧室家具0082(1800*2000 【头层牛皮】)',
                            item_price: '1878.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-8.jpg',
                            item_name: '香河家具床实木床北欧简约双人床B18(床 框架床 1.8*2米)',
                            item_price: '3519.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-9.jpg',
                            item_name: '拉斐曼尼 欧式衣柜 法式田园衣橱白色 木质衣柜三五四门 实木衣柜FE006(象牙白 1.75m)',
                            item_price: '2880.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_6-10.jpg',
                            item_name: '宜宸 实木双层床上下床高低床母子床儿童床双层床子母床实木床(梯柜 上铺130下铺150)',
                            item_price: '3600.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/7F/7F_7-1.jpg',
                            item_name: '摩博恩卫浴全铜厨房冷热水龙头可旋转洗菜洗碗盆池水槽双槽水龙头',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-2.jpg',
                            item_name: '果敢亚克力浴缸独立式无缝一体SAP按摩浴缸1.3米~1.8米017浴盆',
                            item_price: '2480.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-3.jpg',
                            item_name: '华帝卫浴 304不锈钢水槽套装 新款单槽水槽套装 不锈钢洗菜盆 不锈钢洗碗盆(10(62)-R.1)',
                            item_price: '558.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-4.jpg',
                            item_name: '汉斯威诺欧式吊灯 客厅大吊灯 餐厅卧室大气古铜色美式乡村吊灯HS704018(6头(不带光源))',
                            item_price: '569.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-5.jpg',
                            item_name: '佛山照明（FSL）LED吸顶灯现代简约 圆形客厅卧室灯具灯饰 雅灵(白光 24W雅灵-橙 直径42CM)',
                            item_price: '139.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-6.jpg',
                            item_name: 'ABB德逸系列二位二三极插座10A十只套装 AE205*10',
                            item_price: '179.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-7.jpg',
                            item_name: '德力西 开关插座套餐 错位五孔插座面板5孔 15只装',
                            item_price: '73.50'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-8.jpg',
                            item_name: '德力西 电线电缆 1.5平方铜芯线BV单芯单股硬线铜电线 100米/卷(黄绿色)',
                            item_price: '133.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-9.jpg',
                            item_name: '旗航欧式无纺布壁纸浮雕超厚立体3D墙纸 卧室客厅电视背景墙纸(米黄色)',
                            item_price: '68.00'
                        },
                        {
                            item_img: 'img/img_lyy/7F/7F_7-10.jpg',
                            item_name: '荣登 强化地板和踢脚线家装套餐 25平方米地板+25米踢脚线(天空系列1 TKXL)',
                            item_price: '1800.00'
                        }
                    ]
                }
            ]
        },
    /* 8F */
        {
            floor_num: '8F',
            floor_title: '汽车用品',
            floor_tab: [
                '精选热卖',
                '车载电器',
                '四季坐垫',
                '防冻液',
                '自营专区',
                '汽车轮胎',
                '整车销售',
                '净化器'
            ],
            main_img: 'img/img_lyy/8F/8F_L.jpg',
            channelitem: [
                {
                    channel: [
                        '母婴玩具 / ',
                        '美妆个护 / ',
                        '摩托车 / '
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '行车记录',
                        '机油',
                        '改装配件',
                        '车蜡',
                        '整车'
                    ]
                },
                {
                    keywords: [
                        '轮胎',
                        '洗车机',
                        '添加剂',
                        '新品坐',
                        '专场专'
                    ]
                },
                {
                    keywords: [
                        '儿童安全座椅',
                        '蓄电池',
                        '防冻液',
                        '车载生活',
                        '维修保养'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/8F/8F_slide1.jpg',
                    brand_img: [
                        'img/img_lyy/8F/8F_slide1_b1.jpg',
                        'img/img_lyy/8F/8F_slide1_b2.jpg',
                        'img/img_lyy/8F/8F_slide1_b3.jpg',
                        'img/img_lyy/8F/8F_slide1_b4.jpg',
                        'img/img_lyy/8F/8F_slide1_b5.jpg',
                        'img/img_lyy/8F/8F_slide1_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/8F/8F_slide2.jpg',
                    brand_img: [
                        'img/img_lyy/8F/8F_slide2_b1.jpg',
                        'img/img_lyy/8F/8F_slide2_b2.jpg',
                        'img/img_lyy/8F/8F_slide2_b3.jpg',
                        'img/img_lyy/8F/8F_slide2_b4.jpg',
                        'img/img_lyy/8F/8F_slide2_b5.jpg',
                        'img/img_lyy/8F/8F_slide2_b6.jpg'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/8F/8F_slide3.jpg',
                    brand_img: [
                        'img/img_lyy/8F/8F_slide3_b1.jpg',
                        'img/img_lyy/8F/8F_slide3_b2.jpg',
                        'img/img_lyy/8F/8F_slide3_b3.jpg',
                        'img/img_lyy/8F/8F_slide3_b4.jpg',
                        'img/img_lyy/8F/8F_slide3_b5.jpg',
                        'img/img_lyy/8F/8F_slide3_b6.jpg'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/8F/8F_R1.jpg',
                'img/img_lyy/8F/8F_R2.jpg',
                'img/img_lyy/8F/8F_R3.jpg',
                'img/img_lyy/8F/8F_R4.jpg',
                'img/img_lyy/8F/8F_R5.jpg',
                'img/img_lyy/8F/8F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_2-1.jpg',
                            item_name: '钱程双镜头后视镜行车记录仪高清1080P停车监控倒车影像(标配（无卡）)',
                            item_price: '218.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-2.jpg',
                            item_name: '钱程双镜头后视镜行车记录仪高清1080P停车监控倒车影像(标配（无卡）)',
                            item_price: '238.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-3.jpg',
                            item_name: '惠普/HPF558高清行车记录仪1440P高清夜视迷你智能行车辅助一体机',
                            item_price: '649.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-4.jpg',
                            item_name: '捷渡/JADO D600双镜头 行车记录仪前后双录高清1080P夜视标配 16g高速卡268元',
                            item_price: '269.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-5.jpg',
                            item_name: '丁威特 行车记录仪 电子狗 三合一体机 行车记录仪电子狗一体机 行车记录仪高清 夜视 广角电子狗固定 流动测速 固定测速(标配无卡)',
                            item_price: '239.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-6.jpg',
                            item_name: '途美A12 后视镜1080P高清夜视行车记录仪双镜头测速三合一一体机(电子狗一体机无卡+降压线)',
                            item_price: '339.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-7.jpg',
                            item_name: '捷渡S610 智能云镜双镜头 行车记录仪电子狗测速导航一体机 7英寸大屏可上网WIFI(标配无卡)',
                            item_price: '769.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-8.jpg',
                            item_name: '移路通V8 微型摄像机 执法记录仪 小摄像机 安霸方案1080P高清镜头数码便携式摄像机(16GB)',
                            item_price: '439.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-9.jpg',
                            item_name: '【国美在线】任e行V1行车记录仪双镜头隐藏式高清夜视1080P迷你一体机停车监控(单镜头无卡)',
                            item_price: '599.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_2-10.jpg',
                            item_name: '丁威特 U10新品中控台导航仪 行车记录仪 双镜头高清夜视1080P后视镜一体机(双镜头+16G卡)',
                            item_price: '689.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_3-1.jpg',
                            item_name: '臻蒂美全冰丝 汽车坐垫夏季新款四季通用汽车座垫套(活力橘 标准版)',
                            item_price: '469.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-2.jpg',
                            item_name: '夏精品冰丝汽车坐垫 四季通用四季垫汽车用品(亮金色 固定腰靠版)',
                            item_price: '219.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-3.jpg',
                            item_name: '夏季竹片竹子凉席汽车坐垫五座通用(黄色 三件套)',
                            item_price: '569.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-4.jpg',
                            item_name: '汽车坐垫四季通用新款手编冰丝凉垫夏季汽车座垫(卡其灰 1609)',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-5.jpg',
                            item_name: '慧鑫 冰丝汽车坐垫夏天四季全包通用(黑色 豪华版（带颈枕+腰靠）)',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-6.jpg',
                            item_name: '布雷什(BOLISH)夏季冰丝汽车坐垫五座通用四季汽车座垫座垫套(土豪金豪华款)',
                            item_price: '178.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-7.jpg',
                            item_name: '乔氏 汽车坐垫冰丝四季坐垫汽车座垫翼虎奥迪A4L宝马5系途观朗逸迈腾速腾君威皇冠通用汽车垫凉垫(流沙米-6件套 米迦系列-全包款)',
                            item_price: '268.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-8.jpg',
                            item_name: '石家垫 汽车坐垫 夏季冰丝凉垫 四季垫 汽车座垫 五座通用座套(标准版咖啡色)',
                            item_price: '178.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-9.jpg',
                            item_name: '布雷什BOLISH 超纤皮四季通用仿亚麻汽车坐垫斯柯达明锐晶锐昊锐帕萨特朗逸速腾座垫套(摩卡棕 标准款)',
                            item_price: '218.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_3-10.jpg',
                            item_name: '魅驹四季通用皮革汽车坐垫春夏季汽车座垫五座通用四季垫车垫皮革家冰丝(A款皮加冰丝-商务棕下单请备注车型)',
                            item_price: '338.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_4-1.jpg',
                            item_name: '海拉防冻液冷却液-25度 绿色 4L装',
                            item_price: '78.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-2.jpg',
                            item_name: '福特(FORD)4S店直供原厂防冻液水箱宝-37度 四升装 2U2J 19544 EA2A(福克斯)',
                            item_price: '150.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-3.jpg',
                            item_name: '壳牌（Shell）喜力 蓝壳HX7 5W-40 SN 合成机油/润滑油 4L',
                            item_price: '210.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-4.jpg',
                            item_name: '道达尔(TOTAL) 防冻液冷却液COOLANT -45度 绿色 ASTM D3306 4L',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-5.jpg',
                            item_name: '保赐利汽车玻璃水 防冻液超浓缩车用雨刷精雨 汽车玻璃水 玻璃清洗剂 B2075 500ml',
                            item_price: '16.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-6.jpg',
                            item_name: '【国美在线】SK吉克ZIC SUPER-A 发动机防冻液 冷却液4kg -45度 红色(-45度 4L)',
                            item_price: '75.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-7.jpg',
                            item_name: '龟牌(Turtle) G-121汽车玻璃水车用雨刷精雨刮精雨刮水玻璃液清洁清洗剂用品(-25摄氏度以上)',
                            item_price: '23.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-8.jpg',
                            item_name: '保赐利 汽车防冻液 发动机冷却液 水箱宝 -25',
                            item_price: '49.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-9.jpg',
                            item_name: '加德士(Caltex)防冻液防锈液冰点可达-36度/4L',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_4-10.jpg',
                            item_name: '长城 FD-1 汽车 防冻液 冷却液 4L 冰点：-25（亮绿色液体）',
                            item_price: '75.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_5-1.jpg',
                            item_name: '壳牌(Shell) 蓝壳 HX7 10W40 SN 半合成润滑油 4L',
                            item_price: '219.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-2.jpg',
                            item_name: '米其林汽车轮胎 205/55R16 Energy MXV8 91V',
                            item_price: '638.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-3.jpg',
                            item_name: '普利司通轮胎 绿歌伴 EP150 195/55R15 85H黑',
                            item_price: '358.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-4.jpg',
                            item_name: '马牌轮胎 205/55R16 CC6 91V',
                            item_price: '516.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-5.jpg',
                            item_name: '米其林汽车轮胎 205/65R15 PRIMACY3 ST 94V',
                            item_price: '633.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-6.jpg',
                            item_name: '壳牌(Shell) 黄壳 HX5 5W30 SN 矿物质油 4L',
                            item_price: '139.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-7.jpg',
                            item_name: '瓦尔塔(VARTA)汽车电瓶12V蓄电池本田八代雅阁2.4l/03款3.0L、三菱翼神、日产奇骏、斯巴鲁森林人、比亚迪L3、海南马自达2/3 75D23L以旧换新蓝标',
                            item_price: '615.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-8.jpg',
                            item_name: '博世（BOSCH）汽车电瓶别克凯越指南者景程乐骋乐风乐驰宝骏610/730逸动酷威长安CS35悦翔蓄电池86-610',
                            item_price: '478.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-9.jpg',
                            item_name: '瓦尔塔汽车电瓶12V蓄电池科鲁兹大众迈腾速腾宝来捷达POLO朗逸英朗高尔夫6明锐晶锐爱丽舍迈锐宝标致206/307/408世嘉L2-400以旧换新蓝标',
                            item_price: '421.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_5-10.jpg',
                            item_name: '瓦尔塔汽车电瓶12瓦尔塔汽车电瓶12V蓄电池五菱宝骏330、雪佛兰乐风、广汽菲克Jeep自由光、宝骏560/610/630/730、威旺007/205/306/307、长安CS35/CX30 86-550以旧换新蓝标',
                            item_price: '567.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_6-1.jpg',
                            item_name: '米其林轮胎 XM2 韧悦 205/55R16 91V',
                            item_price: '539.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-2.jpg',
                            item_name: '马牌 轮胎 CPC2 195/60R14 86H 桑塔纳轮胎 志俊2000适合',
                            item_price: '379.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-3.jpg',
                            item_name: '固特异 轮胎 安乘 205/65R15 94V',
                            item_price: '539.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-4.jpg',
                            item_name: '邓禄普 轮胎 SPORT 01 205/55R16 91V 卡罗拉原配',
                            item_price: '529.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-5.jpg',
                            item_name: '米其林轮胎 XM2 韧悦 195/65R15',
                            item_price: '459.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-6.jpg',
                            item_name: '马牌 轮胎 CPC2 195/60R14 86H 桑塔纳轮胎 志俊2000适合',
                            item_price: '429.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-7.jpg',
                            item_name: '倍耐力 轮胎 新P1 205/55R16 91V',
                            item_price: '539.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-8.jpg',
                            item_name: '南港 轮胎 NS-20 205/55R16 94V',
                            item_price: '379.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-9.jpg',
                            item_name: '玛吉斯 215/45R17 M36 91W',
                            item_price: '618.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_6-10.jpg',
                            item_name: '固特异 佳通轮胎 Taxi900 165/70R14 81T 适配富康爱丽舍等',
                            item_price: '178.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_7-1.jpg',
                            item_name: '2015款玩酷版1.6L自动金钻型(白色 版本)',
                            item_price: '140500.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-2.jpg',
                            item_name: '北京现代-瑞奕(黑色)',
                            item_price: '87900.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-3.jpg',
                            item_name: '朗逸2013款（改款）1.6自动风尚(白色 版本)',
                            item_price: '124900.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-4.jpg',
                            item_name: '一汽马自达-阿特兹(黑色 版本)',
                            item_price: '175800.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-5.jpg',
                            item_name: '东风标致-标致308',
                            item_price: '127700.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-6.jpg',
                            item_name: '吉利汽车-帝豪(黑色 版本)',
                            item_price: '79800.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-7.jpg',
                            item_name: '广汽丰田-凯美瑞',
                            item_price: '195800.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-8.jpg',
                            item_name: '2015款2.4L全新胜达自动舒适型(白色 版本)',
                            item_price: '219800.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-9.jpg',
                            item_name: '宝马(进口)5系',
                            item_price: '576600.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_7-10.jpg',
                            item_name: '广汽丰田-汉兰达(白色)',
                            item_price: '258800.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/8F/8F_8-1.jpg',
                            item_name: '高欣x8 车载空气净化器 家车两用 新车除味 负离子杀菌除霾异味 迷你净化器(黑色)',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-2.jpg',
                            item_name: 'WAYTRIP 车载空气净化器 汽车氧吧 车家两用负离子 智能除甲醛PM2.5抗雾霾(黑色)',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-3.jpg',
                            item_name: '豪捷 H7 车载空气净化器 太阳能 空气净化器 负离子净化 氧吧香薰PM2.5 除甲醛 去异味烟味除臭味 净化器 白色款',
                            item_price: '268.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-4.jpg',
                            item_name: '领潮者 香薰机 加湿器 净化器 三合一 车载太阳能负离子空气净化器(白色)',
                            item_price: '158.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-5.jpg',
                            item_name: '丁威特V11 汽车载空气净化器 太阳能空气净化器 消除异味雾霾甲醛细菌PM2.5专用',
                            item_price: '288.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-6.jpg',
                            item_name: '领潮者 车载智能空气净化器 汽车内用太阳能负离子空气过滤除味机 家车两用(黑色)',
                            item_price: '199.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-7.jpg',
                            item_name: '飞利浦Smartair330车载空气净化器 汽车氧吧除甲醛异味雾霾PM2.5(多送一个滤网+香氛)',
                            item_price: '1799.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-8.jpg',
                            item_name: '海尔Q4汽车载空气净化器等离子除甲醛车用净化器杀菌除异味PM2.5(标配含滤网)',
                            item_price: '399.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-9.jpg',
                            item_name: 'WAYTRIP 车载空气净化器 太阳能空气净化器 消除异味雾霾甲醛细菌PM2.5(红色)',
                            item_price: '120.00'
                        },
                        {
                            item_img: 'img/img_lyy/8F/8F_8-10.jpg',
                            item_name: '豪捷Haojie H2 车载空气净化器 车载吸尘器 空气净化机 除甲醛去烟味异味PM2.5 香薰 净化器 空气净化净化机(致炫白色)',
                            item_price: '198.00'
                        }
                    ]
                }
            ]
        },
    /* 9F */
        {
            floor_num: '9F',
            floor_title: '海外购',
            floor_tab: [
                '精选热卖',
                '母婴用品',
                '家居日用',
                '美妆个护',
                '食品保健',
                '日本好货'
            ],
            main_img: 'img/img_lyy/9F/9F_L.jpg',
            channelitem: [
                {
                    big_channel: [
                        '情动日本馆'
                    ]
                },
                {
                    big_channel: [
                        '潮流韩国馆'
                    ]
                },
                {
                    big_channel: [
                        '养生澳洲馆'
                    ]
                }
            ],
            keywords_list: [
                {
                    keywords: [
                        '纸尿裤',
                        '面膜',
                        '保温杯',
                        '防雾霾口罩',
                        'swisse'
                    ]
                }
            ],
            slide_item: [
                {
                    slide_img: 'img/img_lyy/9F/9F_slide1.jpg',
                    big_brand_img: [
                        'img/img_lyy/9F/9F_slide1_b1.png',
                        'img/img_lyy/9F/9F_slide1_b2.png',
                        'img/img_lyy/9F/9F_slide1_b3.png',
                        'img/img_lyy/9F/9F_slide1_b4.png',
                        'img/img_lyy/9F/9F_slide1_b5.png',
                        'img/img_lyy/9F/9F_slide1_b6.png',
                        'img/img_lyy/9F/9F_slide1_b7.png',
                        'img/img_lyy/9F/9F_slide1_b8.png'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/9F/9F_slide2.jpg',
                    big_brand_img: [
                        'img/img_lyy/9F/9F_slide1_b1.png',
                        'img/img_lyy/9F/9F_slide1_b2.png',
                        'img/img_lyy/9F/9F_slide1_b3.png',
                        'img/img_lyy/9F/9F_slide1_b4.png',
                        'img/img_lyy/9F/9F_slide1_b5.png',
                        'img/img_lyy/9F/9F_slide1_b6.png',
                        'img/img_lyy/9F/9F_slide1_b7.png',
                        'img/img_lyy/9F/9F_slide1_b8.png'
                    ]
                },
                {
                    slide_img: 'img/img_lyy/9F/9F_slide3.jpg',
                    big_brand_img: [
                        'img/img_lyy/9F/9F_slide1_b1.png',
                        'img/img_lyy/9F/9F_slide1_b2.png',
                        'img/img_lyy/9F/9F_slide1_b3.png',
                        'img/img_lyy/9F/9F_slide1_b4.png',
                        'img/img_lyy/9F/9F_slide1_b5.png',
                        'img/img_lyy/9F/9F_slide1_b6.png',
                        'img/img_lyy/9F/9F_slide1_b7.png',
                        'img/img_lyy/9F/9F_slide1_b8.png'
                    ]
                }
            ],
            first_list_img: [
                'img/img_lyy/9F/9F_R1.jpg',
                'img/img_lyy/9F/9F_R2.jpg',
                'img/img_lyy/9F/9F_R3.jpg',
                'img/img_lyy/9F/9F_R4.jpg',
                'img/img_lyy/9F/9F_R5.jpg',
                'img/img_lyy/9F/9F_R6.jpg'
            ],
            main_list: [
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/9F/9F_2-1.jpg',
                            item_name: '【包邮包税】Sanosan 哈罗闪 宝宝二合一洗发沐浴露 无泪型 200毫升/支',
                            item_price: '46.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-2.jpg',
                            item_name: '日本本土尤妮佳moony婴儿拉拉裤XL38男(加大号)',
                            item_price: '86.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-3.jpg',
                            item_name: 'Aveeno艾维诺 婴儿天然燕麦洗发沐浴二合一 236ml(1件)',
                            item_price: '102.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-4.jpg',
                            item_name: 'BELLAMY‘S贝拉米 婴儿有机糙米意面7+ 200g【2盒】适合7个月以上',
                            item_price: '100.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-5.jpg',
                            item_name: '努比婴儿宝宝易握训练叉勺组,不含BPA',
                            item_price: '26.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-6.jpg',
                            item_name: '意高Ego QV系列 婴儿护肤霜 50克',
                            item_price: '69.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-7.jpg',
                            item_name: '荷兰牛栏Nutrilon婴儿奶粉1段850g（0-6个月）',
                            item_price: '128.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-8.jpg',
                            item_name: '茜SHE 纯净有机婴儿润肤乳 375毫升',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-9.jpg',
                            item_name: '【国美海外购自营】日本尤妮佳moony婴儿纸尿裤M64(中号)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_2-10.jpg',
                            item_name: '意高Ego QV系列 婴儿保湿霜 250克',
                            item_price: '79.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/9F/9F_3-1.jpg',
                            item_name: '戴森(Dyson) 吹风机Supersonic 电吹风 进口家用 HD01 两色可选(紫红色)',
                            item_price: '2890.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-2.jpg',
                            item_name: '飞利浦（Philips） 家用电吹风 恒温大功率 BHD001吹风机',
                            item_price: '99.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-3.jpg',
                            item_name: 'dyson 戴森 V8 HEPA滤网 5吸头 Absolute英国版无线吸尘器 通用电压',
                            item_price: '4299.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-4.jpg',
                            item_name: '飞利浦（HP6420）电动脱毛器 女士腿部腋下脱毛仪 可水洗拆卸',
                            item_price: '209.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-5.jpg',
                            item_name: '美德乐电动吸奶器 Medela丝韵翼单边 吸奶器 电动吸乳器',
                            item_price: '999.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-6.jpg',
                            item_name: '飞利浦（Philips） 鼻毛修剪器 修眉器 去刮耳眉鼻毛剪 可水洗 NT3355/60',
                            item_price: '179.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-7.jpg',
                            item_name: 'Bad Air Sponge空气净化剂 白宫选用甲醛清除剂 空气清新剂',
                            item_price: '89.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-8.jpg',
                            item_name: 'JBL Charge3 无线蓝牙音箱 低音炮 移动充电 便携迷你音响 音乐冲击波3代(灰色)',
                            item_price: '999.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-9.jpg',
                            item_name: '戴森(Dyson)无叶风扇 冷暖净化三用落地塔扇取暖器电暖气电风扇 HP02',
                            item_price: '4999.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_3-10.jpg',
                            item_name: 'Beats Pro 录音师专业版 头戴包耳式耳机 红色 Red',
                            item_price: '1599.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/9F/9F_4-1.jpg',
                            item_name: 'L‘occitane欧舒丹 甜扁桃紧致沐浴油 滋润沐浴液250ml',
                            item_price: '149.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-2.jpg',
                            item_name: 'L‘OCCITANE欧舒丹 玫瑰香氛沐浴啫喱 沐浴露 250ml',
                            item_price: '119.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-3.jpg',
                            item_name: 'CPB肌肤之钥 深层清洁 卸妆乳 125克',
                            item_price: '445.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-4.jpg',
                            item_name: 'Royal Nectar皇家花蜜蜂毒面膜50ml',
                            item_price: '215.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-5.jpg',
                            item_name: 'JAYJUN 樱花新生焕白水光面膜 10片/盒',
                            item_price: '128.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-6.jpg',
                            item_name: 'RMK 丝薄粉底液#101 30毫升',
                            item_price: '352.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-7.jpg',
                            item_name: 'the SAEM/得鲜黑珍珠氧气泡泡面膜',
                            item_price: '155.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-8.jpg',
                            item_name: 'MISSHA/谜尚 Line friends限量布朗熊气垫BB（替换装） 23号15g+15g',
                            item_price: '149.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-9.jpg',
                            item_name: 'ABOUT ME 天然面膜 2.5ml+12ml(玫瑰)',
                            item_price: '9.90'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_4-10.jpg',
                            item_name: '法国Fresh馥蕾诗 澄糖修护防晒唇膏梅子色PLUM# 4.3g',
                            item_price: '188.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/9F/9F_5-1.jpg',
                            item_name: 'Nature‘s Own EQ情绪控制抗焦虑片 50粒保健品(1瓶)',
                            item_price: '183.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-2.jpg',
                            item_name: '双心Doppelherz山楂糖衣片90粒海外购自营保健品',
                            item_price: '89.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-3.jpg',
                            item_name: '香港直邮wonder foods钙镁锌维C粉200g 美白淡斑抗氧化提高免疫海外购自营保健品',
                            item_price: '108.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-4.jpg',
                            item_name: 'Devondale德运高钙成人奶粉1KG海外购自营保健品(全脂)',
                            item_price: '58.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-5.jpg',
                            item_name: 'Nature‘s Way佳思敏 天然速溶蛋白质粉 香草味375g保健品(1瓶)',
                            item_price: '168.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-6.jpg',
                            item_name: 'GNC健安喜维生素B复合片50mg*100粒 海外购自营保健品',
                            item_price: '119.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-7.jpg',
                            item_name: 'Floradix铁元500ml(红元)海外购自营保健品',
                            item_price: '135.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-8.jpg',
                            item_name: 'Healthy Care Propolis蜂胶软胶囊2000mg*200粒海外购自营保健品',
                            item_price: '149.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-9.jpg',
                            item_name: 'Elevit爱乐维 男性备孕维生素 30粒保健品(1瓶)',
                            item_price: '256.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_5-10.jpg',
                            item_name: '双心 泡腾片 15片/盒 海外购自营保健品(钙+维生素D3)',
                            item_price: '50.00'
                        }
                    ]
                },
                {
                    list_item: [
                        {
                            item_img: 'img/img_lyy/9F/9F_6-1.jpg',
                            item_name: '日本直邮 个人护理套装：狮王祛痘膏*1+资生堂润唇膏*1+参天眼药水*1+佐藤鼻炎喷剂*1+娣欧娜消臭石*1',
                            item_price: '339.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-2.jpg',
                            item_name: '日本直邮 母婴组合:柳濑储乳袋母乳储存袋*1+贝印婴儿指甲刀*1+贝亲奶瓶*1+FUMAKIRA驱蚊手表*1',
                            item_price: '449.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-3.jpg',
                            item_name: '日本直邮 无暇美肌组合:乐敦CC淡斑精华*1+HABA美容液*1+花王湿巾(赠品)*1+佑天兰黄金果冻面膜*1(金色 抗皱美容保湿)',
                            item_price: '388.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-4.jpg',
                            item_name: '日本直邮 宝宝呵护套装：狮王儿童防蛀牙氟素牙膏葡萄味60g*1+携带电子驱蚊手表*1+pigeon贝亲护牙齿糖60粒*2(桃子+酸奶)',
                            item_price: '198.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-5.jpg',
                            item_name: '日本直邮 参天眼药水超值分享装：Beauteye粉眼药水*2+金盒眼药水*2+银盒眼药水*2',
                            item_price: '390.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-6.jpg',
                            item_name: '日本直邮 Nichiban Roihi-Tsuboko温感镇痛穴位贴156片',
                            item_price: '109.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-7.jpg',
                            item_name: '日本直邮 MINON2017春季新品敏感肌啫喱保湿免洗面膜60g',
                            item_price: '179.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-8.jpg',
                            item_name: '日本直邮 COVERMARK保湿滋润精华修护粉底液20g(W号)',
                            item_price: '360.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-9.jpg',
                            item_name: '日本直邮 CANMAKE井田水嫩保湿果冻啫喱唇膏 不脱色高显色口红(04樱桃色)',
                            item_price: '79.00'
                        },
                        {
                            item_img: 'img/img_lyy/9F/9F_6-10.jpg',
                            item_name: '日本直邮 Unicharm尤妮佳 Silcot极细纤维卸妆化妝棉32枚',
                            item_price: '25.00'
                        }
                    ]
                }
            ]
        }
    ]
}
var floor_tmp = $('#floor_tmp').render(floor);
$('.floor').append(floor_tmp);


var under_box = {
    left: [
        {
            under_left_img: 'img/u-jr-1.jpg',
            under_left_title1: '理财',
            under_left_title2: '金融频道',
            under_left_channel: [
                '美盈宝',
                '定期',
                '投金宝',
                '转让理财',
                '基金'
            ],
            under_left_word: [
                '转让理财享壕礼',
                '邀请好友赚收益',
                '美盈宝新手福利',
                '虎妞赠好礼',
                '基金新手礼'
            ],
            under_left_2_item: [
                {
                    under_left2_img: 'img/u-jr-2.jpg',
                    title: '转让享好礼',
                    info: '满额送500元现金'
                },
                {
                    under_left2_img: 'img/u-jr-3.jpg',
                    title: '美盈宝',
                    info: '新手送壕礼'
                }
            ]
        }
    ],
    right: [
        {
            img_path: 'img/u-jr-4.jpg',
            title: '旅行',
            info: '518国美旅行惠享全场',
            channel_item: [
                '机票',
                '火车票',
                '度假',
                '教育',
                '演出票'
            ],
            word_item: [
                '机票立减',
                '住酒店返100元',
                '日本签证',
                '自驾游 出行返100',
                '《舞马》部分价位买一赠一'
            ],
            right_item: [
                {
                    img_path: 'img/u-jr-5.jpg',
                    info: '人机合体 未来已到来'
                },
                {
                    img_path: 'img/u-jr-6.jpg',
                    info: '充话费，充流量，天天低价'
                },
                {
                    img_path: 'img/u-jr-7.jpg',
                    info: '少儿英式马术体验课 19.9元'
                },
                {
                    img_path: 'img/u-jr-8.jpg',
                    info: '游戏充值，Q币、点券9折起'
                }
            ]
        }
    ]
}
var under_tmp = $('#under_tmp').render(under_box);
$('.wbox').append(under_tmp);


var hot_left = {
    title: '热销榜',
    eg_title: 'HOT',
    hot1_img: 'img/hot1.jpg',
    hot1_title: '海尔(Haier) LS55H310G 55寸 彩电 高清4K',
    hot1_price: '￥2999.00',
    hot_left_item: [
        {
            img_path: 'img/hot2.jpg',
            title: '海尔(Haier) BCD-452WDPF 452升 对开门 冰箱 风冷纤薄 白',
            price: '￥2999.00'
        },
        {
            img_path: 'img/hot3.jpg',
            title: 'Apple MacBook Air 13.3英寸笔记本电脑（i5/8G/128G/太空银）MMGF2CH/A',
            price: '￥5988.00'
        },
        {
            img_path: 'img/hot4.jpg',
            title: '伊莱克斯(Electrolux) 大1P 定频 冷暖 壁挂式空调 EAW26FD43BC4',
            price: '￥1699.00'
        },
        {
            img_path: 'img/hot5.jpg',
            title: '美的（Midea）机械式落地扇 FS40-11L1 (三档风速可调，美的SQD降噪电机 ，广角送风，避暑利器)',
            price: '￥159.00'
        }
    ]
}
var hot_left_tmp = $('#hot_left_tmp').render(hot_left);
$('.ui-hot-left').append(hot_left_tmp);


var hot_right = {
    title: '晒单',
    eg_title: 'SHARE',
    hot_list: [
        {
            hot_item: [
                {
                    img_path: 'img/shai_1.jpg',
                    user_img: 'img/user1.jpg',
                    level: 'LV.1',
                    name: '73009673429',
                    evaluate: '"质量、做工、非常好，请大家放心购买。"'
                },
                {
                    img_path: 'img/shai_2.jpg',
                    user_img: 'img/user2.jpg',
                    level: 'LV.1',
                    name: 'zhu11',
                    evaluate: '"原生安卓5.1.1 ，系统非常流程，双立体声喇叭加..."'
                }
            ]
        },
        {
            hot_item: [
                {
                    img_path: 'img/shai_3.jpg',
                    user_img: 'img/user1.jpg',
                    level: 'LV.1',
                    name: '60502982918',
                    evaluate: '"很不错的净化器，办公室用一次买了两台，效果很明显，..."'
                },
                {
                    img_path: 'img/shai_4.jpg',
                    user_img: 'img/user1.jpg',
                    level: 'LV.1',
                    name: 'fx燕子24',
                    evaluate: '"机器很好，卖家服务很好，机器也很漂亮 非常喜欢，推..."'
                }
            ]
        },
        {
            hot_item: [
                {
                    img_path: 'img/shai_5.jpg',
                    user_img: 'img/user1.jpg',
                    level: 'LV.1',
                    name: '建成',
                    evaluate: '"双11团购的比一般电器城买的便宜六七百，第二就通知..."'
                },
                {
                    img_path: 'img/shai_6.jpg',
                    user_img: 'img/user1.jpg',
                    level: 'LV.1',
                    name: '72667677023',
                    evaluate: '"电视画面清晰精美，音响效果立体感很强，外观非常喜欢..."'
                }
            ]
        }
    ]
}
var hot_right_tmp = $('#hot_right_tmp').render(hot_right);
$('.ui-hot-right').append(hot_right_tmp);


var help_box = {
    box_item: [
        {
            item_title: '物流配送',
            item_info: [
                '配送查询',
                '配送服务',
                '配送费用',
                '配送时效',
                '签收与验货'
            ]
        },
        {
            item_title: '支付与账户',
            item_info: [
                '货到付款',
                '在线支付',
                '分析付款',
                '门店支付',
                '账户安全'
            ]
        },
        {
            item_title: '售后服务',
            item_info: [
                '退换货服务',
                '退款说明',
                '专业维修',
                '延保服务',
                '家电回收'
            ]
        },
        {
            item_title: '会员专区',
            item_info: [
                '会员专区',
                '优惠券说明',
                '美豆说明',
                '国美社区',
                '商品评价'
            ]
        },
        {
            item_title: '购物帮助',
            item_info: [
                '购物保障',
                '购物流程',
                '促销优惠',
                '焦点问题',
                '联系我们'
            ]
        }
    ]
}
var help_box_tmp = $('#help_box_tmp').render(help_box);
$('.gome-help-box').append(help_box_tmp);




















