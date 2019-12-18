const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const completion = ((rolu,str)=>{
  let res = rolu+str
  return  String(res)
})

const changeString = ((key,list)=>{
 let item =  list.forEach((item)=> item.id == key);
 return item.typeName
})

module.exports = {
  formatTime: formatTime,
  completion, changeString
}
