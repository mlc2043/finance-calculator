// Get DOM elements
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const yearsInput = document.getElementById('years');
const monthsInput = document.getElementById('months');
const daysInput = document.getElementById('days');
const frequencySelect = document.getElementById('frequency');
const frequencyGroup = document.getElementById('frequency-group');
const interestDisplay = document.getElementById('interest');
const totalDisplay = document.getElementById('total');
const timePeriodDisplay = document.getElementById('timePeriod');
const interestLabel = document.getElementById('interest-label');
const effectiveRateItem = document.getElementById('effective-rate-item');
const effectiveRateDisplay = document.getElementById('effectiveRate');
const resultsDiv = document.getElementById('results');

// EMI Calculator elements
const loanAmountInput = document.getElementById('loan-amount');
const emiRateInput = document.getElementById('emi-rate');
const tenureYearsInput = document.getElementById('tenure-years');
const tenureMonthsInput = document.getElementById('tenure-months');
const monthlyEmiDisplay = document.getElementById('monthly-emi');
const totalInterestDisplay = document.getElementById('total-interest');
const totalAmountDisplay = document.getElementById('total-amount');
const loanTenureDisplay = document.getElementById('loan-tenure-display');

// Date Converter elements
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const dateOperationSelect = document.getElementById('date-operation');
const daysInputGroup = document.getElementById('days-input-group');
const daysInputField = document.getElementById('days-input');
const dateResultDisplay = document.getElementById('date-result');
const dateDaysDisplay = document.getElementById('date-days');
const dateWeeksDisplay = document.getElementById('date-weeks');
const dateMonthsDisplay = document.getElementById('date-months');

// Field containers
const interestFields = document.getElementById('interest-fields');
const emiFields = document.getElementById('emi-fields');
const dateFields = document.getElementById('date-fields');
const interestResults = document.getElementById('interest-results');
const emiResults = document.getElementById('emi-results');
const dateResults = document.getElementById('date-results');

// Language elements
const mainTitle = document.getElementById('main-title');
const calculateBtn = document.getElementById('calculate-btn');

// Global variables
let currentCalculatorType = 'simple';
let currentLanguage = 'en';

// Language data
const languageData = {
    en: {
        'main-title': 'Financial Calculator',
        'calculate-btn': 'Calculate',
        'principal-label': 'Principal Amount (NPR)',
        'rate-label': 'Interest Rate (% per annum)',
        'time-label': 'Time Period',
        'frequency-label': 'Compounding Frequency',
        'loan-amount-label': 'Loan Amount (NPR)',
        'loan-tenure-label': 'Loan Tenure',
        'start-date-label': 'Start Date',
        'end-date-label': 'End Date',
        'operation-label': 'Operation',
        'days-input-label': 'Number of Days',
        'simple-interest': 'Simple Interest:',
        'compound-interest': 'Compound Interest:',
        'total-amount': 'Total Amount:',
        'time-period': 'Time Period:',
        'effective-rate': 'Effective Annual Rate:',
        'monthly-emi': 'Monthly EMI:',
        'total-interest': 'Total Interest:',
        'loan-tenure-display': 'Loan Tenure:',
        'date-result': 'Result:',
        'date-days': 'Days:',
        'date-weeks': 'Weeks:',
        'date-months': 'Months:',
        'years': 'years',
        'year': 'year',
        'months': 'months',
        'month': 'month',
        'days': 'days',
        'day': 'day',
        'annually': 'Annually',
        'semi-annually': 'Semi-annually',
        'quarterly': 'Quarterly',
        'monthly': 'Monthly',
        'daily': 'Daily',
        'simple-interest-btn': 'Simple Interest',
        'compound-interest-btn': 'Compound Interest',
        'emi-calculator-btn': 'EMI Calculator',
        'date-converter-btn': 'Date Converter',
        'calculate-difference': 'Calculate Difference',
        'add-days': 'Add Days',
        'subtract-days': 'Subtract Days'
    },
    np: {
        'main-title': 'वित्तीय क्यालकुलेटर',
        'calculate-btn': 'गणना गर्नुहोस्',
        'principal-label': 'मूल रकम (एनपीआर)',
        'rate-label': 'ब्याज दर (% प्रति वर्ष)',
        'time-label': 'समय अवधि',
        'frequency-label': 'चक्रवृद्धि आवृत्ति',
        'loan-amount-label': 'ऋण रकम (एनपीआर)',
        'loan-tenure-label': 'ऋण अवधि',
        'start-date-label': 'सुरुवाती मिति',
        'end-date-label': 'अन्तिम मिति',
        'operation-label': 'कार्य',
        'days-input-label': 'दिनहरूको संख्या',
        'simple-interest': 'सरल ब्याज:',
        'compound-interest': 'चक्रवृद्धि ब्याज:',
        'total-amount': 'कुल रकम:',
        'time-period': 'समय अवधि:',
        'effective-rate': 'प्रभावकारी वार्षिक दर:',
        'monthly-emi': 'मासिक ईएमआई:',
        'total-interest': 'कुल ब्याज:',
        'loan-tenure-display': 'ऋण अवधि:',
        'date-result': 'परिणाम:',
        'date-days': 'दिनहरू:',
        'date-weeks': 'हप्ताहहरू:',
        'date-months': 'महिनाहरू:',
        'years': 'वर्ष',
        'year': 'वर्ष',
        'months': 'महिना',
        'month': 'महिना',
        'days': 'दिन',
        'day': 'दिन',
        'annually': 'वार्षिक',
        'semi-annually': 'अर्धवार्षिक',
        'quarterly': 'त्रैमासिक',
        'monthly': 'मासिक',
        'daily': 'दैनिक',
        'simple-interest-btn': 'सरल ब्याज',
        'compound-interest-btn': 'चक्रवृद्धि ब्याज',
        'emi-calculator-btn': 'ईएमआई क्यालकुलेटर',
        'date-converter-btn': 'मिति रूपान्तरक',
        'calculate-difference': 'अन्तर गणना गर्नुहोस्',
        'add-days': 'दिनहरू थप्नुहोस्',
        'subtract-days': 'दिनहरू घटाउनुहोस्'
    }
};

