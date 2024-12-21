'use strict';
const peopleInput = document.getElementById('people');
const startStationSelect = document.getElementById('startStation');
const hotelLankSelect= document.getElementById('hotelLank');
const hotelDateInput = document.getElementById('hotelDate');
const resultDivision = document.getElementById('result-area');
const serchButton = document.getElementById('serch');
startStationSelect.onchange = function start(){
  let Station = this.value;
  //console.log(Station);
  return Station;
}
hotelLankSelect.onchange = function hotel(){
  let Lank = this.value;
  //console.log(Lank);
  return Lank;
}


serchButton.addEventListener(
  'click',
  () => {
    const people = peopleInput.value;
    const startStation = startStationSelect.onchange('Station');
    //console.log(startStation);
    const hotelLank = hotelLankSelect.onchange('Lank');
    //console.log(hotelLank);
    const hotelDate = hotelDateInput.value;
    if ((people.length === 0) || (startStation.length === 0) || (hotelLank.length === 0) || (hotelDate.length === 0)) {
      return;
    }
    





    resultDivision.innerText = '';
    const heading = document.createElement('h3');
    heading.innerText = '計算結果';
    resultDivision.appendChild(heading);

    const paragraph = document.createElement('p');
    const result = serch(people, startStation, hotelLank);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);
  }

);

const answers = [
  '遠征費は総額###money###円です。そのうち交通費は###station###円、宿泊費は###hotel###円、食費は###meal###円です。'
]


function serch(people, startStation, hotelLank) {
  let result = answers[0];
  console.log(people);
  console.log(startStation);
  console.log(hotelLank);
  function station(startStation) {
    if (startStation == '宇都宮駅') {
      let smoney = 1980 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '小山駅') {
      let smoney = 1518 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '栃木駅') {
      let smoney = 1694 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '那須塩原駅') {
      let smoney = 2640 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '佐野駅') {
      let smoney = 1980 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '石橋駅') {
      let smoney = 1694 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '雀宮駅') {
      let smoney = 1980 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '東武宇都宮駅') {
      let smoney = 1434 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '野木駅') {
      let smoney = 1166 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '間々田駅') {
      let smoney = 1342 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '小金井駅') {
      let smoney = 1518 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '西那須野駅') {
      let smoney = 2640 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '自治医大駅') {
      let smoney = 1694 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '氏家駅') {
      let smoney = 2310 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '矢板駅') {
      let smoney = 2640 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '足利市駅') {
      let smoney = 1992 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '岡本駅') {
      let smoney = 1980 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '黒磯駅') {
      let smoney = 3080 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }else if (startStation == '宝積寺駅') {
      let smoney = 2310 * people * 2;
      return smoney;
      //result = result.replaceAll('###station###', smoney);
    }
  }
  function hotel(hotelLank) {
    if (hotelLank == '5つ星ホテル（1泊50000円）') {
      let hmoney = 50000 * people * hotelDate;
      return hmoney;
      //result = result.replaceAll('###hotel###', hmoney);
    }else if (hotelLank == '4つ星ホテル（1泊35000円）') {
      let hmoney = 35000 * people * hotelDate;
      return hmoney;
      //result = result.replaceAll('###hotel###', hmoney);
    }else if (hotelLank == '3つ星ホテル（1泊15000円）') {
      let hmoney = 15000 * people * hotelDate;
      return hmoney;
      //result = result.replaceAll('###hotel###', hmoney);
    }else if (hotelLank == 'ビジネスホテル（1泊7500円）') {
      let hmoney = 7500 * people * hotelDate;
      return hmoney;
      //result = result.replaceAll('###hotel###', hmoney);
    }
  }
  function meal(hotelDate) {
    let mmoney = 6000 * people * hotelDate
    return mmoney;
    //result = result.replaceAll('###meal###', mmoney);
  }


  const smoney = station(startStation);
  const hmoney = hotel(hotelLank);
  const mmoney = meal(hotelDate);
  let allmoney = smoney + hmoney + mmoney;
  let result1 = result.replaceAll('###money###', allmoney);
  let result2 = result1.replaceAll('###station###', smoney);
  let result3 = result2.replaceAll('###hotel###', hmoney);
  let result4 = result3.replaceAll('###meal###', mmoney);

  return result4;
}
