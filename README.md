# Basic Auth API

## About

In this repository contains a basic authenticate API built in **Javascript** with **node.js**, and the dependencies:

* [Express](https://expressjs.com/es/): As backend framework.
* [Mysql2](https://www.npmjs.com/package/mysql2): As **mysql** DBMS connector.
* [Bcrypt](https://www.npmjs.com/package/bcrypt): As hash function.

And the most important tool **much of love** ❤️

## Installation



### Prerequisites

> * Node.js: >= 16.0.0
> * Yarn : >= 1.22.0
> * Python: >= 2.*
> * Extracted directly from bcrypt repository:
>   * Windows users will need the options for c# and c++ installed with their visual studio instance.
>   * **OpenSSL** - This is only required to build the **bcrypt** project if you are using versions <= 0.7.7. Otherwise, we're using the builtin node crypto bindings for seed data (which use the same OpenSSL code paths we were, but don't have the external dependency)

### Installation

One single line:

```bash
yarn install
```

### Setup

* Create un root project dir the next file:

```bash
$:~ touch .env
* Add the next lines to the file:

```
PORT=**Backend port. Default port 5500** 

DBHOST=**Your host IP of MySQL**
DBNAME=**Your database name**
DBUSER=**Your MySQL username**
DBPASS=***Your MySQL user password**
```
