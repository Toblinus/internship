import React, { useState } from "react";
import WrapperWithButtons from "./components/WrapperWithButtons";
import Board from "./components/Board";
import CardList from "./components/CardList";
import { SimpleModalForm } from './components/Modal';
import SortingElement from './components/SortingElement';
import getNowDate from './helpers/getNowDate';

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
    
    const editTaskMoval = (callback, { 
            header = "", 
            text = "", 
            date = getNowDate(),
            isChecked = false 
        } = {}) => {
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
            }, {
                title: 'Дата',
                name: 'date',
                type: 'date',
                value: date
            }, {
                title: 'Выполнено',
                name: 'isChecked',
                type: 'checkbox',
                checked: isChecked
            }
        ], callback)
    }

    const editColModal = (callback, header = "") => {
        showModal([
            {
                title: 'Название колонки',
                name: 'colName',
                value: header
            }
        ], callback)
    }

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
                    action: () => editColModal(
                        ({ colName }) => {
                            setCol([...cols, {
                                title: colName,
                                id: Date.now(),
                                tasks: []
                            }])
                        }
                    )                   
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
                                action: () => editTaskMoval((task) => {
                                    const newCols = [...cols];
                                    task.id = Date.now();
                                    newCols[index].tasks.push(task)
                                    setCol(newCols);
                                })
                            },
                            {
                                content: 'Р',
                                action: () => {
                                    const newCols = [...cols];
                                    editColModal(
                                        ({ colName }) => {
                                            newCols[index].title = colName;
                                            setCol(newCols);
                                        }, newCols[index].title
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
                        onTaskClick={(oldTask, taskIndex) => {
                            editTaskMoval((task) => {
                                const newCols = [...cols];
                                newCols[index].tasks[taskIndex] = {
                                    ...task, 
                                    id: newCols[index].tasks[taskIndex].id
                                };
                                setCol(newCols);
                            }, oldTask);
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
