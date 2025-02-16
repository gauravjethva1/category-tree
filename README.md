# 🚀 Category Tree 

## 📌 Project Setup

This project is built using **TypeScript** and **Node.js**, with support automated build scripts.

### 🛠 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- **npm**

### 📂 Installation

Clone the repository and install dependencies:

```sh
npm install
```

## 🔥 Available Scripts

### 🚀 Development Mode

Run the project in development mode with **nodemon**:

```sh
npm run dev
```

This will automatically restart the server on changes.

### 🏗 Build the Project

To compile the TypeScript code into JavaScript:

```sh
npm run build
```

### 🚀 Start Production Server

After building, start the server:

```sh
npm run start
```

This will:

- Run the compiled JavaScript from the `build/` directory.

## 🛠 Additional Configuration

### TypeScript Path Aliases

Path aliases are configured in `tsconfig.json` under the `paths` property. Ensure you use the correct alias format when importing modules.

Example:

```json
"paths": {
  "*": ["src/*"]
}
```

Importing a module:

```typescript
import app from 'app'
```

## 🎯 Notes

- The `start` script requires the project to be built first (`npm run build`).

---

Happy coding! 🚀