// Add input event listeners for real-time validation
[principalInput, rateInput, yearsInput, monthsInput, daysInput, loanAmountInput, emiRateInput, tenureYearsInput, tenureMonthsInput, daysInputField].forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0) {
            this.value = 0;
        }
    });
});

// Date operation change handler
dateOperationSelect.addEventListener('change', function() {
    if (this.value === 'difference') {
        daysInputGroup.style.display = 'none';
        endDateInput.style.display = 'block';
        endDateInput.parentElement.style.display = 'block';
    } else {
        daysInputGroup.style.display = 'block';
        endDateInput.style.display = 'none';
        endDateInput.parentElement.style.display = 'none';
    }
});

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language toggle button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all text content
    updateLanguageContent();
}

// Function to update all text content based on current language
function updateLanguageContent() {
    // Update main title
    mainTitle.textContent = languageData[currentLanguage]['main-title'];
    
    // Update calculate button
    calculateBtn.textContent = languageData[currentLanguage]['calculate-btn'];
    
    // Update calculator type buttons
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns[0].textContent = languageData[currentLanguage]['simple-interest-btn'];
    toggleBtns[1].textContent = languageData[currentLanguage]['compound-interest-btn'];
    toggleBtns[2].textContent = languageData[currentLanguage]['emi-calculator-btn'];
    toggleBtns[3].textContent = languageData[currentLanguage]['date-converter-btn'];
    
    // Update labels
    document.querySelectorAll('[data-en]').forEach(element => {
        if (element.hasAttribute('data-' + currentLanguage)) {
            element.textContent = element.getAttribute('data-' + currentLanguage);
        }
    });
    
    // Update select options
    const frequencyOptions = frequencySelect.querySelectorAll('option');
    frequencyOptions[0].textContent = languageData[currentLanguage]['annually'];
    frequencyOptions[1].textContent = languageData[currentLanguage]['semi-annually'];
    frequencyOptions[2].textContent = languageData[currentLanguage]['quarterly'];
    frequencyOptions[3].textContent = languageData[currentLanguage]['monthly'];
    frequencyOptions[4].textContent = languageData[currentLanguage]['daily'];
    
    // Update date operation options
    const dateOperationOptions = dateOperationSelect.querySelectorAll('option');
    dateOperationOptions[0].textContent = languageData[currentLanguage]['calculate-difference'];
    dateOperationOptions[1].textContent = languageData[currentLanguage]['add-days'];
    dateOperationOptions[2].textContent = languageData[currentLanguage]['subtract-days'];
}

