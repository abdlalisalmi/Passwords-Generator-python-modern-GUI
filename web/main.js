const slider = document.querySelector('.slider');
const sliderValue = document.querySelector(".length__title");
const sliderProps = {
	fill: "#0B1EDF",
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


const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', () => {
	eel.pass_generate(1, sliderValue.getAttribute("data-length"));
})
eel.expose(showPassword);
function showPassword(password) {
	document.getElementById('result').innerText = password;
}