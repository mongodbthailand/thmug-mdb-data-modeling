---
runme:
  id: 01HSWTD7YMDH9Z808V1VH5V1TT
  version: v3
---

# Thailand MUG

## Events

- Topic: MongoDB Data Modeling Hands-on
- Date: 30-Mar-2024
- Time: 1000am to 1200pm (ICT)
- Location: https://maps.app.goo.gl/UZ9ZnmYjdyTCLdfR9

## Tools

- MongoDB Compass
- mlaunch
- npm i m

## Agenda

- Replication concept
- Sharding concept
- Computed pattern
- Interitance pattern
- Extended reference pattern
- Schema versioning pattern
- Subset pattern
- Bucket pattern

- [Slide](./MongoDB-Data-Modeling.pdf) 

```sh {"id":"01HSWTGMD6D0WH6D6BF4GSMHYR"}
 m 7.0.7
```

```sh {"id":"01HSWTE18Y74DPEYNMZ983NRPQ"}
BIN=$(m bin 7.0.7)
mlaunch --replicaset --nodes 3 --port 30000 --binarypath $BIN --dir ./data
```

