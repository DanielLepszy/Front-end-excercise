const loadJSON = () => {
    var value = $.ajax({
        url: 'https://rawgit.com/DanielLepszy/Front-end-excercise/tested-branch/table-data.json',
        async: false // 
    }).responseText;
    return JSON.parse(value);
}
const data = loadJSON();

const showProtein = () => {
    const proteinImages = document.getElementsByClassName("proteinOptions")[0].getElementsByTagName('img')
    const sourceOfProteinsImage = ["cheese.png", "broccoli.png", "meat.png", "fish.png", "chicken.png"]
    const sourceOfNonProteinsImage = ["non-cheese.png", "non-broccoli.png", "non-meat.png", "non-fish.png", "non-chicken.png"]

    for (var i = 0; i < data.selectedProtein.length; i++) {
        if (data.selectedProtein[i].selected === true) {
            proteinImages[i].src = "images/" + sourceOfProteinsImage[i];
        } else {
            proteinImages[i].src = "images/" + sourceOfNonProteinsImage[i];
        }
     
    }
}
// const setWeekProgressImages = () => {
//     const weekProgressCircleImage = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('img')
//     const selectedAmountOfWeeks = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('p');
//     weekProgressCircleImage[0].src = data.weekProgress[0].src;
//     weekProgressCircleImage[1].src = data.weekProgress[0].src;
//     weekProgressCircleImage[2].src = data.weekProgress[0].src;
//     weekProgressCircleImage[3].src = data.weekProgress[0].src;
//     weekProgressCircleImage[4].src = data.weekProgress[0].src;
//     weekProgressCircleImage[5].src = data.weekProgress[0].src;
//     weekProgressCircleImage[6].src = data.weekProgress[0].src;
//     weekProgressCircleImage[7].src = data.weekProgress[1].src;
//     weekProgressCircleImage[8].src = data.weekProgress[2].src;
//     weekProgressCircleImage[9].src = data.weekProgress[2].src;
//     weekProgressCircleImage[10].src = data.weekProgress[2].src;
//     weekProgressCircleImage[11].src = data.weekProgress[2].src;

//     selectedAmountOfWeeks[0].innerText = 1;
//     selectedAmountOfWeeks[1].innerText = 2;
//     selectedAmountOfWeeks[2].innerText = 3;
//     selectedAmountOfWeeks[3].innerText = 4;
//     selectedAmountOfWeeks[4].innerText = 5;
//     selectedAmountOfWeeks[5].innerText = 6;
//     selectedAmountOfWeeks[6].innerText = 7;
//     selectedAmountOfWeeks[7].innerText = 8;
//     selectedAmountOfWeeks[8].innerText = 9;
//     selectedAmountOfWeeks[9].innerText = 10;
//     selectedAmountOfWeeks[10].innerText = 11;
//     selectedAmountOfWeeks[11].innerText = 12;

// }
const setWeekProgressImages = () => {
    const weekProgressCircleImage = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('img')
    const weekNumber = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('p');
    const selectedAmountOfWeeks = setWeeksInArray();
    const currentWeekOnTable = document.getElementsByClassName("numberOfWeek")[0].getElementsByTagName("p")[0].innerHTML;
    var amountOfProgress;
    for (var i = 0; i < selectedAmountOfWeeks.length; i++) {
        if (currentWeekOnTable === selectedAmountOfWeeks[i])
        {
            amountOfProgress = selectedAmountOfWeeks.indexOf(selectedAmountOfWeeks[i])
        }
        else{}
    }
    
    for (var i = 0; i < selectedAmountOfWeeks.length; i++) {
        if ( amountOfProgress > i) {
            weekProgressCircleImage[i].src= "images/Circle.png"
        }
        else if (amountOfProgress == i){
            weekProgressCircleImage[i].src= "images/emptyCircle.png"
        }
        else if ( amountOfProgress < i) {
            weekProgressCircleImage[i].src= "images/grayCircle.png"
        }
    }
    for (var i = 0; i < weekNumber.length; i++)
    {
        weekNumber[i].innerText = (i+1);
    }

}

