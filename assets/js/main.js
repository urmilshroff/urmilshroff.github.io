$(document).ready(function() {
    setTimeout(() => {
        const text = baffle(".main-heading");
        text.set({
            characters: "Urmil Shroff",
            speed: 100
        });
        text.start();
        text.reveal(100000);
    }, 100);

    setTimeout(() => {
        var typed = new Typed('#typed', {
            strings: ["tech enthusiast ^1000 ", "python programmer ^1000", "flutter app developer ^1000 ", "open source contributor ^1000 ", "youtube creator ^1000"],
            shuffle: true,
            loop: true,
            cursorChar: '▊',
            typeSpeed: 100,
            backSpeed: 100,
        });
    }, 3000)
});