$(function(){

  function Calculator(){
    this._opChosen = null;
    this._storedValue = null;
    this._currentValue = '0';
    this._resultCalculated = false;
  }
  Calculator.prototype = {
    _clearStored: function(){
      this._opChosen = null;
      this._storedValue = null;
    },
    performOp: function(){
      if(!this.isReadyToCompute()) return false;
      var result = null;
      if(this._opChosen === '+'){
        result = Number(this._storedValue) + Number(this._currentValue);
      }else if(this._opChosen === '-') {
        result = Number(this._storedValue) - Number(this._currentValue);
      }else if(this._opChosen === "\u00f7"){
        result = Number(this._storedValue) / Number(this._currentValue);
      }else{
        result = Number(this._storedValue) * Number(this._currentValue);
      }
      this._currentValue = result;
      this._resultCalculated = true;
      this._clearStored();
      return result;
    },
    clear: function(){
      this._clearCurrent();
      this._clearStored();
      this._resultCalculated = false;
    },
    _clearCurrent: function(){
      this._currentValue = '0';
    },
    isReadyToCompute: function(){
      return this._opChosen && this._storedValue;
    },
    setOp: function(op){
      this._opChosen = op;
      this._resultCalculated = false;
    },
    storeValue: function(val){
      if(this._opChosen && !this._storedValue){
        this._storedValue = this._currentValue;
        this._clearCurrent();
      }
    },
    currentVal: function(val){
      if(!val || (val === '0' && this._currentValue === '0')) {
        return this._currentValue;
      }else{
        if(this._currentValue === '0') return this._currentValue = val;
        if(this._resultCalculated === true){
          this._resultCalculated = false;
          this._currentValue = "";
        }
        return this._currentValue += val;
      }
    }
  };


  var calculator = new Calculator();

  $("#screen").text(calculator.currentVal());
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
