// Step 1. Declare variable n = 1.
// Step 2. See if n divided by each of all the numbers from 1 to maxNum (UserInput) has no remainder.
// Step 3. If it is, return n.
// Step 4. If it is not, break.


function oneToTwenty(maxNum)
{

    let n =1;
    let shouldBreak = false;
    while(!shouldBreak){
        for(let y = 2; y<=maxNum;y++)
        {
            if(n % y !==0)
            {
                n++;
                break;
            }
            if(y == maxNum)
            {
                shouldBreak = true;
            }
        
        }
        
    }
    return n
    
    
}

const theNumber = oneToTwenty(20);

console.log(theNumber);