# CommerceCore
Complete backend of an e-commerce built with Express.js


## 1. CRUD for the administrator

#### Products

- **POST** `/admin/products` - Create a new product
- **GET** `/admin/products` - Get all products including internal data such as inventory or statistics
- **GET** `/admin/products/:id` - Get a specific product
- **PUT** `/admin/products/:id` - Update a specific product
- **DELETE** `/admin/products/:id` - Delete a specific product

#### Categories

- **POST** `/admin/categories` - Create a new category
- **GET** `/admin/categories` - Get all categories
- **PUT** `/admin/categories/:id` - Update a specific category
- **DELETE** `/admin/categories/:id` - Delete a specific category

#### Orders

- **GET** `/admin/orders` - Get all orders
- **GET** `/admin/orders/:id` - Get a specific order
- **PUT** `/admin/orders/:id` - Update a specific order (e.g. change status)
- **DELETE** `/admin/orders/:id` - Delete a specific order (e.g. cancel an order)

#### Users  

- **GET** `/admin/users` - Get all users
- **GET** `/admin/users/:id` - Get a specific user
- **DELETE** `/admin/users/:id` - Delete a specific user

## 2. CRUD for the users

#### Products and navigation

- **GET** `/products` - Get all products
- **GET** `/products/:id` - Get a specific product

#### Cart

- **POST** `/cart` - Add a product to the cart --> Body: { productId, quantity }
- **GET** `/cart` - Get all products in the cart
- **PUT** `/cart/:id` - Update the quantity of a product in the cart
- **DELETE** `/cart/:id` - Remove a product from the cart

#### Orders

- **POST** `/orders` - Create a new order --> Body: { shippingAddress, paymentMethod }
- **GET** `/orders` - Get all orders
- **GET** `/orders/:id` - Get a specific order

#### Authentication

- **POST** `/auth/register` - Register a new user
- **POST** `/auth/login` - Login a user
- **POST** `/auth/logout` - Logout a user
- **POST** `/auth/refresh` - Refresh the access token

#### Profile

- **GET** `/profile` - Get the user's profile
- **PUT** `/profile` - Update the user's profile