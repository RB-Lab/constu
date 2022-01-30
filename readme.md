# Consudo

## A construction subcontractor search demo

### Run

The demo is available on https://consudo.rblab.net/

But you can run it on your own machine with docker-compose:

```sh
docker-compose -f deploy/docker-compose.yml --env-file deploy/example.env up -d
```

and go to http://localhost:3000

To run in development mode:

```sh
cd consudo-api
yarn
export $(xargs -a ../deploy/example.env)
yarn start
```

in second terminal

```sh
cd consudo-ui
yarn
export $(xargs -a ../deploy/example.env)
yarn start
```

### Further improvements

#### If I had more time

-   First of all, the thing that I proudly named "UI-kit" here is not a real UI kit. Its components
    far from being universal and barely could be reused even in this application, let alone different
    applications. It need much more thought invested to both UI and API design to make it a real
    UI-kit.
-   Mobile version is pretty rudimentary: I just made sure that the thing is usable ob mobiles at all,
    of course a proper mobile version would be great to have.
-   Tests & CI. Although for app of this size & functionality there's no real sense to develop tests
    here.
-   Better deployment. Although I've deployed this thing with one command, to run that command I have
    to SSH to my server and clone the whole repo there.
-   Fuzzy search so that it would account for user's typos in search field.
-   Tons of other UI improvements, e.g. highlight match in filtered data; allow to use not only "and"
    but also "or" in faceted filters; add counts to those facets; etc.

#### If it was a real deal

-   If there was a real database, things would be much more complex both on UI and on API sides: e.g.
    both search and facets composition must be performed on backend, pagination, etc.
-   I would use TypeScript for server, of course, but since it consists of just two routes that do
    barely anything, it looks like a perfect use case for JS.
-   I would use css framework (e.g. Tailwind CSS) or existing UI-kit (e.g. Material UI). But I decided
    that it would be a better showcase, if I write some CSS myself.
-   I would made server-side rendering, using Next.js. But then I would just placed API there as well.
    And I thought that since in task it is said to make app _and_ a simple API, it would be a better
    showcase to have a separate Express server.
-   Swagger/GraphQL for end-to-end typing!

Those are the things that just quickly pop into my mind. But there are more, of course.
