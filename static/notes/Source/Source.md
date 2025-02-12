**sources die ik gebruik voor mijn werk + mijn code waar ik het verwerk**


### Reactive statements

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



### Scss werkend krijgen

Voor de 3 week van sprint 17 wilde ik een achtergrond hebben met vallende sneeuw. Ik vond toen een [codepen](https://codepen.io/alphardex/pen/dyPorwJ) die dat had en werkte op vallende sneeuw

Probleem was dat ik scss werkend moet krijgen in mijn svelte project

Hier vond ik een stack overflow dit ik gebruikte over hoe ik dat voor elkaar kan krijgen.
bron: [stack overflow](https://stackoverflow.com/questions/75056422/how-to-use-vitepreprocess-with-global-scss-mixins-in-sveltekit)

Hier is uitleg hoe heb ik het verwerkt heb in mijn project + uitleg over de scss code

[instalatie](https://github.com/SamaraFellaDina/future-ready-design/issues/97#issue-2745265554)
[scss code uitleg](https://github.com/SamaraFellaDina/future-ready-design/issues/97#issuecomment-2573779191)



### hsl kleuren

Leuke workshop van Koop over kleuren en contrasten vertelde hij bijvoorbeeld over HSL. HSL is een andere manier om kleuren te kiezen voor je pagina. HSL staat voor Hue, saturation and lightness(vertaling: Tint of Kleurtoon, Verzadiging en helderheid)


voorbeeld: `background: hsl(50 80% 40%);`. het eerste getal bepaald de tint, de 2de de verzadiging en de laatste de helderheid.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) laat goeie voorbeelden zien. niet alleen de mogelijkheden met kleur maar ook de wwaardes die je binnen de () kan gebruiken zoals deg (degree) turn en meer.

Heb zelf bij de view transition coding spike wat kleuren te veranderen met het gebruik van hsl. die vind je hier

[code](https://github.com/SamaraFellaDina/future-ready-design/blob/db3b1a399ffbe1744ab1df022d225f8cfc6a2b8a/static/styles/global.css#L8-L128)

### milestones subissues

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
 
