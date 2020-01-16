const employees = [
  { emp_no: 1, emp_name: "Ali", salary: 2500, reports_to: 106 },
  { emp_no: 2, emp_name: "Kadhim", salary: 3000, reports_to: 105 },
  { emp_no: 3, emp_name: "Bob", salary: 25000, reports_to: 109 },
  { emp_no: 4, emp_name: "Jay", salary: 25000, reports_to: 107 },
  { emp_no: 5, emp_name: "Vee", salary: 25000, reports_to: 101 },
  { emp_no: 6, emp_name: "Ivo", salary: 25000, reports_to: 102 },
  { emp_no: 7, emp_name: "Borg", salary: 25000, reports_to: 104 },
  { emp_no: 8, emp_name: "May", salary: 25000, reports_to: 103 },
  { emp_no: 9, emp_name: "Akbar", salary: 25000, reports_to: 106 },
  { emp_no: 10, emp_name: "Stanley", salary: 25000, reports_to: 105 }
];
const departments = [
  { dept_no: 200, dept_name: "Finance & Accounting", manager: 100 },
  { dept_no: 201, dept_name: "H.R.", manager: 101 },
  { dept_no: 202, dept_name: "Contracts", manager: 102 },
  { dept_no: 203, dept_name: "Purchasing", manager: 103 },
  { dept_no: 204, dept_name: "Planning", manager: 104 },
  { dept_no: 205, dept_name: "Technical", manager: 105 },
  { dept_no: 206, dept_name: "IT", manager: 106 },
  { dept_no: 207, dept_name: "Maintenace", manager: 107 },
  { dept_no: 208, dept_name: "Development", manager: 108 },
  { dept_no: 209, dept_name: "Production", manager: 109 }
];
const projects = [
  {
    proj_no: "463",
    proj_name: "Project Moon Base",
    starting_date: "2013-04-15",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "670",
    proj_name: "Lazarus Project",
    starting_date: "2017-10-27",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "282",
    proj_name: "Project Prometheus",
    starting_date: "2001-07-09",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "357",
    proj_name: "Project Dinosaur",
    starting_date: "2018-06-01",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "931",
    proj_name: "Hank Project",
    starting_date: "2010-05-18",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "184",
    proj_name: "Project Burly Man",
    starting_date: "2007-09-30",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "544",
    proj_name: "Project Blue Beam",
    starting_date: "2012-03-11",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "229",
    proj_name: "Project B",
    starting_date: "2013-04-22",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "438",
    proj_name: "Project A",
    starting_date: "2016-06-26",
    ending_date: "2021-01-11"
  },
  {
    proj_no: "733",
    proj_name: "Project S",
    starting_date: "2019-03-13",
    ending_date: "2021-11-11"
  }
];
module.exports = {
  employees,
  departments,
  projects
};
