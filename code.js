function tfib(n, f1 = 0, f2 = 1){
    // function is declared with two accumulators, one representing the first base case = 0, one representing the second base case = 1
    // these accumulators are adjusted throughout the recursive call, following the formula of a fibonacci sequence as the first number in each case was the second number in the last
    // for the first base case, return 0
    if(n == 0){
        return 0;
    }
    // for the second, return 1
    else if(n == 1){
        return 1;
    }
    // for all others, recursively call tfib where n is decremented to get closer to the eventual base cases, and accumulates the values
    else{
        return tfib(n-1,f2,f1+f2);
    }
}
