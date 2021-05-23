import AppealCard from '../molecules/AppealCard'

const AppealCardBoard = () => (
    <div className='flex flex-col items-center w-11/12 bg-white shadow-lg'>
        <div className='flex-col text-sm my-4'>イベントや見学に参加することで、<br/> より詳しく知ることができます</div>
        <div className='h-4/5 flex flex-col items-center space-y-4 pb-4'>
            <AppealCard src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'>
                <div>より詳細な臨床情報や 研究内容に触れてみましょう！</div>
                <div>診療科公式ホームページ→</div>
            </AppealCard>
            <AppealCard src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'>
                <div>最新の情報をチェックして みましょう！</div>
                <div>イベントページ→</div>
            </AppealCard>
            <AppealCard src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'>
                <div>あなたの希望するイベントを 開いてもらえるかも…？</div>
                <div>イベントの提案をする→</div>
            </AppealCard>
            <AppealCard src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'>
                <div>自分だけの質問をしてみましょう！</div>
                <div>見学申し込みをする→</div>
            </AppealCard>
        </div>
    </div>
)

export default AppealCardBoard