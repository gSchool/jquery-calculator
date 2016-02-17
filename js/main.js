$(function(){

  function Calculator(){
    this.opChosen = null;
    this.storedValue = null;
    this.currentValue = '0';
  }
  Calculator.prototype = {
    _clearStored: function(){
      this.opChosen = null;
      this.storedValue = null;
    },
    performOp: function(){
      if(!this.isReadyToCompute()) return false;
      var result = null;
      if(this.opChosen === '+'){
        result = Number(this.storedValue) + Number(this.currentValue);
      }else if(this.opChosen === '-') {
        result = Number(this.storedValue) - Number(this.currentValue);
      }else if(this.opChosen === "\u00f7"){
        result = Number(this.storedValue) / Number(this.currentValue);
      }else{
        result = Number(this.storedValue) * Number(this.currentValue);
      }
      this.currentValue = result;
      this._clearStored();
      return result;
    },
    clear: function(){
      this._clearCurrent();
      this._clearStored();
    },
    _clearCurrent: function(){
      this.currentValue = '0';
    },
    isReadyToCompute: function(){
      return this.opChosen || this.storedValue;
    },
    setOp: function(op){
      this.opChosen = op;
    },
    storeValue: function(val){
      if(this.opChosen && !this.storedValue){
        this.storedValue = this.currentValue;
        this._clearCurrent();
      }
    },
    currentVal: function(val){
      if(!val || (val === '0' && this.currentValue === '0')) {
        return this.currentValue;
      }else{
        if(this.currentValue === '0') return this.currentValue = val;
        return this.currentValue += val;
      }
    }
  };


  var calculator = new Calculator();

  $("#screen").text(calculator.currentValue);
  console.log(calculator)
  $('span').on('click', function(){
    if($(this).hasClass('operator')){
      var operator = $(this).text();

      if (operator === '='){
        if(calculator.isReadyToCompute()) calculator.performOp();
      }else if (operator === 'C') {
        clearScreen();
        calculator.clear();
      }else{
        if(calculator.isReadyToCompute()) calculator.performOp();
        calculator.setOp(operator);
      }
    }else{
      calculator.storeValue();
      number = $(this).text();
      calculator.currentVal(number);
    }
    $('#screen').text(calculator.currentVal());

    function clearScreen(){
      $('#screen').text('0');
    }
  });
});
