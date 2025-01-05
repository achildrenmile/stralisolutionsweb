// src/components/Impressum.jsx
import React from 'react';

const Impressum = () => {
  return (
    <div className="pt-20 px-4 pb-12 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Informationspflicht laut §5 E-Commerce Gesetz</h2>
            <div className="space-y-2">
              <p><strong>Strali Solutions e.U.</strong></p>
              <p>Inhaber: Ing. Michael Linder, MSc</p>
              <p>Nötsch 55, 9611 Nötsch im Gailtal</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Unternehmensdetails</h3>
            <div className="space-y-2">
              <p><strong>Firmenbuchnummer:</strong> 474736t</p>
              <p><strong>Firmenbuchgericht:</strong> Landesgericht Klagenfurt</p>
              <p><strong>UID-Nummer:</strong> ATU72580414</p>
              <p><strong>DVR-Nummer:</strong> 4018687</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <div className="space-y-2">
              <p><strong>Tel.:</strong> +43 (0)676 96 58 016</p>
              <p><strong>E-Mail:</strong> <a href="mailto:office@strali.solutions" className="text-blue-600 hover:underline">office@strali.solutions</a></p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Mitgliedschaft</h3>
            <p>Mitglied bei: Wirtschaftskammer Kärnten, Österreich</p>
            <p>Berufsrecht: <a href="http://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gewerbeordnung</a></p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Online-Streitbeilegung</h3>
            <p>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://ec.europa.eu/odr</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 mt-8">Datenschutzerklärung</h2>
            <div className="space-y-4 text-sm">
              <p>Wir legen großen Wert auf den Schutz Ihrer Daten. Die Nutzung der Webseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich.</p>
              
              <h3 className="text-lg font-semibold mt-4">Cookies</h3>
              <p>Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Diese helfen uns dabei, unsere Website zu optimieren und Ihnen einen besseren Service zu bieten.</p>

              <h3 className="text-lg font-semibold mt-4">Datensparsamkeit</h3>
              <p>Personenbezogene Daten speichern wir gemäß den Grundsätzen der Datenvermeidung und Datensparsamkeit nur so lange, wie es erforderlich ist oder vom Gesetzgeber her vorgeschrieben wird.</p>

              <h3 className="text-lg font-semibold mt-4">Ihre Rechte</h3>
              <p>Sie haben jederzeit das Recht auf Auskunft über die betreffenden personenbezogenen Daten. Sie können jederzeit deren Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 mt-8">Haftungsausschluss</h2>
            <div className="space-y-4 text-sm">
              <h3 className="text-lg font-semibold">1. Inhalt des Onlineangebotes</h3>
              <p>Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, die sich auf Schäden materieller oder ideeller Art beziehen, sind grundsätzlich ausgeschlossen.</p>

              <h3 className="text-lg font-semibold">2. Verweise und Links</h3>
              <p>Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p>

              <h3 className="text-lg font-semibold">3. Urheberrecht</h3>
              <p>Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;