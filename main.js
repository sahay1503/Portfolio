//typing animation
var typed= new Typed(".text",{
    strings:['Web Designer','Web Developer','Graphic designer',],
    typespeed:100,
    BackSpeed:100,
    backDelay:1000,
    loop:true
})
document.getElementById('myContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbwRHxdWW_yuLpfC3KL5YvqZycRKMSvKRdzCibKKSovatptVT5-tI7vMyjB9Zf29R2ql/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        console.log('Form Submitted');
        alert('Form submitted successfully!');
        this.reset();
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});


  

