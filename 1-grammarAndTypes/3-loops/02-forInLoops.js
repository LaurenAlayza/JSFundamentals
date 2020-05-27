/*
    for in loops
    */

    //in does not require that the 'thing' you loop through be numbered

    let student = {name: 'Lolo', awesome: true, degree: 'javascript', week: 1};

    for(item in student){
        console.log(item);
        console.log(student[item]);
        }

        let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

        for (cat in catArray){
            console.log(cat);
            console.log(catArray[cat]);
        }

        //let's write a 4-in loop that capitalizes the first letter of a name

        let capitalArray = ['lauren', 'safa', 'louie'];
        let sup;

        for (capital in capitalArray){
            console.log(capital);
            console.log(capitalArray[capital]);
        }


        let instructor = 'pAuL';
        let capName;
        for (n in instructor){
            if (n == 0){
                capName = instructor[n].toUpperCase();
        } else {
                capName += instructor [n].toLowerCase();
            }
        }
        console.log(capName);