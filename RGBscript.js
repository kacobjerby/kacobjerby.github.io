document.getElementById("blackBtn").addEventListener("click", () => {
    document.body.classList.toggle("black-bg");
});

const r = document.getElementById("rValue");
const g = document.getElementById("gValue");
const b = document.getElementById("bValue");

const submitBtn = document.getElementById("submitBtn");
const textOutput = document.getElementById("textOutput");

submitBtn.addEventListener("click", () => {
    const newR = 255 - Number(r.value);
    const newG = 255 - Number(g.value);
    const newB = 255 - Number(b.value);

    textOutput.value = `${newR}, ${newG}, ${newB}`;
});