window.onload = init;

function init() {
    let btn = document.querySelector("#ok");

    btn.addEventListener("click",showInfo);
}
function showInfo() {
    let inptxt = document.querySelector("#userid");
    let title = document.querySelector("#name1");
    let srnCoin = document.querySelector("#senC");
    let bio = document.querySelector('#bio1');
    let axs = document.querySelector('#user1');
    let tik = document.querySelector('#tik')
    let info = inptxt.value;

    if (info == "r0zsya") {
        srnCoin.innerHTML = "10003"
        title.innerHTML = inptxt.value
        bio.innerHTML = "programmer"
        axs.src = 'https://s2.uupload.ir/files/whatsapp_image_2021-04-30_at_13.29.49_qhqb.jpeg'
        axs.style = 'width: 150px'
        tik.style = 'display: block'
    } else if (info == "lolo") {
        srnCoin.innerHTML = "2241"
        title.innerHTML = inptxt.value
        bio.innerHTML = "programmer"
        axs.src = 'https://s2.uupload.ir/files/kon_tkl4.jpg'
        axs.style = 'width: 150px'
        tik.style = 'display: none'
    } else if (info == "siavashz83") {
        srnCoin.innerHTML = "13"
        title.innerHTML = inptxt.value
        bio.innerHTML = "Apparatus"
        axs.src = 'user.jpg'
        axs.style = 'width: 150px'
        tik.style = 'display: none'
    } else if (info == "kaneki") {
        srnCoin.innerHTML = "250"
        title.innerHTML = inptxt.value
        bio.innerHTML = "youtuber"
        axs.src = 'user.jpg'
        axs.style = 'width: 150px'
        tik.style = 'display: none'
    } else if (info == "paryiayari") {
        srnCoin.innerHTML = "603"
        title.innerHTML = inptxt.value
        bio.innerHTML = "none"
        axs.src = 'https://s2.uupload.ir/files/pp_fsh5.jpeg'
        axs.style = 'width: 150px'
        tik.style = 'display: none'
    } else if (info == "Masi_art") {
        srnCoin.innerHTML = "43"
        title.innerHTML = inptxt.value
        bio.innerHTML = "none"
        axs.src = 'user.jpg'
        axs.style = 'width: 150px'
        tik.style = 'display: none'
    } else {
        alert("چنین نام کاربری وجود ندارد جهت ساخت نام کاربری تیکت ارسال کنید!")
    }
}
