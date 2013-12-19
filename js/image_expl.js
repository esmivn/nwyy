function insertText(a, b) {
	$("#videoTitle").html(a)
	$("#videoDetail").html(b)
}
function vkevin() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/kevin.jpg",
			file: s_kevin[0],
			title: "【明慧十方】从西方到东方"
		}]
	})
}
function vpingfan() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/pingfan.jpg",
			file: s_pingfan[0],
			title: "【明慧十方】平凡不平凡"
		}]
	})
}
function v305() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/305.jpg",
			file: s_305[0],
			title: "【世事关心】永恒的电波"
		}]
	})
}
function v2009() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/2009.jpg",
			file: s_2009[0],
			title: "【世事关心】二零零九世界法轮大法日"
		}]
	})
}
function vfuture() {
	rate = 0.65
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		repeat: "true",
		playlist: [{
			image: "./jwplayer/future.jpg",
			file: s_future[0],
			title: "【世事关心】未来人的神话故事（上集）"
		}, {
			image: "./jwplayer/future.jpg",
			file: s_future[1],
			title: "【世事关心】未来人的神话故事（下集）"
		}]
	})
}
function vzifen() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/zifen.jpg",
			file: s_zifen[0],
			title: "风雨天地行之 - 『荡浊』"
		}]
	})
}
function vtongxin() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/tongxin.jpg",
			file: s_tongxin[0],
			title: "风雨天地行之 - 『同心』"
		}]
	})
}
function vlijie() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/lijie.jpg",
			file: s_lijie[0],
			title: "风雨天地行之 - 『历劫』"
		}]
	})
}
function vfengyu() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/fengyu.jpg",
			file: s_fengyu[0],
			title: "风雨天地行之 - 『风雨』"
		}]
	})
}
function vpw720() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		repeat: "true",
		playlist: [{
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[0],
			title: "《破雾走过7.20》第一集：大法传 修者受益多"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[1],
			title: "《破雾走过7.20》第二集：恐怖降 坦荡走正途"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[2],
			title: "《破雾走过7.20》第三集：洗脑毒 坑害中土众"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[3],
			title: "《破雾走过7.20》第四集：陷牢狱 善心感恶徒"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[4],
			title: "《破雾走过7.20》第五集：破伪火 讲真相救人"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[5],
			title: "《破雾走过7.20》第六集：张正义 国际伸援手"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[6],
			title: "《破雾走过7.20》第七集：苦奴工 散业全世界"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[7],
			title: "《破雾走过7.20》第八集：传九评 三退有未来（上）"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[8],
			title: "《破雾走过7.20》第八集：传九评 三退有未来（下）"
		}, {
			image: "./jwplayer/pw720.jpg",
			file: s_pw720[9],
			title: "《破雾走过7.20》第九集：诉心声 盼众生得救"
		}]
	})
}
function vlotus() {
	rate = 0.56
	list_height = 160
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		listbar: {
			position: "bottom",
			size: list_height
		},
		playlist: [{
			image: "./jwplayer/littlelotus.jpg",
			file: s_lotus[0],
			title: "音乐动画：《小莲》"
		}, {
			image: "./jwplayer/fanshu.jpg",
			file: s_lotus[1],
			title: "动画短片：《番薯大侠》"
		}]
	})
}
function vyehao() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/yehao.jpg",
			file: s_yehao[0],
			title: "【明慧十方】走出政治，走入修炼"
		}]
	})
}
function vgzs() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		repeat: "true",
		playlist: [{
			image: "./jwplayer/gzs.jpg",
			file: s_gzs[0],
			title: "【事事关心】中国的良心 - 高智晟（1）"
		}, {
			image: "./jwplayer/gzs.jpg",
			file: s_gzs[0],
			title: "【事事关心】中国的良心 - 高智晟（2）"
		}]
	})
}
function vzhenhan() {
	rate = 0.74
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/zhenhan.jpg",
			file: s_zhenhan[0],
			title: "电影 -《震撼》"
		}]
	})
}
function vcyss() {
	rate = 0.65
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		repeat: "true",
		playlist: [{
			file: s_cyss[0],
			image: "./jwplayer/cyss.jpg",
			title: "第1集－幸运熬过三年饥荒",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[1],
			image: "./jwplayer/cyss.jpg",
			title: "第2集－文革抄家，父亲身陷牢狱",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[2],
			image: "./jwplayer/cyss.jpg",
			title: "第3集－奋斗致富，却又落入经济陷阱",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[3],
			image: "./jwplayer/cyss.jpg",
			title: "第4集－遇奇书，人生柳暗花明",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[4],
			image: "./jwplayer/cyss.jpg",
			title: "第5集－名利战场上的宽容与退让",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[5],
			image: "./jwplayer/cyss.jpg",
			title: "第6集－山雨欲来风满楼",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[6],
			image: "./jwplayer/cyss.jpg",
			title: "第7集－舍命上访",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[7],
			image: "./jwplayer/cyss.jpg",
			title: "第8集－巨难之下意志弥坚",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[8],
			image: "./jwplayer/cyss.jpg",
			title: "第9集－走上天安门",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[9],
			image: "./jwplayer/cyss.jpg",
			title: "第10集－生平第一次入狱",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[10],
			image: "./jwplayer/cyss.jpg",
			title: "第11集－二陷魔窟",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[11],
			image: "./jwplayer/cyss.jpg",
			title: "第12集－监牢里的身心摧残",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[12],
			image: "./jwplayer/cyss.jpg",
			title: "第13集－老母受虐，女儿鸣冤",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[13],
			image: "./jwplayer/cyss.jpg",
			title: "第14集－十万传单一个使命",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[14],
			image: "./jwplayer/cyss.jpg",
			title: "第15集－严密追捕下再上北京",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[15],
			image: "./jwplayer/cyss.jpg",
			title: "第16集－“自焚”伪案弥天大谎",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[16],
			image: "./jwplayer/cyss.jpg",
			title: "第17集－曝光学术骗子何祚庥",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[17],
			image: "./jwplayer/cyss.jpg",
			title: "第18集－“万家惨案”震惊中外",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[18],
			image: "./jwplayer/cyss.jpg",
			title: "第19集－百折不挠 无从定罪",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[19],
			image: "./jwplayer/cyss.jpg",
			title: "第20集－强行灌食 生命危殆",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[20],
			image: "./jwplayer/cyss.jpg",
			title: "第21集－含冤入狱 如入鬼门",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[21],
			image: "./jwplayer/cyss.jpg",
			title: "第22集－法度有缘",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[22],
			image: "./jwplayer/cyss.jpg",
			title: "第23集－伪火真象惊醒聋哑",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[23],
			image: "./jwplayer/cyss.jpg",
			title: "第24集－出了鬼门 却进魔窟",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[24],
			image: "./jwplayer/cyss.jpg",
			title: "第25集－万家医院 野蛮医疗",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[25],
			image: "./jwplayer/cyss.jpg",
			title: "第26集－人间地狱",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[26],
			image: "./jwplayer/cyss.jpg",
			title: "第27集－上级教唆 迫害有恃无恐",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[27],
			image: "./jwplayer/cyss.jpg",
			title: "第28集－金银纸鹤 祝福轻扬",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[28],
			image: "./jwplayer/cyss.jpg",
			title: "第29集－一封家书感化人心",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[29],
			image: "./jwplayer/cyss.jpg",
			title: "第30集－一百天绝食绝水（一）",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[30],
			image: "./jwplayer/cyss.jpg",
			title: "第31集－一百天绝食绝水（二）",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[31],
			image: "./jwplayer/cyss.jpg",
			title: "第32集－重回银行讲真象",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[32],
			image: "./jwplayer/cyss.jpg",
			title: "第33集－再遭追捕 远走异乡",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[33],
			image: "./jwplayer/cyss.jpg",
			title: "第34集－寻找同胞 传播真相",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[34],
			image: "./jwplayer/cyss.jpg",
			title: "第35集－领馆诬陷 阿国入狱",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[35],
			image: "./jwplayer/cyss.jpg",
			title: "第36集－国际营救 四海同心",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[36],
			image: "./jwplayer/cyss.jpg",
			title: "第37集－摆脱黑手 联合国作证",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[37],
			image: "./jwplayer/cyss.jpg",
			title: "第38集－不能沉默",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}, {
			file: s_cyss[38],
			image: "./jwplayer/cyss.jpg",
			title: "第39集－幸免器官盗取 海外作证",
			description: "中国大陆女企业家王玉芝的人生传奇"
		}]
	})
}
function vsszj() {
	rate = 0.74
	list_height = 240
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		listbar: {
			position: "bottom",
			size: list_height
		},
		repeat: "true",
		playlist: [{
			file: s_sszj[0],
			image: "./jwplayer/sszj.jpg",
			title: "中国活摘器官黑幕-生死之间",
			description: "第四十七届芝加哥国际电视奖调查类新闻获奖记录片"
		}, {
			file: s_sszj[1],
			image: "./jwplayer/sszj.jpg",
			title: "２０１２全球关注活摘器官",
			description: "２０１２全球关注活摘器官"
		}, {
			file: s_sszj[2],
			image: "./jwplayer/sszj.jpg",
			title: "锦州市第二看守所",
			description: "追查国际调查员在2006年5月22日对王立军辖下的有关部门所作的调查录音"
		}, {
			file: s_sszj[3],
			image: "./jwplayer/sszj.jpg",
			title: "锦州市中级人民法院刑二厅",
			description: "追查国际调查员在2006年5月22日对王立军辖下的有关部门所作的调查录音"
		}, {
			file: s_sszj[4],
			image: "./jwplayer/sszj.jpg",
			title: "锦州市中级人民法院刑一厅",
			description: "追查国际调查员在2006年5月22日对王立军辖下的有关部门所作的调查录音"
		}, {
			file: s_sszj[5],
			image: "./jwplayer/sszj.jpg",
			title: "解放军三零七医院肾源中介",
			description: "在调查过程中追查国际的调查员以为家人朋友寻找移植肾供体为由接触了中国人民解放军三零七医院肾源中介经纪人。前后交往时间达数周，累计谈话时间达数十分钟。"
		}, {
			file: s_sszj[6],
			image: "./jwplayer/sszj.jpg",
			title: "医院和器官移植中心（一）",
			description: "中国大陆医院和器官移植中心涉嫌提供活体法轮功学员器官的证据"
		}, {
			file: s_sszj[7],
			image: "./jwplayer/sszj.jpg",
			title: "医院和器官移植中心（二）",
			description: "中国大陆医院和器官移植中心涉嫌提供活体法轮功学员器官的证据"
		}, {
			file: s_sszj[8],
			image: "./jwplayer/sszj.jpg",
			title: "205医院泌尿外科主任陈荣山",
			description: "追查国际调查员以王立军专案组的名义，对锦州解放军205医院泌尿外科主任(现退休）： 陈荣山（手机：13841666988 ）进行了电话调查，调查中陈荣山承认移植供体来自在押的法轮功人员，并经过了法院。"
		}, {
			file: s_sszj[9],
			image: "./jwplayer/sszj.jpg",
			title: "205医院泌尿外科主任陈荣山",
			description: "调查员以沈阳军区联勤卫生部王佳副部长（原205医院院长）的秘书的身份与205医院泌尿外科主任（现退休）陈荣山通话，陈荣山向王佳副部长的秘书保证，能保守摘取法轮功练习者器官做器官移植手术的机密。"
		}, {
			file: s_sszj[10],
			image: "./jwplayer/sszj.jpg",
			title: "录音一：魏建荣",
			description: "追查国际调查员以国家安全部官员的身份与魏建荣（中共中央政法委队伍建设指导室主任、原中共中央政法委办公室副主任）的对话。"
		}, {
			file: s_sszj[11],
			image: "./jwplayer/sszj.jpg",
			title: "录音二：李长春",
			description: "追查国际调查员以原中共中央政治局常委、中央政法委书记罗干办公室张主任的身份与李长春（中共中央政治局常委）的对话。"
		}, {
			file: s_sszj[12],
			image: "./jwplayer/sszj.jpg",
			title: "录音三：唐俊杰",
			description: "追查国际调查员以中纪委薄熙来专案组成员的身份与唐俊杰（自2000至 2011先后担任辽宁省政法委秘书长、省政法委副书记、省委政法委副书记、综治办主任）的对话。"
		}, {
			file: s_sszj[13],
			image: "./jwplayer/sszj.jpg",
			title: "录音四：北京政法系统人员",
			description: "追查国际调查员以国家安全部官员的身份与一位来自北京政法系统姓李的参加会议者的对话。"
		}, {
			file: s_sszj[14],
			image: "./jwplayer/sszj.jpg",
			title: "录音五：罗干秘书",
			description: "追查国际调查员以国家安全部第七局官员的身份与于秘书（罗干的秘书）的对话。"
		}, {
			file: s_sszj[15],
			image: "./jwplayer/sszj.jpg",
			title: "录音六：周永康",
			description: "追查国际调查员以四川省委书记李春成的身份与周永康（中共中央政治局常委、中共中央政法委书记）的对话。"
		}, {
			file: s_sszj[16],
			image: "./jwplayer/sszj.jpg",
			title: "解放军307医院肾源中介",
			description: "追查国际调查员调查解放军307医院肾源中介经纪人"
		}, {
			file: s_sszj[17],
			image: "./jwplayer/sszj.jpg",
			title: "泌尿外科主任朱云松",
			description: "调查广州军区总医院泌尿外科主任朱云松的对话录音"
		}, {
			file: s_sszj[18],
			image: "./jwplayer/sszj.jpg",
			title: "广州军区武汉总医院",
			description: "调查广州军区武汉总医院肾移植科某医生的对话录音"
		}, {
			file: s_sszj[19],
			image: "./jwplayer/sszj.jpg",
			title: "目击者证词",
			description: "追查国际报告一例活体摘取法轮功学员器官目击者证词"
		}]
	})
}
function vzhenhan() {
	rate = 0.53
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		playlist: [{
			image: "./jwplayer/zhenhan.jpg",
			file: s_zhenhan[0],
			title: "电影：《震撼》"
		}]
	})
}
function vsy() {
	rate = 0.56
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		repeat: "true",
		playlist: [{
			image: "./jwplayer/sy.jpg",
			file: s_sy[0],
			title: "Shen Yun 2013 Trailer (HD)"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[1],
			title: "To Our Chinese Fans Happy Chinese New Year"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[2],
			title: "2012 - 神韵在美国"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[3],
			title: "2012 - 神韵在大洋洲"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[4],
			title: "2012 - 神韵在亚洲"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[5],
			title: "2012 - 神韵在欧洲"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[6],
			title: "2012 - 神韵在加拿大"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[7],
			title: "中国古典舞"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[8],
			title: "What Audiences are Saying?"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[9],
			title: "What Audiences are Saying about Shen Yun"
		}, {
			image: "./jwplayer/sy.jpg",
			file: s_sy[10],
			title: "Shen Yun at Lincoln Center"
		}]
	})
}
var autostart = "1",
	rate = 0.62,
	right_margin = 30,
	list_height = 0,
	s_kevin = [],
	s_pingfan = [],
	s_305 = [],
	s_zifen = [],
	s_tongxin = [],
	s_lijie = [],
	s_fengyu = [],
	s_1400 = [],
	s_future = [],
	s_lotus = [],
	s_masanjia = [],
	s_meizhan = [],
	s_pw720 = [],
	s_sszj = [],
	s_sy = [],
	s_wmgswl = [],
	s_zhenhan = [],
	s_yehao = [],
	s_mtdwh = [],
	s_shitao = [],
	s_gzs = [],
	s_cyss = [],
	s_2009 = []
