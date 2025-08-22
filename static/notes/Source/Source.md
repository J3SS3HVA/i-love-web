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
  - [State Management](#state-management)
- [Semester 4.5 sources](#semester-4.5-sources)
  - [svelte 5 runes](#svelte-runes)
  - [:is() selector](#is-selector)
  - [Conditional attributes Svelte](#conditional-attributes-svelte)
  - [Laws of UX](#LawsOfUx)
- [repairs](#repairs)
  - [CSS @property](#css-property)
  - [Scroll driven](#scroll-driven)

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

Dit stukje in de *app.html*  zorgt ervoor dat de score zo laag was. 
```html
<meta name="robots" content="noindex, nofollow">
```

<!--<code class="hljs" data-language="js">-->
Bevat het content attribuut. De noindex & nofollow zorgen er dus voor dat websites bijvoorbeeld niet hoog komen bij search engines en niet worden geïndexeerd. Dit betekent dat de pagina niet verschijnt in zoekresultaten en dat zoekmachines geen links op de pagina volgen.

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

[hier](https://github.com/fdnd-agency/oncollaboration/issues/65#issuecomment-2737215941) dezelfde issue als waar ik vertel over de *SPA* techniek van SvelteKit. Hier vind je dus ook een kleine documentatie dat ik dus de *data-sveltekit-noscroll* attribuut heb toegepast in mijn code.

hier is meer info over de *data-sveltekit-noscroll* techniek [svelteDOCS](https://svelte.dev/docs/kit/link-options#data-sveltekit-noscroll)

<h3 id="props">Svelte 5 props</h3>

In svelte 5 is *props* een *rune*. Runes zijn symbolen die je gebruikt Svelte bestanden om de Svelte-compiler aan te sturen. Als je Svelte als een eigen taal beschouwt, dan zijn runes een onderdeel van de syntaxis — ze functioneren als sleutelwoorden.

Het is belangrijk om te weten dat er verschillen zijn tussen *runes* en Vanilla js functies

- je hoeft ze niet te importeren sinds het ingebouwd is door svelte
- het zijn geen waardes, dus je kunt ze niet aan een agrument toewijzen van een functio of ze aan een variable geven
- Net als js sleutel worden zijn *runes* alleen geldig binnen bepaalde gedeeltes binnen je code

**Maar wat doen props?**

*props* zorgt ervoor dat je bepaalde eigenschappen ophaald 

hier is een voorbeeld wat een ander student heeft gemaakt:

```js
let { placeholder = "Type hier...", id, type = "text", ...rest } = $props();
```

Hier worden dus placeholder, id, type en nogmeer dingen ALS die erbij komen doorgestuurd naar andere components

en hier is hoe hij het in een andere file ophaalt en daarbij ook een nieuwe eigenschap erbij toevoegd

```js
let { onchange } = $props();
```

**andere voordelen van props**

- het vervangt *export let*, dus je hoeft de eigenschappen niet meer handmatig op te halen
- je kan alle eigenschappen destructurenen als dat nodig is.
- en voorkomt dubbele declaraties in components

[hier](https://svelte.dev/docs/svelte/what-are-runes) vind je meer over *runes*
[hier](https://svelte.dev/docs/svelte/$props) vind je meer over *props*
<h3 id="event-bubbling">event Bubbling</h3>

Event bubbling in Svelte 5 betekent dat events van een child-component automatisch omhoog gaan naar de parent-component, zodat de parent erop kan reageren

Robin van der Heijden die werkt aan het [atlas](https://github.com/fdnd-agency/atlas4045) project gebruikt deze methode bij het maken van zijn filter functie op de [posters](https://atlas4045.agency.fdnd.nl/posters/) pagina

**Hoe werkt het**

1. als eerst maakt hij in zijn *atom* component een object waar meerdere variablen gedefinieerd word naar de *$props();* onderandere de *onchange*. Het is wel belangrijk om te onthouden dat hier nog niks gedaan word met de *onchange* sinds hij dit nog niet van zijn parent component heeft ontvangen.
2. In het *molecule* component wordt *onchange* als prop opgehaald en doorgegeven aan het atom component. Hierdoor kan het atoom component zijn eigen *onchange* omhoog sturen
3. Binnen het *Orgnisme* component word het daardwerkelijke event-handler(filterhandler) gedefinieert voor de *naam* en *straat*. Deze word uiteindelijk als *onchange* aan de molecule component doorgegeven die dat dan weer naar het atoom component stuurt, waardoor als de gebruiker iets intypt in de TextInput hij het event helemaal doorbubbelt van het atoom naar het organism.

Zie [hier](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling#introducing_event_bubbling) de basis over event bubbling

En [hier](https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes-Component-events) meer info over event bubbling in svelte 5.


<h3 id="state-management">Sveltekit State Management</h3>

State management word gebruikt op de lokale staat van een user te beheren. Daarmee bedoel ik binnen de code bepaal wat er gebeurt als de user iets aan de data veranderd of wanneer hij binnen een page navigeert.

eigelijk zijn de [Reactive statements](#reactive-statements) ook een voorbeeld van de statement management. het zorgt ervoor dat de data geupdate word binnen de pagina en dat ook kan displayen. 

een ander voorbeeld wat ook mij had geholpen met de chapter function van *oncollaboration* is de *$app/stores*. dit stuk code heeft  ervoor gezorgd dat als ik een chapter van de video aanklik hij de pagina niet refreshed. Dus het is niet alleen de *spa* methode die dat afhandelt.

<h2 id="semester-4.5-sources">Semester 4.5 sources</h2>

<h3 id="svelte-runes">Svelte 5 Runes</h3>

Bij het onderwerp over [event-bubbling](#event-bubbling) heb ik wat verteld over het gebruik van *$props;*. *$props;* is een rune wat een nieuwe feature is van svelte 5, maar wat is een rune precies, wat doen ze en hoeveel zijn er.

Runes zijn Syntaxes (keywords) die de compiler van svelte controllen. Je kan ze herkennen met de $ teken die ze hebben

**alle runes op een rij**

- *$props;*
- *$state*
- *$derived*
- *$effect*
- *$bindable*
- *$inspect*
- *$host*

**runes mode**

Om runes leesbaar te maken heb ik hulp gekregen van christopher die een script had die ervoor zorgt dat runes herkend word binnen vs code

[issue over de sv5 migration](https://github.com/fdnd-agency/oncollaboration/issues/86)

**$derived**

Een belangrijke rune waar ik het over wil hebben is de *$derived* rune sinds dat vrij intresante rune is die in mijn code is voorgekomen sinds ik mijn project van oncollaboration van sv4 over heb gezet naar sv5.

In *comment.svelte* waar ik de timestamp functie heb gemaakt zijn alle reactive statements die orgineel aleen een dollar teken waren over gezet naar *$derived*.

*$derived* maakt berekeningen van andere gegevens. een voorbeeld daarvan is dit

```javascript
let parsedContent = $derived(parseCommentContent(comment.content));
```

Deze korte functie berekend wat er binnen de parsedCommenContent functie gebeurt. waneer er iest veranderd in de comment.content zorgt de *$derived* ervoor dat de parsedContent var opnieuw berekend word. Dit maakt de variabele reactief en zorgt ervoor dat de inhoud altijd up-to-date is met de laatste wijzigingen in comment.content.

Om het nog makkelijker uit te leggen. Post je een comment dan word de comment die je hebt geschreven (met eventueel de timestamp) correct weergeven word nadat je het hebt gepost

Hier is de bron die meer over runes verteld [svelteDocs](https://svelte.dev/docs/svelte/what-are-runes)

[issue naar mijn verwerking](https://github.com/fdnd-agency/oncollaboration/issues/75)

<h3 id="is-selector">:is() selector</h3>

Aan de hand van een issue van [css weekly #609](https://css-weekly.com/issue-609/) heb ik een artikel gevonden over de *is:()* Selector.

**voorbeeld**

```css
/* Zonder de is:() selector */
h1, h2, h3, h4, h5, h6 {
	font-weight: bold;
}

/* met de is:() selector */
:is(h1, h2, h3, h4, h5, h6) {
	font-weight: bold;
}
```

Als je zo naar de code kijkt denk je mischien van "whats the point". Nou, het toffe van deze techniek is dat verschillende elementen/selectoren binnen dezelfde parent element die dezelfde styling krijgen dat je de parent maar 1 keer hoeft te schrijven en dat allen ovirige selectoren binnen de () komen zonder dat je dat meerdere keren opnieuw hoeft te schrijven

*voorbeeld met hoe ik het heb gedaan*

```css
/* before */

.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6,
.markdown-content b,
.markdown-content strong,
.markdown-content i,
.markdown-content em,
.markdown-content p {
  margin: 10px 0;
}

/* after */

.markdown-content :is(h2, h3, h4, h5, h6, b, strong, i, em, p) {
  margin: 10px 0;
}
```

ze doen allebij hetzelfde alleen de after is veel meer optimized.

meer info vind je [hier](https://gomakethings.com/reducing-css-complexity-with-the-is-pseudo-class/?utm_source=CSS-Weekly&utm_campaign=Issue-609&utm_medium=web)

en [hier](https://github.com/J3SS3HVA/i-love-web/blob/d5ab39c9957ddaceda6eb5e915702bcf0623e3e9/static/styles/global.css#L114-L121) een voorbeeld van hoe ik het heb verwerkt in mijn eigen code.


<h3 id="conditional-attributes-svelte">Conditional attributes Svelte & inline scripting</h3>

Sveltekit maar ook andere frameworks hebben De mogelijkheid om mini javascript code binnen een element te doen. 

Hier bijvoorbeeld:

In dit stukje geef ik aan als featureWebinars bestaat, hij de *js-enabled*.[link naar mijn code](https://github.com/fdnd-agency/oncollaboration/blob/version-before-redesign/src/routes/speakers/%5Bslug%5D/%2Bpage.svelte#L121)

```sveltekit
<section bind:this={featuredWebinars} class="featured-webinars {featuredWebinars ? 'js-enabled' : ''}">
```

Ander voorbeeld is deze hieronder:

Deze geeft aan dat wanneer een animation voorbij is hij de *rotating animation* weghaald. [link naar mijn code](https://github.com/fdnd-agency/oncollaboration/blob/8c03eaa8207b8c1adeb25c3c2c50a088c2231f60/src/routes/speakers/%5Bslug%5D/%2Bpage.svelte#L124)

```sveltekit
<svg bind:this={svgElement} onanimationend={() => svgElement.classList.remove('rotating')} width="30px" height="30px" viewBox="0 0 24 24" fill="hsl(340, 100%, 15%)" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="14" rx="1" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M13 7L17 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 7L7 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
```

[hier](https://svelte.dev/docs/svelte/basic-markup) vind je een bron over dit soort markups die je binnen zo'n html element kan doen

<h3 id="LawsOfUx">Laws of UX</h3>

Een intresante bron wat ik van *jason* heb gekregen gaat over de [regels van Ux design](https://lawsofux.com/serial-position-effect/). Deze Site bevat een lijstje met bepaalde dingen over aanpak van design. Zo heb je bijvoorbeeld [hier](https://lawsofux.com/serial-position-effect/) eentje wat gaat over *Serial Position Effect* dit betekent dat gebruikers vooral kijken naar wat er vooraan staat en wat er helemaal achteraan staat. Dit laat weten dat het belangrijk is bij design dat je dat ook doet voor de dingen die je het liefts wil laten zien.

<h2 id="repairs">repairs</h2>

<h3 id="css-property">css @property</h3>

Zit momenteel in de reparatie periode en aan de hand van wat bronnen die *Joost* ons heeft gegeven over *scroll-driven-animation* vond ik daar iets in dat heet *@property* van css. Ik heb het wel vaker gezien maar wist niet wat het exact was dus ben onderzoek gaan doen over deze css techniek.

Over dit onderwerp vind je hier de bron die mij geholpen heeft met her berggijpen van *@property*. Ook vind je 2 links die laat zien dat ik er zelf ook gebruik van heb gemaakt in 1 van mijn persoonlijke projecten waar ik een verzamel lijst wil maken van speel kaarten.

[css tricks @property]()

[Mijn github repo](https://github.com/J3SS3HVA/Onepiece-cardgame-collection)

[css code](https://github.com/J3SS3HVA/Onepiece-cardgame-collection/blob/2ed04c933e0266109e12e1c1bf6887dd3c8a1bec/src/routes/%2Bpage.svelte#L85-L216)

[live site](https://cardgamecollectiononepiece.netlify.app/)

**Maar wat is @property precies?**

Het is een bepaalde regel in css waarmee je zelf je eigen custom property kan definiëren met verschillende syntaxes zoals *number*, *percentage*, *color*, *angle* en meer. Naast dat kan je ook de ervenis (inherits) bepalen (Daar ga ik meer over vertelen).

**syntaxes & initual value**

In het vorige kopje heb ik al wat voorbeelden opgenoemd. Die syntaxes bepalen wat voor soort value de @property kan krijgen.

Wat je hier ziet is dat de naam van de @property *@--hue* is. Als Syntax heeft hij angle, dat betekent dat zijn value altijd een getal moet zijn met deg aan het einde om aantegeven dat het ook echt een angle is.
```css
@property --hue {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
```

Andere voorbeeld is bijvoorbeeld de *color*.

Hier geld de regel dat je een geldige css kleur meegeeft (of het nou naam, hsl, rgb of hex is maakt niet uit.)

```css
@property --hue {
  syntax: "<color>";
  initial-value: red /*hsl,rgb en hex kan ook*/;
  inherits: false;
}
```

**meerdere syntaxes in 1 @property?**

Css properties hebben ook de mogelijkheid om meerdere soorten syntax types in 1 @property te stoppen.

```css
@property --size {
  syntax: "<percentage> | <length> | <color>";
  initial-value: 0%;
  inherits: true;
}
```

Wat je hier ziet is dat Deze @property nu *percentage*, *length* en *color*. Dit betkent dat als je bij een bepaalde css selector de *--size* iets anders wil maken zoals kleur, dan is dat ook mogelijk.

```css
h2{
  --size: green;
}
```

**meerdere waardes**

Naast het feit dat je met **|** meerdere syntaxes kan toevoegen kane je ook op verschillende manieren binnen de initial value meerdere waardes tergelijkertijd geven. met bijvoorbeeld *+* kan je bijvoorbeeld binnen de initial value een spacebar ruimte tussen 2 ruimtes geven.

```css
@property --size {
  syntax: <length>+";
  initial-value: 10px 20px;
  inherits: true;
}
```

Maar je kan ook met *#* gebruik maken van kommas.

```css
@property --text {
  syntax: <string>#";
  initial-value: linear-gradient(black, blue), linear-gradient(red, purple)";
  inherits: true;
}
```

**inherits**

Het laatste wat je waarschijnlijk is opgevallen waar ik ook graag meer over wil vertellen is de *inherits*. De inherits is een boolean waarbij je kunt kiezen tussen true en false. Dit betkent dat als inherits op true staat en je veranderd de waarde van de @property ergens dan betekent dat de childeren van dat element die ook die property willen gebruiken de waarde krijgen van zijn parent en niet van het aangemaakte @property.

Hier is een goed voorbeeld die van mijn eigen project komt. 

```css
 @property --card-content {
    syntax: "<number> | <color> | <angle>";
    inherits: false;
    initial-value: red;
  }
 
  li {
    --card-content: 20deg;
    text-align: center;
    padding: 0.5em;
    border-radius: 8px;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
    position: relative;
    transition: transform 0.3s ease; 
  }


  li p {
    color: var(--card-content);
  }
```

Laten we er stap voor stap door heen gaan

1. Heb dus een @property gemaakt die *--card-content* heet.
2. de @property support meerdwere syntaxes types, zoals color.
3. de waarde is rood en inherits staat op false
4. vervolgens zie je dat de waarde veranderd naar 20deg. Dit kan omdat hij ook angle support
5. Daaronder zie je dat de p in de li (oftewel de child van de li) een color property heeft met als waarde de custom property die ik heb aangemaakt.
6. Omdat inherits op false staat betekent dat hij niet de waarde van zijn parent pakt. Dus de waarde in *li p* is nog steeds rood
7. zou inherits op true zijn geweest dan was de waarde in de color 20deg geweest omdat hij de value van zijn parent pakt in plaats van de custom proprerty.

Dit is een goed voorbeeld van hoe de inherits werkt.

**maar wat is nou het voordeel aan custom properties als je het vergelijkt met css variables**

Het is je mischien opgevallen dat het toepassen van css properties zowat sprekend lijkt als het toepassen van een css variable. Alleen het voordeel van de css @property is dat hij al een volledige info waarde heeft. Dat wil zeggen dat als je bijvoorbeeld een animation maakt en je zet alleen de custom property met een nieuwe waarde erin dat hij ook weet dat hij moet doen.

Hier zie je een goed voorbeeld van mijn eigen project om het wat beter beeld ervan te krijgen.

```css
@property --text-animations {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0deg;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
    animation: growshrink 0.7s ease-in-out;
    animation-iteration-count: 5;
    transform: rotate(var(--text-animations));
  }

  @keyframes growshrink {
    to{
      --text-animations: 360deg;
    }
  }
```

1. Je ziet een custom @property met de naam *--text-animations*
2. Zijn syntax is angle met als waarde 0deg
3. Die waarde geef ik aan mijn h1 met de transform rotate property.
4. Je ziet ook een dat ik de h1 een animation heb gegeven. 
5. In de animation zie je dat ik alleen de custom propertty heb gegevenen binnen de to met daarbij een nieuwe waarde. waardoor hij dus een volledig rondje draait.
6. Dit werkt omdat css weet dat dit een cutom property is die angle als syntax heeft. Dat betekent dat je hem in de animation alleen hem een nieuwe waarde moet geven om hem te laten draaien

Als je css var gebruikt in plaats van @property zou dit niet werken bij de animation.

Waarom dit niet werkt is omdat css niet kan zien dat die variable over rotate gaat. Dus in de animation zeg je alleen *naar 360deg* en niet *naar rotate 360deg* wat dus wel het geval is bij @property.

```css
  :root{
    --text-animations: 0deg;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
    animation: growshrink 0.7s ease-in-out;
    animation-iteration-count: 5;
    transform: rotate(var(--text-animations));
  }

  @keyframes growshrink {
    to{
      --text-animations: 360deg;
    }
  }
```

**Wat is mijn eigen mening over @property**

Wat je hebt gezien is dat ik het zelf op een kleinschalige manier heb toegepast in mijn eigen project om er mee te expirimenteren, maar ik zie nu al de potentie van deze css techniek voor grote projecten. Zeker merk ik het bij animations, je maakt De keyframe kleiner en cleaner. Dus eigelijk is dit een andere manier om je code dry te maken en meer leesbaar. Andere dingen dat ik merk is dat het fouten in de css sneller voorkomt sinds je met css properties moet aangeven wat het is vergeleken met var waar je van alles kan in dumpen. En als laatst De inherits die het gedrag kan bepalen van verschillende css selectors die die @property in hun eigen styling toepast.

<h3 id="scroll-driven">scroll driven animation</h3>

Binnen mijn eigen project Ben ik bezig geweest met scroll-driven animation. Ik heb hiermee eerder gewerkt en daar ik inspiratie van gepakt [inspiratie van mijn code uit sprint 17](https://github.com/SamaraFellaDina/future-ready-design/blob/1e5460f35f9cccf29233ec8e1c2855973efba20b/src/lib/2_Molecules/Orbit.svelte#L105-L116). 

**Maar wat is scroll driven animation nou eigelijk**

Om het zo makkelijk mogelijk te houden is scroll driven animation een manier om animations te laten uitvoeren wanneer je scrollt op een bepaald elemen inplaats van dat het gelijk uitvoert na het laden van de pagina.

**Mijn ervaring bij het maken van scroll driven animation**

In het algemeen Heb ik er geen moeite mee gehad sinds deze feature niet veel code.

Hier vind je ook een voorbeeld van hoe ik scroll driven werkent heb gekregen in mijn [code](https://github.com/J3SS3HVA/Onepiece-cardgame-collection/blob/main/src/routes/%2Bpage.svelte#L156-L188)

```css
@supports (animation-timeline: view()){

  img {
    --card-content: 10deg;
    animation: straighten linear both;
    animation-timeline: view();
    /* animation-range: entry 0% cover 50%; */
    /* animation-range: entry 40% exit 50%; */
    transform: rotate(var(--card-content));
}

/* @keyframes straighten {
  to{
    --card-content: 0deg;
    scale: 1;
  }
} */

  @keyframes straighten{
    0% {
      --card-content: 10deg;
      scale: 0.8;
    }
    50% {
      --card-content: 0deg;
      scale: 1;
    }
    100% {
      --card-content: 10deg;
      scale: 0.8; 
    }
  }
}
```

1. Als eerst zorg ik voor met de **@support** dit alleen werkt voor elementen die scroll driven animation ondersteunen.
2. wat ik dan doe is dat ik de waarde van mijn [custom property](#css-property) binnen de animation van waarde verander na 10deg.
3. Binnen de animation heb ik hem een naam gegeven genaamd *straighten*. 
4. linear en both zorgen ervoor dat de value behouden blijven buiten de animatie. Zonder dit kan je net aan de kaarten zien in hun normale staat vlak voordat ze buiten het scherm komen.
5. Daarna geef ik hem een animation time line gebaseerd op **view()**. Dit zorgt ervoor dat de scroll driven animation aan het element begint zodra hij bij het begin van de viewport is (0%) en eindigt bij het einde van de viewport (100%). Ik heb het leeg gehouden binnen de () omdat dit zowel voor verticale als horizontale scroll werkt. [mozzilla view()](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view)
6. De [animation-range](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range) is bedoeld voor de andere @keyframe animation die gecomment is. De animation range zorgt ervoor dat de animation halverwege het scrollen binnen het scherm (50% in het midden dus) hij de animatie eindigt. Dat betekent dat hij niet 100% van de animation berijk op 100% van de view poort maar halverwegen. Oftewel entry = begin hier met animeren, cover = eindig de animatie hier.
7. Als laats geef ik de *--card-content* aan transform property met daarin een rotate.
8. Daarmee hoef ik dus alleen de custom property doorgeven met een nieuwe waarde en met dat heb ik een succesvolle scroll driven animation gemaakt die je in mijn [livesite](https://cardgamecollectiononepiece.netlify.app/)terug vind.

**recap bronnen**

[inspiratie van mijn code uit sprint 17](https://github.com/SamaraFellaDina/future-ready-design/blob/1e5460f35f9cccf29233ec8e1c2855973efba20b/src/lib/2_Molecules/Orbit.svelte#L105-L116): Waar ik mijn mind heb verversd over scroll driven animation.

[mozzilla view()](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view): geeft wat uitgebreidere uitleg over de **view()**.

[animation-range](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range): geeft uitgebreide uitleg over de animation range die mij dus geholpen heeftmet het starten en eindigen van mijn gecommente keyfram animation.

[livesite](https://cardgamecollectiononepiece.netlify.app/): mijn live site. Waar ik mijn scroll driven animation werken heb gekregen.

[code](https://github.com/J3SS3HVA/Onepiece-cardgame-collection/blob/main/src/routes/%2Bpage.svelte#L156-L188): en natuurlijk de code die erbij hoort.






