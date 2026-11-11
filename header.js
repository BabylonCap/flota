document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector("#site-header");
	const toggle = header?.querySelector(".menu-toggle");
	const navigation = header?.querySelector("#site-primary-navigation");

	if (!toggle || !navigation) {
		return;
	}

	const setMenuOpen = (isOpen) => {
		toggle.setAttribute("aria-expanded", String(isOpen));
		toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
		navigation.classList.toggle("is-open", isOpen);
	};

	toggle.addEventListener("click", () => {
		setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
	});

	navigation.addEventListener("click", (event) => {
		if (event.target instanceof Element && event.target.closest("a")) {
			setMenuOpen(false);
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
			setMenuOpen(false);
			toggle.focus();
		}
	});

	window.matchMedia("(min-width: 761px)").addEventListener("change", () => {
		setMenuOpen(false);
	});
});
