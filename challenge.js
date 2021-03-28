function lifeInWeeks(age) {
   /************Don't change the code above************/

   //Write your code here.

   var days = 365;

   var weeks = 52;

   var months = 12;

   var currentDays = 32850 - age * days;
   var currentWeeks = 4692 - age * weeks;
   var currentMonths = 1080 - age * months;

   console.log(
      "You have " +
         currentDays +
         " days, " +
         currentWeeks +
         " weeks, and " +
         currentMonths +
         " months left. "
   );

   /*************Don't change the code below**********/
}

lifeInWeeks(25);
