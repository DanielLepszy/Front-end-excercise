const loadJSON = () => {
    var value = $.ajax({
        url: 'https://rawgit.com/DanielLepszy/Front-end-excercise/work/table-data.json',
        async: false // 
    }).responseText;
    return JSON.parse(value);
}
const data = loadJSON();
const setProteinImages = () =>
{
    const proteinImages = document.getElementsByClassName("proteinOptions")[0].getElementsByTagName('img')
    proteinImages[0].src =data.selectedProtein[0].src;
    proteinImages[1].src =data.selectedProtein[1].src;
    proteinImages[2].src =data.selectedProtein[2].src;
    proteinImages[3].src =data.selectedProtein[8].src;
    proteinImages[4].src =data.selectedProtein[9].src;
}
const setWeekProgressImages = () =>
{
    const weekProgressImages = document.getElementsByClassName("weekProgressChart")[0].getElementsByTagName('img')
    weekProgressImages[1].src =data.weekProgress[1].src;
    weekProgressImages[1].src =data.weekProgress[1].src;
    weekProgressImages[2].src =data.weekProgress[2].src;
    weekProgressImages[3].src =data.weekProgress[1].src;
    weekProgressImages[4].src =data.weekProgress[2].src;
}

const renderPage = () =>{
    setProteinImages();
    setWeekProgressImages();
}