$(function () {
    $(".tombolTambahData").on("click", function () {
      $("#judulModal").html("Tambah Data Mahasiswa");
      $(".modal-footer button[type=submit]").html("Tambah Data");
    });
  
    $(".tampilModalUbah").on("click", function () {
      $("#judulModal").html("Ubah Data Mahasiswa");
      $(".modal-footer button[type=submit]").html("Ubah Data");
      $(".modal-body form").attr(
        "action",
        "http://localhost/Prakweb2024_C_223040016_MVC/public/mahasiswa/ubah"
      );
  
      const id = $(this).data("id");
  
      $.ajax({
        url: "http://localhost/Prakweb2024_C_223040016_MVC/public/mahasiswa/getubah",
        data: { id: id },
        method: "post",
        dataType: "json",
        success: function (data) {
          $("#nama").val(data.nama);
          $("#nrp").val(data.nrp);
          $("#jurusan").val(data.jurusan);
          $("#id").val(data.id);
        },
      });
    });
  });