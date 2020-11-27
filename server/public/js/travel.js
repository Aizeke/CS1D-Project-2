$(document).ready(function () {
  // API KEYS
  // MAP BOX
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWl6ZWtlIiwiYSI6ImNrMnAyNWIyZTAxMHczY3A0azFucHJyMzEifQ.eaBU6RYrSCwd079_pGSV6A'
  // DATA
  let informationArr = []
  let distanceArr = []
  // FOR MARKERS
  const geojson = {
    type: 'FeatureCollection',
    features: []
  }

  // AJAX REQUESTS
  $.ajax({
    method: 'GET',
    url: '/information/all',
    success: function (res) {
      informationArr = res
      geocoding(informationArr)
      loadStadiumNames(informationArr)
    }
  })

  $.ajax({
    method: 'GET',
    url: '/distance/all',
    success: function (res) {
      distanceArr = res
      loadTeamNames(distanceArr)
    }
  })

  // ON CLICK FUNCTIONS
  $('#submitStartChoices').click(function () {
    $('.floating').removeClass('display-none')
    $('#prompt').addClass('display-none')

    loadPills()

    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement('div')
      el.className = 'marker'

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map)
    })
  })

  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/aizeke/ckhy7syeo1js519pkeqdqfm9r', // stylesheet location
    center: [-118, 40], // starting position [lng, lat]
    dragPan: false, // disable drag
    scrollZoom: false, // disable scroll zoom
    zoom: 3.2 // starting zoom
  })

  map.doubleClickZoom.disable()

  // FUNCTION TO LOAD ALL THE POINTS TO THE MAP USING GEOCODING
  const geocoding = function (data) {
    for (let i = 0; i < data.length; i++) {
      $.ajax({
        method: 'GET',
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + data[i].stadiumname.trim() + '.json?access_token=' + mapboxgl.accessToken + '&limit=1',
        success: function (res) {
          for (let i = 0; i < res.features.length; i++) {
            const tempFeatures = {
              type: res.features[0].type,
              geometry: {
                type: res.features[0].geometry.type,
                coordinates: [res.features[0].geometry.coordinates[0], res.features[0].geometry.coordinates[1]]
              },
              properties: {
                title: res.features[0].text,
                description: res.features[0].properties.address
              }
            }
            geojson.features.push(tempFeatures)
          }
        }
      })
    }
  }
})

// FUNCTION TO LOAD DATA INTO THE COMBO BOXES
const loadStadiumNames = function (data) {
  const stadiumTable = $('.loadStadiumNameOptions')

  for (let i = 0; i < data.length; i++) {
    stadiumTable.append(new Option(data[i].stadiumname))
  }

  setSelectPickerData(stadiumTable)
}

const loadTeamNames = function (data) {
  const teamTable = $('.loadTeamNameOptions')

  const tempArr = []

  data.forEach(element => {
    tempArr.push(element.teamname)
  })
  const uniqueSet = new Set(tempArr)

  const backToArray = [...uniqueSet]

  for (let i = 0; i < backToArray.length; i++) {
    teamTable.append(new Option(backToArray[i]))
  }

  setSelectPickerData(teamTable)
}

const loadPills = function () {
  const container = $('.badges')

  const badgeHTML = `
  <span class="badge badge-pill badge-dark" value="${$('#conference').val()}">${$('#conference').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#division').val()}">${$('#division').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#stadiumname').val()}">${$('#stadiumname').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#seatingCapacity').val()}">${$('#seatingCapacity').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#surfaceType').val()}">${$('#surfaceType').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#teamname').val()}">${$('#teamname').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#stadiumrooftype').val()}">${$('#stadiumrooftype').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#location').val()}">${$('#location').val()} &#x2715</span>
  <span class="badge badge-pill badge-dark" value="${$('#dateopened').val()}">${$('#dateopened').val()} &#x2715</span>`

  container.append(badgeHTML)
}

/**
 *
 * @param {*} element Must be JQuery element
 */
const setSelectPickerData = function (element) {
  element.addClass('selectpicker')
  element.attr('multiple', 'multiple')
  element.data('live-search', true)
  element.data('actions-box', true)
  element.data('width', 'fit')
  element.data('selected-text-format', 'count')
  element.data('size', 5)

  $('.selectpicker').selectpicker('refresh')
}
