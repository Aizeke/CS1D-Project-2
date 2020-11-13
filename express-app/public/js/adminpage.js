/* eslint-disable no-undef */
$(document).ready(function () {
  function buildTable (data) {
    let table = $('#nflInformation')

    for (let i = 0; i < data.length; i++) {
      const row = `<tr> 
                    <td>${data[i].id}{</td>
                    <td>${data[i].distance}</td>
                    <td>${data[i].beginningstadium}</td>
                    <td>${data[i].teamname}</td>
                    <td>${data[i].endingstadium}</td>
                </tr>`
      table.html(row)
    }
  }
})
