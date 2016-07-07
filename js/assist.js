/** 字符串是否包含非法字符 */
function illegalChar (str) {
	var reg = /[^0-9a-zA-Z\u4E00-\u9FFF_-]/g;
	if (str.match (reg)){
		return true;
	} else{
		return false;
	}
}

/**
 * 设置默认状态的显示路径
 */
function setStateSrc (obj, src0, src1) {
	var state = $ (obj).data ("state");
	if (state == "1"){
		$ (obj).attr ("src", src1);
	} else{
		$ (obj).attr ("src", src0);
	}
}

/** 获取用户名称 */
function getSafeName (userName, isWrite) {
	return _writeToDoc (_getSafeString (userName, "尤尼星人"), isWrite);
}

/** 获取用户学校 */
function getSafeCollege (userCollege, isWrite) {
	return _writeToDoc (_getSafeString (userCollege, "尤尼科技"), isWrite);
}

/** 获取用户头像 */
function getSafeUserHeader (prefix, path, headerStr, isWrite) {
	return _writeToDoc (_getPathTag (prefix, path, PATH + "/static/images/user/user_4.png", headerStr), isWrite);
}

/** 获取模型图片 */
function getSafeModelPath (prefix, path, modelStr, isWrite) {
	return _writeToDoc (_getPathTag (prefix, path, PATH + "/static/images/model/model_13.png", modelStr), isWrite);
}

/** 获取小组头像 */
function getSafeGroupHeader (prefix, path, groupStr, isWrite) {
	return _writeToDoc (_getPathTag (prefix, path, PATH + "/static/images/user/group_1.jpg", groupStr), isWrite);
}

/** 获取小组头像 */
function getSafeRoomPath (prefix, path, groupStr, isWrite) {
	return _writeToDoc (_getPathTag (prefix, path, PATH + "/static/images/model/model_8.png", groupStr), isWrite);
}

/** 获取数字 */
function getSafeNum (num, isWrite) {
	return _writeToDoc (_getNum (num), isWrite);
}

/**
 * 获取带路径的标签
 * 
 * @param prefix
 *            前缀
 * @param path
 *            模型路径
 * @param dfPath
 *            默认路径
 * @param modelStr
 *            标签模板，路径部分用_PATH替换
 */
function getSafePathTag (prefix, path, dfPath, modelStr, isWrite) {
	return _writeToDoc (_getPathTag (prefix, path, dfPath, modelStr), isWrite);
}

/** 是否直接显示 */
function _writeToDoc (str, isWrite) {
	if (isWrite){
		document.write (str);
		return null;
	} else{
		return str;
	}
}
/**
 * 获取数字
 * 
 * @return 默认为0
 */
function _getNum (num) {
	if (isEmpty (num)){
		num = 0;
	}
	return num;
}

/**
 * 字段为空获取默认字段值
 * 
 * @param resourceStr
 *            初始值
 * @param defaultStr
 *            默认值
 */
function _getSafeString (resourceStr, defaultStr) {
	if (isEmpty (resourceStr)){
		resourceStr = defaultStr;
	}
	if (isPhone (resourceStr)){
		resourceStr = resourceStr.substr (0, 3) + "****" + resourceStr.substr (resourceStr.length - 4);
	}
	return resourceStr;
}

/**
 * 获取带路径的标签
 * 
 * @param prefix
 *            前缀
 * @param path
 *            模型路径
 * @param dfPath
 *            默认路径
 * @param modelStr
 *            标签模板，路径部分用_PATH替换
 */
function _getPathTag (prefix, path, dfPath, modelStr) {
	var rsPath = dfPath;
	if (!isEmpty (path)){
		rsPath = prefix + path;
	}
	return modelStr.replace (/_PATH/g, rsPath);
}

/**
 * 字段为空获取默认字段值
 * 
 * @param resourceStr
 *            初始值
 * @param defaultStr
 *            默认值
 */
function getSafeString (resourceStr, defaultStr) {
	if (isEmpty (resourceStr)){
		resourceStr = defaultStr;
	}
	if (isPhone (resourceStr)){
		resourceStr = resourceStr.substr (0, 3) + "****" + resourceStr.substr (resourceStr.length - 4);
	}
	document.write (resourceStr);
}

/**
 * 获取数字
 * 
 * @param num
 *            数字
 * @param digits
 *            小数位数
 */
function getRoundNum (num, digits) {
	num = eval (num);
	if (isEmpty (num)){
		num = 0;
	}
	digits = parseInt (digits);
	if (digits < 0){
		digits = 0;
	}
	document.write (num.toFixed (digits));
}

/**
 * 获取数字
 * 
 * @param num
 *            数字
 */
function getNum (num) {
	if (isEmpty (num)){
		num = 0;
	}
	document.write (num);
}

/**
 * 获取带路径的标签
 * 
 * @param prefix
 *            前缀
 * @param path
 *            模型路径
 * @param dfPath
 *            默认路径
 * @param modelStr
 *            标签模板，路径部分用_PATH替换
 */
