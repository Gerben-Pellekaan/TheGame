//Gerben Pellekaan
//Software Developer
//BlW5O1 - The Game

var antwoord = "A";


alert ("Welkom bij 'The Game'. Je bent in het jaar 3058 en je hebt net een prototype van een tijdmachine gemaakt. Je wilt een appel terug de tijd in sturen, maar het gaat fout. Je hebt jezelf perongelijk terug de tijd in gestuurd en ben je uitgekomen in de middeleeuwen! Om terug te gaan naar het heden moet je het verboden perkament zoeken en de tekst die er op staat uitspreken.");
alert ("Je bent belandt aan de zijkant van een rivier. In de verte zie je een kasteel, maar verder het bos in hoor je geluid.");

//Beginvraag
invoer = prompt ("Ga je naar A: Het Kasteel of ga je naar B: Het geluid.");

//Als je A hebt gekozen kom je bij deze tak van vragen uit.
if (invoer == "A") {
	console.log ("Je hebt het kasteel gekozen.");
    alert ("Je bent bij het kasteel aangekomen. Je loopt naar binnen en het is heel erg stil.");
    invoer = prompt ("Ga je A: Roepen en hopen dat iemand reageert, of ga je B: Rondkijken.");

//Als je A hebt gekozen bij deze vraag uit. Hier onder zijn de vragen.
    if (invoer == "A") {
    	console.log ("Je hebt gekozen om te roepen.");
        alert ("Je roept en je word ineens aangevallen door een bewaker. Je probeert jezelf eruit te praten terwijl je jezelf verdedigd. Gelukkig kalmeert de bewaker en wilt hij naar je luisteren. Jij vraagt aan hem waar je bent en waar iedereen heen is. Hij zegt dat je in Kasteel Morningstar bent en dat bijna iedereen weg is naar een festival.");
        alert ("Jij vraagt ook aan hem of hij iets weet van een verboden perkament. Hij zegt dat hij weet waar het is en vraagt of jij hem wilt volgen.");
        invoer = prompt ("Ga je A: Naar het festival toe of B: Volg je hem.")

        if (invoer == "A") {
        	console.log ("Je hebt gekozen om naar het festival te gaan.")
            alert ("Onderweg naar het festival vang je wat vis in de rivier en kook je het, ook filter je wat water met de materialen die je kan vinden. Je komt na een lange trip aan bij het festival. Je hebt dorst dus je pakt daar wat drinken. Je wilt graag informatie hebben over het verboden manuscript, maar je verveelde je na die lange trip dus feesten lijkt je ook leuk.");
            invoer = prompt ("Ga je A: Rondvragen voor informatie of ga je B: Feesten.")

            if (invoer == "A") {
                console.log ("Je hebt gekozen om rond te vragen.")
	            alert ("Je vraagt rond waar je bent en ze zeggen dat je in een dorp genaamt (...) bent. Jij bedankt ze en stelt ze vragen over een verboden perkament. Ze kijken je raar aan, maar ze geven je een antwoord. Ze zeggen dat het verstopt zit onder een oude tempel. Verder weten ze niks, want het is veelste gevaarlijk daar.")
	            alert ("Jij vraagt aan ze in welke richting die tempel is. Ze zeggen dat de tempel in het oosten is. Je wilt meer informatie en er zijn meer mensen in het dorp.");
	            invoer = prompt ("Ga je A: Naar de tempel of B: Rondvragen voor meer informatie.")

	            if (invoer == "A") {
	    	       console.log ("Je hebt gekozen om naar de tempel te gaan.")
	               alert ("Je pakt je spullen en besluit naar de tempel te gaan. Onderweg vind je pijl en boog en een zwaard.")
	               invoer = prompt ("Ga je A: Het zwaard of B: Pijl en boog pakken..")
//Hier onder zijn de loss en win situaties.
	               if (invoer == "A") {
	               	    console.log ("Je het het zwaard gekozen.")
	                    alert ("Je hebt het het zwaard opgepakt en bent bij de tempel aangekomen. Je ziet de beesten staan en wilt ze aanvallen. Je rusht op ze af, maar je wordt in je rug gepakt door een beest dat verstopt zat.")
	                    document.write ("YOU LOSE!")
                    }
	                    else {
	                    	console.log ("Je hebt pijl en boog gekozen.")
	                    	alert ("Je komt aan bij de tempel en schiet de beesten neer vanaf een afstand. Je rent zo snel mogelijk de trap naar beneden en daar is het... Het manuscript!")
	                    	alert ("Je leest de tekst die erop staat hardop en je word terug gestuurd naar jouw tijdperk.")
	                    	document.write ("YOU WIN!")
	                    }
	                }

	                        else { 
	                            console.log ("Je heb gekozen om te vragen naar meer informatie.")
	                            alert ("Je vraagt rond maar ze mogen geen extra informatie geven. Jij vindt dat jammer en gaat zelf zoeken. Je wordt gespot en in een kerker gegooid wegens illegaal rondzoeken.")
	                            document.write ("YOU LOSE!")
                            }
                
	                     }
	                             else  {
	                                 console.log ("Je koos om mee te feesten.")
	                                 alert ("Je feest met ze mee en je had een paar drankjes op. Opeens voel je je niet zo goed. Oh nee! Ze hebben gif in je drankje gedaan! Een paar minuten later ging je dood van vergiftiging.");
	                                 document.write ("YOU LOSE!")
	                             }
                     }
//Als je B had gekozen bij de eerste vraag van deze tak kom je bij deze "loss" uit.
                                     else {
                                     	console.log ("Je hbt gekozen om hem te volgen.")
                                     	alert ("Je volgt hem naar een oud huis, hij loopt naar binnen en opent een geheim luik. Hij zegt:'Kijk daar ligt het manuscript.' Jij komt dichterbij om te kijken, maar de bewaker pakt je en gooit je in het diepe gat dat onder het luik zat. Jij probeert je nog te verzetten, maar het lukt niet en nu lig je dood onderaan het gat.")
                                         document.write ("YOU LOSE!")
                                     }
                         }        
                                         else {
                                             console.log ("Je koos om rond te kijken.");
                                             alert ("Je loopt rustig rond, maar je word gespot door een bewaker! De bewaker ziet er niet al te vriendelijk uit dus jij besluit weg te lopen. De bewaker vind het er erg verdacht uitzien dus hij rent achter je aan en arresteerd je. Je vertelt alles aan hem, maar hij gelooft je niet en nu zit je levenslang in de cel.");
                                             document.write ("YOU LOSE!");
                                             }   
}

