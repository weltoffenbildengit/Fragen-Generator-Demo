const chapters = {
  A: {
    title: "A Grundlagen Beschaffung",
    topics: ["Beschaffungsmarktforschung", "Global/Local Sourcing", "Single/Multiple Sourcing", "Sortimentsgestaltung", "Bedarfsermittlung", "Lieferantenauswahl", "Vertragswesen und Incoterms"],
    incidents: [
      "Ein langjähriger Lieferant kündigt kurzfristig an, dass eine stark nachgefragte Warengruppe erst in drei Wochen geliefert werden kann.",
      "Eine neue Lieferantin bietet deutlich günstigere Konditionen, liefert aber aus einem politisch instabilen Beschaffungsmarkt.",
      "Nach einer Sortimentsanpassung bleiben mehrere neue Artikel liegen, während Kernartikel ausverkauft sind."
    ]
  },
  B: {
    title: "B Grundlagen Logistik",
    topics: ["6 R der Logistik", "Logistikstrategie", "Logistiksysteme", "Supply Chain Management", "Outsourcing", "ICT-Systeme", "Logistikkosten"],
    incidents: [
      "Die Geschäftsleitung will Lieferzeiten verkürzen, ohne die Logistikkosten sichtbar zu erhöhen.",
      "Ein externer Logistikdienstleister schlägt ein Full-Service-Modell vor, das interne Abläufe stark verändern würde.",
      "Die Warenwirtschaft zeigt wiederholt falsche Bestände, was Bestellungen und Beratung erschwert."
    ]
  },
  C: {
    title: "C Instore-Logistik und Lager",
    topics: ["Produktkenntnisse", "Warenannahme", "Lagerziele", "Lagerfunktionen", "Lagerstrategie", "Lagerarten", "Einlagerung/Auslagerung", "Lagerkosten"],
    incidents: [
      "Bei der Warenannahme werden beschädigte Artikel entdeckt, die Lieferung wird aber dringend für eine Aktion benötigt.",
      "Im Lager ist Kapital gebunden, gleichzeitig kommt es bei Aktionsartikeln regelmässig zu Fehlmengen.",
      "Mitarbeitende lagern empfindliche Ware unterschiedlich, wodurch Qualitätsmängel und Suchzeiten entstehen."
    ]
  },
  D: {
    title: "D Distribution",
    topics: ["Distributionsstrategie", "direkter/indirekter Absatz", "physische Distribution", "Verpackung", "Belieferungsmodelle", "Serviceniveau", "Auftragsabwicklung und EDI"],
    incidents: [
      "Der Betrieb möchte Online-Bestellungen einführen, ist aber unsicher, wie Lieferung, Abholung und Retouren organisiert werden sollen.",
      "Kundinnen reklamieren beschädigte Ware nach Hauslieferungen.",
      "Ein Liefermodell mit höherem Serviceniveau überzeugt die Kundschaft, belastet aber Marge und Personalplanung."
    ]
  },
  E: {
    title: "E Nachhaltigkeit",
    topics: ["nachhaltig beschaffen", "nachhaltig lagern", "Entsorgung", "Recycling", "Entsorgungsanalyse", "Entsorgungskonzept", "rechtliche Rahmenbedingungen"],
    incidents: [
      "Eine Kundin fragt kritisch nach Herkunft, Transportwegen und Entsorgung der Verpackungen.",
      "Im Betrieb fallen grosse Mengen Verpackungsmaterial an, Zuständigkeiten und Sammelorte sind unklar.",
      "Die Geschäftsleitung will nachhaltiger beschaffen, befürchtet aber höhere Einkaufspreise und weniger Lieferflexibilität."
    ]
  },
  F: {
    title: "F Sicherheit und Gesundheitsschutz",
    topics: ["Sicherheitsgrundlagen", "ausserbetriebliche Akteure", "innerbetriebliche Zuständigkeiten", "Personenschutz", "Diebstahlschutz", "Datensicherheit"],
    incidents: [
      "Nach einem Beinaheunfall im Lager ist unklar, wer welche Sicherheitsmassnahmen veranlassen und kontrollieren muss.",
      "Die Geschäftsleitung will die Diebstahlprävention verbessern, ohne Kundinnen und Kunden unter Generalverdacht zu stellen.",
      "Mitarbeitende nutzen Bestands- und Kundendaten uneinheitlich, wodurch Datenschutz- und Datensicherheitsrisiken entstehen."
    ]
  },
  G: {
    title: "G Qualität",
    topics: ["Qualitätsgrundlagen", "Qualitätsmanagement", "Optimierungspotenziale in der Instore-Logistik", "Optimierungspotenziale im Lager", "Prozessqualität", "Reklamationsursachen"],
    incidents: [
      "Reklamationen häufen sich, weil Ware falsch gelagert, zu spät bereitgestellt oder beschädigt übergeben wird.",
      "Die Geschäftsleitung verlangt ein einfaches Qualitätsmanagement für Warenannahme, Lagerung und Auslieferung.",
      "Im Team gibt es unterschiedliche Standards, wie Mängel erfasst, gemeldet und nachhaltig behoben werden."
    ]
  }
};

