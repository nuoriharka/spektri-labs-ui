# Spektri Labs UI

A modern, accessible UI component library built with React, TypeScript, and Tailwind CSS, using shadcn/ui components.

## Features

- 🎨 **Beautiful Design** - Modern, clean aesthetics with gradient accents
- ♿ **Accessible** - Built with accessibility in mind
- 🚀 **Fast** - Optimized for performance and bundle size
- 📱 **Responsive** - Works perfectly on all device sizes
- 🌙 **Dark Mode** - Built-in dark mode support
- 🎯 **TypeScript** - Full TypeScript support with excellent IntelliSense
- 🛠️ **Customizable** - Easy to customize and extend

## Quick Start

### Installation

```bash
npm install
npm run dev
```

### Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Spektri Labs UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

### Available Components

- **Button** - Multiple variants and sizes
- **Card** - Flexible container with header, content, and footer
- **Badge** - Status indicators and labels
- **Input** - Form input fields
- **Label** - Accessible form labels
- **Textarea** - Multi-line text input

### Component Structure

```
src/
  components/
    ui/
      button.tsx
      card.tsx
      badge.tsx
      input.tsx
      label.tsx
      textarea.tsx
  app/
    page.tsx
    components/
      page.tsx
    examples/
      page.tsx
    docs/
      page.tsx
```

## Customization

### Colors

The design system uses CSS variables for easy theming:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

### Dark Mode

Dark mode is supported out of the box:

```css
.dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... dark mode variables */
}
```

## Development

### Project Structure

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Headless, accessible components with Tailwind styling
- **Lucide React** - Beautiful icons

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Troubleshooting

- Local dev URL: http://localhost:3001 (we bind Next.js to port 3001).
- If the port is busy, either stop the other service or run with a different port:

```bash
next dev -p 3002
```

- In Codespaces: make sure port 3001 is forwarded/public to access the app from your browser.

## Conventions

- Import UI components only from `@/components/ui/*` modules (shadcn/ui wrappers).
- Do not import `recharts` directly in app code. Use `@/components/ui/chart` re-exports for charts.

## Examples

Visit the `/examples` page to see real-world usage:

- Login forms
- User profiles
- Data tables
- Project dashboards

## Documentation

Comprehensive documentation is available at `/docs` including:

- Getting started guide
- API reference
- Design system
- Advanced usage patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

