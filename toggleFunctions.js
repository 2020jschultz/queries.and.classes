function green25(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("green25")
    }
       
}
    


function green50(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("green50")
    }
}


function green75(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("green75")
    }
}


function green100(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("green100")
    }
}


function smallToggle(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("quarter_box")
    }
}


function mediumToggle(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("half_box")
    }
}

function largeToggle(){
    const doc = document;
    let divs = doc.querySelectorAll(".boxes > div");
    for(let k = 0; k < divs.length; k++){
        divs[k].classList.toggle("full_box")
    }
}