const ciChapterKeys = ["A", "B", "C", "D", "E"];

const branches = {
  "Weinhandlung": ["italienischer Rotwein", "Schweizer Bio-Wein", "Schaumwein", "Weingläser", "Korkenzieher"],
  "Lebensmittelgeschäft": ["Frischprodukte", "Tiefkühlartikel", "regionale Spezialitäten", "Aktionsware", "Getränke"],
  "Sportfachhandel": ["Laufschuhe", "Skibekleidung", "Fitnessgeräte", "Teamsportartikel", "Outdoor-Zubehör"],
  "Elektronikfachmarkt": ["Smartphones", "Kopfhörer", "Haushaltsgeräte", "Gaming-Zubehör", "Ersatzteile"],
  "Buchhandlung": ["Neuerscheinungen", "Schulbücher", "Geschenkartikel", "Online-Bestellungen", "Retouren"],
  "Drogerie": ["Kosmetik", "Nahrungsergänzung", "Reinigungsmittel", "Saisonartikel", "Naturheilmittel"]
};

const ciChapter = document.querySelector("#ciChapter");
const plaChapter = document.querySelector("#plaChapter");
const branchSelect = document.querySelector("#branch");
const generateBtn = document.querySelector("#generateBtn");
const ciQuestion = document.querySelector("#ciQuestion");
const plaQuestion = document.querySelector("#plaQuestion");
const ciSolution = document.querySelector("#ciSolution");
const plaSolution = document.querySelector("#plaSolution");
const ciAnswer = document.querySelector("#ciAnswer");
const plaAnswer = document.querySelector("#plaAnswer");
const ciSolutionBtn = document.querySelector("#ciSolutionBtn");
const plaSolutionBtn = document.querySelector("#plaSolutionBtn");
const ciMeta = document.querySelector("#ciMeta");
const plaMeta = document.querySelector("#plaMeta");

let currentCi = "";
let currentPla = "";

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function chapterOptions() {
  Object.entries(chapters).forEach(([key, chapter]) => {
    const option = new Option(chapter.title, key);
    if (ciChapterKeys.includes(key)) {
      ciChapter.add(option.cloneNode(true));
    }
    plaChapter.add(option);
  });
}

function renderCi(chapterKey, branch) {
  const chapter = chapters[chapterKey];
  const branchProducts = branches[branch] || branches["Weinhandlung"];
  const product = pick(branchProducts);
  const incident = pick(chapter.incidents);
  const topic = pick(chapter.topics);
  currentCi = `
    <h2>Critical Incident: ${topic}</h2>
    <p>Sie sind Bereichsleiter:in in einem ${branch}. Im Fokus steht ${product}. ${incident}</p>
    <p>Die Situation ist dringend, Kundenzufriedenheit, Kosten und Warenverfügbarkeit stehen gleichzeitig unter Druck.</p>
    <h3>Auftrag</h3>
    <ul>
      <li>Beschreiben Sie Ihre ersten drei konkreten Massnahmen in der richtigen Reihenfolge.</li>
      <li>Begründen Sie jede Massnahme mit Bezug auf ${chapter.title}.</li>
      <li>Nennen Sie, wie Sie die Wirkung Ihrer Massnahmen kontrollieren.</li>
    </ul>
  `;
  ciQuestion.innerHTML = currentCi;
  ciMeta.textContent = `${chapter.title} · 3 Punkte`;
  return { chapter, product, incident, topic, branch };
}

function renderPla(chapterKey, branch) {
  const chapter = chapters[chapterKey];
  const otherKeys = Object.keys(chapters).filter((key) => key !== chapterKey);
  const firstCross = pick(otherKeys);
  const secondCross = pick(otherKeys.filter((key) => key !== firstCross));
  const cross = [firstCross, secondCross];
  const crossTitles = [...new Set(cross)].map((key) => chapters[key].title).join(" und ");
  const branchProducts = branches[branch] || branches["Weinhandlung"];
  const product = pick(branchProducts);
  const topic = pick(chapter.topics);
  currentPla = `
    <h2>Planungsaufgabe: ${topic}</h2>
    <p>Ein ${branch} plant für die nächsten acht Wochen eine Veränderung rund um ${product}. Das Schwerpunktthema liegt in ${chapter.title}; die Aufgabenbearbeitung muss aber auch ${crossTitles} berücksichtigen.</p>
    <h3>Ausgangslage</h3>
    <p>Die Nachfrage schwankt, die Geschäftsleitung erwartet eine bessere Warenverfügbarkeit, tiefere Prozesskosten und nachvollziehbare Entscheide gegenüber Mitarbeitenden und Lieferanten.</p>
    <h3>Auftrag</h3>
    <ul>
      <li>Analysieren Sie die Ausgangslage mit mindestens vier relevanten Einflussfaktoren.</li>
      <li>Entwickeln Sie einen realistischen Massnahmenplan mit Verantwortlichkeiten, Terminlogik und Kontrollen.</li>
      <li>Zeigen Sie Zielkonflikte auf und begründen Sie Ihre Prioritäten.</li>
      <li>Definieren Sie drei messbare Kriterien, mit denen der Erfolg beurteilt wird.</li>
      <li>Bereiten Sie die Ergebnisse so auf, dass sie in einer kurzen Präsentation klar, priorisiert und nachvollziehbar vorgestellt werden können.</li>
    </ul>
  `;
  plaQuestion.innerHTML = currentPla;
  plaMeta.textContent = `${chapter.title} · vernetzt · 18 Punkte`;
  return { chapter, product, topic, branch, crossTitles };
}

