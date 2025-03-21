**sources die ik gebruik voor mijn werk + mijn code waar ik het verwerk**

## Inhoudsopgave
- [Semester 3 sources](#semester-3-sources)
   - [Reactive statements](#reactive-statements)
   - [Scss werkend krijgen](#scss-werkend-krijgen)
   - [HSL kleuren](#hsl-kleuren)
- [Semester 4 sources](#semester-4-sources)
  - [Milestones & subissues](#milestones-subissues)
  - [SEO (Search Engine Optimization)](#seo)
  - [SPA (Single page application)](#spa)
  - [data-sveltekit-noscroll](#dsn)
  - [Svelte 5 props](#props)
  - [event Bubbling](#event-bubbling)
  - [app/store](#store)
  - [State Management](#state-management)

<h2 id="semester-3-sources">Semester 3 sources</h2>

<h3 id="reactive-statements">Reactive statements</h3>

Ik heb reactive statements gebruikt om ervoor te zorgen dat charts.

🔎 Het Probleem:

* functie aan month buttons die alles hoor te updaten naar de volgende of vorige maand
* alleen charts worden niet mee geüpdatet 

🔄 Oplossing:

* `$:` gebruiken voor de vars die connected zijn aan de chart zodat die uiteindelijk mee geüpdatet worden

Meer uitleg over hoe dit werkt vind je hier: [issue 117](https://github.com/SamaraFellaDina/future-ready-design/issues/117)
Voorbeeld code waar we het hebben geimplementeerd: [voorbeeld](https://github.com/SamaraFellaDina/future-ready-design/blob/Jesse-Detailpage/src/lib/ReusableComponents/BlankDonutChart.svelte)

Bronnen die mij hebben geholpen om dit mogelijk te maken: 

[svelte.dev: reactive-statements](https://svelte.dev/docs/svelte/legacy-reactive-assignments)

Bij het schrijven over reactive statements vond ik toevallig dit  [stack overflow ](https://stackoverflow.com/questions/79307556/sveltekit-client-array-available-sporadically-in-reactive-function). Hier merkte ik dat je ook gewoon maar 1 `$:` kan gebruiken en dan alles wat reactive is binnen de curly braces kan doen.



<h3 id="scss-werkend-krijgen">Scss werkend krijgen</h3>

Voor de 3 week van sprint 17 wilde ik een achtergrond hebben met vallende sneeuw. Ik vond toen een [codepen](https://codepen.io/alphardex/pen/dyPorwJ) die dat had en werkte op vallende sneeuw

Probleem was dat ik scss werkend moet krijgen in mijn svelte project

Hier vond ik een stack overflow dit ik gebruikte over hoe ik dat voor elkaar kan krijgen.
bron: [stack overflow](https://stackoverflow.com/questions/75056422/how-to-use-vitepreprocess-with-global-scss-mixins-in-sveltekit)

Hier is uitleg hoe heb ik het verwerkt heb in mijn project + uitleg over de scss code

[instalatie](https://github.com/SamaraFellaDina/future-ready-design/issues/97#issue-2745265554)
[scss code uitleg](https://github.com/SamaraFellaDina/future-ready-design/issues/97#issuecomment-2573779191)



<h3 id="hsl-kleuren">HSL kleuren</h3>

Leuke workshop van Koop over kleuren en contrasten vertelde hij bijvoorbeeld over HSL. HSL is een andere manier om kleuren te kiezen voor je pagina. HSL staat voor Hue, saturation and lightness(vertaling: Tint of Kleurtoon, Verzadiging en helderheid)


voorbeeld: `background: hsl(50 80% 40%);`. het eerste getal bepaald de tint, de 2de de verzadiging en de laatste de helderheid.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) laat goeie voorbeelden zien. niet alleen de mogelijkheden met kleur maar ook de wwaardes die je binnen de () kan gebruiken zoals deg (degree) turn en meer.

Heb zelf bij de view transition coding spike wat kleuren te veranderen met het gebruik van hsl. die vind je hier

[code](https://github.com/SamaraFellaDina/future-ready-design/blob/db3b1a399ffbe1744ab1df022d225f8cfc6a2b8a/static/styles/global.css#L8-L128)


<h2 id="semester-4-sources">Semester 4 sources</h2>

<h3 id="milestones-subissues">Milestones & subissues</h3>

**wat zijn milestones**

Milestones zijn bedoeld om Progressie bij te houden van wat je wilt bereiken. In milestones kan je issues en pull requests erin toevoegen Die ermee temaken hebben.

Voor meer info over milestones kun je heir naar toe gaan [gitdocs](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones)

**hoe werk je met milestones**

- Ga naar issues of pull requests en klik op de knop milestones
- In milestones Kan je een nieuwe milestone creeëren
- Hierin kan je er een naam aangeven, description en een datum
- Na het creeëren van een milestone kan je er nu issues en pull requests aan toevoegen.

**Conventie**

- Zorg voor goeie benamingen van de milestones 
- Miles stones moet iets groot zijn sinds de issues die erin komen meestal onderdelen zijn van iets groots. (voobeeld van een milestone naam: refactor code base)
- Milestones kunnen gelinked zijn aan userstories. Zorg ervoor dat de titel met een user story te maken heeft
- Geef De miles stone Eeen versie nummer wanneer hij voledig af is. [semver](https://semver.org/).

**wat zijn subissues**

Subissues is een nieuwe feature van github waar je issues in een issue kan maken. 

**Conventie**

Bij het maken van Subissues zorg je ervoor dat ze klein blijven. Als de normale issue bijvoorbeeld *maken van een navbar*, dan is een subissue bijvoorbeeld "maken active state", "maken voor de active link" of "Icons toevoegen aan de nav".

Gebruik het alleen voor issues die op een rij moeten komen, niet voor issues die eenmaal meer tijd kosten dan normaal.


<h3 id="seo">SEO (Search Engine Optimization)</h3>

Nederlands voor * zoekmachine optimalisatie*. Een goeie SEO zorgt ervoor dat je hoog terecht komt bij zoek resultaten.

Waarom ik hier over praat is omdat ik hier ook mee te maken had. Bij het uitvoeren van een [lighthousetest](https://github.com/fdnd-agency/oncollaboration/issues/57#issuecomment-2718208116) bij het project van [oncolaboration](https://oncollaboration.agency.fdnd.nl/) mij een opvallende score terug gaf. Ik was benieuwd wat en waarom Het zo'n lage score terug gaft.

**De reden**

Dit stukje in de *app.html*  zorgt ervoor dat de score zo laag was. ```<meta name="robots" content="noindex, nofollow">``` Bevat het content attribuut. De noindex & nofollow zorgen er dus voor dat websites bijvoorbeeld niet hoog komen bij search engines en niet worden geïndexeerd. Dit betekent dat de pagina niet verschijnt in zoekresultaten en dat zoekmachines geen links op de pagina volgen.

**waarom werd het dus toegepast in het project?**

volgens de site [maxlead](https://maxlead.com/seo-kennisbank/seo-wat-is-een-noindex-nofollow/#:~:text=Deze%20meta%20tag%20is%20een,pagina%20niet%20gevolgd%20mogen%20worden.) zijn dit de volgende redenen.

- Een website, bijvoorbeeld een testomgeving, niet in zoekmachines terecht mag komen.
- Een pagina informatie bevat waarvan de webmaster niet wil dat deze door zoekmachinespiders geïndexeerd wordt.

Eigelijk als je het zo bekijkt is het best logisch want de Website zit nog in een *alpha* fase dus hij is nog niet helemaal af

<h3 id="spa">SPA (Single page aplication)</h3>

SvelteKit maakt dus gebruik van het SPA techniek. Dat betekent dat wanneer je van de ene pagina naar de andere gaat, de browser niet de hele pagina opnieuw laadt, maar alleen de benodigde content vervangt. Fijn voor users want dit zorgt soms voor een snellere en smoothere navigatie. 

meer info over SPA vind je hier [svelteDOCS](https://svelte.dev/docs/kit/single-page-apps)

- Dit kan ook nadelen hebben bijvoorbeeld wanneer de pagina veel *javascript* nodig heeft bij het renderen van de pagina
- of als *SEO* heel belangrijk is voor de website

Ik Heb hier trouwens zelf hier profeit van gemaakt: Check [hier](https://github.com/orgs/fdnd-agency/projects/35?pane=issue&itemId=102724537&issue=fdnd-agency%7Concollaboration%7C65) hoe ik een chapter video heb Zowel client als serverside werken heb gemaakt. Zonder de *eventPreventdefault()*
zorgt de SPA techniek er nog steeds voor dat de pagina niet refreshed wanneer ik navigeer tussen chapters


<h3 id="dsn">data-sveltekit-noscroll</h3>

Om Het zo makkelijk mogelijk uit te leggen is dat wanneer je navigeert binnen de pagina zorgt deze attribuut van SvleteKit ervoor dat je niet terug gaat naar de orginele positie van waar je op de pagina begint.

Deze techniek heb ik ook toegepast bij de chapter functie zodat je niet steeds naar de top van de pagina word gestuurd als je op 1 van de chapters klikt 

[hier](https://github.com/fdnd-agency/oncollaboration/issues/65#issuecomment-2737215941) dezelfde issue als waar ik vertel over *SPA* techniek van SvelteKit vind je dus ook een kleine documentatie dat ik dus de *data-sveltekit-noscroll* attribuut heb toegepast in mijn code.

hier is meer info over de *data-sveltekit-noscroll* techniek [svelteDOCS](https://svelte.dev/docs/kit/link-options#data-sveltekit-noscroll)

<h3 id="props">Svelte 5 props</h3>

<h3 id="event-bubbling">event Bubbling</h3>

<h3 id="store">app/store</h3>

<h3 id="state-management">State Management</h3>
