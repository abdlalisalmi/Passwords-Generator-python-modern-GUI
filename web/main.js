const slider = document.querySelector('.slider');
const sliderValue = document.querySelector(".length__title");
const sliderProps = {
	fill: "#38ef7d",
	background: "rgba(255, 255, 255, 0.214)",
};
// Using Event Listener to apply the fill and also change the value of the text.
slider.querySelector("input").addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
    applyFill(event.target);
});
// Selecting the range input and passing it in the applyFill func.
applyFill(slider.querySelector("input"));
// This function is responsible to create the trailing color and setting the fill.
function applyFill(slider) {
	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
			0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
}


const copyInfo = document.querySelector(".result__info.right");
const copiedInfo = document.querySelector(".result__info.left");
const copyBtn = document.querySelector("#copy-btn");

const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', () => {
	eel.pass_generate(1, sliderValue.getAttribute("data-length"));
	document.querySelector('.result').innerHTML += '<button id="copy-btn" onclick="copyPassword()"><img src="copy.svg" width="16px"></button>';
	copyInfo.style.opacity = '1';
	copiedInfo.style.opacity = "0";
})

eel.expose(showPassword);
function showPassword(password) {
	document.getElementById('result').innerText = password;
}

// Copy Password in clipboard
function copyPassword() {
	const textarea = document.createElement("textarea");
	const password = document.getElementById('result').innerText;

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();

	copyInfo.style.opacity = '0';
	copiedInfo.style.opacity = "1";
}