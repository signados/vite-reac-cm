### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:4173.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)

### Configuración

? What application platform does your project use? Node
? What version of Node do you want to use? 21.6.2
? Which package manager do you want to use? npm
? Do you want to run "npm run build" before starting your server? Yes
? What directory is your build output to? (comma-separate if multiple) dist
? What command do you want to use to start the app? npm run preview
? What port does your server listen on? 4173

Para que cargue vite: Use production node environment by default en el dockerfile: 

ENV NODE_ENV development
COPY package*.json ./
RUN npm install