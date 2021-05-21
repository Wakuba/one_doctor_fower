import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import TabMenu from "../components/organisms/TabMenu"
import Tag from '../components/atoms/Tag'
import CardBoard from '../components/organisms/CardBoard'
import { ReactNode, useContext } from 'react'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

const EachDepartPage = () => {
    const isPageSmall = useContext(ScreenWidthContext)
    const Button = ({ children }: {children: ReactNode}) => (
        <button className='text-white rounded bg-prime-blue-rich'>{ children }</button>
    )
    return (
        <div>
            <Header  />
            <main className=''>
                <div>
                    <div className='text-white' >筑波大学附属病院　循環器内科</div>
                    <p className='text-white'>University of Tsukuba Hospital -cardiovascular medicine</p>
                    <div>
                        <Tag>筑波大学附属病院</Tag>
                        <Tag>循環器内科</Tag>
                    </div>
                </div>

                <div className='relative bg-white' >
                    <div>
                        <div className='text-prime-blue-rich border-prime-blue-rich'>筑波大学附属病院　循環器内科イチオシポイント</div>
                        <div >
                            <div >教育：</div>
                            <div>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                            <div >臨床：</div>
                            <div>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                            <div >研究：</div>
                            <div>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                        </div>
                    </div>
                    <div className='h-24 w-full absolute z-20' ></div>
                    {/* divShadow: 'inset 0px 60px 40px -7px white' */}
                    <img className='w-full h-auto z-10' src='data:image/jpeg;base64,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'></img>
                </div>

                <div className='w-full'>
                    <CardBoard/>
                </div>

                <TabMenu/>

                <div>
                    <div >イベントや見学を通じて診療科について理解を深めましょう</div>
                    <Button>見学申し込みをする→</Button>
                    <Button>イベントのページを見る</Button>
                    <Button>イベントの提案をする→</Button>
                    <div >詳しい情報については診療科のホームページをご覧ください</div>
                    <Button>診療科公式ページ→→</Button>
                </div>

            </main>
            <Footer isPageSmall={isPageSmall} />
        </div>
  )
}

export default EachDepartPage
