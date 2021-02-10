import React, { useState } from "react";
import WrapperWithButtons from "./components/WrapperWithButtons";
import Board from "./components/Board";
import CardList from "./components/CardList";
import ModalBase from './components/ModalBase';

function App() {
    const [ cols, setCol ] = useState([]);
    const [ modal, setModal ] = useState();
    const hideModal = () => setModal(null);

    return (<div className='app'>
        { modal }
        <WrapperWithButtons
            hasToolbar={true} 
            buttons={[
                {
                    content: '+',
                    action: () => {
                        const okFunc = () => {
                            setCol([...cols, {
                                title: 'new col',
                                tasks: []
                            }]);
                            hideModal();
                        };

                        const modal = (<ModalBase 
                            onCancel={hideModal}
                            actions={[
                                {
                                    content: 'OK',
                                    action: okFunc
                                }, {
                                    content: 'Cancel',
                                    action: hideModal
                                }
                            ]}
                        >
                            <label htmlFor="modalWindowOfInputColName">Название колонки</label>
                            <input type="text" id='modalWindowOfInputColName'/>
                        </ModalBase>);

                        setModal(modal);
                    }
                }
            ]}
        >
        <Board>
            { cols.map( (col, index) => <WrapperWithButtons
                    buttons={[
                        {
                            content: 'x',
                            action: () => {
                                const newCols = [...cols];
                                newCols.splice(index, 1);
                                setCol(newCols);
                            }
                        },
                        {
                            content: '+',
                            action: () => {
                                const newCols = [...cols];
                                newCols[index].tasks.push({
                                    header: 'new task',
                                    text: 'content of new task'
                                })
                                setCol(newCols);
                            }
                        }
                    ]} 
                    key={index} 
                >
                <CardList
                    header={col.title} 
                    tasks={col.tasks}
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
            </WrapperWithButtons> ) }
        </Board>
    </WrapperWithButtons>
    </div>);
}

export default App;
