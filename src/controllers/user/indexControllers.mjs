import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "modulo",
    port: "5432",
});

export const createUser = async (req, res) => {

    try {
        const { cedula, nombre, apellido, segundoNombre, segundoApellido, telefono, email, direccion } = req.body;
        const respon = await pool.query(
            "INSERT INTO users( cedula, nombre, apellido, segundoNombre, segundoApellido, telefono, email, direccion ) VALUES ($1, $2, $3,$4,$5,$6,$7,$8)", [cedula, nombre, apellido, segundoNombre, segundoApellido, telefono, email, direccion]
        );

        console.log(respon);
        res.json({
            message: "user Add Succesfully",
            body: {
                user: {
                    cedula, nombre, apellido, segundoNombre, segundoApellido, telefono, email, direccion
                },
            },
        });
    } catch (error) {
        console.log(error)
    }

};

export const getUser = async (req, res) => {
    try {
        const respon = await pool.query("SELECT * FROM users");
        return res.status(200).json({
            res: respon?.rows
        });  
    } catch (error) {
        console.log(error)
    }
   
};

export const getConsul = async (req, res) => {
    try {
        const id = req.params.id;
        const respon = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        res.json(respon.rows);
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const respon = await pool.query("delete from users where id= $1", [id]);
        res.json(`User ${id} deletd successfull`);
    } catch (error) {
        console.log(error);
    }
};

export const UpdateUser = async (req, res) => {
    try {
        const id = req.params.idUser;
        const {
            name,
            email
        } = req.body;
        const respon = await pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3",
            [name, email, id]
        );
        console.log(respon);
        res.json("user update");
    } catch (error) {
        console.log(error);
    }
};
