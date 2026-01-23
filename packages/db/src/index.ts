import dotenv from "dotenv";
dotenv.config();

import   { PrismaPg } from  "@prisma/adapter-pg";
import {PrismaClient} from "../generated/prisma/client"
import { Pool } from "pg";  
const connectionString = process.env.DATABASE_URL!.replace(
  /sslmode=(prefer|require|verify-ca)/, 
  'sslmode=verify-full'
);
console.log('database url: ',connectionString)


export const db = new PrismaClient({
  adapter:new PrismaPg({
    connectionString
  }),
}); 

export * from "../generated/prisma/client";
