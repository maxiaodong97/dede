import React, {Component} from 'react';
import HexViewer from './hexviewer';

export default class App extends Component {

    render() {
        let data = [];
        let i = 0;
        for (i = 0; i < 295; i++) {
            data.push(parseInt(Math.random() * 255));
        }
        return (
          <HexViewer buffer={data} rowLength={16} setLength={4} />
              );
    }

}
