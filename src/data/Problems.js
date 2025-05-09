export const Problems = [
  {
    id: 1,
    title: "Movie Rating Classifier",
    description: `Create a program that takes a movie rating (1-5 stars) as input and displays an appropriate message:
    <ul>
      <li>1 star: "Avoid this movie"</li>
      <li>2 stars: "Below average"</li>
      <li>3 stars: "Average movie"</li>
      <li>4 stars: "Good movie"</li>
      <li>5 stars: "Must watch!"</li>
    </ul>
    Use if-else statements to implement this logic.`,
    category: "if-else",
    difficulty: "easy",
  },
  {
    id: 2,
    title: "Salary Calculator",
    description: `Develop a program that calculates an employee's salary based on their profile:
    <ul>
      <li>Input: hours worked, hourly rate, job title</li>
      <li>Calculate base salary (hours × rate)</li>
      <li>Apply bonuses based on job title (e.g., Manager: +20%, Developer: +10%)</li>
      <li>Calculate and deduct taxes (15% for amounts > $1000, 10% otherwise)</li>
      <li>Display the final salary with a breakdown</li>
    </ul>`,
    category: "if-else",
    difficulty: "medium",
  },
  {
    id: 3,
    title: "Vowel or Consonant Checker",
    description: `Write a program that:
    <ul>
      <li>Accepts a single English alphabet character from the user</li>
      <li>Checks if the character is a vowel (a, e, i, o, u) or a consonant</li>
      <li>Handles both uppercase and lowercase letters</li>
      <li>Displays an appropriate message</li>
      <li>Includes error handling for non-alphabet inputs</li>
    </ul>`,
    category: "if-else",
    difficulty: "easy",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/program-find-character-vowel-consonant/",
  },
  {
    id: 4,
    title: "ISBN Number Validator",
    description: `Create a program to validate ISBN (International Standard Book Number) numbers:
    <ul>
      <li>An ISBN-10 is a 10-digit number where the last digit is a check digit</li>
      <li>Validation formula: (d₁×1 + d₂×2 + d₃×3 + ... + d₉×9) % 11 = d₁₀</li>
      <li>If d₁₀ = 10, it's represented as 'X'</li>
      <li>Input: A 10-digit number or 9 digits followed by 'X'</li>
      <li>Output: "Valid ISBN" or "Invalid ISBN"</li>
    </ul>`,
    category: "loop",
    difficulty: "medium",
    geeksforgeeks: "https://www.geeksforgeeks.org/program-check-isbn/",
  },
  {
    id: 5,
    title: "Harshad Number Checker",
    description: `Determine if a number is a Harshad (or Niven) number:
    <ul>
      <li>A Harshad number is divisible by the sum of its digits</li>
      <li>Example: 18 is a Harshad number because 1+8=9 and 18 is divisible by 9</li>
      <li>Input: A positive integer</li>
      <li>Output: "X is a Harshad number" or "X is not a Harshad number"</li>
      <li>Test with examples like 18, 21, 156 (Harshad) and 22, 47 (not Harshad)</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    geeksforgeeks: "https://www.geeksforgeeks.org/harshad-or-niven-number/",
  },
  {
    id: 6,
    title: "Perfect Square Checker",
    description: `Write a program to check if a given number is a perfect square:
    <ul>
      <li>A perfect square is an integer that is the square of another integer</li>
      <li>Examples: 1, 4, 9, 16, 25, etc.</li>
      <li>Input: A positive integer</li>
      <li>Output: "X is a perfect square" or "X is not a perfect square"</li>
      <li>Implement without using built-in square root functions (optional challenge)</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/check-if-a-number-is-perfect-square-without-finding-square-root/",
    leetcode: "https://leetcode.com/problems/valid-perfect-square/",
  },
  {
    id: 7,
    title: "Abundant Number Checker",
    description: `Check if a number is an Abundant number:
    <ul>
      <li>An Abundant number is one where the sum of its proper divisors exceeds the number itself</li>
      <li>Example: 12 is abundant because its proper divisors (1, 2, 3, 4, 6) sum to 16, which is > 12</li>
      <li>Input: A positive integer</li>
      <li>Output: "X is an Abundant number" or "X is not an Abundant number"</li>
      <li>Test with examples like 12, 18, 20 (Abundant) and 10, 15 (not Abundant)</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    geeksforgeeks: "https://www.geeksforgeeks.org/abundant-number/",
  },
  {
    id: 8,
    title: "Count Numbers with Exact X Divisors",
    description: `Find the count of integers in a range that have exactly X divisors:
    <ul>
      <li>Input: A range [start, end] and a number X</li>
      <li>For each number in the range, count its divisors</li>
      <li>Output: Count of numbers that have exactly X divisors</li>
      <li>Example: In range [1, 10] with X=2, the answer is 4 (numbers 2, 3, 5, 7 have exactly 2 divisors)</li>
      <li>Optimize your solution for larger ranges</li>
    </ul>`,
    category: "loop",
    difficulty: "medium",
  },
  {
    id: 9,
    title: "Prime Factorization",
    description: `Implement a program to find all prime factors of a number:
    <ul>
      <li>Prime factors are prime numbers that divide the given number without a remainder</li>
      <li>Example: Prime factors of 60 are 2, 2, 3, 5 (or 2², 3, 5)</li>
      <li>Input: A positive integer > 1</li>
      <li>Output: List of all prime factors</li>
      <li>Implement using efficient algorithms (trial division or sieve methods)</li>
    </ul>`,
    category: "loop",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/prime-factorization-using-sieve-olog-n-multiple-queries/",
  },
  {
    id: 10,
    title: "Area Calculator with Switch",
    description: `Create a program to calculate areas of different shapes using a switch statement:
    <ul>
      <li>Menu: 1-Circle, 2-Rectangle, 3-Triangle</li>
      <li>Based on selection, prompt for required measurements</li>
      <li>Circle: radius (Area = πr²)</li>
      <li>Rectangle: length and width (Area = l×w)</li>
      <li>Triangle: base and height (Area = ½×b×h)</li>
      <li>Display the calculated area with appropriate units</li>
    </ul>`,
    category: "if-else",
    difficulty: "easy",
  },
  {
    id: 11,
    title: "Neon Number Checker",
    description: `Check if a number is a Neon number:
    <ul>
      <li>A Neon number is one where the sum of digits of its square equals the number itself</li>
      <li>Example: 9 is a Neon number because 9² = 81, and 8+1 = 9</li>
      <li>Input: A positive integer</li>
      <li>Output: "X is a Neon number" or "X is not a Neon number"</li>
      <li>Test with examples like 9 (Neon) and 10 (not Neon)</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    geeksforgeeks: "https://www.geeksforgeeks.org/neon-number/",
  },
  {
    id: 12,
    title: "Perfect Number Checker",
    description: `Determine if a number is a Perfect number:
    <ul>
      <li>A Perfect number equals the sum of its proper divisors (excluding itself)</li>
      <li>Example: 6 is Perfect because its proper divisors (1, 2, 3) sum to 6</li>
      <li>Input: A positive integer</li>
      <li>Output: "X is a Perfect number" or "X is not a Perfect number"</li>
      <li>Test with examples like 6, 28, 496 (Perfect) and 10, 15 (not Perfect)</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    geeksforgeeks: "https://www.geeksforgeeks.org/perfect-number/",
    leetcode: "https://leetcode.com/problems/perfect-number/",
  },
  {
    id: 13,
    title: "Friendly Pairs Checker",
    description: `Check if two numbers form a Friendly pair (also called Amicable numbers):
    <ul>
      <li>Two numbers are Friendly if the ratio of sum of divisors to the number is the same for both</li>
      <li>Alternatively: σ(a)/a = σ(b)/b, where σ(n) is the sum of all divisors of n</li>
      <li>Input: Two positive integers</li>
      <li>Output: "X and Y are Friendly pairs" or "X and Y are not Friendly pairs"</li>
      <li>Example: 6 and 12 are Friendly pairs (σ(6)/6 = σ(12)/12 = 2)</li>
    </ul>`,
    category: "loop",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/check-given-two-number-friendly-pair-not/?ref=rp",
  },
  {
    id: 14,
    title: "Permutations of N People in R Seats",
    description: `Calculate the number of ways N people can be arranged in R seats:
    <ul>
      <li>This is a permutation problem: P(n,r) = n!/(n-r)!</li>
      <li>Input: Two integers N (people) and R (seats), where N ≥ R</li>
      <li>Output: Number of possible arrangements</li>
      <li>Example: For 5 people and 3 seats, there are 60 possible arrangements</li>
      <li>Handle large numbers efficiently (avoid overflow)</li>
    </ul>`,
    category: "loop",
    difficulty: "medium",
    geeksforgeeks: "https://www.geeksforgeeks.org/permutation-and-combination/",
  },
  {
    id: 15,
    title: "Maximum Number of Handshakes",
    description: `Calculate the maximum number of handshakes possible among N people:
    <ul>
      <li>Each person shakes hands exactly once with every other person</li>
      <li>Formula: N × (N-1) / 2 (combination formula for selecting 2 people from N)</li>
      <li>Input: Number of people N</li>
      <li>Output: Maximum possible handshakes</li>
      <li>Example: With 5 people, 10 handshakes are possible</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/find-maximum-number-handshakes/",
  },
  {
    id: 16,
    title: "Days in a Month Calculator",
    description: `Count the number of days in a given month of a year:
    <ul>
      <li>Input: Month (1-12) and Year</li>
      <li>Account for leap years when calculating February</li>
      <li>A leap year is divisible by 4, except for century years not divisible by 400</li>
      <li>Output: Number of days in the specified month</li>
      <li>Example: February 2020 has 29 days (leap year)</li>
    </ul>`,
    category: "if-else",
    difficulty: "easy",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/program-to-find-the-number-of-days-in-a-given-month/",
  },
  {
    id: 17,
    title: "Sum of Even-Indexed Fibonacci Numbers",
    description: `For a given positive integer N, find the sum of Fibonacci numbers at even indices up to the 2N-th term:
    <ul>
      <li>Calculate F₀ + F₂ + F₄ + ... + F₂ₙ</li>
      <li>Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...</li>
      <li>Input: A positive integer N</li>
      <li>Output: Sum of Fibonacci numbers at even indices up to F₂ₙ</li>
      <li>Example: For N=4, sum = F₀ + F₂ + F₄ + F₆ + F₈ = 0 + 1 + 3 + 8 + 21 = 33</li>
    </ul>`,
    category: "loop",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/sum-of-fibonacci-numbers-at-even-indexes-upto-n-terms/",
  },
  {
    id: 18,
    title: "Sum of Absolute Differences",
    description: `Given a sorted array of distinct elements, find the sum of absolute differences of all pairs:
    <ul>
      <li>For each pair of elements (a, b), calculate |a - b| and sum all these values</li>
      <li>Input: A sorted array of distinct integers</li>
      <li>Output: Sum of absolute differences of all possible pairs</li>
      <li>Example: For array [1, 2, 3, 4], sum = |2-1| + |3-1| + |4-1| + |3-2| + |4-2| + |4-3| = 10</li>
      <li>Optimize for large arrays (O(n) solution exists)</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/sum-absolute-differences-pairs-given-array/",
  },
  {
    id: 19,
    title: "Minimum Value of Expression",
    description: `Given two arrays of equal length (integer array A and character array B with values 'a', 'b', or 'c'), find:
    <ul>
      <li>The minimum value of: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c')</li>
      <li>Input: Integer array A and character array B of equal length</li>
      <li>Output: Minimum value of the expression</li>
      <li>Example: A=[3,6,4,5,6], B=['a','c','b','b','a'] → min((3+6)+(4+5), 6) = min(18, 6) = 6</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
  },
  {
    id: 20,
    title: "Replace Array Elements with Products",
    description: `Update each array element with the product of its neighbors:
    <ul>
      <li>Replace each element with the product of its previous and next elements</li>
      <li>For the first element: product of first and second elements</li>
      <li>For the last element: product of last and second-last elements</li>
      <li>Input: An array of integers</li>
      <li>Output: Updated array with products</li>
      <li>Example: [2,3,4,5,6] → [6,8,15,24,30]</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/replace-every-array-element-by-multiplication-of-previous-and-next/",
  },
  {
    id: 21,
    title: "Array Exhaustion Steps",
    description: `Count steps to exhaust an array through maximum element deletion:
    <ul>
      <li>In each step: Find the maximum element and delete it along with all elements to its right</li>
      <li>Repeat until the array is empty</li>
      <li>Input: An array of integers</li>
      <li>Output: Number of steps to exhaust the array</li>
      <li>Example: [2,3,5,4,1] → Step 1: Remove 5,4,1 → [2,3] → Step 2: Remove 3 → [2] → Step 3: Remove 2 → [] → Answer: 3 steps</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
  },
  {
    id: 22,
    title: "Balance an Array",
    description: `Find the minimum value to add to balance an even-sized array:
    <ul>
      <li>An array is balanced when the sum of first half equals the sum of second half</li>
      <li>Find the minimum value to add to any element in the first half to balance the array</li>
      <li>Input: An even-sized array of integers</li>
      <li>Output: Minimum value to add</li>
      <li>Example: [1,2,1,2,1,3] → First half sum: 4, Second half sum: 6 → Add 2 to any element in first half</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/problems/balanced-array07200720/0",
  },
  {
    id: 23,
    title: "Divide Array Into Equal Pairs",
    description: `Determine if an array can be divided into pairs where each element appears exactly once in a pair:
    <ul>
      <li>Each pair must consist of identical elements</li>
      <li>Input: An array of integers with even length</li>
      <li>Output: true if the array can be divided into equal pairs, false otherwise</li>
      <li>Example: [3,2,3,2,2,2] → true (can form pairs [3,3], [2,2], [2,2])</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/divide-array-into-equal-pairs/",
  },
  {
    id: 24,
    title: "Maximum Number of Pairs in Array",
    description: `Find the maximum number of pairs that can be formed from an array:
    <ul>
      <li>A pair consists of two equal elements</li>
      <li>Return [number of pairs, number of leftover elements]</li>
      <li>Input: An array of integers</li>
      <li>Output: Array [pairs_count, leftover_count]</li>
      <li>Example: [1,3,2,1,3,2,2] → [3,1] (pairs: [1,1], [3,3], [2,2], leftover: [2])</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/maximum-number-of-pairs-in-array/",
  },
  {
    id: 25,
    title: "Keep Multiplying Found Values by Two",
    description: `Multiply a value by 2 repeatedly as long as it's found in the array:
    <ul>
      <li>Start with an original value</li>
      <li>While the current value exists in the array, multiply it by 2</li>
      <li>Return the final value when it's no longer in the array</li>
      <li>Input: An array of integers and a starting value</li>
      <li>Output: Final value after all multiplications</li>
      <li>Example: [5,3,6,1,12], original=3 → 3 exists → 3×2=6 → 6 exists → 6×2=12 → 12 exists → 12×2=24 → 24 not found → Answer: 24</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/keep-multiplying-found-values-by-two/",
  },
  {
    id: 26,
    title: "Smallest Index With Equal Value",
    description: `Find the smallest index i where i mod 10 equals nums[i]:
    <ul>
      <li>Check each index i and its value nums[i]</li>
      <li>Return the smallest i where i % 10 == nums[i]</li>
      <li>Input: An array of integers</li>
      <li>Output: Smallest valid index, or -1 if none exists</li>
      <li>Example: [0,1,2] → index 0 (0 % 10 = 0 = nums[0])</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/smallest-index-with-equal-value/",
  },
  {
    id: 27,
    title: "Count Operations to Obtain Zero",
    description: `Count operations needed to make either of two numbers zero:
    <ul>
      <li>In each operation: If num1 ≥ num2, subtract num2 from num1; otherwise, subtract num1 from num2</li>
      <li>Continue until either number becomes zero</li>
      <li>Input: Two positive integers</li>
      <li>Output: Number of operations</li>
      <li>Example: num1=2, num2=3 → Operation 1: num1=2, num2=1 → Operation 2: num1=1, num2=1 → Operation 3: num1=0, num2=1 → Answer: 3 operations</li>
    </ul>`,
    category: "loop",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/count-operations-to-obtain-zero/",
  },
  {
    id: 28,
    title: "Make Array Zero by Subtracting Equal Amounts",
    description: `Find minimum operations to make all array elements zero:
    <ul>
      <li>In each operation: Find the smallest non-zero element x and subtract x from all non-zero elements</li>
      <li>Input: An array of non-negative integers</li>
      <li>Output: Minimum number of operations</li>
      <li>Example: [1,5,0,3,5] → Operation 1: Subtract 1 → [0,4,0,2,4] → Operation 2: Subtract 2 → [0,2,0,0,2] → Operation 3: Subtract 2 → [0,0,0,0,0] → Answer: 3 operations</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/",
  },
  {
    id: 29,
    title: "Find Greatest Common Divisor of Array",
    description: `Find the GCD of the smallest and largest elements in an array:
    <ul>
      <li>Identify the minimum and maximum values in the array</li>
      <li>Calculate their greatest common divisor (GCD)</li>
      <li>Input: An array of positive integers</li>
      <li>Output: GCD of min and max elements</li>
      <li>Example: [2,5,6,9,10] → min=2, max=10 → GCD(2,10) = 2</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/find-greatest-common-divisor-of-array/",
  },
  {
    id: 30,
    title: "Find the Highest Altitude",
    description: `Find the highest altitude reached during a trip:
    <ul>
      <li>Start at altitude 0</li>
      <li>Given an array of altitude changes (gains), find the highest point reached</li>
      <li>Input: An array of integers (positive or negative)</li>
      <li>Output: Highest altitude reached</li>
      <li>Example: [-5,1,5,0,-7] → Altitudes: 0,-5,-4,1,1,-6 → Highest: 1</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/find-the-highest-altitude/",
  },
  {
    id: 31,
    title: "Minimum Sum of Four Digit Number After Splitting Digits",
    description: `Find the minimum possible sum by splitting a four-digit number:
    <ul>
      <li>Split the digits of the number into two new numbers</li>
      <li>Find the minimum possible sum of these two numbers</li>
      <li>Input: A four-digit positive integer</li>
      <li>Output: Minimum possible sum</li>
      <li>Example: 2932 → Can form numbers 29, 32 or 2, 932 or many others → Minimum sum: 2+3+9+2 = 16 (by forming 23 + 29)</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/",
  },
  {
    id: 32,
    title: "Sort Even and Odd Indices Independently",
    description: `Sort array elements at even and odd indices separately:
    <ul>
      <li>Sort elements at even indices in non-decreasing order</li>
      <li>Sort elements at odd indices in non-increasing order</li>
      <li>Input: An array of integers</li>
      <li>Output: Array with sorted even and odd indices</li>
      <li>Example: [4,1,2,3] → Even indices [4,2] sorted: [2,4], Odd indices [1,3] sorted in reverse: [3,1] → Result: [2,3,4,1]</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/sort-even-and-odd-indices-independently/",
  },
  {
    id: 33,
    title: "Min Max Game",
    description: `Play a min-max game on an array until only one element remains:
    <ul>
      <li>If array has length 1, return the element</li>
      <li>Otherwise, create a new array of half the length</li>
      <li>For even indices i: newNums[i] = min(nums[2i], nums[2i+1])</li>
      <li>For odd indices i: newNums[i] = max(nums[2i], nums[2i+1])</li>
      <li>Repeat until only one element remains</li>
      <li>Example: [1,3,5,2,4,8,2,2] → [1,5,4,2] → [1,4] → [1] → Answer: 1</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
    leetcode: "https://leetcode.com/problems/min-max-game/",
  },
  {
    id: 34,
    title: "Two Furthest Houses With Different Colors",
    description: `Find the maximum distance between two houses with different colors:
    <ul>
      <li>Houses are represented by an array of colors (integers)</li>
      <li>Find the maximum distance |i - j| where colors[i] ≠ colors[j]</li>
      <li>Input: An array of integers representing colors</li>
      <li>Output: Maximum distance between houses of different colors</li>
      <li>Example: [1,1,1,6,1,1,1] → Houses at positions 0 and 3 have different colors → Distance = |0-3| = 3</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/two-furthest-houses-with-different-colors/",
  },
  {
    id: 35,
    title: "Count Subarrays with Sum Equal to Target",
    description: `Count the number of subarrays whose sum equals a target value:
    <ul>
      <li>A subarray is a contiguous part of an array</li>
      <li>Find all subarrays with sum equal to the target</li>
      <li>Input: An array of integers and a target sum</li>
      <li>Output: Count of subarrays with sum equal to target</li>
      <li>Example: [1,2,3,7,5] with target=12 → Subarrays: [2,3,7], [7,5] → Answer: 2</li>
    </ul>`,
    category: "array",
    difficulty: "medium",
    leetcode: "https://leetcode.com/problems/subarray-sum-equals-k/",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/",
  },
  {
    id: 36,
    title: "Concatenation of Array",
    description: `Create a new array that is the concatenation of the original array with itself:
    <ul>
      <li>Given an array nums of length n, create a new array of length 2n</li>
      <li>The new array should be [nums[0], nums[1], ..., nums[n-1], nums[0], nums[1], ..., nums[n-1]]</li>
      <li>Input: An array of integers</li>
      <li>Output: Concatenated array</li>
      <li>Example: [1,2,3] → [1,2,3,1,2,3]</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/concatenation-of-array/",
  },
  {
    id: 37,
    title: "Build Array from Permutation",
    description: `Build a new array from a permutation array:
    <ul>
      <li>Given a zero-based permutation array nums, create an array ans where ans[i] = nums[nums[i]]</li>
      <li>Input: A permutation array (contains distinct integers from 0 to n-1)</li>
      <li>Output: The built array</li>
      <li>Example: [0,2,1,5,3,4] → [0,1,2,4,5,3]</li>
    </ul>`,
    category: "array",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/build-array-from-permutation/",
  },
  {
    id: 38,
    title: "Remove Vowels from a String",
    description: `Write a program to remove all vowels from a given string:
    <ul>
      <li>Vowels are 'a', 'e', 'i', 'o', 'u' (both uppercase and lowercase)</li>
      <li>Input: A string</li>
      <li>Output: String with all vowels removed</li>
      <li>Example: "Hello World" → "Hll Wrld"</li>
      <li>Handle empty strings and strings with no vowels</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/remove-vowels-from-a-string/",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/program-remove-vowels-string/",
  },
  {
    id: 39,
    title: "Count Asterisks",
    description: `Count the number of asterisks (*) in a string with specific rules:
    <ul>
      <li>The string contains words separated by vertical bars |</li>
      <li>Count asterisks only in words at even positions (0-indexed)</li>
      <li>Words are substrings between consecutive vertical bars or at the beginning/end</li>
      <li>Input: A string with vertical bars and asterisks</li>
      <li>Output: Count of valid asterisks</li>
      <li>Example: "l|*e*et|c**o|*de|" → Count * in "l", "c**o", "" → 0+2+0 = 2</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/count-asterisks/",
  },
  {
    id: 40,
    title: "Percentage of Letter in String",
    description: `Calculate the percentage of occurrences of a letter in a string:
    <ul>
      <li>Count how many times a specific letter appears in the string</li>
      <li>Calculate the percentage as (count / string length) × 100</li>
      <li>Round down to the nearest integer</li>
      <li>Input: A string and a letter</li>
      <li>Output: Percentage (integer)</li>
      <li>Example: "foobar", 'o' → 2/6 × 100 = 33%</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/percentage-of-letter-in-string/",
  },
  {
    id: 41,
    title: "Check if All A's Appears Before All B's",
    description: `Check if all occurrences of 'a' appear before all occurrences of 'b' in a string:
    <ul>
      <li>The string may contain only 'a' and 'b' characters</li>
      <li>Return true if all 'a's appear before all 'b's</li>
      <li>Return true if the string contains only 'a's or only 'b's</li>
      <li>Input: A string containing only 'a' and 'b'</li>
      <li>Output: true or false</li>
      <li>Example: "aaabbb" → true, "abab" → false</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/",
  },
  {
    id: 42,
    title: "Strong Password Checker II",
    description: `Check if a password meets the criteria for a strong password:
    <ul>
      <li>At least 8 characters long</li>
      <li>Contains at least one lowercase letter</li>
      <li>Contains at least one uppercase letter</li>
      <li>Contains at least one digit</li>
      <li>Contains at least one special character: !@#$%^&*()-+</li>
      <li>No two adjacent characters are the same</li>
      <li>Input: A string (password)</li>
      <li>Output: true if the password is strong, false otherwise</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/strong-password-checker-ii/",
  },
  {
    id: 43,
    title: "Greatest English Letter in Upper and Lower Case",
    description: `Find the greatest English letter that appears in both uppercase and lowercase:
    <ul>
      <li>"Greatest" means the letter that appears latest in the English alphabet</li>
      <li>Return the uppercase version of the letter</li>
      <li>If no letter appears in both cases, return an empty string</li>
      <li>Input: A string containing uppercase and lowercase English letters</li>
      <li>Output: The greatest letter that appears in both cases, or empty string</li>
      <li>Example: "AbCdEfGhIjK" → "G" (both 'g' and 'G' appear, and G is the greatest)</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/",
  },
  {
    id: 44,
    title: "Check if Number Has Equal Digit Count and Digit Value",
    description: `Check if the count of each digit equals its value at the corresponding position:
    <ul>
      <li>In a string num, digit i appears num[i] times in the entire string</li>
      <li>Input: A string of digits</li>
      <li>Output: true if the condition is met, false otherwise</li>
      <li>Example: "1210" → Digit 0 appears 1 time, Digit 1 appears 2 times, Digit 2 appears 1 time, Digit 3 appears 0 times → true</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/",
  },
  {
    id: 45,
    title: "Calculate Digit Sum of a String",
    description: `Calculate the digit sum of a string by repeatedly adding digits in groups:
    <ul>
      <li>Group the digits in the string by size k</li>
      <li>For each group, add its digits to get a sum</li>
      <li>Concatenate these sums to form a new string</li>
      <li>Repeat until the string has length less than or equal to k</li>
      <li>Input: A string of digits and an integer k</li>
      <li>Output: The final string</li>
      <li>Example: "11111222223", k=3 → Groups: "111", "112", "222", "23" → Sums: 3, 4, 6, 5 → New string: "3465" → Length ≤ k, so return "3465"</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/calculate-digit-sum-of-a-string/",
  },
  {
    id: 46,
    title: "Check Whether Two Strings are Almost Equivalent",
    description: `Check if two strings are almost equivalent based on character frequency:
    <ul>
      <li>Two strings are almost equivalent if the frequency of each letter differs by at most 3</li>
      <li>Input: Two strings of equal length</li>
      <li>Output: true if almost equivalent, false otherwise</li>
      <li>Example: "abcdeef", "abaaacc" → Frequencies: 'a': 1 vs 4 (diff=3), 'b': 1 vs 1 (diff=0), etc. → false (because 'a' differs by 3, but 'e' differs by 2, total > 3)</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/",
  },
  {
    id: 47,
    title: "Check if Numbers Are Ascending in a Sentence",
    description: `Check if all numbers in a sentence are in strictly ascending order:
    <ul>
      <li>Extract all numbers from the sentence</li>
      <li>Check if they form a strictly increasing sequence</li>
      <li>Input: A string containing words and numbers</li>
      <li>Output: true if numbers are ascending, false otherwise</li>
      <li>Example: "1 box has 3 blue 4 red 6 green and 12 yellow marbles" → Numbers: 1, 3, 4, 6, 12 → true (ascending)</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode:
      "https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/",
  },
  {
    id: 48,
    title: "Reverse Prefix of Word",
    description: `Reverse the prefix of a word up to a given character:
    <ul>
      <li>Find the first occurrence of a character in the word</li>
      <li>Reverse the prefix up to and including that character</li>
      <li>If the character doesn't exist, return the original word</li>
      <li>Input: A word and a character</li>
      <li>Output: Word with reversed prefix</li>
      <li>Example: "abcdefd", 'd' → Reverse "abcd" → "dcba" + "efd" = "dcbaefd"</li>
    </ul>`,
    category: "string",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/reverse-prefix-of-word/",
  },
  {
    id: 49,
    title: "Replace Elements by Rank in Array",
    description: `Replace each element of an array by its rank:
    <ul>
      <li>The rank is the position of an element if the array were sorted</li>
      <li>If multiple elements have the same value, they get the same rank</li>
      <li>Ranks should be consecutive (no gaps)</li>
      <li>Input: An array of integers</li>
      <li>Output: Array with elements replaced by their ranks</li>
      <li>Example: [40, 10, 20, 30] → Ranks: [4, 1, 2, 3] → Output: [4, 1, 2, 3]</li>
    </ul>`,
    category: "hashing",
    difficulty: "medium",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/replace-each-element-of-array-with-its-corresponding-rank/",
  },
  {
    id: 50,
    title: "Most Frequent Even Element",
    description: `Find the most frequent even element in an array:
    <ul>
      <li>If there are multiple elements with the same frequency, return the smallest one</li>
      <li>If there are no even elements, return -1</li>
      <li>Input: An array of integers</li>
      <li>Output: Most frequent even element (or -1)</li>
      <li>Example: [0,1,2,2,4,4,1] → Even elements: 0 (freq=1), 2 (freq=2), 4 (freq=2) → Return 2 (smallest among most frequent)</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/most-frequent-even-element/",
  },
  {
    id: 51,
    title: "Distribute Candies",
    description: `Determine the maximum number of different candy types a person can get:
    <ul>
      <li>There are n candies of different types (represented by integers)</li>
      <li>A person can eat at most n/2 candies</li>
      <li>Find the maximum number of different types they can consume</li>
      <li>Input: An array of integers representing candy types</li>
      <li>Output: Maximum number of different candy types</li>
      <li>Example: [1,1,2,2,3,3] → 3 types, can eat 6/2=3 candies → Answer: 3 types</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/distribute-candies/",
  },
  {
    id: 52,
    title: "Find the Difference",
    description: `Find the letter that was added to string t which was not in string s:
    <ul>
      <li>String t is generated by shuffling string s and adding one more letter</li>
      <li>Find the letter that was added</li>
      <li>Input: Two strings s and t</li>
      <li>Output: The added letter</li>
      <li>Example: s="abcd", t="abcde" → Added letter: 'e'</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/find-the-difference/",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/find-one-extra-character-string/",
  },
  {
    id: 53,
    title: "Count Vowel Substrings of a String",
    description: `Count the number of substrings that contain all vowels:
    <ul>
      <li>A vowel substring contains all five vowels 'a', 'e', 'i', 'o', 'u' at least once</li>
      <li>The vowels can appear in any order and can be repeated</li>
      <li>Input: A string</li>
      <li>Output: Number of vowel substrings</li>
      <li>Example: "aeiou" → 1 vowel substring: "aeiou"</li>
    </ul>`,
    category: "hashing",
    difficulty: "medium",
    leetcode:
      "https://leetcode.com/problems/count-vowel-substrings-of-a-string/",
  },
  {
    id: 54,
    title: "Kth Distinct String in an Array",
    description: `Find the kth distinct string in an array:
    <ul>
      <li>A distinct string appears exactly once in the array</li>
      <li>Return the kth distinct string (1-indexed)</li>
      <li>If fewer than k distinct strings exist, return an empty string</li>
      <li>Input: An array of strings and an integer k</li>
      <li>Output: The kth distinct string or empty string</li>
      <li>Example: ["d","b","c","b","c","a"], k=2 → Distinct strings: "d", "a" → 2nd distinct: "a"</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/kth-distinct-string-in-an-array/",
  },
  {
    id: 55,
    title: "Set Mismatch",
    description: `Find the number that occurs twice and the number that is missing in an array:
    <ul>
      <li>The array contains integers from 1 to n, with one duplicate and one missing</li>
      <li>Find both the duplicate and the missing number</li>
      <li>Input: An array of integers</li>
      <li>Output: Array [duplicate, missing]</li>
      <li>Example: [1,2,2,4] → Duplicate: 2, Missing: 3 → Output: [2,3]</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/set-mismatch/",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/",
  },
  {
    id: 56,
    title: "Unique Morse Code Words",
    description: `Count the number of different transformations of words to Morse code:
    <ul>
      <li>Each letter can be represented in Morse code (a=.-,b=-...,etc.)</li>
      <li>Transform each word to its Morse code representation</li>
      <li>Count the number of unique Morse code sequences</li>
      <li>Input: An array of words</li>
      <li>Output: Number of unique Morse code transformations</li>
      <li>Example: ["gin", "zen", "gig", "msg"] → 2 unique transformations</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/unique-morse-code-words/",
  },
  {
    id: 57,
    title: "Most Common Word",
    description: `Find the most frequent word that is not banned:
    <ul>
      <li>Words are case-insensitive</li>
      <li>Ignore punctuation (.,!?';)</li>
      <li>Find the most frequent word that is not in the banned list</li>
      <li>Input: A paragraph string and an array of banned words</li>
      <li>Output: Most common non-banned word</li>
      <li>Example: "Bob hit a ball, the hit BALL flew far after it was hit.", banned=["hit"] → Most common: "ball"</li>
    </ul>`,
    category: "hashing",
    difficulty: "easy",
    leetcode: "https://leetcode.com/problems/most-common-word/",
  },
];

export const Categories = [
  { id: 1, name: "if-else" },
  { id: 2, name: "loop" },
  { id: 3, name: "array" },
  { id: 4, name: "string" },
  { id: 5, name: "hashing" },
];

export const Difficulties = [
  { id: 1, name: "easy" },
  { id: 2, name: "medium" },
  { id: 3, name: "hard" },
];
