const scrollIndicator = document.querySelector(".scroll--indicator");
const ian = document.querySelector(".ian");
const root = document.documentElement;

root.style.setProperty("--viewport-height", window.innerHeight);

window.addEventListener("resize", (e) => {
	console.log(window.innerHeight);
	root.style.setProperty("--viewport-height", window.innerHeight);
});

const options = {
	root: document.querySelector(".scroll--container"),
	rootMargin: "0px",
	threshold: 0.25,
};

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			scrollIndicator.classList.add("hidden");
			ian.classList.add("ultra-dance");
		} else {
			scrollIndicator.classList.remove("hidden");
			ian.classList.remove("ultra-dance");
		}
	});
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector(".scroll--element--last");
observer.observe(target);
