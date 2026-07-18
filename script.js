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
            break;
        case "Off":
            console.log("Turning Gay mode off");
            document.body.classList.remove("gay");
            break;
        case "Toggle":
            console.log("Toggling Gay mode");
            document.body.classList.toggle("gay");
            break;
        default:
            console.log("Usage: gaymode(On/Off/Toggle)")
            break;
    }
}