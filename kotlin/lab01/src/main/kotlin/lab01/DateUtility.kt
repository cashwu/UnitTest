package lab01

import java.time.LocalDate

class DateUtility {
    /**
     * 已經有人使用，不可以影響到已經用你的人，不可修改參數
     * 盡可能不要新增 public/internal 的對外介面
     */
    fun isPayday(): Boolean {
        if (LocalDate.now().dayOfMonth == 5) {
            return true
        }

        return false
    }
}
