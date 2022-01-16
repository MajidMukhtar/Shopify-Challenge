
// Gets information from the Nasa API
function fetchData() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=mkjbyQXrVc6Ku8oI2Pl6G640WBWuhdJLxt8vBSWP").then(response => {// info about the call
        return response.json()// shows the data from the call as a JavaScript object
    }).then(info => {// the data inside the response
        console.log(info)
        let date = info.date
        let title = info.title
        let image = info.hdurl
        let descrip = info.explanation

        $(".card-img-top").attr("src", image)
        $(".card-title").html(title)
        $(".card-text").html(descrip)
        $(".card-date").html(date)
    }).catch(error => {// if the call doesn't work, it will console log the error message
        console.log(error)
    })
}

fetchData()


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