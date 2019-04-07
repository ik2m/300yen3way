var random;
var text;
$(function(){

    $('#stop-btn').on('click',function() {
        random=Math.random();
        console.log(random);
        text=setTextByRandNum(random);
        $('#roulette-text').text(text);
        $('#stop-btn').prop('disabled',true);
    })
    
    function setTextByRandNum(randNum) {
        if(randNum<0.5){
            return "おかし";
        }else if(randNum<0.8){
            return "ジュース";
        }else{
            return "お茶";
        }
    }
});