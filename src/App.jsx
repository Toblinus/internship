import React, { useState } from "react";
import WrapperWithButtons from "./components/WrapperWithButtons";
import Board from "./components/Board";
import CardList from "./components/CardList";
import { SimpleModalForm } from './components/Modal';
import SortingElement from './components/SortingElement';
import getNowDate from './helpers/getNowDate';
import { ItemTypes } from './Constants';


import imgEdit from './imgs/edit.png';

import Task from './data/Task';
import { seconds2ShortDate } from './helpers/DateConverter';

// const task = new Task('title', 'desc', new Date(2021, 2, 3, 23, 59, 59, 999+1));
// console.log(task);
// console.log(task.getTimeLeft());
// console.log(seconds2ShortDate(task.getTimeLeft()))

// const boardValue = JSON.parse(
//     localStorage.getItem('board-value')
// ) || [];

function App() {
    const [ modal, setModal ] = useState();
    const hideModal = () => setModal(null);

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
            header = '', 
            text = '', 
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

    const editColModal = (callback, header = '') => {
        showModal([
            {
                title: 'Название колонки',
                name: 'colName',
                value: header
            }
        ], callback)
    }

    
    
    const [tasks, setTasks] = useState([]);
    const [groups, setGropus] = useState([]);
    
    const findIndexById = (id, map) => {
        for(let i = 0; i < map.length; i++) {
            if(map[i].id === id) return i;
        }
        return -1;
    }   
    
    const moveGroup = (hoverId, dragId) => {
        console.log('drag group');
        if(hoverId === dragId) return;
        
        const indexHover = findIndexById(hoverId, groups);
        const indexDrag = findIndexById(dragId, groups);
        
        const minIndex = Math.min(indexHover, indexDrag);
        const maxIndex = Math.max(indexHover, indexDrag);
        
        setGropus([
            ...groups.slice(0, minIndex),
            groups[maxIndex],
            ...groups.slice(minIndex + 1, maxIndex),
            groups[minIndex],
            ...groups.slice(maxIndex + 1)
        ])
    }
    
    const moveTask = (hoverId, dragId) => {
        console.log('drag task', hoverId, dragId);
        if(hoverId === dragId) return;
        
        const indexHover = findIndexById(hoverId, tasks);
        const indexDrag = findIndexById(dragId, tasks);

        const hoverTask = tasks[indexHover];
        const dragTask = tasks[indexDrag];

        const newTasks = [...tasks];

        if(hoverTask.groupId !== dragTask.groupId) {
            newTasks[indexDrag].groupId = hoverTask.groupId;
        }


        setTasks(newTasks);
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
                            setGropus([...groups, {
                                header: colName,
                                id: Date.now()
                            }])
                        }
                    )                   
                }
            ]}
        >
            <Board>
                {groups.map( ({ header, id }, index) => <SortingElement
                        key={id}
                        move={moveGroup}
                        id={id}
                        type={ItemTypes.COLUMN}
                    >
                    <WrapperWithButtons
                                buttons={[
                                    {
                                        content: '+',
                                        action: () => editTaskMoval((task) => {
                                            task.id = Date.now();
                                            task.groupId = id;
                                            setTasks([...tasks, task])
                                        })
                                    },
                                    {
                                        content: (
                                            <img src={imgEdit} alt='Р' />
                                        ),
                                        action: () => {
                                            editColModal(
                                                ({ colName }) => {
                                                    const newCols = [...groups];
                                                    newCols[index].header = colName;
                                                    setGropus(newCols);
                                                }, header
                                            );
                                            
                                        }
                                    },
                                    {
                                        content: 'x',
                                        mode:'destructive',
                                        action: () => {
                                            const newCols = [...groups];
                                            newCols.splice(index, 1);
                                            setGropus(newCols);
                                        }
                                    },
                                ]} 
                                
                            ><CardList
                        header={header}
                        onTaskClick={(task, id) => editTaskMoval((newTask) => {
                            newTask.id = id;
                            let index = -1;
                            tasks.find((item, ind) => {
                                if(item.id !== id) return false;
                                
                                index = ind;
                                return true;
                            });
                            
                            if(index < 0) {
                                return;
                            }
                            
                            const newTasks = [...tasks];
                            newTask.groupId = newTasks[index].groupId;
                            newTasks[index] = newTask;
                            setTasks(newTasks)
                        }, task)}
                        swapTasks={moveTask}
                        tasks={tasks.filter(task => task.groupId === id).map(task => {
                            const newTask = {...task};
                            delete newTask.groupId;
                            return newTask;
                        })}
                        tasksButtons={[
                            {
                                content: 'x',
                                mode:'destructive',
                                action: (idx) => {
                                    const newTasks = [...tasks];
                                    const indexTask = findIndexById(idx, tasks);
                                    newTasks.splice(indexTask, 1);
                                    setTasks(newTasks);
                                }
                            }
                        ]} 
                    />
                    </WrapperWithButtons>
                </SortingElement>)}
            </Board>
        </WrapperWithButtons>
    </div>);
}

export default App;
