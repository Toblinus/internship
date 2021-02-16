import React, { useState } from "react";
import WrapperWithButtons from "./components/WrapperWithButtons";
import Board from "./components/Board";
import CardList from "./components/CardList";
import { SimpleModalForm } from './components/Modal';
import SortingElement from './components/SortingElement';

const boardValue = JSON.parse(
    localStorage.getItem('board-value')
) || [];

function App() {

    const [ cols, setColValue ] = useState(boardValue);
    const [ modal, setModal ] = useState();
    const hideModal = () => setModal(null);
    
    const setCol = (newCols) => {
        localStorage.setItem('board-value', JSON.stringify(newCols));
        setColValue(newCols);
    }

    const ModalForm = ({ onOk, fields, allowReset }) => (<SimpleModalForm
        fields={ fields }
        allowReset={allowReset}
        onOk={(data) => { 
            onOk(data);
            hideModal();
        }}
        onCansel={hideModal}
    />);

    const showModal = (fields, onOk, allowReset) => setModal(
        <ModalForm fields={fields} onOk={onOk} allowReset={allowReset} />
    );

    const moveCard = (listId, hoverId, dragId) => {
        if(hoverId === dragId) return;
        const tcols = [...cols];
        let ntasks = [...tcols[listId].tasks];

        
        const indexHover = hoverId;
        const indexDrag = dragId;
        
        const minIndex = Math.min(indexHover, indexDrag);
        const maxIndex = Math.max(indexHover, indexDrag);
        
        ntasks = [
            ...ntasks.slice(0, minIndex),
            ntasks[maxIndex],
            ...ntasks.slice(minIndex + 1, maxIndex),
            ntasks[minIndex],
            ...ntasks.slice(maxIndex + 1)
        ]
    
        tcols[listId].tasks = ntasks;
        setCol(tcols);
    }

    const moveCol = (hoverId, dragId) => {
        if(hoverId === dragId) return;

        const indexHover = hoverId;
        const indexDrag = dragId;

        const minIndex = Math.min(indexHover, indexDrag);
        const maxIndex = Math.max(indexHover, indexDrag);

        setCol([
            ...cols.slice(0, minIndex),
            cols[maxIndex],
            ...cols.slice(minIndex + 1, maxIndex),
            cols[minIndex],
            ...cols.slice(maxIndex + 1)
        ])
    }

    return (<div className='app'>
        { modal }
        <WrapperWithButtons
            hasToolbar={true} 
            buttons={[
                {
                    content: '+',
                    action: () => showModal([{
                            title: 'Название колонки',
                            name: 'colName'
                        }], ({ colName }) => {
                        setCol([...cols, {
                            title: colName,
                            id: Date.now(),
                            tasks: []
                        }]);
                    })
                    
                }
            ]}
        >
        <Board>
            { cols.map( (col, index) => col && <SortingElement
                key={col.id}
                move={moveCol}
                id={index}
            >
                <WrapperWithButtons
                        buttons={[
                            {
                                content: '+',
                                action: () => {
                                    showModal([
                                        {
                                            title: 'Заголовок задачи',
                                            name: 'header'
                                        }, {
                                            title: 'Описание',
                                            name: 'text',
                                            type: 'multiline'
                                        }
                                    ], (task) => {
                                        const newCols = [...cols];
                                        task.id = Date.now();
                                        newCols[index].tasks.push(task)
                                        setCol(newCols);
                                    })
                                }
                            },
                            {
                                content: 'Р',
                                action: () => {
                                    const newCols = [...cols];
                                    showModal(
                                        [{
                                            title: 'Название колонки',
                                            name: 'colName',
                                            value: newCols[index].title
                                        }],
                                        ({ colName }) => {
                                            newCols[index].title = colName;
                                            setCol(newCols);
                                        }
                                    );
                                    
                                }
                            },
                            {
                                content: 'x',
                                action: () => {
                                    const newCols = [...cols];
                                    newCols.splice(index, 1);
                                    setCol(newCols);
                                }
                            },
                        ]} 
                         
                    >
                    <CardList
                        header={col.title} 
                        tasks={col.tasks}
                        onTaskClick={({ header, text }, taskIndex) => {
                            showModal([
                                {
                                    title: 'Заголовок задачи',
                                    name: 'header',
                                    value: header
                                }, {
                                    title: 'Описание',
                                    name: 'text',
                                    type: 'multiline',
                                    value: text
                                }
                            ], (task) => {
                                const newCols = [...cols];
                                newCols[index].tasks[taskIndex] = task;
                                setCol(newCols);
                            })
                        }}
                        swapTasks={moveCard.bind({}, index)}
                        tasksButtons={[
                            {
                                content: 'x',
                                action: (idx) => {
                                    const newTasks = [...col.tasks];
                                    newTasks.splice(idx, 1);
                                    const newCols = [...cols];
                                    newCols[index].tasks = newTasks;
                                    setCol(newCols);
                                }
                            }
                        ]} />
                </WrapperWithButtons> 
                
            </SortingElement>) }
        </Board>
    </WrapperWithButtons>
    </div>);
}

export default App;
