$(document).ready(function() {
    $("#bookBtn").click(function() {
        var name = $("#name").val();
        var date = $("#date").val();
        var seats = $("#seats").val();

        if (seats === "3") {
            $("#reservationForm").append('<br><label for="member1">Member 1:</label><input type="text" id="member1" name="member1"><br><br><label for="member2">Member 2:</label><input type="text" id="member2" name="member2"><br><br><label for="member3">Member 3:</label><input type="text" id="member3" name="member3"><br><br><button type="button" id="submitBtn">Submit</button>');
            $("#bookBtn").attr("disabled", true);
        } else {
            alert("Please select 3 seats to book tickets.");
        }
    });

    $(document).on("click", "#submitBtn", function() {
        var name = $("#name").val();
        var date = $("#date").val();
        var seats = $("#seats").val();
        var member1 = $("#member1").val();
        var member2 = $("#member2").val();
        var member3 = $("#member3").val();

        var message = "Reservation Details\nName: " + name + "\nDate: " + date + "\nNo of Seats: " + seats + "\nMember 1: " + member1 + "\nMember 2: " + member2 + "\nMember 3: " + member3;
        alert(message);
    });
});