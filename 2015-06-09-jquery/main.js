$(document).ready(function(){
    var id = 0;
    $('button').on('click', function(){
        getCard()
            .append(removeLink)
            .append('<h2>Task:</h2>')
            .append('<p>' + $('#newItem').val() + '</p>')
            .appendTo('.container');
        $('#newItem').val('');
    });
    
    $('div').on('click', 'a', function(){
        $(this).parent().remove();
    });
    
    var getCard = function(){
        return $('<div/>', {
            class: 'col-xs-12 col-sm-6 col-md-4 col-lg-3 well card'
        });
    };
    
    var removeLink = function(){
        return $('<a/>', {
            class: 'delete pull-right',
            href: '#',
            text: '[remove]'
        });
    };
});