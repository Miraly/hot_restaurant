$(document).ready(function(){
	var name;
	var phone;
	var email;
	var id;

	function submit() {
		$(".submit").click(function() {
			name = $("#reserve_name").val();
			phone = $("#reserve_phone").val();
    		email = $("#reserve_email").val();
    		id = $("#reserve_uniqueID").val();
		});
		console.log(name, phone, email, id);

	}
    
});