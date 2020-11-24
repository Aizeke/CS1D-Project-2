$(document).ready(function () {
  let nflDistanceArr = []

  $.ajax({
    method: 'GET',
    url: '/distance/all',
    success: function (res) {
      nflDistanceArr = res
      buildDistanceTable(nflDistanceArr)
    }
  })
})

function buildDistanceTable (data) {
  const table = $('#nflDistance')

  for (let i = 0; i < data.length; i++) {
    const row = `<tr>
                  <th scope="row">${data[i].id}</th>
                  <td>${data[i].distance}</td>
                  <td>${data[i].beginningstadium}</td>
                  <td>${data[i].teamname}</td>
                  <td>${data[i].endingstadium}</td>
              </tr>`
    table.append(row)
  }
}
