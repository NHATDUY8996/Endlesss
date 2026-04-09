export default function scrollContent() {
	// const speed = 0;
	// // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
	// const hash = window.location.hash;
	// if ($(hash).length) scrollToID(hash, speed);
	// // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
	// $('.scrollTo').on('click', function (e) {
	// 	e.preventDefault();

	// 	const href = $(this).find('> a').attr('href') || $(this).attr('href');
	// 	const id = href.slice(href.lastIndexOf('#'));
	// 	if ($(id).length) {
	// 		scrollToID(id, speed);
	// 	} else {
	// 		// window.location.replace(`/${id}`);
	// 		window.location.href = href;
	// 	}
	// });
	// // HÀM SCROLL CHO MƯỢT MÀ
	// function scrollToID(id, speed) {
	// 	const offSet = $('.header').outerHeight();
	// 	const section = $(id).offset();
	// 	const targetOffset = section.top - offSet - 20;
	// 	$('html,body').animate({scrollTop: targetOffset}, speed);
	// }    
	const anchors = document.querySelectorAll(".anchor-js");
	const headerheHeight = document.querySelector(".header").offsetHeight;
	// console.log(headerHeight);
	const secs = [];

	function removeActive() {
		anchors.forEach((e) => e.classList.remove("active"));
	}

	anchors.forEach((link) => {
		let id = link.getAttribute("href").slice(1);
		let sec = document.querySelector(`#${id}`);

		secs.push(sec);
		link.addEventListener("click", (e) => {
			e.preventDefault();

			removeActive();
			// link.classList.add("active");

			window.scrollTo({
				top: sec.offsetTop  - headerheHeight,
				behavior: "smooth",
			});
		});
	});

	window.addEventListener("scroll", () => {
		let scrollY = window.scrollY;
		secs.forEach((item, index) => {
			if (scrollY > item.offsetTop - 5 - headerheHeight) {
				removeActive();
				anchors[index].classList.add("active");
			} else {
				anchors[index].classList.remove("active");
			}
		});
	});
}