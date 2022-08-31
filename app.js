// https://www.omnicalculator.com/finance/coupon-payment

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const couponpaymentRadio = document.getElementById('couponpaymentRadio');
const facevalueofbondRadio = document.getElementById('facevalueofbondRadio');
const annualcouponrateRadio = document.getElementById('annualcouponrateRadio');
const numberofpaymentsperannumRadio = document.getElementById('numberofpaymentsperannumRadio');

let couponpayment;
let facevalueofbond = v1;
let annualcouponrate = v2;
let numberofpaymentsperannum = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

couponpaymentRadio.addEventListener('click', function() {
  variable1.textContent = 'Face value of bond';
  variable2.textContent = 'Annual coupon rate';
  variable3.textContent = 'Number of payments per annum';
  facevalueofbond = v1;
  annualcouponrate = v2;
  numberofpaymentsperannum = v3;
  result.textContent = '';
});

facevalueofbondRadio.addEventListener('click', function() {
  variable1.textContent = 'Coupon payment';
  variable2.textContent = 'Annual coupon rate';
  variable3.textContent = 'Number of payments per annum';
  couponpayment = v1;
  annualcouponrate = v2;
  numberofpaymentsperannum = v3;
  result.textContent = '';
});

annualcouponrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Coupon payment';
  variable2.textContent = 'Face value of bond';
  variable3.textContent = 'Number of payments per annum';
  couponpayment = v1;
  facevalueofbond = v2;
  numberofpaymentsperannum = v3;
  result.textContent = '';
});

numberofpaymentsperannumRadio.addEventListener('click', function() {
  variable1.textContent = 'Coupon payment';
  variable2.textContent = 'Face value of bond';
  variable3.textContent = 'Annual coupon rate';
  couponpayment = v1;
  facevalueofbond = v2;
  annualcouponrate = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(couponpaymentRadio.checked)
    result.textContent = `Coupon payment = ${computecouponpayment().toFixed(2)}`;

  else if(facevalueofbondRadio.checked)
    result.textContent = `Face value of bond = ${computefacevalueofbond().toFixed(2)}`;

  else if(annualcouponrateRadio.checked)
    result.textContent = `Annual coupon rate = ${computeannualcouponrate().toFixed(2)}`;

  else if(numberofpaymentsperannumRadio.checked)
    result.textContent = `Number of payments per annum = ${computenumberofpaymentsperannum().toFixed(2)}`;
})

// calculation

function computecouponpayment() {
  return Number(facevalueofbond.value) * ((Number(annualcouponrate.value) / 100) / Number(numberofpaymentsperannum.value));
}

function computefacevalueofbond() {
  return Number(couponpayment.value) / ((Number(annualcouponrate.value) / 100) / Number(numberofpaymentsperannum.value));
}

function computeannualcouponrate() {
  return ((Number(couponpayment.value) * Number(numberofpaymentsperannum.value)) / Number(facevalueofbond.value)) * 100;
}

function computenumberofpaymentsperannum() {
  return Number(facevalueofbond.value) * ((Number(annualcouponrate.value) / 100) / Number(couponpayment.value));
}