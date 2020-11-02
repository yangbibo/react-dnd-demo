import React from 'react';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import {ItemTypes} from './constants'

const sourceItem = [
    {type:ItemTypes.type,label:'item1',color:'red',id:'type1'},
    {type:ItemTypes.type,label:'item2',color:'blue',id:'type2'},
    {type:ItemTypes.type,label:'item3',color:'yellow',id:'type3'},
    {type:ItemTypes.type,label:'item4',color:'orange',id:'type4'},
]

function DragItem({id,color,label,type}) {
    const ref = useRef(null);
    const [,drag] = useDrag({
        item:{id,color,label,type},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })
    drag(ref)
    return <div ref={ref} key={id} className='source_item' style={{backgroundColor:color}}>{label}</div>
}

export default function Sources() {
    return <div className='source_container'>
        {
            sourceItem.map(item => {
                return <DragItem key={item.id} {...item}/>
            })
        }
    </div>
}
