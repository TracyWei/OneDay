currentTime("date", "time");
function currentTime(dateID, timeID){
  let dateContent = document.getElementById(dateID);
  let timeContent = document.getElementById(timeID);
  showTime();
  setInterval(showTime, 1000);

  function showTime(){
    let d = new Date();
    let year = d.getFullYear(); 
    let month = d.getMonth()+1;
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    dateContent.innerHTML = year + '.' + format(month,2) + '.' + format(date,2);
    timeContent.innerHTML = format(hour,2) + ':' + format(minute,2) + ':' + format(second,2);
  }

  function format(num, n){
    let t = num.toString().length;
    let newNum = num;
    while(t<n){
      newNum = '0'+newNum;
      t++;
    }
    return newNum;
  }
}