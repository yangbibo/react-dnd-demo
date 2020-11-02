# 概念

React DnD 是一组 React 高阶组件，使用的时候只需要使用对应的 API 将目标组件进行包裹，即可实现拖动或接受拖动元素的功能。将拖动的事件转换成对象中对应状态的形式，不需要开发者自己判断拖动状态，只需要在传入的 spec 对象中各个状态属性中做对应处理即可。刚刚接触可能难以理解，真正熟悉用法之后会感觉很方便。

## 安装

需要安装react-dnd，react-dnd-html5-backend
react-dnd版本:^11.1.3(支持hooks写法)
react-dnd-html5-backend版本:^11.1.3(利用html5的拖放api)

### 关键API

**useDrag**：用于包装你需要拖动的组件，使组件能够被拖拽
**useDrop**：用于包装接收拖拽元素的组件，使组件能够放置
**DndProvider**：用于包装拖拽根组件

### 其他参数说明

**useDrag**：接受一个对象，返回结果为【collectedProps，drag】用drap包裹的dom可以被拖动，配置项有【begin(monitor),end(item, monitor),canDrag(monitor),isDragging(monitor),collect】
**useDrop**：接受一个对象，返回结果为【collectedProps，drop】用drap包裹的dom可以放置，配置项有【item，drop(item,monitor),hover(item, monitor),canDrop(item, monitor),collect】
**DragSourceMonitor**：内置方法【canDrag,isDragging,getItemType,getItem,getDropResult,didDrop,getInitialClientOffset,getInitialSourceClientOffset,getClientOffset,getDifferenceFromInitialOffset,getSourceClientOffset】
**DropSourceMonitor**：内置方法【canDrop,isOver,getItemType,getItem,getDropResult,didDrop,getInitialClientOffset,getInitialSourceClientOffset,getClientOffset,getDifferenceFromInitialOffset,getSourceClientOffset】