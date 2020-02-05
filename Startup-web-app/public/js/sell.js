$(document).ready(() => {
	NProgress.start();
	$.ajax({
		type: 'GET',
		url: '/soldProduct',
		success: function(response) {
			response.forEach((e) => {
				$('tbody')
					.append(`<tr><td>${e.name}</td><td>${e.price}</td><td>${e.soldTo}</td><td><a 
					href="/soldproduct/delete/${e._id}"><button>Delete</button></a></td></tr>`);
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
			url: '/soldProduct',
			data: data,
			success: function(e) {
				$('tbody')
					.append(`<tr><td>${e.name}</td><td>${e.price}</td><td>${e.soldTo}</td>
					<td><a 
					href="/soldproduct/delete/${e._id}"><button>Delete</button></a></td>
                    </tr>`);
				NProgress.done();
			},
			error: function(e){
				console.log('asd');
				
				console.log(e);
				
			},
			completed: function(e){
				console.log(e);
				
			}
		});
	});
});