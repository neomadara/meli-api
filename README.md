# meli-api

#### The architecture used for this project is Use Case Driven Architecture this is the folder structured

src/
├── controllers/
│   └── item.controller.ts
├── use-cases/
│   └── get-items-by-query.use-case.ts
│   └── get-item-by-id.use-case.ts
├── services/
│   └── external-service.ts
├── repositories/
│   └── item.repository.ts
├── models/
│   └── item.model.ts
├── routes/
│   └── item.routes.ts
├── utils/
│   └── http-exception.ts
├── app.ts
└── server.ts

####  a brief explanation of each folder

controllers/: Controllers that handle HTTP requests.
services/: Business logic and connection to other services.
repositories/: Data access or connection to an external service.
models/: Type and interface definitions for the Item entity.
routes/: Defines the controller routes.
utils/: Utilities and custom exceptions.
app.ts: Express application configuration.
server.ts: Application entry point.
