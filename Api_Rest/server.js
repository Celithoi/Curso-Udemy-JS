/* eslint-disable import/no-extraneous-dependencies */
import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`escutando na porta ${port}`);
  console.log(`CRTL + Clique em HTTP://localhost:${port}`);
});
