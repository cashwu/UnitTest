package lab02

import lab02.model.AccountDao
import lab02.model.Cryptography

class AccountBL {
    fun login(account: String, password: String): Boolean {
        val accountDao = AccountDao()

        val member = accountDao.getMemberForLogin(account)
        val encryptedPassword = Cryptography().cashSha(password)
        val isValid = member.password == encryptedPassword

        if (isValid) {
            return true
        } else {
            return false
        }
    }
}
