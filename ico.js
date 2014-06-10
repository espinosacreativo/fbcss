function addIcono(id,drop,src){document.getElementById("iconos").innerHTML+="<img id='"+id+"' href='javascript:void(0);' width='30px' onclick='document.getElementById(\"vB_Editor_001_textarea\").value+=\"[img]"+src+"[/img]\";' class='iconos' src='"+drop+"'>";}
function test(val) {
    alert(val);
}		
	function cargacss(csscode){
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = csscode;
        document.body.appendChild(css);
    }

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
        divpaneldesplegado.innerHTML = "<div class='titulo'><div id='atras' class='atras'><<</div></div><SELECT NAME='selico' onChange='selico(this.value)'><OPTION VALUE='1'>Emoji</OPTION><OPTION VALUE='about'>Creador</OPTION> </SELECT><div id='iconos'><img width = '1px' src='#'></div>";
        divpaneldesplegado.innerHTML += "<script type='text/javascript'>alert();</script>"
        document.body.appendChild(divpaneldesplegado);
       	document.getElementById("atras").onclick = function() { 
	       document.getElementById("panel-desplegado").style.display="none";
	       document.getElementById("panel-iconos").style.display="inherit";
        };
		
    }

    	cargacss("body{ background:#ccc;}margin:0;");
		cargacss("#panel-iconos{width: 50px;height: 88px;background: transparent url('http://findicons.com/files/icons/346/sweet/128/cream_happy_ice.png');background-position: top;background-size: 83px;position:fixed;z-index:999;border:none;top:0;opacity: 0.7;}#panel-iconos:hover{opacity:1;}");
		cargacss("#panel-desplegado{height: 102%;width: 328px;background: white;position: fixed;margin: -8px;display:none;-webkit-border-top-right-radius: 15px;-webkit-border-bottom-right-radius: 15px;-moz-border-radius-topright: 15px;-moz-border-radius-bottomright: 15px;border-top-right-radius: 15px;border-bottom-right-radius: 15px;-webkit-box-shadow: 12px -1px 0px -8px rgba(163,163,163,1);-moz-box-shadow: 12px -1px 0px -8px rgba(163,163,163,1);box-shadow: 12px -1px 0px -8px rgba(163,163,163,1);top:0;z-index:999;opacity:.95;}");
    	cargacss("#panel-desplegado .titulo{text-align:center;background: #43E88E url('http://findicons.com/files/icons/346/sweet/128/cream_happy_ice.png') no-repeat;color: #fff;padding:31px;-webkit-box-shadow: 0px 5px 0px 1px rgba(163,163,163,0.43);-moz-box-shadow: 0px 5px 0px 1px rgba(163,163,163,0.43);box-shadow: 0px 5px 0px 1px rgba(163,163,163,0.43);border-radius: 0px 15px 0px 0px;-moz-border-radius: 0px 15px 0px 0px;-webkit-border-radius: 0px 15px 0px 0px;border: 0px solid #000000;}");
    	cargacss("#panel-desplegado .titulo .atras{float: right;position: absolute;top: 9px;right: 0;padding: 16px;background: #25B268;border-radius: 50px;-moz-border-radius: 50px;-webkit-border-radius: 50px;}");    	
		cargacss("#iconos{padding: 10px 26px;overflow: auto;height: 83%;}")
        cargapanel();
    	desplegarpanel();

