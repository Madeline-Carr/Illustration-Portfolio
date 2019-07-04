import React from 'react';
import ReactDOM from 'react-dom';
import Child from './js/childComponent';
import Header from './js/header';

import Footer from './js/footer';

const title = 'React is Working!';
const App = () => {
    return (
        <div>
            <Header />
            <h1>{title}</h1>
            <Child />

            <Footer />
        </div>
    );
};

export default App;
