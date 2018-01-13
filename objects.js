var playlist = {artistName:"songtitle"};


function updatePlaylist(playlist,artistName,songtitle){
  return Object.assign(playlist, {[artistName]:songtitle});
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist
}

//brackets are used for evaulation
// dots are used to refer back to somthing existing in the function
