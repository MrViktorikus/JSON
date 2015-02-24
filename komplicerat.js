
$(function(){
                var JSONtesting = [];
                $.getJSON('JSONtesting.json', function(JSONtesting){
                    console.log(JSONtesting.lesmonkeys);
//                    $('body').append(JSONtesting.lesmonkeys[0].Apjefvel);
//                    $('body').append(JSONtesting.lesmonkeys[0].lastName);
//                    $('body').append(JSONtesting.lesmonkeys[1].Apjefvel);
//                    $('body').append(JSONtesting.lesmonkeys[1].lastName);
//                    $('body').append(JSONtesting.lesmonkeys[2].Apjefvel);
//                    $('body').append(JSONtesting.lesmonkeys[2].lastName);
                    $('body').each(function(JSONtesting){
                        $('body').append(JSONtesting.lesmonkeys.Apjefvel);
                    });
                });
            });
            