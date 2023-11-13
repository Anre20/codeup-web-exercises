(() => {
	// TODO: Flip the card when clicked

  const card = document.querySelector(".card");
  for (let card of cards) {
  card.addEventListener("click", (e) => {
      e.target.classList.toggle("flipped");
  }
  }
})()});
