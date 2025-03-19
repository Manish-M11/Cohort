function changeBGColor(color){
    document.body.style.backgroundColor = color;
}


function changeBGColorWhite(){
    document.body.style.backgroundColor = 'white'
}

//event
const themeButton = document.getElementById('theme-button');

console.log(themeButton);

themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    

    if(!currentColor || currentColor == 'white'){
        changeBGColor("black");
        themeButton.innerText = "Light Mode"
    }else{
        changeBGColor("white");
        themeButton.innerText = "Dark Mode"
    }
})