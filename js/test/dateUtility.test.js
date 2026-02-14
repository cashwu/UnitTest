import {describe, it, expect, vi} from 'vitest'
import {DateUtility} from "../src/Lab01/dateUtility";

describe("date utility", () => {

    it("today is payday", () => {

        let dateUtility = new DateUtility();
        let fake_getToday = vi.fn();
        dateUtility.getToday = fake_getToday;
        fake_getToday.mockReturnValueOnce(new Date(2026, 2, 5));

        expect(dateUtility.isPayday()).toBe(true);
    })

});

