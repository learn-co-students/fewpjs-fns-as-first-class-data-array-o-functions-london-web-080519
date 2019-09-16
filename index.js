function wakeDog (dogName, dogBreed) {
   let str = `Wake ${dogName} the ${dogBreed}`;
   console.log(str);
   return str;
  }

  function leashDog(dogName, dogBreed) {
    let str = `Leash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

  function walkToPark(dogName, dogBreed) {
    let str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }

  function throwFrisbee(dogName, dogBreed) {
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }

  function walkHome(dogName, dogBreed) {
    let str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;

  }

  function unleashDog(dogName, dogBreed) {
    let str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }


//   function routine(dogName, dogBreed) {
//     routine = [
//         wakeDog(dogName, dogBreed),
//         leashDog(dogName, dogBreed),
//         walkToPark(dogName, dogBreed),
//         throwFrisbee(dogName, dogBreed),
//         walkHome(dogName, dogBreed),
//         unleashDog(dogName, dogBreed)
//       ]
//   }

  var routine = [
        wakeDog,
        leashDog,
        walkToPark,
        throwFrisbee,
        walkHome,
        unleashDog
      ]



    //   function exerciseDog(dogName, dogBreed){
    //     forEach (funct in routine){
    //         funct(dogName, dogBreed);
    //     }
    //   } 

      function exerciseDog(dogName, dogBreed){
         var array = []
        for (let i = 0; i < routine.length; i ++) {
           var output = routine[i];
            array[i] = output(dogName, dogBreed);
        }
        return array;
      } 

  