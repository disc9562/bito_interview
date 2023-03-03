import CalculatorPage from '../pageobjects/calculator.page.js'

describe('Test adding multiple numbers', () => {
    it('Test add from one to ten', async () => {
        const expectedNum = '55'

        await CalculatorPage.AddFromRange(1,10)
        await CalculatorPage.checkSum(expectedNum)
    })
})


