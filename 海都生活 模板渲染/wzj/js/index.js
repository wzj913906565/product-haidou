$(function(){
	$.getJSON('js/goods.json',function(response,status,xhr){
		
		var product = response.retData.product
//		alert(product.retData.length)
		var main = document.querySelector('main')
		var html=template('Goods',product)
//		console.log(html)
		main.innerHTML=html
		
		
	})
})
//控制事件
$('.floor-pic').click(function(){
	alert('xxx')
})