- 📧 Email: support@spektrilabs.com
- 💬 Discord: [Join our community](https://discord.gg/spektrilabs)
- 📱 GitHub: [Issues and discussions](https://github.com/spektrilabs/ui)

---

Built with ❤️ by the Spektri Labs team.
# Spektri.Labs: Älykäs Automaatio Kaikille

<aside>
Spektri.Labs demokratisoi tekoälyn ja automaation tekemällä siitä saavutettavaa jokaiselle käyttäjälle - teknisestä taustasta riippumatta. Agenttimme toimivat näkymättömänä voimana taustalla, muuttaen monimutkaiset prosessit yksinkertaisiksi. Rakennamme tulevaisuutta, jossa älykkäät agentit palvelevat kaikkia - yksilöistä suuryrityksiin.

</aside>

## Pääviestit

### Maaginen Yksinkertaisuus

Spektri.Labs piilottaa monimutkaisen teknologian intuitiivisen käyttöliittymän alle. Tekoälyagenttien rakentaminen ja käyttöönotto on yhtä helppoa kuin keskustelu.

### Henkilökohtainen Tekoälytiimi

Luo oma älykkäiden agenttien tiimi, joka työskentelee puolestasi ympäri vuorokauden. Jokainen agentti on persoonallinen ja erikoistunut juuri sinun tarpeitasi varten.

### Saumaton Integraatio

Agentit toimivat saumattomasti nykyisten työkalujesi kanssa, mikä mahdollistaa automaation soveltamisen kaikkiin liiketoimintaprosesseihin ilman häiriöitä.

## Etusivu

### Hero-osio

**Otsikko:** Anna sovelluksillesi aivot

**Alaotsikko:** Spektri.Labs demokratisoi automaation tekemällä tekoälystä henkilökohtaisen supervoiman jokaiselle yrittäjälle ja tiimille.

**CTA-painike:** Aloita ilmaiseksi

### Ominaisuusosio

### No-code Agenttien Rakentaminen

Luo älykkäitä agentteja intuitiivisella visuaalisella käyttöliittymällä, joka ei vaadi ohjelmointitaitoja. Agentit voivat suorittaa tehtäviä, käsitellä dataa ja tehdä päätöksiä määriteltyjen sääntöjen perusteella.

### Mallipohjamarkkinapaikka

Valmiit mallipohjat mahdollistavat nopean käyttöönoton. Käytä valmiita pohjia tai jaa luomiasi malleja yhteisön kanssa.

### Integraatiokirjasto

Kattava valikoima valmiita integraatioita suosituimpiin palveluihin ja sovelluksiin. Yhdistä agentit saumattomasti nykyisiin työkaluihisi.

### Käyttötapausosio

### Yksinyrittäjille

Automatisoi rutiinitehtävät ja keskity ydinliiketoimintaasi. Spektri.Labs toimii virtuaalisena assistenttina, joka huolehtii hallinnollisista tehtävistä, asiakasviestinnästä ja markkinoinnista.

- Automaattinen asiakaspalvelu
- Sosiaalisen median hallinta
- Laskutuksen automatisointi

### Markkinointitiimeille

Tehosta markkinointiprosesseja ja personoi asiakaskokemusta. Agentit analysoivat dataa, luovat sisältöä ja optimoivat kampanjoita puolestasi.

- Personoidut sähköpostikampanjat
- Sisällöntuotannon automatisointi
- Mainonnan optimointi

### Toimistoille

Skaalaa toimintaasi ja tehosta asiakasprojektien hallintaa. Spektri.Labs auttaa automatisoimaan toistuvia prosesseja ja vapauttamaan resursseja luovaan työhön.

- Projektinhallinta-automaatio
- Raportointityökalut
- Asiakasanalytiikka

### Agenttifarmit yrityksille

**Otsikko:** Skaalautuva älykkyys jokaiseen tarpeeseen

### SuuryrityksilleSuuryrityksille

Rakenna kattava agenttifarmien verkosto, joka automatisoi kokonaisia osastoja ja prosesseja. Agenttitiimit voivat toimia synkronoidusti eri osastojen välillä, jakaen tietoa ja tehostamalla liiketoimintaa.Rakenna kattava agenttifarmien verkosto, joka automatisoi kokonaisia osastoja ja prosesseja. Agenttitiimit voivat toimia synkronoidusti eri osastojen välillä, jakaen tietoa ja tehostamalla liiketoimintaa.

- Monimutkaiset työnkulut eri osastojen välilläMonimutkaiset työnkulut eri osastojen välillä
- Sääntöpohjainen päätöksenteko tuhansille tapahtumilleSääntöpohjainen päätöksenteko tuhansille tapahtumille
- Reaaliaikainen liiketoimintadatan analysointiReaaliaikainen liiketoimintadatan analysointi

### Keskisuurille yrityksilleKeskisuurille yrityksille

Rakenna älykkäitä agenttifarmeja vastaamaan kasvaviin tarpeisiin. Automatisoi toistuvat tehtävät ja skaalaa nopeasti ilman henkilöstökustannusten kasvua.Rakenna älykkäitä agenttifarmeja vastaamaan kasvaviin tarpeisiin. Automatisoi toistuvat tehtävät ja skaalaa nopeasti ilman henkilöstökustannusten kasvua.

- Myynti- ja markkinointiautomaatioMyynti- ja markkinointiautomaatio
- Asiakastietojen hallinta ja analysointiAsiakastietojen hallinta ja analysointi
- Toiminnanohjausjärjestelmien integraatioToiminnanohjausjärjestelmien integraatio

### JulkishallinnolleJulkishallinnolle

Tehosta kansalaispalveluita ja sisäisiä prosesseja agenttifarmien avulla. Agentit voivat käsitellä kyselyitä, lomakkeita ja hakemuksia ympäri vuorokauden.Tehosta kansalaispalveluita ja sisäisiä prosesseja agenttifarmien avulla. Agentit voivat käsitellä kyselyitä, lomakkeita ja hakemuksia ympäri vuorokauden.

- Kansalaispalveluiden automatisointiKansalaispalveluiden automatisointi
- Lomakkeiden käsittely ja vahvistusLomakkeiden käsittely ja vahvistus
- Resurssien optimointi ja seurantaResurssien optimointi ja seuranta

### Sosiaalinen todistus

**Otsikko:** Mitä asiakkaamme sanovat

> "Spektri.Labs on mullistanut liiketoimintamme automatisoinnin. Aiemmin käytimme monia eri työkaluja, mutta nyt kaikki hoituu yhden alustan kautta. Agenttien luominen on niin intuitiivista, että kuka tahansa tiimissämme voi tehdä sen." — Maria Korhonen, Markkinointipäällikkö
> 

> "Yksinyrittäjänä minulla ei ole aikaa opetella monimutkaisia työkaluja. Spektri.Labs antaa minulle mahdollisuuden automatisoida rutiinitehtäviä ilman teknistä osaamista. Nyt minulla on aikaa keskittyä asiakkaisiini." — Juha Mäkinen, Konsultti
> 

> "Toimistomme on onnistunut skaalaamaan toimintaansa merkittävästi Spektri.Labsin avulla. Agentit hoitavat nyt suuren osan manuaalisista tehtävistä, mikä on vapauttanut tiimimme luovaan työhön." — Liisa Virtanen, Toimitusjohtaja
> 

### Hinnoitteluosio

**Otsikko:** Suunniteltu kasvamaan kanssasi

### StarterStarter

**0€ / kk0€ / kk**

- 3 agenttia3 agenttia
- 100 tehtävää / kk100 tehtävää / kk
- PerusintegraatiotPerusintegraatiot
- Yhteisön tukiYhteisön tuki

**CTA:** Aloita ilmaiseksi**CTA:** Aloita ilmaiseksi

### ProPro

**49€ / kk49€ / kk**

- 10 agenttia10 agenttia
- 1000 tehtävää / kk1000 tehtävää / kk
- Kaikki integraatiotKaikki integraatiot
- PrioriteettitukiPrioriteettituki

**CTA:** Aloita 14 päivän kokeilu**CTA:** Aloita 14 päivän kokeilu

### BusinessBusiness

**Ota yhteyttäOta yhteyttä**

- Rajaton määrä agenttejaRajaton määrä agentteja
- Räätälöity tehtävämääräRäätälöity tehtävämäärä
- API-pääsyAPI-pääsy
- Henkilökohtainen tukihenkilöHenkilökohtainen tukihenkilö

**CTA:** Ota yhteyttä**CTA:** Ota yhteyttä

### CTA-osio

**Otsikko:** Aloita automaatiomatkasi tänään

**Alaotsikko:** Liity yli 10 000 yrittäjän ja tiimin joukkoon, jotka ovat jo tehostaneet toimintaansa Spektri.Labsin avulla.

**CTA-painike:** Kokeile ilmaiseksi 14 päivää

## Tuotesivu

### Agenttirakentaja

**Otsikko:** Rakenna älykkäitä agentteja ilman koodausta

**Alaotsikko:** Spektri.Labsin intuitiivinen agenttirakentaja tekee monimutkaisesta automaatiosta yksinkertaista. Kerro luonnollisella kielellä mitä haluat saavuttaa, ja agenttirakentaja tekee loput.

### Luonnollisen kielen ohjelmointiLuonnollisen kielen ohjelmointi

Kerro agentille mitä haluat sen tekevän omalla kielelläsi. Ei koodia, ei monimutkaisia kaavioita – vain selkeä kuvaus tehtävästä.Kerro agentille mitä haluat sen tekevän omalla kielelläsi. Ei koodia, ei monimutkaisia kaavioita – vain selkeä kuvaus tehtävästä.

### Visuaalinen vahvistusVisuaalinen vahvistus

Näe reaaliaikaisesti miten agenttisi rakentuu kuvauksesi pohjalta. Tarkista ja muokkaa visuaalisesti ennen käyttöönottoa.Näe reaaliaikaisesti miten agenttisi rakentuu kuvauksesi pohjalta. Tarkista ja muokkaa visuaalisesti ennen käyttöönottoa.

### Älykäs oppiminenÄlykäs oppiminen

Agentit oppivat käytön myötä ja optimoivat toimintaansa automaattisesti. Mitä enemmän käytät, sitä älykkäämmiksi ne tulevat.Agentit oppivat käytön myötä ja optimoivat toimintaansa automaattisesti. Mitä enemmän käytät, sitä älykkäämmiksi ne tulevat.

### Agenttien persoonallisuudet

**Otsikko:** Jokainen agentti on ainutlaatuinen

**Alaotsikko:** Spektri.Labsin agentit eivät ole vain työkaluja – ne ovat persoonallisia assistentteja, jotka sopeutuvat työskentelytyyliisi ja tarpeisiisi.

### InnovaattoriInnovaattori

Luova ongelmanratkaisija, joka ehdottaa uusia tapoja tehostaa prosessejasi. Loistaa ideointivaiheessa ja ratkaisujen kehittämisessä.Luova ongelmanratkaisija, joka ehdottaa uusia tapoja tehostaa prosessejasi. Loistaa ideointivaiheessa ja ratkaisujen kehittämisessä.

### VerkostoijaVerkostoija

Kommunikaation mestari, joka yhdistää tietoa ja ihmisiä. Täydellinen asiakaspalveluun ja viestintään.Kommunikaation mestari, joka yhdistää tietoa ja ihmisiä. Täydellinen asiakaspalveluun ja viestintään.

### OpettajaOpettaja

Analyyttinen ja metodinen avustaja, joka auttaa oppimaan ja kehittämään taitoja. Ihanteellinen tiedon jäsentämiseen ja kouluttamiseen.Analyyttinen ja metodinen avustaja, joka auttaa oppimaan ja kehittämään taitoja. Ihanteellinen tiedon jäsentämiseen ja kouluttamiseen.

### KriitikkoKriitikko

Tarkka ja yksityiskohtainen laadunvalvoja, joka varmistaa kaiken toimivan täydellisesti. Loistaa tarkistusprosesseissa ja optimoinnissa.Tarkka ja yksityiskohtainen laadunvalvoja, joka varmistaa kaiken toimivan täydellisesti. Loistaa tarkistusprosesseissa ja optimoinnissa.

### Agenttifarmit ja orkestrointi

**Otsikko:** Rakenna älyverkostoja, jotka tekevät työt puolestasi

**Alaotsikko:** Spektri.Labs mahdollistaa kokonaisten agenttiekosysteemien luomisen, jotka toimivat saumattomasti yhteistyössä ratkaistakseen monimutkaisia tehtäviä.

### Tilallinen agenttiarkkitehtuuriTilallinen agenttiarkkitehtuuri

Agentit säilyttävät tilan ja kontekstin keskustelujen ja tehtävien välillä, mikä mahdollistaa monimutkaisemmat ja älykkäämmät automaatiot. Tämä on keskeinen elementti todella älykkäiden agenttifarmien rakentamisessa.Agentit säilyttävät tilan ja kontekstin keskustelujen ja tehtävien välillä, mikä mahdollistaa monimutkaisemmat ja älykkäämmät automaatiot. Tämä on keskeinen elementti todella älykkäiden agenttifarmien rakentamisessa.

### Agenttien neuroverkkoAgenttien neuroverkko

Agentit toimivat yhdessä kuin neuroverkko, jossa jokainen agentti erikoistuu tiettyyn tehtävään mutta jakaa tietoa muiden kanssa. Tämä mahdollistaa uskomattoman monimutkaiset työnkulut.Agentit toimivat yhdessä kuin neuroverkko, jossa jokainen agentti erikoistuu tiettyyn tehtävään mutta jakaa tietoa muiden kanssa. Tämä mahdollistaa uskomattoman monimutkaiset työnkulut.

### Meta-agentti orkestraattoriMeta-agentti orkestraattori

Keskitetty orkestraattori hallinnoi agenttifarmia, delegoiden tehtäviä, seuraten edistymistä ja optimoiden agenttien yhteistyötä dynaamisesti muuttuvien tarpeiden mukaan.Keskitetty orkestraattori hallinnoi agenttifarmia, delegoiden tehtäviä, seuraten edistymistä ja optimoiden agenttien yhteistyötä dynaamisesti muuttuvien tarpeiden mukaan.

### Integraatiot

**Otsikko:** Yhdistä kaikkiin työkaluihisi

**Alaotsikko:** Spektri.Labs integroituu saumattomasti yli 200 suositun palvelun kanssa, mikä mahdollistaa agenttien toiminnan kaikkialla missä työskentelet.

- Viestintä: Slack, Microsoft Teams, Discord, Gmail
- Projektinhallinta: Asana, Trello, Linear, Jira
- CRM: Salesforce, HubSpot, Pipedrive
- Markkinointi: Mailchimp, Facebook, Google Ads, Instagram
- Taloushallinto: Stripe, QuickBooks, Xero, Holvi
- Sisällöntuotanto: Wordpress, Webflow, Shopify

## Blogi

### Artikkeliotsikot ja tiivistelmät

- Tekoälyn demokratisointi: Miten Spektri.Labs tekee automaatiosta saavutettavaa kaikille
    
    Tekoäly on muuttamassa liiketoimintaa perustavanlaatuisesti, mutta sen hyödyt ovat olleet saavutettavissa lähinnä teknisesti edistyneille ja suuryrityksille. Tässä artikkelissa käsittelemme, miten Spektri.Labs pyrkii demokratisoimaan tekoälyn tekemällä automaatiosta helppoa ja intuitiivista kaikille - teknisestä taustasta riippumatta.
    
- 5 tapaa, joilla yksinyrittäjät voivat säästää aikaa automaation avulla
    
    Yksinyrittäjänä sinulla on rajallisesti aikaa ja resursseja. Tässä artikkelissa esittelemme 5 konkreettista tapaa, joilla voit hyödyntää Spektri.Labsin älykkäitä agentteja säästääksesi aikaa ja keskittyäksesi ydinliiketoimintaasi.
    
- Automaation etiikka: Miten varmistamme, että tekoäly hyödyttää kaikkia
    
    Automaation yleistyessä on tärkeää keskustella sen eettisistä vaikutuksista. Tässä artikkelissa käsittelemme Spektri.Labsin lähestymistapaa vastuulliseen tekoälyyn ja miten pyrimme varmistamaan, että automaatioteknologiat hyödyttävät laajasti yhteiskuntaa.
    
- Käyttäjätarina: Miten pieni markkinointitoimisto tehosti toimintaansa 300% Spektri.Labsin avulla
    
    Lue miten helsinkiläinen 5 hengen markkinointitoimisto onnistui kolminkertaistamaan tehokkuutensa ja kasvattamaan asiakaskuntaansa ottamalla käyttöön älykkäät automaatioagentit. Konkreettinen esimerkki automaation voimasta pienyrityksille.
    
- Agenttifarmit teollisuudessa: Tehokkuutta tuotantolaitoksiin
    
    Teollisuusyritykset ympäri maailman hyödyntävät älykkäitä agenttifarmeja tuotannon optimointiin, huoltotoimenpiteiden ennakointiin ja toimitusketjujen hallintaan. Artikkelissa esittelemme, miten Spektri.Labs auttaa teollisuusyrityksiä rakentamaan kattavia automaatioratkaisuja ilman massiivisia IT-investointeja.
    

## Yhteystiedot

**Otsikko:** Ota yhteyttä

**Alaotsikko:** Haluatko kuulla lisää siitä, miten Spektri.Labs voi auttaa sinua tehostamaan liiketoimintaasi? Ota yhteyttä, niin asiantuntijamme ovat valmiina auttamaan.

### Myynti ja tiedustelutMyynti ja tiedustelutMyynti ja tiedustelut

[myynti@spektrilabs.commyynti@spektrilabs.commyynti@spektrilabs.com](mailto:myynti@spektrilabs.com)

+358 40 123 4567+358 40 123 4567+358 40 123 4567

### Tekninen tukiTekninen tukiTekninen tuki

[tuki@spektrilabs.comtuki@spektrilabs.comtuki@spektrilabs.com](mailto:tuki@spektrilabs.com)

+358 40 765 4321+358 40 765 4321+358 40 765 4321

### ToimistoToimistoToimisto

Spektri.Labs 
Kustaankatu 8a A6 00500 Helsinki, Suomi
+358406675099

## Usein kysytyt kysymykset

- Mitä tarvitsen päästäkseni alkuun Spektri.Labsin kanssa?
    
    Aloittaminen on helppoa! Tarvitset vain internetyhteyden ja selaimen. Rekisteröidy ilmaiseksi tilille, ja pääset heti luomaan ensimmäisen agenttisi. Tarjoamme kattavat ohjeet ja tukimateriaalit, jotka auttavat sinut alkuun.Aloittaminen on helppoa! Tarvitset vain internetyhteyden ja selaimen. Rekisteröidy ilmaiseksi tilille, ja pääset heti luomaan ensimmäisen agenttisi. Tarjoamme kattavat ohjeet ja tukimateriaalit, jotka auttavat sinut alkuun.
    
- Onko Spektri.Labs turvallinen? Miten tietojani käsitellään?
    
    Tietoturva on meille ensiarvoisen tärkeää. Kaikki data on salattua sekä levossa että siirrossa. Noudatamme GDPR-säädöksiä ja käsittelemme tietojasi ainoastaan palvelun tarjoamiseen. Et koskaan menetä omistajuutta dataasi, ja voit pyytää sen poistamista koska tahansa.Tietoturva on meille ensiarvoisen tärkeää. Kaikki data on salattua sekä levossa että siirrossa. Noudatamme GDPR-säädöksiä ja käsittelemme tietojasi ainoastaan palvelun tarjoamiseen. Et koskaan menetä omistajuutta dataasi, ja voit pyytää sen poistamista koska tahansa.
    
- Voiko Spektri.Labsia käyttää millä tahansa kielellä?
    
    Kyllä! Spektri.Labs tukee yli 20 kieltä, mukaan lukien suomi, ruotsi, englanti ja venäjä. Voit kommunikoida agenttien kanssa omalla kielelläsi, ja ne ymmärtävät kontekstin kielestä riippumatta.Kyllä! Spektri.Labs tukee yli 20 kieltä, mukaan lukien suomi, ruotsi, englanti ja venäjä. Voit kommunikoida agenttien kanssa omalla kielelläsi, ja ne ymmärtävät kontekstin kielestä riippumatta.
    
- Miten Spektri.Labs eroaa muista automaatiotyökaluista?
    
    Spektri.Labs erottuu kolmella tavalla: 1) Äärimmäinen helppokäyttöisyys - ei vaadi teknistä osaamista, 2) Persoonalliset agentit - räätälöity juuri sinun tarpeisiisi, 3) Kokonaisvaltainen integraatio - toimii saumattomasti kaikkien työkalujesi kanssa. Tavoitteenamme on demokratisoida automaatio ja tehdä siitä saavutettavaa jokaiselle.Spektri.Labs erottuu kolmella tavalla: 1) Äärimmäinen helppokäyttöisyys - ei vaadi teknistä osaamista, 2) Persoonalliset agentit - räätälöity juuri sinun tarpeisiisi, 3) Kokonaisvaltainen integraatio - toimii saumattomasti kaikkien työkalujesi kanssa. Tavoitteenamme on demokratisoida automaatio ja tehdä siitä saavutettavaa jokaiselle.
    
