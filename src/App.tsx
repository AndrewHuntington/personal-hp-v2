import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { deepPurple } from '@mui/material/colors';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    let theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: deepPurple[500],
            },
        },
    });

    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <header>
                    <Navbar />
                    <Paper elevation={1}>
                        <Hero />
                    </Paper>
                </header>
                <main>
                    <section>
                        <h1>Gallery</h1>
                    </section>
                    <section>
                        <h1>Contact</h1>
                    </section>
                </main>
                <footer>{/* footer here */}</footer>
            </Container>
        </ThemeProvider>
    );
}

export default App;
