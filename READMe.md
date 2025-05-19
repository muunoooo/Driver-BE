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

```

## 🚀 Cara Menjalankan Project

git clone https://github.com/muunoooo/Driver-BE.git
cd Driver-BE
npm install
npx prisma generate
npm run dev

## 📘 API Endpoint
GET /v1/salary/driver/list
Mengembalikan daftar driver beserta total gaji berdasarkan bulan dan tahun yang dipilih.

| Param         | Tipe   | Wajib | Deskripsi                                          |
| ------------- | ------ | ----- | -------------------------------------------------- |
| `month`       | number | ✅     | Bulan (1-12)                                       |
| `year`        | number | ✅     | Tahun, contoh: `2024`                              |
| `page_size`   | number | ❌     | Jumlah item per halaman (default: 10)              |
| `current`     | number | ❌     | Halaman saat ini (default: 1)                      |
| `driver_code` | string | ❌     | Filter berdasarkan kode driver                     |
| `name`        | string | ❌     | Filter exact match berdasarkan nama driver         |
| `status`      | string | ❌     | Filter status gaji: `PENDING`, `CONFIRMED`, `PAID` |


## 🔄 Contoh Request
GET /v1/salary/driver/list?month=2&year=2024&name=Driver%20Name%201

## ✅ Contoh Response
{
  "data": [
    {
      "driver_code": "DRIVER001",
      "name": "Driver Name 1",
      "total_pending": 1000000,
      "total_confirmed": 2000000,
      "total_paid": 3000000,
      "total_attendance_salary": 600000,
      "total_salary": 6600000,
      "count_shipment": 5
    }
  ],
  "pagination": {
    "total_row": 1,
    "page_size": 10,
    "current_page": 1,
    "total_pages": 1,
    "has_next_page": false,
    "has_prev_page": false
  }
}

## 🧮 Penjelasan Field Gaji

| Field                     | Deskripsi                                                        |
| ------------------------- | ---------------------------------------------------------------- |
| `total_pending`           | Total shipment cost berstatus `PENDING`                          |
| `total_confirmed`         | Total shipment cost berstatus `CONFIRMED`                        |
| `total_paid`              | Total shipment cost berstatus `PAID`                             |
| `total_attendance_salary` | Jumlah kehadiran dikali nilai `DRIVER_MONTHLY_ATTENDANCE_SALARY` |
| `total_salary`            | Penjumlahan semua komponen gaji                                  |
| `count_shipment`          | Jumlah shipment unik yang dijalankan driver (tidak dibatalkan)   |
```