- Voinko kokeilla Spektri.Labsia ennen ostopäätöstä?
    
    Ehdottomasti! Tarjoamme ilmaisen 14 päivän kokeilujakson, jonka aikana voit tutustua kaikkiin Pro-tason ominaisuuksiin. Lisäksi Starter-taso on aina ilmainen, joten voit jatkaa sen käyttöä ilman aikarajoitusta.Ehdottomasti! Tarjoamme ilmaisen 14 päivän kokeilujakson, jonka aikana voit tutustua kaikkiin Pro-tason ominaisuuksiin. Lisäksi Starter-taso on aina ilmainen, joten voit jatkaa sen käyttöä ilman aikarajoitusta.
    
- Mitä agenttifarmit ovat ja miten ne hyödyttävät organisaatiotani?
    
    Agenttifarmit ovat älykkäitä automaatiojärjestelmiä, joissa useat erikoistuneet tekoälyagentit toimivat yhdessä monimutkaisempien tehtävien suorittamiseksi. Ne mahdollistavat kokonaisten työnkulkujen ja prosessien automatisoinnin eri osastojen välillä. Agenttifarmien avulla organisaatiosi voi automatisoida enemmän, skaalata nopeammin ja saavuttaa merkittäviä kustannussäästöjä. Agentit voivat toimia itsenäisesti mutta myös kommunikoida keskenään, jakaa tietoa ja delegoida tehtäviä tehokkaasti.Agenttifarmit ovat älykkäitä automaatiojärjestelmiä, joissa useat erikoistuneet tekoälyagentit toimivat yhdessä monimutkaisempien tehtävien suorittamiseksi. Ne mahdollistavat kokonaisten työnkulkujen ja prosessien automatisoinnin eri osastojen välillä. Agenttifarmien avulla organisaatiosi voi automatisoida enemmän, skaalata nopeammin ja saavuttaa merkittäviä kustannussäästöjä. Agentit voivat toimia itsenäisesti mutta myös kommunikoida keskenään, jakaa tietoa ja delegoida tehtäviä tehokkaasti.

    # Spektri.Labs Visuaalinen Ohjeistus

