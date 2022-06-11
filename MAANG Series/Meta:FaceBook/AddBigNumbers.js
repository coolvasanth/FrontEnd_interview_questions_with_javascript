function addTwoNumbers(number1, number2){
	const number1Length = number1.length;
	const number2Length = number2.length;
	const maxLength = number1Length > number2Length ? number1Length : number2Length;
	let carry = 0, sum = '';

	for (let i = 1; i <= maxLength; i++) {
		const lastNum1  = +number1.charAt(number1Length - i);
		const lastNum2  = +number2.charAt(number2Length - i);

		let tempSum = lastNum1 + lastNum2 + carry; // 10
		carry = tempSum / 10 | 0; // 1
		tempSum = tempSum % 10; // 0

		if(i === maxLength && carry){
			sum = carry * 10 + tempSum + sum;
		}else{
			sum = tempSum + sum;
		}
	}
	return sum;
}


console.log(addTwoNumbers("22", "44"));
