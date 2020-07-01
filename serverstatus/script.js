//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/47.201.211.17/25565";
//https://mcapi.us/server/status?ip=47.201.211.17&port=25565
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.online > 0 ){ pl = '<br>Leader: '+r.players.sample[0].name;  } 
  $('#rest').html(r.description+'<br>Players Online: '+r.players.online+pl);

    
});
