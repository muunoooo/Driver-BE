# 🚚 Driver Salary API

API sederhana untuk menghitung total gaji driver berdasarkan kehadiran bulanan dan biaya pengiriman dari shipment. Dibangun dengan **Node.js**, **Express.js**, **TypeScript**, dan **Prisma ORM**.

---

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **Prisma ORM** + **PostgreSQL / MySQL**
- **ts-node-dev** untuk pengembangan

---

## ⚙️ Environment Variables (.env)

Buat file `.env` di root direktori dan isi dengan:

```env
DATABASE_URL="postgresql://postgres.vewlchdvcjwqjjhzauwt:Purwadhika123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vewlchdvcjwqjjhzauwt:Purwadhika123@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"

## 🚀 Cara Menjalankan Project
git clone https://github.com/username/driver-salary-be.git
cd driver-salary-be
npm install
npx prisma generate
npm run dev


