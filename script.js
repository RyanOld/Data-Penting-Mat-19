//Visual Coding : animated hide-expand
const subjectTitle = document.querySelectorAll(".subject-title a");
const subjectDetail = document.querySelectorAll(".subject-detail .wrapper");
  //height hack becoz percentage for the keyframes 
  //doesn't work
const heights = document.querySelectorAll(".subject-detail");
document.documentElement.style
  .setProperty('--probab', `${heights[0].offsetHeight+14}px`);
document.documentElement.style
  .setProperty('--geoa', `${heights[1].offsetHeight+14}px`);
document.documentElement.style
  .setProperty('--prokom', `${heights[2].offsetHeight+14}px`);
document.documentElement.style
  .setProperty('--kalut', `${heights[3].offsetHeight+14}px`);
  //functions got complicated because the stupid
  //percentage value doesn't work.
subjectTitle.forEach((element, index) => {
  element.addEventListener("click", (e) => {
  e.preventDefault();
  if (
      !subjectDetail[index].classList.contains(`expanded${index+1}`) &&
      !subjectDetail[index].classList.contains(`minimized${index+1}`)
  ) {
      subjectDetail[index].classList.add(`minimized${index+1}`);
    } else {
      subjectDetail[index].classList.toggle(`minimized${index+1}`);
      subjectDetail[index].classList.toggle(`expanded${index+1}`);
    }
  }, false)
})