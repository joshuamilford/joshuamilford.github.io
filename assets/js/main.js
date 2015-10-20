jQuery(document).ready(function($) {
	var nav = responsiveNav(".nav-collapse", {
		insert: 'after',
		customToggle: '.nav-toggle'
	});

	$('#facebook').sharrre({
		share: {
			facebook: true
		},
		template: '<a class="box" href="#"><div class="share"><span></span>Share on Facebook</div></a>',
		enableHover: false,
		text: $('#facebook').data('text'),
		click: function(api, options){
			api.simulateClick();
			api.openPopup('facebook');
		}
	});

	$('#pinterest').sharrre({
		share: {
			pinterest: true
		},
		template: '<a class="box" href="#"><div class="share"><span></span>Share on Pinterest</div></a>',
		enableHover: false,
		text: $('#facebook').data('text'),
		click: function(api, options){
			api.simulateClick();
			api.openPopup('pinterest');
		},
		buttons: {
			pinterest: {
				media: $('img').first().attr('src'),
				description: $('#tab-description p').text()
			}
		}
	});

	var headerHeight;

	$(window).on('load resize', function(){
		headerHeight = $('header').outerHeight(true);
		if($(this).width() < 1050)
			$('.hero img').css('position', 'static');
		else{
			$('.hero img').css('position', 'absolute');
		}
	});

	$(window).scroll(function(){
		if($(this).width() >= 1050){
			howFar = $(this).scrollTop() // how far we've scrolled
			if( howFar >= headerHeight ){
				$('.hero img').css('position', 'fixed');
			}
			else{
				$('.hero img').css('position', 'absolute');
				console.log('ok');
			}
		}
	});

});