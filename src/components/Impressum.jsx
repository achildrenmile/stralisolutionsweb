import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Impressum = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-24 px-4 pb-12 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-white">{translations.imprint.title}</h1>

        <div className="card-dark rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
              {translations.imprint.companyInfo.title}
            </h2>
            <div className="space-y-2 text-[var(--text-muted)]">
              <p><strong className="text-white">Strali Solutions e.U.</strong></p>
              <p>{translations.imprint.companyInfo.owner}</p>
              <p>Nötsch 55, 9611 Nötsch im Gailtal</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {translations.imprint.details.title}
            </h3>
            <div className="space-y-2 text-[var(--text-muted)]">
              <p><strong className="text-white">{translations.imprint.details.registration}</strong> 474736t</p>
              <p><strong className="text-white">{translations.imprint.details.court}</strong> Landesgericht Klagenfurt</p>
              <p><strong className="text-white">UID-Nummer:</strong> ATU72580414</p>
              <p><strong className="text-white">DVR-Nummer:</strong> 4018687</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">Kontakt</h3>
            <div className="space-y-2 text-[var(--text-muted)]">
              <p><strong className="text-white">Tel.:</strong> +43 (0)676 96 58 016</p>
              <p><strong className="text-white">E-Mail:</strong> <a href="mailto:office@strali.solutions" className="text-[var(--primary-light)] hover:underline">office@strali.solutions</a></p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">Mitgliedschaft</h3>
            <div className="text-[var(--text-muted)]">
              <p>Mitglied bei: Wirtschaftskammer Kärnten, Österreich</p>
              <p>Berufsrecht: <a href="http://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">Gewerbeordnung</a></p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">Online-Streitbeilegung</h3>
            <p className="text-[var(--text-muted)]">Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">http://ec.europa.eu/odr</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">Datenschutzerklärung</h2>
            <p className="text-[var(--text-muted)] text-sm">Wir legen großen Wert auf den Schutz Ihrer Daten. Die Nutzung der Webseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">Haftungsausschluss</h2>
            <div className="space-y-4 text-sm text-[var(--text-muted)]">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">1. Inhalt des Onlineangebotes</h3>
                <p>Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, die sich auf Schäden materieller oder ideeller Art beziehen, sind grundsätzlich ausgeschlossen.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">2. Verweise und Links</h3>
                <p>Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">3. Urheberrecht</h3>
                <p>Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
