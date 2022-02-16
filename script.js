const scrollIndicator = document.querySelector(".scroll--indicator");
const elvira = document.querySelector(".elvira");

const options = {
	root: document.querySelector(".scroll--container"),
	rootMargin: "0px",
	threshold: 1.0,
};

const callback = (entries, observer) => {
	console.log(entries);
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			scrollIndicator.classList.add("hidden");
			elvira.classList.add("ultra-dance");
		} else {
			scrollIndicator.classList.remove("hidden");
			elvira.classList.remove("ultra-dance");
		}
	});
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector(".scroll--element--last");
observer.observe(target);
