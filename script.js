var dataForm = {
  name: "",
  email: "",
  role: "",
  company: "",
  number: "",
};

// Link de compartilhamento do Código.gs da planilha
var script_url =
  "https://script.google.com/macros/s/AKfycbxITseKeLWXQr1Drb6xvXRuV_-0XxSMEKh_Rvq-Wx2RnPmNWAEa7eyd7wz5EqKSfOPG/exec";
var emailcheck = false;

// função para envio dos dados para a planilha
function insert_value() {
  var name = dataForm.name;
  var email = dataForm.email;
  var number = dataForm.number;
  var role = dataForm.role;
  var company = dataForm.company;

  console.log(name);
  var url =
    script_url +
    "?callback=ctrlq&name=" +
    name +
    "&number=" +
    number +
    "&role=" +
    role +
    "&company=" +
    company +
    "&email=" +
    email +
    "&action=insert";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
}

var formbtn = document.getElementById("formbtn");
var form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const formName = document.getElementById("formName");
  const formEmail = document.getElementById("formEmail");
  const formNumber = document.getElementById("formNumber");
  const formRole = document.getElementById("formRole");
  const formCompany = document.getElementById("formCompany");

  dataForm["name"] = formName.value;
  dataForm["email"] = formEmail.value;
  dataForm["number"] = formNumber.value;
  dataForm["role"] = formRole.value;
  dataForm["company"] = formCompany.value;

  insert_value(); // chamada para a função de inserção de dados

  formbtn.style.pointerEvents = "none";
  formbtn.style.backgroundColor = "lightgray";

  alert(
    "Obrigado pela paciência " +
      dataForm.name +
      ",\nLogo entraremos em contato!"
  );

  event.preventDefault();
});

var formbtn2 = document.getElementById("formbtn2");
var form2 = document.getElementById("form2");

form2.addEventListener("submit", (event) => {
  const formName2 = document.getElementById("formName2");
  const formEmail2 = document.getElementById("formEmail2");
  const formNumber2 = document.getElementById("formNumber2");
  const formRole2 = document.getElementById("formRole2");
  const formCompany2 = document.getElementById("formCompany2");

  dataForm["name"] = formName2.value;
  dataForm["email"] = formEmail2.value;
  dataForm["number"] = formNumber2.value;
  dataForm["role"] = formRole2.value;
  dataForm["company"] = formCompany2.value;

  insert_value();

  formbtn2.style.pointerEvents = "none";
  formbtn2.style.backgroundColor = "lightgray";

  alert(
    "Obrigado pela paciência " +
      dataForm.name +
      ",\nLogo entraremos em contato!"
  );

  event.preventDefault();
});
