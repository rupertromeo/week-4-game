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

});
