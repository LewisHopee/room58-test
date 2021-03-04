describe("Roman numerals: ", function () {
    it("should output the correct Roman numeral for the number", function () {
        // The function below should work for any integer between 1 and 3000
        function getRomanNumeral(input)
        {   
            if (isNaN(input))
        return NaN;
    var digits = String(+input).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
        }

        expect(getRomanNumeral(1)).toBe('I');
        expect(getRomanNumeral(25)).toBe('XXV');
        expect(getRomanNumeral(325)).toBe('CCCXXV');
        expect(getRomanNumeral(1234)).toBe('MCCXXXIV');
    });
});