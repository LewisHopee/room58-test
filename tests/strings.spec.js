describe("String tests:", function () {
    it("should reverse the string", function () {
        let string = "This is the Room58 JS test";
        let result = "";

          let stringToArr = [...string];

            string = stringToArr.reverse().join("");
            result = string;

        expect(result).toBe("tset SJ 85mooR eht si sihT");
    });

    it("should determine if two strings are anagrams of each other", function () {
        function isAnagram(first, second) {

            if(typeof first != "string" || typeof second != "string") return NaN;

                first.toLowerCase();
                second.toLowerCase();
   
            let  secondToArr = [...second];
            let  firstToArr = [...first];
            secondToArr.sort();
            firstToArr.sort();
            first = firstToArr.reverse().join("");
            second = secondToArr.reverse().join("");
          
    
            if(first === second){
            return true;
            }else if(first != second){
              return false;
            }

        }

        expect(isAnagram("Listen", "Silent")).toBe(true);
        expect(isAnagram("Room58", "Test")).toBe(false);
    });

    it("should determine if the string is a palindrome", function () {
        function isPalindrome(word)
        {   
            if(typeof word != "string") return NaN;

             let wordArr = [...word];
            
            let wordReversed = wordArr.reverse().join("");
          
          
            if(word === wordReversed){
              return true;
            }else {
              return false;
            }
          
        }
        expect(isPalindrome("racecar")).toBe(true);
        exepect(isPalindrome("developer")).toBe(false);
    
    });
});