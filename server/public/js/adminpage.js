$(document).ready(function () {
  let nflDistanceArr = []
  let nflInformationArr = []

  $('#loadDistance').click(function () {
    nflDistanceArr = []
    nflInformationArr = []

    const distanceTH = $('#distanceTH')
    distanceTH.html('')
    $('#informationTH').html('')

    const th = `
    <th class="sortTH" scope="col" data-column="id" data-order="desc">ID &#9650</th>
    <th class="sortTH" scope="col" data-column="distance" data-order="desc"">Distance &#9650</th>
    <th class="sortTH" scope="col" data-column="beginningstadium" data-order="desc"">Beginning Stadium &#9650</th>
    <th class="sortTH" scope="col" data-column="teamname" data-order="desc"">Team Name &#9650</th>
    <th class="sortTH" scope="col" data-column="endingstadium" data-order="desc"">Ending Stadium &#9650</th>
    <th></th>`

    distanceTH.append(th)

    $.ajax({
      method: 'GET',
      url: '/distance/all',
      success: function (res) {
        nflDistanceArr = res
        buildDistanceTable(nflDistanceArr)
      }
    })
  })

  $('#loadInformation').click(function () {
    nflDistanceArr = []
    nflInformationArr = []

    const informationTH = $('#informationTH')
    $('#distanceTH').html('')
    informationTH.html('')

    const th = `
    <th class="sortTH" scope="col" data-column="id" data-order="desc">ID &#9650</th>
    <th class="sortTH" scope="col" data-column="conference" data-order="desc">Conference &#9650</th>
    <th class="sortTH" scope="col" data-column="division" data-order="desc">Division &#9650</th>
    <th class="sortTH" scope="col" data-column="stadiumname" data-order="desc">Stadium Name &#9650</th>
    <th class="sortTH" scope="col" data-column="seatingcapacity" data-order="desc">Seating Capacity &#9650</th>
    <th class="sortTH" scope="col" data-column="surfacetype" data-order="desc">Surface Type &#9650</th>
    <th class="sortTH" scope="col" data-column="teamname" data-order="desc">Team Name &#9650</th>
    <th class="sortTH" scope="col" data-column="stadiumrooftype" data-order="desc">Stadium Roof Type &#9650</th>
    <th class="sortTH" scope="col" data-column="location" data-order="desc">Location &#9650</th>
    <th class="sortTH" scope="col" data-column="dateopened" data-order="desc">Date Opened &#9650</th>
    <th></th>`

    informationTH.append(th)

    $.ajax({
      method: 'GET',
      url: '/information/all',
      success: function (res) {
        nflInformationArr = res
        buildInformationTable(nflInformationArr)

        console.log(nflInformationArr)
        console.log(nflDistanceArr)
      }
    })
  })

  $('#searchTable').on('keyup', function () {
    const value = $(this).val()
    const data = searchTable(value, nflDistanceArr)
    buildDistanceTable(data)
  })

  $('#distanceTH').on('click', '.sortTH', function () {
    const column = $(this).data('column')
    const order = $(this).data('order')
    let text = $(this).html()
    text = text.substring(0, text.length - 1)

    if (order === 'desc') {
      $(this).data('order', 'asc')
      nflDistanceArr = nflDistanceArr.sort((a, b) => a[column] > b[column] ? 1 : -1)
      text += '&#9660'
    } else {
      $(this).data('order', 'desc')
      nflDistanceArr = nflDistanceArr.sort((a, b) => a[column] < b[column] ? 1 : -1)
      text += '&#9650'
    }
    $(this).html(text)
    buildDistanceTable(nflDistanceArr)
  })

  $('#informationTH').on('click', '.sortTH', function () {
    const column = $(this).data('column')
    const order = $(this).data('order')
    let text = $(this).html()
    text = text.substring(0, text.length - 1)

    if (order === 'desc') {
      $(this).data('order', 'asc')
      nflInformationArr = nflInformationArr.sort((a, b) => a[column] > b[column] ? 1 : -1)
      text += '&#9660'
    } else {
      $(this).data('order', 'desc')
      nflInformationArr = nflInformationArr.sort((a, b) => a[column] < b[column] ? 1 : -1)
      text += '&#9650'
    }

    $(this).html(text)
    buildInformationTable(nflInformationArr)
  })

  $('#nflDistance').on('click', '.deleteRow', function () {
    if (confirm('Detele the Entry?')) {
      $.ajax({
        method: 'DELETE',
        url: '/distance/delete/' + $(this).data('id'),
        success: function (res) {
          console.log(res)
        }
      })
    }
  })

  $('#nflInformation').on('click', '.deleteRow', function () {
    if (confirm('Detele the Entry?')) {
      $.ajax({
        method: 'DELETE',
        url: '/information/delete/' + $(this).data('id'),
        success: function (res) {
          console.log(res)
        }
      })
    }
  })
})

function searchTable (value, data) {
  const filteredData = []

  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase()
    const teamName = data[i].teamname.toLowerCase()

    if (teamName.includes(value)) {
      filteredData.push(data[i])
    }
  }

  return filteredData
}

function buildDistanceTable (data) {
  const table = $('#nflDistance')

  $('#nflInformation').html('')
  table.html('')

  for (let i = 0; i < data.length; i++) {
    const row = `<tr>
                  <th scope="row">${data[i].id}</th>
                  <td>${data[i].distance}</td>
                  <td>${data[i].beginningstadium}</td>
                  <td>${data[i].teamname}</td>
                  <td>${data[i].endingstadium}</td>
                  <th class="deleteRow" data-id=${data[i].id}>&#128465</td>
              </tr>`
    table.append(row)
  }
}

function buildInformationTable (data) {
  const table = $('#nflInformation')

  $('#nflDistance').html('')
  table.html('')

  for (let i = 0; i < data.length; i++) {
    const row = `<tr>
                  <th scope="row">${data[i].id}</th>
                  <td>${data[i].conference}</td>
                  <td>${data[i].division}</td>
                  <td>${data[i].stadiumname}</td>
                  <td>${data[i].seatingcapacity}</td>
                  <td>${data[i].surfacetype}</td>
                  <td>${data[i].teamname}</td>
                  <td>${data[i].stadiumrooftype}</td>
                  <td>${data[i].location}</td>
                  <td>${data[i].dateopened}</td>
                  <th class="deleteRow" data-id=${data[i].id}>&#128465</td>
              </tr>`
    table.append(row)
  }
}
