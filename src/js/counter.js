$(document).ready(function() {
    var val = 1;
    $('.count__elem-increment').click(function() {
        (val>98) ? val=99 : val++
        $('.count__result').val(val);
    });
    $('.count__elem-decrement').click(function() {
        (val<2) ? val=1 : val--
        $('.count__result').val(val);
    });
});