# Spektri.Labs Visuaalinen Ohjeistus

<aside>
Tämä ohjeistus määrittelee Spektri.Labsin visuaalisen ilmeen kuvien, videoiden, kaavioiden, ikonien ja avatareiden osalta. Johdonmukainen premium-tason design vahvistaa brändiämme ja luo käyttäjille yhtenäisen, ammattimaisen ja sofistikoituneen kokemuksen.

</aside>

## Kuvat ja valokuvat

### Kuvien tyyli

- Käytä vain korkealaatuisia, ammattimaisia valokuvia
- Vältä geneerisiä kuvapankkikuvia - kuvien tulee olla räätälöityjä Spektri.Labsille
- Hyödynnä harkittua valaistusta ja rikasta syvyysvaikutelmaa
- Säilytä hillitty, elegantti värimaailma, joka täydentää brändipalettia

### Kuvien aiheet

- Esitä ammattimaisia henkilöitä luonnollisissa työympäristöissä
- Korosta aitoja vuorovaikutustilanteita teknologian kanssa
- Sisällytä kuvia, jotka havainnollistavat automaation tuomia hyötyjä
- Vältä kliseisiä, lavastettuja toimistotilanteita

### Tuotekuvat

- Käytä tyylikästä, tarkkaa valaistusta ammattimaisessa ympäristössä
- Käytä minimalistista taustaa, jossa tuote on keskipisteenä
- Tuo yksityiskohdat esiin tarkoilla rajauksilla
- Näytä tuote kontekstissa, joka viestii premium-laatua

