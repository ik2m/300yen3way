var random;
var text;

$(function(){
    $(window).on('load',function(){
        if(Cookies.get('item')){
            console.log(Cookies.get('item'));
            $('#roulette-text').text(Cookies.get('item'));
            $('#stop-btn').prop('disabled',true);
        }
    });
    

    $('#stop-btn').on('click',function() {
        random=Math.random();
        console.log(random);
        text=setTextByRandNum(random);
        $('#roulette-text').text(text);
        Cookies.set('item', text,{ expires: 1 ,domain:'izumiikezaki.github.io'});
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