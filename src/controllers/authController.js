exports.login = (req, res) => {
    const { username, password } = req.body;
    // Simulación de validación
    if (username === "admin" && password === "1234") {
        req.session.user = username; // Crear sesión
        return res.status(200).json({ message: "Autenticación exitosa" });
    }
    res.status(401).json({ message: "Credenciales incorrectas" });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.json({ message: "Sesión cerrada" });
};
