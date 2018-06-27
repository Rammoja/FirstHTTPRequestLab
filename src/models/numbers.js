const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Numbers = function () {
  this.text = null;
};



Numbers.prototype.getData = function () {

  PubSub.subscribe('NumberFormView:submit', (evt) => {
    const number = evt.detail;
    const request = new Request(`http://numbersapi.com/${number}?json`);

    request.get((data) => {
      this.text = data.text;
      PubSub.publish('Fact:fact-loaded', this.text);
    });
  });
};


module.exports = Numbers;
