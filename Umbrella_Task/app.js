let blueUrl = "./res/Blue_umbrella.png";
let yelloUrl = "./res/Yello_umbrella.png";
let pinkUrl = "./res/Pink_umbrella.png";
let btn_ele = document.querySelector(".btn-title");
let img = document.querySelector(".img-container");
let btn = document.querySelector(".btn");
let btnColor = document.querySelector(".img-container");
let btnBlue = document.querySelector(".blue");
let btnYello = document.querySelector(".yello");
let btnPink = document.querySelector(".pink");
let loadingImg = document.getElementById("loading-img");
let btn_icon = document.getElementById("btn-icon");
loadingImg.style.display = "none"; //hide by default
let angle = 45;

let innerDiv = document.createElement("div");
innerDiv.innerText = "X";
innerDiv.className = "btn-cancel";

btnBlue.addEventListener("click", () =>
  imgChange(blueUrl, "#45A4F2", "#B6D0E2")
);

btnYello.addEventListener("click", () => {
  imgChange(yelloUrl, "#FFBF00", "#F5F5DC");
});

btnPink.addEventListener("click", () =>
  imgChange(pinkUrl, "#DE3163", "#F8C8DC")
);

function imgChange(Imgurl, btnColor, bgColor) {
  img.style.display = "none";
  loadingImg.style.display = "block";
  btn_ele.appendChild(innerDiv);
  setTimeout(() => {
    loadingImg.style.display = "none";
    img.style.display = "block";
    img.style.background = `url(${Imgurl})`;
    img.style.backgroundSize = "cover";
    img.style.backgroundRepeat = "no-repeat";
    btn_ele.removeChild(innerDiv);
    btn_icon.src = "./res/upload_icon.svg";
  }, 2000);
  document.body.style.backgroundColor = `${bgColor}`;
  btn.style.backgroundColor = `${btnColor}`;
}

const image_input = document.querySelector("#files");
var uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      ".logo"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
