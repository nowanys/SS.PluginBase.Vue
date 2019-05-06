var swal2 = swal.mixin({
  confirmButtonClass: 'btn btn-primary',
  cancelButtonClass: 'btn btn-default ml-2',
  buttonsStyling: false,
});

swal2.success = function(title) {
  swal2({
    toast: true,
    type: 'success',
    title: title,
    showConfirmButton: false,
    timer: 2000
  });
};

swal2.alertDelete = function (config) {
	if (!config) return false;

	swal2({
		title: config.title,
		text: config.text,
		type: 'question',
		confirmButtonText: '确认删除',
		confirmButtonClass: 'btn btn-danger',
		showCancelButton: true,
		cancelButtonText: '取 消'
	}).then(function (result) {
		if (result.value) {
			config.callback();
		}
	});

	return false;
};