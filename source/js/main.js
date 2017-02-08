// 扩展动画
jQuery.extend(jQuery.easing, {
    easeOutExpo: function(x, t, b, c, d) {
         return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
});

function TocLinkage(conSelector){
	this.tocEl = $(conSelector);
	this.linkEls = this.tocEl.find('.mytoc-link');
	this.init();
}
TocLinkage.prototype = {
	init:function(){
		this.bindEvents();
	},
	bindEvents:function(){
		var self = this,
			bodyEl = $('body');

		self.tocEl.find('.mytoc-link').on('click',function(e){
			var el = $(this),
				target = $(el.attr('href')),
				scrollTop = target.offset().top - 41 - parseInt(target.css('margin-top'));

			$('html,body').animate({
	            'scrollTop': scrollTop
	        }, 500,'easeOutExpo');

			return false;
		});

		// $(document).on('scroll',function(){
		// 	var hash = self.getTarget(bodyEl.scrollTop());

		// 	self.linkEls.removeClass('active').filter('[href="'+ hash +'"]').addClass('active');
		// });
	},
	_positons:[],
	_linkMap:{},
	getTarget:function(num){
		var self = this,
			arr = self._positons,
			map = self._linkMap;

		if(arr.length == 0){
			arr = this.linkEls.map(function(){
				var hash = $(this).attr('href'),
					top = $(hash).offset().top;
				map[top] = hash;
				return top;
			});
		}
		var newArr = [];
		arr.map(function(i,x) {
		    newArr.push(Math.abs(x -41 - num));
		});
		// 求最小值的索引
		var index = newArr.indexOf(Math.min.apply(null, newArr));
		return map[arr[index]];

	},
	_debounce: function(fn, delay) {
	    var last = 0;
	    return function() {
	        var curr = +new Date();
	        console.log('ahh');
	        if (curr - last > delay) {
	            fn.apply(this, arguments)
	            last = curr;
	        }
	    }
	}

};

$(function(){

	if(window.config){
		// index
		$.fn.zTree.init($("#cateTree"), {
				data: {
					simpleData: {
						enable: true
					}
				}
			}, config.zNodes)
	    setTimeout(function(){
	    	$('#loading').fadeOut();
	    },1000 * Math.random());



	}else{
		// POST
		new TocLinkage('#toc');

		if($(document).scrollTop() > 30){
			$('#toTop').fadeOut();
		}else{
			$('#toTop').fadeOut();
		}

	}



});