// Function to switch between calculator types
function switchCalculatorType(type) {
    currentCalculatorType = type;
    
    // Update toggle button states
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide appropriate fields and results
    if (type === 'emi') {
        interestFields.style.display = 'none';
        emiFields.style.display = 'block';
        dateFields.style.display = 'none';
        interestResults.style.display = 'none';
        emiResults.style.display = 'block';
        dateResults.style.display = 'none';
        frequencyGroup.style.display = 'none';
    } else if (type === 'date') {
        interestFields.style.display = 'none';
        emiFields.style.display = 'none';
        dateFields.style.display = 'block';
        interestResults.style.display = 'none';
        emiResults.style.display = 'none';
        dateResults.style.display = 'block';
        frequencyGroup.style.display = 'none';
    } else {
        interestFields.style.display = 'block';
        emiFields.style.display = 'none';
        dateFields.style.display = 'none';
        interestResults.style.display = 'block';
        emiResults.style.display = 'none';
        dateResults.style.display = 'none';
        
        if (type === 'compound') {
            frequencyGroup.style.display = 'block';
            interestLabel.textContent = languageData[currentLanguage]['compound-interest'];
            effectiveRateItem.style.display = 'flex';
        } else {
            frequencyGroup.style.display = 'none';
            interestLabel.textContent = languageData[currentLanguage]['simple-interest'];
            effectiveRateItem.style.display = 'none';
        }
    }
    
    // Reset results
    resetCalculator();
}

// Main calculation function
function calculate() {
    if (currentCalculatorType === 'emi') {
        calculateEMI();
    } else if (currentCalculatorType === 'date') {
        calculateDate();
    } else {
        calculateInterest();
    }
}

// Date calculation function
function calculateDate() {
    const operation = dateOperationSelect.value;
    
    if (operation === 'difference') {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        
        if (!startDateInput.value || !endDateInput.value) {
            alert(currentLanguage === 'np' ? 'कृपया दुवै मितिहरू प्रविष्ट गर्नुहोस्।' : 'Please enter both dates.');
            return;
        }
        
        if (startDate > endDate) {
            alert(currentLanguage === 'np' ? 'सुरुवाती मिति अन्तिम मितिभन्दा पछि हुनुहुँदैन।' : 'Start date cannot be after end date.');
            return;
        }
        
        const timeDiff = endDate.getTime() - startDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        // Calculate weeks and months
        const weeks = Math.floor(daysDiff / 7);
        const months = Math.floor(daysDiff / 30.44); // Average days per month
        
        // Update display
        dateResultDisplay.textContent = `${startDateInput.value} to ${endDateInput.value}`;
        dateDaysDisplay.textContent = daysDiff;
        dateWeeksDisplay.textContent = weeks;
        dateMonthsDisplay.textContent = months;
        
    } else {
        const startDate = new Date(startDateInput.value);
        const days = parseInt(daysInputField.value) || 0;
        
        if (!startDateInput.value) {
            alert(currentLanguage === 'np' ? 'कृपया सुरुवाती मिति प्रविष्ट गर्नुहोस्।' : 'Please enter start date.');
            return;
        }
        
        if (days <= 0) {
            alert(currentLanguage === 'np' ? 'कृपया 0 भन्दा ठूलो दिनहरूको संख्या प्रविष्ट गर्नुहोस्।' : 'Please enter a valid number of days greater than 0.');
            return;
        }
        
        let resultDate;
        if (operation === 'add') {
            resultDate = new Date(startDate.getTime() + (days * 24 * 60 * 60 * 1000));
        } else {
            resultDate = new Date(startDate.getTime() - (days * 24 * 60 * 60 * 1000));
        }
        
        // Format result date
        const resultDateStr = resultDate.toISOString().split('T')[0];
        
        // Update display
        dateResultDisplay.textContent = resultDateStr;
        dateDaysDisplay.textContent = days;
        dateWeeksDisplay.textContent = Math.floor(days / 7);
        dateMonthsDisplay.textContent = Math.floor(days / 30.44);
    }
    
    // Show results with animation
    showResults();
}

