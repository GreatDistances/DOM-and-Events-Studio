// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {

    console.log("test");

    let altitude = 0;

    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    //const leftButton = getElementById('left');
    //const rightButton = getElementById('right');
    //const upButton = getElementById('up');
    //const downButton = getElementById('down');

    const rocket = document.getElementById('rocket');

    let rocketPosX = 0;
    let rocketPosY = 0;

    takeoffButton.addEventListener('click', function() {
        console.log("takeoff button clicked");
        let shouldTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (shouldTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
            rocketPosY = 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    landButton.addEventListener('click', function() {
        let shouldLand = confirm('Are you ready to land the rocket?');

        if (shouldLand) {
            flightStatus.innerHTML = 'The shuttle has landed.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
            rocketPosY = 0;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    abortButton.addEventListener('click', function() {
        let shouldAbort = confirm('Do you want to abort the mission?');

        if (shouldAbort) {
            flightStatus.innerHTML = 'Mission Aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    document.addEventListener('click', function(event) {
        console.log(event.target.id);

        if (event.target.id === 'left') {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'right') {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
            
        }
        if (event.target.id === 'up') {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
            
        }
        if (event.target.id === 'down') {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });
});


//A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//The flight status should change to "Shuttle in flight."
//The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//The shuttle height should increase by 10,000 miles.
