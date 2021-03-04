describe("FizzBuzz: ", function () {
    it("should produce the expected results for FizzBuzz", function () {
        // Write a program that stores the numbers from 0 to 100  in an array.  For multiples of ‘3’ store “Fizz” instead of the number and for the multiples of ‘5’ store “Buzz”.
        // For numbers which are multiples of both three and five store “FizzBuzz”.

        // e.g. [0, 1, 2, "Fizz", 4, "Buzz", ...]

      

        let results = [];

        for(let i = 0 ; i <= 100 ; i++){
            results.push(i);
        }  
  
        let resultsCopy = results.map(num =>  {
            if((num % 3 === 0) && (num % 5 === 0)){
                num = "FizzBuzz";
            }else if (num % 3 === 0){
                num = "Fizz";
            }else if(num % 5 === 0){
                num = "Buzz";
            }
                 return num;
            })
            
        results = resultsCopy;
        

        expect(results[1]).toBe(1);
        expect(results[3]).toBe("Fizz");
        expect(results[10]).toBe("Buzz");
        expect(results[30]).toBe("FizzBuzz");
        expect(results[52]).toBe(52);
    });
});

