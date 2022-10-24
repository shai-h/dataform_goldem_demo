/*
* The function ageBucket() takes as input the name of the age field and returns a CASE statement that maps ages age buckets
* You can learn more about functions on https://cloud.google.com/dataform/docs/reuse-code-includes
*/

function CreateBiglake(name, uris) {

 return `call dataform_demo.create_biglake_table(${name},"${uris}")`;
}

module.exports = {
 CreateBiglake
};