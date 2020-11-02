import React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Sources from './source';
import Container from './container';
import './index.less';

const Demo2 = () => {
    return (
        <div className='demo2'>
            <DndProvider
                backend={HTML5Backend}
            >
                <Sources/>
                <Container/>
            </DndProvider>
        </div>
        
    )
}

export default Demo2;