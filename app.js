function loadCard() {
    var gridContainer = document.querySelector('.grid-1');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => { 
        for (var index=0; index < 4 ; index++) {
            gridContainerChildren += `
                <div class="card">
                    <div class="card-img">
                        <img src="${data[index].image}" alt="blog" />
                    </div>
                    <div class="date">
                        <p>${data[index].date}</p>
                    </div>
                    <div class="card-text">
                    <p id=para-1>Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability</p>
                    <p id=para-2>The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike... </p>
                    <p id="continue">CONTINUE READING</p></div>
                </div>
            `
        }
        gridContainer.innerHTML = gridContainerChildren;
    })
    .catch(err => console.log(err));
}
function loadCard2() {
    var gridContainer = document.querySelector('.grid-2');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => { 
        for (var index=0; index < 3 ; index++) {
            gridContainerChildren += `
                <div class="card">
                    <div class="card-img">
                        <img src="${data[index].image}" alt="blog" />
                    </div>
                    <div class="date">
                        <p>${data[index].date}</p>
                    </div>
                    <div class="card-text">
                    <p id=para-1>Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability</p>
                    <p id=para-2>The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike... </p>
                    <p id="continue">CONTINUE READING</p></div>
                </div>
            `
        }
        gridContainer.innerHTML += gridContainerChildren;
    })
    .catch(err => console.log(err));
}
function loadOnClick(value) {
    if(value>1){
        document.querySelector("#pre").style.display = "inline";
        document.querySelector("#next").style.display = "inline";
    }
    if(value>=2){
    document.querySelector("#three").style.display = "inline";
    document.querySelector("#four").style.display = "inline";
     }
    if(value>=3){
        document.querySelector("#five").style.display = "inline";
     }
     if(value==4){
        document.querySelector("#more").style.display = "none";
        document.querySelector("#more1").style.display = "inline";
     }
     if(value>=5){
        document.querySelector("#six").style.display = "inline";
        document.querySelector("#seven").style.display = "inline";
        document.querySelector("#more1").style.display = "none";
     }
    var gridContainer = document.querySelector('.grid-1');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => {
        for (var index=(value - 1) * 4; index < value * 4; index++) {
            gridContainerChildren += `
                <div class="card">
                    <div class="card-img">
                        <img src="${data[index].image}" alt="blog" />
                    </div>
                    <div class="date">
                        <p>${data[index].date}</p>
                    </div>
                    <div class="card-text">
                    <p id=para-1>Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability</p>
                    <p id=para-2>The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike... </p>
                    <p id="continue">CONTINUE READING</p></div>
                    </div>
                </div>
            `
        }
       gridContainer.innerHTML = gridContainerChildren;
    })
    .catch(err => console.log(err));
}
loadCard();
loadCard2();