import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { removeBg } from './src/api/removebackground.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Nenhuma imagem enviada.');
    }

    const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
    const resultData = await removeBg(blob);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename="no-bg.png"');
    res.send(Buffer.from(resultData));
  } catch (error) {
    console.error('Erro ao processar imagem:', error);
    res.status(500).send('Erro ao processar a imagem.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});