import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

let sql = null;

if (connectionString) {
  try {
    sql = postgres(connectionString, {
      ssl: 'require', // Safe and required for Neon DB
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
    });
  } catch (error) {
    console.error('Failed to initialize PostgreSQL pool:', error);
  }
} else {
  console.warn('DATABASE_URL is not set. Database operations will fall back to mock/local client-side storage.');
}

export { sql };
