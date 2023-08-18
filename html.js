var a=10
var b=90
var c=9948827779
var d=8907
var name='KARTHIK';
name +='devi';
alert(c)
//window.alert(c)
console.log(d)
document.write(name);
document.write("</br> this is javascript intro </br>");
document.write("The value of a:",a);
document.write("</br>The value of b:",b);
var name='</br>"mani"'
name +=' Chiru'
name +=' ,Karthik'
document.write(name);
document.write("</br>")
var a=210
document.write(typeof(a)+"</br>");
var b=24.3
document.write(typeof(b)+"</br>");
var c='karthik'
document.write(typeof(c)+"</br>");
var d="KARTHIK"
document.write(typeof(d)+"</br>");
var e;
document.write(typeof(e)+"</br>")
document.write("-----------------</br>")
var array =['karthik',73,true]
document.write(typeof(array)+"</br>")
document.write(array+"</br>")
document.write(array[0]+"</br>")
document.write(array[1]+"</br>")
document.write(array[2]+"</br>")
var obj={
	'name':'karhtik',
	'roll-no':1260,
	'college': 'ACET',
	'branch':'IT',
}
console.log(obj);
var trainees=[{
	'name':'shiva',
	'roll-no':'1253',
	'college':'acet',
	'branch':'It'
},{
	'name':'balaji',
	'roll-no':'1254',
	'college':'acet',
	'branch':'It'

},{
	'name':'karim',
	'roll-no':'1212',
	'college':'acet',
	'branch':'It'
}]
for(var i=0;i<trainees.length;i++)
console.log(trainees[i])
  var students=[{
	'name':'shiva',
	'roll-no':'1253',
	'college':'acet',
	'branch':'It'
},{
	'name':'balaji',
	'roll-no':'1254',
	'college':'acet',
	'branch':'It'

},{
	'name':'karim',
	'roll-no':'1212',
	'college':'acet',
	'branch':'It'
},
	{
	'name':'bablu',
	'roll-no':'1214',
	'college':'acet',
	'branch':'It'
}]

var trainees=[{
	'name':'balu'
	'roll-no':'3419'
	'college':'acet'
	'branch':'IT'
},{
	'name':'kiran'
	'roll-no':'3429'
	'college':'acet'
	'branch':'IT'
},{
	'name':'raju'
	'roll-no':'3349'
	'college':'acet'
	'branch':'IT'
}]
for(var i=0;i<trainees.length;i++)
{
	for(var key in trainees[i]){

		document.write(trainees[i][key])
	}
}


