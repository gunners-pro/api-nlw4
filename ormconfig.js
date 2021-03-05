module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "entities": [
    "dist/models/**/*.{ts,js}"
  ],
  "migrations": [
    "dist/migrations/**/*.{ts,js}"
  ],
  "cli": {
    "migrationsDir": "src/migrations"
  }
}
