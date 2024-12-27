
let on = false;

var klima = new Audio('klimayiac.mp3');
var ahmedOff = new Audio('offbas.mp3');

klima.play()

alert("Nemlizade Simulator'e hoşgeldin.  Düşme ha -lifeless")

const sesler = [
    {
        sesAdi: "Ahmet Sex Yapıyor",
        sesYolu: "sex.mp3"
    },
    {
        sesAdi: "Ali Rıza Şarkı Söylüyor",
        sesYolu: "sarki.mp3"
    },
    {
        sesAdi: "Kendimi Çıplak Hissediyorum",
        sesYolu: "ciplak.mp3"
    },
    {
        sesAdi: "Ahmet Bak Düşme Ha",
        sesYolu: "ciplak.mp3"
    },
];

let simdiki = null

function ses() {
    const container = document.querySelector(".sesler"); 
    container.innerHTML = ""; 

    sesler.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("ses");

        itemDiv.innerHTML = `<p class="ses-adi">${item.sesAdi}</p>`;

        itemDiv.addEventListener("click", () => {
            if (simdiki) {
                simdiki.pause()
                simdiki.currentTime = 0
            }
            const audio = new Audio(item.sesYolu);
            audio.play();
            simdiki = audio
            $(".ses").css("color", "white")
            $(".ses").css("background-color","rgba(255, 255, 255, 0.232)")
            $(itemDiv).css("background-color","rgba(192, 9, 79)")

        });

        container.appendChild(itemDiv);
    });
}


// Veriyi yükle
ses();

$(".onOff").click(function() {
    if (!on) {
        $(".onOff").css("background-color", "red");
        $(".onOff").html("Off");
        on = true;
        $("html,body").css("background-image", 'url("alirizabg.png")');
        klima.pause();
        klima.currentTime = 0;
        ahmedOff.play();
        $(".ses").css("background-color","rgba(255, 255, 255, 0.232)")

        if (simdiki) {
            simdiki.pause()
            simdiki.currentTime = 0
        }
    } else if (on) {
        $(".onOff").css("background-color", "green");
        $(".onOff").html("On");
        on = false;
        $("html,body").css("background-image", 'url("ahmetbg.png")');
        ahmedOff.pause();
        ahmedOff.currentTime = 0;
        $(".ses").css("background-color","rgba(255, 255, 255, 0.232)")

        klima.play();
        if (simdiki) {
            simdiki.pause()
            simdiki.currentTime = 0
        }
    }
});
