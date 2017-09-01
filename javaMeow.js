/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $("#aboutUsSelect").click(function () {
        $("#aboutUsBox").show();
        $("#menuBox").hide();
        $("#locationBox").hide();
    });
    $("#menuSelect").click(function () {
        $("#menuBox").show();
        $("#aboutUsBox").hide();
        $("#locationBox").hide();
    });
    $("#locationSelect").click(function () {
        $("#locationBox").show();
        $("#aboutUsBox").hide();
        $("#menuBox").hide();
    });
});
