import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div id="footer" class="container">
                <h2>You can also find me here!</h2>

                <div id="social">
                    <a href="https://github.com/Madeline-Carr" target="_blank">
                        <i class="fab fa-github-square fa-lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/madeline-carr-19204a142/"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin fa-lg" />
                    </a>
                    <a href="https://dribbble.com/MadelineCarr" target="_blank">
                        <i class="fab fa-dribbble-square fa-lg" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <i class="fab fa-instagram fa-lg" />
                    </a>

                    <a href="mailto:madelinencarr@Gmail.com?Subject=Hello">
                        <i class="fas fa-envelope-square fa-lg" />
                    </a>

                    <p>
                        Copyright © 2019 Madeline Carr • Richmond based Web
                        Developer
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
