$(document).ready(function () {
  $('.data').click(function () {
    let isi = $(this).text();
    let tid = $(this).prop('id');
    let rid = tid.split('__');
    let id_baris = rid[1];
    let nama = $('#nama__' + id_baris).text();
    let alamat = $('#alamat__' + id_baris).text();

    if (isi == 'Delete') {
      let iya = confirm('Hapus data ' + nama + '?');
      if (!iya) return;

      $('#baris__' + id_baris).fadeOut();
    } else {
      alert('Atas nama ' + nama + ' beralamat di ' + alamat);
    }
  });
});
