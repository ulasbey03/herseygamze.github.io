// Poem text
const kiplingPoem = `<p> <span></span>  
GAMZE'M, seni her şeyden çok seviyorum. 💕
GAMZE'M, kalbimdeki en güzel melodim. 🎶.
GAMZE'M, seninle her anım bir şiir gibi. ✨
GAMZE'M, aşkın en saf halini seninle yaşıyorum. 💘
GAMZE'M, her nefesimde adını fısıldıyorum. 💭
GAMZE'M, senin gülüşün dünyamı aydınlatıyor. 😍
GAMZE'M, senin varlığın hayatıma anlam katıyor. 🥰
GAMZE'M, seni sevmek en güzel alışkanlığım. 💞
GAMZE'M, her sabah seninle uyanmak istiyorum. 🌅
GAMZE'M, gözlerine baktığımda huzur buluyorum. 💫
GAMZE'M, ellerin ellerimdeyken zaman duruyor. ⏳
GAMZE'M, seni sevmek en büyük şansım. 🍀
GAMZE'M, aşkın en güzel hali seninle olmak. ❤️
GAMZE'M, birlikte yaşlanmak istiyorum. 👵🏻👴🏻
GAMZE'M, kalbimin tek sahibi sensin. 🔐
GAMZE'M, her şeyim, nefesim, canım… 💖
GAMZE'M, sana her gün yeniden aşık oluyorum. 💗
GAMZE'M, sesin en güzel şarkı, tenin en güzel şiir. 🎵📜
GAMZE'M, yıldızlar kadar parlak, güneş kadar sıcaksın. ✨☀️
GAMZE'M, seninle her anım ölümsüzleşiyor. 📸
GAMZE'M, aşkın en güzel tanımı sensin. 📖
GAMZE'M, sensiz bir an bile eksik hissediyorum. 🖤
GAMZE'M, seni her şeyden çok seviyorum ve hep seveceğim. 💞 


</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);