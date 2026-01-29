const message =Sejak kau ada di sini, dunia yang dulu biasa saja pelan-pelan belajar jadi hangat.
Tawa kecilmu terasa seperti lagu yang terus terulang di kepalaku, sederhana tapi menenangkan.
Aku tak minta banyak—cukup tetap di sini,
karena nyatanya, hadirku lebih utuh saat kau ada.

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

