import { assert } from "chai";
import { add } from "../src/calculator";

describe("calculator", function () {
    it("adds", function () {
        assert.strictEqual(add(5, 4), 9);
    });
});
