window.onload=loads;
var today=new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
//随机数
function random(dayseed,indexseed){
  var n=dayseed%11117;
  for(var i=0;i<100+indexseed;i++){
    n=n*n;
    n=n%11117;
  }
  return n;
}

var weeks = ["日","一","二","三","四","五","六"];
var directions = ["北方","东北方","东方","东南方","南方","西南方","西方","西北方"];
var activities=[
  "睡觉","听歌","逛街","看书","学习","聊天","看美剧","看电影","聚会","吃大餐","玩手机"
  ,"跳舞机","和朋友HAPPY"
]
var drinks = ["水","茶","红茶","绿茶","咖啡","奶茶","可乐","鲜奶","豆奶","果汁","果味汽水","苏打水","酸奶"];
var qians=[
  "下下","下","中","上","上上"
]
function getTodayString() {
	return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}
function star(num) {
	var result = "";
	var i = 0;
	while (i < num) {
		result += "★";
		i++;
	}
	while(i < 5) {
		result += "☆";
		i++;
	}
	return result;
}
function good(){
  var n=random(iday,13);
  n=n%13;
  return n;
}
function bad(){
  var n=random(iday*13,13);
  n=n%13;
  return n;
}
function chou(){
  var n=random(iday,5);
  n=n%5;
  return n;
}

