const express = require('express');
const dayjs = require('dayjs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware simple
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'hola aqui vicente desde vsc',
    now: dayjs().format('YYYY-MM-DD HH:mm:ss')
  });
});

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({ saludo: `¡Hola, ${nombre}!`, at: dayjs().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
