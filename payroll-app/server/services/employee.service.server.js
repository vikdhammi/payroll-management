module.exports = function(app, models) {
    var employeeModel = models.employeeModel;

    console.log("emp srvx srvr");
    app.post("/api/add", createEmployee);
    app.get("/api/home", getAllEmployees);
    app.delete("/api/home/:employeeId", deleteEmployee);
    app.get("/api/home/:employeeId", getEmployeeById);
    app.put("/api/home/:employeeId", updateEmployee);
    app.delete("/api/home/:employeeId", deleteEmployee);

    function createEmployee(req, res) {
        var employee = req.body;

        console.log("in emp serv srvr");
        console.log(employee);
        employeeModel
            .createEmployee(employee)
            .then(function (employee) {
                res.json(employee);
            },
            function(err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function getAllEmployees(req, res) {
        employeeModel
            .getAllEmployees()
            .then(function (employees){
                res.json(employees);
            },
            function(err) {
                res.sendStatus(404).send(err);
            }
        );

    }

    function getEmployeeById(req, res) {
        var employeeId = req.params.employeeId;
        console.log("emp srvc srvr");
        employeeModel
            .getEmployeeById(employeeId)
            .then(function (employee) {
                res.send(employee);
            },
            function (error) {
                res.statusCode(404).send(error);
            });
    }

    function deleteEmployee(req, res) {
        employeeModel
            .deleteEmployee(employeeId)
            .then(function (stats) {
                res.send(200);
            },
            function(err) {
                res.sendStatus(404).send(err);
            }
        ) ;
    }

    function updateEmployee(req, res) {
        var employeeId = req.params.employeeId;
        var employee = req.body;

        console.log('server-side');
        employeeModel
            .updateEmployee(employeeId, employee)
            .then(function (stats) {
                res.send(200);
            },
            function(error) {
                res.statusCode(404).send(error);
            });
    }

    function deleteEmployee(req, res) {
        var employeeId = req.params.employeeId;

        employeeModel
            .deleteEmployee(employeeId)
            .then(function (stats) {
                console.log(stats);
                res.send(200);
            },
            function(err) {
                res.sendStatus(404).send(err);
            });
    }
};
