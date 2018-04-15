!function() {
	// When a player is killed, say Sorry to him vía a Bubble over our ship!
	SWAM.on("playerKilled", function(data, dead, killer){
		if (killer.id == game.myID)
		{
		// An enemy was killed. But we are polite, so we say sorry vía a bubble!
		Network.sendSay("Sorry " + dead.name);
		}
	});


	// Register the file as an extension
	SWAM.registerExtension({
		name: "Tutorial - Part 2",
		id: "Tutorial2",
		description: "Playing with StarMash events!",
		author: "YOUR_NAME_HERE",
		version: "1.0"
	});
}();