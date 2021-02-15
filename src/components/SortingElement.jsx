import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';

const SortingElement = ({ children, id, move }) => {
    const ref = useRef(null);
    
    const [{ opacity }, drag] = useDrag({
        item: { type: ItemTypes.CARD, id },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    });

    const [, drop] = useDrop({
        accept: ItemTypes.CARD, 
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.id;
            const hoverIndex = id;

            if(dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            const hoverClientX = clientOffset.X - hoverBoundingRect.right;


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

    return (<div 
        style={{ opacity }}
        ref={ref}
    >
            { children }
    </div>);
}

SortingElement.propTypes = {
    children: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
    move: PropTypes.func.isRequired,
}

export default SortingElement;