       	function addIcono(id,src){
   		document.getElementById("iconos").innerHTML+="<img id='"+id+"' href='javascript:void(0);' width='30px' onclick='document.getElementById(\"vB_Editor_001_textarea\").value+=\"[img]"+src+"[/img]\";' class='iconos' src='"+src+"'>";
   	}
     
    	addIcono("ico1","https://dl.dropboxusercontent.com/s/5v51oh9lr20wiw4/Emoji%20Smiley-01.png");
        addIcono("ico2","http://findicons.com/files/icons/360/emoticons/128/happy.png"); 
