function Chat(){
    return(
        <chat>
            <div class="chat-container">
                <h3 class="title">Send message anonymously</h3>
                <form>
                    <div class="input-box">
                        <input type="text" class="message-chat" name="chat" placeholder="Enter a message..." autocomplete="off" />
                    </div>
                    <button class="submit-button" type="submit">Send</button>
                </form>
            </div>
        </chat>
    )
}

export default Chat;