let getColor = () => {
    let randomnumber = Math.floor(Math.random() * 16777215);
    let randomcode = "#" + randomnumber.toString(16);
    console.log(randomnumber, randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerHTML = randomcode;

    navigator.clipboard.writeText(randomcode)
    
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();