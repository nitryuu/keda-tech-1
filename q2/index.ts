export const maxSubarraySum = (arr: number[], num: number) => {
	if (num > arr.length || num <= 0) return null;

	let windowSum = 0;
	for (let i = 0; i < num; i++) windowSum += arr[i]!;

	let maxSum = windowSum;

	for (let i = num; i < arr.length; i++) {
		windowSum += arr[i]! - arr[i - num]!;
		if (windowSum > maxSum) maxSum = windowSum;
	}

	return maxSum;
};
