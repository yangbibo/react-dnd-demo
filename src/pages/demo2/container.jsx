import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {ItemTypes} from './constants'

function DropItem({olnyId,type,color,label,delItem,moveItem}){
    const ref = useRef(null);
    const [{isOver},drop] = useDrop({
        accept:ItemTypes.type,
        collect: monitor => ({
            isOver: !!monitor.isOver()
        }),
        drop:(item) => {
            moveItem(item,olnyId)
        }
    })
    const [,drag] = useDrag({
        item:{olnyId,color,label,type},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })
    const handleDel = (id) => {
        delItem(id)
    }
    drag(drop(ref));
    return <div ref={ref} key={olnyId} className={`drop_item ${!!isOver && 'hover'}`} style={{backgroundColor:color}}>
        {label} - {olnyId}
        <span onClick={()=>{handleDel(olnyId)}}> X </span>
    </div>
}

export default function Container() {
    const [dragItemList,setDragItemList] = useState([]);
    const ref = useRef(null);
    const [,drop] = useDrop({
        accept:ItemTypes.type,
        drop:(item,monitor)=>{
            const didDrop = monitor.didDrop();//是否已经执行了drop（避免子组件的drop重复触发两次）
            if (didDrop) {
                return;
            }else{
                const newDragItemList = [...dragItemList];
                newDragItemList.push({
                    ...item,
                    olnyId:new Date().getTime()
                });
                setDragItemList(newDragItemList);
            }
        }
    })
    const handleMove = (moveItem,toKey) => {
        if(moveItem.olnyId){
            //表示拖动的是当前容器内元素(两个移动的下标)
            const newDragItemList = [...dragItemList];
            const toindex = newDragItemList.findIndex(item => item.olnyId === toKey);
            const moveIndex = newDragItemList.findIndex(item => item.olnyId === moveItem.olnyId);
            if(toindex>moveIndex){
                newDragItemList.splice(toindex+1,0,moveItem);
                newDragItemList.splice(moveIndex,1);
            }else{
                newDragItemList.splice(moveIndex,1);
                newDragItemList.splice(toindex+1,0,moveItem);
            }
            setDragItemList(newDragItemList)
        }else{
            //新增
            const newDragItemList = [...dragItemList];
            const index = newDragItemList.findIndex(item => item.olnyId === toKey);
            newDragItemList.splice(index+1,0,{...moveItem,olnyId:new Date().getTime()});
            setDragItemList(newDragItemList);
        }
    }
    const handleDel = (olnyId) => {
        setDragItemList([...dragItemList].filter(item => item.olnyId !== olnyId))
    }
    drop(ref)
    return <div ref={ref} className='container'>
        {
            dragItemList.map(item => {
                return <DropItem moveItem={handleMove} delItem={handleDel} key={item.olnyId} {...item}/>
            })
        }
    </div>
}