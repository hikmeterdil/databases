const employees = [
  { full_name: 'Alim Bodas', salary: 2500, address: 'Utrecht', manager: 1, dept_no: 2 },
  { full_name: "Kobra Takip", salary: 3000, address: 'B', manager: 2, dept_no: 1 },
  { full_name: "Bob Mossey", salary: 25000, address: 'C', manager: 3, dept_no: 5 },
  { full_name: "Jay Jay", salary: 25000, address: 'D', manager: 4, dept_no: 3 },
  { full_name: "Vee Nee", salary: 25000, address: 'E', manager: 1, dept_no: 5 },
  { full_name: "Ivo Bro", salary: 25000, address: 'F', manager: 2, dept_no: 7 },
  { full_name: "Borg Xerg", salary: 25000, address: 'G', manager: 3, dept_no: 6 },
  { full_name: "May June", salary: 25000, address: 'A', manager: 3, dept_no: 8 },
  { full_name: "Akbar Genera", salary: 25000, address: 'B', manager: 2, dept_no: 9 },
  { full_name: "Stanley Metric", salary: 25000, address: 'C', manager: 4, dept_no: 2 },
  { full_name: "Sosy Sos", salary: 25000, address: 'C', manager: 1, dept_no: 1 },
  { full_name: "Sarkozy Erdo", salary: 25000, address: 'C', manager: 1, dept_no: 9 },
  { full_name: "Sbrarro Hut", salary: 25000, address: 'C', manager: 2, dept_no: 9 },
  { full_name: "Slick Skim", salary: 25000, address: 'C', manager: 4, dept_no: 9 },
  { full_name: "Soiuly Buily", salary: 25000, address: 'C', manager: 4, dept_no: 7 },
  { full_name: "Sissily Kleo", salary: 25000, address: 'C', manager: 3, dept_no: 7 },
  { full_name: "Sabri Out", salary: 25000, address: 'C', manager: 1, dept_no: 6 },
  { full_name: "Stanley S", salary: 25000, address: 'C', manager: 2, dept_no: 8 },
  { full_name: "Stanley A", salary: 25000, address: 'C', manager: 3, dept_no: 8 },
  { full_name: "Stanley Z", salary: 25000, address: 'C', manager: 3, dept_no: 8 },
];
const departments = [
  { description: "money and stuff", title: "Finance & Accounting", address: "1" },
  { description: "human relations", title: "H.R.", address: "2" },
  { description: "making contracts", title: "Contracts", address: "3" },
  { description: "making purchases", title: "Purchasing", address: "4" },
  { description: "planning for future", title: "Planning", address: "5" },
  { description: "technical stuff", title: "Technical", address: "6" },
  { description: "IT stuff", title: "IT", address: "A" },
  { description: "maintenance stuff", title: "Maintenace", address: "6" },
  { description: "devepoling stuff", title: "Development", address: "3" },
  { description: "producing stuff", title: "Production", address: "2" }
];
module.exports = {
  employees,
  departments,
};