/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  // eslint-disable-next-line prettier/prettier
  log: ['query'],
})