function getPathTag (prefix, path, dfPath, modelStr) {
	var rsPath = dfPath;
	if (!isEmpty (path)){
		rsPath = prefix + path;
	}
	document.write (modelStr.replace (/_PATH/g, rsPath));
}

/**
 * 获取模型名称 *
 * 
 * @param path
 *            模型路径
 */
function getModelName (path) {
	var fileName = "";
	if (!isEmpty (path)){
		fileName = path.substr (path.lastIndexOf ("/") + 1);
	}
	document.write (fileName);
}

/**
 * 获取用户等级
 * 
 * @param userlevel
 *            用户等级
 */
function getLevel (userlevel) {
	userlevel = eval (userlevel);
	if (isEmpty (userlevel)){
		userlevel = 1;
	}
	document.write (userlevel);
}
/**
 * 获取用户等级名称
 * 
 * @param userlevel
 *            用户等级
 */
function getLevelName (userlevel) {
	var levelName = "";
	userlevel = eval (userlevel);
	if (isEmpty (userlevel)){
		userlevel = 1;
	}
	switch (userlevel) {
		case 0:
		case 1:
		default:
			levelName = "渐入佳境";
			break;
	}
	document.write (levelName);
}

/**
 * 获取url参数
 * 
 * @param key
 *            键
 * @returns 值
 */
