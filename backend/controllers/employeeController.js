const Employee = require("../models/Employee");
const createEmployee = async(req,res)=>{
try{
 const employee= await Employee.create(req.body);
 res.status(201).json(employee);

}
catch(error){
res.status(500).json({
    message: error.message
});
}
};

const getEmployees = async (req, res) => {
  console.log("✅ getEmployees controller called");

  try {
    const employees = await Employee.find();

    console.log(employees);

    res.status(200).json(employees);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports ={createEmployee, getEmployees};