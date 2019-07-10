import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Footer from './js/footer';
import Home from './js/home';
import Animals from './js/animals';
import Contact from './js/contact';

const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <Header />
                <main className="content">
                    <Switch>
                        <Route path="/about-me" component={Animals} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/home" component={Home} />
                        <Redirect exact from="/" to="/home" />
                        <Redirect to="/home" />
                        <Route exact path="/" component={Animals} />
                    </Switch>
                </main>
                <Footer />
            </HashRouter>
        </React.Fragment>
    );
};

export default App;
