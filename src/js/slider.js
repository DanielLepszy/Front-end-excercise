const getWeekFromPage = () => {
    return document.getElementsByClassName("getWeek")[0].innerHTML[5];
}

const incrementNumberOfWeek = (x) => {
    var currentNumberOfWeek = getWeekFromPage();
    document.getElementsByClassName("arrows")[0].style.display = 'block'
    if (currentNumberOfWeek >= 4) {
        x.style.display = 'none';
        changeNumberOfDays()
    } else {
        currentNumberOfWeek++
        document.getElementsByClassName("getWeek")[0].innerHTML = "Week " + currentNumberOfWeek
        changeNumberOfDays()
    }
}

const decrementNumberOfWeek = (x) => {
    var currentNumberOfWeek = getWeekFromPage();
    document.getElementsByClassName("arrows")[1].style.display = 'block'
    if (currentNumberOfWeek <= 1) {
        x.style.display = 'none';
        changeNumberOfDays()
    } else {
        currentNumberOfWeek--
        document.getElementsByClassName("getWeek")[0].innerHTML = "Week " + currentNumberOfWeek
        changeNumberOfDays()
    }
}

const changeNumberOfDays = () => {
    var currentNumberOfWeek = getWeekFromPage();
    var weekDay = document.getElementsByTagName("th");
    for (var i = 7; i >= 1; i--) {
        weekDay[i].innerHTML = "DAY " + ((currentNumberOfWeek * 7) - (-i + 7))
    }
}