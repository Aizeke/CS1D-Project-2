// document.addEventListener('DOMContentLoaded', function(){
//   const arr = [
//     { id: '0', distance: '870', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'AT&T Stadium' },
//     { id: '1', distance: '650', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'Levis Stadium' },
//     { id: '2', distance: '1115', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'NRG Stadium' },
//     { id: '3', distance: '580', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'Broncos Stadium at Mile High' }
//   ]
//   buildTable(arr)
//   function buildTable (data) {
//     const table = document.getElementById("nflInformation")

//     for (let i = 0; i < data.length; i++) {
//       const row = `<tr>
//                     <td>${data[i].id}</td>
//                     <td>${data[i].distance}</td>
//                     <td>${data[i].beginningstadium}</td>
//                     <td>${data[i].teamname}</td>
//                     <td>${data[i].endingstadium}</td>
//                 </tr>`
//       table.append(row)
//     }
//   }
// }, false);

$(document).ready(function () {
  const arr = [
    { id: '0', distance: '870', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'AT&T Stadium' },
    { id: '1', distance: '650', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'Levis Stadium' },
    { id: '2', distance: '1115', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'NRG Stadium' },
    { id: '3', distance: '580', beginningstadium: 'State Farm Stadium', teamname: 'Arizona Cardinals', endingstadium: 'Broncos Stadium at Mile High' }
  ]

  buildTable(arr)

  function buildTable (data) {
    const table = $('#nflInformation')

    for (let i = 0; i < data.length; i++) {
      const row = `<tr> 
                    <td>${data[i].id}</td>
                    <td>${data[i].distance}</td>
                    <td>${data[i].beginningstadium}</td>
                    <td>${data[i].teamname}</td>
                    <td>${data[i].endingstadium}</td>
                </tr>`
      table.append(row)
    }
  }
})
