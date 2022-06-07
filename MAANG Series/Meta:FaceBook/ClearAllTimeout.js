// Optimal Approach
export const TIMER_UTIL = {
    timerArr: [],
    setTimeout: function(fn, delay){
        const id = setTimeout(fn, delay);
        this.timerArr.push(id);
    },
    clearTimeout: function(){
        while(this.timerArr.length){
            clearTimeout(this.timerArr.pop())
        }
    }
}
TIMER_UTIL.setTimeout(() => console.log('First timer'), 1000)
TIMER_UTIL.setTimeout(() => console.log('Second timer'), 1000)
TIMER_UTIL.clearTimeout();



// Sub-optimal Approach
/**
 * 
var timerArr = [];
const timer1 = setTimeout(() => {
    console.log('Inside timer 1');
}, 1000);
console.log('timer1 is ' + timer1);
timerArr.push(timer1);

const timer2 = setTimeout(() => {
    console.log('Inside timer 2');
}, 1000);
console.log('timer1 is ' + timer1);
timerArr.push(timer2);

while(timerArr.length){
    clearTimeout(timerArr.pop())
}
 */
