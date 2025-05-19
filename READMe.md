# 🚚 Driver Salary API

API sederhana untuk menghitung total gaji driver berdasarkan kehadiran bulanan dan biaya pengiriman (`shipment cost`). Dibangun menggunakan **Node.js**, **Express.js**, **TypeScript**, dan **Prisma ORM**.

---

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **Prisma ORM** (PostgreSQL / MySQL)
- **ts-node-dev** untuk pengembangan lokal

---

## ⚙️ Environment Variables (.env)

Buat file `.env` di root direktori dan isi dengan:

```env
DATABASE_URL="postgresql://postgres.vewlchdvcjwqjjhzauwt:Purwadhika123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vewlchdvcjwqjjhzauwt:Purwadhika123@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

> 🔐 **Note**: Pastikan untuk tidak commit `.env` ke GitHub. Tambahkan `.env` ke `.gitignore`.

---

## 🚀 Cara Menjalankan Project

```bash
git clone https://github.com/muunoooo/Driver-BE.git
cd Driver-BE
npm install
npx prisma generate
npm run dev
```

---

## 📘 API Documentation

### GET `/v1/salary/driver/list`

Mengembalikan daftar driver beserta total gaji berdasarkan **bulan** dan **tahun**.

### 📌 Query Parameters

| Parameter     | Tipe   | Wajib | Deskripsi                                          |
|---------------|--------|--------|----------------------------------------------------|
| `month`       | number | Yes    | Bulan (1–12)                                       |
| `year`        | number | Yes    | Tahun, contoh: `2024`                              |
| `page_size`   | number | No     | Jumlah data per halaman (default: 10)              |
| `current`     | number | No     | Halaman saat ini (default: 1)                      |
| `driver_code` | string | No     | Filter berdasarkan kode driver                     |
| `name`        | string | No     | Filter exact match nama driver (case-insensitive) |
| `status`      | string | No     | Filter status gaji: `PENDING`, `CONFIRMED`, `PAID` |

---

### 🔄 Contoh Request

```
GET /v1/salary/driver/list?month=2&year=2024&name=Driver%20Name%201
```

---

### ✅ Contoh Response

```json
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
```

---

### 🧮 Penjelasan Field Gaji

| Field                   | Deskripsi                                                                 |
|-------------------------|--------------------------------------------------------------------------|
| `total_pending`         | Total shipment cost dengan status `PENDING`                              |
| `total_confirmed`       | Total shipment cost dengan status `CONFIRMED`                            |
| `total_paid`            | Total shipment cost dengan status `PAID`                                 |
| `total_attendance_salary` | Total kehadiran × `DRIVER_MONTHLY_ATTENDANCE_SALARY`                    |
| `total_salary`          | Jumlah total semua komponen gaji (`attendance + shipment`)              |
| `count_shipment`        | Jumlah shipment unik yang dijalankan driver (tidak dibatalkan/CANCELED) |

---

## 🧑 Author

Developed by [@muunoooo](https://github.com/muunoooo)  
Made with ✌ using modern backend technologies.

---
