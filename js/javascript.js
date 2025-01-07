let count = 0;

function increment() {
    count++;
    let messageText = document.querySelector("#message").innerHTML;
    let countText = document.querySelector("#counter").innerHTML;

    switch (count) {
        case 5:
            messageText = "Wow, you clicked five times? That's not really enough to reveal a proper secret but I guess I could change the text.";
            break;
        case 10:
            messageText = "Double or nothing! Now we're getting somewhere. Actually, hang on, give me a second...";
            break;
        case 15:
            messageText = "Keep clicking, I'm sure I'll manage to get this thing working soon enough...";
            break;
        case 20:
            messageText = "Alright! Now you can see how many times you clicked on the button. Surely this will motivate you to click more.";
            break;

    }

    if (count >= 20) {
        countText = "You have clicked on the button for a total of " + count + " times.";
    }

    console.log(count);
    document.querySelector("#counter").innerHTML = countText;
    document.querySelector("#message").innerHTML = messageText;
}

