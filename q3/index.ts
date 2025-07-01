export const sumEvenNumbers = (obj: any): number => {
	let sum = 0;

	for (const key in obj) {
		const value = obj[key];

		if (typeof value === "number" && value % 2 === 0) {
			sum += value;
		} else if (typeof value === "object" && value !== null) {
			sum += sumEvenNumbers(value);
		}
	}

	return sum;
};
