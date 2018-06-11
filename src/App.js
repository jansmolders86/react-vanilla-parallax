import React, {Component} from 'react';
import './App.sass';
import Parallax from './Parallax'

class App extends Component {
    render() {
        const images = [
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer7.jpg',
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer6.png',
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer5.png',
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer4.png',
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer3.png',
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer2.png',
            'https://raw.githubusercontent.com/jansmolders86/react-vanilla-parallax/master/public/images/layer1.png',

        ];

        return (
            <div id="prototype">
                <Parallax images={images} range={15} />;
            </div>
        );
    }
}

export default App;
