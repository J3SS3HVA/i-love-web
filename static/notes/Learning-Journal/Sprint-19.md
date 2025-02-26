## Week 1 Fdnd agency

### 3 februari

**introductie/algemeen**

Eerste dag in de Fdnd Agency waarbij een uitleg is gegeven over hoe de komende periode eruit gaat zien en wat wij allemaal gaan doen.

**conventies binnen de agency**

Voor dat we volledig aan de slag konden gaan moesten we wel on houden aan de conventies van de fdnd agency die vind je bij deze link:

[Code Conventies](https://github.com/fdnd-agency/.github/wiki/Conventions)

**Mijn opdracht**

Ik heb als opdracht gever *Oncollaboration*. 
Oncollaboration is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten.

Mij is het de taak om de website verder te af te maken.

**1ste stap**

Ben begonnen met het lezen van de contribution, handover en technische documentatie te lezen, zodat ik weet waar ik rekening mee moet houden en wat er gedaan nog moest worden. Het eerste wat mij opviel is dat ze de profiel pagina niet af hebben gekregen dus ik wilde daar een start aan gaan maken.

**breakdown schets en code doornemen**

Wat ik als eerst heb gedaan is de code doornemen. Kwam veel nieuwe dingen tegen die ik wel eens eerder heb gebruikt in het vorige semester sind ik weinig heb gewerkt met data zoals hoe de *slug* ongeveer werkt, *post* binnen svelte kit en de *actions* die erbij horen.

**wat is een slug**

Dit is een heel belangrijk iets voor mij sinds ik nooit echt met slugs heb gewerkt.
Een *slug* is het unieke identificerende deel van een webadres, meestal aan het einde van de URL.

[mdn slug definition](https://developer.mozilla.org/en-US/docs/Glossary/Slug)

Het word bij *Oncollaboration* meestal als detail pagina gebruikt zoals in [/webinars](https://oncollaboration.agency.fdnd.nl/webinars).


### 4 februari

**mobiele versie bouwen**

Voordat ik de mobiele versie maakte was het mij opgevallen dat de webinars en contourings section er het zelfde uitzag als in de home. 
Dat scheeld tijd dus heb de layout overgenomen en hem in mijn profiel page.svelte gezet.

De enige s truggle was de Profile img met daarbij de profile info op zijn plek te krijgen, maar dat kosste niet veel moeite

### 5 februari

**mobiele versie afmaken en start maken aan de desktop**

De layout was zowat klaar en ben van start gegaan aan het responsive maken van de page. 1 belangrijk ding wat mij opviel is dat De andere pages vooral bij de *@media* een min width van *500px*, *600px* en *1080px* gebruiken.

**nieuwe color palette toepassen**

Volgens het nieuwe ontwerp word er nu ook gebruik gemaakt van een nieuwe kleuren paletten. 
Heb de hex waardes gepakt en ze overgezet naar hsl en heb dus uiteindelijk de oude kleuren vervangen met de nieuwe

**before**

  ` --primary-color: hsl(217, 44%, 23%) `

  ` --background-color: hsl(34, 41%, 93%) `

  ` --background-color-alt: hsl(0, 0%, 100%) `
  
  ` --background-category-color: hsl(170, 23%, 79%) `
  
  ` --hover-state-color: hsl(216, 37%, 38%) `
  
  ` --accent-color-1: hsl(161, 48%, 24%) `

**after**

  ` --primary-color: hsl(339, 100%, 21%); `
  
  ` --background-color: hsl(338, 27%, 92%) `
  
  ` --background-color-alt: hsl(0, 0%, 100%) `
  
  ` --background-category-color: hsl(339, 26%, 76%); `
  
  ` --hover-state-color: hsl(339, 26%, 80%) `
  
  ` --accent-color-1: hsl(340, 100%, 15%); `

### 6 februari

**profile section anders stylen**

Met wat hulp van de opdrachgever heb ik nu zowat bijna mijn hele profile page af qua styling en layout.

**waar liep ik tegen aan**

De profile section had veel te veel wit ruimte en had uberhaupt nog geen ontwerp van hoe deze section op desktop eruit moest zien. Daarom kwam *Sergio* (mijn opdracht gever) met het idee om de layout over te nemen van de speakers page.

**wat nu?**

De layout komt overeen met die van de speakres page, maar ik loop nog steeds met het probleem dat er veel wit ruimte is. Daarom heb ik als idee om onder de user info een *bio* section te zetten 

### 7 februari

**code en design review**

Eerst code en design review vandaag waarbij ik mijn styling en layout pagina presenteer aan mede studenten en een docent. Bij het presenteren van de profiel pagina werd er vooral natuurlijk gekeken naar code. 

## week 2

### 10 februari

**erd schets voor data**

Vandaag zijn er plannen gemaakt voor de data in richting van het toevoegen van favoriete webinars aan de favorite list

Ben met hulp van een software developer student van start gegaan aan het maken van een *Erd Diagram* op de website van [lucidapp](https://lucid.app/lucidchart/28f5da21-95e5-4765-949f-9d2f924c943d/edit?page=0_0#) *Belangrijke bewijslast voor 3.1.2 voor standaarden*

**empty state**

Wilde ook alvast een empty state schetsen voor als er in een bepaalde section leeg is in de profiel page**

**component & static en dynamic schets**

De static en dynamic schets heeft beeld gegeven voor wat statisch geschreven moet worden en wat data is.

Component schets voor eventueel welke content in een los bestand moet en wat niet

**morphological chart voor de favorite button**

Heb voor de favoriete button per categorie wat ideeën verzameld voordat ik het ga bouwen

### 11 februari

**code refactoren van pull request 7feb**

De feedback was vooral gebaseerd op nette code dus daar had ik vandaag geen moeite mee

**keuzes maken en feedback krijgen**

Uiteindelijk heb ik beslissingen gemaakt met hoe ik de fav button eruit wil laten zien. In de morphological chart markeer ik alles met een rode border per categorie om aan te geven dat ik dat wil gebruiken bij de bouw fase.

### 12 februarie

**handover**

Vandaag ben ik bezig met de overdracht, omdat er kans is dat ik binnenkort stage ga lopen. Hieronder is een lijstje met wat er gedaan moet worden voor de overdracht.

**feedback**

- feature branch conventies (titel gebaseerd op waar je aan werkt)
- alleen engels
- label cards by feature for webinars & webinars (label per feature or pages)
- create main issue for each page & a general issue where you can place subissues for every page


- branches opruimen ✓
- check pull request from febuary the 7th ✓
- Remove useless content (from comments etc. (directus)) ✓
- desk research: when to use issues / subissues, when to use milestones and how to combine them. Turn this to a fdnd convention ✓

## week 3

### 26 februarie

Tijdje terug dat ik hier wat voor het latst heb geschreven, maar hier ben ik weer.

**Fields in a fetch endpoint**

Als eerst wil ik zeggen dat het mij gelukt is om een feature te maken dat elke user zijn eigen favoriete webinars lijst kan bekijken. Ik struggelde veel mee en kreeg daarbij ook natuurlijk een beetje hulp

Je vind wat meer informatie over fields hier => :[Directus fields](https://docs.directus.io/reference/system/fields.html)

**Code voorbeeld**

in mijn eerste fetch die ik uitprobeerde wilde ik dus alles van de user ophalen. Wat het probleem was is dat De favourites *nested data* bevat die van een andere tabel komt.

Om ervoor te zorgen dat ik de nested data pak is om dus fields te gebruiken hier is hoe mijn endpoints er nu uitzien

```javascript
    const userResponse = await fetchJson(
      `${baseURL}avl_users/4?fields=id,fullname,email,profile_picture,entitle`
    );
```