function loads(){
  var data=document.getElementById('data');
  var datastr=getTodayString();
  data.innerHTML="<p>"+datastr+"</p>";

  var n1=chou();
  var qian=document.getElementById('q');
  qian.innerHTML="<p>"+qians[n1]+"签<p>";
  var stard=document.getElementById('x');
  var stars=star(n1);
  stard.innerHTML="<p>幸运指数"+stars+"</p>";

  var n2=good();
  var goode=document.getElementById('good');
  goode.innerHTML="<p>宜:"+activities[n2]+"</p>";
  var hee=document.getElementById('he');
  hee.innerHTML="<p>最好饮品:"+drinks[n2]+"</p>"
  var n3=bad();
  if(n3==n2){
    n3=(n3+1)%13;
  }
  var bade=document.getElementById('bad');
  bade.innerHTML="<p>忌:"+activities[n3]+"</p>";
  skPlayer({
    music:37061342 //歌单id(登陆网页版网易云音乐，进入歌单详情后，在url中可找到歌单id，例：'http://music.163.com/#/playlist?id=317921676'),
    theme:'red'
});
}
/* skPlayer by Scott */
!function(a,b){var c={timeFormat:function(a){var b=parseInt(a/60),c=parseInt(a%60),d=b<10?"0"+b:b,e=c<10?"0"+c:c;return d+":"+e},leftDistance:function(a){for(var b=a.offsetLeft;a.offsetParent;)a=a.offsetParent,b+=a.offsetLeft;return b},ajax:function(a){var a=a||{},b=new XMLHttpRequest;b.open("GET",a.url),b.send(null),b.onreadystatechange=function(){if(4==b.readyState){var c=b.status;c>=200&&c<300?a.success&&a.success(b.responseText,b.responseXML):a.fail&&a.fail(c)}}}};skPlayer=function(d){function e(){d.loop===!0&&(t.loop=!0),F=this.duration,A.innerHTML="00:00",B.innerHTML=c.timeFormat(parseInt(F)),1==t.volume&&(t.volume=.7,x.style.width="70%"),u.addEventListener("click",i)}function f(){F=this.duration}function g(){var a=parseInt(t.currentTime),b=a/F*100;v.style.width=b.toFixed(2)+"%",A.innerHTML=c.timeFormat(a)}function h(){if(Array.isArray(q)&&1!==q.length){var a=parseInt(r.querySelector(".skPlayer-curMusic").getAttribute("data-index"))+1;if(a<q.length){1!==r.querySelector(".skPlayer-curMusic").nextSibling?r.querySelector(".skPlayer-curMusic").nextSibling.nextSibling.classList.add("skPlayer-curMusic"):r.querySelector(".skPlayer-curMusic").nextSibling.classList.add("skPlayer-curMusic"),r.querySelector(".skPlayer-curMusic").classList.remove("skPlayer-curMusic");var b=q[a]}else{r.querySelector(".skPlayer-list li").classList.add("skPlayer-curMusic"),r.querySelectorAll(".skPlayer-curMusic")[1].classList.remove("skPlayer-curMusic");var b=q[0]}r.querySelector(".skPlayer-name").innerHTML=b.name,r.querySelector(".skPlayer-author").innerHTML=b.author,r.querySelector(".skPlayer-cover").src=b.cover,t.src=b.src,u.classList.contains("skPlayer-pause")&&t.play()}else u.classList.remove("skPlayer-pause"),C.classList.remove("skPlayer-pause");A.innerHTML="00:00",v.style.width=0}function i(){t.paused?t.play():t.pause(),u.classList.contains("skPlayer-pause")?(u.classList.remove("skPlayer-pause"),C.classList.remove("skPlayer-pause")):(u.classList.add("skPlayer-pause"),C.classList.add("skPlayer-pause"))}function j(b){var d,e=a.event||b;d=e.pageX?(e.pageX-c.leftDistance(this))/this.offsetWidth:(e.clientX-c.leftDistance(this))/this.offsetWidth,v.style.width=100*d+"%",t.currentTime=parseInt(d*F)}function k(b){var d=a.event||b;z.classList.contains("skPlayer-quiet")&&z.classList.remove("skPlayer-quiet");var e;e=d.pageX?(d.pageX-c.leftDistance(this))/this.offsetWidth:(d.clientX-c.leftDistance(this))/this.offsetWidth,x.style.width=100*e+"%",t.volume=e.toFixed(2)}function l(){0!=t.volume?(z.setAttribute("data-volume",t.volume),t.volume=0,x.style.width=0,z.classList.add("skPlayer-quiet")):(t.volume=z.getAttribute("data-volume"),x.style.width=100*z.getAttribute("data-volume")+"%",z.setAttribute("data-volume","0"),z.classList.remove("skPlayer-quiet"))}function m(){if(!this.classList.contains("skPlayer-curMusic")){r.querySelector(".skPlayer-curMusic").classList.remove("skPlayer-curMusic"),this.classList.add("skPlayer-curMusic");var a=this.getAttribute("data-index"),b=q[a];r.querySelector(".skPlayer-name").innerHTML=b.name,r.querySelector(".skPlayer-author").innerHTML=b.author,r.querySelector(".skPlayer-cover").src=b.cover,t.src=b.src,u.classList.contains("skPlayer-pause")&&t.play(),A.innerHTML="00:00",v.style.width=0}}function n(){r.classList.contains("skPlayer-list-on")?r.classList.remove("skPlayer-list-on"):r.classList.add("skPlayer-list-on")}function o(){if(t.addEventListener("canplay",e),t.addEventListener("durationchange",f),t.addEventListener("timeupdate",g),t.addEventListener("ended",h),w.addEventListener("click",j),y.addEventListener("click",k),z.addEventListener("click",l),Array.isArray(q)){for(var a in q)D[a].addEventListener("click",m);r.querySelector(".skPlayer-list li:nth-child(1)").classList.add("skPlayer-curMusic"),E.addEventListener("click",n)}}if(Array.isArray(d.music)){for(var p in d.music)if(!(d.music[p].src&&d.music[p].name&&d.music[p].author&&d.music[p].cover))return void console.error("请正确配置对象！");var q=d.music,r=b.getElementById("skPlayer"),s='<audio src="'+q[0].src+'" preload="auto"></audio>';s+='<div class="skPlayer-picture">',s+='    <img src="'+q[0].cover+'" alt="" class="skPlayer-cover">',s+='    <a href="javascript:;" class="skPlayer-play-btn">',s+='        <span class="skPlayer-left"></span>',s+='        <span class="skPlayer-right"></span>',s+="    </a>",s+="</div>",s+='<div class="skPlayer-control">',s+='    <p class="skPlayer-name">'+q[0].name+"</p>",s+='    <p class="skPlayer-author">'+q[0].author+"</p>",s+='    <div class="skPlayer-percent">',s+='        <div class="skPlayer-line"></div>',s+="    </div>",s+='    <p class="skPlayer-time">',s+='        <span class="skPlayer-cur">00:00</span>/<span class="skPlayer-total">00:00</span>',s+="    </p>",s+='    <div class="skPlayer-volume skPlayer-hasList">',s+='        <i class="skPlayer-icon" data-volume="0"></i>',s+='        <div class="skPlayer-percent">',s+='            <div class="skPlayer-line"></div>',s+="        </div>",s+="    </div>",s+='    <div class="skPlayer-list-switch">',s+='        <i class="skPlayer-list-icon"></i>',s+="    </div>",s+="</div>",s+='<ul class="skPlayer-list">';for(var p in d.music)s+='    <li data-index="'+p+'">',s+='        <i class="skPlayer-list-sign"></i>',s+='        <span class="skPlayer-list-index">'+(parseInt(p)+1)+"</span>",s+='        <span class="skPlayer-list-name">'+d.music[p].name+"</span>",s+='        <span class="skPlayer-list-author" title=" '+d.music[p].author+' ">'+d.music[p].author+"</span>",s+="    </li>";s+="</ul>",r.innerHTML=s,"red"===d.theme&&(r.className="skPlayer-red");var t=r.querySelector("audio"),u=r.querySelector(".skPlayer-play-btn"),v=r.querySelector(".skPlayer-percent").querySelector(".skPlayer-line"),w=r.querySelector(".skPlayer-percent"),x=r.querySelector(".skPlayer-volume").querySelector(".skPlayer-line"),y=r.querySelector(".skPlayer-volume").querySelector(".skPlayer-percent"),z=r.querySelector(".skPlayer-icon"),A=r.querySelector(".skPlayer-cur"),B=r.querySelector(".skPlayer-total"),C=r.querySelector(".skPlayer-cover");if(Array.isArray(q)){var D=r.querySelectorAll(".skPlayer-list li"),E=r.querySelector(".skPlayer-list-switch");r.classList.add("skPlayer-list-on")}var F;o()}else if("object"==typeof d.music){if(!(d.music.src&&d.music.name&&d.music.author&&d.music.cover))return void console.error("请正确配置对象！");var q=d.music,r=b.getElementById("skPlayer"),s='<audio src="'+q.src+'" preload="auto"></audio>';s+='<div class="skPlayer-picture">',s+='    <img src="'+q.cover+'" alt="" class="skPlayer-cover">',s+='    <a href="javascript:;" class="skPlayer-play-btn">',s+='        <span class="skPlayer-left"></span>',s+='        <span class="skPlayer-right"></span>',s+="    </a>",s+="</div>",s+='<div class="skPlayer-control">',s+='    <p class="skPlayer-name">'+q.name+"</p>",s+='    <p class="skPlayer-author">'+q.author+"</p>",s+='    <div class="skPlayer-percent">',s+='        <div class="skPlayer-line"></div>',s+="    </div>",s+='    <p class="skPlayer-time">',s+='        <span class="skPlayer-cur">00:00</span>/<span class="skPlayer-total">00:00</span>',s+="    </p>",s+='    <div class="skPlayer-volume">',s+='        <i class="skPlayer-icon" data-volume="0"></i>',s+='        <div class="skPlayer-percent">',s+='            <div class="skPlayer-line"></div>',s+="        </div>",s+="    </div>",s+="</div>",r.innerHTML=s,"red"===d.theme&&(r.className="skPlayer-red");var t=r.querySelector("audio"),u=r.querySelector(".skPlayer-play-btn"),v=r.querySelector(".skPlayer-percent").querySelector(".skPlayer-line"),w=r.querySelector(".skPlayer-percent"),x=r.querySelector(".skPlayer-volume").querySelector(".skPlayer-line"),y=r.querySelector(".skPlayer-volume").querySelector(".skPlayer-percent"),z=r.querySelector(".skPlayer-icon"),A=r.querySelector(".skPlayer-cur"),B=r.querySelector(".skPlayer-total"),C=r.querySelector(".skPlayer-cover");if(Array.isArray(q)){var D=r.querySelectorAll(".skPlayer-list li"),E=r.querySelector(".skPlayer-list-switch");r.classList.add("skPlayer-list-on")}var F;o()}else if("number"==typeof d.music){var q,r,t,u,v,w,x,y,z,A,B,C,F,D,E,G=!1;if(c.ajax({url:"http://120.24.162.247/api/Music?id="+d.music,success:function(a){q=JSON.parse(a),r=b.getElementById("skPlayer");var c='<audio src="'+q[0].src+'" preload="auto"></audio>';c+='<div class="skPlayer-picture">',c+='    <img src="'+q[0].cover+'" alt="" class="skPlayer-cover">',c+='    <a href="javascript:;" class="skPlayer-play-btn">',c+='        <span class="skPlayer-left"></span>',c+='        <span class="skPlayer-right"></span>',c+="    </a>",c+="</div>",c+='<div class="skPlayer-control">',c+='    <p class="skPlayer-name">'+q[0].name+"</p>",c+='    <p class="skPlayer-author">'+q[0].author+"</p>",c+='    <div class="skPlayer-percent">',c+='        <div class="skPlayer-line"></div>',c+="    </div>",c+='    <p class="skPlayer-time">',c+='        <span class="skPlayer-cur">00:00</span>/<span class="skPlayer-total">00:00</span>',c+="    </p>",c+='    <div class="skPlayer-volume skPlayer-hasList">',c+='        <i class="skPlayer-icon" data-volume="0"></i>',c+='        <div class="skPlayer-percent">',c+='            <div class="skPlayer-line"></div>',c+="        </div>",c+="    </div>",c+='    <div class="skPlayer-list-switch">',c+='        <i class="skPlayer-list-icon"></i>',c+="    </div>",c+="</div>",c+='<ul class="skPlayer-list">';for(var e in q)c+='    <li data-index="'+e+'">',c+='        <i class="skPlayer-list-sign"></i>',c+='        <span class="skPlayer-list-index">'+(parseInt(e)+1)+"</span>",c+='        <span class="skPlayer-list-name">'+q[e].name+"</span>",c+='        <span class="skPlayer-list-author" title="'+q[e].author+'">'+q[e].author+"</span>",c+="    </li>";c+="</ul>",r.innerHTML=c,"red"===d.theme&&(r.className="skPlayer-red"),t=r.querySelector("audio"),u=r.querySelector(".skPlayer-play-btn"),v=r.querySelector(".skPlayer-percent").querySelector(".skPlayer-line"),w=r.querySelector(".skPlayer-percent"),x=r.querySelector(".skPlayer-volume").querySelector(".skPlayer-line"),y=r.querySelector(".skPlayer-volume").querySelector(".skPlayer-percent"),z=r.querySelector(".skPlayer-icon"),A=r.querySelector(".skPlayer-cur"),B=r.querySelector(".skPlayer-total"),C=r.querySelector(".skPlayer-cover"),D=r.querySelectorAll(".skPlayer-list li"),E=r.querySelector(".skPlayer-list-switch"),r.classList.add("skPlayer-list-on"),o()},fail:function(a){alert("歌单拉取失败！"),G=!0}}),G)return}},a.skPlayer=skPlayer}(window,document),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=window.skPlayer);