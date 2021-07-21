
const boxYetkili = document.getElementById("yetkili_liste");

const API = "https://discord-web-api.glitch.me/discord/user/";

const yetkili = [
    {
        "id": "852589431897456691",
        "post": "DenizBOT Developer",
        "github": "https://github.com/reyizdeniz",
    }
]

for (let indexOne = 0; indexOne < yetkili.length; indexOne++) {
    const elementYetkili = yetkili[indexOne];

    $.getJSON(API + elementYetkili.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../denizbot/denizbot.png");
                }, 1000);
            }

            const yetkiliList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementYetkili.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementYetkili.github + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='"
            boxYetkili.innerHTML += yetkiliList;
        });
}