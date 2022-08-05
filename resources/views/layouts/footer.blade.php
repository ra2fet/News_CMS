<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
<!-- JavaScript Bundle with Popper -->
{{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> --}}
{{-- <script src="{{asset('js/bootstrap.js')}}"></script> --}}
{{-- <script src="{{asset('js/main.js')}}"></script>
<script src="{{asset('js/popper.js')}}"></script> --}}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"></script>


<script>
  $('.will-delete').click(function(event){

var form =  event.target.closest("form");
console.log(form);

event.preventDefault();

Swal.fire({
title: '',
text: "Are you sure want to delete this?",
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
cancelButtonText: "Cancel",
confirmButtonText: "Yes"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      "",
      "Deleted successfully",
      'success'
    )
    form.submit();
  }
});
});
</script>
<script>
 $(document).ready(function() {

  $('#default').DataTable();

   $('li.active').removeClass('active').removeAttr('aria-current');
    $('a[href$="' + location.pathname + '"]').addClass('active');
});
</script>
{{-- 
<div class="footer pt-1">
    <p>News CMS Footer</p>
  </div> --}}
</body>
</html>
