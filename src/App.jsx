import { Component } from 'react'
import './App.css'
import Card from "./components/Card";
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <>
                <main>
                    <Card /> 
                </main>
                <Footer />
            </>
        );
    }
}

export default App