const setHoursAndDaysOnTheTable = () => {
    const getProperRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr');

    getProperRow[1].getElementsByTagName('td')[0].innerHTML = data.hours[0].hour;
    getProperRow[2].getElementsByTagName('td')[0].innerHTML = data.hours[1].hour;
    getProperRow[3].getElementsByTagName('td')[0].innerHTML = data.hours[2].hour;
    getProperRow[4].getElementsByTagName('td')[0].innerHTML = data.hours[3].hour;
    getProperRow[5].getElementsByTagName('td')[0].innerHTML = data.hours[4].hour;

    getProperRow[0].getElementsByTagName('th')[1].innerHTML = data.weeks[0].Day[0].NumberOfDay
    getProperRow[0].getElementsByTagName('th')[2].innerHTML = data.weeks[0].Day[1].NumberOfDay
    getProperRow[0].getElementsByTagName('th')[3].innerHTML = data.weeks[0].Day[2].NumberOfDay
    getProperRow[0].getElementsByTagName('th')[4].innerHTML = data.weeks[0].Day[3].NumberOfDay
    getProperRow[0].getElementsByTagName('th')[5].innerHTML = data.weeks[0].Day[4].NumberOfDay
    getProperRow[0].getElementsByTagName('th')[6].innerHTML = data.weeks[0].Day[5].NumberOfDay
    getProperRow[0].getElementsByTagName('th')[7].innerHTML = data.weeks[0].Day[6].NumberOfDay
}
const setBreakfastToTheTable = () => {
    const breakfastRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[1].getElementsByTagName('td')
    breakfastRow[1].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[0].Dishes[0].breakfast
    breakfastRow[2].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[1].Dishes[0].breakfast
    breakfastRow[3].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[2].Dishes[0].breakfast
    breakfastRow[4].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[3].Dishes[0].breakfast
    breakfastRow[5].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[4].Dishes[0].breakfast
    breakfastRow[6].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[5].Dishes[0].breakfast
    // breakfastRow[2].getElementsByTagName('img')[0].style="filter: grayscale(100%)";   
}
const setSecondBreakfastToTheTable = () => {
    const secondBreakfastRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[2].getElementsByTagName('td')
    secondBreakfastRow[1].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[0].Dishes[1].secondBreakfast
    secondBreakfastRow[2].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[1].Dishes[1].secondBreakfast
    secondBreakfastRow[3].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[2].Dishes[1].secondBreakfast
    secondBreakfastRow[4].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[3].Dishes[1].secondBreakfast
    secondBreakfastRow[5].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[4].Dishes[1].secondBreakfast
    secondBreakfastRow[6].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[5].Dishes[1].secondBreakfast
}
const setDinnerToTheTable = () => {
    const dinnerRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[3].getElementsByTagName('td')
    dinnerRow[1].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[0].Dishes[2].dinner
    dinnerRow[2].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[1].Dishes[2].dinner
    dinnerRow[3].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[2].Dishes[2].dinner
    dinnerRow[4].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[3].Dishes[2].dinner
    dinnerRow[5].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[4].Dishes[2].dinner
    dinnerRow[6].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[5].Dishes[2].dinner
}
const setDessertToTheTable = () => {
    const dessertRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[4].getElementsByTagName('td')
    dessertRow[1].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[0].Dishes[3].dessert
    dessertRow[2].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[1].Dishes[3].dessert
    dessertRow[3].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[2].Dishes[3].dessert
    dessertRow[4].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[3].Dishes[3].dessert
    dessertRow[5].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[4].Dishes[3].dessert
    dessertRow[6].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[5].Dishes[3].dessert
}
const setSupperToTheTable = () => {
    const supperRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[5].getElementsByTagName('td')
    supperRow[1].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[0].Dishes[4].supper
    supperRow[2].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[1].Dishes[4].supper
    supperRow[3].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[2].Dishes[4].supper
    supperRow[4].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[3].Dishes[4].supper
    supperRow[5].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[4].Dishes[4].supper
    supperRow[6].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[5].Dishes[4].supper
}
const setLevelOfCarbs = () => {
    const carbsRow = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[6].getElementsByTagName('td')
    carbsRow[1].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[0].Dishes[5].carbs
    carbsRow[2].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[1].Dishes[5].carbs
    carbsRow[3].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[2].Dishes[5].carbs
    carbsRow[4].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[3].Dishes[5].carbs
    carbsRow[5].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[4].Dishes[5].carbs
    carbsRow[6].getElementsByTagName('p')[0].innerText = data.weeks[0].Day[5].Dishes[5].carbs
}
const setDumbellImages = () => {
    const DumbellImages = document.getElementsByClassName("tableCells")[0].getElementsByTagName('tr')[6].getElementsByTagName('td')
    proteinImages[1].src = data.dumbells[0].src;
    proteinImages[2].src = data.dumbells[0].src;
    proteinImages[3].src = data.dumbells[1].src;
    proteinImages[4].src = data.dumbells[1].src;
    proteinImages[5].src = data.dumbells[1].src;
}


const addContentOfHTMLElements = () => {
    addTopContentToPage();
    addTopOfContainerToPage();
    addMainTableToPage();
    addFooterContentToPage();
}

const renderPage = () => {
    addContentOfHTMLElements();
    showProtein()
    // setProteinImages();
    setWeekProgressImages();
    setHoursAndDaysOnTheTable();
    setBreakfastToTheTable();
    setSecondBreakfastToTheTable();
    setDinnerToTheTable();
    setDessertToTheTable();
    setSupperToTheTable();
}