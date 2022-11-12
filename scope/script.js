// variable scope

// const totalMoney = 100;

// function customer() {
//     const totalMoney = 33;

//     if (totalMoney > 0) {
//         const totalMoney = 10;
//         console.log(totalMoney);
//     }
// }

// customer();

// console.log(totalMoney);

// scope
// difference between var, let and const

// const first_count = 3;

// function GreatBritain(params) {
//     let second_count = 4;
//     first_count = 4
//     console.log();
//     if (second_count > 3) {
//         let third_count = 8;
//     }
// }

// GreatBritain();
// console.log(first_count);

// Array Destructuring

let array = ["John", "James", "Saleh"];
// const firstIndex = array[0];
// const secondIndex = array[1];
// const thirdIndex = array[2];

const [firstIndex, secondIndex, thirdIndex] = array;

console.log(`These are the name of the array ${firstIndex}, ${secondIndex}, and ${thirdIndex}`);