// EMI calculation function
function calculateEMI() {
    const loanAmount = parseFloat(loanAmountInput.value) || 0;
    const rate = parseFloat(emiRateInput.value) || 0;
    const years = parseInt(tenureYearsInput.value) || 0;
    const months = parseInt(tenureMonthsInput.value) || 0;

    // Validate inputs
    if (loanAmount <= 0) {
        alert(currentLanguage === 'np' ? 'कृपया 0 भन्दा ठूलो मान्य ऋण रकम प्रविष्ट गर्नुहोस्।' : 'Please enter a valid loan amount greater than 0.');
        return;
    }

    if (rate <= 0) {
        alert(currentLanguage === 'np' ? 'कृपया 0 भन्दा ठूलो मान्य ब्याज दर प्रविष्ट गर्नुहोस्।' : 'Please enter a valid interest rate greater than 0.');
        return;
    }

    if (years === 0 && months === 0) {
        alert(currentLanguage === 'np' ? 'कृपया मान्य ऋण अवधि प्रविष्ट गर्नुहोस्।' : 'Please enter a valid loan tenure.');
        return;
    }

    // Calculate total tenure in months
    const totalTenureMonths = (years * 12) + months;
    
    // Monthly interest rate
    const monthlyRate = rate / (12 * 100);
    
    // EMI Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    let monthlyEMI;
    if (monthlyRate === 0) {
        monthlyEMI = loanAmount / totalTenureMonths;
    } else {
        const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalTenureMonths);
        const denominator = Math.pow(1 + monthlyRate, totalTenureMonths) - 1;
        monthlyEMI = numerator / denominator;
    }
    
    // Calculate total amount and interest
    const totalAmount = monthlyEMI * totalTenureMonths;
    const totalInterest = totalAmount - loanAmount;
    
    // Format tenure display
    let tenureDisplay = '';
    if (years > 0) {
        tenureDisplay += `${years} ${years > 1 ? languageData[currentLanguage]['years'] : languageData[currentLanguage]['year']}`;
    }
    if (months > 0) {
        if (tenureDisplay) tenureDisplay += ', ';
        tenureDisplay += `${months} ${months > 1 ? languageData[currentLanguage]['months'] : languageData[currentLanguage]['month']}`;
    }
    
    // Update display
    monthlyEmiDisplay.textContent = `NPR ${monthlyEMI.toFixed(2)}`;
    totalInterestDisplay.textContent = `NPR ${totalInterest.toFixed(2)}`;
    totalAmountDisplay.textContent = `NPR ${totalAmount.toFixed(2)}`;
    loanTenureDisplay.textContent = tenureDisplay;
    
    // Show results with animation
    showResults();
}

