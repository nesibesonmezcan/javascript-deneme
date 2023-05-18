const ocPrivacy = new bootstrap.Offcanvas('#ocPrivacy');
const isPrivacyPolicyAccepteded= localStorage.getItem("privacy-policy")
!isPrivacyPolicyAccepteded&& ocPrivacy.show()
ocPrivacy.show();
document.getElementById("btnAcceptPrivacy").addEventListener("click", ()=>{
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
}); 