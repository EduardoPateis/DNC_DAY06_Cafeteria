

function hiddeButton(selector){
    let button = document.querySelectorAll(selector)
    button[1].style.visibility="hidden"  
}

function HighlightButton(selector){
    let button = Array.from(document.querySelectorAll(selector))
    button[1].style.visibility="visible"
}