s_kevin[0] = "http://aczoor.uni.me/aczoor/hosting/F_MH0000003_A_MHSF-3_CongXiFangDaoDo_P613340.mp4"
s_pingfan[0] = "http://aczoor.uni.me/aczoor/hosting/F_MH0000002_A_MHSF-3-0_PingFanBuPingFan_P613335.mp4"
s_305[0] = "http://aczoor.uni.me/aczoor/hosting/ssgx_305.mp4"
s_tongxin[0] = "http://aczoor.uni.me/aczoor/hosting/fytdx_tongxin.mp4"
s_lijie[0] = "http://aczoor.uni.me/aczoor/hosting/fytdx_lijie_384x288.mp4"
s_fengyu[0] = "http://aczoor.uni.me/aczoor/hosting/fytdx_fengyu_384x288.mp4"
s_1400[0] = "http://askiuu.googlecode.com/svn/trunk/loca/N__NTDSpecial-5089_JieXiLi_P637960.mp4"
s_future[0] = "http://aczoor.uni.me/aczoor/hosting/ssgx_future_A.mp4"
s_future[1] = "http://aczoor.uni.me/aczoor/hosting/ssgx_future_B.mp4"
s_lotus[0] = "http://aczoor.uni.me/aczoor/hosting/littlelotus.mp4"
s_lotus[1] = "http://aczoor.uni.me/aczoor/hosting/fanshu.mp4"
s_masanjia[0] = "http://aczoor.uni.me/aczoor/hosting/TheWomenofMasanjiaLabourCamp_640x360.mp4"
s_meizhan[0] = "http://aczoor.uni.me/aczoor/hosting/meizhan01.mp4"
s_meizhan[1] = "http://aczoor.uni.me/aczoor/hosting/meizhan02.mp4"
s_meizhan[2] = "http://aczoor.uni.me/aczoor/hosting/meizhan03.mp4"
s_meizhan[3] = "http://aczoor.uni.me/aczoor/hosting/meizhan04.mp4"
s_meizhan[4] = "http://aczoor.uni.me/aczoor/hosting/meizhan05.mp4"
s_meizhan[5] = "http://aczoor.uni.me/aczoor/hosting/meizhan06.mp4"
s_meizhan[6] = "http://aczoor.uni.me/aczoor/hosting/meizhan07.mp4"
s_pw720[0] = "http://aczoor.uni.me/aczoor/hosting/pw720_01.mp4"
s_pw720[1] = "http://aczoor.uni.me/aczoor/hosting/pw720_02.mp4"
s_pw720[2] = "http://aczoor.uni.me/aczoor/hosting/pw720_03.mp4"
s_pw720[3] = "http://aczoor.uni.me/aczoor/hosting/pw720_04.mp4"
s_pw720[4] = "http://aczoor.uni.me/aczoor/hosting/pw720_05.mp4"
s_pw720[5] = "http://aczoor.uni.me/aczoor/hosting/pw720_06.mp4"
s_pw720[6] = "http://aczoor.uni.me/aczoor/hosting/pw720_07.flv"
s_pw720[7] = "http://aczoor.uni.me/aczoor/hosting/pw720_08A.mp4"
s_pw720[8] = "http://aczoor.uni.me/aczoor/hosting/pw720_08B.mp4"
s_pw720[9] = "http://aczoor.uni.me/aczoor/hosting/pw720_09.mp4"
s_sszj[0] = "http://aczoor.uni.me/aczoor/hosting/ssgx_organharvest.mp4"
s_sszj[1] = "http://aczoor.uni.me/aczoor/hosting/organ_international_2012.mp4"
s_sszj[2] = "http://aczoor.uni.me/aczoor/hosting/19592_kanshousuo_1.mp3"
s_sszj[3] = "http://aczoor.uni.me/aczoor/hosting/19592_xing_er_ting_2.mp3"
s_sszj[4] = "http://aczoor.uni.me/aczoor/hosting/19592_xing_yi_ting_3.mp3"
s_sszj[5] = "http://aczoor.uni.me/aczoor/hosting/investigation_organharvest.mp3"
s_sszj[6] = "http://aczoor.uni.me/aczoor/hosting/transplant6.mp3"
s_sszj[7] = "http://aczoor.uni.me/aczoor/hosting/transplant7.mp3"
s_sszj[8] = "http://aczoor.uni.me/aczoor/hosting/23674_205_chenrongshan2012may25-1.mp3"
s_sszj[9] = "http://aczoor.uni.me/aczoor/hosting/23674_chenrongshan2012juni13-2.mp3"
s_sszj[10] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin1_weijianrong-final.mp3"
s_sszj[11] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin2_lichangchun-final.mp3"
s_sszj[12] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin3_tangjunjie-final.mp3"
s_sszj[13] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin4_li__final.mp3"
s_sszj[14] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin5_luogan_final2.mp3"
s_sszj[15] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin6_zhouyongkang_final.mp3"
s_sszj[16] = "http://aczoor.uni.me/aczoor/hosting/21820_investigation_307.mp3"
s_sszj[17] = "http://aczoor.uni.me/aczoor/hosting/21595_luyin5_luogan_final.mp3"
s_sszj[18] = "http://aczoor.uni.me/aczoor/hosting/21820_4-gzjqwhzyy-.mp3"
s_sszj[19] = "http://aczoor.uni.me/aczoor/hosting/testmony_final.mp3"
s_sy[0] = "http://aczoor.uni.me/aczoor/hosting/sy/Shen_Yun_2013_Trailer_(HD).mp4"
s_sy[1] = "http://aczoor.uni.me/aczoor/hosting/sy/ToOurChineseFansHappyChineseNewYear.mp4"
s_sy[2] = "http://aczoor.uni.me/aczoor/hosting/sy/2012_USA.mp4"
s_sy[3] = "http://aczoor.uni.me/aczoor/hosting/sy/2012_Oceania.mp4"
s_sy[4] = "http://aczoor.uni.me/aczoor/hosting/sy/2012_Asia.mp4"
s_sy[5] = "http://aczoor.uni.me/aczoor/hosting/sy/2012_Europe.mp4"
s_sy[6] = "http://aczoor.uni.me/aczoor/hosting/sy/2012_Canada.mp4"
s_sy[7] = "http://aczoor.uni.me/aczoor/hosting/sy/traditional_chinese_dance.mp4"
s_sy[8] = "http://aczoor.uni.me/aczoor/hosting/sy/What_Audiences_are_Saying.mp4"
s_sy[9] = "http://aczoor.uni.me/aczoor/hosting/sy/What_Audiences_are_Saying_about_Shen_Yun.mp4"
s_sy[10] = "http://aczoor.uni.me/aczoor/hosting/sy/Shen_Yun_at_Lincoln_Center.mp4"
s_wmgswl[0] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼1ï¼ï¼æ°åéºè·¯.mp4"
s_wmgswl[1] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼2ï¼ï¼å¤§æ³å¼ä¼ .mp4"
s_wmgswl[2] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼3ï¼ï¼ç ´è¿·ä¸æ­£å¿.mp4"
s_wmgswl[3] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼4ï¼ï¼ä»å¸¸äººå°ä¿®ç¼äºº.mp4"
s_wmgswl[4] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼5ï¼ï¼å±±é¨æ¬²æ¥.mp4"
s_wmgswl[5] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼6ï¼ï¼å¨é­é¾ä¸­.mp4"
s_wmgswl[6] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼7ï¼ï¼è°é¾å²æ.mp4"
s_wmgswl[7] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼8ï¼ï¼çç¸ä¸äººå¿.mp4"
s_wmgswl[8] = "http://ozex9n.googlecode.com/files/æä»¬åè¯æªæ¥ï¼9ï¼ï¼ç¥çè¬³æ­.mp4"
s_gzs[0] = "http://aczoor.uni.me/aczoor/hosting/ssgx_gzs_1.mp4"
s_gzs[1] = "http://aczoor.uni.me/aczoor/hosting/ssgx_gzs_2.mp4"
s_gzs[2] = "http://aczoor.uni.me/aczoor/hosting/ssgx_gzs_3.mp4"
s_zifen[0] = "http://aczoor.uni.me/aczoor/hosting/fytdx_dangzhuo_384x288.mp4"
s_zhenhan[0] = "http://eciscs.googlecode.com/svn/trunk/loca/zhenhan_640x340.mp4"
s_yehao[0] = "http://aczoor.uni.me/aczoor/hosting/yehao_480x360.mp4"
s_mtdwh[0] = ""
s_shitao[0] = ""
s_shitao[1] = ""
s_cyss[0] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_01.mp3"
s_cyss[1] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_02.mp3"
s_cyss[2] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_03.mp3"
s_cyss[3] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_04.mp3"
s_cyss[4] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_05.mp3"
s_cyss[5] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_06.mp3"
s_cyss[6] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_07.mp3"
s_cyss[7] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_08.mp3"
s_cyss[8] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_09.mp3"
s_cyss[9] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_10.mp3"
s_cyss[10] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_11.mp3"
s_cyss[11] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_12.mp3"
s_cyss[12] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_13.mp3"
s_cyss[13] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_14.mp3"
s_cyss[14] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_15.mp3"
s_cyss[15] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_16.mp3"
s_cyss[16] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_17.mp3"
s_cyss[17] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_18.mp3"
s_cyss[18] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_19.mp3"
s_cyss[19] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_20.mp3"
s_cyss[20] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_21.mp3"
s_cyss[21] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_22.mp3"
s_cyss[22] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_23.mp3"
s_cyss[23] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_24.mp3"
s_cyss[24] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_25.mp3"
s_cyss[25] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_26.mp3"
s_cyss[26] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_27.mp3"
s_cyss[27] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_28.mp3"
s_cyss[28] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_29.mp3"
s_cyss[29] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_30.mp3"
s_cyss[30] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_31.mp3"
s_cyss[31] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_32.mp3"
s_cyss[32] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_33.mp3"
s_cyss[33] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_34.mp3"
s_cyss[34] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_35.mp3"
s_cyss[35] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_36.mp3"
s_cyss[36] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_37.mp3"
s_cyss[37] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_38.mp3"
s_cyss[38] = "http://aczoor.uni.me/aczoor/hosting/cyss/cyss_39.mp3"
s_2009[0] = "http://aczoor.uni.me/aczoor/hosting/2009_DFD_480x360.mp4"
var zifen_Title = "一个欺世骗局",
	zifen_Detail = "　　正是这场精心设计的“表演”，挑起了多少对无辜同胞的仇恨和恐惧，它的煽动如此之强，以至到今天都无法消除……刘春玲是被烧死？还是被打死？请看慢镜头分析。",
	tongxin_Title = "同　心",
	tongxin_Detail = "　　<b>“法轮大法来自于你们中国那块土地和中华民族博大精深而又美好的文化。如果没有他，我不会是今天这样一个人的。带着最深的敬意，我踏上了你们的国土，为了你们而支持真理。我希望我这一副外族的面孔和纯净的心能够唤起你们心中依然存在的善良。”</b><br><br>　　—— 多尔奈基（Zenon .A. Dolnyckyj），加拿大",
	fengyu_Title = "风　雨",
	fengyu_Detail = "　　法轮功学员4.25上访事件开创了50多年来官方与平民之间通过和平对话解决矛盾的先例，也震动了全世界。国际媒体对此给予了高度评价，认为425是中国政治民主，政府开明的里程碑。不少人由此对中国政府产生了新的希望。人们也开始注意到法轮功这个由最基本群众组成的修炼群体是如此的不同凡响，然而，事情却并没有象人们所期望的那样发生。<br><br>　　4.25事件是否是中共所说的法轮功在“围攻中南海”？这场镇压是否真的是由学员们的上访引起的呢？这个视频将带我们一起回顾这段历史。",
	lijie_Title = "历　劫",
	lijie_Detail = "　　<b>“亲爱的祖国，我们多希望在这片土地上，正气回升，人人善待，带给国家真正的希望。古往今来，多少忠义之士精忠报国，冒死进谏，丹心照千古。今天，为了国家的长远未来，请给真善忍应有的位置。我们不想太多说我们受到的不公对待，如果因此能唤起人们更多的正念和良知，我们无怨无悔。”</b><br><br>　　——一位法轮功学员给政府的公开信",
	pw720_Title = "破雾-走过七二零",
	pw720_Detail = "　　“十年是非常漫长的。那麽这种持续、理性、非暴力的抗争，付出了巨大的代价。同时就是说，受迫害的这整个十年的过程，实际上就是我们这个民族的一个缩影啊：我们这个民族，中华民族，他不会轻易屈服的一个像徵。”",
	yehao_Title = "走出政治，走入修炼",
	yehao_Detail = "　　现年七十二岁的叶浩，一九三七年出生于中国福州，一九五九年毕业于清华大学。一个从青年时代就接受共产党“政治干部”教育的知识份子、一个把“政治生命”、“政治灵魂”看得高于一切的公安部高级官员，为什么敢于涉足被共产党指为“封建迷信”的气功研究呢？在探索了至少八个不同的科学领域、大量攻读了马克思主义和共产党历史、深入研究了中国文化之后，叶浩是如何成为一名法轮大法修炼者的呢？在叶浩先生看来，法轮大法究竟是什么？修炼在西方文化中是否有依据？",
	kevin_Title = "从西方到东方",
	kevin_Detail = "　　Kevin 生于1964年，于北京大学物理系毕业后，来到美国弗吉尼亚大学攻读物理博士，又跟随佛罗里达州迈阿密大学的一位导师学习海洋物理，然后又到加州大学伯克利分校学习了生物物理。在探索了许多不同学科，掌握了大量普通人无法掌握的科学知识后，Kevin 于1999年开始修炼法轮大法。作为一个学习了现代科学的，具有科学思想的人为什么会来学习法轮功呢？听过 Kevin 讲述自己的经历后，朋友们也许会得出自己的答案。",
	pingfan_Title = "平凡不平凡",
	pingfan_Detail = "　　人生在世只有几十年，如果以有限的生命来探索无穷的宇宙，如何才能把人生放到更广大的时空范畴中来进行思考呢？在北美，生活着千千万万曾在物理中追求和探索的人们，其中很多是来自中国大陆的高材生。这个视频，与您分享的是一位中国科技大学物理系的毕业生介绍自己为何修炼法轮功的故事。",
	future_Title = "未来人的神话故事",
	future_Detail = "明月几时有<br>把酒问青天<br>不知天上宫阙<br>今夕是何年<br><br>这个世界上<br>中国人在生命的深处有一种和天上的十分自然的联系<br>这种联系和宗教式的虔诚和敬畏还不完全一样<br>它起于自然<br>并由文化做载体<br>在悠悠岁月中<br>一点一点浸润到国人的生命中去……<br><br>在皓月当空<br>银色的光芒把繁华洗尽的时候<br>那些失意的才子、忙碌的商人<br>疲惫的农夫、得意的官场中人<br>在不经意间举目望去<br>皎洁的月光正从深黑的苍穹温柔的倾泻<br>它款款流入人的心中<br>抚平喜怒哀乐的皱褶<br>并在一瞬间联通一种从古到今绵延不断的宁谧<br><br>随之而来的是那一声古老的轻叹：<br>我是谁？<br>我从哪里来？<br>要到哪里去？<br>这一声叹息历经斗转星移，沧桑岁月<br>终于飘到了同在月下仰望苍穹的你、我、他之间<br>……",
	_2009_Title = "法轮大法洪传世界",
	_2009_Detail = "　　法轮大法自1992年传出，虽被中共残酷镇压，如今却已传遍世界一百多个国家和地区，获得各个国家数千项的褒奖和支持信函，赢得了无数世界各族裔人民的喜爱。听信了中共的谎言的朋友们啊，这样的反差，是不是很值得我们深思呢？",
	sszj_Title = "文明能否容忍这…",
	sszj_Detail = "　　加拿大前亚太司司长、着名国际人权律师大卫•乔高（David Kilgour）和加拿大著名人权律师麦塔斯（David Matas）合作调查报告《血淋淋的器官摘取》，收集了能够证明指控的几十类证据。2006年7月，他们发表第一版调查报告时，已经收集到了足以证明指控的18类证据。<br><br>　　2006年7月，他们发表第一版调查报告时，已经收集到了足以证明指控的18类证据。2007年1月底发表的第二版调查报告中收集到的证据已经达到33类。从2006年7月起，乔高和麦塔斯到了40多个国家，发表公开演讲，公布他们的调查结果，同时不断的收集到新的证据。到目前，他们已经收集到50多类证据，正在考虑发表第三版调查报告。",
	_305_Title = "永恒的电波",
	_305_Detail = "　　“8条鲜活的生命，15个人的青春，成百上千个家庭的幸福，换取了这整整50分钟的真相，而这50分钟的真相，从此再不会从长春人的心中抹去……”",
	gzs_Title = "中国的良心",
	gzs_Detail = "　　高律师在这封致胡温的公开信中，记录了他对法轮功学员亲自调查而获得的第一手材料，其中包括了大量骇人听闻的迫害细节，其残忍程度是足以让每一个具有血肉之躯的人的心灵煎熬。我不知道高律师是怎样艰难地完成了这封信，但我们知道高律师因曝光这些资料被数次抓捕，至今被关在监狱。高律师为讲出真相付出了常人难以想象的代价，希望朋友能从这位良心律师留下的这篇文字中，看到一个和谐媒体上看不到的真实。",
	zhenhan_Title = "这是一个真实的故事。",
	zhenhan_Detail = "　　这部电影没有眩目的视觉特效，没有强大的明星阵容，有的只是那些无名的，永远不可能成为这个社会的焦点的普通百姓。可是，只要走过那段岁月的人们，看过这部影片，都会流下眼泪。为什么？因为那就是曾经发生在我们身边的故事，那段艰难的日日夜夜的真实。",
	sy_Title = "最完美的艺术",
	sy_Detail = "　　<b>“我来这家以我名字命名的剧院看秀有四十五年了，但从来没有见过（神韵）这样的演出。我喜欢神韵的服装、充满活力舞蹈赏心悦目、演员技巧高超；西方古典与中国乐器相结合，神韵音乐很舒缓；美丽如画的天幕背景，我不熟悉这种美好的艺术形式，但是绝对度过了一个非常美妙的夜晚。令我心情愉快，我被迷住了，我想未来能了解更多。我相信神韵是中国传统的表现，我也知道在中国却看不到。我爱中国传统古典舞蹈的风格，我希望在未来看到更多这样的舞蹈。”</b><br><br>　　——世界第六、纽约第一大富豪大卫·寇克（David H. Koch）",
	lotus_Title = "小　莲",
	lotus_Detail = "　　这是一部短篇音乐动画，小莲曾经有一个美满的家庭，因为家人不肯放弃信仰而被迫害，成了孤儿……<br><br>　　十四年了，对于在这场血雨腥风中走过来的修炼者们来说，是怎样一个漫长的过程呢。我的朋友们，我可贵的中国同胞们，镇压固然残酷，世道虽然冷漠，可是这世间仍有一群正义之士还在不懈努力没有放弃！请倾听这群修炼者的声音，良知需要我们一同维护，迫害需要我们一起制止，请您伸出援手！",
	cyss_Title = "纪实文学-穿越生死",
	cyss_Detail = "　　<b>“每一个字其实都是生而复死般的痛苦回忆。将那段炼狱般的经历从记忆的深处一点一点重新翻出来，就像重新掀开愈合的创伤一样。但是良知不允许我沉默。”</b><br><br>　　——《穿越生死》： 王玉芝的人生传奇"
