# Password Manager

This is a Password Manager application built with a client-server architecture. The client side is developed using React.js, and the server side is implemented using Node.js. The application allows users to securely manage and decrypt their passwords.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js and npm installed
- MySQL installed and running

### Client

1. Navigate to the `client` directory:
    ```sh
    cd client
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

### Server

1. Navigate to the `server` directory:
    ```sh
    cd server
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

### Database

1. Create a MySQL database for the application.
2. Update the database configuration in `server/config.js` with your database credentials.

## Usage

### Running the Application

#### Client

1. Navigate to the `client` directory:
    ```sh
    cd client
    ```
2. Start the client server:
    ```sh
    npm start
    ```

#### Server

1. Navigate to the `server` directory:
    ```sh
    cd server
    ```
2. Start the server:
    ```sh
    npm start
    ```

### Accessing the Application

- Open your browser and navigate to `http://localhost:3000`.

## Features

- Securely store and manage passwords
- Encrypt and decrypt passwords
- User authentication

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