addIcono("ico1","https://dl.dropboxusercontent.com/s/lrv3ryjjikjeg53/Emoji%20Smiley-01.png","http://goo.gl/yUBL5N");
addIcono("ico2","https://dl.dropboxusercontent.com/s/1hs5cof2g95pp1b/Emoji%20Smiley-02.png","http://goo.gl/pN309h");
//addIcono("ico3","","http://goo.gl/PYIgdk");
//addIcono("ico4","","http://goo.gl/WlEfxR");
//addIcono("ico5","","http://goo.gl/BLMKzn");
//addIcono("ico6","","http://goo.gl/uZ3WBI");
addIcono("ico7","https://dl.dropboxusercontent.com/s/jes8bce01l4eod2/Emoji%20Smiley-07.png","http://goo.gl/5442st");
addIcono("ico8","https://dl.dropboxusercontent.com/s/wme5u1juyy3c6za/Emoji%20Smiley-08.png","http://goo.gl/d7F1Ml");
addIcono("ico9","https://dl.dropboxusercontent.com/s/e88dtjskfzvcez7/Emoji%20Smiley-09.png","http://goo.gl/FM1x1v");
addIcono("ico10","https://dl.dropboxusercontent.com/s/c32ruts7a2we7rk/Emoji%20Smiley-10.png","http://goo.gl/LFSmJ1");
addIcono("ico11","https://dl.dropboxusercontent.com/s/pzswonc03enesaj/Emoji%20Smiley-11.png","http://goo.gl/sfl34P");
addIcono("ico12","https://dl.dropboxusercontent.com/s/f3gwhhr1nt5arjx/Emoji%20Smiley-12.png","http://goo.gl/tBxAhD");
addIcono("ico13","https://dl.dropboxusercontent.com/s/cgeyjmtbxn19j9g/Emoji%20Smiley-13.png","http://goo.gl/8mk5XS");
addIcono("ico14","https://dl.dropboxusercontent.com/s/3ldjzl6sd1orhpq/Emoji%20Smiley-14.png","http://goo.gl/yjQKnE");
addIcono("ico15","https://dl.dropboxusercontent.com/s/mbca7qluof6u9cp/Emoji%20Smiley-15.png","http://goo.gl/EJxQhm");
addIcono("ico16","https://dl.dropboxusercontent.com/s/jlihfqaolcdux4k/Emoji%20Smiley-16.png","http://goo.gl/IKzm9I");
addIcono("ico17","https://dl.dropboxusercontent.com/s/wmybqyunexmq61b/Emoji%20Smiley-17.png","http://goo.gl/YQcmpF");
addIcono("ico18","https://dl.dropboxusercontent.com/s/uonxnq2577ij06l/Emoji%20Smiley-18.png","http://goo.gl/uJ0j7W");
addIcono("ico19","https://dl.dropboxusercontent.com/s/90pci29tpzcsh2g/Emoji%20Smiley-19.png","http://goo.gl/CO0XiD");
addIcono("ico20","https://dl.dropboxusercontent.com/s/tbhvux9qnumb40r/Emoji%20Smiley-20.png","http://goo.gl/09SWh0");
addIcono("ico21","https://dl.dropboxusercontent.com/s/2ql86br56fbq00w/Emoji%20Smiley-21.png","http://goo.gl/Cf1N7U");
addIcono("ico22","https://dl.dropboxusercontent.com/s/cybalj4ku3lyei8/Emoji%20Smiley-22.png","http://goo.gl/WzxQ8h");
addIcono("ico23","https://dl.dropboxusercontent.com/s/6i1ng9r9vevz3zp/Emoji%20Smiley-23.png","http://goo.gl/0oWFU0");
addIcono("ico24","https://dl.dropboxusercontent.com/s/gyysgs6sji1o1wo/Emoji%20Smiley-24.png","http://goo.gl/3eqFwr");
addIcono("ico25","https://dl.dropboxusercontent.com/s/jrxyk0nm0fagkw0/Emoji%20Smiley-25.png","http://goo.gl/gxNqu4");
addIcono("ico26","https://dl.dropboxusercontent.com/s/7vbyg089sjsqovo/Emoji%20Smiley-26.png","http://goo.gl/MsIVuZ");
addIcono("ico27","https://dl.dropboxusercontent.com/s/ekil7oif2vikx14/Emoji%20Smiley-27.png","http://goo.gl/LH7qWg");
addIcono("ico28","https://dl.dropboxusercontent.com/s/at3aiuhkn13rl68/Emoji%20Smiley-28.png","http://goo.gl/PyiQZQ");
addIcono("ico29","https://dl.dropboxusercontent.com/s/mvwhkeowomnmehc/Emoji%20Smiley-29.png","http://goo.gl/wtfht4");
addIcono("ico30","https://dl.dropboxusercontent.com/s/4sbnas2vf68y38j/Emoji%20Smiley-30.png","http://goo.gl/qYrfSo");
addIcono("ico31","https://dl.dropboxusercontent.com/s/ksu9p4x90f1xqs5/Emoji%20Smiley-31.png","http://goo.gl/K8qGvj");
addIcono("ico32","https://dl.dropboxusercontent.com/s/grgb0y0de6twy3i/Emoji%20Smiley-32.png","http://goo.gl/At0OlU");
addIcono("ico33","https://dl.dropboxusercontent.com/s/jkz2nswxyqv92ir/Emoji%20Smiley-33.png","http://goo.gl/9wsdcS");
addIcono("ico34","https://dl.dropboxusercontent.com/s/fdvpjhrje3ei3t7/Emoji%20Smiley-34.png","http://goo.gl/rL54jv");
addIcono("ico35","https://dl.dropboxusercontent.com/s/winedc6t8kv8ub2/Emoji%20Smiley-35.png","http://goo.gl/J4wpZ3");
addIcono("ico36","https://dl.dropboxusercontent.com/s/o3zwjtnyaljzcpq/Emoji%20Smiley-36.png","http://goo.gl/PTT06E");
addIcono("ico37","https://dl.dropboxusercontent.com/s/zj45wxw5mqnwxpx/Emoji%20Smiley-37.png","http://goo.gl/QLfG43");
addIcono("ico38","https://dl.dropboxusercontent.com/s/dwfdv9ddze2bkv0/Emoji%20Smiley-38.png","http://goo.gl/zPXzwp");
addIcono("ico39","https://dl.dropboxusercontent.com/s/lj6fg6dhrm7458v/Emoji%20Smiley-39.png","http://goo.gl/8vEfVg");
addIcono("ico40","https://dl.dropboxusercontent.com/s/r3jrhquye8no7fd/Emoji%20Smiley-40.png","http://goo.gl/XHEd2I");
addIcono("ico41","https://dl.dropboxusercontent.com/s/0vrvd7ggxlba7xg/Emoji%20Smiley-41.png","http://goo.gl/LuhVox");