let endDate = "27 march 2025 1:06 PM";

document.getElementById("end-date").innerText = endDate;
let inputs = document.querySelectorAll("input");

  function clock () {
    let end = new Date(endDate)
    let now = new Date()
    let diff = (end - now) / 1000;
    console.log(diff);
    if (diff <= 0) {
        document.getElementById("end-date").innerText = "Time is up 🎉";
        return;
    }
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value =Math.floor(diff / 3600)% 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock();
setInterval(
    () => {
        clock()
    },
    1000
)