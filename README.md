# Description
CodeBook is a web application that allows users to run code snippets remotely. Users can write code snippets in multiple languages, describe their functionality, set input arguments, and share them with others. 
The platform runs code remotely in secure Docker containers, ensuring a safe and isolated environment. 
Users can provide input parameters, enabling comprehensive testing and debugging. 

### Built With
- Frontend: React
- Backend: Express, MongoDB
- Docker

## Running the project locally

### Prerequisites

- Node.js
- Docker
- NPM
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/ayush03dev/code-book
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
    ```sh
   npm install --prefix frontend
   ```
3. Generate .env
   ```sh
   cp .env.example .env
   ```
4. Configure MongoDB and JWT Secret in .env file
    ```sh
    MONGO_URI=
    JWT_SECRET=
    ```
5. Build Docker Images
    ```sh
    cd Dockerfiles
    ```
    ```sh
    docker build -t java-exec -f DockerJava .
    ```
    ```sh
    docker build -t python-exec -f DockerPython .
    ```
    ```sh
    docker build -t cpp-exec -f DockerCPP .
    ```    
7. Start the server
   ```sh 
   npm run dev
   ```
8. Access the page at `http://localhost:3000`


## Screenshots

![Screenshot from 2023-07-06 12-26-59](https://github.com/ayush03dev/code-book/assets/12969145/6c639f11-ba5c-4754-9cb2-29e186439b42)

![Screenshot from 2023-07-06 12-27-24](https://github.com/ayush03dev/code-book/assets/12969145/8e666168-975d-4aab-87d9-e47194274370)

