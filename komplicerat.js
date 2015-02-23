
$(function(){
                var JSONtesting = [];
                $.getJSON('JSONtesting.json', function(JSONtesting){
                    console.log(JSONtesting.lesmonkeys);
                    $('body').append(JSONtesting.lesmonkeys[0].Apjefvel);
                });
            });
            