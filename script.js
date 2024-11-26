// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('math').style.display = 'none';
//     document.getElementById('bmi').style.display = 'none';
// });
function MathCalculator() {
    const mathSection = document.getElementById('math');
    const bmiSection = document.getElementById('bmi');
    
    // Show Math Calculator, Hide BMI Calculator
    mathSection.style.display = 'block';
    bmiSection.style.display = 'none';
}

function BMICalculator() {
    const mathSection = document.getElementById('math');
    const bmiSection = document.getElementById('bmi');

    // Show BMI Calculator, Hide Math Calculator
    mathSection.style.display = 'none';
    bmiSection.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const mathSection = document.getElementById('math');
    const display = document.getElementById('display');
    // display.type = 'text';
    // display.id = 'display';
    // display.readOnly = true;

    const displayContainer = mathSection.querySelector('.display-container');
    displayContainer.appendChild(display);

    const buttons = mathSection.querySelectorAll('.mathsButton li');
    
    buttons.forEach(button => {
        button.classList.add('button');
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            switch(value) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DEL':
                    deleteLastChar();
                    break;
                case '=':
                    calculate();
                    break;
                default:
                    appendValue(value);
            }
        });
    });

    function appendValue(value) {
        // Replace 'x' with '*' for multiplication
        const processedValue = value === 'x' ? '*' : value;
        display.value += processedValue;
    }

    function calculate() {
        try {
            // Replace 'x' with '*' before evaluation
            const expression = display.value.replace(/x/g, '*');
            display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    // Make MathCalculator function compatible with onclick event
    window.MathCalculator = function() {
        // You can add any specific initialization logic here if needed
        console.log('Math Calculator initialized');
    };
});
