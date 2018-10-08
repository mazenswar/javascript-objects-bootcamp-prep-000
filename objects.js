//var meals = {};

//var meals = new Object();

var playlist = {
  "Bob Marley": "Is this love?",
};

function updatePlaylist(obj, name, song) {
  obj.name = song;
  return obj;
}

function removeFromPlaylist(obj, name) {
  delete obj.name;
  return obj;
}


