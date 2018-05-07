const loadJSON = () => {
    var value = $.ajax({
        url: 'https://rawgit.com/DanielLepszy/Front-end-excercise/work/table-data.json',
        async: false // 
    }).responseText;
    return JSON.parse(value);
}
const data = loadJSON();
const setProteinImages = () => {
    const proteinImages = document.getElementsByClassName("proteinOptions")[0].getElementsByTagName('img')
    proteinImages[0].src = data.selectedProtein[0].src;
    proteinImages[1].src = data.selectedProtein[1].src;
    proteinImages[2].src = data.selectedProtein[2].src;
    proteinImages[3].src = data.selectedProtein[8].src;
    proteinImages[4].src = data.selectedProtein[9].src;
}
const setWeekProgressImages = () => {
    const weekProgressImages = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('img')
    const numberOfWeeks = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('p');
    weekProgressImages[0].src = data.weekProgress[0].src;
    weekProgressImages[1].src = data.weekProgress[0].src;
    weekProgressImages[2].src = data.weekProgress[0].src;
    weekProgressImages[3].src = data.weekProgress[0].src;
    weekProgressImages[4].src = data.weekProgress[0].src;
    weekProgressImages[5].src = data.weekProgress[0].src;
    weekProgressImages[6].src = data.weekProgress[0].src;
    weekProgressImages[7].src = data.weekProgress[1].src;
    weekProgressImages[8].src = data.weekProgress[2].src;
    weekProgressImages[9].src = data.weekProgress[2].src;
    weekProgressImages[10].src = data.weekProgress[2].src;
    weekProgressImages[11].src = data.weekProgress[2].src;

    numberOfWeeks[0].innerText = 1;
    numberOfWeeks[1].innerText = 2;
    numberOfWeeks[2].innerText = 3;
    numberOfWeeks[3].innerText = 4;
    numberOfWeeks[4].innerText = 5;
    numberOfWeeks[5].innerText = 6;
    numberOfWeeks[6].innerText = 7;
    numberOfWeeks[7].innerText = 8;
    numberOfWeeks[8].innerText = 9;
    numberOfWeeks[9].innerText = 10;
    numberOfWeeks[10].innerText = 11;
    numberOfWeeks[11].innerText = 12;

}
const setHoursOnTheTable = () => {
    const getProperRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr');
  getProperRow[1].getElementsByTagName('td')[0].innerHTML  = data.hours[6].hour;
  getProperRow[2].getElementsByTagName('td')[0].innerHTML  = data.hours[9].hour;
  getProperRow[3].getElementsByTagName('td')[0].innerHTML  = data.hours[12].hour;
  getProperRow[4].getElementsByTagName('td')[0].innerHTML  = data.hours[15].hour;
  getProperRow[5].getElementsByTagName('td')[0].innerHTML  = data.hours[18].hour;

}
const setDishesToTheTable = () => {
    const breakfastRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[1].getElementsByTagName('td')
    const secondBreakfastRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[2].getElementsByTagName('td')
    const dinnerRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[3].getElementsByTagName('td')
    const dessertRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[4].getElementsByTagName('td')
    const supperRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[5].getElementsByTagName('td')

    breakfastRow[1].innerHTML=data.weeks[0].day[0].dishes.breakfast
}
const renderPage = () => {
    setProteinImages();
    setWeekProgressImages();
    setHoursOnTheTable();
    setDishesToTheTable();
}