name: Run Full Stack Project

on: [push]

jobs:
  build-and-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install and Run Frontend
        run: |
          npm install
          npm run dev &
        
      - name: Install and Run Backend
        run: |
          cd backend
          npm install
          node app.js
