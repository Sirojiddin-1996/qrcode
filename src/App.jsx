import QRCode from 'qrcode'
import {useState} from 'react'

function App() {
  const [qrcode, setQrcode] = useState('');
  const [url, setUrl] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url)=>{
      if(err) return console.log(err);

      console.log(url);
      setQrcode(url)
    })
  }

  return (
    <div className='app'>
      <h1>QR Kod</h1>
      <input  
            type='text' 
            placeholder="Matin yoki url kiriting.."
            value={url}
            onChange={(e)=>setUrl(e.target.value)} />
      <button className='btn-4' onClick={GenerateQRCode}><span>Yaratish</span></button>
      {qrcode && <>
        <img src={qrcode} />
        <a className='btn-9' href={qrcode} download = 'qrcode.png'><span>Yuklab olish</span></a>
        </>}
      
    </div>
  )
}

export default App
