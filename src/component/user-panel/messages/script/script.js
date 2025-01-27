export const executeScript = () => {
  if (!$.fn.dataTable.isDataTable('#messages-table')) {
    $('#messages-table').DataTable({
      paging: true,
      lengthChange: false,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: false,
      responsive: true,
    });
  }
}