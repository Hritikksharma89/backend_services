# Scenario of Auth

| Action                | Endpoint                            |
| --------------------- | ----------------------------------- |
| Sign Up               | `POST - /auth/sign-up`              |
| Sign In               | `POST - /auth/sign-in`              |
| Sign Out              | `GET - /auth/sign-out`              |
| Forgot Password       | `GET - /auth/forgot-password`       |
| Reset Password        | `POST - /auth/reset-password`       |
| Verify Email          | `POST - /auth/verify-email`         |
| Refresh Token         | `GET - /auth/refresh-token`         |
| Get Access Token      | `GET - /auth/access-token`          |
| Validate Access Token | `GET - /auth/validate-access-token` |

# Scenario of User

| Action                      | Endpoint                                                            |
| --------------------------- | ------------------------------------------------------------------- |
| Get All Users               | `GET - /users?skip=0&take=10&orderby=name&sort=desc`                |
| Get User By Id              | `GET - /users/:id`                                                  |
| Update User By Id           | `POST - /users/:id`                                                 |
| Get All Teams By User Id    | `GET - /users/team?id=***`                                          |
| Get All Tasks By User Id    | `GET - /users/task?id=***&skip=0&take=10&orderby=name&sort=desc`    |
| Get All Projects By User Id | `GET - /users/project?id=***&skip=0&take=10&orderby=name&sort=desc` |

# Scenario of Team

| Action                      | Endpoint                                                             |
| --------------------------- | -------------------------------------------------------------------- |
| Get All Teams               | `GET - /teams?skip=0&take=10&orderby=title&sort=desc`                |
| Get Team By Id              | `GET - /teams/:id`                                                   |
| Update Team By Id           | `PUT - /teams/:id`                                                   |
| Delete Team By Id           | `DELETE - /teams/:id`                                                |
| Create Team                 | `POST - /teams`                                                      |
| Get All Users By Team Id    | `GET - /teams/user?id=***&skip=0&take=10&orderby=title&sort=desc`    |
| Get All Projects By Team Id | `GET - /teams/project?id=***&skip=0&take=10&orderby=title&sort=desc` |

# Scenario of Task

| Action                     | Endpoint                                                             |
| -------------------------- | -------------------------------------------------------------------- |
| Get All Tasks              | `GET - /tasks?skip=0&take=10&orderby=title&sort=desc`                |
| Get Task By Id             | `GET - /tasks/:id`                                                   |
| Update Task By Id          | `PUT - /tasks/:id`                                                   |
| Delete Task By Id          | `DELETE - /tasks/:id`                                                |
| Create Task                | `POST - /tasks`                                                      |
| Get All Users By TaskID    | `GET - /tasks/user?id=***&skip=0&take=10&orderby=title&sort=desc`    |
| Get All Projects By TaskID | `GET - /tasks/project?id=***&skip=0&take=10&orderby=title&sort=desc` |

# Scenario of Project

| Action                     | Endpoint                                                             |
| -------------------------- | -------------------------------------------------------------------- |
| Get All Projects           | `GET - /projects?skip=0&take=10&orderby=title&sort=desc`             |
| Get Project By Id          | `GET - /projects/:id`                                                |
| Update Project By Id       | `PUT - /projects/:id`                                                |
| Delete Project By Id       | `DELETE - /projects/:id`                                             |
| Create Project             | `POST - /projects`                                                   |
| Get All Tasks By ProjectID | `GET - /projects/task?id=***&skip=0&take=10&orderby=title&sort=desc` |
| Get All Teams By ProjectID | `GET - /projects/team?id=***&skip=0&take=10&orderby=title&sort=desc` |

# Scenario of Setting

| Action                    | Endpoint             |
| ------------------------- | -------------------- |
| Get Setting By User Id    | `GET - /setting/:id` |
| Update Setting By User Id | `PUT - /setting/:id` |
