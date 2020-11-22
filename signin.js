
document.getElementById('sub').addEventListener('click', function () {
    //   console.log(document.getElementById('id1').value);
    let data = new XMLHttpRequest();

    data.onload = function () {
        if (data.readyState == 4 && data.status == 200) {
            let jsondata = JSON.parse(data.responseText);
            if (jsondata.name == document.getElementById('id1').value && jsondata.password == document.getElementById('id2').value) {
                location.href = "index.html"
            } else {
                document.getElementById('helloworld').style.boxShadow = `0 0 10px red,0 0 40px red,0 0 60px red `
            }

        }
    }
    data.open("GET", "info.json", true)
    data.send();
})




