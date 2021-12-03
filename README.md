# GDSC JSSSTU

## About the app

Official website source code of GDSC JSSSTU.

- You can see a live demo at **https://dscjssstu.in**

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/gdsc-jssstu/dsc-jssstu.git
    npm install
    npm run dev

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## Contributors

<a href="https://github.com/gdsc-jssstu/dsc-jssstu/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gdsc-jssstu/dsc-jssstu" />
</a>