$(function() {
	insertText(zifen_Title, zifen_Detail)
	vzifen()
	$(window).resize(function() {
		jwplayer("videoField").resize(document.body.clientWidth - right_margin, (document.body.clientWidth - right_margin) * rate + list_height)
	})
	$("#btn_zifen").click(function() {
		insertText(zifen_Title, zifen_Detail)
		vzifen()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_tongxin").click(function() {
		insertText(tongxin_Title, tongxin_Detail)
		vtongxin()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_fengyu").click(function() {
		insertText(fengyu_Title, fengyu_Detail)
		vfengyu()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_lijie").click(function() {
		insertText(lijie_Title, lijie_Detail)
		vlijie()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_pw720").click(function() {
		insertText(pw720_Title, pw720_Detail)
		vpw720()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_yehao").click(function() {
		insertText(yehao_Title, yehao_Detail)
		vyehao()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_kevin").click(function() {
		insertText(kevin_Title, kevin_Detail)
		vkevin()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_pingfan").click(function() {
		insertText(pingfan_Title, pingfan_Detail)
		vpingfan()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_future").click(function() {
		insertText(future_Title, future_Detail)
		vfuture()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_2009").click(function() {
		insertText(_2009_Title, _2009_Detail)
		v2009()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_sszj").click(function() {
		insertText(sszj_Title, sszj_Detail)
		vsszj()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_305").click(function() {
		insertText(_305_Title, _305_Detail)
		v305()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_gzs").click(function() {
		insertText(gzs_Title, gzs_Detail)
		vgzs()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_zhenhan").click(function() {
		insertText(zhenhan_Title, zhenhan_Detail)
		vzhenhan()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_sy").click(function() {
		insertText(sy_Title, sy_Detail)
		vsy()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_lotus").click(function() {
		insertText(lotus_Title, lotus_Detail)
		vlotus()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_cyss").click(function() {
		insertText(cyss_Title, cyss_Detail)
		vcyss()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
	$("#btn_stop").click(function(a) {
		jwplayer("videoField").stop()
		a.preventDefault()
	})
	$("#btn_pause").click(function(a) {
		jwplayer("videoField").pause()
		a.preventDefault()
	})
})