const setWeeksInArray =() =>
{
    const numberOfWeeks = data.weekProgress[0].amountOfSelectedWeeks
    var arrayOfWeeks=[];
    for(var i=1;i<=numberOfWeeks;i++){
        arrayOfWeeks.push(("Week "+i))
    }
    return arrayOfWeeks;
}
const getContentFromPage = () => {
    return document.getElementsByClassName("getWeek")[0].innerHTML;
}

const incrementContent = (x) => {
    const currentContentOfWeek = getContentFromPage();
    const sliderContent = setWeeksInArray();

    if (currentContentOfWeek !== sliderContent[(sliderContent.length - 1)]) {
        document.getElementsByClassName("arrows")[0].style.opacity = "1";
        var i = 0;
        while (currentContentOfWeek !== sliderContent[i]) {
            i++
        }

        document.getElementsByClassName("getWeek")[0].innerHTML = sliderContent[i + 1]
        if (i === sliderContent.length - 2) {
            x.style.opacity = "0";
        }
    }
    setWeekProgressImages();
   
}

const decrementContent = (x) => {
    const currentContentOfWeek = getContentFromPage();
    const sliderContent = setWeeksInArray();
    
    if (currentContentOfWeek !== sliderContent[0]) {
        document.getElementsByClassName("arrows")[1].style.opacity = "1";
        var i = 0;
        while (currentContentOfWeek !== sliderContent[i]) {
            i++
        }
        document.getElementsByClassName("getWeek")[0].innerHTML = sliderContent[i - 1]
        if (i === 1 ){
            x.style.opacity = "0";
        }
    }
    setWeekProgressImages();
}
