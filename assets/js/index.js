function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

let arr = [
  randomNumbers(50, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
  randomNumbers(1, 100),
];
let sumEven = 0,
  sum5 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sumEven += arr[i];
  }
  if (i < 5) {
    sum5 += arr[i];
  }
}
document.write("sum of even numbers is : " + sumEven);
document.write("sum of 5 numbers is : " + sum5);

let obj = {
  name: "Mustafa",
  age: 25,
  phone: "0945866740",
  email: "mustafa.alsatuf.97@gmail.com",
};
document.write(obj);
document.write("Name is : " + obj.name);
document.write("Age is : " + obj.age);
document.write("Phone is : " + obj.phone);
document.write("Email is : " + obj.email);