## Videot ja animaatiot

### Videotuotannon laatu

- Tuota vain 4K-laatuisia, ammattimaisia videoita
- Hyödynnä harkittua valaistusta ja laadukasta äänituotantoa
- Käytä vakaata kameratyötä ammattimaisilla liikkeillä
- Sovella minimalistista, harkittua leikkaustyyliä

### Animaatiot

- Implementoi hienovaraisia fysiikkaan perustuvia animaatioita interaktioissa
- Käytä hillittyjä micro-animaatioita käyttäjän toimintojen vahvistamiseen
- Luo sulavia siirtymiä, jotka tuntuvat ammattimaisilta ja intuitiivisilta
- Sisällytä harkittuja dynaamisia elementtejä korostamaan käyttökokemuksen sulavuutta

### Videosisällöt

- Tuote-demot kuvataan harkituista kuvakulmista ammattimaisen selkeästi
- UI-toiminnallisuudet esitetään sujuvina ruudunkaappausvideoina
- Case study -videot kuvataan aidoissa työympäristöissä
- Erilaiset personoidut demot eri käyttäjäryhmille

## Kaaviot ja visualisoinnit

### Tiedon visualisointi

- Käytä shadcn/ui-komponentteja kuten Line, Bar ja Area Charts
- Sovella hillittyä, ammattimaista väriskaalaa kaavioihin
- Lisää syvyysvaikutelmaa hienovaraisilla varjoilla ja lasimaisilla efekteillä
- Sisällytä vuorovaikutteisia elementtejä dataan

