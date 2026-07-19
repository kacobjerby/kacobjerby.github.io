document.getElementById("blackBtn").addEventListener("click", () => {
    document.body.classList.toggle("black-bg");
});

const r = document.getElementById("rValue")
const g = document.getElementById("gValue")
const b = document.getElementById("bValue")
submitBtn.addEventListener('click', () => {
    const newR = 255-r;
    const newG = 255-g;
    const newB = 255-b;
    textOutput.value = `${newR}, ${newG}, ${newB}`;
});
