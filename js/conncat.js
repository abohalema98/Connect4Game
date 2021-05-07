


var allbutton = document.getElementsByClassName("btn");
counter = 0;
for (let i = 0; i < allbutton.length; i++) {
    allbutton[i].addEventListener("click", (e) => {

        if (allbutton[i].style.background == "blue" || allbutton[i].style.background == "black") {
            e.preventDefault();
        } else {
            counter++;
            if (counter % 2 == 0) {
                allbutton[i].style.background = "green";

            } else {
                allbutton[i].style.background = "brown";

            }
        }

    })

};


var palyAgin = document.getElementById("palyAgin");
var masseg = document.getElementById("_winer");
var btnArray = Object.values(allbutton)
caunt = 0;

btnArray.forEach(btn => {
    btn.addEventListener("click", (e) => {
        var i = btnArray.indexOf(btn)
        if (
            (i + 4) < btnArray.length &&
            btnArray[i].style.background === btnArray[i + 1].style.background &&
            btnArray[i + 1].style.background === btnArray[i + 2].style.background &&
            btnArray[i + 2].style.background === btnArray[i + 3].style.background &&
            btnArray[i + 3].style.background === btnArray[i + 4].style.background

            // horizantal(i)


        ) {
            masseg.style.display = "block";
            palyAgin.style.display = "block";
            masseg.innerText = "Congratulation The Winner Is " + btnArray[i].style.background

            btnArray.forEach(btn => { btn.setAttribute("disabled", true) })
        } else if (
            (i - 4) >= 0 &&
            btnArray[i].style.background === btnArray[i - 1].style.background &&
            btnArray[i - 1].style.background === btnArray[i - 2].style.background &&
            btnArray[i - 2].style.background === btnArray[i - 3].style.background &&
            btnArray[i - 3].style.background === btnArray[i - 4].style.background
            // horizantalplus(i)

        ) {
            masseg.style.display = "block";
            palyAgin.style.display = "block";

            masseg.innerText = "Congratulation The Winner Is " + btnArray[i].style.background

            btnArray.forEach(btn => { btn.setAttribute("disabled", true) })
        } else if (
            (i + 28) < btnArray.length &&
            btnArray[i].style.background === btnArray[i + 7].style.background &&
            btnArray[i + 7].style.background === btnArray[i + 14].style.background &&
            btnArray[i + 14].style.background === btnArray[i + 21].style.background &&
            btnArray[i + 21].style.background === btnArray[i + 28].style.background

        ) {
            masseg.style.display = "block";
            palyAgin.style.display = "block";
            masseg.innerText = "Congratulation The Winner Is " + btnArray[i].style.background


            btnArray.forEach(btn => { btn.setAttribute("disabled", true) })
        } else if (
            (i - 28) >= 0 &&
            btnArray[i].style.background === btnArray[i - 7].style.background &&
            btnArray[i - 7].style.background === btnArray[i - 14].style.background &&
            btnArray[i - 14].style.background === btnArray[i - 21].style.background &&
            btnArray[i - 21].style.background === btnArray[i - 28].style.background
        ) {
            masseg.style.display = "block";
            palyAgin.style.display = "block";
            masseg.innerText = "Congratulation The Winner Is " + btnArray[i].style.background
            btnArray.forEach(btn => { btn.setAttribute("disabled", true) })
        } else if (
            (i + 32) < btnArray.length &&
            btnArray[i].style.background === btnArray[i + 8].style.background &&
            btnArray[i + 8].style.background === btnArray[i + 16].style.background &&
            btnArray[i + 16].style.background === btnArray[i + 24].style.background &&
            btnArray[i + 24].style.background === btnArray[i + 32].style.background

        ) {
            masseg.style.display = "block";
            palyAgin.style.display = "block";
            masseg.innerText = "Congratulation The Winner Is " + btnArray[i].style.background
            btnArray.forEach(btn => { btn.setAttribute("disabled", true) })

        } else if (
            (i - 32) >= 0 &&
            btnArray[i].style.background === btnArray[i - 8].style.background &&
            btnArray[i - 8].style.background === btnArray[i - 16].style.background &&
            btnArray[i - 16].style.background === btnArray[i - 24].style.background &&
            btnArray[i - 24].style.background === btnArray[i - 32].style.background
        ) {
            masseg.style.display = "block";
            palyAgin.style.display = "block";
            masseg.innerText = "Congratulation The Winner Is " + btnArray[i].style.background
            btnArray.forEach(btn => { btn.setAttribute("disabled", true) })

        }

    })
})






window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})
