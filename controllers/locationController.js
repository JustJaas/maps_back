const { response } = require("express");
const { dbConnection } = require("../database/connection");

const getData = async ( req, res = response ) => {
    dbConnection.query("SELECT * FROM ubicaciones", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json({
            ok: true,
            data: result,
        });
    });
}

const postData = async ( req, res = response ) => {
    const {locations}  = req.body;
    console.log(locations);

    locations.forEach((item) => {
        const query = 'INSERT INTO ubicaciones (latitude, longitude) VALUES (?, ?)';
        const values = [item.latitude, item.longitude];
        dbConnection.query(query, values, (error, results, fields) => {
            if (error) {
                console.error('Error al insertar en la base de datos:', error);
            } else {
                console.log('Registro insertado exitosamente');
            }
        });
    });
}


module.exports = {
    getData,
    postData,
}