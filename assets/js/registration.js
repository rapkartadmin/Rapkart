document.addEventListener('DOMContentLoaded', function() {

    const base_url = "https://api.rapkart.in/"

    const form = document.getElementById('registrationForm');
    const workshopRadios = document.querySelectorAll('input[name="workshop"]');
    const priceInput = document.getElementById('price');
    const collegeDetails = document.getElementById('collegeDetails');
    const otpInput = document.getElementById('otp');
    const otpActionBtn = document.getElementById('otpActionBtn');
    const registerButton = document.getElementById("registerButton");
    let isOtpVerified = false; // Track verification state

    const fullNameFeild = document.getElementById("name")
    const mobileFeild = document.getElementById("phone")
    const emailIdFeild = document.getElementById("email")

    const editMailBtn = document.getElementById("editMail")
    const sendOtpBtn = document.getElementById("sendOtpBtn")

    // 1. Category & Price Logic
    workshopRadios.forEach(radio => {
    radio.addEventListener('change', function() {
            const isStudent = this.value.includes('STDNT');
            priceInput.value = this.value === 'WRK_PROF' ? '750' : (this.value === 'GVT_STDNT' ? '450' : '600');
            collegeDetails.style.display = isStudent ? 'block' : 'none';
            // Clear specific college errors when switching to professional
            if(!isStudent) {
                document.getElementById("collegeNameError").innerText = "";
                document.getElementById("collegeFileError").innerText = "";
            }
        });
    });

    // Send otp
    sendOtpBtn.addEventListener('click',function(event){
        const emailReceiver = emailIdFeild.value.trim()

        // Patterns
        const namePattern = /^[A-Za-z ]+$/;
        const phonePattern = /^[6-9]\d{9}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        document.querySelectorAll(".text-danger").forEach((span,key) => (span.innerText = key<4?"":"*"));

        // Validate Core Fields
        if (!namePattern.test(document.getElementById("name").value.trim())) {
            document.getElementById("nameError").innerText = "Letters and spaces only.";
            isValid = false;
        }
        if (!phonePattern.test(document.getElementById("phone").value.trim())) {
            document.getElementById("phoneError").innerText = "Must be 10 digits.";
            isValid = false;
        }
        if (!document.querySelector('input[name="gender"]:checked')) {
            document.getElementById("genderError").innerText = "Select gender.";
            isValid = false;
        }
        if (!emailPattern.test(document.getElementById("email").value.trim())) {
            document.getElementById("emailError").innerText = "Invalid email format.";
            isValid = false;
        }

        if(!isValid){
            return
        }else{
            checkEmail(emailReceiver)
        }
    })

    function checkEmail(email){
        fetch(`${base_url}api/registration/check-email`,{
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Important
            },
            body: JSON.stringify({
                "emailId":email
            }) // Convert your data to JSON format
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // For debugging
        })
        .then(text => {
            // console.log('Response Text:', text);
            const json = text ? JSON.parse(text) : {}; // Handle empty response
            console.log('Parsed JSON:', json);

            if(json["message"]==="Email Already Verified"){
                document.getElementById("emailSuccess").innerText = "Email ID Already verified";
                isOtpVerified = true
                registerButton.disabled = false
            }else{
                // console.log("Check Email Response: ",json)
                sendOtpBtn.disabled = true;
                otpActionBtn.disabled = false;
                editMailBtn.disabled = false;
                emailIdFeild.readOnly = true;
                sendOtp();
            }
        })
        .catch((error)=>{
            // console.log("Check Email Error: ",error)
            document.getElementById("emailError").innerText = "Email ID Already exist";
        })
    }

    function sendOtp(){
        document.getElementById("emailSuccess").innerText = ""
        document.getElementById("emailError").innerText = "";
        const emailReceiver = emailIdFeild.value.trim()
        fetch(`${base_url}api/otp-mail/send-otp`,{
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Important
            },
            body: JSON.stringify({
                "email":emailReceiver
            }) // Convert your data to JSON format
            })
            .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // For debugging
            })
            .then(text => {
            // console.log('Response Text:', text);
            const json = text ? JSON.parse(text) : {}; // Handle empty response
            document.getElementById("emailSuccess").innerText = "Email Sent Check your spam folder too!"
            })
            .catch((error)=>{
                document.getElementById("emailError").innerText = "Error Sending otp to your mail!";
            })
    }

    editMailBtn.addEventListener('click',function(event){
        otpActionBtn.disabled = true;
        emailIdFeild.readOnly = false;
        editMailBtn.disabled = true;
        sendOtpBtn.disabled = false;
        isOtpVerified = true;
        otpActionBtn.className = 'btn btn-primary';
        document.getElementById('otpIcon').className = 'bi bi-envelope-check-fill';
        otpInput.readOnly = false;
        otpInput.value = ""
        document.getElementById('otpError').innerText = "*";
        document.getElementById('otpStatus').innerText = "Generate OTP to verify your email";
        registerButton.disabled = true;
    })

    // 2. OTP Button Logic
    otpActionBtn.addEventListener('click', function() {
        const emailReceiver = emailIdFeild.value.trim()
        const val = otpInput.value.trim();
        if (!val) {
            otpActionBtn.className = 'btn btn-warning';
            document.getElementById('otpError').innerText = "Please enter OTP.";
            return;
        }
        // Mock verification: check if 123456
        fetch(`${base_url}api/otp-mail/verify-otp`,{
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Important
            },
            body: JSON.stringify({
                "email":emailReceiver,
                "otp":val
            }) // Convert your data to JSON format
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text(); // For debugging
            })
            .then(text => {
                console.log('Response Text:', text);
                const json = text ? JSON.parse(text) : {}; // Handle empty response
                isOtpVerified = true;
                otpActionBtn.className = 'btn btn-success';
                document.getElementById('otpIcon').className = 'bi bi-check-circle text-white';
                otpInput.readOnly = true;
                document.getElementById('otpError').innerText = "";
                document.getElementById('otpStatus').innerText = "Verified!";
                registerButton.disabled = false;
            })
            .catch((error)=>{
                otpActionBtn.className = 'btn btn-danger';
                document.getElementById('otpIcon').className = 'class="bi bi-x-circle';
                document.getElementById('otpError').innerText = "Invalid OTP";
            })

    });

    // 3. Final Submission Validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset all errors
        document.querySelectorAll(".text-danger").forEach(span => span.innerText = "");

        if (!isOtpVerified) {
            document.getElementById("otpError").innerText = "Verify OTP first.";
            isValid = false;
        }

        // Validate Student Fields (if active)
        const selectedWorkshop = document.querySelector('input[name="workshop"]:checked');
        if (!selectedWorkshop) {
            document.getElementById("workshopError").innerText = "Select a Category.";
            isValid = false;
        } else if (selectedWorkshop.value !== "WRK_PROF") {
            const nameRegex = /^[A-Za-z\s]+$/;
            const cName = document.getElementById("collegeName").value.trim();
            const cFile = document.getElementById("collegeIdFile").files[0];

            if (!cName || !nameRegex.test(cName)) {
                document.getElementById("collegeNameError").innerText = "College name is either empty or invalid";
                isValid = false;
            }
            if (!cFile) {
                document.getElementById("collegeFileError").innerText = "ID card required.";
                isValid = false;
            } else if (cFile.size > 2 * 1024 * 1024) {
                document.getElementById("collegeFileError").innerText = "File must be under 2MB.";
                isValid = false;
            }
        }

        if (isValid) {
            // alert("Success! Redirecting to payment...");
            let parName = fullNameFeild.value.trim()
            let parGender = document.querySelector('input[name="gender"]:checked').value.trim()
            let parMobile = mobileFeild.value.trim()
            let parEmail = emailIdFeild.value.trim()
            let parCategory = document.querySelector('input[name="workshop"]:checked').value.trim();
            let parTotalAmt = Number(priceInput.value.trim())

            let parColgName = ""
            let parColgFile = null;

            if(parCategory !== "WRK_PROF"){
                parColgName = document.getElementById("collegeName").value.trim();
                parColgFile = document.getElementById("collegeIdFile").files[0];
            }

            let hashjson = {
                "userName":parName,
                "userEmail":parEmail,
                "userAmount":parTotalAmt.toFixed(2),
                "userMobile":parMobile
            }

            let submitData = new FormData()

            submitData.append("fullName",parName)
            submitData.append("gender",parGender)
            submitData.append("mobileNumber",parMobile)
            submitData.append("emailId",parEmail)
            submitData.append("category",parCategory)
            submitData.append("totalAmount",parTotalAmt)

            if(parCategory !== "WRK_PROF"){
                submitData.append("colgName",parColgName)
                submitData.append("idProof",parColgFile)
            }

            fetch(`${base_url}api/registration/create-reg`, {
                method: 'POST', // Specify the HTTP method
                body: submitData // Convert your data to JSON format
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text(); // For debugging
            })
            .then(text => {
                // console.log('Response Text:', text);
                const json = text ? JSON.parse(text) : {}; // Handle empty response
                console.log('Parsed JSON:', json);
                fetchHashCode(hashjson)

            })
            .catch(error => {
                console.log("error:",error)
                // changeSteps("form_failure")
            });

        }
    });

    const fileInput = document.getElementById("collegeIdFile");

    fileInput.addEventListener("change", () => {
        document.getElementById("labelFileName").innerText="Upload College ID Card"
        document.getElementById("collegeFileSuccess").innerText=""
        document.getElementById("collegeFileError").innerText="*"
    const file = fileInput.files[0];

    const MAX_SIZE = 2 * 1024 * 1024; // 2MB
    const ALLOWED_TYPES = [
        "application/pdf",
        "image/jpeg",
        "image/png",
    ];

    // No file selected
    if (!file) return;

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
        document.getElementById("collegeFileError").innerText="Only PDF, JPG, and PNG files are allowed"
        fileInput.value = ""; // reset input
        return;
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
        document.getElementById("collegeFileError").innerText="File size must be less than 2 MB";
        fileInput.value = ""; // reset input
        return;
    }

    // Success
    // console.log("Valid file selected:", file.name);
    document.getElementById("labelFileName").innerText=file.name
    document.getElementById("collegeFileSuccess").innerText="ID Proof Uploaded Successfully";
    });


    function genTransId(){
        const timeStamp = new Date().getTime()
        const randomNum = Math.floor(Math.random() * 1000000)
        const merchantPrefix = "RPKT26"
        const transactionID = `${merchantPrefix}${timeStamp}${randomNum}`
        return transactionID;
    }

    function fetchHashCode(params){

        let userTransactionId = genTransId()

        const hashData = new URLSearchParams();

        hashData.append("userName",params.userName)
        hashData.append("userEmail",params.userEmail)
        hashData.append("userAmount",params.userAmount)
        hashData.append("transactionId",userTransactionId)

        fetch(`${base_url}payu/hash`,{
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Important
            },
            body: hashData // Convert your data to JSON format
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // For debugging
        })
        .then(text => {
            // console.log('Response Text:', text);
            const json = text ? JSON.parse(text) : {}; // Handle empty response
            // console.log('Parsed JSON:', json);
            console.log("Hash Response: ",json)
            paymentAction(params,json)
        })
        .catch((error)=>{
            console.log("Hash Error: ",error)
        })

    }

    function paymentAction(params,response){

        let displayName = document.getElementById("displayFirstName")
        let displayEmail = document.getElementById("displayEmailId")
        let displayAmount = document.getElementById("displayFinalAmt")

        let payFinalAmt = document.getElementById("payuFinalAmount")
        let payFirstName = document.getElementById("payuFirstName")
        let payEmailId = document.getElementById("payuEmailId")
        let payuMobileNum = document.getElementById("payuMobileNum")

        let payTransactionId = document.getElementById("payuTransId")
        let payTransactionHash = document.getElementById("payuMadfestHash")

        payTransactionHash.value = response.hash
        payTransactionId.value = response.transactionId

        displayName.value = params.userName
        displayEmail.value = params.userEmail
        displayAmount.value = params.userAmount

        payFinalAmt.value = params.userAmount
        payFirstName.value = params.userName
        payEmailId.value = params.userEmail
        payuMobileNum.value = params.userMobile

        changeSteps("checkout-page")
    }

    function changeSteps(screenAction){
        let checkout_page = document.getElementById("payment-gateway")
        let classBlockValue = "row w-100 p-2 d-block"
        checkout_page.className = classBlockValue;
        registerButton.style.display = "none"
    }

    // Empty input fields after submission or payment
    function clearForm(){
        otpInput.readOnly = false;
        isOtpVerified = false;
        otpActionBtn.className = 'btn btn-primary';
        document.getElementById('otpIcon').className = 'bi bi-send';
        document.getElementById('otpStatus').innerText = "Click the icon to send OTP.";
        document.querySelectorAll(".text-danger").forEach(span => span.innerText = "");
        document.getElementById("price").value = "";
        collegeDetails.style.display = 'none';
        document.getElementById("collegeName").value = "";
        document.getElementById("collegeIdFile").value = "";
        document.querySelectorAll('input[name="workshop"]').forEach(radio => radio.checked = radio.id === 'professional');
        document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("otp").value = "";
        otpInput.value = "";
    }
});

function cancelPayment(){
    let checkout_page = document.getElementById("payment-gateway")
    let classBlockValue = "row w-100 p-2 d-none"
    checkout_page.className = classBlockValue;
    registerButton.style.display = "block"
}