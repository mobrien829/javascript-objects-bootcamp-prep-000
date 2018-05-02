var playlist = {
  artist: "song"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle'
}

function removeFromPlaylist (playlist, artistName) {
  var array = playlist
  delete array.artistName
  return playlist
}