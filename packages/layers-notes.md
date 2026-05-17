What is the rule for "what can each layer know about"?
    *I thing each layer should know what it needs to do.
    *For example, in Routes it knows about the request(req),response(res) and calling services but it doesn't know about SQL, database structure and business rules.
    *So the routes talks to services,services talks to repositories and repositories talks to the database.

Why should repositories never format HTTP responses?
    *because they are not part of the web layer at all—they are purely a data access layer  and  repository should only deal with data, not how that data is presented to users or APIs.

Why should routes never write SQL directly?
    *because routes are meant to handle HTTP concerns, not database logic and when you mix them, you break the structure of your application.
    *Also remember that routes only deal with requests and responses, not how data is stored.