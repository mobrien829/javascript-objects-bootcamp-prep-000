var playlist = {
  artist: "song"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle'
}

function removeFromPlaylist (playlist, artistName) {
  var array = playlist
  delete playlist.artistName
  return playlist
}