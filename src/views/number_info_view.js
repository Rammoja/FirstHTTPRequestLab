const PubSub = require("../helpers/pub_sub.js");

const NumberInfoView = function (container) {
  this.container = container;
};


NumberInfoView.prototype.bindEventsInfo = function(){
  PubSub.subscribe('Fact:fact-loaded', (evt) => {
    const fact = evt.detail;
    this.generate(fact);

  });
};

NumberInfoView.prototype.generate = function(fact){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = fact;
  // this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};


module.exports = NumberInfoView;
