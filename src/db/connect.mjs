import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: '5432',
  });

export const db = async (cb) => {
    try {   
        await client.connect()
        await cb(client)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}

