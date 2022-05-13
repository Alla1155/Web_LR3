function displayUser(res){
    let users = res.data.items;
    for (let user of users){
        const div = document.createElement('div');
        const id = document.createElement('p');
        //дата публикации
        const date = document.createElement('p');
        //наименование работы
        const name = document.createElement('h2');
        //данные о зарплате
        const salary = document.createElement('p');
        const salaryFrom = document.createElement('p');
        const salaryTo = document.createElement('p');
        const salaryCurrency = document.createElement('p');
        const salaryGross = document.createElement('p');
        //местность
        const area = document.createElement('p');
        //наниматель
        const employerName = document.createElement('h3');
        const employerImg = document.createElement('img');
        //график работы
        const workDays = document.createElement('p');
        
        id.textContent=user.id;
        date.textContent = 'Дата публикации: ' + user.published_at;
        name.textContent = user.name;
        salaryFrom.textContent = user.salary.from;
        salaryTo.textContent = user.salary.to;
        employerName.textContent = user.employer.name;
        employerImg.src = user.employer.logo_urls.original;
        area.textContent = 'г. ' + user.area.name;
        workDays.textContent=user.schedule.name;
        
        let dataSerch=document.querySelector('.text').value; //получаем данные

        if (name.textContent.includes(dataSerch)){
            div.appendChild(name);
            div.appendChild(area);
            div.appendChild(workDays);
            if (user.salary.currency == 'RUR'){
                salaryCurrency.textContent = ' руб.';
            };
            if (user.salary.gross==true){
                salaryGross.textContent = ' до вычета налогов';
            } else {
                salaryGross.textContent = ' на руки';
            };
            if (user.salary.to != null) {
                salary.textContent = 'от ' +  user.salary.from  + ' до ' + user.salary.to + salaryCurrency.textContent + salaryGross.textContent;
                div.appendChild(salary);
            } else {
                salary.textContent = 'от ' +  user.salary.from + salaryCurrency.textContent + salaryGross.textContent;
                div.appendChild(salary);
            };
            div.appendChild(
                div.appendChild(employerName),
                div.appendChild(employerImg)
            );
            div.appendChild(date);

            container.appendChild(div);
        }
    }
}

const instance = axios.create({
    baseURL: "https://api.hh.ru/",
})
const container = document.querySelector('.container');

document.querySelector('.btn').addEventListener('click',()=>{
    let dataSerch=document.querySelector('.text').value; //получаем данные
    if (dataSerch !=''){
        container.innerHTML=' ';
        instance.get(`vacancies?text=${dataSerch}`)
            .then(displayUser)
            .catch(function (error) {
                console.log(error);
            })
        
    } else alert('Ошибка');
})