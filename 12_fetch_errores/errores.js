

function main(){
    let msg = location.search
    msg = msg.replace(/\%20/g, ' ')
    msg = msg.substring(3)
    document.querySelector("#error").innerHTML = msg
}

document.addEventListener('DOMContentLoaded', main)