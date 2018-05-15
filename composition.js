/**
 * compositions
 */

/* https://medium.com/front-end-hacking/classless-javascript-composition-over-inheritance-6b27c35893b1 */


  function getInfo(firstName, lastName){
    return "Hi i am " + firstName + "" + lastName;
  }

  function getId(empid){
    return "Hi my employee id is " + empid;
  }

  function createPerson(firstName,lastName){
    return {
      getInfo: function(){ return getInfo(firstName, lastName)} 
    };
  }
   
  function createEmployee(firstName, lastName, empid){
    return {
      getId : function(){ return getId(empid);},
      getInfo: function(){ return getInfo(firstName, lastName);} 
    };
  }

  const jhon = createEmployee("john", "doe", 123);

  const dave = createPerson("dave ","leblanc");

  console.log( jhon.getInfo() );// Hi i am john doe
  console.log( jhon.getId() ); // Hi my employee id is 123
  console.log(dave.getInfo());