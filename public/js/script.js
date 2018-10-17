$(function(){
    $.get('/selectMarque', function (data) {
        $('#selectMarque1').append(data);
    })
    $.get('/selectType', function (data) {
        $('#selectType1').append(data);
    })


    $.get('/users/selectSites', function (data) {
        $('#selectSites1').append(data);
    });
    $.get('/users/selectBassins', function (data) {
        $('#selectBassins1').append(data);
    })
;

	$('#editModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
        var marque = button.data('marque');
		var type = button.data('type');
		var date_service = button.data('date_service');
        var serial = button.data('serial');
        var configuration = button.data('configuration');
        var id = button.data('id');
      
      

		var modal = $(this);

		modal.find('#marque').val(marque);
		modal.find('#type').val(type);
		modal.find('#date_service').val(date_service);
        modal.find('#serial').val(serial);
        modal.find('#configuration_edit').val(configuration);
		modal.find('#idAutomate').val(id);
		
		console.log(id)
    })

    $('#descriptionModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var marque = button.data('marque');
		var type = button.data('type');
		var date_service = button.data('date_service');
        var serial = button.data('serial');
        var configuration = button.data('configuration');
        var id = button.data('id');
      

		var modal = $(this);

		modal.find('#marqueDesc').text(marque);
		modal.find('#modeleDesc').text(type);
		modal.find('#dateDesc').text(date_service);
        modal.find('#numserieDesc').text(serial);
        modal.find('#Desc').text(configuration);
        modal.find('#id_AutomateDesc').text(id);

		console.log()
    })
    // $('#create-form').submit(function() {
    //     $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
    //     $('#messages_content').html('<p class="lead"> Nouvel automate crée !</p>');
        
    // });
    $('#edit-form').submit(function() {
        $('#messages_modif').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
        $('#messages_content_modif').html('<p class="lead"> Succès de la modification !</p>');
        
    });
    $('#delete-form').submit(function() {
      if (!false) {
        $('#messages_delete').removeClass('hide').addClass('alert alert-danger alert-dismissible').slideDown().show();
        $('#messages_content_delete').html('<p class="lead"> Succès de la suppression !</p>');
      }
    });

    $('#show').click(function() {
          $('#ajout_donnee').toggle("slow");
         
        
      });
      $('#show_donnee').click(function() {
        $('#consultation_donnee').toggle("slow");
       
      
    });
    });

