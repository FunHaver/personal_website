let boxes = document.getElementsByClassName("portfolio-item");
let doc = document.getElementsByTagName("html")[0];
let maxScrollY = doc.scrollHeight - window.innerHeight;
let currentPosY = window.scrollY;
let previousScrollZone;
let scrollZone;
let scrollListenerOn = false;
let ticking = false;

function handleResize() {
    maxScrollY = doc.scrollHeight - window.innerHeight;
    return maxScrollY;
}


function screenCheck() {

    if(screen.width < 980 && scrollListenerOn === false) {
        
        scrollListenerOn = true;
        document.addEventListener("scroll", ()=> {
            if (!ticking) {
                window.requestAnimationFrame(function() {
        
                    addHighlight();
                    ticking = false;
                });
                ticking = true;
            }
        })
    } else if(screen.width >= 980 && scrollListenerOn === true) {
        document.removeEventListener("scroll");
        scrollListenerOn = false;
        return;
    } else {
        return;
    }
}

function addHighlight() {

    let currentPosY = window.scrollY;
    let maxScrollY = doc.scrollHeight - window.innerHeight;
    
    previousScrollZone = scrollZone;

    scrollZone = Math.floor((currentPosY/maxScrollY) * 5);
    
    if(scrollZone === previousScrollZone) {
        return;
    } else {
        for(let i = 0; i < boxes.length; i++) {
            if(scrollZone === i) {
                boxes[i].classList.add("portfolio-highlight");
                boxes[i].children[0].children[0].classList.add("portfolio-title-highlight");
            } else {
                boxes[i].classList.remove("portfolio-highlight");
                boxes[i].children[0].children[0].classList.remove("portfolio-title-highlight");
            }
        }
    }
}

document.addEventListener("resize", handleResize);
screenCheck();