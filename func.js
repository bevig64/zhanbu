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

}
