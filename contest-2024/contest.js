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

    resultDivision.innerText = '';
    const heading = document.createElement('h3');
    heading.innerText = '計算結果';
    resultDivision.appendChild(heading);

    const paragraph = document.createElement('p');
    const result = serch(people);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);
  }

);

const answers = [
  '遠征費は総額###money###円です。そのうち交通費は###station###円、宿泊費は###hotel###円です。'
]

function serch(people) {
  function station(startStation) {
    

  }
}
