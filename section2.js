// Section 2 - Big O Notiation

// Video 7 - Timing Our Code

// So in this video or section we are learning to time our code. We will first define a function which will take x amount of time. 
// Then we will use the performance.now() function to take the time before and after the execution of the function. 
// This gives us the time before the fn was executed and after execution also gives us the time after fn was executed. 
// then we can just subtract the t1 from t2. This will give us how long the function took to execute.
// e.g. if t1 runs @ 17:00:00 PM then we make dinner and after dinner we clock the time (t2) @ 17:30:00
// then we know it took 30 mins to cook dinner.

const addUpTo = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  };
  return total;
}