document.getElementById("blackBtn").addEventListener("click", () => {
    document.body.classList.toggle("black-bg");
});

/*
document.getElementById("gayBtn").addEventListener("click", () => {
    document.body.classList.toggle("gay");
});
*/

function gaymode(onOffToggle) {
    switch (onOffToggle) {
        case "On":
            console.log("Turning Gay mode on");
            document.body.classList.add("gay");
        case "Off":
            console.log("Turning Gay mode off");
            document.body.classList.remove("gay");
        case "Toggle":
            console.log("Toggling Gay mode");
            document.body.classList.toggle("gay");
        default:
            console.log("Usage: gaymode(On/Off/Toggle)")
    }
}