import { expect, test } from "vitest";
import { sort } from "./index";

test("sort array", () => {
	const arr = [1, 2, 4, 3, 5, 3, 2, 1];
	sort(arr);
	expect(arr).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});
