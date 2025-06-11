const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "trivago_db"
});

app.post("/create", (req, res) => {
  const { usuario, nombre, apellido, correo, nroDocumento, password, id_tipo } = req.body;

  db.query(
    "INSERT INTO usuarios (usuario, nombre, apellido, correo, password, id_tipo) VALUES (?,?,?,?,?,?)",
    [usuario, nombre, apellido, correo, nroDocumento, password, id_tipo],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al insertar usuario");
      } else {
        res.send("Usuario registrado con éxito");
      }
    }
  );
});

app.listen(5000, () => {
    console.log("Backend activo en puerto 5000");
  });
