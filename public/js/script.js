$(function(){
	$('#editModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var marque = button.data('marque');
		var modele = button.data('modele');
		var date_service = button.data('date_service');
		var lieu = button.data('lieu');
		var bassin = button.data('bassin');
        var numeroserie = button.data('numeroserie');
        var description_edit = button.data('description_edit');
        var id = button.data('id');
      

		var modal = $(this);

		modal.find('#marque').val(marque);
		modal.find('#modele').val(modele);
		modal.find('#date_service').val(date_service);
		modal.find('#lieu').val(lieu);
		modal.find('#bassin').val(bassin);
        modal.find('#numeroserie').val(numeroserie);
        modal.find('#description_edit').val(description_edit);
		modal.find('#idAutomate').val(id);
		
		console.log(id)
    })

    $('#descriptionModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var marque = button.data('marque');
		var modele = button.data('modele');
		var date_service = button.data('date_service');
		var lieu = button.data('lieu');
		var bassin = button.data('bassin');
        var numeroserie = button.data('numeroserie');
        var description = button.data('description');
        var id = button.data('id');
      

		var modal = $(this);

		modal.find('#marqueDesc').text(marque);
		modal.find('#modeleDesc').text(modele);
		modal.find('#dateDesc').text(date_service);
		modal.find('#lieuDesc').text(lieu);
		modal.find('#bassinDesc').text(bassin);
        modal.find('#numserieDesc').text(numeroserie);
        modal.find('#Desc').text(description);
        modal.find('#id_AutomateDesc').text(numeroserie);

		console.log(numeroserie)
    })
    $('#create-form').submit(function() {
        $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
        $('#messages_content').html('<p class="lead"> Nouvel automate crée !</p>');
        
    });
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
    });

