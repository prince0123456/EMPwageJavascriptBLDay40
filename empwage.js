console.log("Welcome To Employee wage program using JS");
let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
let empHrs=0;
let empWage=0;
let empInput=Math.floor((Math.random()*10)%3);

switch(empInput)
{
    case IS_FULL_TIME:
        console.log("Employee present full time");
        empHrs=8;
        break;
    case IS_PART_TIME:
        console.log("Employee present part time");
        empHrs=4;
        break;
    default:
        console.log("Employee is absent");
        empHrs=0;
}
empWage=EMP_RATE_PER_HR*empHrs;
console.log("Employee wage is:{0}",empWage);