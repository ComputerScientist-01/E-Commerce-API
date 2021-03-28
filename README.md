<p align="center">
    <a href="https://jayvardhanrathi.tech">
	<img src="https://user-images.githubusercontent.com/39644109/110592126-e6fc2700-819f-11eb-9ca5-8827418963c7.png" width=80%/>
</a>
    
<h2 align="center">E-Commerce API</h2>

</p>

## :bulb: Built Using

- [**Node.JS**](https://https://nodejs.org/en/)
- [**JavaScript**](https://www.javascript.com/)

## Run

### Configure Database Connection String
You need to go to `.env` file and add your connection string to your mongoDB database based on how it's explained in the course.
You can use the following url, but you need to get your `username`, `password` and `dbname` which you created in your databse.

```
mongodb+srv://<username>:<password>@cluster0.x1ccn.mongodb.net/<dbname>?retryWrites=true&w=majority
```


### Install

```
npm install
```

### Start API

```
npm start
```

## Routes

### Products

```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
PUT gallery-images : /api/v1/products/gallery-images/:id
GET featured products: /api/v1/products/get/featured/:count
GET products count: /api/v1/products/get/count
```

### Orders

```
GET      /api/v1/orders
GET      /api/v1/orders/:id
POST     /api/v1/orders
PUT      /api/v1/orders/:id
DELETE   /api/v1/orders/:id
GET orders count: /api/v1/orders/get/count
```

### Users

```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
GET users count: /api/v1/users/get/count
```

#### Register new user

```
POST     /api/v1/users/register
```

#### Login user

To login the user and get the auth token you can use:

```
POST     /api/v1/users/login
```

## :heart: Found this project interesting?

<br>

## If you found this project useful, then please consider giving it a :star: on Github and sharing it with your friends via social media.

<br>
<!-- CONTACT -->

## :man: Project Created & Maintained By -

- **Hey guys, I'm Jayvardhan. Find out more about me** [ here](https://linkedin.com/in/rathi406)
- **Reach out to me at** [rathi406@gmail.com](rathi406@gmail.com)

<h3 align="right">Built with :heart: by Jayvardhan Rathi</h3>
