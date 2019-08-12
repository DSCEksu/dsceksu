$('#memberForm').on('submit', function(event) {
  if (event.isDefaultPrevented()) {
    formError();
    submitMSG(false, "Did you fill in the form properly?");
  } else {
    event.preventDefault();
    submitForm();
  }
})

function submitForm(){
  $("#loader").show();

  var inputEmail = ($("#input-email").val());
  var inputName = ($("#input-name").val());
  var inputGender = ($("#input-gender").val());
  var inputPhone = ($("#input-phone").val());
  var inputFaculty = ($("#input-faculty").val());
  var inputDepartment = ($("#input-department").val());
  var inputLevel = ($("#input-level").val());
  var inputStack = ($("#input-stack").val());
  var inputCategory = ($("#input-category").val());

  var db = firebase.firestore();

  if(($("#input-category").val()) === 'novice') {
    db.collection('Novice Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-category").val()) === 'beginner') {
    db.collection('Beginner Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }
  
  if(($("#input-category").val()) === 'intermediate') {
    db.collection('Intermediate Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }
  
  if(($("#input-stack").val()) === 'mobile-development') {
    db.collection('Mobile Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-stack").val()) === 'web-frontend') {
    db.collection('Frontend Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-stack").val()) === 'web-backend') {
    db.collection('Backend Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }
  
  if(($("#input-stack").val()) === 'blockchain') {
    db.collection('Blockchain Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-stack").val()) === 'android-development') {
    db.collection('Andriod Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-stack").val()) === 'web-framework-laravel') {
    db.collection('Laravel Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }
  
  if(($("#input-stack").val()) === 'web-framework-django') {
    db.collection('Django Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-stack").val()) === 'digital-design') {
    db.collection('Digital Design Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }
  
  if(($("#input-stack").val()) === 'leadership-skills') {
    db.collection('Leadership Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  } 
  
  if(($("#input-gender").val()) === 'Male') {
    db.collection('Male Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }
  
  if(($("#input-gender").val()) === 'Female') {
    db.collection('Female Members').doc(inputEmail).set({
      Email: inputEmail,
      Name: inputName,
      Gender: inputGender,
      Phone: inputPhone,
      Faculty: inputFaculty,
      Department: inputDepartment,
      Level: inputLevel + ' Level',
      Stack: inputStack,
      Category: inputCategory,
    })
  }

  db.collection('Members').doc(inputEmail).set({
    Email: inputEmail,
    Name: inputName,
    Gender: inputGender,
    Phone: inputPhone,
    Faculty: inputFaculty,
    Department: inputDepartment,
    Level: inputLevel + ' Level',
    Stack: inputStack,
    Category: inputCategory,
  })
  .then(function() {
    alert('welcome to DSC EKSU ' + inputName + '. Your membership has been registered to learn ' + inputStack)
    formSuccess();
  })
  .catch(function(error) {
    formError();
    submitMSG(false,error);
  });

  $("#loader").hide();
}

function formSuccess(){
  $("#memberForm")[0].reset();
  submitMSG(true, "Your payment was sent successfully")
}

function formError(){
  $("#memberForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
}

function submitMSG(valid, msg){
  if(valid){
    var msgClasses = "h3 text-left tada animated text-success";
  } else {
    var msgClasses = "h3 text-left text-danger";
  }
  $("#memeberSubmit").removeClass().addClass(msgClasses).text(msg);
}
