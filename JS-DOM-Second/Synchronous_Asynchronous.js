// Exercise (1)
// Before running the code in your browser, discuss the expected order of each loop
// Synchronous - Write code that loops through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'

const greekGods = [
	'Aphrodite',
	'Ares',
	'Artemis',
	'Athena',
	'Poseidon',
	'Zeus',
];

for (let i = 0; i < greekGods.length; i++) {
	console.log(`${i}. ${greekGods[i]}`);

	// Asynchronous - Same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()

    if (i === 2) {
        setTimeout(() => {
            console.log(`${i}. ${greekGods[i]}`);
        }, 2000);
    }
}