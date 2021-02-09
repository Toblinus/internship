import React, { useState } from "react";
import WrapperWithButtons from "./components/WrapperWithButtons";
import Board from "./components/Board";
import CardList from "./components/CardList";

function App() {
    const [ cols, setCol ] = useState([{
        title: 'This is title of column',
        tasks: [
            {
                header: 'This is first task',
                text: 'This is content of first task'
            }
        ]
    }])
    return (<WrapperWithButtons 
            buttons={[
                {
                    content: '+',
                    action: () => setCol([...cols, {
                            title: 'new col',
                            tasks: []
                        }])
                }
            ]}
        >
        <Board>
            { cols.map( (col, index) => <WrapperWithButtons
                    buttons={[
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
                    tasks={col.tasks} />
            </WrapperWithButtons> ) }
        </Board>
    </WrapperWithButtons>);
}

export default App;
