function shout(string) {
    // 1) receives one argument and returns it in all caps
    return string.toUpperCase();
}

function whisper(string) {
    // 2) receives one argument and returns it in all lowercase
    return string.toLowerCase();
}

function logShout(string) {
    // 3) takes a string argument and logs it in all caps using console.log()
    console.log(shout(string));
}

function logWhisper(string) {
    // 4) takes a string argument and logs it in all lowercase using console.log()
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    // 5) returns "I can't hear you!" if `string` is lowercase
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    // 6) returns "YES INDEED!" if `string` is uppercase
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    // 7) returns "I would love to!" if `string` is "Let's have dinner together!"
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
