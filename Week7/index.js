const heading = 'Musafar Ali';
const para = 'Soomro';

const final = `${heading} is ${para} by caste`;

const obj = {name: 'Amjad', GPA:"3.6"}


const arr = [1,2,1,1,1,1,2,3,5,42,53,235];

const obj2 = { name: "Musafar", cms_id: "021-21-0012", CGPA: "3.00" }
console.log(obj2)
console.log(`student details ${JSON.stringify(obj2)}`)

const frequency = {}

arr.forEach(element => {

    if(frequency[element])
        frequency[element] = frequency[element] + 1;
    else{
        frequency[element] = 1;   
    }

});



const person = {
    name : 'Musafar',
    age : '100',
    gender : 'male',
    country_code : 'GE'
}

const{} = person







