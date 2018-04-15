!function() {
	SWAM.on("scoreboardUpdate", function(scores, minimap, maxScoreboard){
		var me = Players.getMe();
		for (var playerID in Players.getIDs()) {
			var player = Players.get(playerID);
			if (player.type == 5 && player.team != me.team) {
				console.log(player.lowResPos);
			}
		}
	});

	SWAM.registerExtension({
		name: "not-so-nice",
		id: "not-so-nice",
		description: "this is probably a bad idea",
		author: "jello",
		version: "0.1"
	});
}();