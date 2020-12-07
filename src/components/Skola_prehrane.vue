<template>
<div>

  <b-nav class="navigacija border border-silver rounded mx-auto" style="max-width:800px;">
    <b-nav-item class="mr-4 p-2" v-scroll-to="'#masti'">Masti</b-nav-item>
    <b-nav-item class="mr-4 p-2" v-scroll-to="'#ugljikohidrati'" >Ugljikohidrati</b-nav-item>
    <b-nav-item class="mr-4 p-2" v-scroll-to="'#bjelancevine'" >Bjelančevine</b-nav-item>
    <b-nav-item class="mr-4 p-2" v-scroll-to="'#minerali'" >Minerali</b-nav-item>
     <b-nav-item class="mr-4 p-2" v-scroll-to="'#vitamini'">Vitamini</b-nav-item>
  </b-nav>


  
    <div class="bg-secondary text-light p-5 mx-5 mt-4 rounded-lg "  id="masti">
     <h2>Masti</h2>
     
  <p class="lead" id="tekst">Masti koje jedemo su izvor energije i esencijalnih masnih kiselina.
     Masti pohranjene u tjelesnom masnom tkivu služe kao izolacija da bi nam bilo toplo, zaštita su za vitalne organe i nose vitamine topljive u mastima (vitamini A, D, E i K).
      Masti se prirodno nalaze u proizvodima životinjskog podrijetla (masno tkivo, meso i mliječni proizvodi), ali ih mnogo ima u orašastim plodovima, sjemenkama, žitaricama i nekom voću kao što su masline i avokado.
       Masti se u našoj prehrani mogu naći i u procesiranoj, industrijskoj hrani. Takve vrste masti su trans-masne kiseline (npr. margarin, očvrsnute biljne masti), odnosno različita biljna ulja industrijski procesirana u čvrste masti. 
       Smatraju se nepoželjne u prehrani zbog toga što se povezuju sa većim oboljevanjem od srčano-žilnih bolesti i nekih karcinoma. Takođe se preporučuje u prehrani ograničiti unos zasićenih masnih kiselina, no tek u odraslo doba. 
       Zasićene masne kiseline su prirodne masti i tijelu trebaju za pravilan rast i razvoj, a nalaze se u namirnicama životinjskog porijekla. Masti daju više nego duplo energije (9kcal) po 1 gramu u usporedbi s ugljikohidratima (4kcal) ili bjelančevinama (4kcal).
        Zato su dobar izvor energije i kada ih jedemo više i češće, odnosno namirnice bogate mastima, moramo voditi računa o svojoj tjelesnoj aktivnosti kako bismo uravnotežili dobivenu energiju od konzumacije masti i namirnicama koje sadrže masti.
        </p> 

       <button class="btn dropdown-toggle" v-scroll-to="'#ugljikohidrati'" type="button" id="dropdownMenu2" style="font-size:40px;"></button>
        
    </div>
    
  



  <div class="bg-secondary text-light p-5 mx-5 mt-4 rounded-lg " id="ugljikohidrati">
  <h2 >Ugljikohidrati</h2>
  <p class="lead" id="tekst">Kada čujemo riječ “ugljikohidrati”, prva slika koju zamislimo je tjestenina, kruh, keksi, žitarice koje jedemo za doručak. 
    Međutim, postoje i druge namirnice koje sadrže ugljikohidrate koji možda nisu tako očiti. 
    Te namirnice su voće, povrće, neki mliječni proizvodi i mahunarke, ali i hrana s manjom hranjivom vrijednosti, kao što su keksi, kolači, industrijski slatkiši te zaslađeni bezalkoholni napitci.
    Većina hrane koju jedemo sadrži ugljikohidrate. Na primjer, voće sadrži ugljikohidrate fruktozu i glukozu, ugljikohidrat u mliječnim proizvodima je laktoza, dok krumpir i mahunarke sadrže škrob itd. 
    Ugljikohidrati iz hrane se u tijelu probavljaju na jednostavne šećere. Oni u tijelu cirkuliraju krvlju, a svaka stanica tijela ih koristi za dobivanje energije.
    Mozak i crvene krvne stanice koriste jedan od ovih jednostavnih šećera (glukoza) kao glavni izvor energije. To je jedan od razloga zašto djeca trebaju više ugljikohidrata od odraslih, da bolje uče, budu budniji i aktivni tijekom dana, jer im treba više energije za rast i razvoj. 
    Osnovna uloga ugljikohidrata (tj. šećera i škroba) je da osigura energiju svakoj tjelesnoj stanici.</p>
    <button class="btn  dropdown-toggle" v-scroll-to="'#bjelancevine'" type="button" id="dropdownMenu2" style="font-size:40px;"></button> 
