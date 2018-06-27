const NumberFormView = require('./views/number_form_view.js');
const NumberInfoView = require('./views/number_info_view.js');
const Numbers = require("./models/numbers.js");

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEventsForm();

  const numberInfo = document.querySelector('#number-fact');
  const numberInfoView = new NumberInfoView(numberInfo);
  numberInfoView.bindEventsInfo();

  const numbers = new Numbers();
  numbers.getData();

});
