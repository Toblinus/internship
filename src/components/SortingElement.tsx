import React, { RefObject, useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';

export type Props = {
    children: JSX.Element;
    id: number;
    move: (a: number, b: number) => void;
    type: string;
    allowDropRefs: any[]
};

const SortingElement: React.FC<Props> = ({ children, id, move, type, allowDropRefs }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const [{ opacity }, drag] = useDrag({
        item: { type, id },
        canDrag: true,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    });

    
    const [, drop] = useDrop({
        accept: type, 
        hover: (item: {id: number, type: string}, monitor) => {
            if (!ref.current) {
                return;
            }
            
            const dragIndex = item.id;
            const hoverIndex = id;
            
            if(dragIndex === hoverIndex) {
                return;
            }
            
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            
            const clientOffset = monitor.getClientOffset();
            
            const hoverClientY = (clientOffset as XYCoord).x - hoverBoundingRect.top;
            const hoverClientX = (clientOffset as XYCoord).y - hoverBoundingRect.right;
            
            
            if (dragIndex < hoverIndex && (hoverClientY < hoverMiddleY || hoverClientX > hoverMiddleX)) {
                return;
            }
            
            if (dragIndex > hoverIndex && (hoverClientY > hoverMiddleY || hoverClientX < hoverMiddleX)) {
                return;
            }
            
            move?.(hoverIndex, dragIndex);
            item.id = hoverIndex;
        }
    })
    
    drag(drop(ref));
    React.useEffect(() => {
        if(!Array.isArray(allowDropRefs)){
            return;
        }
        for(let i = 0; i < (allowDropRefs.length || 0); i++) {
            allowDropRefs[i] = drop(allowDropRefs[i]);
        }
    }, [allowDropRefs, drop]);
    
    return (<div 
        style={{ opacity }}
        ref={ref}
        >
            { children }
    </div>);
}

export default SortingElement;