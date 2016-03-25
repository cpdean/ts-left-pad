declare var describe, it, expect, hot, cold, expectObservable, expectSubscriptions, console, beforeEach;
import * as tsleftpad from "../src/tsleftpad";

describe("only function", function () {
    it("should pad something", function () {
        expect(tsleftpad("goat", 10)).toBe("      goat");
    });
    it("should pad with a dot", function () {
        expect(tsleftpad("goat", 10, ".")).toBe("......goat");
    });
});
