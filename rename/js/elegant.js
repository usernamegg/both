$(function(){
window.onload=function () {
		var arr=['img/style_pic1.jpg','img/style_pic2.jpg','img/style_pic3.jpg','img/style_pic4.jpg','img/style_pic5.jpg','img/style_pic6.jpg','img/style_pic7.jpg','img/style_pic8.jpg','img/style_pic9.jpg','img/style_pic10.jpg','img/style_pic12.jpg','img/style_pic13.jpg','img/style_pic14.jpg'],
			num=0,
			len=arr.length,
			str="";
	   var oPrev=document.querySelector('.prev');
	   var oPrevsm=document.querySelector('.prev-sm');
	   var oNext=document.querySelector('.next');
	   var oNextsm=document.querySelector('.next-sm');
	   var otitle=document.querySelector('.p-title');
	   var oImgsm=document.querySelector('.img-sm');
	   var oImg=document.getElementsByClassName('img');
	   var oitem=document.getElementsByClassName('item');
	   var bottom_img=document.querySelector('.bottom_img');
		for(var i=0;i<len;i++){
		  str+="<div class='item'><img src="+arr[i] +" alt=''> </div>"
		}
		otitle.innerHTML=num+1+'/'+len;
		oImgsm.src=arr[num];
		bottom_img.innerHTML=str;
		oitem[1].style.border="1px solid green";
		oPrevsm.addEventListener('click',function () {
			num--;
			move_sm();
		})


		function move_sm() {
			if(num>len-1){
				num=len-1
			};
			if(num<0){
				num=0
			};
			otitle.innerHTML=num+1+'/'+len;
			oImgsm.src=arr[num];

		};
		
		oNextsm.addEventListener('click',function () {
			num++;
			move_sm();
		});
		
	   oNext.addEventListener('click',function () {
			num++;
			move();
	   });
	   
		oPrev.addEventListener('click',function () {
			num--;
			move();
		});
		
		function move() {
			for(var i=0;i<oitem.length;i++){
				oitem[i].style.border='none';
			}
		   if(num<0){num=len-1};
			if(num>len-1) {
				
				num = 0;
				oImg[0].src = arr[num];
				oImg[1].src = arr[num +1];
				oImg[2].src = arr[num +2];
			}
			switch (num)
			{
				case 14:
				
					oImg[0].src = arr[num];
					oImg[1].src = arr[num+1];
					oImg[2].src = arr[0];
					oitem[num+1].style.border="1px solid green";
					break;
				case 15:
					oImg[0].src = arr[num];
					oImg[1].src = arr[0 ];
					oImg[2].src = arr[1];
					oitem[0].style.border="1px solid #d9534f";
					break;
				default: 
					oImg[0].src=arr[num];
					oImg[1].src=arr[num+1];
					oImg[2].src=arr[num+2];
					oitem[num+1].style.border="1px solid #d9534f";
			}


		};

		for(var i=0;i<oitem.length;i++){
			oitem[i].index=i;
			oitem[i].onclick=function () {
				num = this.index;
				oImg[1].src = arr[num % arr.length];
				for(var i=0;i<oitem.length;i++){
					oitem[i].style.border='none';
				}
				oitem[this.index].style.border="1px solid yellow";
			}
			move();
		};

	};
	
});