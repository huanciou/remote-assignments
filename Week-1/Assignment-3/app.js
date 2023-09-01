function countAandB(input){
	
	const lowerCaseInput = input.map(i => i.toLowerCase());
	let count = 0;

	for (i in lowerCaseInput){
		let ascii = lowerCaseInput[i].charCodeAt(0);
		if( ascii == 97 || ascii == 98 ) count++;	
	}

	return count;
}

function toNumber(input){
	const lowerCaseInput = input.map(i => i.toLowerCase());
	const ans = [];
	let num;

	for(i in lowerCaseInput){
		let ascii = lowerCaseInput[i].charCodeAt(0);
		num = ascii - 96;
		ans.push(num);
	}

	return ans;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']; 

console.log(countAandB(input1)); 
// should print 4 (3 ‘a’ letters and 1 ‘b’ letter)

console.log(toNumber(input1)); 
// should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e']; 

console.log(countAandB(input2)); 
// should print 0 
console.log(toNumber(input2)); 
// should print [5, 4, 3, 4, 5]
