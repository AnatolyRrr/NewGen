    // Список курсов
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];

    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];

    let courseList = document.querySelector('.courses');
    let filterButton = document.querySelector('.btn');
    let priceFrom = document.querySelector('.price-from');
    let priceTo = document.querySelector('.price-to');



    const filterList = () => {
        let filteredList = courses.filter((el) => {
            if(priceTo.value > null) {
                return el.prices[0] >= priceFrom.value && el.prices[0] <= priceTo.value && el.prices[1] <= priceTo.value
            } else {
                return el.prices[0] >= priceFrom.value
            }
        })
        
        filteredList.forEach((element) => {
            let course = document.createElement('li')
            
            if((element.prices[0] = 0) && (element.prices[1] = 0)) {
                course.innerText = 'Название:' + ' ' + element.name  + ' ' + '|'  + ' ' + 'Стоимость:' + ' ' + 'Уточняйте';
            } else if((element.prices[0] > 0) && (element.prices[1] > 0)) {
                course.innerText = 'Название:' + ' ' + element.name  + ' ' + '|'  + ' ' + 'Стоимость:' + ' ' + 'от' + element.prices[0] + ' ' + 'до' + ' ' + element.prices[1];
            } else if((element.prices[0] = 0) && (element.prices[1] > 0)) {
                course.innerText = 'Название:' + ' ' + element.name  + ' ' + '|'  + ' ' + 'Стоимость:' + ' ' + 'до' + ' ' + element.prices[1];
            } else if((element.prices[0] > 0) && (element.prices[1] = 0)) {
                course.innerText = 'Название:' + ' ' + element.name  + ' ' + '|'  + ' ' + 'Стоимость:' + ' ' + 'от' + element.prices[0];
            }
            courseList.append(course)
        })
    };

    filterButton.onclick = filterList;
