//整个有戏规则
//监听数据变化，执行
//初始位置

export function reducer(state,action) {
    switch(action.type) {
        case 'move':
            return action.knightPosition;
        default:
            return action.knightPosition;
    }
}


//检验是否能移动到目标位置（只能走L形）
export function canMoveKnight(toX, toY,orginPosition) {
    const [x, y] = orginPosition
    const dx = toX - x
    const dy = toY - y

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}