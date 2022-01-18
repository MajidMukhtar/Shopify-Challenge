
// Gets picture of the day from Nasa API
function fetchData1() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP").then(response => {// data about the call
        return response.json()// shows the data from the call as a JavaScript object
    }).then(data => {// the data inside the response
 
        let date = data.date
        let title = data.title
        let image = data.hdurl
        let descrip = data.explanation 

        $("#pic1").attr("src", image)
        $("#title1").html(title)
        $("#text1").html(descrip)
        $("#date1").html(date)
    }).catch(error => {// if the call doesn't work, it will console log the error message
        console.log(error)
    })
}

fetchData1()

// Get a random Mars Picture from rover, Curiosisty

function fetchData2() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP").then(response => {// data about the call
        return response.json()// shows the data from the call as a JavaScript object
    }).then(data => {// the data inside the response
        let photos = data.photos
        let photoInfo = data.photos[10]
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
    

    // $("#nextBtn").onclick = function() {
    //     console.log()
    // }

console.log(data.photos[0 + 2])

    
        document.querySelector("#nextBtn").onclick = function() {
            for(let i = 0; i < photos.length; i++) {
                let nextPhoto = data.photos[i + 1]
                let img = nextPhoto.img_src
                $("#pic2").attr("src", img)

            }
        }


    }).catch(error => {// if the call doesn't work, it will console log the error message
        console.log(error)
    })
}




fetchData2()

// Get a random Mars Picture from rover, Spirit


function fetchData3() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP").then(response => {// data about the call
        return response.json()// shows the data from the call as a JavaScript object
    }).then(data => {// the data inside the response
       
        let photoInfo = data.photos[0]
        let roverInfo = photoInfo.rover


        let image = photoInfo.img_src
        let roverName = roverInfo.name
        let date = photoInfo.earth_date
        let launchDate = roverInfo.launch_date
        let landDate = roverInfo.landing_date
        let roverStatus = roverInfo.status
        
        // if($("#nextBtn").onclick = true) {
        //     photoInfo[ + 1]
        // }


        $("#pic3").attr("src", image)
        $("#title3").html("Rover Name: " + roverName)
        $("#date3").html(date)
        $("#text3").html(roverName + " was launched on " + launchDate + " and made landfall on Mars on " + landDate + "." + " It's status is currently " + roverStatus + ".")


    }).catch(error => {// if the call doesn't work, it will console log the error message
        console.log(error)
    })
}

fetchData3()    



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

// api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP