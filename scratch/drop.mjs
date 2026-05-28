import pkg from '@next/env';
const { loadEnvConfig } = pkg;
import postgres from 'postgres';

loadEnvConfig('./');

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

async function main() {
  await sql`DROP TABLE IF EXISTS invoices`;
  console.log('Dropped invoices table');
  process.exit(0);
}
main();
