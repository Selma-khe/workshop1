//function
function sumdistinctelements(arr1,arr2){
    // Initialize the sum
 var sum = 0;
 let found =false;
 // search in second set
 // Loop through the set one
 for (var i = 0; i < arr1.length; i++) {
     // Loop through the second set
     for (var j = 0; j < arr2.length; j++) {
         //if the element is present in the seconds set
         //then exit
         if (arr1[i] == arr2[j]) {
             found =true;
      break;
         }
         //if the element is not present in the seconds set
       else{
           found =false;
       }
     }
     //add that element to sum
     if (found == false){
             sum =sum + arr1[i]
          
         }
 }
 
 // search in first set
 // Initialize boolean found
 found == false
 for (var j = 0; j < arr2.length; j++) {
     for (var i = 0; i < arr1.length; i++) {
         if (arr2[j] == arr1[i]) {
             found =true;
      break;
    
         }
       else{
           found =false;
       }
     }
     if (found == false){
             sum =sum + arr2[j]
          
         }
 }
   // Display sum as output
 return sum ;
 }
 
 
 console.log(sumdistinctelements(arr1,arr2))