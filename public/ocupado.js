function ocupado(){

    swal({
        title: "¿Estás seguro?",
        text: "Una vez que se elimine, no podrás recuperar este archivo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("¡El archivo ha sido eliminado!", {
            icon: "success",
          });
        } else {
          swal("¡El archivo no ha sido eliminado!");
        }
      });
      

}
ocupado();