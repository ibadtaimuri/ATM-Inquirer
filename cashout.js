export function withDraw(balance, amountWithdraw) {
    if (balance >= amountWithdraw) {
        return balance - amountWithdraw;
    }
    else {
        return 0;
    }
}
