// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username = "DHANUSH";
let password  = 123456;
let inUsername = "DHANUSH";
let inPassword = 123456;

if (username===inUsername) {
  if (password===inPassword) {
    console.log("Welcome DHANUSH");
  }
  else {
    console.log("incorrect password");
  }
}
else {
  console.log("Username is not matching");
}