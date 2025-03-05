/* জাভাস্ক্রিপ্ট কোড শুরু */

/* সাইনআপ এবং সাইনইন বোতামের জন্য ভ্যারিয়েবল সেট করা হয়েছে */
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

/* সাইন ইন বোতামে ক্লিক করলে */
signinBtn.onclick = function(){
    nameField.style.maxHeight = "0"; // নাম ফিল্ড লুকিয়ে ফেলা হবে
    title.innerHTML = "Sign In"; // শিরোনাম পরিবর্তন হবে
    signupBtn.classList.add("disable"); // সাইন আপ বোতাম নিষ্ক্রিয় হবে
    signinBtn.classList.remove("disable"); // সাইন ইন বোতাম সক্রিয় হবে
}

/* সাইন আপ বোতামে ক্লিক করলে */
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px"; // নাম ফিল্ড প্রদর্শিত হবে
    title.innerHTML = "Sign Up"; // শিরোনাম পরিবর্তন হবে
    signupBtn.classList.remove("disable"); // সাইন আপ বোতাম সক্রিয় হবে
    signinBtn.classList.add("disable"); // সাইন ইন বোতাম নিষ্ক্রিয় হবে
}