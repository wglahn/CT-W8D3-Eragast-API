submitButton()

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();

    doAPICall(document.getElementById("year").value, document.getElementById("round").value);
};

function submitButton(){
    let button = document.getElementById("button");
    button.addEventListener('click', (e)=>handleSubmit(e));
};

async function doAPICall(year, round){
    result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`);
    
    result = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    
    tbody=document.getElementsByTagName('tbody')[0];

    // create table row and append to body
    tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (let driver of result){
        if (driver){
            // append first name
            td=document.createElement('td');
            td.innerText=driver.Driver.givenName;
            tr.appendChild(td);

            // append last name
            td=document.createElement('td');
            td.innerText=driver.Driver.familyName;
            tr.appendChild(td);

            // append date of birth  
            td=document.createElement('td');
            td.innerText=driver.Driver.dateOfBirth;
            tr.appendChild(td);

            // append position 
            td=document.createElement('td');
            td.innerText=driver.position;
            tr.appendChild(td);

            // append wins 
            td=document.createElement('td');
            td.innerText=driver.wins;
            tr.appendChild(td);

            // append nationality  
            td=document.createElement('td');
            td.innerText=driver.Driver.nationality;
            tr.appendChild(td);

            // append constructor  
            td=document.createElement('td');
            td.innerText=driver.Constructors[0].name;
            tr.appendChild(td);

            // append row
            tr = document.createElement('tr');
            tbody.appendChild(tr);
        };
    };

};