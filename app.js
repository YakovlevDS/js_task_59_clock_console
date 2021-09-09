// ? Task:Create a clock and display the time in each second


// Solution 1
//   let cur_date = new Date();
//   let hours = cur_date.getHours();
//   let minutes = cur_date.getMinutes();
//   let seconds = cur_date.getSeconds();
  
// const updateTime = () => {

// seconds += 1;
//  if (seconds >= 60) {
//   minutes++;
//   seconds = 0;
//  } 
//  if (minutes >= 60) {
//   hours++;
//   minutes = 0;
//  }  
// if (hours >= 24) { hours = 0 }
// console.log(`${hours} : ${minutes} : ${seconds}`);
// };

// setInterval(updateTime, 1000);

// Solution 2


  setInterval(() => console.log(
   `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
 ), 1000); 


// setInterval(updateTime, 1000);
// ! Explanation: 
