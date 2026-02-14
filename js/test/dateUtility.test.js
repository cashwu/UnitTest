import {describe, it, expect, vi, beforeEach} from 'vitest'
import {DateUtility} from "../src/Lab01/dateUtility";

describe("date utility", () => {
    let dateUtility = new DateUtility();
    let fake_getToday = vi.fn();

    beforeEach(() => {
        dateUtility = new DateUtility();
        fake_getToday = vi.fn();
        dateUtility.getToday = fake_getToday;
    })

    it("today is payday", () => {
        givenToday(5);
        todayShouldBePayday();
    })

    it("today is not payday", () => {
        givenToday(10);
        todayShouldBeNotPayday();
    })

    function givenToday(date) {
        fake_getToday.mockReturnValueOnce(new Date(2026, 2, date));
    }

    function todayShouldBePayday() {
        expect(dateUtility.isPayday()).toBe(true);
    }

    function todayShouldBeNotPayday() {
        expect(dateUtility.isPayday()).toBe(false);
    }

});

