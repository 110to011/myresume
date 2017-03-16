/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*!
 * PageSwitch 1.0
 *
 */

;(function($){
	/*说明:获取浏览器前缀*/
	/*实现：判断某个元素的css样式中是否存在transition属性*/
	/*参数：dom元素*/
	/*返回值：boolean，有则返回浏览器样式前缀，否则返回false*/
	var _prefix = (function(temp){
		var aPrefix = ["webkit", "Moz", "o", "ms"],
			props = "";
		for(var i in aPrefix){
			props = aPrefix[i] + "Transition";
			if(temp.style[ props ] !== undefined){
				return "-"+aPrefix[i].toLowerCase()+"-";
			}
		}
		return false;
	})(document.createElement(PageSwitch));

	var PageSwitch = (function(){
		function PageSwitch(element, options){
			this.settings = $.extend(true, $.fn.PageSwitch.defaults, options||{});
			this.element = element;
			this.init();
		}

		PageSwitch.prototype = {
			/*说明：初始化插件*/
			/*实现：初始化dom结构，布局，分页及绑定事件*/
			init : function(){
				var me = this;
				me.selectors = me.settings.selectors;
				me.sections = me.element.find(me.selectors.sections);
				me.section = me.sections.find(me.selectors.section);
				me.direction = me.settings.direction == "vertical" ? true : false;
				me.pagesCount = me.pagesCount();
				me.index = (me.settings.index >= 0 && me.settings.index < me.pagesCount) ? me.settings.index : 0;

				me.canscroll = true;

				if(!me.direction || me.index){
					me._initLayout();
				}

				if(me.settings.pagination){
					me._initPaging();
				}

				me._initEvent();
			},
			/*说明：获取滑动页面数量*/
			pagesCount : function(){
				return this.section.length;
			},
			/*说明：获取滑动的宽度（横屏滑动）或高度（竖屏滑动）*/
			switchLength : function(){
				return this.direction == 1 ? this.element.height() : this.element.width();
			},
			/*说明：向前滑动即上一页*/
			prve : function(){
				var me = this;
				if(me.index > 0){
					me.index --;
				}else if(me.settings.loop){
					me.index = me.pagesCount - 1;
				}
				me._scrollPage();
			},
			/*说明：向后滑动即下一页*/
			next : function(){
				var me = this;
				if(me.index < me.pagesCount){
					me.index ++;
				}else if(me.settings.loop){
					me.index = 0;
				}
				me._scrollPage();
			},
			/*说明：主要针对横屏情况进行页面布局*/
			_initLayout : function(){
				var me = this;
				if(!me.direction){
					var width = (me.pagesCount * 100) + "%",
						cellWidth = (100 / me.pagesCount).toFixed(2) + "%";
					me.sections.width(width);
					me.section.width(cellWidth).css("float", "left");
				}
				if(me.index){
					me._scrollPage(true);
				}
			},
			/*说明：主要针对横屏情况进行页面布局*/
			_initPaging : function(){
				var me = this,
					pagesClass = me.selectors.page.substring(1);
				me.activeClass = me.selectors.active.substring(1);

				var pageHtml = "<ul class="+pagesClass+">";
				for(var i = 0 ; i < me.pagesCount; i++){
					pageHtml += "<li></li>";
				}
				me.element.append(pageHtml);
				var pages = me.element.find(me.selectors.page);
				me.pageItem = pages.find("li");
				me.pageItem.eq(me.index).addClass(me.activeClass);

				if(me.direction){
					pages.addClass("vertical");
				}else{
					pages.addClass("horizontal");
				}
			},
			/*说明：初始化插件事件*/
			_initEvent : function(){
				var me = this;
				/*绑定鼠标滚轮事件*/
				me.element.on("mousewheel DOMMouseScroll", function(e){
					e.preventDefault();
					var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
					if(me.canscroll){
						if(delta > 0 && (me.index && !me.settings.loop || me.settings.loop)){
							me.prve();
						}else if(delta < 0 && (me.index < (me.pagesCount-1) && !me.settings.loop || me.settings.loop)){
							me.next();
						}
					}
				});

				/*绑定分页click事件*/
				me.element.on("click", me.selectors.page + " li", function(){
					me.index = $(this).index();
					me._scrollPage();
				});

				if(me.settings.keyboard){
					$(window).keydown(function(e){
						var keyCode = e.keyCode;
						if(keyCode == 37 || keyCode == 38){
							me.prve();
						}else if(keyCode == 39 || keyCode == 40){
							me.next();
						}
					});
				}

				/*绑定窗口改变事件*/
				/*为了不频繁调用resize的回调方法，做了延迟*/
				var resizeId;
				$(window).resize(function(){
					clearTimeout(resizeId);
					resizeId = setTimeout(function(){
						var currentLength = me.switchLength();
						var offset = me.settings.direction ? me.section.eq(me.index).offset().top : me.section.eq(me.index).offset().left;
						if(Math.abs(offset) > currentLength/2 && me.index < (me.pagesCount - 1)){
							me.index ++;
						}
						if(me.index){
							me._scrollPage();
						}
					},500);
				});

				/*支持CSS3动画的浏览器，绑定transitionend事件(即在动画结束后调用起回调函数)*/
				if(_prefix){
					me.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", function(){
						me.canscroll = true;
						if(me.settings.callback && $.type(me.settings.callback) === "function"){
							me.settings.callback();
						}
					})
				}
			},
			/*滑动动画*/
			_scrollPage : function(init){
				var me = this;
				var dest = me.section.eq(me.index).position();
				if(!dest) return;

				me.canscroll = false;
				if(_prefix){
					var translate = me.direction ? "translateY(-"+dest.top+"px)" : "translateX(-"+dest.left+"px)";
					me.sections.css(_prefix+"transition", "all " + me.settings.duration + "ms " + me.settings.easing);
					me.sections.css(_prefix+"transform" , translate);
				}else{
					var animateCss = me.direction ? {top : -dest.top} : {left : -dest.left};
					me.sections.animate(animateCss, me.settings.duration, function(){
						me.canscroll = true;
						if(me.settings.callback){
							me.settings.callback();
						}
					});
				}
				if(me.settings.pagination && !init){
					me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);
					me.section.eq(me.index).addClass(me.activeClass).siblings(".section").removeClass(me.activeClass);
				}
			}
		};
		return PageSwitch;
	})();

	$.fn.PageSwitch = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data("PageSwitch");

			if(!instance){
				me.data("PageSwitch", (instance = new PageSwitch(me, options)));
			}

			if($.type(options) === "string") return instance[options]();
		});
	};

	$.fn.PageSwitch.defaults = {
		selectors : {
			sections : ".sections",
			section : ".section",
			page : ".pages",
			active : ".active",
		},
		index : 0,		//页面开始的索引
		easing : "ease",		//动画效果
		duration : 500,		//动画执行时间
		loop : false,		//是否循环切换
		pagination : true,		//是否进行分页
		keyboard : true,		//是否触发键盘事件
		direction : "vertical",		//滑动方向vertical,horizontal
		callback : ""		//回调函数
	};

	$(function(){
		$('[data-PageSwitch]').PageSwitch();
	});
})(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.onload = function() {
  genNet('section3');
  var prefix = 'images/h',resArr = [],imgResArr = [];
  var infoArr = [
    {
      'ask': '性别',
      'res': '女'
    },
    {
      'ask': '民族',
      'res': '汉族'
    },
    {
      'ask': '籍贯',
      'res': '辽宁省铁岭市'
    },
    {
      'ask': '邮箱',
      'res': '15998234256@163.com'
    },
    {
      'ask': '电话',
      'res': '18500084023'
    }
  ];
  var imgArr = [
    {
      url: prefix + '1.jpg'
    },
    {
      url: prefix + '2.jpg'
    },
    {
      url: prefix + '3.jpg'
    },
    {
      url: prefix + '4.jpg'
    },
    {
      url: prefix + '5.jpg'
    },
    {
      url: prefix + '6.jpg'
    }
  ];
  for(var i=0, l=infoArr.length; i<l; i++) {
    resArr.push("<li><a href='javascript:;'>" + infoArr[i].ask + ' ' + infoArr[i].res + "</a></li> ");       
  }  
  resArr.push("<div class='ribbon_wrap'><div class='ribbon_rail'><div></div></div></div>");
  $('#sec .menu').html(resArr.join(''));
  imgResArr.push("<div id='list'>");
  for(var j=0, len=imgArr.length; j<len; j++) {
    imgResArr.push("<img src='" + imgArr[j].url + "'>");    
  }  
  imgResArr.push("</div><div id='buttons'>");
  for(var j=0, len=imgArr.length; j<len; j++) {
    if(j == 0) {
      imgResArr.push("<span index='" + j + "'class='on'></span>");
    } else {
      imgResArr.push("<span index='" + j + "'></span>");
    }  
  }
  imgResArr.push("</div>");
  $('#sec4').html(imgResArr.join(''));
  //----轮播---
  var container = $('#sec4');
  var list = $('#list');
  var buttons = $('#buttons span');
  var prev = $('#prev');
  var next = $('#next');
  var curIndex = 0;
  var imglen = buttons.length;
  var interval = 3000;
  var timer;

  function animate (index) {//动画效果
      var offset = -500 * (index);
      list.animate({'left': offset}, 300, function () {
          
      });
  }

  function showButton() {
      buttons.eq(curIndex).addClass('on').siblings().removeClass('on');
  }

  function play() {
      timer = setTimeout(function () {
          next.trigger('click');
          play();
      }, interval);
  }
  function stop() {
      clearTimeout(timer);
  }

  next.bind('click', function () {
      if (list.is(':animated')) {
          return;
      }
      if (curIndex == imglen-1) {
          curIndex = 0;
      }else {
          curIndex += 1;
      }
      animate(curIndex);
      showButton();
  });

  prev.bind('click', function () {
      if (list.is(':animated')) {
          return;
      }
      curIndex--;
      if (curIndex < 0) {
          curIndex = imglen-1;
      }
      animate(curIndex);
      showButton();
  });

  buttons.each(function () {
       $(this).bind('click', function () {
           if (list.is(':animated') && $(this).attr('class')=='on') {
               return;
           }
           var myCurIndex = parseInt($(this).attr('index'));
           animate(myCurIndex);
           curIndex = myCurIndex;
           showButton();
       })
  });
  play();
  //---end---
  function changeCouleur(){
    var corps = document.getElementsByClassName("corps");
    corps[0].style.fill = '#ffc0cb';
    corps[1].style.fill = 'rgb(249,205,173)';
  }
  changeCouleur();
}
//绘制网状时间线
var u = document.createElement("canvas"),
s = getDataObj(),
c = "c_n" + s.l,
e = u.getContext("2d"),r,n,
m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
function(i) {
  window.setTimeout(i, 1000 / 45)
},
t = [],
a = Math.random,
f = {
  x: null,
  y: null,
  max: 20000
};
u.id = c;
u.style.cssText = "position:absolute;top:0;pointer-events:none;left:0;z-index:" + 1 + ";opacity:" + s.o;
function genNet(str) {
  getEleById(str).appendChild(u);
  k(),
  window.onresize = k;
  window.onmousemove = function(i) {
    i = i || window.event,
    f.x = i.clientX,
    f.y = i.clientY
  },
  window.onmouseout = function() {
    f.x = null,
    f.y = null
  };
  for (var p = 0; s.n > p; p++) {
    var h = a() * r,
    g = a() * n,
    q = 2 * a() - 1,
    d = 2 * a() - 1;
    t.push({
      x: h,
      y: g,
      xa: q,
      ya: d,
      max: 9000
    })
  }
  setTimeout(function() {
    drawContent()
  },
  10)
}
function o(w, v, i) {
  return w.getAttribute(v) || i
}
function getEleByTag(i) {
  return document.getElementsByTagName(i)
}
function getEleById(i) {
  return document.getElementById(i);
}
function getDataObj() {
  var i = getEleByTag("script"),
  w = i.length,
  v = i[w - 1];
  return {
    l: w,
    z: o(v, "zIndex", 999),
    o: o(v, "opacity", 0.9),
    c: o(v, "color", "255,255,255"),
    n: o(v, "count", 199)
  }
}
function k() {
  r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}
function drawContent() {
  e.clearRect(0, 0, r, n);
  var w = [f].concat(t);
  var x, v, A, B, z, y;
  t.forEach(function(i) {
    i.x += i.xa,
    i.y += i.ya,
    i.xa *= i.x > r || i.x < 0 ? -1 : 1,
    i.ya *= i.y > n || i.y < 0 ? -1 : 1,
    e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
    for (v = 0; v < w.length; v++) {
      x = w[v];
      if (i !== x && null !== x.x && null !== x.y) {
        B = i.x - x.x,
        z = i.y - x.y,
        y = B * B + z * z;
        y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
      }
    }
    w.splice(w.indexOf(i), 1)
  }),
  m(drawContent)
}
//---end---

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0); 
__webpack_require__(1);

/***/ })
/******/ ]);