# MEGATWITTER

Megatwitter è un'applicazione web dove gli utenti possono esprimere i propri pensieri e dare feedback (mettendo "mi piace") ai pensieri degli altri.

# Getting Started

Per eseguire l'applicazione, è necessario avviare sia il frontend che il backend utilizzando due terminali separati.

cd backend
npm run dev

cd frontend
npm run dev

# Front-End

Per il frontend, ho utilizzato React con Next.js. Ho scelto Next.js perche' permette di velocizzare il processo di montaggio del app lato client.

Componenti principali:

- Form: Permette agli utenti di inserire nuovi tweet.
- Tweets: Mostra tutti i tweet e consente di mettere "mi piace" a ciascuno.

Chiamate API: Ho utilizzato axios per interagire con il backend e gestire le richieste HTTP.

Strumeti utilizzati:
-next.js

# BackEnd

Ho sviluppato il backend utilizzando Express.js. Ecco le librerie e strumenti utilizzati:

Express.js: Per la creazione del server e delle API.
CORS: Configurato per permettere richieste solo da http://localhost:3000.
dotenv: Per gestire le variabili d'ambiente.
morgan: Per il logging delle richieste HTTP.
nanoid: Per generare ID unici per i tweet.

API Endpoints

- POST /tweets: Permette di pubblicare un nuovo tweet.
- GET /tweets: Ritorna tutti i tweet esistenti.
- POST /tweets/#id/like: Incrementa il contatore di "mi piace" per un tweet specifico.

Struttura Dati

I tweet e i "mi piace" sono memorizzati in memoria.