</div>



  <div class="bg-secondary text-light p-5 mx-5 mt-4 rounded-lg " id="bjelancevine">
  <h2 >Bjelančevine</h2>
  <p class="lead" id="tekst">One grade mišiće, ali i uzrokuju da se zgrče i opuste, grade krv, ali i uzrokuju da se zgruša, omogućuju očima da vidimo,
     bez njih naše kosti, koža i kosa ne bi imala strukturu, one grade i hrane naše tijelo, uzrokuju da smo „živi i zdravi“ gradeći i održavajući naš imuni sustav.
     Zbog svega toga ne čudi da njihovo ime znači “od primarne važnosti”.
     Najbolji izvor bjelančevina su namirnice životinjskog porijekla, a to su meso, perad, ribe, jaja i mliječni proizvodi. Također su i neke namirnice biljnog porijekla dobar izvor bjelančevina, a to su grahorice i orašasto voće. Važno je istaknuti da bjelančevine životinjskih namirnica imaju veću biološku vrijednost, odnosno iskoristivost u organizmu, u odnosu na bjelančevine namirnica biljnog porijekla.
     Stoga je razumljiva preporuka da se u prehrani koriste bjelančevine životinjskog porijekla od riba, mlijeka i mliječnih proizvoda, jaja, mesa kao i bjelančevine biljnog porijekla od različitih mahunarki (grah, grašak, mahune, leća, slanutak, bob, soja) te od orašastog voća (badem, lješnjak, orah, kikiriki, pistacije).
      </p> 
      <button class="btn  dropdown-toggle" v-scroll-to="'#minerali'" type="button" id="dropdownMenu2" style="font-size:40px;"></button>
</div>


  <div class="bg-secondary text-light p-5 mx-5 mt-4 rounded-lg " id="minerali">
  <h2>Minerali</h2>
  <p class="lead" id="tekst"> Minerali su anorganski kemijski elementi. 
                             S obzirom na potrebne količine u organizmu, dijelimo ih na makroelemente (Na, Cl, S, K, Ca, P, Mg) i mikroelemente (Fe, J, F, Zn, Se, Cu, Mn, Cr, Mo, Co i Ni). 
                             Kalcij je najzastupljeniji mineral u našem tijelu.</p> 
</div>



 <div class="bg-secondary text-light p-5 mx-5 mt-4 rounded-lg " id="vitamini"> 
  <h2>Vitamini</h2>
  <p class="lead" id="tekst">Vitamini su organski spojevi koji se nalaze u hrani u vrlo malim količinama.
                              S obzirom na neka njihova svojstva, možemo ih podijeliti u 2 skupine,
                             na vitamine topljive u vodi (vitamin C i vitamini B skupine: vitamin B1, B2, B3, B6,
                              pantotenska kiselina, folna kiselina, biotin i B12) te na vitamine topljive u mastima (vitamini A, D, E i K).
                              </p> 
</div>

<back-to-top bottom="50px" right="50px">
  <button type="button" class=" btn-to-top  "><i class="fa fa-chevron-up text-center"></i></button>
</back-to-top>

</div>
</template>

<style scoped>

.btn:focus{
  outline: 0  !important;
  border: none;
  box-shadow: none;

}


.next{
		overflow: visible;
		transform: matrix(1,0,0,1,0,0);

}

.vue-back-to-top {
  margin-bottom: 83px;
}

.btn-to-top  {
  color: black;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 35px;
  line-height: 22px;
  background-color: #F9F8F8;
  border-color: #B7D8FF  !important;
  outline:0;
  

}

.btn-info:hover{
  text-decoration: none;
  background-color: #c4c4c4;
  color:black;
  
}



h2{
  font-family: "Segoe UI";
  color:black;
  font-style: italic;
  font-weight: bold;
}

.bg-secondary{
  background-color:  #B7D8FF!important;
}


#id{
  margin-left: 18rem;
  margin-right: 18rem;
  background-color: #B7D8FF;
}


.navigacija{
margin-top:20px ;
display: flex;
justify-content: center;
font-family: "Segoe UI";
color:black;
font-style: italic;
font-weight: bold;

}

.nav-link{
color: black;
}



#tekst{
margin-top: 30px;
font-family: "Segoe UI";
color:black;
}


</style>