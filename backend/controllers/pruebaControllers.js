

export const prueba = async (req, res) => {
    try {
        res.status(200).json({ message: "Hello, World!" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
}