function ciSpecificActions(context) {
  const incident = context.incident;
  const product = context.product;
  const branch = context.branch;
  const topic = context.topic;

  if (incident.includes("erst in drei Wochen geliefert")) {
    return [
      `Bestand von ${product}, offene Kundenreservationen und geplante Aktionen sofort prüfen; Verkaufsteam informieren, welche Mengen verbindlich verfügbar sind.`,
      `Mit dem bestehenden Lieferanten Teillieferung, Ersatzartikel oder früheren Liefertermin verhandeln und parallel einen Alternativlieferanten nach Qualität, Preis, Lieferfrist und Zuverlässigkeit beurteilen.`,
      `Kundschaft aktiv steuern: gleichwertige Ersatzprodukte empfehlen, Liefertermine transparent nennen und im Warenwirtschaftssystem einen temporären Bestell- oder Mindestbestand hinterlegen.`
    ];
  }

  if (incident.includes("politisch instabilen Beschaffungsmarkt")) {
    return [
      `Angebot nicht nur über den Preis beurteilen, sondern Beschaffungsrisiken, Transportdauer, Währung, Qualitätssicherung und Lieferausfallrisiko für ${product} erfassen.`,
      `Für den ${branch} eine kleine Testbestellung oder Zweitlieferantenlösung prüfen, statt sofort vollständig auf die neue Lieferantin umzustellen.`,
      `Entscheid dokumentieren: Kostenvorteil gegen Versorgungssicherheit, Image, Nachhaltigkeit und Abhängigkeit abwägen; bei Annahme klare Qualitäts-, Liefer- und Zahlungsbedingungen vereinbaren.`
    ];
  }

  if (incident.includes("Sortimentsanpassung")) {
    return [
      `Abverkauf, Lagerbestand und Deckungsbeitrag der neuen Artikel mit den ausverkauften Kernartikeln vergleichen.`,
      `Kurzfristig Kernartikel nachbeschaffen und die schwachen Artikel mit Platzierung, Beratung, Aktion oder Rücknahme durch den Lieferanten prüfen.`,
      `Sortimentsentscheid korrigieren: Kundennachfrage, Saison, Marge und Lagerumschlag auswerten und künftige Neuheiten zuerst in kleineren Mengen testen.`
    ];
  }

  if (incident.includes("Lieferzeiten verkürzen")) {
    return [
      `Ist-Prozess vom Bestelleingang bis zur Übergabe von ${product} aufnehmen und Engpässe bei Lager, Kommissionierung, Transport oder Information sichtbar machen.`,
      `Massnahmen nach Wirkung und Kosten priorisieren, zum Beispiel klarere Bestellzeitpunkte, bessere Bestandsdaten, gebündelte Auslieferung oder angepasste Dienstleisterleistung.`,
      `Serviceziel festlegen und messen: Lieferzeit, Liefertermintreue, Fehlmengen und Reklamationen kontrollieren, damit tiefere Lieferzeit nicht unbemerkt höhere Kosten auslöst.`
    ];
  }

  if (incident.includes("Full-Service-Modell")) {
    return [
      `Leistungsumfang des Logistikdienstleisters konkret klären: Lagerung, Kommissionierung, Transport, Retouren, IT-Anbindung und Verantwortlichkeiten.`,
      `Make-or-buy-Entscheid für den ${branch} rechnen: eigene Kosten, erwartete Einsparung, Qualitätsgewinn, Abhängigkeit und Verlust von internem Know-how vergleichen.`,
      `Bei positiver Beurteilung Pilotphase mit klaren Service Levels, Datenschutzregeln, Reklamationsprozess und Ausstiegsklausel vereinbaren.`
    ];
  }

  if (incident.includes("falsche Bestände")) {
    return [
      `Betroffene Artikel wie ${product} physisch zählen und mit Warenwirtschaft, offenen Bestellungen, Reservationen und Verkäufen abgleichen.`,
      `Ursache eingrenzen: Warenannahme, Ausbuchung, Retouren, Bruch, Diebstahl oder verspätete Systembuchung prüfen.`,
      `Verbindlichen Prozess festlegen: Scanpflicht, Vier-Augen-Kontrolle bei Korrekturen, regelmässige Stichprobeninventur und kurze Schulung des Teams.`
    ];
  }

  if (incident.includes("Warenannahme") && incident.includes("beschädigte")) {
    return [
      `Lieferung sofort mit Bestellschein und Lieferschein prüfen, Schäden fotografieren und mangelhafte ${product} getrennt aufbewahren.`,
      `Lieferant noch am gleichen Tag mit Mängelrüge kontaktieren und Ersatzlieferung, Preisnachlass oder Teillieferung für die Aktion verlangen.`,
      `Verkauf und Aktionsplanung informieren: verfügbare Menge anpassen, Ersatzartikel vorbereiten und im System nur einwandfreie Ware freigeben.`
    ];
  }

  if (incident.includes("Kapital gebunden")) {
    return [
      `Bestände von ${product}, Lagerumschlag, Fehlmengen und Aktionsverkäufe auswerten, statt pauschal mehr Ware einzulagern.`,
      `Für Aktionsartikel Mindestbestand, Meldebestand oder Vorbestelllogik definieren und langsamdrehende Artikel gezielt reduzieren.`,
      `Zielkonflikt offen führen: Verfügbarkeit erhöhen, aber Lagerkosten, Verderb, Schwund und Kapitalbindung mit Kennzahlen kontrollieren.`
    ];
  }

  if (incident.includes("empfindliche Ware")) {
    return [
      `Für ${product} verbindliche Lagerbedingungen festlegen: Temperatur, Feuchtigkeit, Stapelung, Schutz vor Licht, Bruch oder Verunreinigung.`,
      `Lagerplätze sichtbar kennzeichnen und Mitarbeitende kurz instruieren, damit Warenannahme, Einlagerung und Auslagerung gleich ablaufen.`,
      `Qualitätsmängel und Suchzeiten messen; bei Abweichungen Lagerordnung, Verantwortlichkeiten und Kontrollrhythmus nachschärfen.`
    ];
  }

  if (incident.includes("Online-Bestellungen")) {
    return [
      `Kundenprozess festlegen: Bestellung, Zahlung, Kommissionierung, Abholung, Lieferung und Retouren für ${product} sauber trennen.`,
      `Belieferungsmodell wählen: Click & Collect, Hauslieferdienst oder Versand nach Kosten, Serviceniveau, Verpackungsanforderung und Personalaufwand beurteilen.`,
      `Pilot starten und kontrollieren: Lieferzeit, Fehlerquote, beschädigte Sendungen, Retouren und Kundenzufriedenheit auswerten.`
    ];
  }

  if (incident.includes("beschädigte Ware nach Hauslieferungen")) {
    return [
      `Reklamationen nach Artikel, Verpackung, Transportweg und Mitarbeitenden erfassen; beschädigte ${product} dokumentieren.`,
      `Verpackung und Transportprozess anpassen, zum Beispiel stabilere Transportverpackung, bessere Ladungssicherung oder klare Übergabekontrolle.`,
      `Kundschaft kulant entschädigen und intern messen, ob Schadenquote und Reklamationskosten nach der Änderung sinken.`
    ];
  }

  if (incident.includes("höherem Serviceniveau")) {
    return [
      `Zusatzservice konkret beziffern: mehr Lieferfenster, schnellere Zustellung, Beratung, Retouren oder Verfügbarkeit von ${product}.`,
      `Kostenfolge prüfen: Personal, Transport, Verpackung, Fehlfahrten und Marge dem erwarteten Kundennutzen gegenüberstellen.`,
      `Service bewusst begrenzen oder bepreisen, zum Beispiel Mindestbestellwert, Lieferzonen, Premiumservice oder klare Bestellfristen.`
    ];
  }

  if (incident.includes("Herkunft")) {
    return [
      `Für ${product} Herkunft, Lieferweg, Verpackung und Entsorgung faktenbasiert klären, bevor gegenüber der Kundin Versprechen gemacht werden.`,
      `Nachhaltige Alternativen anbieten und transparent erklären, wo der ${branch} bereits gut ist und wo Verbesserungen geplant sind.`,
      `Erkenntnisse ins Sortiment und in die Beschaffung zurückführen: regionale Lieferanten, Mehrweg-/Recyclinglösung oder Entsorgungskonzept prüfen.`
    ];
  }

  if (incident.includes("Verpackungsmaterial")) {
    return [
      `Anfallendes Verpackungsmaterial nach Art, Menge, Ort und Verantwortlichkeit aufnehmen.`,
      `Sammelstellen, Beschriftung, Entsorgungsrhythmus und Zuständigkeiten für den ${branch} verbindlich festlegen.`,
      `Kosten und Wirkung kontrollieren: weniger Restabfall, saubere Trennung, tiefere Entsorgungskosten und klare Mitarbeitendeninstruktion.`
    ];
  }

  if (incident.includes("nachhaltiger beschaffen")) {
    return [
      `Für ${product} Kriterien definieren: Herkunft, Transportweg, Lieferzuverlässigkeit, Preis, Qualität, Zertifikate und Verpackung.`,
      `Lieferanten vergleichen und Zielkonflikt offen darstellen: nachhaltigere Beschaffung kann teurer sein, aber Image, Kundennutzen und Risiko verbessern.`,
      `Schrittweise umsetzen: Pilotartikel wählen, Mehrkosten beobachten, Kundschaft informieren und Lieferfähigkeit regelmässig überprüfen.`
    ];
  }

  return [
    `Konkrete Lage zu ${product} im ${branch} klären: Fakten, Betroffene, Dringlichkeit und Risiken erfassen.`,
    `Massnahmen passend zu ${topic} auswählen und begründen, statt nur allgemeine Theorie aufzuzählen.`,
    `Umsetzung mit Verantwortlichkeit, Termin, Teamkommunikation und messbarer Kontrolle abschliessen.`
  ];
}

