const addTopOfContainerToPage = () => {
    
        document.getElementById('topOfContainer').innerHTML = "\
            <div class='weekProgress'>\
            <p>YOUR 1 WEEK PROGRESS</p>\
            <div class='weekProgressChart' >\
                <table>\
                    <tr>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                            <td><img></td>\
                        </tr>\
                        <tr>\
                                <td><p></p></td>\
                                <td><p></p></td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                                <td><p></p> </td>\
                            </tr>\
                        </table>\
            </div>\
        </div>\
        <div class='weeksAndButtons'>\
        <div class='arrows' onclick='decrementContent(this)' style='opacity:0'>\
            <img src='images/LeftArrow.png'>\
        </div>\
        <div class='numberOfWeek' >\
            <p class='getWeek' >Week 1</p>\
        </div>\
        <div class='arrows' onclick='incrementContent(this)'>\
            <img src='images/RightArrow.png'>\
        </div>\
    </div>\
        <div class='selectProtein'>\
            <p>SELECT YOUR PROTEIN OPTIONS</p>\
            <div class='proteinOptions'>\
                <img>\
                <img>\
                <img>\
                <img>\
                <img>\
            </div>\
        </div>\
    </div>"
    }
    