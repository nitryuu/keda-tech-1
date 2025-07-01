import { expect, test } from "vitest";
import { maxSubarraySum } from "./index";

test("max subarray sum (1)", () => {
	const arr = [100, 200, 300, 400];
	const num = 2;
	const res = maxSubarraySum(arr, num);
	expect(res).toBe(700);
});

test("max subarray sum (2)", () => {
	const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
	const num = 4;
	const res = maxSubarraySum(arr, num);
	expect(res).toBe(39);
});

test("max subarray sum (3)", () => {
	const arr = [-3, 4, 0, -2, 6, -1];
	const num = 2;
	const res = maxSubarraySum(arr, num);
	expect(res).toBe(5);
});