### Kaavioiden selkeys

- Priorisoi luettavuus ja ymmärrettävyys kaavioissa
- Käytä johdonmukaista värikoodausta eri datatyypeille
- Sisällytä selkeät selitteet ja kontekstuaaliset ohjetekstit
- Varmista kaavioiden responsiivisuus eri näyttökokoihin

### Edistyneet visualisoinnit

- Rakenna sofistikoituja kaavioita vuorovaikutteisilla elementeillä
- Hyödynnä lämpökarttoja dynaamisella skaalauksella
- Sisällytä vertailuanalyysityökaluja päätöksenteon tueksi
- Tarjoa vienti- ja raportointitoimintoja

## Ikonit ja UI-elementit

### Ikonikirjasto

- Käytä räätälöityä shadcn/ui-ikonikirjastoa Spektri.Labsin brändille
- Varmista ikonien johdonmukaisuus, tunnistettavuus ja harmonia
- Toteuta hienovaraisia animaatioita ikoneissa interaktioiden yhteydessä
- Käytä tunnistettavia metaforia, jotka tukevat käyttäjän ymmärrystä

### UI-komponentit

Napit:

- Primary: Selkeä, kontrastinen väri, hillitty kohouma
- Secondary: Lasimainen efekti, hienovarainen reunahehku
- Tertiary: Minimalistinen, vain teksti, hover-alleviivaus
- Danger: Hillitty punasävy, varoituskuvake

