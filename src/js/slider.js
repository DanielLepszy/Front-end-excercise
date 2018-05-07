const sliderContent = ["Week 1", "Week 2", "Week 3", "Week 4"]

const getContentFromPage = () => {
    return document.getElementsByClassName("getWeek")[0].innerHTML;
}

const incrementContent = (x) => {
    var currentContentOfWeek = getContentFromPage();

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

}

const decrementContent = (x) => {
    var currentContentOfWeek = getContentFromPage();
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
}
