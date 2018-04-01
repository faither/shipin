$(function(){
		imgLoader(['http://cloud.citymsg.cn/zera_gif/L/p1待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p1转p2输出.gif','http://cloud.citymsg.cn/zera_gif/L/p2待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p3-4循环.gif','http://cloud.citymsg.cn/zera_gif/L/p3-4转场输出.gif','http://cloud.citymsg.cn/zera_gif/L/p5待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p6循环.gif','http://cloud.citymsg.cn/zera_gif/L/p7循环.gif','http://cloud.citymsg.cn/zera_gif/L/p7转场输出.gif','http://cloud.citymsg.cn/zera_gif/L/p8_0328循环.gif'], function(percentage){    
			console.log(percentage)    
		}); 
		function loads(){
			$('body').loading({
				loadingWidth:240,
				title:'请稍等!',
				name:'test',
				discription:'图片正在加载中...',
				direction:'column',
				type:'origin',
				// originBg:'#71EA71',
				originDivWidth:40,
				originDivHeight:40,
				originWidth:6,
				originHeight:6,
				smallLoading:false,
				loadingMaskBg:'rgba(0,0,0,0.2)'
			});
		} 
		loads();
		 function imgLoad(img, callback) {
            var timer = setInterval(function() {
                if(img.complete) {
                    callback(img)
                    clearInterval(timer)
                }
            }, 10)
        }
        imgLoad(bg1,function() {
        	 // alert('加载完毕')
        	removeLoading('test');
        	$('.bg1').css('display','block');
             
        }) 
		
		$('#xiajian1').click(function(){
			$('.bg1').css('display','none');
	        $('.bg2').css('display','block'); 
	        	setTimeout(function(){
					$('.bg2').css('display','none');      
					$('.bg3').css('display','block');
				},5800)      

		});
		$('#xiajian2').click(function(){
			$('.bg3').css('display','none');
	        $('.bg4').css('display','block');      

		});
		$('#xiajian3').click(function(){
			$('.bg4').css('display','none');
	        $('.bg5').css('display','block'); 
	        	setTimeout(function(){
					$('.bg5').css('display','none'); 
					$('.bg6').css('display','block');
				},5800)     
		});
		$('#xiajian4').click(function(){
			$('.bg6').css('display','none');
	        $('.bg7').css('display','block');      
		});
		$('#xiajian5').click(function(){
			$('.bg7').css('display','none');
	        $('.bg8').css('display','block');      
		});
		$('#xiajian6').click(function(){
			$('.bg8').css('display','none');
	        $('.bg9').css('display','block'); 
	        	setTimeout(function(){
					$('.bg9').css('display','none');
					$('.bg10').css('display','block');
				},5800)     

		});
	})