function resetIco(){
document.getElementById("iconos").innerHTML="";
}
function Precarga(){

}
function addIcono(id,drop,src){
    if(document.getElementById("vB_Editor_QR_textarea")){
    document.getElementById("iconos").innerHTML+="<img id='"+id+"' href='javascript:void(0);' width='30px' onclick='document.getElementById(\"vB_Editor_QR_textarea\").value+=\"[img]"+src+"[/img]\";' class='iconos' src='"+drop+"'>";
    }
    else if(document.getElementById("vB_Editor_001_textarea")){
    document.getElementById("iconos").innerHTML+="<img id='"+id+"' href='javascript:void(0);' width='30px' onclick='document.getElementById(\"vB_Editor_001_textarea\").value+=\"[img]"+src+"[/img]\";' class='iconos' src='"+drop+"'>";
    }else{
    document.getElementById("iconos").innerHTML="<h4 style='text-align:center;padding-top:40px;'>¡No puedes poner iconos :(</h4>";
    }
}
function selIcono(val){

if(val==1){ resetIco(); icoEmoji1(); }
if(val==2){ resetIco(); icoEmoji2(); }
if(val=="about"){ document.getElementById("iconos").innerHTML="<img class='logocreator' style='display:block;margin:0 auto 0 auto;' src='http://findicons.com/files/icons/346/sweet/128/cream_happy_ice.png'><h2 style='text-align:center;'><a href='http://www.forocoches.com/foro/private.php?do=newpm&u=335793'>¡Escríbeme!</a></h2>"; }

}
function cargaCss(csscode){var css = document.createElement("style");css.type = "text/css";css.innerHTML = csscode;document.body.appendChild(css);}

	function cargapanel(){
        var divpanel = document.createElement("button");
        divpanel.id = "panel-iconos";
        document.body.appendChild(divpanel);
        document.getElementById("panel-iconos").onclick = function() { 
           document.getElementById("panel-desplegado").style.display="inherit";
	       document.getElementById("panel-iconos").style.display="none";
        };
    }
    function desplegarpanel(){

    	var divpaneldesplegado = document.createElement("div");
        divpaneldesplegado.id = "panel-desplegado";
        divpaneldesplegado.innerHTML = "<div class='titulo'><div id='atras' class='atras'><<</div></div><div id='espera'></div><SELECT NAME='selico' id='selicono' onChange='selIcono(this.value)'><OPTION VALUE='0' selected></OPTION><OPTION VALUE='1'>Emoji-1</OPTION><OPTION VALUE='2'>Emoji-2</OPTION><OPTION VALUE='about'>¡Escríbeme!</OPTION> </SELECT><div id='iconos'><img width = '1px' src='#'></div>";
        divpaneldesplegado.innerHTML += "<script type='text/javascript'>alert();</script>"
        document.body.appendChild(divpaneldesplegado);
       	document.getElementById("atras").onclick = function() { 
	       document.getElementById("panel-desplegado").style.display="none";
	       document.getElementById("panel-iconos").style.display="inherit";
        };
    }

    	cargaCss("body{ background:#ccc;}margin:0;");
		cargaCss("#panel-iconos{width: 50px;height: 88px;background: transparent url('http://findicons.com/files/icons/346/sweet/128/cream_happy_ice.png');background-position: top;background-size: 83px;position:fixed;z-index:999;border:none;top:0;opacity: 0.7;}#panel-iconos:hover{opacity:1;}");
		cargaCss("#panel-desplegado{height: 102%;width: 328px;background: white;position: fixed;margin: -8px;display:none;-webkit-border-top-right-radius: 15px;-webkit-border-bottom-right-radius: 15px;-moz-border-radius-topright: 15px;-moz-border-radius-bottomright: 15px;border-top-right-radius: 15px;border-bottom-right-radius: 15px;-webkit-box-shadow: 12px -1px 0px -8px rgba(163,163,163,1);-moz-box-shadow: 12px -1px 0px -8px rgba(163,163,163,1);box-shadow: 12px -1px 0px -8px rgba(163,163,163,1);top:0;z-index:999;opacity:.95;}");
    	cargaCss("#panel-desplegado .titulo{text-align:center;background: #43E88E url('http://findicons.com/files/icons/346/sweet/128/cream_happy_ice.png') no-repeat;color: #fff;padding:31px;-webkit-box-shadow: 0px 5px 0px 1px rgba(163,163,163,0.43);-moz-box-shadow: 0px 5px 0px 1px rgba(163,163,163,0.43);box-shadow: 0px 5px 0px 1px rgba(163,163,163,0.43);border-radius: 0px 15px 0px 0px;-moz-border-radius: 0px 15px 0px 0px;-webkit-border-radius: 0px 15px 0px 0px;border: 0px solid #000000;}");
    	cargaCss("#panel-desplegado .titulo .atras{float: right;position: absolute;top: 9px;right: 0;padding: 16px;background: #25B268;border-radius: 50px;-moz-border-radius: 50px;-webkit-border-radius: 50px;}");    	
		cargaCss("#iconos{padding: 10px 26px;overflow: auto;height: 83%;}")
        cargaCss("#selicono{width: 100%;font-size: 16px;margin-top: 7px;}")
        cargapanel();
    	desplegarpanel();
        
