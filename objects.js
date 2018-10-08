//var meals = {};

//var meals = new Object();

var playlist = {
  "Bob Marley": "Is this love?",
};

function updatePlaylist(obj, name, song) {
  obj.name = song;
  return playlist;
}

function removeFromPlaylist(obj, name) {
  delete playlist.name;
  return playlist;
}


