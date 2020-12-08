---
title: Install Mongo DB on Mac OS
date: "2018-08-05T22:40:32.169Z"
---

# Method 01

[Here](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-enterprise-on-os-x/) is the original doc link from Mongodb official website.

## Steps

### 1. Download mongo tar from [here](https://www.mongodb.com/try/download/enterprise?jmp=docs)

### 2. Extract the files from the downloaded archive.

```shell
$ tar -zxvf mongodb-osx-ssl-x86_64-enterprise-3.6.19.tgz
```

### 3. Ensure the binaries are in a directory listed in your PATH environment variable.

To do that run below commands
```shell
$ sudo cp /path/to/the/extracted-mongodb-directory/bin/* /usr/local/bin/
$ sudo ln -s  /path/to/the/extracted-mongodb-directory/bin/* /usr/local/bin/
```

### 4. Create the data directory.
```shell
$ sudo mkdir -p /usr/local/var/mongodb
```

### 5. Create the log directory.
```shell
$ sudo mkdir -p /usr/local/var/log/mongodb
```

### 6. Set permissions for the data and log directories
```shell
$ sudo chown my_mongodb_user /usr/local/var/mongodb
$ sudo chown my_mongodb_user /usr/local/var/log/mongodb
```
Where `my_mongodb_user` is your mac os user.
To check current logged in user, run
```shell
$ whoami
```

### 7. Run mongod with command-line param
```shell
$ mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
```

### 8. Run mongod with a configuration file
```shell
$ mongod --config /usr/local/etc/mongod.conf
```

### 9. Verify that MongoDB has started successfully.
```shell
$ ps aux | grep -v grep | grep mongod
```

### 10. Begin using MongoDB.
```shell
$ mongo
```

# Method 2


Follow this [How to setup MongoDB on MacOS](https://www.robinwieruch.de/mongodb-macos-setup) blog post by [@rwieruch](https://twitter.com/intent/follow?screen_name=rwieruch).


### Some other useful commands

Login to mongo shell:
```shell
$ mongo admin -u 'YOUR_ADMIN_USERNAME' -p 'YOUR_ADMIN_PASSWORD'

// OR

$ mongo localhost:27017/admin -u 'YOUR_ADMIN_USERNAME' -p 'YOUR_ADMIN_PASSWORD' --authenticationDatabase "admin"
```

Create admin user:

```shell
$ show dbs
$ use admin
$  db.createUser({user: "YOUR_ADMIN_USERNAME", pwd: "YOUR_ADMIN_PASSWORD", roles:["root"]})
```

## Referennces

-  [install-mongodb-enterprise-on-os-x](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-enterprise-on-os-x/)


Thanks!