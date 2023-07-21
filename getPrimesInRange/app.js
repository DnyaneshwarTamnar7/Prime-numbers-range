let primeArray=[];

function primeNumber(number,status,time) {
    this.number=number;
    this.status=status;
    this.time=time;
}

function getPrimesInRange() {
    let start = Date.now();
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    for(let i = first; i <= second; i++) {
        let flag=true;
        // let each_start = Date.now();
        for(let j = 2; j<=i/2; j++) {
            if(i%j === 0) {
                flag=false;
                break;
            }
        }
        let timeTaken = Date.now() - start;
        if(flag) {
            primeArray.push(new primeNumber(i,"Prime",timeTaken));
        } else {
            primeArray.push(new primeNumber(i,"Normal",timeTaken));
        }
    }
    let time_taken = Date.now() - start;

    let div = document.querySelector("#all-time");
    let p = document.createElement('p');
    p.innerText = "Total Execution time "+time_taken;
    div.append(p);
    
    let time_Avg = 0;
    for(let p of primeArray) {
        let tr = document.createElement('tr');
        let c1 = document.createElement('td');
        let c2 = document.createElement('td');
        let c3 = document.createElement('td');
        let table = document.querySelector("#result-tab-one");
        c1.innerText = p.number;
        tr.appendChild(c1);
        c2.innerText = p.status;
        tr.appendChild(c2);
        c3.innerText = p.time;
        tr.appendChild(c3);
        table.append(tr)
        time_Avg += p.time;
    }
    time_Avg = (time_Avg)/(primeArray.length);

    let timeAvg = 0;
    let count = 0;
    for(let p of primeArray) {

        if(p.status==="Prime") {
            let tr = document.createElement('tr');
            let c1 = document.createElement('td');
            let c2 = document.createElement('td');
            let table = document.querySelector("#result-tab-two");
            c1.innerText = p.number;
            tr.appendChild(c1);
            c2.innerText = p.time;
            tr.appendChild(c2);
            table.append(tr)
            count++;
            timeAvg += p.time;
        }
    }
    timeAvg = (timeAvg)/count; 
    timeAvg = (timeAvg + time_Avg)/2; 

    let div1 = document.querySelector("#avg-time");
    let p1 = document.createElement('p');
    p1.innerText = "Total Execution time "+time_taken;
    div1.append(p1);
}

