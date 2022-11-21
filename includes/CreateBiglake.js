/*
The function gets CreateBiglake() takes as inpu two arguments: table name and gcs file path,
and calls a BQ stored procedure to create a biglake table 
* You can learn more about functions on https://cloud.google.com/dataform/docs/reuse-code-includes
*/

function CreateBiglake(name, uris) {

 return `call dataform_demo.create_biglake_table(${name},"${uris}")`;
}

module.exports = {
 CreateBiglake
};