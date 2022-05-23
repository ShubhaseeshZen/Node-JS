var mongodb = require('mongodb');

var connected = false;
var db = null;

mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(connection => {
    connected = true;
    db = connection.db('demo');
    console.log("DB Conection successful");
}).catch(error => {
    console.log("Error in connecting to DB");
});

async function employeesCollection() {
    if (connected) {

        let jsonResponse = {
            "employees_list": [],
        };

        const employeesCollectionArray = await db.collection('employee').find().toArray();

        employeesCollectionArray.forEach(element => {
            let employee = {}
            employee['id'] = element['id'];
            employee['empname'] = element['empname'];
            employee['empage'] = element['empage'];
            employee['department'] = element['department'];
            employee['address'] = element['address'];
            employee['salary'] = element['salary'];

            jsonResponse.employees_list.push(employee);
        });

        return jsonResponse;

    } else {
        return null;
    }
}

module.exports = { employeesCollection };