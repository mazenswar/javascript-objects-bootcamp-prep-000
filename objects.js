//var meals = {};

//var meals = new Object();

var playlist = {
  bobMarley: 'Is this love?',
}

function updatePlaylist(pl, name, song) {
  pl.name = song;
  return pl;
}

function removeFromPlaylist(pl, name) {
  delete pl.name;
}