1) docker config ports usw
2) package.json configs
3) webpack.mix config ports etc
4) docker compose up
5) theme dateien nach themes/dist kopieren
6) falls es ein template werden soll, die Dateien aus themes wieder nach theme und data, themes etc löschen

# WIFI Folio-Theme

Dieses Theme wurde zu Lehrzwecken für den WIFI Lehrgang "Web Developer:in" erstellt. Es handelt sich um ein WP Classic Theme (PHP) mit Gutenberg Blöcken.

Es ist sinnvoll auch bei Classic-Themes einige Konfigurationen in der Datei "theme.json" vorzunehmen. Vorteile dadurch: keine Anpassungen im CSS des Editors (style-editor.css) notwendig; Globale Variablen; ...  
Dokumentation zur theme.json:
```
https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/
```

## WordPress mit Docker lokal installieren
- Docker Desktop öffnen / Docker starten
- Öffne das Terminal in der IDE (direkter Pfad zum Projekt)
- Dienste mit de, Befehl "docker-compose up -d" starten (Beim ersten mal kann es einige Zeit dauern, da die Images aus dem Internet geladen werden)
```shell
docker-compose up -d
```

Wurden die Images schon einmal installiert, können die Services mit "docker-compose up" gestartet werden. Werden Änderungen an der docker-compose.yml vorgenommen, muss der Befehl wieder mit " -d" – also "docker-compose up -d" ausgeführt werden. 
```
docker-compose up
```

Services werden mit dem Befehl "docker-compose down" beendet (Container remove).
```shell
docker-compose down
```

## Lokale URLs & Ports
WordPress, phpMyAdmin und MailHog sind über "localhost" und die in der docker-compose.yml eingetragenen Ports erreichbar.

### WordPress:
Beim ersten Seitenaufruf wird die WordPress-Installation aufgerufen
```
http://localhost:8080
```

### phpMyAdmin:
Wird in der Regel nicht installiert. Die meisten Hostingprovider bieten es aber zur Datenbankverwaltung an. Wir nutzen es zum Üben bzw. Zeigen der Datenbank.
```
http://localhost:8181
```
Zugangsdaten sind in der docker-compose.yml eingetragen. Benutzername = `example_user` und Passwort = `example_password`

### MailHog:
Damit können wir von localhost gesendete Emails testen
```
http://localhost:8025
```
#### SMTP Einstellungen in WordPress
Damit die von WordPress gesendeten Emails auch in MailHog landen, muss das Plugin "WP Mail SMTP by WPForms" installiert und eingerichtet werden.

Plugin Installieren und bei den Einstellungen von WP Mail SMTP muss folgendes konfiguriert werden:
- Mailer: *Other SMTP*
- SMTP-Host: *mailhog*
- Encryption: *None*
- SMTP Port: *1025*
- Auto TLS: *off*
- Authentication: *off*


## Hinweise für die Erstellung des Themes:

### HTML / CSS / JS - Template 
Das HTML-Template wird in die einzelnen Template-Teile (header, index/page, footer) des Themes zerlegt und mit PHP-Funktonen aus WordPress ergänze bzw. Code-Teile ersetzt.

### Settings in theme.json
Werden Settings über die theme.json Datei vorgenommen, so werden diese automatisch im (Gutenberg)Editor übernommen und sind als Variablen im CSS verwendbar. Bspw. Farbpalette, Verläufe, ... 

### Styles
Die style.css (src) wird angepasst
- Variablen aus theme.js übernehmen (:root, <body> BG-Gradient)
- Selektoren für die WordPress Button-Blöcke im CSS ergänzen
- .alignwide & .alignfull ergänzen
- style-editor.css anlegen und (nur) die im Editor benötigten Styles aus style.css übertragen
- CSS Dateien in das Theme Verzeichnis kopieren und autoprefix + minify
- WordPress-Kommentar für Theme einfügen
