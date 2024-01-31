
window.onload = function () {
    if (typeof history.pushState === "function") {
        history.pushState("jibberish", null, null);
        window.onpopstate = function () {
            history.pushState('newjibberish', null, null);
        };
    }
    else {
        var ignoreHashChange = true;
        window.onhashchange = function () {
            if (!ignoreHashChange) {
                ignoreHashChange = true;
                window.location.hash = Math.random();
            }
            else {
                ignoreHashChange = false;   
            }
        };
    }
}

document.oncontextmenu = function(){return false} ; //prohibir click derecho y boton de volver

//variables y funciones para los eventos de decision
		var de0 = 0;
		var de1 = 0;
		var de2 = 0;
		var de3 = 0;
		var de4 = 0;
		var de5 = 0;
		var de6 = 0;

		var fn = 0;

		function de1s(){
			fn += 20;
			de0 = 1;
		}

		function de1n(){
			fn += 5;
			de0 = 0;
		}
		
		function de2s(){
			de1 = 1;
			fn += 10;
		}
		
		function de2n(){
			de1 = 0;
			fn += 5;
		}

		function de3s(){
			de2 = 1;
			fn += 10;
		}

		function de3n(){
			de2 = 0;
			fn += 5;
		}

		function de4s(){
			de3 = 1;
			fn += 10;
		}

		function de4n(){
			de3 = 0;
			fn += 5;
		}

		function de5s(){
			de4 = 1;
			fn += 15;
		}

		function de5n(){
			de4 = 0;
			fn += 5;
		}

		function de6s(){
			de5 = 1;
			fn += 15;
		}

		function de6n(){
			de5 = 0;
			fn += 5;
		}

		function de7s(){
			de6 = 1;
			fn += 20;
		}

		function de7n(){
			de6 = 0;
			fn += 5;
		}

		function dir0(){ //direccionamiento por javascript para ocultar la barra de links inferior
			location.href="#b1";
		}

		function dir1(){
			location.href="#b2";
		}

		function dir2(){
			location.href="#b3";
		}

		function dir3(){
			location.href="#b4";
		}

		function dir4(){
			location.href="#b5";
		}

		function dir5(){
			location.href="#b6";
		}

		function dir6(){
			if(de0){
				document.getElementById("de0").innerHTML = ("<p>No sab&iacute;a qu&eacute; hacer, pero no pod&iacute;a dejar que ellas murieran.<p>");
			}

			if(!de0){
				document.getElementById("de0").innerHTML = ("<p>Yo solo no quer&iacute;a morir... Adem&aacute;s, la tierra no se iba a destruir tan r&aacute;pido como para no poder comprar otro boleto &#191;Cierto?</p> <p>&#191;Qu&eacute; demonios pensaba? &#191;C&oacute;mo se supone que le iba a dec&iacute;r a mi hija que no pod&iacute;a salvarla?. Maldita sea.</p>");
				document.getElementById("de01").innerHTML = ("<p> Sin contar que eleg&iacute; salvarme a mi antes que mi hija... de igual manera, eso ya hab&iacute;a pasado.</p>");
			}

		location.href="#b7";
		}

		function dir7(){
			location.href="#b8";
		}

		function dir8(){
			location.href="#b9";
		}

		function dir9(){
			location.href="#b10";
		}

		function dir10(){
			location.href="#b11";
		}

		function dir11(){
			location.href="#b12";
		}
		
		function dir12(){
			location.href="#b13";
		}
		
		function dir13(){
			location.href="#b14";
		}
		
		function dir14(){
			location.href="#b15";
		}
		
		function dir15(){
			location.href="#b16";
		}
		
		function dir16(){
			if(de1 == 1 ){
				document.getElementById("de1").innerHTML = ("<p>No pude soportar ver eso, as&iacute; que de la manera mas fuerte que pude, grit&eacute; de manera que todos oyeran. Hab&iacute;a que hacerlos entrar en raz&oacute;n.</p> <p>Esto que pas&oacute; es una tragedia que sab&iacute;amos que iba a ocurrir, por eso es esta misi&oacute;n. Sab&iacute;amos lo que ven&iacute;a y lo mejor que pudimos hacer fue esto.</p> <p>Ahora depende de nosotros, correg&iacute;r los errores que nos llevaron a esta situaci&iacute;on. Yo tambi&eacute;n ten&iacute;a familia all&aacute; abajo, mi madre, mi hermano y sobrina. No los pude salvar a todos, pero pude salvar a mi hija y mi esposa, y por ellas pienso luchar ahora, tomen esta segunda oportunidad que tenemos.</p> <p>Dios no tiene nada que ver con esta destrucci&oacute;n que tuvimos, nosotros lo hicimos, as&iacute; que nosotros podemos correg&iacute;r todo esto, haciendo valer esta misi&oacute;n</p> <p> Ahora depende de nosotros luchar para viv&iacute;r</p>");
				document.getElementById("de12").innerHTML = ("esas ganas de hacer mejor las cosas, resurgir")
			}
			
			if(de1 == 0){
				document.getElementById("de1").innerHTML = ("<p>El ver esto me daba nauseas, ten&iacute;a que dec&iacute;r algo, as&iacute; que lo grit&eacute; lo m&aacute;s fuerte que pude.</p> <p>Los que est&aacute;n all&aacute; abajo eligieron su destino a su manera, se fueron como quisieron. Nosotros aun est&aacute;mos ac&aacute;, viv&iacute;mos.</p> <p>S&iacute;, todos estamos tristes porque ten&iacute;amos a alguien en la tierra, pero ya no hay nada que hacer por ellos, se han ido. Ahora tenemos que segu&iacute;r con plan, es por eso que estamos aqu&iacute;, nuestro prop&oacute;sito.</p> <p>Y nuestro prop&oacute;sito es ser mejor que los que le hicieron esto a nuestro mundo, mejorar todo lo que sali&oacute; mal all&aacute;.</p> <p>Vamos a tomar todo eso que tenemos ahora... nuestras l&aacute;grimas, nuestro dolor y lo vamos a transformar en desprecio para todos aquellos que destruyeron nuestro mundo construyendo uno nuevo justo a donde vamos, ese es nuestro prop&oacute;sito, y eso es lo que haremos.</p>");
				document.getElementById("de12").innerHTML = ("ese desprecio por lo que hab&iacute;a pasado all&aacute; abajo ");
			}		
			location.href="#b17";
		}
		
		function dir17(){
			location.href="#b18";
		}
		
		function dir18(){
			location.href="#b19";
		}
		
		function dir19(){
			location.href="#b20";
		}

		function dir20(){
			location.href="#b21";
		}

		function dir21(){
			location.href="#b22";
		}

		function dir22(){
			location.href="#b23";
		}

		function dir23(){
			location.href="#b24";
		}

		function dir24(){
			location.href="#b25";
		}

		function dir25(){
			location.href="#b26";
		}

		function dir26(){
			location.href="#b27";
		}	

		function dir27(){
			location.href="#b28";
			if(de2 == 1){
				document.getElementById("de3").innerHTML = ("No pod&iacute;a llevarle la contraria, era muy terca para hacerla cambiar de parecer con respecto a esto. Eli cre&iacute;a que cada quien ten&iacute;a un tiempo</p> <p> Seg&uacute;n ella, su tiempo hab&iacute;a llegado, pero Sofi la logr&oacute; convencer de una manera que yo no la hubiera imaginado.");
			}

			if(de2 == 0){
				document.getElementById("de3").innerHTML = ("No pod&iacute;a dejarla ir, ella ten&iacute;a mucho que dar. Esto nos abr&iacute;a una nueva puerta para evolucionar como especie, nos daba un nuevo motivo con todo nuestro conocimiento. </p> <p> La convenc&iacute;, aunque se le not&oacute; que no le agrad&oacute;; pero era lo mejor para todos.");
			}
		}		

		function dir28(){
			location.href="#b29";
			if(de1 == 1){
				document.getElementById("de13").innerHTML = ("Yo ten&iacute;a la necesidad de volver a saber de mi planeta.");
			}

			if(de1 == 0){
				document.getElementById("de13").innerHTML = ("Por otra parte, no quer&iacute;a saber nada de ese planeta, pero era necesario.");
			}
		}

		function dir29(){
			location.href="#b30";
		}

		function dir30(){
			location.href="#b31";
		}

		function dir31(){
			location.href="#b32";
		}	

		function dir32(){
			location.href="#b33";
		}	

		function dir33(){
			if(de3 == 1){
				document.getElementById("de41").innerHTML = ("No pod&iacute;a mentirles, as&iacute; que les dije todo el plan que hubo desde el inicio, como se vendieron boletos para las distintas naves, de nuestra supervivencia en el espacio</p> <p> Les contamos todo, hasta qu&eacute; eramos nosotros, a lo que le indicamos a los dem&aacute;s que podian bajar de la nave. </p> <p>Tambi&eacute;n les contamos a qu&eacute; vinimos, era necesario saber que estaba pasando ac&aacute;. </p> <p> Muchos estaban asombrados, pero me daba cierta alegr&iacute;a poder verlos.");
			}

			if(de3 == 0){
				document.getElementById("de41").innerHTML = ("Le dije lo que eramos, y eso es que somos una especie aparte de la humanidad en la Tierra, la cual ha evolucionado tanto intelectual como socialmente, eso es lo que somos </p> <p> Hemos crecido durante tanto tiempo viendo los errores que se cometieron ac&aacute; para no cometerlos all&aacute;, somos el siguiente paso, se pudiera dec&iacute;r </p> <p> Aunque este era nuestro mundo de origen, no sent&iacute;a mucho aprecio por el, solo era algo que todos necesit&aacute;bamos en nuestra nueva casa. ");
			}

			location.href="#b34";
		}	

		function dir34(){
			location.href="#b35";
		}			

		function dir35(){

			if(de1 == 1){
			document.getElementById("de21").innerHTML = ("Ten&iacute;a que hacer algo para arreglar esto.");
			}
			if(de1 == 0){
				document.getElementById("de21").innerHTML = ("Estos imb&eacute;ciles iban a caer en lo mismo.");
			}

			location.href="#b36";
		}

		function dir36(){
			location.href="#b37";
		}				

		function dir37(){
			location.href="#b38";
		}	

		function dir38(){
			location.href="#b39";
		}	

		function dir39(){
			location.href="#b40";
		}	

		function dir40(){

			if(de4 == 1){
				document.getElementById("de51").innerHTML = ("Proced&iacute; y le dije de donde ven&iacute;amos, el por qu&eacute; y cual era nuestro prop&oacute;sito ac&aacute;. </p> <p> Tratando de llevar todo de la mejor manera posible, debido a que ellos ten&iacute;an armas y nosotros solo ten&iacute;amos dos rifles, los cuales confiscaron con la condici&oacute;n de entrar. </p> <p> Cuando le dijimos lo que hab&iacute;amos hecho, y qu&eacute; &eacute;ramos Eleonor y yo, su cara de descontento se hacia notar.");
			}
			if(de4 == 0){
				document.getElementById("de51").innerHTML = ("Cuando alegu&eacute; que &eacute;ramos sus amigos, mir&oacute; a uno de mis tripulantes, el astrof&iacute;sico Rei, y rapidamente sac&oacute; un arma y le dispar&oacute; justo en la cabeza. </p> <p> Todos quedamos en Shock, mientras su sangre corria por el suelo tocando mis pies, y de nuevo pregunt&oacute; &#191;Quienes &eacute;ramos nosotros?</p> <p> A lo que Eleonor, en llanto le cuenta todo lo que nosotros somos.");
			}

			location.href="#b41";
		}

		function dir41(){
			location.href="#b42";
		}

		function dir42(){

			location.href="#b43";
		}		

		function dir43(){

			if(de1 == 1){
				document.getElementById("de14").innerHTML = ("Pero de igual manera ten&iacute;amos que ayudar, no pod&iacute;a ver este mundo arder de nuevo.");
			}

			if(de1 == 0){				
				document.getElementById("de14").innerHTML = ("Yo sab&iacute;a que no deb&iacute;amos ven&iacute;r a este mundo, ya no queda nada que valga la pena ac&aacute;.");
			}

			location.href="#b44";
		}		

		function dir44(){
			location.href="#b45";
		}

		function dir45(){
			location.href="#b46";
		}

		function dir46(){

			if(de5 == 1){
				document.getElementById("de61").innerHTML = ("Es basura eso, el miedo no gobierna nada, tarde o temprano llevara un pueblo a base de miedo te generar&aacute; un desastre mayor.");
			}

			if(de5 == 0){				
				document.getElementById("de61").innerHTML = ("En parte ten&iacute;a raz&oacute;n. La &uacute;nica manera factible para dirigir a un gran pueblo es a base del miedo, eso te dar&aacute; respeto.");
			}

			location.href="#b47";
		}

		function dir47(){
			location.href="#b48";
		}

		function dir48(){ //mostrar las decisiones mas relevantes

			if(de1 == 1){
			document.getElementById("decision2").innerHTML = ("Eleonor me dijo muchas cosas en ese momento, ella sab&iacute;a que mi fe en este mundo no se hab&iacute;a ido del todo, que ten&iacute;a fe en el. Me dijo que yo pod&iacute;a darles otra oportunidad, ellos merecian hacer su propio camino");
			}
			if(de1 == 0){
				document.getElementById("decision2").innerHTML = ("Eli no comprend&iacute;a bien que sent&iacute;a yo por ellos, ver como se auto destruian me daba repugnancia, estos humanos eran desagradables. Perdieron un mundo hace cientos de a&#241;os y ahora que lo tienen de vuelta, lo vuelven a destruir.");
			}

			if(de2 == 1){
			document.getElementById("decision3").innerHTML = ("Me dijo que yo le comprend&iacute; a ella cuando no acept&oacute; convertirse en perpetua. Por eso sab&iacute;a que a pesar de todo eso, pod&iacute;a encontrar algo en mi que evitara pulsar ese bot&oacute;n");
			}
			if(de2 == 0){
				document.getElementById("decision3").innerHTML = ("Por otra parte, ella estaba muy decepcionada, y me remarc&oacute; que yo le hab&iacute;a obligado a ser esta especie de ser perpetuo para hacer mejor las cosas, y esta no era la forma. Ella de verdad quer&iacute;a que no hiciese esto.");
			}

			if(de4 == 1){
			document.getElementById("decision4").innerHTML = ("Mi honestidad la puso a flote, porque le dije a Lana quienes eramos aun en la condici&oacute;n tan adversa en la que estabamos. Eli insist&iacute;a en qu&eacute; yo pod&iacute;a ver lo que ella ve&iacute;a.");
			}
			if(de4 == 0){
				document.getElementById("decision4").innerHTML = ("No mostr&oacute; felicidad, ya que por no dec&iacute;r directamente la verdad a Lana, ella habia matado a Rei, me recalcaba que si yo hubiera sido sincero, el estar&iacute;a aun con vida.");
			}

			if(de0 == 1){
			document.getElementById("decision1").innerHTML = ("Lo que m&aacute;s me impacto fue cuando me dijo que Riley le hab&iacute;a contado lo que pas&oacute; cuando todo esto habia comenzado, el le hab&iacute;a dicho que yo hab&iacute;a comprado solo un pasaje para Sof&iacute;a y para ella. Sab&iacute;a que no pod&iacute;a sacrificarme a mi mismo para dejarla ir luego de esta manera.");
			}

			if(de0 == 0){
			document.getElementById("decision1").innerHTML = ("Pero lo que realmente me sorprendi&oacute; fue cuando me dijo que Riley le hab&iacute;a dicho lo de los pasajes que se vend&iacute;an cuando esto estaba comenzando. El muy infel&iacute;z le cont&oacute; que yo hab&iacute;a elegido irme con ella dejando a Sof&iacute;a atr&aacute;s... la decepci&oacute;n en su rostro se hac&iacute;a notar.");
			}

			location.href="#b49";
		}		

		function dir49(){

			if(de6 == 1){
				if(fn > 94){ //final 1
					document.getElementById("final").innerHTML = ("No pude encender la m&aacute;quina... se me era imposible mirando toda la fe que Eleonor ten&iacute;a en mi. No pod&iacute;a defraudarla. </p> <p>Todo esto que hab&iacute;a pasado, deb&iacute;a servirles como lecci&oacute;n a ellos, deb&iacute;an aprender de sus errores as&iacute; como nosotros en el espacio lo hicimos. </p> <p>Solo unos pocos hab&iacute;an sobrevivido al enfrentamiento, pero yo sab&iacute;a que aunque Lana era bastante fuerte y dura, pod&iacute;a llevar el resurgir de este planeta. </p> <p> Quedamos en comunicaci&oacute;n con ella, mientras nosotros ahora estamos de regreso a Marte. Estoy junto a mi esposa Eleonor, y transmito para Marte y la Tierra diciendo que hay esperanza, aun podemos resurg&iacute;r como civilizaci&oacute;n en conjunto.");
				}
				if(fn < 95){ //final 2
					document.getElementById("final").innerHTML = ("No pude encender la m&aacute;quina... se me era imposible mirando toda la fe que Eleonor ten&iacute;a en mi. No pod&iacute;a hacer eso, no a ella. </p> <p>Fue un gran suceso todo esto, muchas vidas se perdieron, pero quiero creer que no fue en vano. Esta nueva civilizaci&oacute;n ac&aacute; en la tierra tiene que crecer, pero no tomar&eacute; m&aacute;s parte en esto. </p> <p> Eleonor, por otra parte, no vino con nosotros. Decidi&oacute; quedarse en la Tierra junto a Lana y los dem&aacute;s para serv&iacute;r como intercomunicadora entre los dos mundos. </p> <p> La verdad hubiera querido que se viniera conmigo, pero muchas cosas pasaron all&aacute;. Este es la unidad Alan reportando para Marte, la Tierra est&aacute; surgiendo de nuevo.");
				}
			}
			if(de6 == 0){
				if(fn >84){ //final 3
					document.getElementById("final").innerHTML = ("Me repugnaba todo lo que hab&iacute;a pasado, cuando iba a activar la m&aacute;quina, Lana me intent&oacute; disparar, pero y le di un disparo en el estomago. La vi caer muerta, mientras yo miraba a Eleonor y le dije que era lo mejor, este mundo no merec&iacute;a perdurar. La civilizaci&oacute;n de este planeta estaba destinada a destruirse, en cambio nosotros hab&iacute;amos dado un paso adelante</p> <p> Eramos la evoluci&oacute;n de la humanidad, el futuro. Solo nosotros podr&iacute;amos llevar a todo el espacio lo que la humanidad en realidad refleja </p> <p> Los de este planeta solo eran una aberraci&oacute;n. As&iacute; que accion&eacute; el dispositivo mientras tom&eacute; a Eleonor del a mano para abordar la Osiris y dejar el planeta con los pocos tripulantes de nuestra nave. </p> <p>Al ir saliendo de la atm&oacute;sfera, vimos como las auroras boreales circundaban todo el mundo. A unas pocas semanas de haber sal&iacute;do del planeta, volteamos la vista a el y lo que se ve&iacute;a era impactante. </p> <p> La m&aacute;quina hab&iacute;a fracturado el planeta en dos, despoj&aacute;ndolo de toda protecci&oacute;n. Ahora nosotros ten&iacute;amos que surgir, es nuestro turno de mostrar de lo que somos capaces. Alan, terminando transmisi&oacute;n para Marte, fuera.");
				} else
				if(fn < 85){ //final 4
					document.getElementById("final").innerHTML = ("Me repugnaba todo lo que hab&iacute;a pasado, cuando iba a activar la m&aacute;quina, Lana me intent&oacute; disparar, pero y le di un disparo en el estomago. La vi caer muerta, mientras yo miraba a Eleonor y le dije que era lo mejor, este mundo no merec&iacute;a perdurar. La civilizaci&oacute;n de este planeta estaba destinada a destruirse, en cambio nosotros hab&iacute;amos dado un paso adelante</p> <p> Ella no estaba convencida de eso... recuerdo su rostro, me miraba con desprecio. </p>  <p> Pero no pod&iacute;a para lo inevitable, era nuestro destino ser la evoluci&oacute;n de la humanidad, la Tierra ya no era apta para que estas civilizaciones surgieran. Ellos no comprender&iacute;an como viv&iacute;r. </p> <p> Al abordar la nave, los tripulantes me preguntaron por Eleonor, pero ella no quizo ven&iacute;r, quizo morir con su mundo. Eli, te voy a extra&#241;ar, pero tu elegiste tu camino. </p> <p>A unas pocas semanas de haber sal&iacute;do del planeta, volteamos la vista a el y lo que se ve&iacute;a era impactante. </p> <p> La m&aacute;quina hab&iacute;a fracturado el planeta en dos, despoj&aacute;ndolo de toda protecci&oacute;n. Ahora nosotros ten&iacute;amos que surgir, es nuestro turno de mostrar de lo que somos capaces. Alan, terminando transmisi&oacute;n para Marte, fuera.");
				}
			}

			location.href="#b50";
		}

		function dir50(){
			location.href="#b51";
		}

		function altertn(){

			document.getElementById("final").innerHTML =("No pude aguantar con todo esto, era una decisi&oacute;n que no pod&iacute;a controlar. </p> <p> Lana y Eleonor me miraban fijamente, no sabian que iba a hacer. Demonios, ni yo mismo lo sabia. </p> <p> Esto es demasiada presi&oacute;n, por eso te pido disculpas, mi amada Eleonor. No puedo segu&iacute;r soport&aacute;ndolo. Te estoy transmitiendo toda mi memoria para que me recuerdes no como este cobarde, si no como alguien que de verdad te am&oacute; a pesar de todo lo malo que haya podido realizar. </p> <p> Al terminar esta transmisi&oacute;n quemar&eacute; los circuitos internos de mi cuerpo, incluyendo mi chip funcional... s&iacute;, Sofi y los dem&aacute;s cient&iacute;ficos no pudieron arreglar eso. Te amo, Eleonor, pero no soporto ver todo lo que esta humanidad puede hacer para da&#241;arse as&iacute; misma. </p> <p> Adios.");
			location.href="#b50";
		}

var ads = document.getElementsByClassName("ads")[0];
var stories = [82477214,82556130];
var link_ads = "https://embed.wattpad.com/story/";

for(i=0; i<stories.length;i++){
	$(ads).append("<iframe frameborder=\"0\" allowfullscreen=\"\" src=\""+link_ads+stories[i]+"\"><p>No se ha podido cargar el elemento</p></iframe>");
}