$("document").ready(function() {
    jQuery('.datepicker').datepicker({
        autoclose: true,
        todayHighlight: true,
        format: "yyyy-mm-dd"
    });

    $("#pdf-attachment").change(function(){
		var files = "";
		const types = ['pdf', 'jpg', 'jpeg', 'png']; 
		var filenames = "";
		
		if(this.files.length > 0){
			for (var i = 0; i < this.files.length; ++i) {
			  	var name = this.files.item(i).name;
			  	var size = this.files.item(i).size;
			  	var filetype = name.split('.').pop();
			  	classes = "";
			  	if(!types.includes(filetype)){
			  		files += "<li class='new text-danger'>"+name+" : 無効なファイル</li>";
			  		classes = "alert alert-danger' style='margin:5px 0;padding:5px 15px;";
			  	}else if(size > 30000000){
			  		files += "<li class='new text-danger'>"+name+" : 30MBを超えるファイルサイズ</li>";
			  		classes = "alert alert-danger' style='margin:5px 0;padding:5px 15px;";
			  	}else{
			  		files += "<li class='new text-info'>"+ name + "</li>";
			  		classes = "alert alert-success text-info' style='margin:5px 0;padding:5px; padding-top:10px;";
			  	}
			}
			filenames = "<div class='"+classes+"'>";
			filenames += 	"<label class='bold'>ファイル : </label>";
			filenames +=		"<ul style='margin:5px;'>";
			filenames +=			files;
			filenames +=		"</ul>";
			filenames += "</div>";
		}else{

		}
		if($("#ul-pdf-list").length){
			if(this.files.length){
				if($("#ul-pdf-list .new").length){
					$("#ul-pdf-list .new").remove();	
				}
				$("#ul-pdf-list").append(files);	
			}else{
				$("#ul-pdf-list .new").remove();	
			}

		}else{
			$('.div-list').html(filenames);
		}

		
	});
	$(".delete-attachs").click(function(e){
		e.preventDefault();
		var attachID = $(this).attr("data-attachID");
		$("#attachment_id").val(attachID);
		if(confirm('添付ファイルは完全に削除されますので、ご確認ください。')){
			$('#delete-attach').submit();
		}
	});
});