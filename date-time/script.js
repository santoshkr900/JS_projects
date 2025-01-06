let xhr = new XMLHttpRequest();

const connect = () => {
   xhr.onreadystatechange = processResponse
   xhr.open("get", "http://worldtimeapi.org/api/timezone/Asia/Kolkata", true)
   xhr.send(null)
}

const processResponse = () => {
   // console.log("handler called",xhr.readyState)
   if(xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText)
      let obj = JSON.parse(xhr.responseText)
      let currDateTime = obj.datetime
      let today = new Date(currDateTime)
      let div = document.querySelector('#currentdatetime')
      let str = today.toDateString() +", "+today.toLocaleTimeString()
      div.textContent = str
   }
}

