import React from 'react';
import Square from './square';
import { ItemTypes } from './constants';
import { useDrop } from 'react-dnd';
import {Overlay} from './overlay';

function BoardSquare({ x, y,knightPosition,setKnightPosition,children }) {
    const black = (x + y) % 2 === 1;
    const [{ isOver,canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: () => {
            setKnightPosition([x,y])
        },
        canDrop: () => {
            const [ox,oy] = knightPosition
            const dx = x-ox
            const dy = y-oy
            return (
                (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
                (Math.abs(dx) === 1 && Math.abs(dy) === 2)
            )
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    })
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}

export default BoardSquare;