function getUrlParam (key) {
	var reg = new RegExp ("(^|&)" + key + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr (1).match (reg);
	if (r != null)
		return unescape (r[2]);
	return null;
}

// 弹出登录框
function openLogin (rootPath) {
	layer.open ({
	    type : 2,
	    title : '登录',
	    maxmin : false,
	    shadeClose : true, // 点击遮罩关闭层
	    area : [
	            '1000px', '530px'
	    ],
	    content : [
	            rootPath + '/user/login.html#loginh2', 'no'
	    ],
	    end : function () {
		    
	    }
	});
}

// 获取cookie变量
function getCookie (name) {
	var arr, reg = new RegExp ("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match (reg))
		return unescape (arr[2]);
	else
		return null;
}

// 判空
function isEmpty (obj) {
	if (obj == null || obj == "null" || obj == "" || obj == '"null"'){ return true; }
	return false;
}

// 手机号
function isPhone (str) {
	var arr, reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if (arr = str.match (reg))
		return true;
	else
		return false;
}

/**
 * 显示评分级别
 * 
 * @param count
 *            评分级别
 * @param solidStar
 *            实心星星
 * @param emptyStar
 *            空心星星
 * 
 */
function showStars (count, solidStar, emptyStar) {
	var n = Number (count);
	var html = '';
	for (var i = 0; i < 5; i++){
		if (i < n){
			html += solidStar;
		} else{
			html += emptyStar;
		}
	}
	document.write (html);
}

function showInstruction (ins) {
	if (!isEmpty (ins)){
		document.write (ins.replace ("<p>", "").replace ("</p>", ""));
	}
}

/**
 * 描述：获取文本第一张图片
 * 
 * @param str
 *            原始文本
 * @returns rs 纯文本
 */
function getImgTag (txt) {
	// 匹配img标签
	var imgReg = /<img.*?(?:>|\/>)/gi;
	// 匹配src属性
	var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
	var arr = txt.match (imgReg);
	
	if (arr != null){ return arr[0].match (srcReg); }
	
	return null;
}

/**
 * 描述：去掉所有的html标记
 * 
 * @param str
 *            原始文本
 * @returns rs 纯文本
 */
function delHtmlTag (str) {
	// str = str.replace (/&nbsp;/ig, "");// 去掉空格
	var rs = str.replace (/<[^>]+>/g, "");// 去掉所有的html标记
	return rs;
}

// 设置失效时间
function setTime (time) {
	setCookie ("codeTime", time);
	if (time == 0){
		delCookie ("codeTime");
	}
}

function getTime () {
	return getCookie ("codeTime");
}

// JS操作cookies方法!
// 设置cookies
function setCookie (name, value) { 
	var exp = new Date ();
	exp.setTime (exp.getTime () + 120 * 1000);
	document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString ();
	console.log (document.cookie);
}
// 读取cookies
function getCookie (name) {
	var arr, reg = new RegExp ("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match (reg))
		return unescape (arr[2]);
	else
		return null;
}
// 删除cookies
function delCookie (name) {
	var exp = new Date ();
	exp.setTime (exp.getTime () - 1);
	var cval = getCookie (name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString ();
}
/**
 * 用户头像转换
 * 
 * @param path
 */
getUserHeader = function (path) {
	var p = '';
	if (!isEmpty (path)){
		p = '<img src="' + ALIYUN + path + '">';
	} else{
		p = '<img src="' + PATH + '/static/images/model/model_8.png">';
	}
	document.write (p);
}
/**
 * 用户昵称转换
 * 
 * @param name
 */
getNickName = function (name) {
	var n = '';
	if (isEmpty (name)){
		n = '尤尼星人';
	} else{
		n = name;
	}
	document.write (n);
}
/**
 * null转换空
 * 
 * @param s
 */
nullToEmpty = function (s) {
	if (isEmpty (s)){
		document.write ("");
	} else{
		document.write (s);
	}
}
/**
 * 登录验证
 */
checkLogin = function () {
	if (isEmpty (USERID)){
		window.location.href = PATH + "/user/login.html";
		return false;
	} else{
		return true;
	}
}

/**
 * String 替换
 * 
 * @param s1
 * @param s2
 * @returns {string}
 */
String.prototype.replaceAll = function (s1, s2) {
	return this.replace (new RegExp (s1, "gm"), s2);
}

/**
 * 
 * 描述：js实现的map方法
 * 
 * @returns {Map}
 */
function Map () {
	this.container = new Object ();
}

Map.prototype.put = function (key, value) {
	this.container[key] = value;
}

Map.prototype.get = function (key) {
	return this.container[key];
}

Map.prototype.keySet = function () {
	var keyset = new Array ();
	var count = 0;
	for ( var key in this.container){
		// 跳过object的extend函数
		if (key == 'extend'){
			continue;
		}
		keyset[count] = key;
		count++;
	}
	return keyset;
}

Map.prototype.size = function () {
	var count = 0;
	for ( var key in this.container){
		// 跳过object的extend函数
		if (key == 'extend'){
			continue;
		}
		count++;
	}
	return count;
}

Map.prototype.remove = function (key) {
	delete this.container[key];
}

// 日期选择
$
        .extend ({
	        ms_DatePicker : function (options) {
		        var defaults = {
		            YearSelector : "#sel_year",
		            MonthSelector : "#sel_month",
		            DaySelector : "#sel_day",
		            FirstText : "--请选择--",
		            FirstValue : 0
		        };
		        var opts = $.extend ({}, defaults, options);
		        var $YearSelector = $ (opts.YearSelector);
		        var $MonthSelector = $ (opts.MonthSelector);
		        var $DaySelector = $ (opts.DaySelector);
		        var FirstText = opts.FirstText;
		        var FirstValue = opts.FirstValue;
		        
		        // 初始化
		        var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
		        $YearSelector.html (str);
		        $MonthSelector.html (str);
		        $DaySelector.html (str);
		        
		        // 年份列表
		        var yearNow = new Date ().getFullYear ();
		        for (var i = yearNow; i >= 1894; i--){
			        var yearStr = "<option value=\"" + getFormatNum (i, 4, 10) + "\">" + getFormatNum (i, 4, 10)
			                + "</option>";
			        $YearSelector.append (yearStr);
		        }
		        
		        // 月份列表
		        for (var i = 1; i <= 12; i++){
			        var monthStr = "<option value=\"" + getFormatNum (i, 2, 10) + "\">" + getFormatNum (i, 2, 10)
			                + "</option>";
			        $MonthSelector.append (monthStr);
		        }
		        
		        // 初始化日
		        for (var i = 1; i <= 31; i++){
			        var dayStr = "<option value=\"" + getFormatNum (i, 2, 10) + "\">" + getFormatNum (i, 2, 10)
			                + "</option>";
			        $DaySelector.append (dayStr);
		        }
		        
		        // 日列表(仅当选择了年月)
		        function BuildDay () {
			        if ($YearSelector.val () == 0 || $MonthSelector.val () == 0){
				        // 未选择年份或者月份
				        $DaySelector.html (str);
			        } else{
				        var oldVal = $DaySelector.val ();
				        $DaySelector.html (str);
				        var year = parseInt ($YearSelector.val ());
				        var month = parseInt ($MonthSelector.val ());
				        var dayCount = 0;
				        switch (month) {
					        case 1:
					        case 3:
					        case 5:
					        case 7:
					        case 8:
					        case 10:
					        case 12:
						        dayCount = 31;
						        break;
					        case 4:
					        case 6:
					        case 9:
					        case 11:
						        dayCount = 30;
						        break;
					        case 2:
						        dayCount = 28;
						        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
							        dayCount = 29;
						        }
						        break;
					        default:
						        break;
				        }
				        
				        for (var i = 1; i <= dayCount; i++){
					        var day = getFormatNum (i, 2, 10);
					        var select = '';
					        
					        if (day == oldVal){
						        select = 'selected="selected"';
					        } else{
						        select = '';
					        }
					        
					        var dayStr = "<option " + select + " value=\"" + day + "\">" + day + "</option>";
					        
					        $DaySelector.append (dayStr);
				        }
			        }
		        }
		        $MonthSelector.change (function () {
			        BuildDay ();
		        });
		        $YearSelector.change (function () {
			        // BuildDay ();
		        });
		        
		        /**
				 * 规范格式 num: 十进制数值 size: 截取长度 carray: 进制
				 * 
				 * @return: 返回进制字符串
				 */
		        function getFormatNum (num, size, carry) {
			        var num2str = num.toString (carry);
			        var s = "00000000000000000000000000000000000" + num2str;
			        return s.substr (s.length - size);
		        }
		        
	        }// End ms_DatePicker
	        
        });

// /////////////////////////同级选中样式处理
function activeTag (obj, activeClass, defaultClass) {
	$ (obj).attr ("class", activeClass);
	$ (obj).siblings ().each (function () {
		$ (this).attr ("class", defaultClass);
	});
}
