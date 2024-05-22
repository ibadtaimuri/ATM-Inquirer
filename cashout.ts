export function withDraw(balance: number, amountWithdraw: number) {
    if (balance >= amountWithdraw) {
        return balance - amountWithdraw
    } else {
        return 0
    }
}