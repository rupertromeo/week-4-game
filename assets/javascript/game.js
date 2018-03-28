/*



*/
$(document).ready(function() {

    //This is our target number that we want to reach by clicking portals
    const target = 137;

    //This is the current score we get from clicking crystals
    const currentScore = 0;

    //These are our gameplay variables
    const wins = 0;
    const losses = 0;
    const portals;

    //Here we get our random numbers to assign to the portals
    function portalNum() {
        return {
            portalOne: {
                points: Math.floor(Math.random() * 10) + 1,
                imageURL: "assets/images/RM_Portal.gif",
            },
            portalTwo: {
                points: Math.floor(Math.random() * 137) + 100,
                imageURL: "assets/images/RM_Portal.gif",
            },
            portalThree: {
                points: Math.floor(Math.random() * 13) + 1,
                imageURL: "assets/images/RM_Portal.gif",
            }
        };
    }

    //Here we reset our game
    function reset() {
        //set current score total to 0
        currentScore = 0;
        //Give portals new random number
        portals = portalNum();
    }
    //Here we update the page with how the game is going
    function update(winner) {
        $("#status-area").empty();

        if (winner === true) {
            $("#status-area")
            .append($("<p>")
            .text("Look at that Morty. We made it back home. Let's go get some of that McDonald's Mulan Schezuan Sauce!"));
            reset();
            showCurrentScore();
        }

        else if (winner === false) {
            $("#status-area")
            .append($("<p>")
            .text("Oh no, Morty!!! There's no coming back from this Morty."));
            reset();
            showCurrentScore();
        }
        
        //Our display for our wins and losses
        let winSpan = $("<span>"). text(wins);
        let lossSpan = $("<span>").text(losses);

        let winsText = $("<p>").text("Wins: ");
        let lossesText = $("<p>").text("Losses: ");

        winsText.append(winSpan);
        lossesText.append(lossSpan);
    }
    //Add our portals to the page
    //We use a for loop because we need to loop through our 3 portals
    function showPortals() {
        for (let key in portals) {
            const eachPortal = $("<div class='portal-button' data-name='" + key + "'>");
            const portalImg = $("<img alt='image' class='portal-img'>")
            .attr("src", portals[key].imageURL);
            eachPortal.append(portalImg);
            $("#portalContainer").append(eachPortal);
        }
    }

});
