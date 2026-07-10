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
    const employees = await Employee.find().sort({ createdAt: -1 });

    console.log(employees);

    res.status(200).json(employees);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const id = req.params.id;

    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {

    const id = req.params.id;

    const employee = await Employee.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json(employee);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
module.exports ={createEmployee, getEmployees, getEmployeeById, updateEmployee};