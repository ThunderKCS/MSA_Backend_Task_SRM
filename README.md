# MSA_Backend_Task_SRM
I have written the backend on vs code and ran it on postman using the supabase database,


SETUP_INSTRUCTIONS:

Before you begin, ensure you have the following installed:
1.Node.js (v18 or higher)
2.A free Supabase account

Clone the repositry:git clone https://github.com/your-username/simple-crud-backend.git
cd simple-crud-backend

Install Dependencies:npm install

Set Up Supabase:
Create a new project on Supabase.
In the Table Editor, create a new table named products with the following columns:
id (int8, primary key)
name (text)
price (numeric)
created_at (timestamptz, with a default value of now())

Configure Environment Variables:
Create a new file in the project root named .env.
Go to Project Settings > API in your Supabase dashboard to find your Project URL and anon public key.
Add them to the .env file like this:
SUPABASE_URL=https://lrnosfwvxxzxniaamlfh.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxybm9zZnd2eHh6eG5pYWFtbGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MzQ1MTYsImV4cCI6MjA3MzExMDUxNn0.yY2PA-YshJb3gfmQm_Q0i3WuXkBR1CfMY47Zv4DoWMI

Run the Server:node index.js
The server will start on http://localhost:3000


BACKEND_RUN:

Create a Product:
Method: POST
Endpoint: /products
Description: Adds a new product to the database.
Body (raw JSON):
{
    "name": "Wireless Mouse",
    "price": 75
}

Get All Products:
Method: GET
Endpoint: /products
Description: Retrieves a list of all products.
Success Response (200 OK)

Get a Single Product:
Method: GET
Endpoint: /products/:id
Description: Retrieves a single product by its unique ID.
Success Response (200 OK)

Update a Product:
Method: PUT
Endpoint: /products/:id
Description: Updates the details of an existing product.
Body (raw JSON):
{
    "name": "Ergonomic Wireless Mouse",
    "price": 85
}

Delete a Product:
Method: DELETE
Endpoint: /products/:id
Description: Deletes a product from the database.
Success Response (200 OK)
