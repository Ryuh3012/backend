import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "modulo",
    port: "5432",
});

export const createCases = async (req, res) => {

    try {
        const { detallesDelCaso,tipoDeCaso } = req.body;
        const respon = await pool.query(
            "INSERT INTO cases( detallesDelCaso,tipoDeCaso ) VALUES ($1, $2)", [detallesDelCaso,tipoDeCaso]
        );

        console.log(respon);
        res.json({
            message: "cases Add Succesfully",
            body: {
                case: {
                    detallesDelCaso,tipoDeCaso
                },
            },
        });
    } catch (error) {
        console.log(error)
    }

};

export const getCases = async (req, res) => {
    try {
        const respon = await pool.query("SELECT * FROM cases");
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
        const respon = await pool.query("SELECT * FROM cases WHERE id = $1", [id]);
        res.json(respon.rows);
    } catch (error) {
        console.log(error);
    }
};

export const deleteCases = async (req, res) => {
    try {
        const id = req.params.id;
        const respon = await pool.query("delete from cases where id= $1", [id]);
        res.json(`Cases ${id} deletd successfull`);
    } catch (error) {
        console.log(error);
    }
};

export const UpdateCases = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            detallesDelCaso,tipoDeCaso
        } = req.body;
        const respon = await pool.query(
            "UPDATE cases SET detallesDelCaso = $1, tipoDeCaso = $2 WHERE id = $3",
            [detallesDelCaso,tipoDeCaso, id]
        );
        console.log(respon);
        res.json("Cases update");
    } catch (error) {
        console.log(error);
    }
};
