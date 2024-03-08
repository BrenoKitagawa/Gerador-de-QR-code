
const container=document.querySelector('.container')
const qrCodeBtn=document.querySelector('#qr-forme button')

const qrcodeInput=document.querySelector('#qr-forme input')

const qrCodeImg=document.querySelector('#qr-code img')

function gerateQrCode(){

    let qrcodeInputValue=qrcodeInput.value

    if(!qrcodeInputValue) return;

    qrCodeBtn.textContent="Gerando Codigo..."

    qrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputValue}`

   qrCodeImg.addEventListener('load',()=>{
    container.classList.add('active')

    qrCodeBtn.textContent="Codigo Criado"
   })

}   

qrCodeBtn.addEventListener('click',()=>{
gerateQrCode()
})


qrcodeInput.addEventListener('keydown',(e)=>{
    if(e.code === "Enter"){
        gerateQrCode()
    }
    })




    qrcodeInput.addEventListener('keyup',()=>{
        if(!qrcodeInput.value){

            container.classList.remove('active')

            qrCodeBtn.textContent="gerar QR code"

        }
    })