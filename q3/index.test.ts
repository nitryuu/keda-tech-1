import { expect, test } from "vitest";
import { sumEvenNumbers } from "./index";

test("sum even numbers (1)", () => {
	const obj = {
		outer: 2,
		obj: {
			inner: 2,
			otherObj: {
				superInner: 2,
				notANumber: true,
				alsoNotANumber: "yup",
			},
		},
	};

	expect(sumEvenNumbers(obj)).toBe(6);
});

test("sum even numbers (2)", () => {
	const obj = {
		a: 2,
		b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
		c: { c: { c: 2 }, cc: "ball", ccc: 5 },
		d: 1,
		e: { e: { e: 4 }, ee: "car" },
	};

	expect(sumEvenNumbers(obj)).toBe(12);
});
