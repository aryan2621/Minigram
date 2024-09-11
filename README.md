
# Minigram

A starter project for the Next js, mini instagram [Minigram] where used can upload their posts.

## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/51ef054c-349d-49ba-9f0c-51ddac1d8595)
![App Screenshot](https://github.com/user-attachments/assets/9928f178-2309-493a-a321-14978a6f7e1a)
![App Screenshot](https://github.com/user-attachments/assets/20dc2253-7ceb-4e22-a7ae-902e605d14ab)

## Tech Stack

**Client:** Next, Firebase, Appwrite



## Run Locally

Clone the project

```bash
  git clone https://github.com/aryan2621/Minigram
```

Go to the project directory

```bash
  cd Minigram
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## API Reference

#### Login

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email Id |
| `password` | `string` | **Required**. password |

#### Signup

```http
  POST /signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email Id |
| `password`      | `string` | **Required**. Password |
| `first name`      | `string` | **Required**. First Name |
| `last name`      | `string` | **Required**. Last Name |



```http
  GET /posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. In headers |

```http
  DELETE /post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`      | `string` | **Required**. Post Id |

```http
  POST /post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `post Obj`      | `string` | **Required**. Post Object |

```http
  GET /user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. In headers |
## Deployment

To deploy this project run

```bash
  npm run build && npm run start
```


## Support

For support, email risha2621@gmail.com or join me at Linkedin https://www.linkedin.com/in/rishabh-verma-5366901a1/

