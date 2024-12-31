let box = document.querySelector(".box");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let btnTop = document.querySelector(".btnTop");
let btnBottom = document.querySelector(".btnBottom");

box.style.position = "absolute";
box.style.top = "250px";
box.style.left = "200px";
let gradus = 0;

btnLeft.addEventListener("click", () => {
  let leftPx = parseInt(box.style.left);
  box.style.left = leftPx - 10 + "px";
  gradus = 0;
    box.style.transform = `rotate(${gradus}deg)`;
});
btnRight.addEventListener("click", () => {
    let leftPx = parseInt(box.style.left);
    box.style.left = leftPx + 10 + "px";
    gradus = 180;
    box.style.transform = `rotate(${gradus}deg)`;
  });
  btnBottom.addEventListener("click", () => {
    let topPx = parseInt(box.style.top);
    box.style.top = topPx + 10 + "px";
    gradus = 270;
    box.style.transform = `rotate(${gradus}deg)`;
  });
  btnTop.addEventListener("click", () => {
    let topPx = parseInt(box.style.top);
    box.style.top = topPx - 10 + "px";
    gradus = 90; 
    box.style.transform = `rotate(${gradus}deg)`;
  });
// document.addEventListener("keydown",(event) =>{
// console.log(event.key);
//    if (event.key === "Enter") {
//     console.log("world");
//    } else{
//     console.log("Error");
//    }
// })

// document.addEventListener("keydown", (event) => {
//   const topPx = parseInt(box.style.top)
//   const leftPx = parseInt(box.style.left)
//   console.log(event);
//   switch (event.key) {
//     case "ArrowUp":
// box.style.top = topPx - 10 + "px";
//   break;
//   case "ArrowDown":
// box.style.top = topPx + 10 + "px";
//  b = 90;
//   box.style.transform = `rotate(${b}deg)`
// break;
// case "ArrowLeft":
//  box.style.left = leftPx - 10 + "px"
//  b = 180
//   box.style.transform = `rotate(${b}deg)`
//  break;
// case "ArrowRight":
//   box.style.left = leftPx + 10 + "px"
//   break
// }
// });
// document.addEventListener("keydown", (event) => {
//   console.log(event.key);
  
//   const topPx = parseInt(box.style.top)
//   switch (event.key) {
//     case "ArrowDown":
// console.log(box.style.top = topPx + 10 + "px");
//   }
// }); 


// 
document.addEventListener("keydown", (event) => { 
  if (event.key === "ArrowRight" || event.key === "D"||  event.key === "d") { 
    let leftPx = parseInt(box.style.left);
    box.style.left = leftPx + 10 + "px";
    gradus = 180;
    box.style.transform = `rotate(${gradus}deg)`
  } else if (event.key === "ArrowUp" || event.key === "W"||  event.key === "w") { 
    let topPx = parseInt(box.style.top);
    box.style.top = topPx - 10 + "px";
    gradus = 90; 
    box.style.transform = `rotate(${gradus}deg)`; 
  } else if (event.key === "ArrowDown"||  event.key === "S"||  event.key === "s") {   
    let topPx = parseInt(box.style.top);
    box.style.top = topPx + 10 + "px";
    gradus = 270;
    box.style.transform = `rotate(${gradus}deg)`;
     box.style.transform = `rotate(${gradus}deg)`  
  } else if (event.key === "ArrowLeft" || event.key === "A"  ||event.key === "a") { 
    let leftPx = parseInt(box.style.left);
    box.style.left = leftPx - 10 + "px";
    gradus = 360;
    box.style.transform = `rotate(${gradus}deg)`; 
  } 
});

document.addEventListener("keyup", (event) => { 
  if (event.key === "ArrowRight" || event.key === "D"||  event.key === "d") { 
    let leftPx = parseInt(box.style.left);
    box.style.left = leftPx + 0 + "px";
    gradus = 180;
    box.style.transform = `rotate(${gradus}deg)`
  } else if (event.key === "ArrowUp" || event.key === "W"||  event.key === "w") { 
    let topPx = parseInt(box.style.top);
    box.style.top = topPx - 0 + "px";
    gradus = 90; 
    box.style.transform = `rotate(${gradus}deg)`; 
  } else if (event.key === "ArrowDown"||  event.key === "S"||  event.key === "s") {   
    let topPx = parseInt(box.style.top);
    box.style.top = topPx + 0 + "px";
    gradus = 270;
    box.style.transform = `rotate(${gradus}deg)`;
     box.style.transform = `rotate(${gradus}deg)`  
  } else if (event.key === "ArrowLeft" || event.key === "A"  ||event.key === "a") { 
    let leftPx = parseInt(box.style.left);
    box.style.left = leftPx - 0 + "px";
    gradus = 360;
    box.style.transform = `rotate(${gradus}deg)`; 
  } 
});