const r = String.raw

const replaceAll = [
  // 长文字替换
  // 排序代码：newArr = arr.sort((a, b) => { var diff = a.charCodeAt(1) - b.charCodeAt(1); if (diff == 0) return b.length - a.length; return diff; })
  '本站域名已经更换为.*，老域名(?:已经|即将)停用，请大家重新收藏，并使用新域名访问。',
  // "\\(跪求订阅、打赏、催更票、月票、鲜花的支持!\\)",
  // "\\(?未完待续请搜索飄天文學，小说更好更新更快!",
  // "\\(跪求订阅、打赏、催更票、月票、鲜花的支持!",
  // "狂沙文学网 www.kuangsha.net",
  // "\\(看小说到网\\)",
  "\\(未完待续。\\)",
  "\\(本章完\\)",
  // "16977小游戏每天更新好玩的小游戏，等你来发现！",
  // "（800小说网 www.800Book.net 提供Txt免费下载）最新章节全文阅读-..-",
  // "（800小说网 www.800Book.net 提供Txt免费下载）",
  // "\\[800\\]\\[站页面清爽，广告少，",
  // "\\[看本书最新章节请到求书 .\\]",
  // "（\\s*君子聚义堂）",
  // "readx;",
  // "txt电子书下载/",
  // "txt全集下载",
  // "txt小说下载",
  // "\\|优\\|优\\|小\\|说\\|更\\|新\\|最\\|快\\|www.uuxs.cc\\|",
  // "\\|每两个看言情的人当中，就有一个注册过可°乐°小°说°网的账号。",
  // "思ˊ路ˋ客，更新最快的！",
  // "恋上你看书网 630bookla ，最快更新.*",
  "[，,]举报后维护人员会在两分钟内校正章节内容[，,]请耐心等待[，,]并刷新页面。",
  // "追书必备",
  // "-优－优－小－说－更－新－最－快-www.ＵＵＸＳ.ＣＣ-",
  // "-优－优－小－说－更－新－最－快x",
  // "来可乐网看小说",
  // "纯文字在线阅读本站域名手机同步阅读请访问",
  // "本文由　　首发",
  // "樂文小说",
  // '最快更新无错小说阅读，请访问 请收藏本站阅读最新小说!',
  // "最新章节全文阅读看书神器\\.yankuai\\.",
  // "最新章节全文阅读（..首发）",
  // "最新章节全文阅读【首发】",
  // "最新章节全文阅读",
  // "看本书最新章节请到800小说网（www.800book.net）",
  "（本章未完，请翻页）",
  // "手机用户请浏览m.biqugezw.com阅读，更优质的阅读体验。",
  // "手机用户请浏览阅读，更优质的阅读体验。",
  // "阅读，更优质的阅读体验。",
  // "手机最省流量无广告的站点。",
  // "手机看小说哪家强手机阅",
  // "如果你喜欢本站[〖]?一定要记住[】]?(?:网址|地址)哦",
  // "看清爽的小说就到",
  // "请用搜索引擎(?:搜索关键词)?.*?完美破防盗章节，各种小说任你观看",
  // "完美破防盗章节，请用搜索引擎各种小说任你观看",
  // "破防盗章节，请用搜索引擎各种小说任你观看",
  // "(?:搜索引擎)?各种小说任你观看，破防盗章节",
  "章节错误，点此举报\\(免注册\\)",
  // "热门小说最新章节全文阅读.。 更新好快。",
  // "【阅读本书最新章节，请搜索800】",
  // "亲，百度搜索眼&amp;快，大量小说免费看。",
  // "亲，眼&快，大量小说免费看。",
  // '下载免费阅读器!!',
  // '笔趣阁&nbsp;.，最快更新.*最新章节！',
  // '请大家搜索（书迷楼）看最全！更新最快的小说',
  // '更新快无广告。',
  // '【鳳.{1,2}凰.{1,2}小说网 更新快 无弹窗 请搜索f.h.xiao.shuo.c.o.m】',
  // '【可换源APP看书软件：书掌柜APP或直接访问官方网站shuzh.net】',
  // '[●★▲]手机下载APP看书神器.*',
  // "m.?手机最省流量的站点。",
  // 'm.?手机最省流量.无广告的站点。',
  // '底部字链推广位',
  // 'us最快',
  // 'APPapp',
  // '久看中文网首发',
  // '顶点小说 ２３ＵＳ．com更新最快',
  '7017k',
  '没有弹窗,更新及时 !',
  '如果你还没注册会员就先注册个会员吧，使用书架书签更方便哦。',
  '内容更新后，请重新刷新页面，即可获取最新更新！',
  '如果此章是作者求票之类废话的，请跳过继续看下一章',
  '提示：担心找不到本站？在也可以直接',
  '输入小说名可以少字但不要错字',
  '本网站提供的最新小说，电子书资源均系收集于网络，本网站只提供web页面服务，并不提供小资源存储，也不参与上传等服务。',
  '您可以按"CRTLD"将"傲宇阁"加入收藏夹！方便下次阅读。',
  '我是超级大美女，每天要美美的，做个精致的女人，让我身边的每个人感受到我的美丽！详情搜索微信公众号我是超级大美女或者复制微信号meinv92k扫描下面二维码快速加入！',
  '温馨提示：按回车\\[Enter\\]键返回书目，按←键返回上一页，按→键进入下一页。',
  '手机阅读点这里',
  '手机阅读请访问',
  '&#x25B2;&#x624B;&#x673a;&#x4e0B;&#x8f7d;app&#x770B;&#x4e66;&#x795e;&#x5668;&#xff0c;&#x767e;&#x5ea6;&#x641c;&#x5173;&#x952e;&#x8Bcd;&#xff1a;&#x4e66;&#x638c;&#x67dc;app&#x6216;&#x76f4;&#x63a5;&#x8BBf;&#x95ee;&#x5B98;&#x65B9;&#x7f51;&#x7ad9;;#x25B2;',
  '亲,点击进去,给个好评呗,分数越高更新越快,据说给新打满分的最后都找到了漂亮的老婆哦!',
  '猫扑中文',
  '点击下载本站APP,海量小说，免费畅读！',
  ', 报送后维护人员会在两分钟内校正章节内容,请耐心等待。',
  '举报后请耐心等待,并刷新页面。',
  r`try\{mad1\('gad2'\);\} catch\(ex\)\{\}`,
  '：。：',
  '『加入书签，方便阅读』',

  '这候.*?章汜[。.]?',
  '强牺.*?读牺[。.]?',
  '制大.*?制枭[。.]?',
  
  // 复杂规则的替换
  // '(看小说到|爱玩爱看就来|就爱上|喜欢)?(\\s|<|>|&| |[+@＠=:;｀`%？》《〈︾-])?[乐樂](\\s|&lt;|&gt;|&amp;|&nbsp;|[+@＠=:;｀`%？》《〈︾-])?[文].*?[说說][网]?[|]?(.*(3w|[ｗωＷw]{1,3}|[Ｍm]).*[ｍＭm])?[}。\\s]?(乐文小说)?',
  // '(本文由|小说)?(\\s| )?((3w|[wＷｗ]{1,3}|[Ｍm]).)?\\s?[lしｌL][ｗωＷw][ｘχＸx][ｓＳs][５5][２2][０0].*[ｍＭm][|\\s]?(首发(哦亲)?)?',
  '([『【↑△↓＠︾]+[\u4E00-\u9FA5]){2,6}[】|]',
  /[ＵｕUu]+看书\s*www.[ＵｕUu]+[kｋ][aａ][nｎ][ｓs][hｈ][ＵｕUu].[cｃ][oｏ][mｍ]\s*/g,

  // 包含 \P 的替换
  '\\P{1,2}[顶頂].{1,3}[点小].*?o?[mw，]',
  '\\P.?长.{1,2}风.{1,2}文.{1,2}学.*?[tx]',
  '\\P无.错.*?[cＣ][oＯ][mＭ]',
  // '[;\\(]顶.{0,2}点.小说',
  // '2长2风2文2学，w￠＄',
  // '》长>风》',

  // 包含 .* 的，可能有多余的替换
  '看无防盗章节的小说，请用搜索引擎搜索关键词.*',
  '(?:完美)?破防盗章节，请用搜索引擎搜索关键词.*',
  '搜索引擎搜索关键词，各种任你观看，破防盗章节',
  // '.*搜索引擎搜索关键词.*',
  '破防盗完美章节，请用搜索引擎.*各种小说任你观看',
  // '如您已(?:閱讀|阅读)到此章节.*?敬请记住我们新的网址\\s*。',
  '如您已(?:閱讀|阅读)到此章[节節].*?(?:敬请记住我们新的网址|敬請記住我們新的網址).*',
  // '↗百度搜：.*?直达网址.*?↖',
  // "[:《〈｜~∨∟∑]{1,2}长.{1,2}风.*?et",
  '\\[限时抢购\\].*',
  '支持网站发展.逛淘宝买东西就从这里进.*',
  'ps[：:]想听到更多你们的声音，想收到更多你们的建议，现在就搜索微信公众号“qdread”并加关注，给.*?更多支持！',
  '(?:ps[:：])?看《.*?》背后的独家故事.*?告诉我吧！',
  '（?天上掉馅饼的好活动.*?微信公众号！）?',
  '（微信添加.*qdread微信公众号！）',
  // 'jiemei如您已阅读到此章节，请移步到.*?\\[ads:本站换新网址啦，速记方法：，.\\]',
  // '先给自己定个小目标：比如收藏笔趣阁.*',
  '请记住本书首发域名.*',
  '记住手机版网址.*',
  // '.*关注微信公众号.*',
  '天才一秒记住本站地址：.*?最快更新！无广告！',
  '先定个小目标，比如1秒记住：.*',
  '(?:天才)?一秒记住.*',
  '(?:天才)?1秒记住.*',
  '本章未完.*',
  '笔趣阁.*最快更新.*',
  '最新网址：.*?[ \\xa0\\u3000]',
  '最新网址：.*',
  '^先定个小目标，比如1秒记住： .*',
  '^热门推荐：.*',
  '^更新最快.*',
  '^.*请你先收藏此页吧，方便等下阅读咯……',
  '^.*更新中……努力更新中…….*',
  '^本站已更改域名，最新域名：.*',
  '^.*正在手打中，请稍等片刻[，。].*',
  '^.*全文字更新,牢记网址:.*',
  '^小说分类：.*',
  '^本书来源.*',
  '^本书来自.*',
  '新阅读网址：.*?，感謝支持，希望大家能支持一下手机网站：.*',
  '【本章节首发.*?,请记住网址（.*?）】.*',
  '\\[记住网址.*?\\]',
  '(?:8\\)|a)更多精彩小说，欢迎访问.*',
  '▲手机下载app看书神器，百度搜关键词：.*?或直接访问官方网站.*?▲',
  '手机用户看.*?请浏览.*?，更优质的用户体验。',
  '，最快更新.*?最新章节！',
  '推荐.*?大神.*?新书:.*',

  // '.*笔下文学更新速度最快.*',
  // '.*(?:下载)?爱阅(?:小说)?app.*?。(?:活动推广期间.*。)?',
  '为您提供.*最快更新',
  '喜欢.*?请大家收藏：\\(.*?\\).*?更新速度最快。',
  '《.*?》无错章节将持续在.*?更新.站内无任何广告.还请大家收藏和推荐.*?！.*?$',
  '注：如你看到本章节内容是防盗错误内容、本书断更等问题请登录后→→',
  '手机站全新改版升级地址：.*?，数据和书签与电脑站同步，无广告清新阅读！',
  '亲，本章已完，祝您阅读愉快！\\^0\\^',
  '第.*?章.*?免费阅读[.。]?',
  'Copyright.*?联系我们：.*',
  '^正文$',
  '.杂.志.虫.',
  '^作者：.*?分类：.*',
  '^@@\\?\\s*',
  '\\)(?: 下载免费阅读器)?!!$',
  '^txt下载地址：.*',
  '^.*手机版阅读网址：.*',
  '^手机阅读：.*',
  '/txt/\\d+/',

  // 爱阅小说app广告
  '想要看最新章节内容，请下载爱阅小说app，无广告免费阅读最新章节内容。网站已经不更新最新章节内容，最新章节内容已经在爱阅小说APP更新。',
  '特大好消息,退出转码页面,下载爱阅小说app后，全部小说免广告看，还能优先看最新章节。活动推广期间，用户还可以免费领取礼包100块钱话费。',
  '下载爱阅app阅读完整内容，无广告无弹窗。',
  '看最新内容，请下载爱阅小说app阅读最新章节。',
  '网页版章节内容慢，请下载爱阅小说app阅读最新内容。?',
  '领取红包，请下载爱阅app免费看最新内容。',
  '网站即将关闭，下载爱阅app免费看最新内容。?',
  '请退出转码页面，请下载爱阅小说app 阅读最新章节。',
  '下载app爱阅小说免费看最新内容',
  '爱阅小说app',

  // 咪咪阅读app广告
  // '广个告，【\\咪\\咪\\阅读\\app\\mimiread\\】真心不错，值得装个，毕竟可以缓存看书，离线朗读！'
  // '插播一个app:完美复刻追书神器旧版本可换源的APP——咪咪阅读mimiread。'
  '广个告，【.*?】真心不错，值得装个，(?:毕竟可以缓存看书，离线朗读|竟然安卓苹果手机都支持|毕竟书源多，书籍全，更新快)！',
  '^(?:广个告|插一句)，我最近在用的小说app，【.*?】安卓苹果手机都支持！',
  '插播一个app: ?完美复刻追书神器旧版本可换源的APP.*?。',
  '【?推荐下，咪咪阅读追书真的好用，这里下载.*大家去快可以试试吧。】?',
  '【?话说，目前朗读听书最好用的.*?安装最新版。】?',
  '【讲真，最近一直用咪咪阅读看书追更，换源切换，朗读音色多， 安卓苹果均可。】',
  '插一句，【.*?】真心不错，值得装个，毕竟书源多，书籍全，快！',
  '插一句，我最近在用的(?:追|看)书.*?(?:缓存看书，离线朗读|书源多，书籍全，更新快)！',
  '推荐下，我最近在用的看书app，【.*?】书源多，书籍全，更新快！',
  '推荐下，【.*?】真心不错，值得书友都装个，安卓苹果手机都支持！',
  '求助下，【.*?】可以像偷菜一样的偷书票了，快来偷好友的书票投给我的书吧。',
  '【认识十年的老书友给我推荐的追书pp，咪咪阅读！真特么好用，开车、睡前都靠这个朗读听书打发时间，这里可以下载.*?】',
  '书友们之前用的小书亭\\s*已经挂了，现在基本上都在用.*?。',
  '推荐一个app，媲美旧版追书神器，可换源书籍全的.*?！',
  'mimiread',
  '咪咪阅读app',

  // 悠阅书城app广告
  '【?(?:悠阅书城|悠閱書城).*',
  // '【悠阅书城APP，免费看小说全网无广告，IOS需海外苹果ID下载】',
  // '【悠閱書城一個免費看書的換源APP軟體，安卓手機需下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
  // '【悠阅书城的換源app軟體，安卓手機需google 下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
  // '【悠閱書城一個免費看書的換源APP軟體，安卓手機需Google 下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
  // '【悠阅书城uc书盟的換源app軟體，安卓手機需下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
  // '【悠阅书城小说的換源app軟體，安卓手機需google 下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',

  // 删除组合字符
  // https://en.wikipedia.org/wiki/Combining_character
  // '[\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F]',

  // 起点新广告
  '本.章.未.完.，.登.录.「.起.点.读.书.」.和.书.友.一.起.读.正.版.原.文.！.新.用.户.立.享.7.天.免.费.畅.读.，.快.来.试.试.吧.！.(?:（.新.设.备.新.账.号.可.享.）.)?',
  '本.章.未.完.，.登.錄.「.起.點.讀.書.」.和.書.友.一.起.讀.正.版.原.文.！.新.用.戶.立.享.7.天.免.費.暢.讀.，.快.來.試.試.吧.！.(?:（.新.設.備.新.賬.號.可.享.）.)?',



  // 短文字替换
  // '\\[txt全集下载\\]',
  // '\\[\\s*超多好看小说\\]',
  // '⊙四⊙五⊙中⊙文☆→',
  // '\\[ads:本站换新网址啦，速记方法：.*?\\]',
  // '[》《｜～]无(?:.|&gt;)错(?:.|&gt;)小说',
  // '`无`错`小说`www.``com', '＋无＋错＋小说＋3w＋＋',
  // '\\|优\\|优\\|小\\|说\\|更\\|新\\|最\\|快Ｘ',
  '▲∴', '8，ww←',
  // /www.23＋?[Ｗw][Ｘx].[Ｃc]om/ig,
  // /热门推荐:、+/g,
  // /h2&gt;/g,
  // '[《〈》>\\+｜～［\\]]无\\1错\\1', '》无>错》',

  // '女凤免费小说抢先看', '女凤小说网全文字 无广告',
  // '乐文小说网?', '《乐〈文《小说', '乐文移动网', '頂点小说', '頂點小說',
  // '追小说哪里快去眼快',
  // '\\[书库\\].\\[774\\]\\[buy\\].kuai',
  // 'www.938xs.com',
  // '小說，.biquge5200.',
  
  /'ads_wz_txt;',|百度搜索|无弹窗小说网|更新快无弹窗纯文字|高品质更新|小说章节更新最快|\(百度搜.\)|全文字手打|“”&nbsp;看|无.弹.窗.小.说.网|追书网|〖∷∷无弹窗∷纯文字∷ 〗/g,
  
  // '谷[婸秇鯪鐰愱瞻桮袁狲梋荬瑏鐲惗钲鉦鮪歄鎣刬頲櫦磆]',
  // '^谷[\\u4e00-\\u9fa5]{0,1}|谷[\\u4e00-\\u9fa5]{0,1}$',
  '谷.</span>',

  // 低优先级替换
  '^.*\\(?https?://.*',
  '\\(\\)',
  '\\[\\]',
  '【】',
  '^[。？！.?!`|]',
  '^[…]$'
  
];

export default replaceAll