//Dit is de tweede tak van vragen.
else {
	console.log ("Je hebt het geluid gekozen");
	alert ("Je bent onderweg naar het geluid in het bos. Je komt steeds dichterbij en het geluid word harder. Vervolgens zie je een dorpje! Je komt aan in dat dorp en er is een festival bezig.");
	invoer = prompt ("Ga je A: Rondvragen waar je bent of ga je B: Met hun mee feesten.");
//Als je A hebt gekozen bij de vraag hierboven dan kom je hier uit.
	if (invoer == "A") {
		console.log ("Je hebt gekozen om rond te vragen.")
	    alert ("Je vraagt rond waar je bent en ze zeggen dat je in een dorp genaamt (...) bent. Jij bedankt ze en stelt ze vragen over een verboden perkament. Ze kijken je raar aan, maar ze geven je een antwoord. Ze zeggen dat het verstopt zit onder een oude tempel. Verder weten ze niks, want het is veelste gevaarlijk daar.")
	    alert ("Jij vraagt aan ze in welke richting die tempel is. Ze zeggen dat de tempel in het oosten is. Je wilt meer informatie en er zijn meer mensen in het dorp.");
	    invoer = prompt ("Ga je A: Naar de tempel of B: Rondvragen voor meer informatie.")

	    if (invoer == "A") {
	    	console.log ("Je hebt gekozen om naar de tempel te gaan.")
	        alert ("Je pakt je spullen en besluit naar de tempel te gaan. Onderweg vind je pijl en boog en een zwaard.")
	        invoer = prompt ("Ga je A: Het zwaard of B: Pijl en boog pakken.")

	        if (invoer == "A") {
	            console.log ("Je het het zwaard gekozen.")
	            alert ("Je hebt het het zwaard opgepakt en bent bij de tempel aangekomen. Je ziet de beesten staan en wilt ze aanvallen. Je rusht op ze af, maar je wordt in je rug gepakt door een beest dat verstopt zat.")
	            document.write ("YOU LOSE!")
	        }
//Als je hebt gekozen om pijl en boog te pakken dan komt dit.
	            else {
	                 console.log ("Je hebt pijl en boog gekozen.")
	                 alert ("Je komt aan bij de tempel en schiet de beesten neer vanaf een afstand. Je rent zo snel mogelijk de trap naar beneden en daar is het... Het manuscript!")
	                 alert ("Je leest de tekst die erop staat hardop en je word terug gestuurd naar jouw tijdperk.")
	                 document.write ("YOU WIN!")
	                }
            }
   
	                else { 
	                    console.log ("Je heb gekozen om te vragen naar meer informatie.")
	                    alert ("Je vraagt rond maar ze mogen dat niet vertellen. Jij vindt dat jammer en gaat zelf zoeken. Je wordt gespot en in een kerker gegooid wegens illegaal rondzoeken.")
	                    document.write ("YOU LOSE!")
                    }
                }
//Als je B had gekozen bij de eerste vraag van de tweede tak dan kom je hier uit en verlies je
            	        else  {
	                        console.log ("Je koos om mee te feesten.")
	                        alert ("Je feest met ze mee en je had een paar drankjes op. Opeens voel je je niet zo goed. Oh nee! Ze hebben gif in je drankje gedaan! Een paar minuten later ging je dood van vergiftiging.");
	                        document.write ("YOU LOSE!")
	                    }
}    