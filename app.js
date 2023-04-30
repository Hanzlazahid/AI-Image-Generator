const API_KEY="YOUR API KEY";
const submit_icon=document.querySelector("#submit-icon")
const prompt=document.querySelector('input')
const imageSection=document.querySelector('.image-section')

const getImages=async()=>{
    const options={
        method:"POST",
        headers:{
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            'prompt':prompt.value,
            'n':4,
            'size': '1024x1024'
        })
    }
    try{
        const res=await fetch("https://api.openai.com/v1/images/generations",options)
        const data=await res.json()
        console.log(data)
        data?data.forEach(imageObject=>{
            const imageContainer=document.createElement('div');
            imageContainer.classList.add('image-container');
            const imgElement=document.createElement('img');
            imgElement.setAttribute('src',imageObject.url);
            imageContainer.append(imgElement)
            imageSection.append(imageContainer)
        }):null
    }catch(error){
        console.log(error)
    }
}

submit_icon.addEventListener('click',getImages)
