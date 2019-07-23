import React from 'react';

const ImagePage = () => {
    return (
        <div className="wrapper">
            <div className="gridThree">
                <div className="imgBox">
                    <img
                        src="./images/Animals/Tiger.png"
                        className="topicImage"
                        alt="Tiger"
                    />
                    <h2>Tiger</h2>
                </div>
                <div className="imgBox">
                    <img
                        src="./images/Animals/Zebra.png"
                        className="topicImage"
                        alt="Zebra"
                    />
                    <h2>Zebra</h2>
                </div>
                <div className="imgBox">
                    <img
                        src="./images/Animals/Lion.png"
                        className="topicImage"
                        alt="Lion"
                    />
                    <h2>Lion</h2>
                </div>
                <div className="imgBox">
                    <img
                        src="./images/Animals/Snake.png"
                        className="topicImage"
                        alt="Snake"
                    />
                    <h2>Snake</h2>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;
