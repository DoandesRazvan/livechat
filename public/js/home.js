(function($){
    // dom
    const $messages = $('.messages'),
          $user = $('.main-wrapper--compose--user'),
          $userMessage = $('.main-wrapper--compose--user-message'),
          $sendMessage = $('.main-wrapper--compose--user-message-send');

    // socket
    const socket = io.connect('https://thelivechat.herokuapp.com/');

    // emit
    $sendMessage.on('click', () => {
        // checking if user and message values are not empty
        let $userVal = $user.val(),
            $userMessageVal = $userMessage.val();

        if ($userVal.length > 0 && $userMessageVal.length > 0) {
            socket.emit('new-message', {
                user: $userVal,
                message: $userMessageVal
            });
        }
    });

    // listen
    socket.on('new-message', (data) => {
        let user = data.user,
            message = data.message;

        // adding message to chat once received from back-end
        $messages.append(
            `
                <div class="messages--message">
                    <h4 class="messages--message--sender">${user}:</h4>
                    <span class="messages--message--text">${message}</span>
                </div>
            `
        );

        // clearing message box
        $userMessage.val("");
    });
})(jQuery)