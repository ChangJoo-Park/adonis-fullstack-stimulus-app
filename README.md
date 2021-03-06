# Adonis + Stimulus fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Stimulus
10. Turbolinks
11. Test

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --blueprint=changjoo-park/adonis-fullstack-stimulus-app

```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Development

```bash
npm run dev
```

### Test

```bash
adonis test
```