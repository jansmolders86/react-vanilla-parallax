import React, {Component} from 'react';
import './App.sass';
import Parallax from './Parallax'

class App extends Component {
    render() {
        const images = [
            'https://raw.githubusercontent.com/jansmolders86/react-3D-parallax-card/master/public/images/bg.jpg',
            'https://raw.githubusercontent.com/jansmolders86/react-3D-parallax-card/master/public/images/front.png'
        ];

        return (
            <div id="prototype">
                <Parallax images={images} range={15} />;
            </div>
        );
    }
}

export default App;
