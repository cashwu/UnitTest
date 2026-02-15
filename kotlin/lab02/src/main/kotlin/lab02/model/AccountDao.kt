package lab02.model

class AccountDao {
    fun getMemberForLogin(account: String): Member {
        throw NotImplementedError()
    }

    fun setLoginFailedCount(account: String) {
        throw NotImplementedError()
    }

    fun getLoginFailedCount(): Int {
        throw NotImplementedError()
    }
}