// Interest calculation function
function calculateInterest() {
    // Get input values
    const principal = parseFloat(principalInput.value) || 0;
    const rate = parseFloat(rateInput.value) || 0;
    const years = parseInt(yearsInput.value) || 0;
    const months = parseInt(monthsInput.value) || 0;
    const days = parseInt(daysInput.value) || 0;

    // Validate inputs
    if (principal <= 0) {
        alert(currentLanguage === 'np' ? 'कृपया 0 भन्दा ठूलो मान्य मूल रकम प्रविष्ट गर्नुहोस्।' : 'Please enter a valid principal amount greater than 0.');
        return;
    }

    if (rate <= 0) {
        alert(currentLanguage === 'np' ? 'कृपया 0 भन्दा ठूलो मान्य ब्याज दर प्रविष्ट गर्नुहोस्।' : 'Please enter a valid interest rate greater than 0.');
        return;
    }

    if (years === 0 && months === 0 && days === 0) {
        alert(currentLanguage === 'np' ? 'कृपया मान्य समय अवधि प्रविष्ट गर्नुहोस्।' : 'Please enter a valid time period.');
        return;
    }

    // Calculate total time in years
    const totalTimeInYears = years + (months / 12) + (days / 365);
    
    let interest, totalAmount, effectiveRate;

    if (currentCalculatorType === 'simple') {
        // Calculate simple interest: P × R × T / 100
        interest = (principal * rate * totalTimeInYears) / 100;
        totalAmount = principal + interest;
        effectiveRate = rate;
    } else {
        // Calculate compound interest
        const frequency = parseInt(frequencySelect.value);
        const r = rate / 100;
        const n = frequency;
        const t = totalTimeInYears;
        
        // Compound Interest Formula: A = P(1 + r/n)^(nt)
        totalAmount = principal * Math.pow(1 + r/n, n * t);
        interest = totalAmount - principal;
        
        // Calculate effective annual rate: (1 + r/n)^n - 1
        effectiveRate = (Math.pow(1 + r/n, n) - 1) * 100;
    }

    // Format time period display
    let timeDisplay = '';
    if (years > 0) {
        timeDisplay += `${years} ${years > 1 ? languageData[currentLanguage]['years'] : languageData[currentLanguage]['year']}`;
    }
    if (months > 0) {
        if (timeDisplay) timeDisplay += ', ';
        timeDisplay += `${months} ${months > 1 ? languageData[currentLanguage]['months'] : languageData[currentLanguage]['month']}`;
    }
    if (days > 0) {
        if (timeDisplay) timeDisplay += ', ';
        timeDisplay += `${days} ${days > 1 ? languageData[currentLanguage]['days'] : languageData[currentLanguage]['day']}`;
    }

    // Update display
    interestDisplay.textContent = `NPR ${interest.toFixed(2)}`;
    totalDisplay.textContent = `NPR ${totalAmount.toFixed(2)}`;
    timePeriodDisplay.textContent = timeDisplay;
    
    if (currentCalculatorType === 'compound') {
        effectiveRateDisplay.textContent = `${effectiveRate.toFixed(2)}%`;
    }

    // Show results with animation
    showResults();
}

// Function to show results with smooth animation
function showResults() {
    resultsDiv.classList.add('show');
}

// Function to reset calculator
function resetCalculator() {
    // Reset interest calculator fields
    principalInput.value = '';
    rateInput.value = '';
    yearsInput.value = '';
    monthsInput.value = '';
    daysInput.value = '';
    
    interestDisplay.textContent = 'NPR 0.00';
    totalDisplay.textContent = 'NPR 0.00';
    timePeriodDisplay.textContent = `0 ${languageData[currentLanguage]['years']}`;
    effectiveRateDisplay.textContent = '0.00%';
    
    // Reset EMI calculator fields
    loanAmountInput.value = '';
    emiRateInput.value = '';
    tenureYearsInput.value = '';
    tenureMonthsInput.value = '';
    
    monthlyEmiDisplay.textContent = 'NPR 0.00';
    totalInterestDisplay.textContent = 'NPR 0.00';
    totalAmountDisplay.textContent = 'NPR 0.00';
    loanTenureDisplay.textContent = `0 ${languageData[currentLanguage]['years']}`;
    
    // Reset date calculator fields
    startDateInput.value = '';
    endDateInput.value = '';
    daysInputField.value = '';
    
    dateResultDisplay.textContent = '-';
    dateDaysDisplay.textContent = '0';
    dateWeeksDisplay.textContent = '0';
    dateMonthsDisplay.textContent = '0';
    
    resultsDiv.classList.remove('show');
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
    if (event.key === 'Escape') {
        resetCalculator();
    }
});

// Add input validation for months and days
monthsInput.addEventListener('input', function() {
    if (this.value > 11) {
        this.value = 11;
    }
});

daysInput.addEventListener('input', function() {
    if (this.value > 364) {
        this.value = 364;
    }
});

tenureMonthsInput.addEventListener('input', function() {
    if (this.value > 11) {
        this.value = 11;
    }
});

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    // Focus on first input
    principalInput.focus();
    
    // Set default calculator type and language
    currentCalculatorType = 'simple';
    currentLanguage = 'en';
    
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    startDateInput.value = today;
    endDateInput.value = today;
    
    // Update language content initially
    updateLanguageContent();
    
    // Add some example values for demonstration
    // principalInput.value = '10000';
    // rateInput.value = '8.5';
    // yearsInput.value = '2';
});
