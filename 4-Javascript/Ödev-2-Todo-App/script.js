let inputDOM= document.querySelector('#inputText')
let buttonDOM= document.querySelector('#ekleButton')
let listDOM= document.querySelector('#taskList')
buttonDOM.addEventListener('click',addItem)


function addItem(){
   
if (inputDOM.value == "")  {   
        $(".error").toast("show"); 
} 
      
      
else {
        $(".success").toast("show");

        let butDOM=document.createElement('button')
        let aDOM =document.createElement('a')
        let liPiece = document.querySelector('#taskList').getElementsByTagName('a').length
    


    if (liPiece%2 ==1) {
            aDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center","list-group-item-dark")
            aDOM.innerHTML=inputDOM.value
            aDOM.style.cursor="pointer"
            aDOM.style.fontWeight="bold"
            // Silme Butonu Görünümü ve A(li) içine eklenecek.
            aDOM.append(butDOM)
            butDOM.style.width="30px"
            butDOM.classList.add("button", "btn-danger" ,"btn-sm")
            butDOM.innerHTML="X"
            //A(li) listemizin içine entegre edilecek.
            listDOM.append(aDOM)
            //Görev yerinin text'i Sıfırlanacak
            inputDOM.value=""
                        
        }


    else{
            aDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center","list-group-item-white")
            aDOM.innerHTML=inputDOM.value
            aDOM.style.cursor="pointer"
            aDOM.style.fontWeight="bold"
            // Silme Butonu Görünümü ve A(li) içine eklenecek.
            aDOM.append(butDOM)
            butDOM.style.width="30px"
            butDOM.classList.add("button", "btn-danger" ,"btn-sm")
            butDOM.innerHTML="X"
            //A(li) listemizin içine entegre edilecek.
              listDOM.append(aDOM)
            //Görev yerinin text'i Sıfırlanacak
              inputDOM.value=""
        }   
        
        // Oluşturma İşlemlerimizi Bitirdik şimdi üstünü çizmek için add butonuna bastıktan sonra gerekli event'i(click) burada verip üstüne tıkladığımız a(li) için çalışmasını sağlayacağız.

        aDOM.addEventListener('click',function(){
            aDOM.style.backgroundColor="seagreen"
            aDOM.style.color="white"
            aDOM.style.textDecoration="line-through"
            
            

        })

        butDOM.addEventListener('click',function(){
            listDOM.removeChild(aDOM)
        })

 }
}

