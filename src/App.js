import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container>
        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={3} sx={{ bgcolor: "#111111", height: "100vh" }}>

            </Grid>
            <Grid item xs={9} sx={{ bgcolor: "#222222", height: "100vh" }}>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ bgcolor: "#333333", height: "100vh" }}>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
