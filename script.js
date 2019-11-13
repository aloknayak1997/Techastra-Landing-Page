$( () => {
	
	//On Scroll Functionality
	var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','85px');
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','85px');
	});
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});

	var activeSec = 1;

	setTimeout(()=>{
		
	},1000)
	
	
	function makeActive(id){
		activeSec = id;
		$('.section.active').removeClass('active');
		$('.dot.active').removeClass('active');
		$('.section[data-sec='+id+']').addClass('active');
		$('.dot[data-dot='+id+']').addClass('active');
	}
	$('.left_arr').on('click',() =>{
		activeSec == 1 ? makeActive(4) : makeActive(activeSec-1);
	})

	$('.right_arr').on('click',() =>{
		activeSec == 4 ? makeActive(1) : makeActive(activeSec+1);
	})
});
