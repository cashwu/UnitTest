import {describe, it, expect, vi, beforeEach} from 'vitest'
import {AccountBL} from "../src/Lab02/accountBL";

describe("accountBL", () => {

    let accountBL = new AccountBL();
    let fake_getMember;
    let fake_getShaPassword;

    beforeEach(() => {
        accountBL = new AccountBL();
        fake_getMember = vi.fn();
        accountBL.getMember = fake_getMember;
        fake_getShaPassword = vi.fn();
        accountBL.getShaPassword = fake_getShaPassword;
    })

    it("login is valid", () => {
        givenMember({
            "password": "sha-1234"
        });

        givenShaPassword("sha-1234");

        loginShouldBeValid("cash", "12345678");
    })

    it("login is invalid", () => {
        givenMember({
            "password": "sha-1234"
        });

        // 注意這裡也要改 !!
        givenShaPassword("wrong sha password");
        loginShouldInvalid("cash", "wrong password");
    })

    function givenMember(member) {
        fake_getMember.mockReturnValueOnce(member);
    }

    function givenShaPassword(shaPassword) {
        fake_getShaPassword.mockReturnValueOnce(shaPassword);
    }

    function loginShouldBeValid(account, password) {
        let isValid = accountBL.login(account, password);
        expect(isValid).toBe(true)
    }

    function loginShouldInvalid(account, password) {
        let isValid = accountBL.login(account, password);
        expect(isValid).toBe(false)
    }
})
