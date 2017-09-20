var calculator = {
    add : function(param1, param2) {
        return param1+param2;        
    },
    subtract: function(param1, param2){
        return param1 - param2;
    },
    multiply: function (param1, param2) {
        return param1 * param2;
    },
    divide: function (param1, param2) {
        return param1 / param2;
    }
};

module.exports = calculator;