import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="wrapper">
            <div className="gridThree">
                <div className="imgBox">
                    <Link to="/animals">
                        <img
                            src="./images/AnimalCover.jpg"
                            src="./images/AnimalCover.jpg"
                            className="topicImage"
                            alt="Tiger"
                        />
                        <h2>Animals</h2>
                        <h3>2018-2019</h3>
                    </Link>
                </div>

                <div className="imgBox">
                    <Link to="/history">
                        <img
                            src="./images/HistoryCover.png"
                            className="topicImage"
                            alt="Nighthawks"
                        />
                        <h2>Art History Studies</h2>
                        <h3>2018</h3>
                    </Link>
                </div>
                <div className="imgBox">
                    <Link to="/vectorArt">
                        <img
                            src="./images/VectorCover.png"
                            className="topicImage"
                            alt="Mermaid Family"
                        />
                        <h2>Vector Illustration</h2>
                        <h3>2018-2019</h3>
                    </Link>
                </div>

                <div className="imgBox">
                    <img
                        src="./images/TraditionalCover.png"
                        className="topicImage"
                        alt="Girl in Wolf Costume"
                    />
                    <h2>Traditional Art</h2>
                    <h3>2018-2019</h3>
                    <p class="gray">Coming Soon</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
