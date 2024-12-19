'use strict';
const peopleInput = document.getElementById('people');
const startStationInput = document.getElementById('startStation');
const hotelStateInput = document.getElementById('hotelState');
const resultDivision = document.getElementById('result-area');
const serchButton = document.getElementById('serch');

serchButton.addEventListener(
  'click',
  () => {
    const people = peopleInput.value;
    const startStation = startStationInput.value;
    const hotelState = hotelStateInput.value;
    if ((people.length === 0) || (startStation.length === 0) || (hotelState.length === 0)) {
      return;
    }
  }
)