function ciControlForAction(action, context) {
  if (action.includes("Bestand") || action.includes("physisch zählen") || action.includes("Bestände")) {
    return "Kontrolle über aktualisierten Lagerbestand, offene Bestellungen, Fehlmengenquote und Abgleich im Warenwirtschaftssystem.";
  }

  if (action.includes("Lieferant") || action.includes("Teillieferung") || action.includes("Alternativlieferant") || action.includes("Lieferanten vergleichen")) {
    return "Kontrolle über bestätigten Liefertermin, Liefermenge, Lieferqualität und dokumentierte Rückmeldung des Lieferanten.";
  }

  if (action.includes("Kundschaft") || action.includes("Kundin") || action.includes("Kundenprozess") || action.includes("Service")) {
    return "Kontrolle über Reklamationen, Rückmeldungen der Kundschaft, eingehaltene Zusagen und Verkaufserfolg der angebotenen Alternative.";
  }

  if (action.includes("Verkauf") || action.includes("Team") || action.includes("Mitarbeitende") || action.includes("instruieren")) {
    return "Kontrolle über kurze Teamrückmeldung, Stichproben im Ablauf und weniger Rückfragen oder Fehler in der Umsetzung.";
  }

  if (action.includes("Mängelrüge") || action.includes("Schäden") || action.includes("beschädigte")) {
    return "Kontrolle über Ersatzlieferung oder Gutschrift, dokumentierte Schadenfälle und sinkende Reklamations- oder Bruchquote.";
  }

  if (action.includes("Verpackung") || action.includes("Transportprozess") || action.includes("Belieferungsmodell")) {
    return "Kontrolle über Liefertermintreue, Schadenquote, Retouren, Zustellkosten und Kundenzufriedenheit nach der Anpassung.";
  }

  if (action.includes("Entsorgung") || action.includes("Verpackungsmaterial") || action.includes("Sammelstellen")) {
    return "Kontrolle über korrekt getrennte Mengen, weniger Restabfall, Entsorgungskosten und Einhaltung der festgelegten Zuständigkeiten.";
  }

  if (action.includes("Sortiment") || action.includes("Abverkauf") || action.includes("Kernartikel")) {
    return "Kontrolle über Abverkaufszahlen, Lagerumschlag, Deckungsbeitrag, Fehlmengen und Kundennachfrage nach der Sortimentskorrektur.";
  }

  if (action.includes("Prozess") || action.includes("Pilot") || action.includes("Service Levels")) {
    return "Kontrolle über vorher definierte Kennzahlen wie Durchlaufzeit, Fehlerquote, Kosten, Reklamationen und Termintreue.";
  }

  return `Kontrolle über eine messbare Kennzahl passend zu ${context.topic}, zum Beispiel Fehlerquote, Kosten, Termineinhaltung oder Kundenzufriedenheit.`;
}

