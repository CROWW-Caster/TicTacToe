import './index.css'
import { useEffect, useState } from 'react'
import Box from './Squares.jsx'
import boxes from './boxes.jsx'

export default function App() {
    const [squares, setSquares] = useState(boxes)
    const [changer, setChanger] = useState(true)
    const [winner, setWinner] = useState('undefined')
    const [line, setLine] = useState('')
    const players = [
        {
            id: 0,
            name: "O",
        },
        {
            id: 1,
            name: "X",
        }
    ]
    const winContidions= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    

    function checkWin(){
        for(var i = 0; i < winContidions.length; ++i){
            var winArray = winContidions[i];
            var x = winArray[0];
            var y = winArray[1];
            var z = winArray[2];

            if(squares[x].value !== '' && squares[y].value !== '' && squares[x].value === squares[y].value && squares[z].value !== '' && squares[y].value === squares[z].value){
                let value = squares[x].value === "X" ? 1 : 0
                setWinner(value)
                setLine(i)

            }
            else if(squares[0].on === false && squares[1].on === false && squares[2].on === false && squares[3].on === false && squares[4].on === false && squares[5].on === false && squares[6].on === false && squares[7].on === false && squares[8].on === false){
                setWinner('')
            }
        }
    
    }

    function changePlayer(){
        
        setChanger(prevChanger => !prevChanger)

    }

    
    function updateSquares(e){
        const player = Number(changer)
        const id = e.target.id;
        const value = players[player].name;
        
        
        setSquares(prevSquare => {
            return prevSquare.map(square => {
                return square.id === Number(id) ? { ...square, on: false, value } : square
            })
        })
    }
    
    function handleClick(e) {
        updateSquares(e);
        changePlayer();
        checkWin();
    }


    function restartBtn(){
        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return { ...square, on: true, value: ''}
            })
        })
        setWinner('undefined')
        setLine('')
    }

    
    var palyerTurn = "Player " + `${players[Number(changer)].name}'s` + " turn"
    useEffect(() => checkWin(), [squares])

    const squareElements = squares.map(square => {
        return <Box key={square.id} id={square.id} value={square.value} handleClick={handleClick} />
    })

    return (
        <div className=''>
            <div className='text-2xl text-center font-extrabold text-red-900 my-4'>{Number(winner) === winner ? <div className='h-8'> </div> : palyerTurn}</div>
            <div className='w-[292px] md:w-[392px] border-4 border-slate-500 mx-auto'>
                <div className='grid grid-flow-row grid-cols-3 relative'>
                    {line === 0 && <div className={`bg-white h-1.5 md:h-2 w-[270px] md:w-[364px] absolute top-[50px] md:top-[66px] left-2 rounded`}></div>}
                    {line === 1 && <div className={`bg-white h-1.5 md:h-2 w-[270px] md:w-[364px] absolute top-[142px] md:top-[188px] left-2 rounded`}></div>}
                    {line === 2 && <div className={`bg-white h-1.5 md:h-2 w-[270px] md:w-[364px] absolute top-[238px] md:top-[318px] left-2 rounded`}></div>}
                    {line === 3 && <div className={`bg-white h-1.5 md:h-2 w-[270px] md:w-[364px] absolute top-[142px] md:top-[188px] left-[-86px] md:left-[-116px] rounded rotate-90`}></div>}
                    {line === 4 && <div className={`bg-white h-1.5 md:h-2 w-[270px] md:w-[364px] absolute top-[142px] md:top-[188px] left-2 md:left-3 rounded rotate-90`}></div>}
                    {line === 5 && <div className={`bg-white h-1.5 md:h-2 w-[270px] md:w-[364px] absolute top-[142px] md:top-[188px] left-[104px] md:left-[138px] rounded rotate-90`}></div>}
                    {line === 6 && <div className={`bg-white h-1.5 md:h-2 w-[360px] md:w-[480px] absolute top-[142px] md:top-[188px] left-[-36px] md:left-[-48px] rounded rotate-45`}></div>}
                    {line === 7 && <div className={`bg-white h-1.5 md:h-2 w-[360px] md:w-[480px] absolute top-[142px] md:top-[188px] left-[-36px] md:left-[-48px] rounded rotate-225`}></div>}
                    {winner === "" && <div className='ease-in duration-1000 absolute rounded-xl border-2 font-extrabold font-serif text-[40px] md:text-6xl text-red-900 text-center top-[30%] left-[-18px] md:left-[-8px] bg-slate-500 w-[320px] md:w-[400px] h-24 py-[18px] md:h-32 md:py-[34px] px-2'>DRAW!!!</div>}
                    {Number(winner) === winner && <div className='ease-in duration-[5000ms] absolute rounded-xl border-2 font-extrabold font-serif md:text-6xl sm:text-[40px] text-red-800 text-center top-[30%] md:left-[-53px] sm:left-[-40px] max-[639px]:left-[-20px] max-sm:text-4xl max-sm:w-[320px] bg-slate-500 md:w-[500px] w-[360px] h-32 sm:h-24 sm:py-[16px] max-sm:h-24 py-[34px] max-sm:py-[25px] px-4:px-4'>Player {players[Number(winner)].name} wins!</div>}
                    {squareElements}
                </div>
            </div><br /><br />
            <div onClick={restartBtn}  className='mx-auto w-36 border border-emerald-50 rounded-2xl shadow-md shadow-slate-300 text-3xl text-center text-lime-800 py-2 font-bold font-sans bg-slate-400'>Restart</div>
        </div>
    )
}