### Korttielementit

- Lasimainen efekti: Hienostunut, monitasoinen efekti
- Kontekstista riippuvainen blur-taso (5px - 25px)
- Hienovarainen sisäinen hehku
- Harkitut reunaheijastukset

## Avataarit ja henkilöesitykset

### Agenttien visualisoinnit

- Luo jokaiselle agentille oma tunnistettava, ammattimainen visuaalinen ilme
- Käytä abstrakteja, tyyliteltyjä visuaalisia elementtejä, jotka kuvastavat agentin toimintaa
- Animoi visualisoinnit reagoimaan käyttäjän toimintoihin
- Sisällytä hienovaraisia värimuutoksia agentin tilan mukaan

### Käyttäjäavataarit

- Tarjoa laadukkaat, ammattimaiset oletusavataarit käyttäjille
- Mahdollista käyttäjien ladata oma korkealaatuinen avataarikuva
- Sisällytä automaattinen rajaus ja optimointi käyttäjien kuville
- Varmista avataarien yhtenäinen koko ja muoto koko järjestelmässä

### Tiimiesitykset

- Esitä tiimit yhtenäisellä, ammattimaisella visuaalisella tyylillä
- Käytä ympyrämuotoisia avataareja ryhmävisualisoinneissa
- Hyödynnä hienostuneita ryhmittelyvisualisointeja
- Luo visuaalinen indikaattori tiimin jäsenten rooleille ja aktiivisuudelle

## Väripaletti

Spektri.Labsin visuaalinen identiteetti perustuu tarkoin valittuun, hillittyyn väripalettiin, joka välittää ammattimaisuutta ja teknologista edistyksellisyyttä:

### Päävärit