function ciReasonForAction(action, context) {
  const reasonPart = action.includes(":") ? action.split(":").slice(1).join(":").trim() : action;
  return reasonPart.replace(/\.$/, ".");
}

function ciActionRows(actions, context) {
  return actions.map((action, index) => `
    <li>
      <strong>${index + 1}. Massnahme:</strong> ${action}<br>
      <strong>Begründung:</strong> ${ciReasonForAction(action, context)}<br>
      <strong>Kontrolle der Wirkung:</strong> ${ciControlForAction(action, context)}
    </li>
  `).join("");
}

function ciSolutionHtml(context) {
  const actions = ciSpecificActions(context);
  return `
    <h2>Musterlösung</h2>
    <div class="criterion"><strong>Massstab:</strong> Erwartet wird ein situationsgerechtes, priorisiertes Vorgehen zur konkreten Situation: ${context.incident} Der Bezug zu ${context.product}, ${context.branch} und ${context.chapter.title} muss erkennbar sein.</div>
    <h3>Mögliche Lösung</h3>
    <ul>
      ${ciActionRows(actions, context)}
    </ul>
    <h3>Woran eine gute Antwort erkennbar ist</h3>
    <ul>
      <li>Sie nennt konkrete nächste Schritte, die in dieser Situation sofort umsetzbar sind.</li>
      <li>Sie verwendet passende Fachbegriffe aus dem Schwerpunkt ${context.topic}.</li>
      <li>Sie zeigt, wie Kundschaft, Team, Lieferanten oder Systeme informiert und kontrolliert werden.</li>
    </ul>
    <h3>Beurteilungskriterien · 3 Punkte</h3>
    <ul>
      <li>3 Punkte: zentrale Punkte einer idealen Vorgehensweise, rollengerecht und praxisnah, sinnvolle Reihenfolge, nachvollziehbares Vorgehen.</li>
      <li>2 Punkte: drei der vier Kriterien erfüllt.</li>
      <li>1 Punkt: zwei der vier Kriterien erfüllt.</li>
      <li>0 Punkte: eines oder keines der Kriterien erfüllt.</li>
    </ul>
  `;
}

