const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuración de Sesiones
app.use(session({
  secret: 'mi-clave-secreta',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.static('public'));

// Uso de Rutas Organizadas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
