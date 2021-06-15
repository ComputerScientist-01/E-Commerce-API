<p align="center">
    <a href="https://jayvardhanrathi.tech">
	<img src="https://user-images.githubusercontent.com/39644109/110592126-e6fc2700-819f-11eb-9ca5-8827418963c7.png" width=60%/>
</a>

<h2 align="center">E-Commerce API</h2>

</p>

## :bulb: Built Using

- MongoDB
- Express
- Node.JS
- Javascript

## Run

### Configure Database Connection String

You need to go to `.env` file and add your connection string to your mongoDB database based on how it's explained in the course.
You can use the following url, but you need to get your `username`, `password` and `dbname` which you created in your databse.

```
mongodb+srv://<username>:<password>@cluster0.x1ccn.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### To Install all the dependencies

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

## Database Design

<p align="center">
<img src="https://user-images.githubusercontent.com/39644109/114302574-3c04c300-9ae7-11eb-9950-8b82820b922a.png" width=60%/>


<!-- LICENSE -->  

## License

Distributed under the MIT License. See `LICENSE` for more information.  


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request  



<!-- CONTACT -->

## :man: Project Created & Maintained By -

- **Hey guys, I'm Jayvardhan. Find out more about me** [ here](https://linkedin.com/in/rathi406)
- **Reach out to me at** [rathi406@gmail.com](rathi406@gmail.com)

<h3 align="right">Built with :heart: by Jayvardhan Rathi</h3>

