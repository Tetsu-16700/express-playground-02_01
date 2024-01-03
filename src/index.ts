import express from "express";

const app = express();
const port = 3000;

// ROUTING

// METOD (GET, POST, PATH, DELETE, PUT ...) + PATH (dominio.com/note/10?special=true)
app.get("/", (req, res) => {
    // manejar solicitud GET a '/'
    // Lógica para manejar una solicitud GET a '/users'
  console.log(`${req.method} ${req.url}`);
  //   res.send("Hola Mundo con Express y TypeScript!");
  // Respuesta formato JSON
  res.json({ res: "Hola mundo" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
