import React from 'react';

const Footer = () => (
    <React.Fragment>
        <footer className="footer">
            We made this website to amplify the voices of the BLM movement, and we plan to add more functionalities in
            the near future. If you have any feature suggestions or resources to share, please DM{' '}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/oddrilynn">
                @oddrilynn
            </a>{' '}
            or{' '}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/4shub">
                @4shub
            </a>{' '}
            on Twitter.
        </footer>
        <footer className="footer">
            This code is open source (MIT), feel free to look through the code{' '}
            <a rel="noreferrer" target="_blank" href="https://github.com/4shub/boost.avoice.info">
                here
            </a>
            .
        </footer>
    </React.Fragment>
);

export default Footer;
