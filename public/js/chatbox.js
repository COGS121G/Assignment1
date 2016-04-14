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
    console.log(data);
    // grab and parse data and assign it to the parsedData variable.

    // other possible solution(s) here.
    $('#messages').prepend($('<li>').html(messageTemplate(parsedData)));

    function messageTemplate(parsedData) {
      // generate HTML text based on some data to be prepended into the list
    }
});
    // You may use this for updating new message
    function messageTemplate(template) {
        var result = '<div class="user">' +
            '<div class="user-image">' +
            '<img src="' + template.user.photo + '" alt="">' +
            '</div>' +
            '<div class="user-info">' +
            '<span class="username">' + template.user.username + '</span><br/>' +
            '<span class="posted">' + template.posted + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="message-content">' +
            template.message +
            '</div>';
        return result;
    }
})($);