Tumma indigo (#1E2A45)

Syvä antratsiitti (#2A2C35)

Harmaansininen (#3A4A5A)

### Aksenttivärit

Kypsä burgundi (#5A2340)

Syvä merensininen (#174A75)

Teräksenharmaa (#47525E)

### Neutraalit

Grafiitin musta (#212121)

Platinanharmaa (#E5E5E5)

Luonnonvalkoinen (#F7F7F7)

## Tekniset ohjeet

### shadcn/ui implementointi

- Käytä shadcn/ui-kirjaston räätälöityjä komponentteja kaikissa UI-elementeissä
- Hyödynnä Tailwind CSS:ää komponenttien tyylittelyssä
- Noudata 8px grid-järjestelmää kaikessa asettelussa
- Sovella golden ratio -suhdetta (1:1.618) elementtien hierarkiassa

### Tiedostomuodot ja optimointi

- Kuvat: Käytä WebP-formaattia optimaaliseen laatuun ja kokoon
- Ikonit: SVG-formaatti skaalautuvuuden takaamiseksi
- Videot: MP4 H.265 -koodekki tehokkuuden vuoksi
- Animaatiot: Framer Motion -kirjasto sulaviin siirtymiin

### Suorituskykyvaatimukset

- Implementoi laiska lataus kaikille kuville ja videoille
- Optimoi kuvat ja videot eri näyttökokoihin ja -tarkkuuksiin
- Varmista lyhyt latausaika (alle 3 sekuntia) kaikille mediaelementeille
- Hyödynnä selaimen välimuistia toistuvien elementtien nopeaan lataukseen
- Shadcn/UI kustomointi Spektri.Labsia varten
    
    ```jsx
    // tailwind.config.js
    const { fontFamily } = require("tailwindcss/defaultTheme")
    
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ["class"],
      content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          colors: {
            border: "var(--border)",
            input: "var(--input)",
            ring: "var(--ring)",
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: {
              DEFAULT: "#1E2A45", // Tumma indigo
              foreground: "var(--primary-foreground)",
            },
            secondary: {
              DEFAULT: "#3A4A5A", // Harmaansininen
              foreground: "var(--secondary-foreground)",
            },
            accent: {
              DEFAULT: "#5A2340", // Kypsä burgundi
              foreground: "var(--accent-foreground)",
            },
            destructive: {
              DEFAULT: "var(--destructive)",
              foreground: "var(--destructive-foreground)",
            },
            muted: {
              DEFAULT: "#47525E", // Teräksenharmaa
              foreground: "var(--muted-foreground)",
            },
            card: {
              DEFAULT: "var(--card)",
              foreground: "var(--card-foreground)",
            },
            deepblue: "#174A75", // Syvä merensininen
            graphite: "#212121", // Grafiitin musta
            platinum: "#E5E5E5", // Platinanharmaa
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
            spectral: ["Spectral Pro", "serif"],
            neutron: ["Neutron Sans", "sans-serif"],
          },
          boxShadow: {
            "ultra-glass": "0 8px 32px rgba(0, 0, 0, 0.1)",
            "multi-layer": "0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 24px rgba(0, 0, 0, 0.08), 0 24px 48px rgba(0, 0, 0, 0.1)",
          },
          animation: {
            "spring-bounce": "spring-bounce 0.5s ease-out forwards",
            "shimmer": "shimmer 2s linear infinite",
          },
          keyframes: {
            "spring-bounce": {
              "0%": { transform: "scale(0.95)" },
              "50%": { transform: "scale(1.02)" },
              "100%": { transform: "scale(1)" }
            },
            "shimmer": {
              "0%": { backgroundPosition: "0% 0%" },
              "100%": { backgroundPosition: "100% 100%" }
            }
          },
        },
      },
    }
    ```
    

## Esimerkit ja sovellukset

### Agentin rakentaminen

- Käytä hienostuneita, ammattimaisia kuvia visualisoimaan agentin toiminta-alueita
- Sisällytä hienovaraisia animaatioita vahvistamaan käyttäjän toimintoja
- Toteuta visuaalinen vahvistusketju agentin ominaisuuksille
- Hyödynnä graafisia elementtejä esittämään eri agenttiominaisuuksia

### Dashboard

- Visualisoi agentin suorituskyky selkeillä, ammattimaisilla kaavioilla
- Käytä hillittyä värikoodausta tehtävien tilan seurantaan
- Sisällytä aikasäästöä kuvaavia mittareita ja visualisointeja
- Tuo esiin käytön vaikutukset dynaamisilla, informatiivisilla kaavioilla

### Markkinointisivusto

- Käytä autenttisia valokuvia aidoista käyttäjistä ja käyttötilanteista
- Toteuta selkeitä, vakuuttavia tuotedemonstraatiovideoita
- Sisällytä asiakastarinoita eri toimialoilta ja yritysten kokoluokista
- Käytä animoituja ikoneita havainnollistamaan avainominaisuuksia

## Ihmiskeskeinen lähestymistapa

Kaikessa visuaalisessa ilmeessä on säilytettävä ihmiskeskeinen lähestymistapa, joka tekee teknologiasta saavutettavaa ja inhimillistä:

### Saavutettavuus

- Varmista WCAG AAA -tason kontrastisuhde kaikissa visuaalisissa elementeissä
- Suunnittele UI-elementit ottaen huomioon erilaiset käyttäjät ja tarpeet
- Tarjoa vaihtoehtoisia esitystapoja sisällölle (teksti, kuva, video)
- Testaa käyttöliittymä eri apuvälineillä (ruudunlukijat, näppäimistönavigointi)

### Inhimillisyys

- Käytä valokuvia, joissa näkyy aito monimuotoisuus ja luonnolliset ilmeet
- Suosi hillityn ja ammattimaisen tunnelman luovia visuaalisia elementtejä
- Implementoi intuitiivisia interaktioita, jotka tuntuvat luonnollisilta
- Sisällytä hienovaraisia, toimintaa tukevia elementtejä käyttöliittymään

### Läpinäkyvyys

- Visualisoi selkeästi, miten agentti tekee päätöksiä
- Tarjoa helposti ymmärrettäviä visuaalisia selityksiä monimutkaisille prosesseille
- Käytä ikoneita ja infografiikkaa teknisen jargonin sijaan
- Suunnittele käyttöliittymä, joka rakentaa luottamusta läpinäkyvyydellä

<aside>
Muista: Jokainen visuaalinen elementti on osa laajempaa käyttäjäkokemusta. Huolellisesti suunnitellut kuvat, videot, kaaviot, ikonit ja visualisoinnit eivät ole vain koristeita – ne ovat keskeisiä kommunikaatiovälineitä, jotka tekevät Spektri.Labsin visiosta ja arvolupauksesta konkreettisen ja saavutettavan ammattilaisille.

</aside>

juu