// Write your cade below:
function main(sys,user) {
    let [num_a,num_b]=[0,0];
    
    for( let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(sys[i] ===user[j]){
                if(i===j){
                    num_a++
                }else{
                    num_b++;
                }
                
            }
        }
    }
    return `${num_a}A${num_b}B`
};

module.exports = main