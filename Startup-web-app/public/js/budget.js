$(document).ready(() => {
  NProgress.start();
  $.ajax({
    type: "GET",
    url: "/budget",
    success: function(response) {
      console.log(response);
      balance = 0;
      response.forEach(e => {
        if (e.debit == true) {
          balance = balance + parseInt(e.price);
          $("tbody").append(`<tr><td>${formatDate(
            new Date(e.transactionDate)
          )}</td>
			<td>${e.name}</td>
			<td>&#8377;${e.price}</td>
			<td>_</td>
			<td>&#8377;${balance}</td></tr>`);
        } else {
          balance = balance - parseInt(e.price);
          $("tbody").append(`<tr><td>${formatDate(
            new Date(e.transactionDate)
          )}</td>
			<td>${e.name}</td>
			<td>_</td>
			<td>&#8377;${e.price}</td>
			<td>&#8377;${balance}</td></tr>`);
        }
      });
      NProgress.done();
    }
  });
});

function formatDate(date) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
}
