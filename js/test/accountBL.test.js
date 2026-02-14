import {describe, it, expect, vi} from 'vitest'
import {AccountBL} from "../src/Lab02/accountBL";

describe("accountBL", () => {

    it("login is valid", () => {

        let accountBL = new AccountBL();

        let fake_getMember = vi.fn();
        accountBL.getMember = fake_getMember;
        fake_getMember.mockReturnValueOnce({
            "password": "sha-1234"
        });

        let fake_getShaPassword = vi.fn();
        accountBL.getShaPassword = fake_getShaPassword;
        fake_getShaPassword.mockReturnValueOnce("sha-1234");

        let isValid = accountBL.login("cash", "12345678");
        expect(isValid).toBe(true)
    })
})
