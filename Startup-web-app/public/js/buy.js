$(document).ready(() => {
	NProgress.start();
	$.ajax({
		type: 'GET',
		url: '/rawMaterial',
		success: function(response) {			
			response.forEach((e) => {
				$('tbody')
					.append(`<tr><td>${e.name}</td><td>${e.purchasedFrom}</td><td>${e.price}</td><td><a 
                href="/rawmaterial/delete/${e._id}"><button>Delete</button></a></td></tr>`);
			});
			NProgress.done();
		},
	});

	$('button').on('click', () => {
		NProgress.start();
		var inp = document.querySelectorAll('input');
		var data = {};
		inp.forEach((inpE) => {
			data[inpE.name] = inpE.value;
		});
		$.ajax({
			type: 'POST',
			url: '/rawMaterial',
			data: data,
			success: function(e) {
				$('tbody')
					.append(`<tr><td>${e.name}</td><td>${e.purchasedFrom}</td><td>${e.price}</td><td><a 
				href="/rawmaterial/delete/${e._id}"><button>Delete</button></a></td></tr>`);
				NProgress.done();
			},
		});
	});
});