function plaSpecificPlan(context) {
  const key = context.chapter.title.slice(0, 1);
  const product = context.product;
  const branch = context.branch;
  const topic = context.topic;

  const base = {
    analysis: [
      `Nachfrageentwicklung für ${product} der letzten Wochen, saisonale Schwankungen und geplante Aktionen im ${branch} auswerten.`,
      `Aktuelle Bestände, Lieferzeiten, Fehlmengen, Reklamationen und Prozesskosten erfassen.`,
      `Schnittstellen zu ${context.crossTitles} prüfen, damit die Planung nicht nur im Schwerpunktkapitel bleibt.`
    ],
    goals: [
      `Verfügbarkeit von ${product} erhöhen, ohne unnötig Kapital im Lager zu binden.`,
      "Abläufe für Team, Lieferanten und Kundschaft nachvollziehbar machen.",
      "Nach acht Wochen mit klaren Kennzahlen entscheiden, ob die Lösung beibehalten, angepasst oder beendet wird."
    ],
    measures: [
      `Woche 1-2: Daten zu Absatz, Bestand, Lieferzeit und Reklamationen sammeln; Verantwortlichkeit bei der Bereichsleitung festlegen.`,
      `Woche 3-5: Massnahmen im kleinen Umfang testen und Team sowie betroffene Lieferanten informieren.`,
      `Woche 6-8: Ergebnisse messen, Abweichungen korrigieren und Entscheid für den Regelbetrieb vorbereiten.`
    ],
    conflicts: [
      "Hohe Warenverfügbarkeit verbessert den Service, erhöht aber Lagerkosten und Kapitalbindung.",
      "Schnellere Prozesse sind attraktiv, können aber Personal, Qualität oder Nachhaltigkeit belasten."
    ],
    controls: [
      "Fehlmengenquote",
      "Lagerumschlag",
      "Reklamationsquote"
    ]
  };

  const byChapter = {
    A: {
      analysis: [
        `Lieferanten für ${product} nach Preis, Qualität, Lieferfrist, Mindestmenge, Zahlungsbedingungen und Abhängigkeit vergleichen.`,
        `Prüfen, ob Local Sourcing, Global Sourcing, Single Sourcing oder Multiple Sourcing zum ${branch} passt.`,
        "Risiken wie Lieferausfall, Währung, Transport, Nachhaltigkeit und Imagewirkung erfassen."
      ],
      goals: [
        `Versorgung von ${product} für acht Wochen sichern.`,
        "Beschaffungskosten und Lieferantenabhängigkeit begrenzen.",
        "Qualität und Lieferflexibilität vertraglich oder organisatorisch absichern."
      ],
      measures: [
        "Woche 1: Bedarf und Meldebestand berechnen; aktuelle Lieferantenleistung auswerten.",
        "Woche 2-3: mindestens zwei Lieferantenofferten vergleichen und Lieferbedingungen klären.",
        "Woche 4-8: Testbestellung oder Zweitlieferantenlösung umsetzen; Bestellmengen und Liefertermine wöchentlich kontrollieren."
      ],
      conflicts: [
        "Tiefer Einkaufspreis kann höhere Transport-, Qualitäts- oder Ausfallrisiken verursachen.",
        "Single Sourcing erleichtert Zusammenarbeit, erhöht aber Abhängigkeit."
      ],
      controls: ["Liefertermintreue", "Fehlmengen bei " + product, "Einkaufspreis plus Beschaffungskosten"]
    },
    B: {
      analysis: [
        `Waren-, Informations- und Geldfluss für ${product} vom Lieferanten bis zur Kundschaft sichtbar machen.`,
        "Prüfen, wo Zeitverluste, Doppelspurigkeiten, Systemfehler oder externe Dienstleisterkosten entstehen.",
        "ICT-Unterstützung wie Warenwirtschaft, EDI, Bestandsdaten oder Tracking beurteilen."
      ],
      goals: [
        "Durchlaufzeit senken und Datenqualität erhöhen.",
        `Die 6 R der Logistik für ${product} besser erfüllen.`,
        "Kosten, Qualität und Leistung bewusst ausbalancieren."
      ],
      measures: [
        "Woche 1: Prozesskarte und Kennzahlen aufnehmen.",
        "Woche 2-4: Bestell-, Lager- oder Transportprozess standardisieren; Systembuchungen kontrollieren.",
        "Woche 5-8: Dienstleisterleistung oder interne Abläufe anhand von Service Levels prüfen."
      ],
      conflicts: [
        "Kürzere Lieferzeit kann höhere Transport- oder Personalkosten auslösen.",
        "Outsourcing bringt Know-how und Effizienz, schafft aber Abhängigkeit."
      ],
      controls: ["Durchlaufzeit", "Datenfehler im Warenwirtschaftssystem", "Logistikkosten pro Auftrag"]
    },
    C: {
      analysis: [
        `Lagerfähigkeit von ${product}, Lagerort, Zugriffshäufigkeit, Bestand und Schwund prüfen.`,
        "Warenannahme, Einlagerung, Kommissionierung und Auslagerung beobachten.",
        "Lagerkosten, Kapitalbindung, Suchzeiten und Qualitätsmängel erfassen."
      ],
      goals: [
        `Bestand von ${product} passend zur Nachfrage steuern.`,
        "Suchzeiten und Fehlmengen reduzieren.",
        "Qualität der Ware bei Lagerung und Übergabe sichern."
      ],
      measures: [
        "Woche 1: Lagerbestand und Lagerplätze bereinigen.",
        "Woche 2-4: Meldebestand, Mindestbestand oder Lagerplatzkennzeichnung einführen.",
        "Woche 5-8: Stichproben bei Warenannahme, Lagerung und Auslagerung durchführen."
      ],
      conflicts: [
        "Mehr Vorrat erhöht Verfügbarkeit, bindet aber Kapital und Lagerfläche.",
        "Strengere Kontrollen kosten Zeit, senken aber Fehler und Reklamationen."
      ],
      controls: ["Fehlmengenquote", "Suchzeit im Lager", "Schwund oder Qualitätsmängel"]
    },
    D: {
      analysis: [
        `Kundenwege für ${product}: Abholung, Hauslieferung, Versand oder Click & Collect analysieren.`,
        "Verpackung, Transport, Lieferzeit, Retouren und Reklamationen erfassen.",
        "Kosten je Belieferungsmodell und erwartetes Serviceniveau vergleichen."
      ],
      goals: [
        "Passendes Serviceniveau definieren.",
        "Transportschäden und Lieferfehler reduzieren.",
        `Kundschaft des ${branch} zuverlässig und wirtschaftlich beliefern.`
      ],
      measures: [
        "Woche 1: aktuelle Liefer- und Retourenfälle auswerten.",
        "Woche 2-4: Verpackung, Lieferfenster oder Abholprozess standardisieren.",
        "Woche 5-8: Pilot mit ausgewähltem Belieferungsmodell durchführen und Kosten sowie Kundenzufriedenheit messen."
      ],
      conflicts: [
        "Höheres Serviceniveau steigert Kundennutzen, belastet aber Marge und Personal.",
        "Schnelle Lieferung kann Verpackungs-, Transport- und Fehlerkosten erhöhen."
      ],
      controls: ["Liefertermintreue", "Schadenquote", "Retouren- und Reklamationsquote"]
    },
    E: {
      analysis: [
        `Herkunft, Transportweg, Verpackung und Entsorgung von ${product} beurteilen.`,
        "Abfallarten, Mengen, Sammelstellen, Zuständigkeiten und Entsorgungskosten im Betrieb aufnehmen.",
        "Kundenerwartungen und gesetzliche Rahmenbedingungen berücksichtigen."
      ],
      goals: [
        "Abfall vermeiden oder besser trennen.",
        "Nachhaltige Beschaffung sichtbar und glaubwürdig machen.",
        "Kosten und Umsetzbarkeit im Alltag sichern."
      ],
      measures: [
        "Woche 1-2: Entsorgungsanalyse und Lieferanteninformationen sammeln.",
        "Woche 3-5: Sammelstellen, Verantwortlichkeiten und nachhaltigere Beschaffungsoption testen.",
        "Woche 6-8: Team instruieren, Kundschaft sachlich informieren und Wirkung messen."
      ],
      conflicts: [
        "Nachhaltigere Lösung kann teurer oder weniger flexibel sein.",
        "Mehr Trennung verbessert Ökologie, braucht aber Platz und Disziplin im Team."
      ],
      controls: ["Restabfallmenge", "Entsorgungskosten", "Anteil nachhaltiger Lieferanten oder Verpackungen"]
    },
    F: {
      analysis: [
        `Risiken rund um ${product}: Transport, Lagerung, Bedienung, Diebstahl, Daten oder Personenschutz prüfen.`,
        "Zuständigkeiten von Führung, Mitarbeitenden und externen Stellen klären.",
        "Bisherige Vorfälle, Beinaheunfälle, Diebstähle oder Datenschutzprobleme erfassen."
      ],
      goals: [
        "Unfälle, Diebstähle und Datenrisiken reduzieren.",
        "Zuständigkeiten klar und alltagstauglich festlegen.",
        "Sicherheit verbessern, ohne Verkauf und Kundenerlebnis unnötig zu behindern."
      ],
      measures: [
        "Woche 1: Risikoanalyse und Verantwortlichkeiten erstellen.",
        "Woche 2-4: Schutzmassnahmen, Instruktion und Meldeweg einführen.",
        "Woche 5-8: Stichproben, Vorfallauswertung und Nachschulung durchführen."
      ],
      conflicts: [
        "Mehr Kontrolle erhöht Sicherheit, kann aber Kundschaft oder Mitarbeitende belasten.",
        "Schneller Ablauf und sorgfältiger Personenschutz stehen manchmal im Spannungsfeld."
      ],
      controls: ["Anzahl Vorfälle oder Beinaheunfälle", "Diebstahl- oder Schwundquote", "erledigte Sicherheitskontrollen"]
    },
    G: {
      analysis: [
        `Qualitätsprobleme bei ${product}: Warenannahme, Lagerung, Bereitstellung, Beratung und Übergabe prüfen.`,
        "Reklamationsgründe, Prozessfehler, Verantwortlichkeiten und Dokumentation auswerten.",
        "Optimierungspotenziale in Instore-Logistik und Lager priorisieren."
      ],
      goals: [
        "Reklamationen und Prozessfehler senken.",
        "Einheitlichen Qualitätsstandard im Team erreichen.",
        "Qualität messbar machen und kontinuierlich verbessern."
      ],
      measures: [
        "Woche 1: Qualitätskriterien und Reklamationsursachen definieren.",
        "Woche 2-4: Checkliste für Warenannahme, Lagerung und Übergabe einführen.",
        "Woche 5-8: Abweichungen erfassen, Teamfeedback einholen und Prozessstandard anpassen."
      ],
      conflicts: [
        "Höhere Qualitätskontrolle braucht Zeit, senkt aber Fehlerkosten.",
        "Kulante Reklamationslösung stärkt Kundschaft, kann aber kurzfristig Kosten auslösen."
      ],
      controls: ["Reklamationsquote", "Fehler bei Warenannahme oder Übergabe", "Einhaltung der Qualitätscheckliste"]
    }
  };

  return { ...base, ...(byChapter[key] || {}) };
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function plaSolutionHtml(context) {
  const plan = plaSpecificPlan(context);
  return `
    <h2>Musterlösung</h2>
    <div class="criterion"><strong>Massstab:</strong> Bewertet wird eine vernetzte Planung für ${context.product} im ${context.branch}. Der Schwerpunkt ${context.chapter.title} und das konkrete Thema ${context.topic} müssen erkennbar sein; Auswirkungen auf ${context.crossTitles} sollen sichtbar werden.</div>
    <h3>Analyse der Ausgangslage</h3>
    <ul>
      ${listItems(plan.analysis)}
    </ul>
    <h3>Ziele</h3>
    <ul>
      ${listItems(plan.goals)}
    </ul>
    <h3>Massnahmenplan über acht Wochen</h3>
    <ul>
      ${listItems(plan.measures)}
    </ul>
    <h3>Zielkonflikte und Prioritäten</h3>
    <ul>
      ${listItems(plan.conflicts)}
    </ul>
    <h3>Messbare Erfolgskontrolle</h3>
    <ul>
      ${listItems(plan.controls)}
    </ul>
    <h3>Präsentationsstruktur</h3>
    <ul>
      <li>Ausgangslage mit Zahlen und Problem knapp zeigen.</li>
      <li>Entscheid und Massnahmenplan begründen.</li>
      <li>Kontrollen und erwartete Wirkung auf ${context.crossTitles} abschliessend darstellen.</li>
    </ul>
    <h3>Beurteilungskriterien · 18 Punkte</h3>
    <ul>
      <li>Kriterium 1, fachlich passend zur Aufgabe: 0 bis 3 Punkte, doppelt gewichtet, maximal 6 Punkte.</li>
      <li>Kriterium 2, fachliche Umsetzung/Vernetzung: 0 bis 3 Punkte, doppelt gewichtet, maximal 6 Punkte.</li>
      <li>Kriterium 3, Vortrags- und Präsentationstechnik: 0 bis 6 Punkte für klare Struktur, Verständlichkeit, Priorisierung, fachliche Sicherheit, Visualisierung und Zeitnutzung.</li>
    </ul>
  `;
}

function resetSolutions() {
  ciAnswer.value = "";
  plaAnswer.value = "";
  ciSolution.className = "solution locked";
  plaSolution.className = "solution locked";
  ciSolution.textContent = "Wird aktiv, sobald eine CI-Lösung eingetragen wurde.";
  plaSolution.textContent = "Wird aktiv, sobald eine PLA-Lösung eingetragen wurde.";
  ciSolutionBtn.disabled = true;
  plaSolutionBtn.disabled = true;
}

function generate() {
  resetSolutions();
  const branch = branchSelect.value;
  const ciContext = renderCi(ciChapter.value, branch);
  const plaContext = renderPla(plaChapter.value, branch);
  ciSolutionBtn.onclick = () => {
    ciSolution.className = "solution";
    ciSolution.innerHTML = ciSolutionHtml(ciContext);
  };
  plaSolutionBtn.onclick = () => {
    plaSolution.className = "solution";
    plaSolution.innerHTML = plaSolutionHtml(plaContext);
  };
}

function bindUnlock(textarea, button) {
  textarea.addEventListener("input", () => {
    button.disabled = textarea.value.trim().length < 40;
  });
}

chapterOptions();
bindUnlock(ciAnswer, ciSolutionBtn);
bindUnlock(plaAnswer, plaSolutionBtn);
generateBtn.addEventListener("click", generate);
generate();
