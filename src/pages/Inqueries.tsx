import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import ContactButtonModal from '../components/molecules/ContactButtonModal'

export default function Inqueries() {
  return (
    <>
      <Header />
      <div className='flex-col justify-center content-center bg-prime-blue-muted w-full'>
        <main className='w-full flex flex-col items-center'>
          <form action='' className='sm:w-11/12 ov-md:w-8/12 space-y-10'>
            <div className='mt-10'>
              <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>お問い合わせ</h1>
              <p className='text-sm'>以下のフォームに必要事項をご記入のうえ、「送信する」をクリックしてください</p>
            </div>

            <div>
              <label>
                <p className='text-sm'>お名前(必須)</p>
                <input className='w-full border-2 rounded' type='text' name='name'></input>
              </label>
            </div>

            <div>
              <label>
                <p className='text-sm'>メールアドレス(必須)</p>
                <input className='w-full border-2 rounded' type='mail-adress' name='name'></input>
              </label>
            </div>

            <div >
              <label>
                <p className='text-sm'>お問い合わせ内容(必須)</p>
                <textarea cols={40} rows={8} name='content' className='w-full border-2 rounded'></textarea>
              </label>
            </div>

            <div className='flex justify-center pb-10'>
              <button type='submit' className='rounded text-white h-11 w-48 bg-prime-blue-rich'>送信する</button>
            </div>
          </form >
          <ContactButtonModal />
        </main>
      </div>
      <Footer />
    </>
  )
}