# Psullytutor

An angular project.

---

## Development server

ng serve --open

---

## Build

## failing build options

Routing will not work when deployed to DNS.

 - ng build --prod --output-path docs --base-href "/PSullyTutor/" 
 - ng build --prod --output-path docs --base-href "https://www.psullyltd.com"

### Current build option
npm run build:prod

N.B. don't delete CNAME, 404.html, robots.txt, sitemap.txt
