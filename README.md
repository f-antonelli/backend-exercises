
# MERN APP - Backend Coderhouse Course

Im Currently building a NFT Marketplace to learn stack MERN. Also, I'm implementing github actions to use CI/CD and docker-compose for develop


## Run Locally

Clone the project

```bash
  git clone https://github.com/f-antonelli/backend-exercises.git
```

Go to the project directory

- Use Docker to see my project

```bash
    docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```

- Or install with npm

```bash
   cd /client
   npm install

   cd ..
   
   cd /server
   npm install
```
    
## Deploy


- Frontend ( surge ): http://nft-prod-mernapp.surge.sh/ 

- Backend ( heroku ): https://backend-dev-fdantonelli.herokuapp.com


## API Reference

#### Get all products

```http
  GET /api/products
```

#### Get item by id

```http
  GET /api/items/${id}
```

#### Get products from cart

```http
  GET /api/cart/${id_cart}/products
```
#### Create product

```http
  POST /api/products
```

| Body Example |
| :-------- |
    "title": "Boligoma",
    "price": 2231,
    "thumbnail": "https://324.png"

#### Add product to Cart

```http
  POST /api/cart/${id_cart}/products
```

| Body Example |
| :-------- |
    "title": "Lapiz",
    "price": 21,
    "img": "https://lapicito.png",
    "id": 5,
    "description": "holaaa",
    "code": "435rdf",
    "stock": 1
