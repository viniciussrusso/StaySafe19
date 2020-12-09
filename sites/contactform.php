<?php
 
if (isset($_POST['submit'])) {
 $name = $_POST['name'];
 $subject = $_POST['subject'];
 $mailFrom = $_POST['mail'];
 $message = $_POST['message'];
 
 $mailTo = "x19119275@student.ncirl.ie"; // destination email
 $headers = "From: ".$mailFrom;
 $txt = "You have received an e-mail from ".$name.".\n\n".$message; // subject of the email received
 
 mail($mailTo, $subject, $txt, $headers); // the sequence of the info arriving at the destination
 header("Location: contact.html");
 
}
?>
