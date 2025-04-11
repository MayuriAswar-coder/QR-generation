const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector("#generate"),
qrImg = wrapper.querySelector("#qr-image"),
downloadBtn = wrapper.querySelector("#download-btn"),
downloadLink = wrapper.querySelector("#download-link");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
        downloadBtn.disabled = false;
        downloadLink.href = qrImg.src;
    });
});

downloadBtn.addEventListener("click", () => {
    downloadLink.click();
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
        downloadBtn.disabled = true;
    }
});