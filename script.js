//Visual Coding
let subjectTitle = document.querySelectorAll(".subject-title a");
let subjectDetail = document.querySelectorAll(".subject-detail");
// let meetNo = document.querySelectorAll(".meet");

function reveal1 (e) {
  e.preventDefault();
  subjectDetail[0].classList.toggle("hidden");
}
function reveal2(e) {
  e.preventDefault();
  subjectDetail[1].classList.toggle("hidden");
}
function reveal3(e) {
  e.preventDefault();
  subjectDetail[2].classList.toggle("hidden");
}
function reveal4(e) {
  e.preventDefault();
  subjectDetail[3].classList.toggle("hidden");
}

// function reveal15 (e) {
//   e.preventDefault();
//   meetNo[0].classList.toggle("hidden");
// }


subjectTitle[0].addEventListener("click", reveal1, false);
subjectTitle[1].addEventListener("click", reveal2, false);
subjectTitle[3].addEventListener("click", reveal4, false);
subjectTitle[2].addEventListener("click", reveal3, false);


// function reveal (e, index) {
//   // e.preventDefault();
//   subjectTitle[index].classList.toggle("hidden");
// }

// for (let index = 0; index < subjectTitle.length; index++) {
//   subjectMeetNo[index].addEventListener("click", () => { }, false);
// }