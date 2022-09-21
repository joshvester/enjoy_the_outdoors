"use strict";

let l = [];
window.onload = function () {
    const t = document.getElementById("mountainsDDL");
    t.disabled = true;
    $.getJSON("assets/data/mountains.json", function (e) { l = e.mountains; l = l.sort((e, t) => { if (e.name.toUpperCase() > t.name.toUpperCase()) { return 1 } if (e.name.toUpperCase() < t.name.toUpperCase()) { return -1 } return 0 }); n(l); t.disabled = false }); t.onchange = e
}; function e() {
    const e = document.getElementById("mountainsDDL"); s();
    let t = e.value; if (!t) { return }
    let n = l.find(e => e.name === t); a(n)
} function i(e, t, n = "UTC") { const l = document.getElementById("sunriseDiv"); const i = document.getElementById("sunsetDiv"); l.innerHTML = `Sunrise: ${e} ${n}`; i.innerHTML = `Sunset: ${t} ${n}`; l.classList.remove("invisible"); i.classList.remove("invisible") } function v(e, t) {
    const n = "https://api.sunrise-sunset.org/json?date=today";
    let l = `${n}&lat=${e}&lng=${t}`; $.getJSON(l, function (e) { if (e.status !== "OK") { return } i(e.results.sunrise, e.results.sunset) })
} function a(e) {
    let t = document.getElementById("mountainOutputDiv");
    let n = document.createElement("h3"); n.innerHTML = e.name; n.className = "py-3";
    let l = document.createElement("div"); l.className = "row";
    let i = document.createElement("div"); i.className = "col-12 col-sm-6 text-center mb-2";
    let a = document.createElement("img"); a.src = `assets/images/mountains/${e.img}`; a.alt = e.name; i.appendChild(a);
    let s = document.createElement("div"); s.className = "col-12 col-sm-6 mt-3";
    let o = document.createElement("div"); o.innerHTML = e.desc;
    let d = document.createElement("div");
    let m = document.createElement("div"); d.className = "mt-2";
    let c = document.createElement("div"); c.className = "mt-2"; d.innerHTML = `Elevation: ${e.elevation} feet`; m.innerHTML = `Effort: ${e.effort}`;
    let r = f(e.coords.lat, e.coords.lng); c.appendChild(r);
    let u = document.createElement("div");
    let p = document.createElement("div"); u.id = "sunriseDiv"; p.id = "sunsetDiv"; u.className = "invisible"; p.className = "invisible"; v(e.coords.lat, e.coords.lng); s.appendChild(o); s.appendChild(d); s.appendChild(m); s.appendChild(u); s.appendChild(p); s.appendChild(c); l.appendChild(i); l.appendChild(s); t.appendChild(n); t.appendChild(l)
} function s() { let e = document.getElementById("mountainOutputDiv"); e.innerHTML = "" } function n(n) {
    const l = document.getElementById("mountainsDDL");
    let e = new Option("Choose One...", ""); l.appendChild(e);
    let i = n.length; for (let t = 0; t < i; t++) { let e = new Option(n[t].name); l.appendChild(e) }
} function f(e, t) {
    const n = "https://www.google.com/maps/place/";
    let l = document.createElement("a"); l.href = n + e + "," + t; l.target = "_blank"; l.innerHTML = "View On Map"; l.className = "btn btn-primary"; return l
}