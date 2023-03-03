import chai from 'chai'
var expect = chai.expect

class CalculatorPage {
    private numberButton = 'id:com.google.android.calculator:id/digit_'
    private addButton = 'id:com.google.android.calculator:id/op_add'
    private equalButton = 'id:com.google.android.calculator:id/eq'
    private result = 'id:com.google.android.calculator:id/result_final'

    async AddFromRange(from: number, to: number) {
        // Only for zero to positive integer
        for (let i: number = from; i <= to; i++){
            if (i < 10) {
                await this.inputNumber(i)
            } else {
                for (let c of i.toString()) {
                    await this.inputNumber(c)
                }
            }
            if (i != to)
                await this.inputOperator('ADD')
        }
        await this.inputOperator('EQUAL')
    }

    async inputNumber(num: string | number) {
        await browser.$(`${this.numberButton}${num}`).click();
    }

    async inputOperator(operatorName: string) {
        switch(operatorName) { 
            case 'ADD': { 
                await browser.$(this.addButton).click();
                break; 
            } 
            case 'EQUAL': { 
                await browser.$(this.equalButton).click();
               break; 
            } 
         } 
    }

    async checkSum (expected: string) {
        const result = await browser.$(this.result).getText()
        expect(result).to.equal(expected);
    }
}

export default new CalculatorPage();
