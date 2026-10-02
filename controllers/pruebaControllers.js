

export const prueba = async (req, res) => {
    try {
        res.json({ message: "Hello, World!" });
    } catch (error) {
        res.json({ message: "Error en el servidor" });
    }
}