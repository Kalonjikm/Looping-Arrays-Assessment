for(let i = 1002; i > 0, i -= 2;) {
    console.log(i);
}

for(let x = 0; x <= 10000; x++) {
    if(x == 2500) {
        alert("A quarter of the way there!");
    } else if(x == 5000) {
        alert("Halfway there!");
    } else if(x == 10000) {
        alert("The loop is done!");
    }
}

const favShows = ["Steven Universe", "Adventure Time", "Soul Eater", "Jojo's Bizzare Adventure", "Community"];

for(let y = 0; y < favShows.length; y++) {
    console.log("My #" + (y + 1) + " favorite show is " + favShows[y]);
}