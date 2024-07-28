# Mongo DB Command

* show databases; list all db
* use collections_name; to select db

# mongo db query

* db.collection_name.find(); find all
* db.collection_name.find({name: 'Tom'}); find by name
* db.collection_name.find({age: {$gt: 20}}); find age > 20
* db.collection_name.find({age: {$lt: 20}}); find age < 20
* db.collection_name.find({age: {$gte: 20}}); find age >= 20
* db.collection_name.find({age: {$lte: 20}}); find age <= 20
* db.collection_name.find({age: {$gte: 20, $lte: 30}}); find age >= 20 and age <= 30
* db.collection_name.find({age: {$gte: 20, $lte: 30}, name: 'Tom'}); find age >= 20 and age <= 30 and name = 'Tom'
# mongo db update

* db.collection_name.update({name: 'Tom'}, {$set: {age: 30}}); update age to 30
* db.collection_name.update({name: 'Tom'}, {$inc: {age: 1}}); update age + 1
* db.collection_name.update({name: 'Tom'}, {$unset: {age: 1}}); delete age
* db.collection_name.update({name: 'Tom'}, {$push: {hobbies: 'reading'}}); add reading to hobbies
# mongo db delete

* db.collection_name.remove({name: 'Tom'}); delete Tom
* db.collection_name.remove({name: 'Tom'}, {justOne: true}); delete one Tom
* db.collection_name.remove({}); delete all

# mongo db aggregate

* db.collection_name.aggregate([{$group: {_id: '$name', total: {$sum: '$age'}}}]); group by name and sum age
* db.collection_name.aggregate([{$match: {age: {$gt: 20}}}, {$group: {_id: '$name', total: {$sum: '$age'}}}]); group by name and sum age where age > 20
# mongo db index

* db.collection_name.createIndex({name: 1}); create index on name
* db.collection_name.dropIndex({name: 1}); drop index on name
* db.collection_name.dropIndexes(); drop all indexes

# mongo db backup and restore

* mongodump --db mydb --collection mycollection --out /data/backup/
* mongorestore --db mydb --collection mycollection /data/backup/mydb/mycollection.bson/

# mongo db connection

* mongo --host localhost --port 27017
* mongo --host localhost --port 27017 --username myuser --password mypassword

### mongo projection
* db.collection_name.find({name: 'Tom'}, {age: 1, _id: 0}); find Tom and return age and not return _id
* db.collection_name.find({name: 'Tom'}, {age: 1, _id: 0}).limit(1); find Tom and return age and not return _id and limit 1
* db.collection_name.find({name: 'Tom'}, {age: 1, _id: 0}).skip(1); find Tom and return age and not return _id and skip 1