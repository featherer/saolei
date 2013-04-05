var mine=new Array(81);
var checked=new Array(81);
window.onload=function(){
	div_parent=document.getElementById("outer");
	for(var i=0;i<81;i++)
	{
			div_child=document.createElement("div");
			div_parent.appendChild(div_child);
	}
	var div=document.getElementsByTagName("div");
	for(i=0;i<81;i++)
	{
			checked[i]=0;
			div[i+2].id=i+1;
	}
	mine=[15, 73, 72, 51, 56, 48, 32, 57, 78, 64];
	for(i=0;i<10;i++)
	{
		div[mine[i]+1].style.background="black";
	}
}
function checkid(id){
	for(i=0;i<10;i++)
	{
			if(id==mine[i]) return 1;
	}
	return 0;
}
function checkstatus(id){
	id_c=id+1;
	var div=document.getElementsByTagName("div");
	var count=0;
	div[id_c].style.background="grey";
						if((id_c-10)>1&&(id_c-10)<83&&checkid(id-10)) count++;	
						if((id_c-9)>1&&(id_c-9)<83&&checkid(id-9)) count++;	
						if((id_c-8)>1&&(id_c-8)<83&&checkid(id-8)) count++;	
						if((id_c-1)>1&&(id_c-1)<83&&checkid(id-1)) count++;	
						if((id_c+1)>1&&(id_c+1)<83&&checkid(id+1)) count++;	
						if((id_c+8)>1&&(id_c+8)<83&&checkid(id+8)) count++;	
						if((id_c+9)>1&&(id_c+9)<83&&checkid(id+9))	count++;	
						if((id_c+10)>1&&(id_c+10)<83&&checkid(id+10)) count++;
						if(count!=0)
						div[id_c].innerHTML=count;
						div[id_c-10].style.background="grey";
						div[id_c-9].style.background="grey";
						div[id_c-8].style.background="grey";
						div[id_c-1].style.background="grey";
						div[id_c+1].style.background="grey";
						div[id_c+8].style.background="grey";
						div[id_c+9].style.background="grey";
						div[id_c+10].style.background="grey";
	if((id_c-20)>1)
	{
		if((id_c-20)<83)
			if((id_c+20)>1)
				if((id_c+20)<83)
					{
						checked[id-1]=1;
						if(!checked[id-1-10]) checkstatus(id-10);
						if(!checked[id-1-9]) checkstatus(id-9);
						if(!checked[id-1-8]) checkstatus(id-8);
						if(!checked[id-1-1]) checkstatus(id-1);
						if(!checked[id-1+1]) checkstatus(id+1);
						if(!checked[id-1+8]) checkstatus(id+8);
						if(!checked[id-1+9]) checkstatus(id+9);
						if(!checked[id-1+10]) checkstatus(id+10);
						return 0;
					}
	}
}
document.getElementById("outer").onclick=function(event){
	var id=parseInt(event.target.id);
	if(checkid(id))
	{
			alert("You Lose!");
	}
	else checkstatus(id);
}
