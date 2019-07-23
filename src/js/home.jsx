import React from 'react';

const Home = () => {
    return (
        <div className="wrapper">
            <div className="gridThree">
                <div className="imgBox">
                    <img
                        src="./images/TigerSq.jpg"
                        className="topicImage"
                        alt=""
                    />
                    <h2>Animals</h2>
                    <h3>2018</h3>
                    <p>This is a illustration of a tiger.</p>
                </div>
                <div className="imgBox">
                    <img
                        src="./images/HistoryCover.png"
                        className="topicImage"
                        alt=""
                    />
                    <h2>Art History Studies</h2>
                    <h3>2018</h3>
                    <p>This is a illustration of a tiger.</p>
                </div>
                <div className="imgBox">
                    <img
                        src="./images/VectorCover.png"
                        className="topicImage"
                        alt=""
                    />
                    <h2>Vector Illustration</h2>
                    <h3>2018</h3>

                    <p>This is a illustration of a tiger.</p>
                </div>

                <div className="imgBox">
                    <img
                        src="./images/TraditionalCover.png"
                        className="topicImage"
                        alt=""
                    />
                    <h2>Traditional Art</h2>
                    <h3>2018</h3>
                    <p>This is a illustration of a tiger.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
