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