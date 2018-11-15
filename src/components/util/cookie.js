
// export function setCookie (name, value, timer) {
//   console.log('aaa')
//   var strsec = timer
//   var time = new Date()
//   time.setTime(time.getTime() + strsec * 1000 * 60 * 60 * 24)
//   document.cookie = name + '=' + escape(value) + ';expires=' + time.toGMTString()
// }

// export function getCookie (name) {
//   let  arr;
//   let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")

//   if (arr = document.cookie.match(reg)) {
//     return unescape(arr[2])
//   } else {
//     return null
//   }
// }

// export function Delete (name) {
//   this.set(name, '', -1)
// }

// 设置cookie,增加到vue实例方便全局调用
export function setCookie (name, value, expiredays) {
  var exdate = new Date()
  exdate.setTime(exdate.getTime() + expiredays * 1000 * 60 * 60 * 24)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
};

// 获取cookie
export function getCookie (name) {
  if (name) {
    let user = document.cookie.split(';')
    console.log(user)
    for (let i = 0; user[i] !== undefined; i++) {
      let aa = user[i]
    }

    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return (arr[2])
    } else {
      return null
    }
  }
}

// 删除cookie
export function delCookie (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
};
