//home logic
const home = async(req,res)=>{
    try {
        res.send("welcome to our controller page ayushi");      
    } catch (error) {
        console.log(error);
    }
};


// const register = async (req,res)=>{
//     try {
//         res.send("welcome to register to page our controller again");
//     } catch (error) {
//         res.send({msg:'page not find '})
//     }
// }

const register = async (req,res)=>{
    try {
        console.log(req.body);
        res.json({message:req.body});
    } catch (error) {
        res.json('page not find ')
    }
}
module.exports={home,register};