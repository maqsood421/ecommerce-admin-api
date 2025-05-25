# 📦 E-commerce Admin API

This project implements a back-end API for an e-commerce admin dashboard. The API provides insights into sales, revenue, and inventory status, and also allows the registration of new products.

## 🚀 Features

### 1. 📊 Sales Status
- Retrieve and filter sales data by:
  - Date range
  - Product
  - Category
- Analyze revenue:
  - Daily, weekly, monthly, annually
- Compare revenue across:
  - Time periods
  - Product categories

### 2. 📦 Inventory Management
- View current inventory with low-stock alerts
- Update inventory levels
- Track stock changes over time

### 3. 🛒 Product Management
- Register new products
- View product listings

---

## 🛠️ Tech Stack

| Category       | Stack               |
|----------------|---------------------|
| Language       | JavaScript (Node.js)|
| Framework      | Express.js          |
| Database       | MongoDB             |
| ORM            | Mongoose            |
| API Style      | RESTful             |
| Data Seeding   | MongoDB Script      |

---

## 🧱 Database Design

### Collections

#### 🧾 Product
| Field     | Type     | Description         |
|-----------|----------|---------------------|
| _id       | ObjectId | Primary key         |
| name      | String   | Product name        |
| category  | String   | Product category    |
| price     | Number   | Product price       |
| createdAt | Date     | Auto-timestamp      |
| updatedAt | Date     | Auto-timestamp      |

#### 🏷️ Inventory
| Field          | Type     | Description                        |
|----------------|----------|------------------------------------|
| _id            | ObjectId | Primary key                        |
| product        | ObjectId | Refers to Product._id              |
| stock_quantity | Number   | Quantity in stock                  |
| createdAt      | Date     | Auto-timestamp                     |
| updatedAt      | Date     | Auto-timestamp                     |

#### 📈 Sale
| Field         | Type     | Description                        |
|---------------|----------|------------------------------------|
| _id           | ObjectId | Primary key                        |
| product       | ObjectId | Refers to Product._id              |
| quantity_sold | Number   | Number of units sold               |
| sale_date     | Date     | Date of sale                       |
| createdAt     | Date     | Auto-timestamp                     |
| updatedAt     | Date     | Auto-timestamp                     |

---

## 🔗 ER Diagram

```plaintext
+----------------+           +----------------+            +----------------+
|    Product     |           |   Inventory    |            |      Sale      |
+----------------+           +----------------+            +----------------+
| _id (PK)       |<--------+ | _id (PK)       |     +----->| _id (PK)       |
| name           |          | product (FK)    |     |      | product (FK)   |
| category       |          | stock_quantity |     |      | quantity_sold  |
| price          |          | createdAt      |     |      | sale_date      |
| createdAt      |          | updatedAt      |     |      | createdAt      |
| updatedAt      |          +----------------+     |      | updatedAt      |
+----------------+                                 |      +----------------+
                                                   |
                                                   |
        One Product has many Inventories ----------+
        One Product has many Sales ----------------+
