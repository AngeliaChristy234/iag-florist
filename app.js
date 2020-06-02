const sidebar = document.getElementById('sidebar');

sidebar.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false)

// const ikebanaImgBig = document.getElementById('ikebana-display');
// const eropaImgBig = document.getElementById('eropa-display');
// const freestyleImgBig = document.getElementById('freestyle-display');

const btnOnRight = document.getElementsByClassName('display-l__btn-each');
const btnOnLeft = document.getElementsByClassName('display-r__btn-each');

// // Ikebana
// for (i = 0; i < 3; i ++) {
//   btnOnRight[i].addEventListener("click", changeIkebanaPicture)
// }

// function changeIkebanaPicture (e) {
//   let imgOfBtn = this.children[0].src;
//   let displayedImg = ikebanaImgBig.src;

//   setTimeout(() => {
//     ikebanaImgBig.src = imgOfBtn;
//     this.children[0].src = displayedImg;
//   }, 200)

// }

// // Eropa
// for (i = 0; i < btnOnLeft.length; i ++) {
//   btnOnLeft[i].addEventListener("click", changeEropaPicture)
// }

// function changeEropaPicture (e) {
//   let imgOfBtn = this.children[0].src;
//   let displayedImg = eropaImgBig.src;

//   setTimeout(() => {
//     eropaImgBig.src = imgOfBtn;
//     this.children[0].src = displayedImg;
//   }, 200)
// }

// //Freestyle
// for (i = 3; i < btnOnRight.length; i ++) {
//   btnOnRight[i].addEventListener("click", changeFreestylePicture)
// }

// function changeFreestylePicture (e) {
//   let imgOfBtn = this.children[0].src;
//   let displayedImg = freestyleImgBig.src;

//   setTimeout(() => {
//     freestyleImgBig.src = imgOfBtn;
//     this.children[0].src = displayedImg;
//   }, 200)

// }

function changeDisplayedImg(passedThis, imgBigId) {
  const imgBigElement = document.getElementById(imgBigId);

  let imgOfBtn = passedThis.children[0].src;
  let displayedImg = imgBigElement.src;

  setTimeout(() => {
    imgBigElement.src = imgOfBtn;
    passedThis.children[0].src = displayedImg;
  }, 200)
}

// Ikebana
for (i = 0; i < 3; i++) {
  btnOnRight[i].addEventListener("click", function () {
    changeDisplayedImg(this, 'ikebana-display')
  })
  btnOnLeft[i].addEventListener("click", function () {
    changeDisplayedImg(this, 'eropa-display')
  })

}

for (i = 3; i <= btnOnRight.length; i++) {
  btnOnRight[i].addEventListener("click", function () {
    changeDisplayedImg(this, 'freestyle-display')
  })
}