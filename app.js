
/*
 name: getNasaPictureOfDay
 description: Gets picture of the day from Nasa API
*/

function getNasaPictureOfDay() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP")
    .then((resp) => resp.json())
    .then(data => {

        $("#pic1").attr("src", data.hdurl)
        $("#title1").html(data.title)
        $("#text1").html(data.explanation )
        $("#date1").html(data.date)

    }).catch(error => {// if the call doesn't work, it will console log the error message
        console.log(error)
    })
}

/*
 name: getRoverPicture
 description: Get a random Mars Picture from rover, Curiosisty
*/

let pictureSelection = 0  // index holding state for user picture selection

function getRoverPictureCuriosity() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP")
    .then((resp) => resp.json())
    .then(data => {
        let photoInfo = data.photos[pictureSelection]
        
        let roverInfo = photoInfo.rover
        let image = photoInfo.img_src
        let roverName = roverInfo.name
        let date = photoInfo.earth_date
        let launchDate = roverInfo.launch_date
        let landDate = roverInfo.landing_date
        let roverStatus = roverInfo.status

        $("#pic2").attr("src", image)
        $("#title2").html("Rover Name: " + roverName)
        $("#date2").html(date)
        $("#text2").html(roverName + " was launched on " + launchDate + " and made landfall on Mars on " + landDate + "." + " It's status is currently " + roverStatus + ".")
    
        document.querySelector("#nextBtn").onclick = function() {
            pictureSelection = pictureSelection + 1
            $("#pic2").attr("src", data.photos[pictureSelection].img_src)
        }
        
    }).catch(error => {
        console.log(error)
    })
}





// Get a random Mars Picture from rover, Spirit


function getRoverPictureOpportunity() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP")
    .then((resp) => resp.json())
    .then(data => {// the data inside the response
       
        let photoInfo = data.photos[0]
        let roverInfo = photoInfo.rover


        let image = photoInfo.img_src
        let roverName = roverInfo.name
        let date = photoInfo.earth_date
        let launchDate = roverInfo.launch_date
        let landDate = roverInfo.landing_date
        let roverStatus = roverInfo.status
        
      
        $("#pic3").attr("src", image)
        $("#title3").html("Rover Name: " + roverName)
        $("#date3").html(date)
        $("#text3").html(roverName + " was launched on " + launchDate + " and made landfall on Mars on " + landDate + "." + " It's status is currently " + roverStatus + ".")

        document.querySelector("#nextBtn2").onclick = function() {
            pictureSelection = pictureSelection + 1
            $("#pic3").attr("src", data.photos[pictureSelection].img_src)
        }


    }).catch(error => {// if the call doesn't work, it will console log the error message
        console.log(error)
    })
}




// Shows more and less text
document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext
        }else {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
    })
})



// Change like button text
function like(text) {
    if(text.innerHTML == 'Like') {
    text.innerHTML = 'Unlike'
    }else if (text.innerHTML == 'Unlike') {
        text.innerHTML = 'Like'
    }
}

getNasaPictureOfDay()
getRoverPictureCuriosity()
getRoverPictureOpportunity()