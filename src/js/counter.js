$(document).ready(function() {
    var val = 1;
    $('.count__elem-increment').click(function() {
        if (val>98) {
            val=99
        }
        else {
            val++
        }
        $('.count__result').val(val);
    });
    $('.count__elem-decrement').click(function() {
        if (val<2) {
            val=1
        }
        else {
            val--
        }
        $('.count__result').val(val);
    });
});