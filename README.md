# My Churche

This is My Churche App.

## API Reference

## Church

#### Get all Churches

```http
  GET /church
```

| Parameter | Method | Description                |
| :-------- | :----- | :------------------------- |
| `api_key` | `GET`  | **Retrieve**. All Churches |

#### Get Church by ID

```http
  GET /church/${id}
```

| Parameter | Method | Description             |
| :-------- | :----- | :---------------------- |
| `id`      | `Get`  | **Fetch**. Church by Id |

#### Create Church

```http
  POST /church
```

| Parameter | Method | Description       |
| :-------- | :----- | :---------------- |
| `api_key` | `POST` | **Create** Church |

#### Update Church By ID

```http
  POST /church/${id}
```

| Parameter | Method | Description             |
| :-------- | :----- | :---------------------- |
| `api_key` | `POST` | **Update** Church by id |

## Events

#### Get all Events

```http
  GET /events
```

| Parameter | Method | Description              |
| :-------- | :----- | :----------------------- |
| `api_key` | `GET`  | **Retrieve**. All Events |

#### Get Event by ID

```http
  GET /event/${id}
```

| Parameter | Method | Description            |
| :-------- | :----- | :--------------------- |
| `id`      | `Get`  | **Fetch**. Event by Id |

#### Create Event

```http
  POST /event
```

| Parameter | Method | Description      |
| :-------- | :----- | :--------------- |
| `api_key` | `POST` | **Create** event |

#### Update event By ID

```http
  POST /event/${id}
```

| Parameter | Method | Description            |
| :-------- | :----- | :--------------------- |
| `api_key` | `POST` | **Update** event by id |

## User

#### Get all Users

```http
  GET /users
```

| Parameter | Method | Description             |
| :-------- | :----- | :---------------------- |
| `api_key` | `GET`  | **Retrieve**. All Users |

#### Get User by ID

```http
  GET /users/${id}
```

| Parameter | Method | Description           |
| :-------- | :----- | :-------------------- |
| `id`      | `Get`  | **Fetch**. User by Id |

#### Create User

```http
  POST /users
```

| Parameter | Method | Description      |
| :-------- | :----- | :--------------- |
| `api_key` | `POST` | **Create** Users |

#### Update User By ID

```http
  POST /users/${id}
```

| Parameter | Method | Description           |
| :-------- | :----- | :-------------------- |
| `api_key` | `POST` | **Update** User by id |

## Authentication

#### Sign-up

```http
  POST /auth/sign-up
```

| Parameter | Method | Description |
| :-------- | :----- | :---------- |
| `api_key` | `POST` | **Sign-up** |

#### Sign-in

```http
  GET /api/logout
```

| Parameter | Method | Description |
| :-------- | :----- | :---------- |
| `api_key` | `POST` | **Sign-in** |

#### Forgot Password

```http
  POST /auth/forgot-password
```

| Parameter | Method | Description         |
| :-------- | :----- | :------------------ |
| `api_key` | `POST` | **Forgot Password** |

#### Reset-password

```http
  POST /auth/reset-password
```

| Parameter | Method | Description        |
| :-------- | :----- | :----------------- |
| `api_key` | `POST` | **Reset-password** |

#### Google

```http
  POST /auth/google
```

| Parameter | Method | Description        |
| :-------- | :----- | :----------------- |
| `api_key` | `POST` | **Sign In Google** |

#### Google callback

```http
  POST /auth/reset-password
```

| Parameter | Method | Description                 |
| :-------- | :----- | :-------------------------- |
| `api_key` | `POST` | **Sign In Google Callback** |
