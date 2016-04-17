(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();

    $('form').submit(function() {
        socket.emit('newsfeed', $('#user_input').val());
        $('#user_input').val('');

        return false;
    });

    socket.on("newsfeed", function(data) {
        var parsedData = data;
        // grab and parse data and assign it to the parsedData variable.

        // other possible solution(s) here
        $('#messages').prepend($('<li>').html(messageTemplate(parsedData)));

});

    
    // You may use this for updating new message
    function messageTemplate(template) {

        var result = '<div class="user" style="font-size:30px">' +
            '<div class="user-image">' +
            '<img src="' + template.picture + '" alt="">' +
            '</div>' +
            '<div class="user-info" >' +
            '<span class="username">' + template.user + '</span><br/>' +
            '<span class="posted" style="font-size: 70%">' + template.posted + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="message-content"style="font-size: 25px">' +
            template.message +
            '</div>';
        return result;
    }
})($);