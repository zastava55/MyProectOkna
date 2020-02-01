var otschet_text = document.getElementById("otschet"),
    start_n = 70 + (100 * Math.random() | 0);
finisch_n = 0, sumtime = 60, step_s = 20 * sumtime, step_n = (start_n - finisch_n) / step_s, pusk_on = 0, text2_on = 0;
var otschet_coords = otschet_text.getBoundingClientRect(),
    otschet_top = otschet_coords.top,
    vysota_okna = document.documentElement.clientHeight;
if (otschet_top < vysota_okna) {
    var timerId1 = setTimeout(pusk1, 3e3);
    pusk_on = 1
}

function pusk1() {
    setTimeout(action, 50)
}

function action() {
    (start_n = (start_n - step_n).toFixed(2)) > finisch_n ? (otschet_text.innerHTML = start_n, timeout_id = setTimeout(action, 50)) : 1 != text2_on ? (otschet_text.innerHTML = "Сейчас будет код", text2_on += 1, timeout_id = setTimeout(action, 1e3)) : otschet_text.innerHTML = code
}
if (0 == pusk_on) {
    function fotschet() {
        if (otschet_text.getBoundingClientRect().top < document.documentElement.clientHeight && 0 == pusk_on) {
            pusk_on = 1;
            setTimeout(action, 50)
        }
    }
    window.addEventListener("scroll", fotschet, !1), document.body.addEventListener("scroll", fotschet, !1), window.addEventListener("resize", fotschet)
}
