//棋盘
import React from 'react'
import Knight from './knight';
import BoardSquare from './boardSquare';

//渲染单个格子的方法
function renderSquare(i, knightPosition,setKnightPosition) {
    const x = i % 8//横向坐标
    const y = Math.floor(i / 8)//纵向坐标
    // const isKnightHere = x === knightX && y === knightY
    // const black = (x + y) % 2 === 1//隔一个换颜色
    // const piece = isKnightHere ? <Knight /> : null
    //添加点击格子移动
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y} knightPosition={knightPosition} setKnightPosition={setKnightPosition}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    )
}

function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}

export default function Board({ knightPosition,setKnightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition,setKnightPosition))
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}