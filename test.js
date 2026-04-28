function Vowelcount(sentence) {
    const text = sentence.toLowerCase();

    if (text.length < 15) {
        return "RECHECK! sentence should be at least 15 characters.";
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counts = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let char of text) {
        if (vowels.includes(char)) {
            counts[char]++;
        }
    }

    for (let v of vowels) {
        if (counts[v] === 0) {
            return "Error: Sentence must contain all five vowels (a, e, i, o, u).";
        }
    }


    let sorted = Object.entries(counts);

    sorted.sort((a, b) => b[1] - a[1]);

    let result = {};
    let colors = ["Gold", "Grey", "Brown"];

    let rank = 0;
    let prevCount = null;

    for (let i = 0; i < sorted.length; i++) {
        let [vowel, count] = sorted[i];

        if (count !== prevCount) {
            rank = i;
        }

        let color = colors[rank] || "No Color";

        result[vowel] = {
            count: count,
            color: color
        };

        prevCount = count;
    }

    return result;
}

// Example 
console.log(Vowelcount("AI is meant to make life easier for us and Make us free."));

