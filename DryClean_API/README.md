## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Instruction on Usage (adding a feature)

[NB] _adding new class in any directory, add the export in barrelfile (index.ts)_

[Part 1]

    - 1: create entity in prisma , run migrations and update Prisma cleint ( check Database below)
    - 2: create repository in infrastructure > repositoru inherit from baserepository
    - 3: create feature module in domain > modules
    - 4: add feature module in infrastructure > modules > app.module.ts
    - 5: import repository in *providers* on  feature module at 4
    - 6: create service in domain > services  import services in providers at 4
    - 5: create entities/interfaces  needed if needed  in domain > services
    - 7: inject repository in services and call functions in the repository

[Part 2]

    - 8: create controller in application > controllers
    - 9: add controller to feature module *controllers* in 4
    - 10: import service needed
    - 11: create end points in the controller
    - 12: create DTO's inside appliciton > dtos
    - 13: use DTO in controllers

# Database

- Change database in prisma schema ( add or delete or modify database)
- Migration

  > npm run migrate:dev NameOfMigration || in prod => npm run migrate:prod NameOfMigration

- After running migration Sync with PrismaClient

  > npx prisma generate

- Seed the data
  > npx prisma db seed
  > https://www.prisma.io/docs/guides/database/seed-database

# Architecture

** Onion Architecture**
The Onion architecture is a form of layered architecture and we can visualize these layers as concentric circles. Hence the name Onion architecture. The Onion architecture was first introduced by Jeffrey Palermo, to overcome the issues of the traditional N-layered architecture approach.

There are multiple ways that we can split the onion, but we are going to choose the following approach where we are going to split the architecture into 4 layers:
Domain Layer
Service Layer
Infrastructure Layer
Presentation/Application Layer

Link:
[Architecture Read 1](https://code-maze.com/onion-architecture-in-aspnetcore/)
[Architecture Read 2](https://www.linkedin.com/pulse/onion-architecture-aka-clean-santosh-poojari/?trk=articles_directory)

# RESOURCES

[1](https://sabinadams.hashnode.dev/basic-crud-operations-in-prisma#heading-findmany)
[2](https://dev.to/arctype/building-two-factor-authentication-with-nestjs-and-postgres-5f7k)
[3](https://dev.to/arctype/building-two-factor-authentication-with-nestjs-and-postgres-5f7k)
[4](https://nest-modules.github.io/mailer/docs/mailer.html)
[5](https://www.npmjs.com/package/prismix)

Enable TCP/IP in SQL Server

Configuration manager -> SQL Server Network Configuration -> Protocols for MSSQLSERVER.

# DATABASE CHARACTER

<div class="s-prose js-post-body" itemprop="text">
<h2>Replace special characters with percent-encodings</h2>
<p>Make sure that in your <code>DATABASE_URL</code> in the <code>.env</code> file, the special characters are replaced with percent-encodings.</p>
<p>For example, if your username or password contains <code>@</code> character, it should be replaced with its equivalent percent-encoding, that is <code>%40</code>. For <code>#</code> it is <code>%23</code> and so on. See the list below.</p>
<h2>Percent-encodings</h2>
<p>Following are the percent-encodings for the frequently used special characters:</p>
<div class="s-table-container">
<table class="s-table">
<thead>
<tr>
<th>Special Character</th>
<th>Percent Encoding</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>!</code></td>
<td><code>%21</code></td>
</tr>
<tr>
<td><code>#</code></td>
<td><code>%23</code></td>
</tr>
<tr>
<td><code>$</code></td>
<td><code>%24</code></td>
</tr>
<tr>
<td><code>%</code></td>
<td><code>%25</code></td>
</tr>
<tr>
<td><code>&amp;</code></td>
<td><code>%26</code></td>
</tr>
<tr>
<td><code>'</code></td>
<td><code>%27</code></td>
</tr>
<tr>
<td><code>(</code></td>
<td><code>%28</code></td>
</tr>
<tr>
<td><code>)</code></td>
<td><code>%29</code></td>
</tr>
<tr>
<td><code>*</code></td>
<td><code>%2A</code></td>
</tr>
<tr>
<td><code>+</code></td>
<td><code>%2B</code></td>
</tr>
<tr>
<td><code>,</code></td>
<td><code>%2C</code></td>
</tr>
<tr>
<td><code>/</code></td>
<td><code>%2F</code></td>
</tr>
<tr>
<td><code>:</code></td>
<td><code>%3A</code></td>
</tr>
<tr>
<td><code>;</code></td>
<td><code>%3B</code></td>
</tr>
<tr>
<td><code>=</code></td>
<td><code>%3D</code></td>
</tr>
<tr>
<td><code>?</code></td>
<td><code>%3F</code></td>
</tr>
<tr>
<td><code>@</code></td>
<td><code>%40</code></td>
</tr>
<tr>
<td><code>[</code></td>
<td><code>%5B</code></td>
</tr>
<tr>
<td><code>]</code></td>
<td><code>%5D</code></td>
</tr>
<tr>
<td><code>newline</code></td>
<td><code>%0A</code> or <code>%0D</code> or <code>%0D%0A</code></td>
</tr>
<tr>
<td><code>space</code></td>
<td><code>%20</code></td>
</tr>
<tr>
<td><code>"</code></td>
<td><code>%22</code></td>
</tr>
<tr>
<td><code>%</code></td>
<td><code>%25</code></td>
</tr>
<tr>
<td><code>-</code></td>
<td><code>%2D</code></td>
</tr>
<tr>
<td><code>.</code></td>
<td><code>%2E</code></td>
</tr>
<tr>
<td><code>&lt;</code></td>
<td><code>%3C</code></td>
</tr>
<tr>
<td><code>&gt;</code></td>
<td><code>%3E</code></td>
</tr>
<tr>
<td><code>\</code></td>
<td><code>%5C</code></td>
</tr>
<tr>
<td><code>^</code></td>
<td><code>%5E</code></td>
</tr>
<tr>
<td><code>_</code></td>
<td><code>%5F</code></td>
</tr>
<tr>
<td><code>`</code></td>
<td>%60</td>
</tr>
<tr>
<td><code>{</code></td>
<td><code>%7B</code></td>
</tr>
<tr>
<td><code>|</code></td>
<td><code>%7C</code></td>
</tr>
<tr>
<td><code>}</code></td>
<td><code>%7D</code></td>
</tr>
<tr>
<td><code>~</code></td>
<td><code>%7E</code></td>
</tr>
<tr>
<td><code>£</code></td>
<td><code>%C2%A3</code></td>
</tr>
<tr>
<td><code>円</code></td>
<td><code>%E5%86%86</code></td>
</tr>
</tbody>
</table>
</div>    </div>
