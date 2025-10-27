    function showwomen() {
      const cards = Array.from(document.querySelectorAll(".card"));
      cards.map(card => {
        if (card.dataset.category === "women") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    function showkid() {
      const cards = Array.from(document.querySelectorAll(".card"));
      cards.map(card => {
        if (card.dataset.category === "kids") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    function showbags() {
      const cards = Array.from(document.querySelectorAll(".card"));
      cards.map(card => {
        if (card.dataset.category === "bags") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    function showall() {
      const cards = Array.from(document.querySelectorAll(".card"));
      cards.map(card => {
        card.style.display = "block";
      });
    }