const message = `Hai, lagi ngapain?
Aku cuma mau bilang kalau akhir-akhir ini kamu sering terlintas di pikiranku.
Nggak ada hal besar, cuma rasa peduli yang tumbuh pelan-pelan.
Dan aku hanya ingin menyampaikan itu saja.`;

function showLetter() {
  const audio = document.getElementById("bgm");
  audio.volume = 0.5;
  audio.play(); 

  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}



