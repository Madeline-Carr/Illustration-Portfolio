import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Footer from './js/footer';
import Home from './js/home';
import Animals from './js/animals';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <main className="content">
                    <Switch>
                        <Route path="/image-page" component={Home} />
                        <Route path="/about-me" component={Animals} />
                        <Route path="/contact" component={Home} />
                        <Route path="/menu" component={Home} />
                        <Route path="/home" component={Home} />
                        <Redirect exact from="/" to="/home" />
                        <Redirect to="/home" />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
