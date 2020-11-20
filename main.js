let  n = 8;

onload = Start();

function Start(){
    Tbl();
}

function Tbl(){
    let x,tbl = `<table>`;
   
    for(let i = 1; i <= n ; i++){
        tbl += `<tr>`;
        for(let j = 1; j <= n; j++){
            x = '<td></td>'

            if((i+j) % 2 !== 0) {
                x = '<td style="background-color: #000;"></td>'
            }

            tbl += `${x}`;
        }
        tbl += `</tr>`;
    }
    tbl+=`</table>`;
    document.getElementById("main").innerHTML  = tbl;
   

}
