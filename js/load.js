$(document).ready(function(){
	$("#n-page-c").hide();
	$("#n-page-p").hide();
	$("#n-page-s").hide();
	var url_ch = "lib/lib-ch.php";
	var url_pl = "lib/lib-pl.php";
	var url_ss = "lib/lib-ss.php";
	function load_page(num,urls){
		$.ajax({
			type: "GET",
			url: urls+"?id="+num,
			cache: false,
			timeout:60000,
			success: function(msg){
				$("#overview").html(msg);
			}
		});
	}
	//for characters
	$("#ch").click(function(){
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(1,url_ch);
		$("#n-page-c").show(1000);
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg1").click(function(){
		var id=1;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg2").click(function(){
		var id=2;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg3").click(function(){
		var id=3;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg4").click(function(){
		var id=4;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg5").click(function(){
		var id=5;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg6").click(function(){
		var id=6;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg7").click(function(){
		var id=7;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg8").click(function(){
		var id=8;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg9").click(function(){
		var id=9;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	$("#pg10").click(function(){
		var id=10;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ch);
		$("#n-page-c").show();
		$("#n-page-p").hide();
		$("#n-page-s").hide();
	});
	
	//for planets
	$("#pl").click(function(){
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(1,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show(1000);
		$("#n-page-s").hide();
	});
	$("#pgp1").click(function(){
		var id=1;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp2").click(function(){
		var id=2;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp3").click(function(){
		var id=3;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp4").click(function(){
		var id=4;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp5").click(function(){
		var id=5;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp6").click(function(){
		var id=6;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp7").click(function(){
		var id=7;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp8").click(function(){
		var id=8;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp9").click(function(){
		var id=9;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	$("#pgp10").click(function(){
		var id=10;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_pl);
		$("#n-page-c").hide();
		$("#n-page-p").show();
		$("#n-page-s").hide();
	});
	
	//for starships
	$("#ss").click(function(){
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(2,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show(1000);
	});
	$("#pgs1").click(function(){
		var id=3;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs2").click(function(){
		var id=5;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs3").click(function(){
		var id=9;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs4").click(function(){
		var id=10;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs5").click(function(){
		var id=11;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs6").click(function(){
		var id=12;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs7").click(function(){
		var id=13;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs8").click(function(){
		var id=15;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs9").click(function(){
		var id=17;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
	$("#pgs10").click(function(){
		var id=21;
		$("#overview").html("<img src='images/loading.gif'>");
		load_page(id,url_ss);
		$("#n-page-c").hide();
		$("#n-page-p").hide();
		$("#n-page-s").show();
	});
});