import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import './DraggableList.css';

import styled from 'styled-components';
import { 
  ArrowBidirectionalUpDown24Regular,
 
} 
from "@fluentui/react-icons";

const iconStyleProps: IFluentIconsProps = {
    primaryFill: "blue",
};

let array = [
    {
        id: '1',
        title: 'Curb Your Enthusiasm',
        thumb: '/path/to/icon'
    },
    {
        id: '2',
        title: 'Eddie Izzard',
        thumb: '/path/to/icon'
    },
    {
        id: '3',
        title: 'Bill & Teds Excellent Adventure',
        thumb: '/path/to/icon'
    },
    {
        id: '4',
        title: 'Potato Skins',
        thumb: '/path/to/icon'
    }
];



const DraggableList = (props) => {

    const TaskList = styled.div`
        padding: 8px;
        width: 35%;
    `;
    const PlaceHolder = styled.div`
        
    `;
    const Item = styled.div`
        padding: 8px;
        border-bottom: 1px solid lightgray;
        background-color:${props => (props.isDragging ? 'transparent': 'white')};
        margin-top: 2px;
        display:flex;
        justify-content:space-between;
    `;

    const [list, updateList] = useState(array);



    let onDragEnd = (result) => {

        const {destination, source, draggableId} = result;

        if(!destination){
            return;
        }

        if(destination.droppableId === source.droppableId &&
        destination.index === source.index
        )
        {
            return;
        }

        const items = Array.from(list);
        const [reorderedItem] = items.splice(source.index, 1);
        items.splice(destination.index, 0, reorderedItem);

        updateList(items);

    }


  return (
<>
      <h2 style={{marginTop: '70px'}}>Draggable List of Overrated Things</h2>

    <DragDropContext onDragEnd={(result)=>onDragEnd(result)}>
            <Droppable droppableId="drop-id-1">

                {(provided, snapshot)=>(

                    <TaskList className="myList"  ref={provided.innerRef} {...provided.draggableProps} >
                            {list.map(({id, title, thumb}, index) => {
                                return (
                                     <Draggable
                                      draggableId={id} 
                                      index={index}
                                      >
                                        {(provided, snapshot)=>(
                                        
                                            <Item 
                                                key={id} 
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                isDragging={snapshot.isDragging}
                                            >
                                                {index+1 +". " + title}
                                                <ArrowBidirectionalUpDown24Regular {...iconStyleProps}/>
                                            </Item>
                                        
                                        )}
                                    </Draggable>
                                );
                            })}
                            <PlaceHolder
                                isDragging={snapshot.isDragging}
                            >
                                {provided.placeholder}
                            </PlaceHolder>
                    </TaskList>

                )}
            </Droppable>
    </DragDropContext>
    </>
  )
}

export default DraggableList;
