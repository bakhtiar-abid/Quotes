function machineWoman(person) {
   let a = prompt("Please Enter your Daily Working Hours");
   const dailyWorkingHours = a;

   let b = prompt("Please Enter your Daily Studying Hours");
   const dailyStudyingHours = b;

   let c = prompt("Please enter your Daily time pass Hours");
   const timePassHours = c;

   let d = prompt("Please enter your daily comicreading hours");
   const dailyComicReadingHours = d;

   const computeTime =
      dailyWorkingHours +
      dailyStudyingHours +
      timePassHours +
      dailyComicReadingHours;
   console.log(
      " Your total spending hours in a day is " +
         computeTime +
         " Hours in a day "
   );
   return computeTime;
}

machineWoman(prompt("Enter the machine woman name here" + person));
