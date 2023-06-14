console.log("Welcome To Employee wage program using JS");
let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let day=0;
let empHrs=0,totalEmpHrs=0;
let empWage=0,totalEmpWage=0;

let empDailyWageArray=new Array();
let empWageUsingMap=new Map();
let empDayWithHrsMap=new Map();
//let empInput=Math.floor((Math.random()*10)%3);

function GetEmpHours(empInput)
{ 
    switch(empInput)
    {
        case IS_FULL_TIME:
            //console.log("Employee present full time");
            return empHrs=8;
            
        case IS_PART_TIME:
            //console.log("Employee present part time");
            return empHrs=4;
            
        default:
            //console.log("Employee is absent");
            return empHrs=0;
    }
}
while(day<=MAX_WORKING_DAYS && totalEmpHrs<=MAX_WORKING_HRS)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    totalEmpHrs+=empHrs;
    empWageUsingMap.set(day,empWage);
    empDayWithHrsMap.set(day,empHrs);
    empDailyWageArray.push(empWage);
    day++;
}
console.log("employee daily wage is :\n"+empDailyWageArray);
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage for "+(day-1)+" days or "+(totalEmpHrs)+" working Hrs is:"+totalEmpWage);

//Daily Wage Array perform following operations using Array Helper Functions
let total=0;
function getTotalWage(dailyWage)
{
    total+=dailyWage;
}
empDailyWageArray.forEach(getTotalWage);
console.log(" Total Wage using Array forEach helper func: "+total);

//Calculate total Wage using Array reduce method
function getTotalWageUsingReduce(dailyWage,totalWage)
{
    return totalWage+=dailyWage;
}
console.log(" Total Wage using Array reduce helper func : "+empDailyWageArray.reduce(getTotalWageUsingReduce,0));

//Show the Day along with Daily Wage using Array map helper function
let dayCount=0;
function mapDayWithWage(dailyWage)
{
    dayCount++;
    return "Day:"+dayCount+" Wage:"+dailyWage;
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log("Show the Day along with Daily Wage using Array map helper function\n");
console.log(mapDayWithWageArray);

//Show Days when Full time wage of 160 were earned using filter function
function showFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(showFullTimeWage);
console.log("Show Days when Full time wage:");
console.log(fullDayWageArray);

function findFirstFullTime(dailyWage)
{
    return dailyWage.includes("160")
}
console.log(" first occurrence of Full Time Wage :\n"+mapDayWithWageArray.find(findFirstFullTime));
console.log(" Check if Every Element of Full Time Wage is truly holding Full time wage:\n"+fullDayWageArray.every(findFirstFullTime));

// Check if there is any Part Time Wage
function isAnyPartTime(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Check if there is any Part Time Wage :\n"+mapDayWithWageArray.some(isAnyPartTime));

//Calculate  how many days employee worked
function howManyDaysWorked(days,dailyWage)
{
    if(dailyWage>0)  
        return days=days+1
    else
        return days;
}
console.log(" How many days employee worked");
console.log(empDailyWageArray.reduce(howManyDaysWorked,0));

//UC8
console.log("Daily wage in Map object : ");
console.log(empWageUsingMap);

console.log("total wage using Map oject :");
let totalWageByMap=Array.from(empWageUsingMap.values());
console.log(totalWageByMap.reduce(getTotalWageUsingReduce,0));


let totalWageByArrow=Array.from(totalWageByMap.values()).filter(wage=>wage>0).reduce(getTotalWageUsingReduce,0);
let totalHours=(totalH,dailyWage)=>
{
    return totalH+dailyWage;
}
let totalHesByArrow=Array.from(empDayWithHrsMap.values()).reduce(totalHours,0);
console.log("Using 'Arrow' function => total Wage is: "+totalWageByArrow+" total hours worked is : "+totalHesByArrow);

let nonWorkingDays=new Array();
let fullWorkingDays=new Array();
let partWorkingDays=new Array();
//Storing days
empDayWithHrsMap.forEach((value,key,map)=>{
    if(value==0) nonWorkingDays.push(key);
    else if(value==8) fullWorkingDays.push(key);
    else partWorkingDays.push(key);
});
console.log("Showing the full workings days, part working days and no working days");
console.log("Full working days = "+fullWorkingDays);
console.log("Part working days = "+partWorkingDays);
console.log("Non working days ="+nonWorkingDays);