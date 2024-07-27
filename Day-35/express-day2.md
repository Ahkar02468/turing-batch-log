## Express Route Method

- json => return json(content type => application/json)
- end => ending the response after everything
- redirect => redirect to diseired route
- render => render the template like html or jade
- send => return any data type like string/html(content type => text/html)

## Route

1. Route have method and path
2. controller accept request and return response aka req,res hadling
3. req, res pipeline shoule be route=>controller=>service=>Db

## DB

- RDBMS(Relational DB) and NoSQL(Not Only SQL)
> RDBMS good for transaction data(aka always updated data)
     - have fixed schema
     - have ACID(Atomicity, Consistency, Isolation, Durability)
     - but hard to scale

> NoSQL good for non transactional data and read only prefered data

- Mongo is document DB(Document means json like data)
     * can store more than one entities

- key-value type like redis and memcache(in-memory db)

- Graph DB(Eg., neo4j)

### Scaling

1. Verticle Scaling
     - 1 server more hardware capacity
2. Horizontal Scaling(aka scale out)
     - multiple servers, instances

# DIFFs

* table in RDMS and collections in NoSQL
* schema in RDMS and schema-less in NoSQL
* ACID in RDMS and CAP in NoSQL
* RDBMS is relational and NoSQL is non-relational
* RDBMS is more structured and NoSQL is more unstructured
* RDBMS is more mature and NoSQL is more modern
* row in RDBMS and document in NoSQL