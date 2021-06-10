class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand.toString() + this.operation.toString();
        this.currentOperand = ''

    }

    compute() {
        if (this.operation === '×') {
            this.previousOperand = Number(this.currentOperand) * Number(this.previousOperand.slice(0, -1));
            this.currentOperand = ''
        }
        if (this.operation === '÷') {
            this.previousOperand = Number(this.currentOperand) / Number(this.previousOperand.slice(0, -1));
            this.currentOperand = ''
        }
        if (this.operation === "-") {
            this.previousOperand = Number(this.previousOperand.slice(0, -1)) - Number(this.currentOperand);
            this.currentOperand = ''
        }
        if (this.operation === '+') {
            this.previousOperand = Number(this.currentOperand) + Number(this.previousOperand.slice(0, -1));
            this.currentOperand = ''
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }


}

const numberButtons = document.querySelectorAll('[data-number');
const operationButtons = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

operationButtons.forEach((operation) => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})