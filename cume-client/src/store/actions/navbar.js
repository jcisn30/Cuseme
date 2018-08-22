import $ from 'jquery'

export function activeItem() {
    return dispatch => {
        $(document).ready(function(){
        $('.ui.secondary.pointing.menu .item').on('click', function() {
      
   $(' .ui.secondary.pointing.menu .item').removeClass('active');
   $(this).addClass('active');
        })
    }
    )}       
}